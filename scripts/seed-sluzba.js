const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "d8caxrt0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

async function main() {
  // Check if already exists
  const existing = await client.fetch(
    '*[_type=="sluzba" && slug.current=="tvorba-loga"][0]._id'
  );

  if (existing) {
    console.log(`Služba "Tvorba loga" already exists (${existing}). Skipping.`);
    return;
  }

  const doc = {
    _type: "sluzba",
    name: "Tvorba loga",
    slug: { _type: "slug", current: "tvorba-loga" },
  };

  const result = await client.create(doc);
  console.log(`✅ Created "Tvorba loga" — ID: ${result._id}`);
}

main().catch((e) => {
  console.error("Error:", e.message);
  process.exit(1);
});
