import { Container } from "@/components/ui/Container";
import type { OfferData } from "@/lib/offer-types";

interface Props {
  offer: OfferData;
}

function DotScore({ score, max = 5, highlight = false }: { score: number; max?: number; highlight?: boolean }) {
  return (
    <span className="inline-flex gap-1.5" aria-label={`${score} z ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full transition-colors duration-[var(--duration-fast)] ${
            i < score
              ? highlight
                ? "bg-[var(--color-gold)]"
                : "bg-[var(--color-warm-400)]"
              : "bg-[var(--color-border)]"
          }`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

const columnLabels = {
  anfilov: "ANFILOV Studio",
  agentura: "Velká agentura",
  diy: "DIY / Fiverr",
};

/** Blok 6 — Srovnání přístupů. ANFILOV table spec. */
export function OfferComparison({ offer }: Props) {
  const { comparison } = offer;

  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <header className="max-w-[680px] mb-[var(--space-heading-gap)]">
          <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
            Srovnání
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
            Srovnání přístupů k&nbsp;tvorbě loga
          </h2>
        </header>

        <div className="overflow-x-auto -mx-4 px-4">
          <div className="min-w-[580px] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="text-left py-4 px-5 font-semibold text-[13px] uppercase tracking-[1.5px] text-[var(--color-text-secondary)] font-[family-name:var(--font-ui)] w-[28%]">
                    Kritérium
                  </th>
                  {(Object.keys(columnLabels) as Array<keyof typeof columnLabels>).map(
                    (key) => (
                      <th
                        key={key}
                        className={`py-4 px-4 font-semibold text-[13px] uppercase tracking-[1.5px] font-[family-name:var(--font-ui)] text-center w-[24%] ${
                          key === "anfilov"
                            ? "text-[var(--color-gold)] bg-[var(--color-accent-subtle)]"
                            : "text-[var(--color-warm-500)]"
                        }`}
                      >
                        {columnLabels[key]}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {comparison.criteria.map((criterion, i) => (
                  <tr
                    key={criterion}
                    className="border-b border-[var(--color-border)] last:border-0"
                  >
                    <td className="py-3.5 px-5 text-[14px] font-semibold text-[var(--color-text-primary)] font-[family-name:var(--font-ui)]">
                      {criterion}
                    </td>
                    {(Object.keys(comparison.columns) as Array<keyof typeof comparison.columns>).map(
                      (col) => (
                        <td
                          key={col}
                          className={`py-3.5 px-4 text-center ${
                            col === "anfilov" ? "bg-[rgba(200,168,78,0.04)]" : ""
                          }`}
                        >
                          <DotScore
                            score={comparison.columns[col][i]}
                            highlight={col === "anfilov"}
                          />
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-5 text-[12px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-ui)]">
          Srovnání vychází z průměrných zkušeností klientů. Výsledky se mohou lišit podle konkrétního poskytovatele.
        </p>
      </Container>
    </section>
  );
}
