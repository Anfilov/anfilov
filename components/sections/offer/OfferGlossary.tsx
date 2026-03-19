import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { OfferData } from "@/lib/offer-types";

interface Props {
  offer: OfferData;
}

/** Blok 13 — Slovníkové pojmy. Inline pill tagy. */
export function OfferGlossary({ offer }: Props) {
  if (!offer.glossaryTerms.length) return null;

  return (
    <section className="bg-[var(--color-surface)] py-10 sm:py-12 border-t border-[var(--color-border)]">
      <Container>
        <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-text-tertiary)] mb-4 font-[family-name:var(--font-ui)]">
          Související pojmy
        </p>

        <div className="flex flex-wrap gap-2.5 mb-5">
          {offer.glossaryTerms.map((term) => {
            const slug = term
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/\s+/g, "-");
            return (
              <a
                key={term}
                href={`/slovnik#${slug}`}
                className="
                  inline-block px-3.5 py-2
                  text-[12px] font-semibold
                  rounded-[var(--radius-xs)]
                  bg-[var(--color-surface-elevated)] border border-[var(--color-border)]
                  text-[var(--color-warm-500)]
                  hover:border-[var(--color-border-accent)] hover:text-[var(--color-gold)]
                  transition-[border-color,color] duration-[var(--duration-fast)]
                  font-[family-name:var(--font-ui)] no-underline
                "
              >
                {term}
              </a>
            );
          })}
        </div>

        <a
          href="/slovnik"
          className="
            inline-flex items-center gap-1.5 text-sm font-semibold
            text-[var(--color-forest-mid)] hover:text-[var(--color-forest)]
            transition-colors duration-[var(--duration-fast)]
            font-[family-name:var(--font-ui)]
          "
        >
          Celý grafický a marketingový slovník
          <ArrowRight size={14} aria-hidden="true" />
        </a>
      </Container>
    </section>
  );
}
