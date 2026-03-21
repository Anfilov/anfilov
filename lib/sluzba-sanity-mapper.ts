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
  heroTitle?: string;
  heroSubheadline?: string;
  heroMediaType?: "image" | "embed";
  heroImage?: { image: any; alt?: string };
  heroEmbed?: string;
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
    heroMediaType: raw.heroMediaType,
    heroEmbed: raw.heroEmbed,
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

    // Not yet in Sanity
    crossLinks: [],
    articles: [],
    glossaryTerms: [],
  };
}
