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

// Manual slug → file mapping for mismatched names
const MANUAL_MAP = {
  "logo-tomas-andrlik": "Andrlik.svg",
  "logo-vyslanci-becherovka": "Becherovka.svg",
  "logo-maso-novak": "Novak.svg",
  "logo-pivovar-kostej": "Kostej.svg",
  "logo-provence-nature": "Provence.svg",
  "logo-travel-alliance": "Trval-Alliance.svg",
  "cena-lady-luisy": "Cena-Lady-Luisy.webp",
};

async function main() {
  const slugs = Object.keys(MANUAL_MAP);

  // Fetch matching projects
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
      console.log(`✅ ${proj.title} [${slug}] → ${file} (${ext.toUpperCase()})`);
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
