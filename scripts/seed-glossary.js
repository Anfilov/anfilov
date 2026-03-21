/**
 * Seed script for glossary terms.
 *
 * Reads glossary-terms-draft.md, parses all 200 terms,
 * and upserts them into Sanity as `glossaryTerm` documents.
 *
 * Usage:
 *   SANITY_WRITE_TOKEN=xxx node scripts/seed-glossary.js
 */

const fs = require("fs");
const path = require("path");
const { createClient } = require("next-sanity");

// ── Sanity client ──────────────────────────────────────────────────────────
const client = createClient({
  projectId: "d8caxrt0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

// ── Slug helper ────────────────────────────────────────────────────────────
function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ── Category mapping ───────────────────────────────────────────────────────
const CATEGORY_MAP = {
  "Značka & identita": "Branding",
  "Typografie": "Typografie",
  "Webdesign & UX/UI": "Webdesign",
  "Tisk & předtisková příprava": "Tisk",
  "Obalový design": "Obalový design",
  "Sociální média": "Sociální média",
  "Digitální design": "Digitální design",
  "Online marketing & prodej": "Marketing",
};

// ── Service slug mapping (category → service slug patterns) ────────────────
const CATEGORY_SERVICE_SLUGS = {
  Branding: ["znacka-identita"],
  Typografie: ["znacka-identita"],
  Webdesign: ["webdesign"],
  Tisk: ["firemni-tiskoviny"],
  "Obalový design": ["obalovy-design"],
  "Sociální média": ["socialni-media"],
  "Digitální design": ["digitalni-design"],
  Marketing: ["online-prodej"],
};

// ── Parse markdown ─────────────────────────────────────────────────────────
function parseMarkdown(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  const terms = [];
  let currentCategory = null;

  for (const line of lines) {
    // Detect section headers like "## 1. Značka & identita (35 pojmů)"
    const sectionMatch = line.match(/^## \d+\.\s+(.+?)\s+\(\d+ pojm/);
    if (sectionMatch) {
      const rawCategory = sectionMatch[1];
      currentCategory = CATEGORY_MAP[rawCategory];
      if (!currentCategory) {
        console.warn(`  ⚠ Unknown category: "${rawCategory}"`);
      }
      continue;
    }

    // Parse table rows: | # | Pojem | Aliasy | Definice | Detail? |
    const rowMatch = line.match(
      /^\|\s*\d+\s*\|\s*(.+?)\s*\|\s*(.*?)\s*\|\s*(.+?)\s*\|\s*(.*?)\s*\|$/
    );
    if (rowMatch && currentCategory) {
      const term = rowMatch[1].trim();
      const aliasesRaw = rowMatch[2].trim();
      const shortDefinition = rowMatch[3].trim();
      const detailRaw = rowMatch[4].trim();

      // Skip table header rows
      if (term === "Pojem" || term.startsWith("---")) continue;

      const aliases = aliasesRaw
        ? aliasesRaw.split(",").map((a) => a.trim()).filter(Boolean)
        : [];

      const hasDetailPage = detailRaw === "✅";

      terms.push({
        term,
        slug: slugify(term),
        aliases,
        category: currentCategory,
        shortDefinition,
        hasDetailPage,
      });
    }
  }

  return terms;
}

// ── Upsert a single term ───────────────────────────────────────────────────
async function upsertTerm(termData, index, total) {
  const { term, slug, aliases, category, shortDefinition, hasDetailPage } =
    termData;

  // Check if document already exists
  const existing = await client.fetch(
    `*[_type == "glossaryTerm" && slug.current == $slug][0]{ _id }`,
    { slug }
  );

  const doc = {
    _type: "glossaryTerm",
    term,
    slug: { _type: "slug", current: slug },
    aliases,
    category,
    shortDefinition,
    hasDetailPage,
  };

  if (existing) {
    await client.patch(existing._id).set(doc).commit();
    console.log(
      `  [${index + 1}/${total}] PATCHED  "${term}" (${category})`
    );
    return existing._id;
  } else {
    const created = await client.create(doc);
    console.log(
      `  [${index + 1}/${total}] CREATED  "${term}" (${category})`
    );
    return created._id;
  }
}

// ── Related terms heuristic ────────────────────────────────────────────────
function pickRelatedTermIds(termData, allTerms, slugToId) {
  const sameCategory = allTerms.filter(
    (t) => t.category === termData.category && t.slug !== termData.slug
  );
  const otherCategory = allTerms.filter(
    (t) => t.category !== termData.category
  );

  // Shuffle helper
  const shuffle = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const samePicked = shuffle(sameCategory).slice(0, 3);
  const otherPicked = shuffle(otherCategory).slice(0, 2);
  const related = [...samePicked, ...otherPicked].slice(0, 5);

  return related
    .map((t) => slugToId[t.slug])
    .filter(Boolean)
    .map((id) => ({ _type: "reference", _ref: id, _key: id.replace(/\./g, "_") }));
}

// ── Main ───────────────────────────────────────────────────────────────────
async function main() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error("ERROR: Set SANITY_WRITE_TOKEN environment variable.");
    process.exit(1);
  }

  const mdPath = path.join(__dirname, "glossary-terms-draft.md");
  console.log(`\nParsing markdown: ${mdPath}`);

  const terms = parseMarkdown(mdPath);
  console.log(`Found ${terms.length} terms.\n`);

  // ── PASS 1: Create / update all terms ──────────────────────────────────
  console.log("═══ PASS 1: Creating / patching terms ═══\n");

  const slugToId = {};

  for (let i = 0; i < terms.length; i++) {
    const id = await upsertTerm(terms[i], i, terms.length);
    slugToId[terms[i].slug] = id;
  }

  console.log(`\n✅ Pass 1 complete: ${terms.length} terms upserted.\n`);

  // ── PASS 2: Set relatedTerms references ────────────────────────────────
  console.log("═══ PASS 2: Setting relatedTerms references ═══\n");

  for (let i = 0; i < terms.length; i++) {
    const t = terms[i];
    const docId = slugToId[t.slug];
    if (!docId) continue;

    const relatedRefs = pickRelatedTermIds(t, terms, slugToId);

    await client.patch(docId).set({ relatedTerms: relatedRefs }).commit();
    console.log(
      `  [${i + 1}/${terms.length}] relatedTerms set for "${t.term}" (${relatedRefs.length} refs)`
    );
  }

  console.log(`\n✅ Pass 2 complete: relatedTerms set for all terms.\n`);

  // ── PASS 3: Set relatedServices for hasDetailPage terms ────────────────
  console.log("═══ PASS 3: Setting relatedServices references ═══\n");

  // Fetch all sluzba documents
  const allSluzby = await client.fetch(
    `*[_type == "sluzba"]{ _id, "slug": slug.current }`
  );
  console.log(`  Found ${allSluzby.length} sluzba documents.\n`);

  // Build slug → id map for services
  const sluzbaSlugToId = {};
  for (const s of allSluzby) {
    if (s.slug) sluzbaSlugToId[s.slug] = s._id;
  }

  const detailTerms = terms.filter((t) => t.hasDetailPage);
  console.log(`  ${detailTerms.length} terms with hasDetailPage=true\n`);

  for (let i = 0; i < detailTerms.length; i++) {
    const t = detailTerms[i];
    const docId = slugToId[t.slug];
    if (!docId) continue;

    const serviceSlugs = CATEGORY_SERVICE_SLUGS[t.category] || [];

    // Find matching sluzba IDs — try exact match, then partial match
    const serviceIds = [];
    for (const pattern of serviceSlugs) {
      // Try exact match first
      if (sluzbaSlugToId[pattern]) {
        serviceIds.push(sluzbaSlugToId[pattern]);
      } else {
        // Try partial match (slug contains the pattern)
        for (const [slug, id] of Object.entries(sluzbaSlugToId)) {
          if (slug.includes(pattern) && !serviceIds.includes(id)) {
            serviceIds.push(id);
          }
        }
      }
    }

    // Limit to 2 services
    const serviceRefs = serviceIds.slice(0, 2).map((id) => ({
      _type: "reference",
      _ref: id,
      _key: id.replace(/\./g, "_"),
    }));

    if (serviceRefs.length > 0) {
      await client.patch(docId).set({ relatedServices: serviceRefs }).commit();
      console.log(
        `  [${i + 1}/${detailTerms.length}] relatedServices set for "${t.term}" (${serviceRefs.length} services)`
      );
    } else {
      console.log(
        `  [${i + 1}/${detailTerms.length}] ⚠ No matching services for "${t.term}" (${t.category})`
      );
    }
  }

  console.log(`\n✅ Pass 3 complete: relatedServices set for detail terms.`);
  console.log(`\n🎉 Seed complete! ${terms.length} glossary terms processed.\n`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
