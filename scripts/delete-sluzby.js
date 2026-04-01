/**
 * Smaže vybrané služby ze Sanity a odstraní všechny reference na ně.
 *
 * Kroky:
 * 1. Najde ID služeb podle slugů
 * 2. Odstraní reference z crossLinks v ostatních službách
 * 3. Odstraní reference z glossaryTerm.relatedServices
 * 4. Odstraní reference z sluzbyPage.categories[].services
 * 5. Smaže samotné dokumenty služeb
 */

const fs = require("fs");
const path = require("path");

// Load .env.local
const envPath = path.join(__dirname, "../.env.local");
const envLines = fs.readFileSync(envPath, "utf8").split("\n");
for (const line of envLines) {
  const match = line.match(/^([A-Z_]+)=(.+)$/);
  if (match) process.env[match[1]] = match[2];
}

const { client } = require("./seed-sluzby/_client");

const SLUGS_TO_DELETE = [
  "infografiky",
  "design-socialnich-medii",
  "sablony-linkedin",
  "youtube-branding-kit",
];

async function main() {
  // 1. Find document IDs for the slugs
  const docs = await client.fetch(
    `*[_type == "sluzba" && slug.current in $slugs]{ _id, name, "slug": slug.current }`,
    { slugs: SLUGS_TO_DELETE }
  );

  if (docs.length === 0) {
    console.log("Žádné služby k smazání nebyly nalezeny.");
    return;
  }

  console.log("Nalezené služby ke smazání:");
  docs.forEach((d) => console.log(`  - ${d.name} (${d.slug}) [${d._id}]`));

  const idsToDelete = docs.map((d) => d._id);
  // Include both published and draft IDs
  const allIds = idsToDelete.flatMap((id) => [id, `drafts.${id}`]);

  // 2. Remove crossLinks references from other sluzba documents
  const crossLinkDocs = await client.fetch(
    `*[_type == "sluzba" && count(crossLinks[_ref in $ids]) > 0]{ _id, crossLinks }`,
    { ids: allIds }
  );

  for (const doc of crossLinkDocs) {
    const filtered = doc.crossLinks.filter(
      (ref) => !allIds.includes(ref._ref)
    );
    console.log(
      `Odstraňuji crossLinks reference z ${doc._id} (${doc.crossLinks.length} → ${filtered.length})`
    );
    await client.patch(doc._id).set({ crossLinks: filtered }).commit();
  }

  // 3. Remove references from glossaryTerm.relatedServices
  const glossaryDocs = await client.fetch(
    `*[_type == "glossaryTerm" && count(relatedServices[_ref in $ids]) > 0]{ _id, relatedServices }`,
    { ids: allIds }
  );

  for (const doc of glossaryDocs) {
    const filtered = doc.relatedServices.filter(
      (ref) => !allIds.includes(ref._ref)
    );
    console.log(
      `Odstraňuji relatedServices reference z glossaryTerm ${doc._id} (${doc.relatedServices.length} → ${filtered.length})`
    );
    await client.patch(doc._id).set({ relatedServices: filtered }).commit();
  }

  // 4. Remove references from sluzbyPage categories
  const sluzbyPages = await client.fetch(
    `*[_type == "sluzbyPage"]{ _id, categories }`
  );

  for (const page of sluzbyPages) {
    if (!page.categories) continue;
    let changed = false;
    const updatedCategories = page.categories.map((cat) => {
      if (!cat.services) return cat;
      const filtered = cat.services.filter(
        (ref) => !allIds.includes(ref._ref)
      );
      if (filtered.length !== cat.services.length) {
        changed = true;
        return { ...cat, services: filtered };
      }
      return cat;
    });

    if (changed) {
      console.log(`Odstraňuji reference ze sluzbyPage ${page._id}`);
      await client
        .patch(page._id)
        .set({ categories: updatedCategories })
        .commit();
    }
  }

  // 5. Delete the service documents (both published and drafts)
  const transaction = client.transaction();
  for (const id of allIds) {
    transaction.delete(id);
  }

  console.log(`\nMažu ${docs.length} služeb (+ jejich drafty)...`);
  await transaction.commit();

  console.log("Hotovo! Všechny služby a reference byly smazány.");
}

main().catch((err) => {
  console.error("Chyba:", err.message);
  process.exit(1);
});
