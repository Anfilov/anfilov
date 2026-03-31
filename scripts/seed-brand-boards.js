const fs = require("fs");
const path = require("path");

// Load .env.local manually (no dotenv dependency)
const envPath = path.join(__dirname, "../.env.local");
const envLines = fs.readFileSync(envPath, "utf8").split("\n");
for (const line of envLines) {
  const match = line.match(/^([A-Z_]+)=(.+)$/);
  if (match) process.env[match[1]] = match[2];
}

const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "d8caxrt0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const dir = path.join(__dirname, "../_in/Portfolio Files/Brand-Board");

// Only new items (4 added files)
const items = [
  { file: "6FIRMS-Brand-Board.webp",            client: "6Firms",         title: "Brand board 6Firms",            description: "Návrh brandu pro 6Firms" },
  { file: "Konečně-Petra-Brand-Board.webp",     client: "Konečně Petra",  title: "Brand board Konečně Petra",     description: "Ukázka brand boardu pro značku Konečně Petra" },
  { file: "SANE-BrandBoard.webp",               client: "Sane",           title: "Brand board Sane",              description: "Brand board pro značku Sane" },
  { file: "TOTOSOFT-Brand-Board.webp",          client: "Totosoft",       title: "Brand board Totosoft",          description: "Návrh vizuální identity pro Totosoft" },
];

function toSlug(name) {
  return "brand-board-" + name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const SLUZBA_ID = "M2iELtrqSYohjqJLfH3nQU"; // Vizuální identita

async function main() {
  console.log(`Uploading ${items.length} brand boards...\n`);

  const createdIds = [];
  let ok = 0;
  let fail = 0;

  for (const item of items) {
    const slug = toSlug(item.client);
    try {
      const filePath = path.join(dir, item.file);
      const imageBuffer = fs.readFileSync(filePath);
      const asset = await client.assets.upload("image", imageBuffer, {
        filename: item.file,
        contentType: "image/webp",
      });

      const doc = {
        _type: "project",
        title: item.title,
        slug: { _type: "slug", current: slug },
        client: item.client,
        year: 2025,
        image: {
          _type: "imageWithAlt",
          image: {
            _type: "image",
            asset: { _type: "reference", _ref: asset._id },
          },
          alt: item.title,
        },
        description: item.description,
        tags: ["brand board", "vizuální identita"],
        featured: false,
        order: 100 + ok,
      };

      const result = await client.create(doc);
      createdIds.push(result._id);
      ok++;
      console.log(`  ✅ ${item.title} (${result._id})`);
    } catch (e) {
      fail++;
      console.error(`  ❌ ${item.file}: ${e.message}`);
    }
  }

  console.log(`\nUploaded: ${ok}, Failed: ${fail}`);

  // Add to Vizuální identita service
  if (createdIds.length > 0) {
    console.log(`\nAdding ${createdIds.length} projects to Vizuální identita...`);

    // Fetch existing portfolioProjects
    const existing = await client.fetch(
      `*[_id == $id][0].portfolioProjects`,
      { id: SLUZBA_ID }
    );

    const existingRefs = existing || [];
    const newRefs = createdIds.map((id) => ({
      _type: "reference",
      _ref: id,
      _key: id.slice(-8),
    }));

    await client
      .patch(SLUZBA_ID)
      .set({ portfolioProjects: [...existingRefs, ...newRefs] })
      .commit();

    console.log("  ✅ Přidáno do služby Vizuální identita");
  }

  console.log("\nDone!");
}

main();
