import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { SluzbaData } from "@/lib/sluzba-types";

interface Props {
  offer: SluzbaData;
}

/** Řešení — co klient získá. Dvousloupcový layout. */
export function SluzbaReseni({ offer }: Props) {
  return (
    <section className="bg-[var(--color-surface-sunken)]" style={{ paddingTop: "var(--section-padding-y)", paddingBottom: "calc(var(--section-padding-y) / 2)" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — image */}
          <div className="flex justify-center">
            <img
              src="https://cdn.sanity.io/images/d8caxrt0/production/edae1d0e0b3253db7539c986fa513f760dcc7f6d-2560x2560.webp"
              alt={`${offer.name} — ukázka výstupu`}
              className="w-full h-auto max-w-[400px]"
              loading="lazy"
            />
          </div>

          {/* Right — content */}
          <div>
            <header className="mb-8">
              <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
                Řešení
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
                Skvělé logo, které prodává
              </h2>
            </header>

            <div className="space-y-0 divide-y divide-[var(--color-border)] reveal-stagger">
              {[
                {
                  title: "Strategicky navržené",
                  desc: "Logo musí posilovat vaši značku ve všech aspektech: psychologicky správně navržená symbolika, barva, písmo nebo tvar. Toto je úkol pro strategického tvůrce — nikoliv pro logo generátor či začínajícího grafika.",
                },
                {
                  title: "Skutečně originální",
                  desc: "Na webu najdete stovky služeb, generátorů a nástrojů pro tvorbu loga a tisíce značek, které jsou si velmi podobné. Originální značka však vyžaduje sladění všeho: strategie, názvu, smyslu značky a komunikačního konceptu.",
                },
                {
                  title: "Praktické a na míru",
                  desc: "Potřebujete manuál, šablony pro sociální sítě, nabídky či tiskoviny nebo chcete logo sami co nejsnadněji používat? Každá firma má jiné potřeby a proto výstup musí být na míru. Žádný generický manuál pro všechny.",
                },
              ].map((item, i) => (
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
                      {item.desc}
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
