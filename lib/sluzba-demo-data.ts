import type { SluzbaData } from "./sluzba-types";

// ---------------------------------------------------------------------------
// Demo data — Tvorba loga
// Will be replaced by Sanity queries once CMS is connected
// ---------------------------------------------------------------------------

export const demoSluzba: SluzbaData = {
  name: "Tvorba loga",
  slug: "tvorba-loga",
  tema: "Tvorba loga",
  priceFrom: 15000,
  deliveryDays: 12,
  metaTitle: "Tvorba loga — ANFILOV Studio | Logo, které prodává",
  metaDescription:
    "Profesionální tvorba loga od 15 000 Kč. Originální design, strategický přístup, dodání do 12 dnů. Chci nabídku →",

  atomicAnswer:
    "Tvorba loga je proces návrhu unikátní vizuální značky, která odráží hodnoty a strategii vaší firmy. Služba je určena podnikatelům, startupům a firmám, které chtějí profesionální logo — ne generický clipart z Canvy. Získáte originální logotyp ve všech potřebných formátech, základní brand manuál a 2 kola revizí. Cena začíná od 15 000 Kč a dodání trvá přibližně 12 pracovních dní. Službu poskytuje Simon Anfilov z ANFILOV Studia v Praze, brand & web designer s 12 lety zkušeností a 200+ dokončenými projekty.",

  heroTitle: "Tvorba loga",
  heroSubheadline: "Získejte důvěru těch správných zákazníků a oslovte je logem sladěným s celým vizuálním stylem. Provedu vás tvorbou firemní identity od strategie po samotný design.",
  heroImage: "https://cdn.sanity.io/images/d8caxrt0/production/5afc7a4b71602bbcfc97a654dd1f365530263352-2560x2560.webp",
  heroMediaType: "image",
  heroPriceLabel: "Již od 15 000 Kč",
  heroProjectsLabel: "100+ projektů",
  heroDeliveryLabel: "dodání cca 12 dní",
  rating: 4.9,
  projectCount: 127,

  painPoints: [
    { icon: "Frown", image: "/images/pain-placeholder.webp", text: "Vaše logo vypadá zastarale a neprofesionálně" },
    {
      icon: "Copy",
      image: "/images/pain-placeholder.webp",
      text: "Logo z Canvy nebo Fiverru vypadá jako tisíc dalších",
    },
    {
      icon: "TrendingDown",
      image: "/images/pain-placeholder.webp",
      text: "Zákazníci si vaši značku nepamatují",
    },
  ],

  deliverables: [
    {
      title: "Originální logotyp",
      benefit:
        "Unikátní vizuální identita navržená na míru — žádné šablony ani AI generátory",
    },
    {
      title: "2–3 konceptuální návrhy",
      benefit:
        "Vybíráte z promyšlených variant, ne z jedné \u201Etake it or leave it\u201C verze",
    },
    {
      title: "Základní brand manuál",
      benefit:
        "Pravidla použití loga, barvy, písma — váš tým bude vědět, jak značku používat správně",
    },
    {
      title: "Všechny formáty pro web i tisk",
      benefit:
        "SVG, PNG, PDF — logo funguje na vizitce i na billboardu",
    },
    {
      title: "2 kola revizí",
      benefit:
        "Doladíme každý detail, dokud nebudete spokojeni",
    },
  ],
  deliverablesTrustNote: "Vše v otevřených formátech. Zdrojové soubory jsou vaše.",

  steps: [
    {
      num: 1,
      title: "Brief & strategie",
      desc: "Vyplníte krátký dotazník, probíráme cíle, konkurenci a cílovou skupinu.",
      days: 1,
    },
    {
      num: 2,
      title: "Rešerše & moodboard",
      desc: "Analyzuji trh, hledám vizuální směr a připravím moodboard ke schválení.",
      days: 2,
    },
    {
      num: 3,
      title: "Konceptuální návrhy",
      desc: "Představím 2–3 originální koncepty s vysvětlením designového záměru.",
      days: 5,
    },
    {
      num: 4,
      title: "Revize & finalizace",
      desc: "Na základě vašeho feedbacku doladíme vybraný koncept do finální podoby.",
      days: 3,
    },
    {
      num: 5,
      title: "Předání & brand manuál",
      desc: "Dostanete všechny formáty, zdrojové soubory a základní brand manuál.",
      days: 1,
    },
  ],

  caseStudies: [
    {
      client: "Kavárna Botanica",
      image:
        "https://placehold.co/600x400/245C46/F5F0E6?text=Botanica+Logo",
      result: "+65 % rozpoznatelnost značky",
      quote:
        "Simon navrhl logo, které přesně vystihuje naši filozofii. Hosté se na něj ptají — a to je přesně to, co jsme chtěli.",
    },
    {
      client: "TechFlow s.r.o.",
      image:
        "https://placehold.co/600x400/1A3A2E/C8A84E?text=TechFlow+Logo",
      result: "2× více poptávek po rebrandingu",
      quote:
        "Profesionální přístup od prvního hovoru. Logo jsme dostali ve všech formátech a brand manuál nám ušetřil hodiny vysvětlování.",
    },
    {
      client: "FitBalance",
      image:
        "https://placehold.co/600x400/2E7A5A/FAF8F4?text=FitBalance+Logo",
      result: "+40 % konverzí na webu",
      quote:
        "Nové logo dalo našemu fitness studiu úplně jinou úroveň. Klienti nás berou vážněji.",
    },
  ],
  clientLogos: [
    "Botanica",
    "TechFlow",
    "FitBalance",
    "Modra Kuchyne",
    "StartupHub",
    "Zeleny Dvur",
    "CityBike",
    "ArtPoint",
  ],

  comparison: {
    criteria: [
      "Cena",
      "Originalita",
      "Strategie za designem",
      "Rychlost dodání",
      "Osobní komunikace",
      "Brand manuál",
      "Revize v ceně",
    ],
    columns: {
      anfilov: [3, 5, 5, 4, 5, 5, 4],
      agentura: [1, 4, 4, 2, 2, 5, 3],
      diy: [5, 1, 1, 5, 1, 1, 5],
    },
  },

  pricing: {
    anchor: 15000,
    examples: [
      {
        name: "Logo pro startup",
        price: 15000,
        scope: "logo + 2 varianty + základní brand manuál",
      },
      {
        name: "Logo + vizuální identita",
        price: 35000,
        scope: "logo + barvy + typografie + rozšířený brand manuál",
      },
      {
        name: "Kompletní rebranding",
        price: 60000,
        scope:
          "audit stávající značky + nové logo + kompletní vizuální systém + implementační podpora",
      },
    ],
    factors: [
      { name: "Počet konceptů", simple: "2", complex: "3+" },
      { name: "Rozsah brand manuálu", simple: "Základní (4 str.)", complex: "Rozšířený (12+ str.)" },
      { name: "Animovaná verze", simple: "Ne", complex: "Ano" },
      { name: "Počet revizí", simple: "2 kola", complex: "Neomezené" },
      { name: "Express dodání", simple: "12 dní", complex: "5 dní (+50 %)" },
    ],
  },

  faq: [
    {
      q: "Kolik stojí tvorba loga?",
      a: "Cena začíná od 15 000 Kč za originální logotyp včetně brand manuálu. Finální cena závisí na rozsahu — počtu konceptů, verzí a doplňkových služeb.",
    },
    {
      q: "Jak dlouho trvá tvorba loga?",
      a: "Standardní dodání je 12 pracovních dní od schválení briefu. Express verze je možná do 5 dní s příplatkem 50 %.",
    },
    {
      q: "Co přesně dostanu?",
      a: "Originální logo ve formátech SVG, PNG a PDF, základní brand manuál, zdrojové soubory a 2 kola revizí.",
    },
    {
      q: "V jakých formátech logo dodáváte?",
      a: "SVG (vektory pro web), PNG (transparentní pozadí), PDF (tisk). Na vyžádání i EPS nebo AI.",
    },
    {
      q: "Kolik revizí je v ceně?",
      a: "V základní ceně jsou 2 kola revizí. Každé kolo = kompletní sada úprav podle vašeho feedbacku. Další revize za 2 000 Kč/kolo.",
    },
    {
      q: "Proč ne Fiverr nebo AI generátor?",
      a: "Fiverr a AI vytvoří generický výstup bez strategie. Profesionální logo vychází z analýzy trhu, cílové skupiny a dlouhodobé vize značky.",
    },
    {
      q: "Mohu logo používat komerčně?",
      a: "Ano. Po zaplacení přecházejí veškerá práva k finálnímu logu na vás. Žádné licenční poplatky ani omezení.",
    },
    {
      q: "Co když se mi žádný návrh nelíbí?",
      a: "Za 12 let se to nestalo. Ale pokud by nastal tento extrém, domluvíme se na dalším postupu individuálně — spokojenost je priorita.",
    },
  ],

  crossLinks: [
    {
      name: "Brand manuál",
      slug: "brand-manual",
      description:
        "Máte logo? Teď potřebujete brand manuál, aby ho váš tým používal správně.",
    },
    {
      name: "Vizuální identita",
      slug: "vizualni-identita",
      description:
        "Rozšiřte logo do kompletního vizuálního systému — barvy, typografie, šablony.",
    },
    {
      name: "Šablony pro Canva",
      slug: "sablony-canva",
      description:
        "Nechte si připravit brandované šablony, které zvládne váš tým bez designéra.",
    },
  ],

  articles: [
    {
      slug: "jak-vybrat-barvy-pro-logo",
      title: "Jak vybrat barvy pro logo: Psychologie barev v praxi",
      thumbnail:
        "https://placehold.co/400x240/C8A84E/1C1C1C?text=Barvy+loga",
      funnelTag: "TOFU",
      type: "how-to",
    },
    {
      slug: "kolik-stoji-logo-2026",
      title: "Kolik stojí logo v roce 2026? Srovnání cen a přístupů",
      thumbnail:
        "https://placehold.co/400x240/245C46/F5F0E6?text=Cena+loga",
      funnelTag: "MOFU",
      type: "know-how",
    },
    {
      slug: "typy-log-kompletni-pruvodce",
      title: "Typy log: Kompletní průvodce od logotypu po emblem",
      thumbnail:
        "https://placehold.co/400x240/1A3A2E/C8A84E?text=Typy+log",
      funnelTag: "TOFU",
      type: "know-how",
    },
  ],

  glossaryTerms: [
    "Logotyp",
    "Wordmark",
    "Signet",
    "Brand manuál",
    "Vizuální identita",
    "Kerning",
    "Vektorová grafika",
    "Negativní prostor",
  ],
};

// ---------------------------------------------------------------------------
// Lookup helper — will be replaced by Sanity query
// ---------------------------------------------------------------------------

const sluzby: Record<string, SluzbaData> = {
  "tvorba-loga": demoSluzba,
};

export function getSluzbaBySlug(slug: string): SluzbaData | undefined {
  return sluzby[slug];
}

export function getAllSluzbaSlugs(): string[] {
  return Object.keys(sluzby);
}
