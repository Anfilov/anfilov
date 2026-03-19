import { Container } from "@/components/ui/Container";
import type { OfferData } from "@/lib/offer-types";

interface Props {
  offer: OfferData;
}

/** Blok 0 — Atomic Answer (TL;DR). Max 200 slov čistého textu pro AI extrakci. */
export function OfferAtomicAnswer({ offer }: Props) {
  return (
    <section
      aria-label="Shrnutí služby"
      className="bg-[var(--color-surface-sunken)] border-b border-[var(--color-border)]"
    >
      <Container>
        <div className="max-w-[680px] py-8 sm:py-10 flex gap-5">
          <div className="flex-shrink-0 w-1 rounded-full bg-[var(--color-gold)]" />
          <div>
            <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
              Shrnutí
            </p>
            <p className="text-base sm:text-[17px] text-[var(--color-text-primary)] leading-[1.7] font-[family-name:var(--font-body)]">
              {offer.atomicAnswer}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
