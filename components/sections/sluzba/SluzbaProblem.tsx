import { icons } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { SluzbaData } from "@/lib/sluzba-types";

interface Props {
  offer: SluzbaData;
}

/** Problém — emocionální přechod od problému k řešení. */
export function SluzbaProblem({ offer }: Props) {
  return (
    <section className="bg-[var(--color-surface)] pt-[var(--space-section-compact)] pb-[var(--section-padding-y)]">
      <Container>
        <header className="max-w-[680px] mb-[var(--space-heading-gap)]">
          <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
            {offer.problemOverline || "Problém"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
            {offer.problemTitle || "Poznáváte některý z\u00a0těchto problémů?"}
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-grid)] reveal-stagger">
          {offer.painPoints.map((point, i) => (
            <article
              key={i}
              className="reveal group"
            >
              {point.icon && icons[point.icon as keyof typeof icons] ? (
                (() => {
                  const LucideIcon = icons[point.icon as keyof typeof icons];
                  return (
                    <div
                      className="mb-5 w-[64px] h-[64px] rounded-[var(--radius-md)] bg-[var(--color-accent-subtle)] flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <LucideIcon size={28} strokeWidth={1.5} className="text-[var(--color-gold)]" />
                    </div>
                  );
                })()
              ) : null}
              <p className="text-lg font-medium text-[var(--color-text-primary)] font-[family-name:var(--font-body)] leading-[1.5] max-w-[280px]">
                {point.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
