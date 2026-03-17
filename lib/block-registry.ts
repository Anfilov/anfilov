export type BlockCategory =
  | "hero"
  | "social-proof"
  | "features"
  | "content"
  | "conversion"
  | "navigation"
  | "data"
  | "media"
  | "integrations";

export interface BlockMeta {
  /** PascalCase component name — this IS the block name */
  name: string;
  /** Human-readable category for grouping */
  category: BlockCategory;
  /** One-line description */
  description: string;
}

export const blockRegistry: BlockMeta[] = [
  {
    name: "Banner",
    category: "navigation",
    description: "Top-of-page announcement or promo bar",
  },
  {
    name: "HeroCentered",
    category: "hero",
    description: "Full-width hero with centered headline, CTA pair, and metrics bar",
  },
  {
    name: "LogoCloud",
    category: "social-proof",
    description: "Horizontal row of partner / client logos",
  },
  {
    name: "FeatureGrid",
    category: "features",
    description: "3-column grid of feature cards with icons",
  },
  {
    name: "BentoGrid",
    category: "features",
    description: "Asymmetric bento-style feature layout",
  },
  {
    name: "StatsBar",
    category: "data",
    description: "Horizontal bar of key statistics and metrics",
  },
  {
    name: "FeatureAlternating",
    category: "features",
    description: "Alternating image-text rows for feature deep-dives",
  },
  {
    name: "ProcessSteps",
    category: "content",
    description: "Numbered step-by-step process visualization",
  },
  {
    name: "HeroSplit",
    category: "hero",
    description: "Two-column hero with text left, image or media right",
  },
  {
    name: "TestimonialCards",
    category: "social-proof",
    description: "Grid of testimonial cards with avatars and quotes",
  },
  {
    name: "TestimonialLarge",
    category: "social-proof",
    description: "Single large featured testimonial quote",
  },
  {
    name: "PricingTable",
    category: "conversion",
    description: "Side-by-side pricing plan cards with CTA",
  },
  {
    name: "ComparisonTable",
    category: "data",
    description: "Feature comparison table with checkmarks",
  },
  {
    name: "TeamGrid",
    category: "content",
    description: "Grid of team member cards with photos and roles",
  },
  {
    name: "TimelineSection",
    category: "content",
    description: "Vertical timeline of events or milestones",
  },
  {
    name: "BlogPreview",
    category: "content",
    description: "Grid of blog post preview cards",
  },
  {
    name: "BlogPost",
    category: "content",
    description: "Full blog post article layout with rich text",
  },
  {
    name: "Gallery",
    category: "media",
    description: "Image gallery grid with lightbox",
  },
  {
    name: "FaqAccordion",
    category: "content",
    description: "Expandable FAQ question-answer pairs",
  },
  {
    name: "ContactForm",
    category: "conversion",
    description: "Contact form with validation and submit CTA",
  },
  {
    name: "Newsletter",
    category: "conversion",
    description: "Email newsletter signup section",
  },
  {
    name: "HeroVideo",
    category: "hero",
    description: "Video-background hero with overlay text",
  },
  {
    name: "CtaBanner",
    category: "conversion",
    description: "Full-width call-to-action banner",
  },
  {
    name: "LogoMarquee",
    category: "social-proof",
    description: "Infinitely scrolling logo strip with gradient fade edges",
  },
  {
    name: "TestimonialMarquee",
    category: "social-proof",
    description: "Multi-row scrolling wall of testimonial cards",
  },
  {
    name: "FeatureTabs",
    category: "features",
    description: "Tabbed feature deep-dive with image and text switching",
  },
  {
    name: "ServiceCards",
    category: "features",
    description: "Tall service offering cards with gradient icon headers",
  },
  {
    name: "NumberedFeatures",
    category: "features",
    description: "Vertical numbered feature list with strong typographic rhythm",
  },
  {
    name: "HeroProduct",
    category: "hero",
    description: "Product-focused hero with CSS browser-chrome device frame",
  },
  {
    name: "AboutMission",
    category: "content",
    description: "Company mission statement with editorial quote and photo strip",
  },
  {
    name: "Changelog",
    category: "content",
    description: "Version history list with categorized badges",
  },
  {
    name: "CareerListings",
    category: "content",
    description: "Job listing rows with department, location, and type tags",
  },
  {
    name: "MetricsGrid",
    category: "data",
    description: "Bento-style dashboard metrics with sparklines and change indicators",
  },
  {
    name: "SplitComparison",
    category: "data",
    description: "Before/after two-panel comparison with visual divider",
  },
  {
    name: "PricingToggle",
    category: "conversion",
    description: "Pricing cards with monthly/yearly toggle switch",
  },
  {
    name: "CtaInline",
    category: "conversion",
    description: "Compact single-row CTA with inline email input",
  },
  {
    name: "ProductScreenshot",
    category: "media",
    description: "Large product screenshot in styled app-window frame",
  },
  {
    name: "FooterMinimal",
    category: "navigation",
    description: "Single-row minimal footer with links and social icons",
  },
  {
    name: "BannerCookie",
    category: "navigation",
    description: "Fixed-bottom cookie consent banner with dismiss",
  },
  {
    name: "IntegrationGrid",
    category: "integrations",
    description: "Grid of integration cards with featured center highlight",
  },
  {
    name: "IntegrationHub",
    category: "integrations",
    description: "Hub-and-spoke ecosystem visualization with connecting lines",
  },
  {
    name: "NavbarCentered",
    category: "navigation",
    description: "Centered logo with split navigation links on both sides",
  },
  {
    name: "NavbarFloating",
    category: "navigation",
    description: "Floating pill-shaped navbar with frosted glass effect",
  },
  {
    name: "HowItWorks",
    category: "features",
    description: "Three-step process with icons, numbers, and connecting line",
  },
  {
    name: "TextMarquee",
    category: "social-proof",
    description: "Infinite scrolling bold text strip as section divider",
  },
  {
    name: "CaseStudyCards",
    category: "social-proof",
    description: "Mini case study cards with metrics, quotes, and company details",
  },
  {
    name: "FeatureShowcase",
    category: "features",
    description: "Tabbed feature list with switching image preview",
  },
  {
    name: "HeroMinimal",
    category: "hero",
    description: "Typography-first hero with large headline, no image",
  },
  {
    name: "SocialProofBar",
    category: "social-proof",
    description: "Compact trust bar with key stats and ratings",
  },
  {
    name: "VideoSection",
    category: "media",
    description: "Video thumbnail with play button and modal player",
  },
  {
    name: "LogoGridDetailed",
    category: "social-proof",
    description: "Logo grid with hover-reveal partner details",
  },
  {
    name: "CtaSplit",
    category: "conversion",
    description: "Two-column CTA with text left and signup form right",
  },
  {
    name: "FooterFull",
    category: "navigation",
    description: "Multi-column footer with nav links, social icons, newsletter, and copyright",
  },
  {
    name: "AwardsBadges",
    category: "social-proof",
    description: "Trust badges and certifications grid (G2, SOC2, GDPR, ISO)",
  },
  {
    name: "FeatureComparison",
    category: "features",
    description: "Us-vs-them comparison table with checkmarks and highlighted product column",
  },
  {
    name: "MasonryGallery",
    category: "media",
    description: "Pinterest-style masonry grid with mixed aspect ratios and hover overlays",
  },
  {
    name: "GettingStarted",
    category: "conversion",
    description: "Quick-start guide with numbered steps, code snippets, and copy buttons",
  },
  {
    name: "HeroGradient",
    category: "hero",
    description: "Gradient mesh hero with animated blobs, badge, and dual CTAs",
  },
  {
    name: "HeroImageCollage",
    category: "hero",
    description: "Split hero with text left and asymmetric image collage right",
  },
  {
    name: "FeatureHighlight",
    category: "features",
    description: "Full-width single feature deep-dive with browser-frame screenshot and benefits list",
  },
  {
    name: "MediaMentions",
    category: "social-proof",
    description: "As-seen-in press mentions grid with publication names and quotes",
  },
  {
    name: "ResourceLibrary",
    category: "content",
    description: "Filterable grid of guides, videos, ebooks, and templates with type icons",
  },
  {
    name: "EventSchedule",
    category: "content",
    description: "Upcoming events list with dates, locations, type badges, and register CTAs",
  },
  {
    name: "ValuesGrid",
    category: "content",
    description: "Company values grid with icons and descriptions",
  },
  {
    name: "RoadmapTimeline",
    category: "data",
    description: "Product roadmap timeline with shipped, in-progress, and planned status badges",
  },
  {
    name: "DataTable",
    category: "data",
    description: "Styled data table with zebra striping and responsive mobile card layout",
  },
  {
    name: "MultiStepForm",
    category: "conversion",
    description: "Multi-step form wizard with progress bar and step navigation",
  },
  {
    name: "BeforeAfter",
    category: "media",
    description: "Interactive before/after image comparison slider with drag handle",
  },
  {
    name: "VideoGallery",
    category: "media",
    description: "Grid of video thumbnails with play buttons, durations, and hover effects",
  },
  {
    name: "MegaMenu",
    category: "navigation",
    description: "Navbar with expandable mega-dropdown panels, icons, and descriptions",
  },
  {
    name: "ApiShowcase",
    category: "integrations",
    description: "API code showcase with multi-language tabs, syntax display, and copy button",
  },
  {
    name: "StackLogos",
    category: "integrations",
    description: "Tech stack grid with SVG logos and short descriptions",
  },
  {
    name: "ContactMap",
    category: "conversion",
    description: "Split contact section with info cards left and embedded Google Map right",
  },
  {
    name: "ContactMapCards",
    category: "conversion",
    description: "Contact cards row above full-width embedded Google Map",
  },
];

/** All unique categories in display order */
export const blockCategories: BlockCategory[] = [
  "hero",
  "features",
  "social-proof",
  "content",
  "data",
  "conversion",
  "media",
  "navigation",
  "integrations",
];

/** Get blocks filtered by category */
export function getBlocksByCategory(category: BlockCategory): BlockMeta[] {
  return blockRegistry.filter((b) => b.category === category);
}

/** Category display labels */
export const categoryLabels: Record<BlockCategory, string> = {
  hero: "Hero",
  features: "Features",
  "social-proof": "Social Proof",
  content: "Content",
  data: "Data",
  conversion: "Conversion",
  media: "Media",
  navigation: "Navigation",
  integrations: "Integrations",
};
