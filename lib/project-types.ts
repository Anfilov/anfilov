/** Sanity image asset resolved via GROQ `asset->` */
export interface SanityImageAsset {
  _id: string;
  url: string;
  metadata?: {
    dimensions?: { width: number; height: number; aspectRatio: number };
    lqip?: string;
  };
}

export interface SanityImage {
  asset: SanityImageAsset;
  hotspot?: { x: number; y: number; width: number; height: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

export interface ImageWithAlt {
  image: SanityImage;
  alt?: string;
  caption?: string;
}

export interface ProjectTestimonial {
  quote?: string;
  author?: string;
  role?: string;
}

export interface ProjectServiceRef {
  _id: string;
  title: string;
  slug: string;
}

export interface ProjectData {
  _id: string;
  title: string;
  slug: string;
  client: string;
  year: number;
  category: "logo" | "brand-identity" | "webdesign" | "graphic-design";
  image: ImageWithAlt;
  gallery?: ImageWithAlt[];
  description: string;
  tags?: string[];
  featured?: boolean;
  order?: number;
  result?: string;
  testimonial?: ProjectTestimonial;
  services?: ProjectServiceRef[];
  externalUrl?: string;
}
