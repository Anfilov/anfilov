// ---------------------------------------------------------------------------
// Offer Page — Data Model
// Prepared for Sanity CMS integration (types mirror future schema)
// ---------------------------------------------------------------------------

export interface OfferPainPoint {
  icon: string; // Lucide icon name
  text: string;
}

export interface OfferDeliverable {
  title: string;
  benefit: string;
}

export interface OfferStep {
  num: number;
  title: string;
  desc: string;
  days: number;
}

export interface OfferCaseStudy {
  client: string;
  image: string;
  result: string;
  quote: string;
}

export interface OfferPricingExample {
  name: string;
  price: number;
  scope: string;
}

export interface OfferPricingFactor {
  name: string;
  simple: string;
  complex: string;
}

export interface OfferPricing {
  anchor: number;
  examples: OfferPricingExample[];
  factors: OfferPricingFactor[];
}

export interface OfferComparison {
  criteria: string[];
  columns: {
    anfilov: number[];
    agentura: number[];
    diy: number[];
  };
}

export interface OfferFaqItem {
  q: string;
  a: string;
}

export interface OfferCrossLink {
  name: string;
  slug: string;
  description: string;
}

export interface OfferArticle {
  slug: string;
  title: string;
  thumbnail: string;
  funnelTag: "TOFU" | "MOFU" | "BOFU";
  type: string;
}

export interface OfferData {
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
  painPoints: OfferPainPoint[];

  // Blok 3 — Deliverables
  deliverables: OfferDeliverable[];
  deliverablesTrustNote: string;

  // Blok 4 — Process
  steps: OfferStep[];

  // Blok 5 — Portfolio
  caseStudies: OfferCaseStudy[];
  clientLogos: string[];

  // Blok 6 — Comparison
  comparison: OfferComparison;

  // Blok 7 — Pricing
  pricing: OfferPricing;

  // Blok 8 — FAQ
  faq: OfferFaqItem[];

  // Blok 9 — Author (static, shared across offers)

  // Blok 10 — Cross-sell
  crossLinks: OfferCrossLink[];

  // Blok 11 — Articles
  articles: OfferArticle[];

  // Blok 13 — Glossary
  glossaryTerms: string[];
}
