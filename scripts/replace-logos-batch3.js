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

// slug → SVG file (skip Cena Lady Luisy)
const MANUAL_MAP = {
  "nq-safe": "NQ-Safe.svg",
  "edenio": "Edenio.svg",
  "delibib": "DeliBib.svg",
  "colegium-holding": "Colegium-Holding.svg",
  "6-firms": "6firms.svg",
  "knivu": "Knivu.svg",
  "lucifera": "Lucifera.svg",
  "sane": "SANE.svg",
  "totosoft": "Totosoft.svg",
  "olivastri": "Olivastri.svg",
  "energoprojekt": "Energoprojekt.svg",
};

async function main() {
  const slugs = Object.keys(MANUAL_MAP);

  const projects = await client.fetch(
    `*[_type=="project" && slug.current in $slugs]{_id, title, slug, "assetId": image.image.asset._ref}`,
    { slugs }
  );

  console.log(`Found ${projects.length} projects to update.\n`);

  let replaced = 0;

  for (const proj of projects) {
    const slug = proj.slug?.current;
    const file = MANUAL_MAP[slug];
    if (!file) continue;

    const filePath = path.join(svgDir, file);
    const oldAssetId = proj.assetId;

    try {
      const imageBuffer = fs.readFileSync(filePath);
      const asset = await client.assets.upload("image", imageBuffer, {
        filename: file,
        contentType: "image/svg+xml",
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
          console.log(`   ⚠  Old asset not deleted: ${e.message.slice(0, 80)}`);
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
