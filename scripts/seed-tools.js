const { createClient } = require("next-sanity");
const https = require("https");
const http = require("http");

const client = createClient({
  projectId: "d8caxrt0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

// Tool definitions with logo URLs from official sources
const tools = [
  {
    name: "SIMBY",
    url: "https://www.simby.cz",
    logoUrl: "https://www.simby.cz/favicon.ico",
    logoFilename: "simby-logo.png",
  },
  {
    name: "Adobe",
    url: "https://www.adobe.com",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/246px-Adobe_Corporate_logo.svg.png",
    logoFilename: "adobe-logo.png",
  },
  {
    name: "Kajabi",
    url: "https://www.kajabi.com",
    logoUrl:
      "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2155073937/settings_images/logo.png",
    logoFilename: "kajabi-logo.png",
  },
  {
    name: "Mioweb",
    url: "https://www.mioweb.cz",
    logoUrl: "https://www.mioweb.cz/favicon.ico",
    logoFilename: "mioweb-logo.png",
  },
  {
    name: "WordPress",
    url: "https://wordpress.org",
    logoUrl:
      "https://s.w.org/style/images/about/WordPress-logotype-standard.png",
    logoFilename: "wordpress-logo.png",
  },
  {
    name: "SmartEmailing",
    url: "https://www.smartemailing.cz",
    logoUrl: "https://www.smartemailing.cz/favicon.ico",
    logoFilename: "smartemailing-logo.png",
  },
  {
    name: "Ecomail",
    url: "https://www.ecomail.cz",
    logoUrl: "https://www.ecomail.cz/favicon.ico",
    logoFilename: "ecomail-logo.png",
  },
  {
    name: "Brizy",
    url: "https://www.brizy.io",
    logoUrl:
      "https://www.brizy.io/wp-content/uploads/2023/07/brizy-logo-mark.svg",
    logoFilename: "brizy-logo.svg",
  },
];

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;
    protocol.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchBuffer(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    }).on("error", reject);
  });
}

function getContentType(filename) {
  if (filename.endsWith(".svg")) return "image/svg+xml";
  if (filename.endsWith(".webp")) return "image/webp";
  return "image/png";
}

async function main() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error("Missing SANITY_WRITE_TOKEN env variable.");
    console.error("Usage: SANITY_WRITE_TOKEN=sk... node scripts/seed-tools.js");
    process.exit(1);
  }

  console.log(`Seeding ${tools.length} tools into Sanity...\n`);

  let ok = 0;
  let fail = 0;

  for (const tool of tools) {
    try {
      console.log(`  → ${tool.name}: downloading logo...`);
      const buffer = await fetchBuffer(tool.logoUrl);
      const contentType = getContentType(tool.logoFilename);

      console.log(`    uploading to Sanity (${buffer.length} bytes)...`);
      const asset = await client.assets.upload("image", buffer, {
        filename: tool.logoFilename,
        contentType,
      });

      console.log(`    creating document...`);
      await client.create({
        _type: "tool",
        name: tool.name,
        url: tool.url,
        logo: {
          _type: "image",
          asset: { _type: "reference", _ref: asset._id },
        },
      });

      console.log(`    ✓ ${tool.name} done`);
      ok++;
    } catch (err) {
      console.error(`    ✗ ${tool.name} failed: ${err.message}`);
      fail++;
    }
  }

  console.log(`\nDone: ${ok} ok, ${fail} failed.`);
  if (fail > 0) {
    console.log(
      "\nFor failed tools, download logos manually and upload via Sanity Studio."
    );
  }
}

main();
