import {
  Palette,
  Layers,
  Smartphone,
  Shield,
  Zap,
  Settings,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Palette,
    title: "Design Tokens",
    description:
      "Three-layer token architecture. Change one file, rebrand your entire site instantly.",
  },
  {
    icon: Layers,
    title: "24 Sections",
    description:
      "Every section a business website needs — heroes, pricing, testimonials, forms, and more.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Built from 375px up. Every section tested on mobile before moving to desktop breakpoints.",
  },
  {
    icon: Shield,
    title: "Accessible",
    description:
      "WCAG AA compliant. Semantic HTML, ARIA attributes, keyboard navigation, focus management.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Server Components by default. Optimized images, minimal client JS, fast builds.",
  },
  {
    icon: Settings,
    title: "Customizable",
    description:
      "Border radius, shadows, spacing, fonts — every visual property driven by tokens.",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Features"
          title="Everything you need"
          subtitle="A complete design framework built on industry best practices and modern tooling."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-grid)]">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="
                  group relative p-[var(--card-padding)] rounded-[var(--card-radius)]
                  bg-[var(--color-surface)] border border-[var(--color-border)]
                  hover:border-[var(--color-accent)]/40
                  transition-[border-color] duration-[var(--duration-normal)] ease-[var(--ease-smooth)]
                  hover-effect
                "
              >
                {/* Accent glow on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-[var(--card-radius)] bg-[radial-gradient(circle_at_50%_0%,var(--color-glow),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-normal)]"
                />

                <span
                  className="
                    relative inline-flex items-center justify-center
                    w-12 h-12 rounded-[var(--radius-lg)]
                    bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]
                    mb-5
                    group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-on-accent)]
                    transition-colors duration-[var(--duration-normal)]
                  "
                  aria-hidden="true"
                >
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="relative text-lg font-bold mb-2 tracking-tight font-[family-name:var(--font-heading)]">{feature.title}</h3>
                <p className="relative text-[15px] text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
