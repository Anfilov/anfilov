import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const caseStudies = [
  {
    company: "Acme Corp",
    industry: "SaaS",
    metric: "47%",
    metricLabel: "faster time-to-market",
    quote:
      "We rebuilt our entire marketing site in a weekend using the framework. What used to take our team a full sprint now takes a single afternoon.",
    person: "Sarah Chen",
    role: "VP Engineering",
  },
  {
    company: "NovaPay",
    industry: "Fintech",
    metric: "3×",
    metricLabel: "more landing pages shipped",
    quote:
      "The token system let us launch region-specific landing pages with unique branding — all from one codebase. No more copy-paste chaos.",
    person: "Marcus Oliveira",
    role: "Head of Growth",
  },
  {
    company: "Bloom Health",
    industry: "Healthcare",
    metric: "100%",
    metricLabel: "WCAG AA compliance",
    quote:
      "Accessibility used to be a last-minute scramble. Now it's built in. We passed our first compliance audit on the first try.",
    person: "Dr. Priya Mehta",
    role: "CTO",
  },
];

export function CaseStudyCards() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Case studies"
          title="Real results from real teams"
          subtitle="See how teams use the framework to ship better, faster."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-grid)] max-w-6xl mx-auto">
          {caseStudies.map((study) => (
            <article
              key={study.company}
              className="
                group rounded-[var(--card-radius)] border border-[var(--color-border)]
                bg-[var(--color-surface-elevated)] overflow-hidden
                hover-effect
                flex flex-col
              "
            >
              {/* Metric header */}
              <div className="bg-[var(--color-brand)] px-[var(--card-padding)] py-6 text-center">
                <span className="block text-4xl sm:text-5xl font-[var(--heading-weight)] tracking-[var(--heading-tracking)] font-[family-name:var(--font-heading)] text-[var(--color-surface)]">
                  {study.metric}
                </span>
                <span className="block text-sm text-[var(--color-surface)] opacity-70 font-[family-name:var(--font-body)] mt-1">
                  {study.metricLabel}
                </span>
              </div>

              {/* Content */}
              <div className="p-[var(--card-padding)] flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)]">
                    {study.company}
                  </span>
                  <span className="text-[11px] font-medium tracking-wide uppercase text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)] bg-[var(--color-surface-sunken)] px-2 py-0.5 rounded-[var(--radius-sm)]">
                    {study.industry}
                  </span>
                </div>

                <blockquote className="text-[15px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed flex-1 mb-6">
                  &ldquo;{study.quote}&rdquo;
                </blockquote>

                <footer className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)]">
                      {study.person}
                    </p>
                    <p className="text-xs text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
                      {study.role}
                    </p>
                  </div>
                  <span
                    className="
                      w-8 h-8 rounded-full border border-[var(--color-border)]
                      inline-flex items-center justify-center
                      text-[var(--color-text-tertiary)]
                      group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-text-on-accent)]
                      transition-[background-color,border-color,color] duration-[var(--duration-fast)]
                    "
                    aria-hidden="true"
                  >
                    <ArrowUpRight size={14} strokeWidth={2} />
                  </span>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
