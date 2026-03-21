import {
  Frown,
  Copy,
  TrendingDown,
  AlertTriangle,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { OfferData } from "@/lib/offer-types";

const iconMap: Record<string, LucideIcon> = {
  Frown,
  Copy,
  TrendingDown,
  AlertTriangle,
  HelpCircle,
};

interface Props {
  offer: OfferData;
}

/** Blok 2 — Pain Points. Emocionální přechod od problému k řešení. */
export function OfferPainPoints({ offer }: Props) {
  return (
    <section className="bg-[var(--color-surface)] pt-[var(--space-section-compact)] pb-[var(--section-padding-y)]">
      <Container>
        <header className="max-w-[680px] mb-[var(--space-heading-gap)]">
          <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
            Problém
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
            Poznáváte některý z&nbsp;těchto problémů?
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-grid)] reveal-stagger">
          {offer.painPoints.map((point, i) => {
            const Icon = iconMap[point.icon] ?? HelpCircle;
            return (
              <article
                key={i}
                className="
                  reveal group rounded-[var(--card-radius)]
                  border border-[var(--card-border)]
                  bg-[var(--card-bg)] p-[var(--card-padding)]
                  transition-[border-color,box-shadow] duration-[var(--duration-slow)] ease-[var(--ease-spring)]
                  hover:border-[var(--color-border-accent)] hover:shadow-[var(--shadow-gold-sm)]
                "
              >
                <span
                  className="
                    inline-flex items-center justify-center
                    w-11 h-11 rounded-[var(--radius-md)]
                    bg-[rgba(184,66,42,0.08)]
                    text-[var(--color-error)] mb-5
                  "
                  aria-hidden="true"
                >
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <p className="text-[15px] font-medium text-[var(--color-text-primary)] font-[family-name:var(--font-body)] leading-[1.5]">
                  {point.text}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
