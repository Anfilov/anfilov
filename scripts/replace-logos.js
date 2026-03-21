const { createClient } = require("next-sanity");
const fs = require("fs");
const path = require("path");

const client = createClient({
  projectId: "d8caxrt0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const svgDir = path.join(__dirname, "../_in/Portfolio Logo SVG");

// Skip Radio Impuls — already replaced
const SKIP_SLUGS = ["logo-radio-impuls"];

function fileToSlug(filename) {
  // "Casa-Moderna.svg" → "logo-casa-moderna"
  const name = filename.replace(/\.(svg|webp)$/, "");
  return (
    "logo-" +
    name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  );
}

async function main() {
  // 1. Get all logo files from the SVG folder
  const files = fs
    .readdirSync(svgDir)
    .filter((f) => f.endsWith(".svg") || f.endsWith(".webp"));

  console.log(`Found ${files.length} replacement files in SVG folder.\n`);

  // 2. Build a map: slug → file info
  const fileMap = new Map();
  for (const file of files) {
    const slug = fileToSlug(file);
    const ext = path.extname(file).slice(1);
    fileMap.set(slug, { file, ext });
  }

  // 3. Fetch all logo projects from Sanity
  const projects = await client.fetch(
    '*[_type=="project" && category=="logo"]{_id, title, slug, "assetId": image.image.asset._ref}'
  );
  console.log(`Found ${projects.length} logo projects in Sanity.\n`);

  let replaced = 0;
  let skipped = 0;
  let noMatch = 0;

  for (const proj of projects) {
    const slug = proj.slug?.current;

    // Skip exceptions
    if (SKIP_SLUGS.includes(slug)) {
      console.log(`⏭  SKIP (exception): ${proj.title} [${slug}]`);
      skipped++;
      continue;
    }

    // Find matching file
    const match = fileMap.get(slug);
    if (!match) {
      console.log(`❓ NO MATCH: ${proj.title} [${slug}]`);
      noMatch++;
      continue;
    }

    const { file, ext } = match;
    const filePath = path.join(svgDir, file);
    const contentType = ext === "svg" ? "image/svg+xml" : "image/webp";
    const oldAssetId = proj.assetId;

    try {
      // Upload new asset
      const imageBuffer = fs.readFileSync(filePath);
      const asset = await client.assets.upload("image", imageBuffer, {
        filename: file,
        contentType,
      });

      // Update project document
      await client
        .patch(proj._id)
        .set({
          "image.image.asset": { _type: "reference", _ref: asset._id },
        })
        .commit();

      // Delete old WebP asset
      if (oldAssetId) {
        try {
          await client.delete(oldAssetId);
        } catch (e) {
          console.log(`   ⚠  Could not delete old asset ${oldAssetId}: ${e.message}`);
        }
      }

      replaced++;
      console.log(
        `✅ [${replaced}] ${proj.title} — ${file} (${ext.toUpperCase()})`
      );
    } catch (e) {
      console.error(`❌ FAIL: ${proj.title} — ${e.message}`);
    }
  }

  console.log(
    `\n--- DONE ---\nReplaced: ${replaced}\nSkipped: ${skipped}\nNo match: ${noMatch}\nTotal projects: ${projects.length}`
  );
}

main().catch((e) => {
  console.error("Fatal error:", e);
  process.exit(1);
});
