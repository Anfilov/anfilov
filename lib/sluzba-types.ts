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

  // Blok 0 — Atomic Answer
  atomicAnswer: string;

  // Blok 1 — Hero
  heroSubheadline: string;
  heroImage: string;
  rating: number;
  projectCount: number;

  // Blok 2 — Pain Points
  painPoints: SluzbaPainPoint[];

  // Blok 3 — Deliverables
  deliverables: SluzbaDeliverable[];
  deliverablesTrustNote: string;

  // Blok 4 — Process
  steps: SluzbaStep[];

  // Blok 5 — Portfolio
  caseStudies: SluzbaCaseStudy[];
  clientLogos: string[];

  // Blok 6 — Comparison
  comparison: SluzbaComparison;

  // Blok 7 — Pricing
  pricing: SluzbaCenik;

  // Blok 8 — FAQ
  faq: SluzbaFaqItem[];

  // Blok 9 — Author (static, shared across offers)

  // Blok 10 — Cross-sell
  crossLinks: SluzbaCrossLink[];

  // Blok 11 — Articles
  articles: SluzbaArticle[];

  // Blok 13 — Glossary
  glossaryTerms: string[];
}
