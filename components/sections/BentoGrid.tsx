import { BarChart3, Globe, Lock, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description:
      "Leverage machine learning to surface patterns in your data that would take humans weeks to find.",
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track metrics as they happen with sub-second latency.",
    span: "lg:col-span-1",
    featured: false,
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Deploy to 200+ edge locations for instant page loads worldwide.",
    span: "lg:col-span-1",
    featured: false,
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2, GDPR, and HIPAA compliance out of the box.",
    span: "lg:col-span-2",
    featured: false,
  },
];

export function BentoGrid() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Capabilities"
          title="More than features"
          subtitle="An asymmetric showcase of what makes us different — built for visual impact."
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[var(--space-grid)]">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`
                  group relative overflow-hidden rounded-[var(--card-radius)]
                  border transition-[border-color] duration-[var(--duration-normal)] ease-[var(--ease-smooth)]
                  hover-effect
                  ${item.span}
                  ${
                    item.featured
                      ? "section-contrast bg-[var(--sc-bg)] text-[var(--sc-text)] border-transparent p-[var(--card-padding)] sm:p-[calc(var(--card-padding)*1.3)] flex flex-col justify-end min-h-[280px] lg:min-h-0"
                      : "bg-[var(--color-surface-elevated)] border-[var(--color-border)] hover:border-[var(--color-accent)]/40 p-[var(--card-padding)]"
                  }
                `}
              >
                {/* Featured card gradient */}
                {item.featured && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-glow-strong),transparent_60%)]"
                  />
                )}

                <div className="relative">
                  <span
                    className={`
                      inline-flex items-center justify-center
                      w-12 h-12 rounded-[var(--radius-lg)] mb-5
                      ${
                        item.featured
                          ? "bg-[var(--sc-pill-bg)] text-[var(--color-accent-light)]"
                          : "bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]"
                      }
                    `}
                    aria-hidden="true"
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <h3
                    className={`font-bold tracking-tight mb-2 font-[family-name:var(--font-heading)] ${
                      item.featured
                        ? "text-xl sm:text-2xl text-[var(--sc-text)]"
                        : "text-lg"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-[15px] leading-relaxed font-[family-name:var(--font-body)] ${
                      item.featured
                        ? "text-[var(--sc-text-muted)] max-w-md"
                        : "text-[var(--color-text-secondary)]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
