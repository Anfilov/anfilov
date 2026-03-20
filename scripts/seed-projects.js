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

const webpDir = path.join(__dirname, "../_in/Portfolio-WebP");

function fileToTitle(filename) {
  // "Casa-Moderna.webp" → "Casa Moderna"
  return filename.replace(".webp", "").replace(/-/g, " ").replace(/_\d+$/, "");
}

function titleToSlug(title) {
  return "logo-" + title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function main() {
  const files = fs.readdirSync(webpDir).filter((f) => f.endsWith(".webp"));
  console.log(`Found ${files.length} WebP files. Uploading...`);

  let ok = 0;
  let fail = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const clientName = fileToTitle(file);
    const title = `Logo ${clientName}`;
    const slug = titleToSlug(clientName);

    try {
      // Upload image asset
      const filePath = path.join(webpDir, file);
      const imageBuffer = fs.readFileSync(filePath);
      const asset = await client.assets.upload("image", imageBuffer, {
        filename: file,
        contentType: "image/webp",
      });

      // Create project document
      const doc = {
        _type: "project",
        title,
        slug: { _type: "slug", current: slug },
        client: clientName,
        year: 2024,
        category: "logo",
        image: {
          _type: "imageWithAlt",
          image: {
            _type: "image",
            asset: { _type: "reference", _ref: asset._id },
          },
          alt: title,
        },
        description: `Tvorba loga pro ${clientName}.`,
        tags: ["logo"],
        featured: false,
        order: i + 1,
      };

      await client.create(doc);
      ok++;
      process.stdout.write(`\r  [${ok + fail}/${files.length}] ${title}`);
    } catch (e) {
      fail++;
      console.error(`\nFAIL: ${file} — ${e.message}`);
    }
  }

  console.log(`\n\nDone: ${ok} uploaded, ${fail} failed.`);
}

main();
