import Image from "next/image";
import { Check, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { OfferData } from "@/lib/offer-types";

interface Props {
  offer: OfferData;
}

/** Blok 3 — Řešení / Co získáte. Dvousloupcový: obrázek vlevo, deliverables vpravo. */
export function OfferDeliverables({ offer }: Props) {
  return (
    <section className="bg-[var(--color-surface-sunken)]" style={{ paddingTop: "var(--section-padding-y)", paddingBottom: "calc(var(--section-padding-y) / 2)" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — image */}
          <div className="relative aspect-[4/5] rounded-[var(--radius-xl)] overflow-hidden bg-[var(--color-surface-elevated)] shadow-[var(--shadow-md)]">
            <Image
              src={offer.heroImage}
              alt={`${offer.name} — ukázka výstupu`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>

          {/* Right — content */}
          <div>
            <header className="mb-8">
              <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
                Co získáte
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
                Co vše zahrnuje {offer.name.toLowerCase()}
              </h2>
            </header>

            <div className="space-y-0 divide-y divide-[var(--color-border)]">
              {offer.deliverables.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 py-5"
                >
                  <span
                    aria-hidden="true"
                    className="
                      flex-shrink-0 w-9 h-9 mt-0.5
                      rounded-[var(--avatar-radius)]
                      bg-[rgba(46,122,90,0.08)] text-[var(--color-forest-mid)]
                      inline-flex items-center justify-center
                    "
                  >
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="text-[16px] font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-tight mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-[1.65]">
                      {item.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust note */}
            {offer.deliverablesTrustNote && (
              <div className="mt-8 inline-flex items-center gap-2.5 px-4 py-3 rounded-[var(--radius-sm)] bg-[rgba(46,122,90,0.06)] border border-[rgba(46,122,90,0.12)]">
                <ShieldCheck size={16} className="text-[var(--color-forest-mid)] flex-shrink-0" aria-hidden="true" />
                <p className="text-sm font-medium text-[var(--color-forest-mid)] font-[family-name:var(--font-ui)]">
                  {offer.deliverablesTrustNote}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
