import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { SluzbaData } from "@/lib/sluzba-types";

interface Props {
  offer: SluzbaData;
}

/** Řešení — co klient získá. Dvousloupcový layout. */
export function SluzbaReseni({ offer }: Props) {
  const items = offer.deliverables;
  if (!items.length) return null;

  return (
    <section className="bg-[var(--color-surface-sunken)]" style={{ paddingTop: "var(--section-padding-y)", paddingBottom: "calc(var(--section-padding-y) / 2)" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — image */}
          <div className="flex justify-center">
            {offer.heroImage ? (
              <img
                src={offer.heroImage}
                alt={`${offer.name} — ukázka výstupu`}
                className="w-full h-auto max-w-[400px] rounded-[var(--card-radius)]"
                loading="lazy"
              />
            ) : (
              <div className="w-full max-w-[400px] aspect-square rounded-[var(--card-radius)] bg-[var(--color-surface)] flex items-center justify-center">
                <span className="text-[var(--color-text-tertiary)] text-sm font-[family-name:var(--font-ui)]">
                  {offer.name}
                </span>
              </div>
            )}
          </div>

          {/* Right — content */}
          <div>
            <header className="mb-8">
              <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
                Řešení
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
                {offer.name} — co získáte
              </h2>
            </header>

            <div className="space-y-0 divide-y divide-[var(--color-border)] reveal-stagger">
              {items.map((item, i) => (
                <div key={i} className="reveal flex gap-5 py-5">
                  <span
                    aria-hidden="true"
                    className="
                      flex-shrink-0 w-[var(--icon-badge-size)] h-[var(--icon-badge-size)] mt-0.5
                      rounded-[var(--icon-badge-radius)]
                      bg-[var(--icon-badge-bg)] text-[var(--icon-badge-color)]
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

          </div>
        </div>
      </Container>
    </section>
  );
}
