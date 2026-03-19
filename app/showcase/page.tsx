import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import {
  Banner,
  Navbar,
  HeroCentered,
  LogoCloud,
  FeatureGrid,
  BentoGrid,
  StatsBar,
  FeatureAlternating,
  ProcessSteps,
  HeroSplit,
  TestimonialCards,
  TestimonialLarge,
  PricingTable,
  ComparisonTable,
  TeamGrid,
  TimelineSection,
  BlogPreview,
  BlogPost,
  Gallery,
  FaqAccordion,
  ContactForm,
  Newsletter,
  HeroVideo,
  CtaBanner,
  LogoMarquee,
  TestimonialMarquee,
  FeatureTabs,
  ServiceCards,
  NumberedFeatures,
  HeroProduct,
  AboutMission,
  Changelog,
  CareerListings,
  MetricsGrid,
  SplitComparison,
  PricingToggle,
  CtaInline,
  ProductScreenshot,
  FooterMinimal,
  BannerCookie,
  IntegrationGrid,
  IntegrationHub,
  Footer,
  HowItWorks,
  TextMarquee,
  CaseStudyCards,
  FeatureShowcase,
  HeroMinimal,
  SocialProofBar,
  VideoSection,
  LogoGridDetailed,
  CtaSplit,
  FooterFull,
  AwardsBadges,
  FeatureComparison,
  MasonryGallery,
  GettingStarted,
  HeroGradient,
  HeroImageCollage,
  FeatureHighlight,
  MediaMentions,
  ResourceLibrary,
  EventSchedule,
  ValuesGrid,
  RoadmapTimeline,
  DataTable,
  MultiStepForm,
  BeforeAfter,
  VideoGallery,
  MegaMenu,
  ApiShowcase,
  StackLogos,
  ContactMap,
  ContactMapCards,
} from "@/components/sections";
import { ShowcaseBlock } from "@/components/ui";
import {
  blockCategories,
  getBlocksByCategory,
  categoryLabels,
} from "@/lib/block-registry";

export const metadata: Metadata = {
  title: `Showcase | ${siteConfig.name}`,
  description:
    "A living catalogue of all sections available in the Master Framework. Browse, pick, and compose your pages.",
  robots: { index: false, follow: false },
};

/* ── Component map: registry name → React component ── */
const blockComponents: Record<string, React.ComponentType> = {
  Banner,
  HeroCentered,
  LogoCloud,
  FeatureGrid,
  BentoGrid,
  StatsBar,
  FeatureAlternating,
  ProcessSteps,
  HeroSplit,
  TestimonialCards,
  TestimonialLarge,
  PricingTable,
  ComparisonTable,
  TeamGrid,
  TimelineSection,
  BlogPreview,
  BlogPost,
  Gallery,
  FaqAccordion,
  ContactForm,
  Newsletter,
  HeroVideo,
  CtaBanner,
  LogoMarquee,
  TestimonialMarquee,
  FeatureTabs,
  ServiceCards,
  NumberedFeatures,
  HeroProduct,
  AboutMission,
  Changelog,
  CareerListings,
  MetricsGrid,
  SplitComparison,
  PricingToggle,
  CtaInline,
  ProductScreenshot,
  FooterMinimal,
  BannerCookie,
  IntegrationGrid,
  IntegrationHub,
  HowItWorks,
  TextMarquee,
  CaseStudyCards,
  FeatureShowcase,
  HeroMinimal,
  SocialProofBar,
  VideoSection,
  LogoGridDetailed,
  CtaSplit,
  FooterFull,
  AwardsBadges,
  FeatureComparison,
  MasonryGallery,
  GettingStarted,
  HeroGradient,
  HeroImageCollage,
  FeatureHighlight,
  MediaMentions,
  ResourceLibrary,
  EventSchedule,
  ValuesGrid,
  RoadmapTimeline,
  DataTable,
  MultiStepForm,
  BeforeAfter,
  VideoGallery,
  MegaMenu,
  ApiShowcase,
  StackLogos,
  ContactMap,
  ContactMapCards,
};

export default function ShowcasePage() {
  return (
    <>
      <Navbar />

      {/* ══════════════ Hero ══════════════ */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] tracking-[var(--heading-tracking)] text-[var(--color-text-primary)] mb-4">
            Block Catalogue
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] max-w-2xl mx-auto">
            All available sections in the Master Framework. Browse, pick, and compose your pages.
          </p>
        </div>
      </section>

      {/* ══════════════ Table of Contents ══════════════ */}
      <section className="bg-[var(--color-surface)] border-b border-[var(--color-border)] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] mb-6 max-w-2xl">
            Jump to any section below by clicking its name.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blockCategories.map((cat) => {
              const blocks = getBlocksByCategory(cat);
              if (blocks.length === 0) return null;
              return (
                <div key={cat}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] font-[family-name:var(--font-heading)] mb-3">
                    {categoryLabels[cat]}
                  </p>
                  <ul className="space-y-1.5">
                    {blocks.map((block) => (
                      <li key={block.name}>
                        <a
                          href={`#${block.name}`}
                          className="group flex items-baseline gap-2 text-[13px] font-mono text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-[var(--duration-fast)]"
                        >
                          <span className="font-semibold group-hover:underline underline-offset-2">
                            {block.name}
                          </span>
                          <span className="hidden lg:inline text-[11px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)] font-normal truncate">
                            {block.description}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ Blocks ══════════════ */}
      <main>
        {blockCategories.map((cat) => {
          const blocks = getBlocksByCategory(cat);
          if (blocks.length === 0) return null;
          return (
            <div key={cat}>
              {/* Category divider */}
              <div className="bg-[var(--color-surface)] border-y border-[var(--color-border)] py-6 sm:py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] font-[family-name:var(--font-heading)]">
                    {categoryLabels[cat]}
                  </p>
                </div>
              </div>
              {blocks.map((block) => {
                const Component = blockComponents[block.name];
                if (!Component) return null;
                return (
                  <ShowcaseBlock
                    key={block.name}
                    name={block.name}
                    category={block.category}
                    description={block.description}
                  >
                    <Component />
                  </ShowcaseBlock>
                );
              })}
            </div>
          );
        })}
      </main>

      <Footer />
    </>
  );
}
