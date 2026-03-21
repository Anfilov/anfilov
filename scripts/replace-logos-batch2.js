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

// Manual slug → file mapping for the 11 new files
const MANUAL_MAP = {
  "nq-safe": "NQ-Safe.webp",
  "edenio": "Edenio.webp",
  "delibib": "DeliBib.webp",
  "colegium-holding": "Colegium-Holding.webp",
  "6-firms": "6firms.webp",
  "knivu": "Knivu.webp",
  "lucifera": "Lucifera.webp",
  "sane": "SANE.webp",
  "totosoft": "Totosoft.webp",
  "olivastri": "Olivastri.webp",
  "energoprojekt": "Energoprojekt.webp",
};

async function main() {
  const slugs = Object.keys(MANUAL_MAP);

  const projects = await client.fetch(
    `*[_type=="project" && slug.current in $slugs]{_id, title, slug, "assetId": image.image.asset._ref}`,
    { slugs }
  );

  console.log(`Found ${projects.length} projects to fix.\n`);

  let replaced = 0;

  for (const proj of projects) {
    const slug = proj.slug?.current;
    const file = MANUAL_MAP[slug];
    if (!file) continue;

    const ext = path.extname(file).slice(1);
    const filePath = path.join(svgDir, file);
    const contentType = ext === "svg" ? "image/svg+xml" : "image/webp";
    const oldAssetId = proj.assetId;

    try {
      const imageBuffer = fs.readFileSync(filePath);
      const asset = await client.assets.upload("image", imageBuffer, {
        filename: file,
        contentType,
      });

      await client
        .patch(proj._id)
        .set({
          "image.image.asset": { _type: "reference", _ref: asset._id },
        })
        .commit();

      if (oldAssetId) {
        try {
          await client.delete(oldAssetId);
        } catch (e) {
          console.log(`   ⚠  Could not delete old asset: ${e.message}`);
        }
      }

      replaced++;
      console.log(`✅ ${proj.title} [${slug}] → ${file}`);
    } catch (e) {
      console.error(`❌ FAIL: ${proj.title} — ${e.message}`);
    }
  }

  console.log(`\nDone: ${replaced} replaced.`);
}

main().catch((e) => {
  console.error("Fatal error:", e);
  process.exit(1);
});
