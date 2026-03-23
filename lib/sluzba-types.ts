// ---------------------------------------------------------------------------
// Offer Page — Data Model
// Prepared for Sanity CMS integration (types mirror future schema)
// ---------------------------------------------------------------------------

export interface SluzbaPainPoint {
  icon: string; // Lucide icon name (legacy, optional)
  image?: string; // Image URL (takes priority over icon)
  text: string;
}

export interface SluzbaDeliverable {
  title: string;
  benefit: string;
}

export interface SluzbaStep {
  num: number;
  title: string;
  desc: string;
  days: number;
}

export interface SluzbaCaseStudy {
  client: string;
  image: string;
  result: string;
  quote: string;
}

export interface SluzbaCenikExample {
  name: string;
  price: number;
  scope: string;
}

export interface SluzbaCenikFactor {
  name: string;
  simple: string;
  complex: string;
}

export interface SluzbaCenik {
  anchor: number;
  examples: SluzbaCenikExample[];
  factors: SluzbaCenikFactor[];
}

export interface SluzbaComparison {
  criteria: string[];
  columns: {
    anfilov: number[];
    agentura: number[];
    diy: number[];
  };
}

export interface SluzbaFaqItem {
  q: string;
  a: string;
}

export interface SluzbaCrossLink {
  name: string;
  slug: string;
  description: string;
}

export interface SluzbaArticle {
  slug: string;
  title: string;
  thumbnail: string;
  funnelTag: "TOFU" | "MOFU" | "BOFU";
  type: string;
}

export interface SluzbaData {
  name: string;
  slug: string;
  tema: string;
  priceFrom: number;
  deliveryDays: number;
  metaTitle: string;
  metaDescription: string;

  // Hero
  heroTitle?: string;
  heroSubheadline: string;
  heroImage: string;
  heroVideoUrl?: string;
  heroVideoLoop?: boolean;
  heroMediaType?: "image" | "video" | "embed";
  heroEmbed?: string;

  heroPriceLabel?: string;
  heroProjectsLabel?: string;
  heroDeliveryLabel?: string;
  rating: number;
  projectCount: number;

  // Atomic Answer
  atomicAnswer: string;

  // Blok 2 — Pain Points
  problemOverline?: string;
  problemTitle?: string;
  painPoints: SluzbaPainPoint[];

  // Blok 3 — Deliverables
  reseniOverline?: string;
  reseniTitle?: string;
  deliverables: SluzbaDeliverable[];
  deliverablesTrustNote: string;
  reseniImageUrl?: string;
  reseniImageCaption?: string;

  // Blok 4 — Process
  procesOverline?: string;
  procesTitle?: string;
  steps: SluzbaStep[];

  // Blok 4b — Video
  videoOverline?: string;
  videoTitle?: string;
  videoBody?: string;
  videoUrl?: string;
  videoEmbed?: string;

  // Blok 5 — Portfolio
  portfolioOverline?: string;
  portfolioTitle?: string;
  caseStudies: SluzbaCaseStudy[];
  clientLogos: string[];

  // Blok 6 — Comparison + Pricing
  cenikOverline?: string;
  cenikTitle?: string;
  cenikSubtitle?: string;
  cenikPriceTitle?: string;
  cenikPriceLabel?: string;
  cenikIncludedTitle?: string;
  cenikIncludedItems?: { name: string; desc: string }[];
  cenikTableTitle?: string;
  cenikTableNote?: string;
  comparison: SluzbaComparison;
  pricing: SluzbaCenik;

  // Blok 7 — FAQ
  faqOverline?: string;
  faqTitle?: string;
  faq: SluzbaFaqItem[];

  // Blok 8 — Nástroje
  nastrojeOverline?: string;
  nastrojeTitle?: string;

  // Blok 9 — Author (static, shared across offers)

  // Blok 10 — Cross-sell
  crossLinks: SluzbaCrossLink[];

  // Blok 11 — Articles
  articles: SluzbaArticle[];

  // Blok 13 — Glossary
  glossaryTerms: string[];
}
