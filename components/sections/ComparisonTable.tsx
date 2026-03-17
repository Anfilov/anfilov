import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  { name: "Token-driven theming", us: true, others: false },
  { name: "Dark mode (automatic)", us: true, others: false },
  { name: "24+ pre-built sections", us: true, others: false },
  { name: "WCAG AA accessible", us: true, others: true },
  { name: "Mobile-first responsive", us: true, others: true },
  { name: "TypeScript strict mode", us: true, others: false },
  { name: "Zero JS for static sections", us: true, others: false },
  { name: "One-file rebranding", us: true, others: false },
];

export function ComparisonTable() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Comparison"
          title="Why us over others"
          subtitle="See how we stack up against traditional approaches and other frameworks."
        />

        <div className="max-w-2xl mx-auto overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left py-3 pr-4 font-semibold text-[var(--color-text-primary)]">
                  Feature
                </th>
                <th className="text-center py-3 px-4 font-bold text-[var(--color-text-accent)]">
                  Us
                </th>
                <th className="text-center py-3 pl-4 font-semibold text-[var(--color-text-secondary)]">
                  Others
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr
                  key={f.name}
                  className="border-b border-[var(--color-border)] last:border-0"
                >
                  <td className="py-3 pr-4 text-[var(--color-text-primary)] font-[family-name:var(--font-body)]">
                    {f.name}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {f.us ? (
                      <Check
                        size={18}
                        className="inline-block text-[var(--color-accent)]"
                        aria-label="Included"
                      />
                    ) : (
                      <X
                        size={18}
                        className="inline-block text-[var(--color-text-tertiary)]"
                        aria-label="Not included"
                      />
                    )}
                  </td>
                  <td className="py-3 pl-4 text-center">
                    {f.others ? (
                      <Check
                        size={18}
                        className="inline-block text-[var(--color-text-secondary)]"
                        aria-label="Included"
                      />
                    ) : (
                      <X
                        size={18}
                        className="inline-block text-[var(--color-text-tertiary)]"
                        aria-label="Not included"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
