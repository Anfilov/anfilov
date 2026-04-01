/**
 * Seed: Obálka knihy — nová služba v kategorii obalový design.
 *
 * 1. Vytvoří sluzba dokument
 * 2. Přidá referenci do sluzbyPage (kategorie "Design & Grafika")
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

const {
  fetchAllToolIds,
  randomSubset,
  ref,
  createOrUpdateSluzba,
  client,
} = require("./seed-sluzby/_helpers");

// Portfolio project: StarWars Books
const BOOK_PROJECT_ID = "CkyeB4rlPx5OdqGHhXAMRp";

// Cross-link services (obalový design related)
const CROSS_LINK_IDS = [
  "NaX3dFCTiySsdMLs9uuCL1", // Design obalu produktu
  "NaX3dFCTiySsdMLs9uuCX9", // Etiketa a label design
  "M2iELtrqSYohjqJLfH3vCi", // (another obalovy-design service)
];

async function main() {
  const toolIds = await fetchAllToolIds();
  const rt = (n) => randomSubset(toolIds, n).map(ref);

  const slug = "obalka-knihy";
  const data = {
    name: "Obálka knihy",
    category: "obalovy-design",
    categoryOrder: 3,
    heroTitle: "Obálka, která přiměje čtenáře knihu otevřít",
    heroSubheadline:
      "V knihkupectví i na e-shopu rozhoduje první dojem. Navrhnu obálku, která vystihne podstatu vaší knihy, zaujme v regálu i jako thumbnail a promění kolemjdoucího ve čtenáře.",
    heroProjectsLabel: "15+ obálek",
    atomicAnswer:
      "Design obálky knihy zahrnuje návrh vizuální podoby přední strany, hřbetu a zadní strany knihy tak, aby zaujala čtenáře, komunikovala žánr a odlišila se v regálu i na e-shopu. Služba obsahuje briefing, analýzu žánru a konkurence, 2–3 konceptuální návrhy, rozpracování vybraného směru, přípravu tiskových dat a digitální verze pro online prodej. Cena začíná od 15 000 Kč, dodání přibližně 14 pracovních dní. Službu poskytuje Simon Anfilov z ANFILOV Studia v Praze.",
    metaTitle: "Obálka knihy — ANFILOV | Design, který prodává příběh",
    metaDescription:
      "Profesionální design obálky knihy od 15 000 Kč. Obálka, která zaujme v regálu i na e-shopu. Tiskové podklady i digitální verze. Chci nabídku →",

    // ── Problem ──
    problemOverline: "Problém",
    problemTitle: "Poznáváte některý z těchto problémů?",
    problemItems: [
      {
        _key: "p1",
        text: "Vaše kniha je skvělá, ale obálka nevypadá profesionálně — čtenáři ji přehlížejí a sáhnou po konkurenci.",
      },
      {
        _key: "p2",
        text: "Obálka nevystihuje žánr ani obsah knihy — čtenář neví, co od ní čekat, a nekoupí ji.",
      },
      {
        _key: "p3",
        text: "Na e-shopu obálka v malém náhledu nefunguje — text je nečitelný a grafika splývá.",
      },
    ],

    // ── Solution ──
    reseniOverline: "Řešení",
    reseniTitle: "Obálka navržená strategicky, od žánru po regál",
    reseniItems: [
      {
        _key: "r1",
        title: "Analýza žánru a konkurence",
        text: "Zmapuji vizuální konvence vašeho žánru — obálka bude čitelná pro cílového čtenáře a zároveň originální.",
      },
      {
        _key: "r2",
        title: "2–3 konceptuální návrhy",
        text: "Představím varianty s různým přístupem k typografii, barvám a kompozici — vybíráte z promyšlených směrů.",
      },
      {
        _key: "r3",
        title: "Kompletní obálka (přední + zadní + hřbet)",
        text: "Navrhnu celou obálku jako celek — přední strana zaujme, zadní přesvědčí a hřbet funguje v poličce.",
      },
      {
        _key: "r4",
        title: "Optimalizace pro digitální prodej",
        text: "Obálka bude fungovat i jako 120px thumbnail na e-shopu — čitelná, kontrastní, rozpoznatelná.",
      },
      {
        _key: "r5",
        title: "Tiskové podklady i mockupy",
        text: "Dodám tisková PDF dle specifikací tiskárny i realistické mockupy pro marketing a sociální sítě.",
      },
    ],

    // ── Process ──
    procesOverline: "Proces",
    procesTitle: "Jak probíhá spolupráce",
    procesSteps: [
      {
        _key: "s1",
        title: "Brief a analýza žánru",
        days: 2,
        text: "Seznámím se s knihou, cílovou skupinou a žánrovými konvencemi. Projdu konkurenci v knihkupectví i online.",
      },
      {
        _key: "s2",
        title: "Moodboard a koncepty",
        days: 5,
        text: "Sestavím vizuální náladu a představím 2–3 konceptuální návrhy s různým přístupem.",
      },
      {
        _key: "s3",
        title: "Rozpracování a revize",
        days: 4,
        text: "Vybraný koncept rozpracuji do finální podoby. Proběhnou 2–3 kola zpětné vazby a úprav.",
      },
      {
        _key: "s4",
        title: "Finalizace a předání",
        days: 3,
        text: "Připravím tiskové PDF, digitální verze pro e-shopy a realistické mockupy knihy.",
      },
    ],

    // ── Portfolio ──
    portfolioOverline: "Reference",
    portfolioTitle: "Ukázky knižních obálek",
    portfolioProjects: [ref(BOOK_PROJECT_ID)],

    // ── Pricing ──
    cenikOverline: "Ceník a srovnání",
    cenikTitle: "Kolik stojí design obálky knihy",
    cenikSubtitle:
      "Cena závisí na typu vazby, složitosti grafiky a tom, zda jde o samostatný titul nebo knižní edici.",
    cenikPriceTitle: "Cena za design obálky",
    cenikPriceLabel: "od 15 000 Kč",
    cenikIncludedTitle: "Co vše je v ceně",
    cenikIncludedItems: [
      {
        _key: "c1",
        name: "Úvodní konzultace a briefing",
        desc: "Porozumění knize, žánru a cílové skupině",
      },
      {
        _key: "c2",
        name: "Analýza žánru a konkurence",
        desc: "Vizuální audit knižního trhu v dané kategorii",
      },
      {
        _key: "c3",
        name: "2–3 konceptuální návrhy",
        desc: "Promyšlené varianty s různým vizuálním přístupem",
      },
      {
        _key: "c4",
        name: "Kompletní obálka",
        desc: "Přední strana, zadní strana s anotací a ISBN, hřbet",
      },
      {
        _key: "c5",
        name: "2–3 kola revizí",
        desc: "Doladění každého detailu dle zpětné vazby",
      },
      {
        _key: "c6",
        name: "Tisková data",
        desc: "PDF/X v CMYK se spadávkou dle specifikací tiskárny",
      },
      {
        _key: "c7",
        name: "Digitální verze",
        desc: "RGB verze pro e-shopy, Kindle, Apple Books",
      },
      {
        _key: "c8",
        name: "2 mockupy knihy",
        desc: "Realistické vizualizace pro marketing a sociální sítě",
      },
    ],
    cenikTableTitle: "Proč je to se mnou výhodnější",
    cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
    cenikTableRows: [
      {
        _key: "t1",
        criterion: "Znalost knižního trhu",
        scores: [5, 3, 1],
      },
      {
        _key: "t2",
        criterion: "Profesionální typografie",
        scores: [5, 4, 1],
      },
      {
        _key: "t3",
        criterion: "Funkčnost v thumbnailech",
        scores: [5, 3, 2],
      },
      {
        _key: "t4",
        criterion: "Poměr cena / kvalita",
        scores: [5, 2, 4],
      },
      {
        _key: "t5",
        criterion: "Osobní přístup",
        scores: [5, 2, 3],
      },
    ],
    cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",

    // ── Tools ──
    nastrojeOverline: "Nástroje",
    nastrojeTitle: "S čím pracuji",
    nastrojeItems: rt(5),

    // ── FAQ ──
    faqOverline: "FAQ",
    faqTitle: "Často kladené otázky",
    faqItems: [
      {
        _key: "f1",
        question: "Jak dlouho trvá návrh obálky?",
        answer:
          "Obvykle 2–3 týdny od schválení briefu. Záleží na složitosti a rychlosti zpětné vazby. Expresní zpracování je možné po domluvě.",
      },
      {
        _key: "f2",
        question: "Kolik návrhů dostanu k výběru?",
        answer:
          "Standardně připravuji 2–3 vizuální koncepty s různým přístupem. Vybraný směr pak detailně rozpracuji.",
      },
      {
        _key: "f3",
        question: "Potřebuji dodat vlastní fotky nebo ilustrace?",
        answer:
          "Nemusíte. Pracuji s licencovanými fotobázemi, vlastní ilustrací i zakázkovou fotografií. Pokud máte vlastní materiály, rád je využiji.",
      },
      {
        _key: "f4",
        question: "Navrhujete i obálku pro e-book?",
        answer:
          "Ano, dodávám verze optimalizované pro digitální distribuci — Kindle, Apple Books, e-shopy. Obálka funguje i v malém náhledu.",
      },
      {
        _key: "f5",
        question: "Dodáte podklady přímo tiskárně?",
        answer:
          "Ano, připravím tiskové PDF přesně dle specifikací vaší tiskárny — rozměry, spadávky, barevný prostor, řezné značky. Mohu komunikovat přímo s tiskárnou.",
      },
      {
        _key: "f6",
        question: "Zvládnete i celou knižní edici?",
        answer:
          "Ano, navrhnu vizuální systém pro celou edici — jednotný styl s variabilitou pro jednotlivé tituly. Cena edičního systému závisí na počtu titulů.",
      },
      {
        _key: "f7",
        question: "Navrhujete i sazbu vnitřního bloku?",
        answer:
          "Sazba vnitřního bloku knihy není součástí této služby, ale mohu ji zajistit jako samostatnou zakázku. Díky tomu bude vizuálně konzistentní s obálkou.",
      },
    ],

    // ── Cross-links ──
    crossLinks: CROSS_LINK_IDS.map(ref),
  };

  // 1. Create the sluzba document
  console.log("Vytvářím službu Obálka knihy...");
  const newId = await createOrUpdateSluzba(slug, data);

  // 2. Add to sluzbyPage — into "Design & Grafika" category
  console.log("Přidávám do sluzbyPage...");

  const sluzbyPage = await client.fetch(
    '*[_type == "sluzbyPage"][0]{ _id, categories }'
  );

  if (sluzbyPage) {
    const categories = sluzbyPage.categories.map((cat) => {
      if (cat.label === "Design & Grafika") {
        return {
          ...cat,
          services: [...(cat.services || []), ref(newId)],
        };
      }
      return cat;
    });

    await client.patch(sluzbyPage._id).set({ categories }).commit();
    console.log('  ✅ Přidáno do kategorie "Design & Grafika" na sluzbyPage');

    // Also patch drafts if they exist
    try {
      await client
        .patch(`drafts.${sluzbyPage._id}`)
        .set({ categories })
        .commit();
      console.log("  ✅ Přidáno i do draftu sluzbyPage");
    } catch (e) {
      // Draft may not exist, that's fine
    }
  }

  console.log("\nHotovo! Služba Obálka knihy byla vytvořena.");
}

main().catch((err) => {
  console.error("Chyba:", err.message);
  process.exit(1);
});
