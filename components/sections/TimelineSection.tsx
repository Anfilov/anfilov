import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const milestones = [
  {
    year: "2020",
    title: "Founded",
    description:
      "Started as a side project to solve our own design consistency problems.",
  },
  {
    year: "2021",
    title: "First 100 users",
    description:
      "Launched publicly after a year of refinement. Early adopters shaped the token architecture.",
  },
  {
    year: "2023",
    title: "Enterprise launch",
    description:
      "Added SSO, compliance, and custom builds for large organizations.",
  },
  {
    year: "2025",
    title: "v2.0 released",
    description:
      "Complete rewrite with Tailwind v4, three-layer tokens, and 24 pre-built sections.",
  },
];

export function TimelineSection() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Our Story"
          title="The journey so far"
          subtitle="From side project to production framework — built with care at every step."
        />

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-[var(--color-border)]"
          />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex items-start gap-6 sm:gap-8 ${
                  i % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse sm:text-right"
                }`}
              >
                {/* Dot */}
                <div
                  aria-hidden="true"
                  className="
                    absolute left-4 sm:left-1/2 -translate-x-1/2
                    w-3 h-3 rounded-[var(--radius-full)]
                    bg-[var(--color-accent)] border-2 border-[var(--color-surface-elevated)]
                    z-10 mt-1.5
                  "
                />

                {/* Content */}
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                  <p className="text-xs font-bold tracking-widest text-[var(--color-text-accent)] uppercase mb-1 font-[family-name:var(--font-heading)]">
                    {m.year}
                  </p>
                  <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-heading)]">{m.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)]">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
