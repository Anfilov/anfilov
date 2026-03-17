import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

type ChangeType = "feature" | "fix" | "improvement";

interface ChangeEntry {
  version: string;
  date: string;
  title: string;
  type: ChangeType;
  description: string;
}

const changeBadgeVariant: Record<ChangeType, "accent" | "success" | "default"> = {
  feature: "accent",
  fix: "success",
  improvement: "default",
};

const entries: ChangeEntry[] = [
  {
    version: "v2.4.0",
    date: "March 10, 2026",
    title: "Integration grid & logo showcase blocks",
    type: "feature",
    description:
      "Two new blocks for showcasing your app ecosystem — a card grid with featured highlights and a hub-and-spoke visualization.",
  },
  {
    version: "v2.3.1",
    date: "March 4, 2026",
    title: "Fixed pricing toggle animation on Safari",
    type: "fix",
    description:
      "Resolved a rendering issue where the monthly/yearly price transition was jumpy on WebKit browsers.",
  },
  {
    version: "v2.3.0",
    date: "February 25, 2026",
    title: "Marquee components for logos and testimonials",
    type: "feature",
    description:
      "Pure CSS infinite-scroll marquee strips with pause-on-hover, gradient edge fades, and full reduced-motion support.",
  },
  {
    version: "v2.2.2",
    date: "February 18, 2026",
    title: "Improved dark mode contrast ratios",
    type: "improvement",
    description:
      "Refined text and border tokens in dark mode to meet WCAG AAA contrast standards across all sections.",
  },
  {
    version: "v2.2.0",
    date: "February 8, 2026",
    title: "Tabbed feature showcase",
    type: "feature",
    description:
      "Interactive tab-based feature block with image crossfade and responsive layout. Supports up to 5 tabs.",
  },
];

export function Changelog() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Changelog"
          title="What&apos;s new"
          subtitle="A history of every feature, fix, and improvement we ship."
        />

        <div className="max-w-3xl layout-mx">
          {entries.map((entry, index) => (
            <article
              key={entry.version}
              className={`
                py-6 sm:py-8
                ${index < entries.length - 1 ? "border-b border-[var(--color-border)]" : ""}
              `}
            >
              {/* Header row */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-sm font-mono font-bold text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-2.5 py-1 rounded-[var(--badge-radius)]">
                  {entry.version}
                </span>
                <Badge variant={changeBadgeVariant[entry.type]}>
                  {entry.type}
                </Badge>
                <span className="text-xs text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
                  {entry.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold tracking-tight font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-2">
                {entry.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                {entry.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
