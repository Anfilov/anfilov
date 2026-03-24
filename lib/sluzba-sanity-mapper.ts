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
  heroVideoLoop?: boolean;
  heroEmbed?: string;

  heroPriceLabel?: string;
  heroProjectsLabel?: string;
  heroDeliveryLabel?: string;
  atomicAnswer?: string;
  metaTitle?: string;
  metaDescription?: string;

  problemOverline?: string;
  problemTitle?: string;
  problemItems?: { icon?: string; text: string }[];

  reseniOverline?: string;
  reseniTitle?: string;
  reseniItems?: { title: string; text: string }[];
  reseniMediaType?: "image" | "icon" | "embed" | "none";
  reseniImage?: { image: any; alt?: string; caption?: string };
  reseniIcon?: string;
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

  crossLinks?: { _id: string; name: string; slug: string; heroTitle?: string; heroSubheadline?: string }[];
  glossaryTerms?: { _id: string; term: string; slug: string; hasDetailPage?: boolean }[];
  articles?: { title: string; slug: string; thumbnailUrl?: string; funnelTag?: string; type?: string }[];
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
    heroVideoLoop: raw.heroVideoLoop ?? false,
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
    problemOverline: raw.problemOverline,
    problemTitle: raw.problemTitle,
    painPoints: (raw.problemItems ?? []).map((item) => ({
      icon: item.icon ?? "",
      text: item.text,
    })),

    // Řešení
    reseniOverline: raw.reseniOverline,
    reseniTitle: raw.reseniTitle,
    deliverables: (raw.reseniItems ?? []).map((item) => ({
      title: item.title,
      benefit: item.text,
    })),
    deliverablesTrustNote: "",
    reseniImageUrl: raw.reseniImage?.image
      ? (() => { try { return urlForImage(raw.reseniImage.image).width(800).height(800).fit("max").url(); } catch { return ""; } })()
      : "",
    reseniImageCaption: raw.reseniImage?.caption ?? "",
    reseniMediaType: raw.reseniMediaType,
    reseniIconName: raw.reseniIcon,

    // Proces
    procesOverline: raw.procesOverline,
    procesTitle: raw.procesTitle,
    steps,

    // Video
    videoOverline: raw.videoOverline,
    videoTitle: raw.videoTitle,
    videoBody: raw.videoBody,
    videoUrl: raw.videoUrl,
    videoEmbed: raw.videoEmbed,

    // Portfolio
    portfolioOverline: raw.portfolioOverline,
    portfolioTitle: raw.portfolioTitle,
    caseStudies: [],
    clientLogos: [],

    // Ceník
    cenikOverline: raw.cenikOverline,
    cenikTitle: raw.cenikTitle,
    cenikSubtitle: raw.cenikSubtitle,
    cenikPriceTitle: raw.cenikPriceTitle,
    cenikPriceLabel: raw.cenikPriceLabel,
    cenikIncludedTitle: raw.cenikIncludedTitle,
    cenikIncludedItems: raw.cenikIncludedItems,
    cenikTableTitle: raw.cenikTableTitle,
    cenikTableNote: raw.cenikTableNote,
    comparison,
    pricing: {
      anchor: parsePrice(raw.cenikPriceLabel ?? raw.heroPriceLabel),
      examples: [],
      factors: [],
    },

    // FAQ
    faqOverline: raw.faqOverline,
    faqTitle: raw.faqTitle,
    faq: (raw.faqItems ?? []).map((item) => ({
      q: item.question,
      a: item.answer,
    })),

    // Nástroje
    nastrojeOverline: raw.nastrojeOverline,
    nastrojeTitle: raw.nastrojeTitle,

    // Cross-links from Sanity references
    crossLinks: (raw.crossLinks ?? [])
      .filter((link) => link.slug !== raw.slug)
      .map((link) => ({
        name: link.name,
        slug: link.slug,
        description: link.heroSubheadline ?? "",
      })),

    // Articles from Sanity
    articles: (raw.articles ?? []).map((a) => ({
      slug: a.slug,
      title: a.title,
      thumbnail: a.thumbnailUrl ?? "",
      funnelTag: (a.funnelTag as "TOFU" | "MOFU" | "BOFU") ?? "TOFU",
      type: a.type ?? "know-how",
    })),

    // Glossary terms from Sanity references
    glossaryTerms: (raw.glossaryTerms ?? []).map((t) => t.term),
  };
}
