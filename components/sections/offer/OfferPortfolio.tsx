"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { OfferData } from "@/lib/offer-types";

interface Props {
  offer: OfferData;
}

/** Blok 5 — Portfolio / Reference. Square images with lightbox. */
export function OfferPortfolio({ offer }: Props) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightboxIdx, closeLightbox]);

  return (
    <>
      <section
        id="portfolio"
        className="bg-[var(--color-surface)]"
        style={{
          paddingTop: "var(--section-padding-y)",
          paddingBottom: "calc(var(--section-padding-y) / 2)",
        }}
      >
        <Container>
          <header className="max-w-[680px] mb-[var(--space-heading-gap)]">
            <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
              Reference
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
              Ukázky tvorby loga
            </h2>
          </header>

          {/* Portfolio cards */}
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
                {/* Square image — clickable */}
                <button
                  type="button"
                  onClick={() => setLightboxIdx(i)}
                  className="relative aspect-square bg-[var(--color-surface-sunken)] cursor-zoom-in focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:outline-none"
                  aria-label={`Zvětšit ukázku: ${study.client}`}
                >
                  <Image
                    src={study.image}
                    alt={`Ukázka loga pro ${study.client}`}
                    fill
                    className="object-cover transition-transform duration-[var(--duration-slow)] group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </button>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)]">
                      {study.client}
                    </span>
                    <span className="text-[11px] font-semibold text-[var(--color-warm-600)] font-[family-name:var(--font-ui)] bg-[rgba(200,168,78,0.1)] px-2.5 py-1 rounded-[var(--radius-xs)]">
                      {study.result}
                    </span>
                  </div>
                  <p className="text-[13px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)] leading-[1.6]">
                    {study.quote}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-surface-overlay)] backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Ukázka: ${offer.caseStudies[lightboxIdx].client}`}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-[var(--radius-sm)] text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-[var(--duration-fast)] cursor-pointer z-10"
            aria-label="Zavřít"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-[90vw] max-h-[85vh] aspect-square rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-xl)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={offer.caseStudies[lightboxIdx].image}
              alt={`Ukázka loga pro ${offer.caseStudies[lightboxIdx].client}`}
              fill
              className="object-cover"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
