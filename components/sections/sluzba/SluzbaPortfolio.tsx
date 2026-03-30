"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

/** Pre-computed image data (URLs resolved on server) */
export interface PortfolioProjectView {
  _id: string;
  title?: string;
  client: string;
  description?: string;
  result?: string;
  externalUrl?: string;
  thumbUrl: string;
  thumbAlt: string;
  /** All images for lightbox: [main, ...gallery] */
  lightboxImages: { src: string; alt: string }[];
}

interface Props {
  projects?: PortfolioProjectView[];
  serviceName?: string;
  overline?: string;
  title?: string;
}

/** Portfolio — ukázky prací. Grid 3 sloupce, data ze Sanity. */
export function SluzbaPortfolio({ projects, serviceName, overline, title }: Props) {
  const [lightbox, setLightbox] = useState<{ projectIdx: number; imageIdx: number } | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const images = lightbox ? projects![lightbox.projectIdx].lightboxImages : [];

  const goNext = useCallback(() => {
    setLightbox((prev) => {
      if (!prev || !projects) return null;
      const len = projects[prev.projectIdx].lightboxImages.length;
      return { ...prev, imageIdx: (prev.imageIdx + 1) % len };
    });
  }, [projects]);

  const goPrev = useCallback(() => {
    setLightbox((prev) => {
      if (!prev || !projects) return null;
      const len = projects[prev.projectIdx].lightboxImages.length;
      return { ...prev, imageIdx: (prev.imageIdx - 1 + len) % len };
    });
  }, [projects]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox, goNext, goPrev]);

  // Touch swipe navigation
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchStart.current = null;
  }, [goNext, goPrev]);

  if (!projects || projects.length === 0) return null;

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
          <header className="mb-[var(--space-heading-gap)]">
            <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
              {overline || "Reference"}
            </p>
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
                {title || `Ukázky — ${serviceName || "Portfolio"}`}
              </h2>
              <a
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-forest-mid)] hover:text-[var(--color-forest)] transition-colors duration-[var(--duration-fast)] font-[family-name:var(--font-ui)] whitespace-nowrap"
              >
                Všechny práce
                <ArrowRight size={16} />
              </a>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-grid)] reveal-stagger">
            {projects.map((project, i) => {
              const galleryCount = project.lightboxImages.length;
              return (
                <article
                  key={project._id}
                  className="
                    reveal group rounded-[var(--card-radius)] overflow-hidden
                    bg-[var(--color-surface-elevated)] border border-[var(--card-border)]
                    transition-[border-color,box-shadow] duration-[var(--duration-slow)] ease-[var(--ease-spring)]
                    hover:border-[var(--color-border-accent)] hover:shadow-[var(--shadow-gold-sm)]
                    flex flex-col
                  "
                >
                  <button
                    type="button"
                    onClick={() => setLightbox({ projectIdx: i, imageIdx: 0 })}
                    className="relative aspect-square bg-white cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:outline-none w-full"
                    aria-label={`Zvětšit ukázku: ${project.client}`}
                  >
                    <Image
                      src={project.thumbUrl}
                      alt={project.thumbAlt}
                      fill
                      className="object-cover transition-transform duration-[var(--duration-slow)] group-hover:scale-[1.03] pointer-events-none"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                    {galleryCount > 1 && (
                      <span className="absolute top-6 right-6 text-[11px] font-semibold font-[family-name:var(--font-ui)] px-2.5 py-1 rounded-[var(--radius-xs)] bg-[#F5F0E6] text-[#8B7D5E]">
                        {galleryCount} fotek
                      </span>
                    )}
                  </button>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      {project.externalUrl ? (
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] hover:text-[var(--color-gold)] transition-colors duration-[var(--duration-fast)]"
                        >
                          {project.title || project.client}
                        </a>
                      ) : (
                        <span className="text-sm font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)]">
                          {project.title || project.client}
                        </span>
                      )}
                      {project.result && (
                        <span className="text-[11px] font-semibold font-[family-name:var(--font-ui)] px-2.5 py-1 rounded-[var(--radius-xs)] bg-[var(--color-tag-gold)] text-[var(--color-text-secondary)]">
                          {project.result}
                        </span>
                      )}
                    </div>
                    {project.description && (
                      <p className="text-[13px] text-[var(--color-text-primary)] font-[family-name:var(--font-body)] leading-[1.6]">
                        {project.description}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Lightbox — rendered via portal to escape transform containing blocks */}
      {lightbox && images.length > 0 && typeof document !== "undefined" && createPortal(
        <div
          className="flex items-center justify-center"
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-20"
            style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}
            aria-label="Zavřít"
          >
            <X size={20} />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-20"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}
              aria-label="Předchozí obrázek"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <div className="flex items-center justify-center relative">
            {/* Spinner — visible until image loads */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-8 h-8 border-2 border-white/20 border-t-white/70 rounded-full animate-spin" />
            </div>
            {/\.(svg|png)(\?.*)?$/.test(images[lightbox.imageIdx].src) ? (
              <div
                className="w-[min(700px,90vmin)] h-[min(700px,90vmin)] rounded-[var(--radius-lg)] overflow-hidden flex items-center justify-center p-[clamp(24px,5vw,64px)] relative z-10"
                style={{ backgroundColor: "#fff" }}
              >
                <img
                  key={`lb-${lightbox.projectIdx}-${lightbox.imageIdx}`}
                  src={images[lightbox.imageIdx].src}
                  alt={images[lightbox.imageIdx].alt}
                  className="block max-w-full max-h-full"
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
            ) : (
              <img
                key={`lb-${lightbox.projectIdx}-${lightbox.imageIdx}`}
                src={images[lightbox.imageIdx].src}
                alt={images[lightbox.imageIdx].alt}
                className="block rounded-[var(--radius-lg)] relative z-10"
                style={{ maxWidth: "min(1000px, 85vw)", maxHeight: "85vh", objectFit: "contain" }}
              />
            )}
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-20"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}
              aria-label="Další obrázek"
            >
              <ChevronRight size={20} />
            </button>
          )}

          {images.length > 1 && (
            <span
              className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-[12px] font-semibold px-3 py-1.5 rounded-full font-[family-name:var(--font-ui)] z-20"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {lightbox.imageIdx + 1} / {images.length}
            </span>
          )}
        </div>,
        document.body
      )}
    </>
  );
}
