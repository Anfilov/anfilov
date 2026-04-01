import { X, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const beforeItems = [
  "Weeks spent rebuilding the same UI patterns",
  "Inconsistent spacing and colors across pages",
  "Accessibility failures in every audit",
  "Dark mode as a multi-sprint project",
  "Redesigns that require touching every component",
];

const afterItems = [
  "Pre-built blocks that just work",
  "Pixel-perfect consistency from design tokens",
  "WCAG AA compliance out of the box",
  "Dark mode with a single class toggle",
  "Global redesign by changing one CSS file",
];

export function SplitComparison() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Comparison"
          title="Before & after"
          subtitle="See what changes when you adopt a token-driven design system."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Single card wrapper */}
          <div className="rounded-[var(--card-radius)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 relative">
              {/* Before panel */}
              <div className="p-[var(--card-padding)] sm:p-[calc(var(--card-padding)*1.2)] md:pr-[60px]">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-error)] font-[family-name:var(--font-heading)] mb-6">
                  Without a system
                </h3>
                <ul className="space-y-4">
                  {beforeItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-error-subtle)] text-[var(--color-error)] inline-flex items-center justify-center mt-0.5">
                        <X size={12} strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vertical divider + VS badge (md+) */}
              <div
                aria-hidden="true"
                className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 items-center justify-center z-10"
              >
                <span className="absolute inset-y-4 w-px bg-[var(--color-border)]" />
                <span
                  className="
                    relative
                    w-10 h-10 flex items-center justify-center
                    rounded-full
                    bg-[var(--color-surface-elevated)] border border-[var(--color-border)]
                    shadow-[var(--shadow-sm)]
                    text-[12px] font-bold tracking-wider text-[var(--color-text-tertiary)]
                    font-[family-name:var(--font-heading)]
                  "
                >
                  VS
                </span>
              </div>

              {/* Horizontal divider (mobile) */}
              <div aria-hidden="true" className="md:hidden h-px bg-[var(--color-border)]" />

              {/* After panel */}
              <div className="p-[var(--card-padding)] sm:p-[calc(var(--card-padding)*1.2)] md:pl-[60px]">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-success)] font-[family-name:var(--font-heading)] mb-6">
                  With this framework
                </h3>
                <ul className="space-y-4">
                  {afterItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] text-[var(--color-text-primary)] font-[family-name:var(--font-body)]"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-success-subtle)] text-[var(--color-success)] inline-flex items-center justify-center mt-0.5">
                        <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
