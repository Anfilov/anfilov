import { Check, X, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ComparisonRow {
  feature: string;
  us: boolean | string;
  them: boolean | string;
}

const rows: ComparisonRow[] = [
  { feature: "Setup time", us: "5 minutes", them: "2–4 hours" },
  { feature: "Pre-built sections", us: "55+", them: "8–12" },
  { feature: "Token-driven theming", us: true, them: false },
  { feature: "One-file rebranding", us: true, them: false },
  { feature: "TypeScript strict mode", us: true, them: false },
  { feature: "WCAG AA accessibility", us: true, them: false },
  { feature: "Server Components", us: true, them: false },
  { feature: "Responsive out of the box", us: true, them: true },
  { feature: "CMS integration", us: true, them: false },
  { feature: "Design presets", us: "8 built-in", them: "None" },
];

function CellValue({ value, highlight }: { value: boolean | string; highlight: boolean }) {
  if (typeof value === "string") {
    return (
      <span
        className={`text-sm font-medium ${
          highlight
            ? "text-[var(--color-text-primary)]"
            : "text-[var(--color-text-tertiary)]"
        }`}
      >
        {value}
      </span>
    );
  }
  if (value) {
    return (
      <Check
        size={18}
        className={
          highlight
            ? "text-[var(--color-accent)]"
            : "text-[var(--color-text-secondary)]"
        }
        aria-label="Included"
      />
    );
  }
  return (
    <X
      size={18}
      className="text-[var(--color-text-tertiary)] opacity-50"
      aria-label="Not included"
    />
  );
}

export function FeatureComparison() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Why switch"
          title="Us vs. the rest"
          subtitle="A side-by-side look at how we compare to traditional website frameworks."
        />

        <div className="max-w-3xl mx-auto">
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_120px_120px] items-end border-b-2 border-[var(--color-border)] pb-3 mb-1">
            <div />
            <div className="text-center">
              <span className="inline-block px-3 py-1 rounded-[var(--radius-pill)] bg-[var(--color-accent)] text-[var(--color-text-on-accent)] text-xs font-bold font-[family-name:var(--font-heading)] tracking-wide uppercase">
                Us
              </span>
            </div>
            <div className="text-center">
              <span className="text-xs font-semibold text-[var(--color-text-tertiary)] font-[family-name:var(--font-heading)] uppercase tracking-wide">
                Others
              </span>
            </div>
          </div>

          {/* Rows */}
          <div role="table" aria-label="Feature comparison">
            {rows.map((row, i) => (
              <div
                key={row.feature}
                role="row"
                className={`
                  grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_120px_120px]
                  items-center py-3.5 border-b border-[var(--color-border)]
                  ${i % 2 === 0 ? "" : "bg-[var(--color-surface-muted)]"}
                `}
              >
                <div role="rowheader" className="text-sm font-medium text-[var(--color-text-primary)] font-[family-name:var(--font-body)] pl-2">
                  {row.feature}
                </div>
                <div role="cell" className="flex justify-center">
                  <CellValue value={row.us} highlight />
                </div>
                <div role="cell" className="flex justify-center">
                  <CellValue value={row.them} highlight={false} />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 layout-text">
            <a
              href="#"
              className="
                inline-flex items-center gap-2 px-6 py-3
                rounded-[var(--radius-md)]
                bg-[var(--color-accent)] text-[var(--color-text-on-accent)]
                text-sm font-semibold font-[family-name:var(--font-heading)]
                hover:opacity-90 active:opacity-80
                transition-opacity duration-[var(--duration-fast)]
                cursor-pointer min-h-[44px]
                focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none
              "
            >
              Start building
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
