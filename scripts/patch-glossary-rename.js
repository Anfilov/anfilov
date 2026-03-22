const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "d8caxrt0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Map: current English term → { newTerm, keepOldAsAlias }
const RENAMES = [
  { from: "Above the fold", to: "Nad zlomem" },
  { from: "Banner design", to: "Design bannerů" },
  { from: "Body font", to: "Základní písmo" },
  { from: "Bounce rate", to: "Míra okamžitého opuštění" },
  { from: "Brand architecture", to: "Architektura značky" },
  { from: "Brand audit", to: "Audit značky" },
  { from: "Brand awareness", to: "Povědomí o značce" },
  { from: "Brand book", to: "Manuál značky" },
  { from: "Brand equity", to: "Hodnota značky" },
  { from: "Brand guidelines", to: "Pravidla značky" },
  { from: "Brand loyalty", to: "Věrnost značce" },
  { from: "Brand persona", to: "Osobnost značky" },
  { from: "Brand positioning", to: "Pozicování značky" },
  { from: "Brand promise", to: "Příslib značky" },
  { from: "Brand storytelling", to: "Příběh značky" },
  { from: "Brand strategy", to: "Strategie značky" },
  { from: "Brand touchpoint", to: "Kontaktní bod značky" },
  { from: "Brand values", to: "Hodnoty značky" },
  { from: "Brand voice na sítích", to: "Hlas značky na sítích" },
  { from: "Content calendar", to: "Obsahový kalendář" },
  { from: "Content pillar", to: "Obsahový pilíř" },
  { from: "Core Web Vitals", to: "Základní webové metriky" },
  { from: "Cover image", to: "Úvodní obrázek" },
  { from: "Dark mode", to: "Tmavý režim" },
  { from: "Dark mode design", to: "Design tmavého režimu" },
  { from: "Display font", to: "Zobrazovací písmo" },
  { from: "Engagement rate", to: "Míra zapojení" },
  { from: "Hamburger menu", to: "Hamburgerové menu" },
  { from: "Hero image", to: "Hlavní obrázek" },
  { from: "Hero sekce", to: "Hlavní sekce" },
  { from: "Infinite scroll", to: "Nekonečné scrollování" },
  { from: "Landing page", to: "Vstupní stránka" },
  { from: "Lazy loading", to: "Líné načítání" },
  { from: "Leading", to: "Řádkový proklad" },
  { from: "Motion design", to: "Pohybový design" },
  { from: "Open rate", to: "Míra otevření" },
  { from: "Packaging design", to: "Obalový design" },
  { from: "Progressive web app", to: "Progresivní webová aplikace" },
  { from: "Shelf appeal", to: "Regálová přitažlivost" },
  { from: "Shelf talker", to: "Regálový komunikátor" },
  { from: "Single page application", to: "Jednostránková aplikace" },
  { from: "Skeleton screen", to: "Kostrový náhled" },
  { from: "Variable font", to: "Variabilní písmo" },
];

async function main() {
  console.log(`\n🔤 Přejmenovávám ${RENAMES.length} pojmů EN → CZ\n`);

  for (let i = 0; i < RENAMES.length; i++) {
    const { from, to } = RENAMES[i];

    // Find the term
    const doc = await client.fetch(
      '*[_type == "glossaryTerm" && term == $term][0]{ _id, term, aliases }',
      { term: from }
    );

    if (!doc) {
      console.log(`  [${i + 1}/${RENAMES.length}] ⚠️  "${from}" — nenalezeno, přeskakuji`);
      continue;
    }

    // Build new aliases: keep existing + add old English name
    const existingAliases = doc.aliases || [];
    const newAliases = [...new Set([...existingAliases, from])];

    // New slug from Czech name
    const newSlug = slugify(to);

    await client
      .patch(doc._id)
      .set({
        term: to,
        slug: { _type: "slug", current: newSlug },
        aliases: newAliases,
      })
      .commit();

    console.log(`  [${i + 1}/${RENAMES.length}] ✅ "${from}" → "${to}" (slug: ${newSlug})`);
  }

  console.log(`\n🎉 Hotovo! ${RENAMES.length} pojmů přejmenováno.\n`);
}

main().catch((e) => {
  console.error("Error:", e.message);
  process.exit(1);
});
