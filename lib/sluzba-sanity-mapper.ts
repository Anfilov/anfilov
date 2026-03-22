import { urlForImage } from "@/sanity/lib/image";
import type { SluzbaData } from "./sluzba-types";

// ---------------------------------------------------------------------------
// Sanity GROQ response shape
// ---------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SanitySluzba {
  _id: string;
  name: string;
  slug: string;
  category?: string;
  categoryOrder?: number;
  heroTitle?: string;
  heroSubheadline?: string;
  heroMediaType?: "image" | "video" | "embed";
  heroImage?: { image: any; alt?: string };
  heroVideo?: { asset: { url: string } };
  heroEmbed?: string;
  heroBackgroundColor?: string;
  heroPriceLabel?: string;
  heroProjectsLabel?: string;
  heroDeliveryLabel?: string;
  atomicAnswer?: string;
  metaTitle?: string;
  metaDescription?: string;

  problemOverline?: string;
  problemTitle?: string;
  problemItems?: { imageUrl?: string; text: string }[];

  reseniOverline?: string;
  reseniTitle?: string;
  reseniItems?: { title: string; text: string }[];
  reseniMediaType?: "image" | "embed";
  reseniImage?: { image: any; alt?: string };
  reseniEmbed?: string;

  procesOverline?: string;
  procesTitle?: string;
  procesSteps?: { title: string; days: number; text: string }[];

  videoOverline?: string;
  videoTitle?: string;
  videoBody?: string;
  videoSource?: "url" | "embed";
  videoUrl?: string;
  videoEmbed?: string;

  portfolioOverline?: string;
  portfolioTitle?: string;
  portfolioProjects?: any[];

  cenikOverline?: string;
  cenikTitle?: string;
  cenikSubtitle?: string;
  cenikPriceTitle?: string;
  cenikPriceLabel?: string;
  cenikIncludedTitle?: string;
  cenikIncludedItems?: { name: string; desc: string }[];
  cenikTableTitle?: string;
  cenikTableColumns?: string[];
  cenikTableRows?: { criterion: string; scores: number[] }[];
  cenikTableNote?: string;

  nastrojeOverline?: string;
  nastrojeTitle?: string;
  nastrojeItems?: { _id: string; name: string; url?: string; logoUrl?: string }[];

  faqOverline?: string;
  faqTitle?: string;
  faqItems?: { question: string; answer: string }[];
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function parsePrice(label?: string): number {
  if (!label) return 0;
  const match = label.replace(/\s/g, "").match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

// ---------------------------------------------------------------------------
// Mapper
// ---------------------------------------------------------------------------

export function mapSanityToSluzbaData(raw: SanitySluzba): SluzbaData {
  const steps = (raw.procesSteps ?? []).map((s, i) => ({
    num: i + 1,
    title: s.title,
    desc: s.text,
    days: s.days,
  }));

  const deliveryDays = steps.reduce((sum, s) => sum + s.days, 0);

  // Build comparison from Sanity table data
  const tableColumns = raw.cenikTableColumns ?? ["ANFILOV", "Agentura", "Svépomocí"];
  const tableRows = raw.cenikTableRows ?? [];
  const comparison = {
    criteria: tableRows.map((r) => r.criterion),
    columns: {
      anfilov: tableRows.map((r) => r.scores?.[0] ?? 0),
      agentura: tableRows.map((r) => r.scores?.[1] ?? 0),
      diy: tableRows.map((r) => r.scores?.[2] ?? 0),
    },
  };

  // Hero image URL
  let heroImageUrl = "";
  if (raw.heroImage?.image) {
    try {
      heroImageUrl = urlForImage(raw.heroImage.image)
        .width(2560)
        .height(2560)
        .fit("max")
        .url();
    } catch {
      heroImageUrl = "";
    }
  }

  return {
    name: raw.name,
    slug: raw.slug,
    tema: raw.name,
    priceFrom: parsePrice(raw.cenikPriceLabel ?? raw.heroPriceLabel),
    deliveryDays,
    metaTitle: raw.metaTitle ?? raw.name,
    metaDescription: raw.metaDescription ?? "",

    // Hero
    heroTitle: raw.heroTitle,
    heroSubheadline: raw.heroSubheadline ?? "",
    heroImage: heroImageUrl,
    heroVideoUrl: raw.heroVideo?.asset?.url ?? "",
    heroMediaType: raw.heroMediaType,
    heroEmbed: raw.heroEmbed,
    heroBackgroundColor: raw.heroBackgroundColor || undefined,
    heroPriceLabel: raw.heroPriceLabel,
    heroProjectsLabel: raw.heroProjectsLabel,
    heroDeliveryLabel: raw.heroDeliveryLabel,
    rating: 4.9,
    projectCount: 127,

    // Atomic Answer
    atomicAnswer: raw.atomicAnswer ?? "",

    // Pain Points
    painPoints: (raw.problemItems ?? []).map((item) => ({
      icon: "",
      image: item.imageUrl,
      text: item.text,
    })),

    // Deliverables (mapped from reseniItems)
    deliverables: (raw.reseniItems ?? []).map((item) => ({
      title: item.title,
      benefit: item.text,
    })),
    deliverablesTrustNote: "",

    // Process
    steps,

    // Portfolio (not used directly — projects are handled separately in page)
    caseStudies: [],
    clientLogos: [],

    // Comparison
    comparison,

    // Pricing
    pricing: {
      anchor: parsePrice(raw.cenikPriceLabel ?? raw.heroPriceLabel),
      examples: [],
      factors: [],
    },

    // FAQ
    faq: (raw.faqItems ?? []).map((item) => ({
      q: item.question,
      a: item.answer,
    })),

    // Cross-links based on category (dynamically resolved)
    crossLinks: getCrossLinks(raw.category, raw.slug),
    articles: getArticles(raw.category),
    glossaryTerms: getGlossaryTerms(raw.category),
  };
}

// ---------------------------------------------------------------------------
// Category-aware cross-links, articles & glossary
// ---------------------------------------------------------------------------

type CrossLink = { name: string; slug: string; description: string };
type Article = { slug: string; title: string; thumbnail: string; funnelTag: "TOFU" | "MOFU" | "BOFU"; type: string };

const CROSS_LINKS: Record<string, CrossLink[]> = {
  "znacka-identita": [
    { name: "Brand manuál", slug: "brand-manual", description: "Pravidla pro konzistentní používání vaší značky." },
    { name: "Vizuální identita", slug: "vizualni-identita", description: "Kompletní vizuální systém — barvy, typografie, šablony." },
    { name: "Tvorba webu", slug: "tvorba-webu", description: "Web, který vaši novou značku představí světu." },
  ],
  webdesign: [
    { name: "Vizuální identita", slug: "vizualni-identita", description: "Web potřebuje silnou značku — identita je základ." },
    { name: "Prodejní stránky", slug: "prodejni-stranky", description: "Landing page zaměřená na konverze a prodej." },
    { name: "UI kit / Design systém", slug: "ui-kit-design-system", description: "Jednotný designový systém pro rychlejší vývoj." },
  ],
  "firemni-tiskoviny": [
    { name: "Brand manuál", slug: "brand-manual", description: "Pravidla, aby všechny tiskoviny vypadaly konzistentně." },
    { name: "Vizuální identita", slug: "vizualni-identita", description: "Tiskoviny fungují nejlépe jako součást uceleného vizuálního stylu." },
    { name: "Moderní vizitka", slug: "moderni-vizitka", description: "Vizitka, která udělá první dojem za vás." },
  ],
  "obalovy-design": [
    { name: "Vizuální identita", slug: "vizualni-identita", description: "Obal by měl být součástí vizuálního systému vaší značky." },
    { name: "Katalog / Brožura", slug: "katalog-brozura", description: "Představte své produkty v profesionálním katalogu." },
    { name: "POS materiály", slug: "pos-materialy", description: "Doplňte obaly o POS materiály v místě prodeje." },
  ],
  "socialni-media": [
    { name: "Šablony pro Canva", slug: "sablony-canva", description: "Brandované šablony, které váš tým snadno upraví." },
    { name: "Design sociálních médií", slug: "design-socialnich-medii", description: "Kompletní vizuální systém pro vaše sociální sítě." },
    { name: "Vizuální identita", slug: "vizualni-identita", description: "Sociální sítě jsou součástí značky — identita je základ." },
  ],
  "digitalni-design": [
    { name: "Newsletter design", slug: "newsletter-design", description: "E-mailové šablony, které lidé otevírají a proklikávají." },
    { name: "Prezentace a pitch decky", slug: "prezentace-pitch-decky", description: "Prezentace, která přesvědčí investory i klienty." },
    { name: "Infografiky", slug: "infografiky", description: "Složitá data v přehledné vizuální podobě." },
  ],
  "online-prodej": [
    { name: "Prodejní stránky", slug: "prodejni-stranky", description: "Landing page zaměřená čistě na konverze." },
    { name: "Konverzní trychtýř", slug: "konverzni-trychtyr", description: "Kompletní prodejní systém od prvního kontaktu po nákup." },
    { name: "Email marketing", slug: "email-marketing-automatizace", description: "Automatizované e-maily, které prodávají za vás." },
  ],
};

const ARTICLES: Record<string, Article[]> = {
  "znacka-identita": [
    { slug: "proc-investovat-do-brandingu", title: "Proč investovat do brandingu: 5 důvodů, které přesvědčí i skeptiky", thumbnail: "https://placehold.co/400x240/C8A84E/1C1C1C?text=Branding", funnelTag: "TOFU", type: "know-how" },
    { slug: "brand-strategie-krok-za-krokem", title: "Brand strategie krok za krokem: Průvodce pro malé firmy", thumbnail: "https://placehold.co/400x240/245C46/F5F0E6?text=Strategie", funnelTag: "MOFU", type: "how-to" },
  ],
  webdesign: [
    { slug: "kolik-stoji-web-2026", title: "Kolik stojí tvorba webu v roce 2026? Přehled cen", thumbnail: "https://placehold.co/400x240/C8A84E/1C1C1C?text=Cena+webu", funnelTag: "MOFU", type: "know-how" },
    { slug: "rychlost-webu-a-konverze", title: "Jak rychlost webu ovlivňuje konverze a tržby", thumbnail: "https://placehold.co/400x240/245C46/F5F0E6?text=Web+speed", funnelTag: "TOFU", type: "know-how" },
  ],
  "firemni-tiskoviny": [
    { slug: "firemni-tiskoviny-pruvodce", title: "Firemní tiskoviny v digitální době: Průvodce pro firmy", thumbnail: "https://placehold.co/400x240/C8A84E/1C1C1C?text=Tiskoviny", funnelTag: "TOFU", type: "know-how" },
    { slug: "vizitka-ktera-zaujme", title: "Jak by měla vypadat vizitka, která zaujme na první pohled", thumbnail: "https://placehold.co/400x240/245C46/F5F0E6?text=Vizitky", funnelTag: "MOFU", type: "how-to" },
  ],
  "obalovy-design": [
    { slug: "obalovy-design-trendy", title: "Trendy v obalovém designu: Co funguje na regále", thumbnail: "https://placehold.co/400x240/C8A84E/1C1C1C?text=Obaly", funnelTag: "TOFU", type: "know-how" },
    { slug: "etiketa-design-pravidla", title: "Pravidla designu etiket: Zákonné požadavky a estetika", thumbnail: "https://placehold.co/400x240/245C46/F5F0E6?text=Etikety", funnelTag: "MOFU", type: "how-to" },
  ],
  "socialni-media": [
    { slug: "vizualni-obsah-socialni-site", title: "Vizuální obsah na sociální sítě: Formáty a rozměry 2026", thumbnail: "https://placehold.co/400x240/C8A84E/1C1C1C?text=Social", funnelTag: "TOFU", type: "know-how" },
    { slug: "canva-sablony-vs-designer", title: "Canva šablony vs. designér: Kdy stačí Canva a kdy ne", thumbnail: "https://placehold.co/400x240/245C46/F5F0E6?text=Canva", funnelTag: "MOFU", type: "know-how" },
  ],
  "digitalni-design": [
    { slug: "newsletter-design-best-practices", title: "Newsletter design: Jak zvýšit open rate vizuálním designem", thumbnail: "https://placehold.co/400x240/C8A84E/1C1C1C?text=Newsletter", funnelTag: "TOFU", type: "how-to" },
    { slug: "pitch-deck-co-obsahuje", title: "Pitch deck: Co musí obsahovat a jak ho navrhnout", thumbnail: "https://placehold.co/400x240/245C46/F5F0E6?text=Pitch+deck", funnelTag: "MOFU", type: "how-to" },
  ],
  "online-prodej": [
    { slug: "landing-page-konverze", title: "Landing page: 7 prvků, které zvyšují konverze", thumbnail: "https://placehold.co/400x240/C8A84E/1C1C1C?text=Landing", funnelTag: "MOFU", type: "how-to" },
    { slug: "sales-funnel-pruvodce", title: "Sales funnel: Kompletní průvodce konverzním trychtýřem", thumbnail: "https://placehold.co/400x240/245C46/F5F0E6?text=Funnel", funnelTag: "TOFU", type: "know-how" },
  ],
};

const GLOSSARY: Record<string, string[]> = {
  "znacka-identita": ["Branding", "Brand identita", "Brand manuál", "Vizuální identita", "Naming", "Brand strategie", "Rebranding", "Tone of voice"],
  webdesign: ["UX design", "UI design", "Wireframe", "Prototyp", "Responzivní design", "Design systém", "CMS", "SEO"],
  "firemni-tiskoviny": ["CMYK", "DPI", "Spadávka", "Rastr", "Tiskový arch", "Laminace", "Papír gramáž", "Perforační zlom"],
  "obalovy-design": ["Packaging", "Label design", "POS", "Shelf appeal", "Die-cut", "Prepress", "Pantone", "Mockup"],
  "socialni-media": ["Feed layout", "Carousel", "Story", "Reels", "Content pillar", "Engagement rate", "Brand voice", "Visual identity"],
  "digitalni-design": ["Newsletter", "Open rate", "CTR", "Infografika", "Pitch deck", "Slide master", "Ikonografie", "AI prompt engineering"],
  "online-prodej": ["Landing page", "Konverze", "Funnel", "Lead magnet", "Email automatizace", "A/B testování", "CTA", "Opt-in"],
};

function getCrossLinks(category: string | undefined, currentSlug: string): CrossLink[] {
  const links = CROSS_LINKS[category ?? ""] ?? CROSS_LINKS["znacka-identita"];
  return links.filter((l) => l.slug !== currentSlug);
}

function getArticles(category: string | undefined): Article[] {
  return ARTICLES[category ?? ""] ?? ARTICLES["znacka-identita"];
}

function getGlossaryTerms(category: string | undefined): string[] {
  return GLOSSARY[category ?? ""] ?? GLOSSARY["znacka-identita"];
}
