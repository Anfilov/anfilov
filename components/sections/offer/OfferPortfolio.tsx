import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { OfferData } from "@/lib/offer-types";

interface Props {
  offer: OfferData;
}

/** Blok 5 — Portfolio / Reference. Light surface, case studies + logo stripe. */
export function OfferPortfolio({ offer }: Props) {
  return (
    <section
      id="portfolio"
      className="bg-[var(--color-surface)]" style={{ paddingTop: "var(--section-padding-y)", paddingBottom: "calc(var(--section-padding-y) / 2)" }}
    >
      <Container>
        <header className="max-w-[680px] mb-[var(--space-heading-gap)]">
          <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
            Reference
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
            Ukázky práce
          </h2>
        </header>

        {/* Case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-grid)]">
          {offer.caseStudies.map((study, i) => (
            <article
              key={i}
              className="
                group rounded-[var(--card-radius)] overflow-hidden
                bg-[var(--color-surface-elevated)] border border-[var(--card-border)]
                transition-[border-color,box-shadow] duration-[var(--duration-slow)] ease-[var(--ease-spring)]
                hover:border-[var(--color-border-accent)] hover:shadow-[var(--shadow-gold-sm)]
                flex flex-col
              "
            >
              {/* Image */}
              <div className="relative aspect-[3/2] bg-[var(--color-surface-sunken)]">
                <Image
                  src={study.image}
                  alt={`Ukázka práce pro ${study.client}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)]">
                    {study.client}
                  </span>
                  <span className="text-[11px] font-semibold text-[var(--color-warm-600)] font-[family-name:var(--font-ui)] bg-[rgba(200,168,78,0.1)] px-2.5 py-1 rounded-[var(--radius-xs)]">
                    {study.result}
                  </span>
                </div>

                {/* ANFILOV quote spec: gold border-left 3px + gold-bg */}
                <blockquote className="flex-1 relative pl-5 py-3 border-l-[3px] border-[var(--color-gold)] bg-[rgba(200,168,78,0.05)] rounded-r-[var(--radius-sm)]">
                  <p className="text-[14px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-[1.6] italic">
                    &ldquo;{study.quote}&rdquo;
                  </p>
                </blockquote>
              </div>
            </article>
          ))}
        </div>

      </Container>
    </section>
  );
}
