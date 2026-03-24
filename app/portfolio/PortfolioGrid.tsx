"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioItem, PortfolioCategory } from "./page";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const PAGE_SIZE = 24;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function PortfolioGrid({
  categories,
}: {
  categories: PortfolioCategory[];
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<{
    projectIdx: number;
    imageIdx: number;
  } | null>(null);

  // Reset visible count when tab or search changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeTab, query]);

  // Current category projects
  const categoryProjects = categories[activeTab]?.projects ?? [];

  // Filtered by search
  const filtered = useMemo(() => {
    if (!query.trim()) return categoryProjects;
    const q = normalize(query.trim());
    return categoryProjects.filter((p) => {
      const haystack = normalize(
        [p.client, p.title ?? "", p.description ?? "", ...(p.tags ?? [])].join(
          " ",
        ),
      );
      return haystack.includes(q);
    });
  }, [categoryProjects, query]);

  // Visible slice
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // ── Lightbox navigation ─────────────────────────────────────────
  const images = lightbox ? visible[lightbox.projectIdx]?.lightboxImages ?? [] : [];

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goNext = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return null;
      const len = visible[prev.projectIdx]?.lightboxImages.length ?? 0;
      if (len === 0) return null;
      return { ...prev, imageIdx: (prev.imageIdx + 1) % len };
    });
  }, [visible]);

  const goPrev = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return null;
      const len = visible[prev.projectIdx]?.lightboxImages.length ?? 0;
      if (len === 0) return null;
      return { ...prev, imageIdx: (prev.imageIdx - 1 + len) % len };
    });
  }, [visible]);

  // Keyboard
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

  // Touch swipe
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);
  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStart.current) return;
      const dx = e.changedTouches[0].clientX - touchStart.current.x;
      const dy = e.changedTouches[0].clientY - touchStart.current.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx < 0) goNext();
        else goPrev();
      }
      touchStart.current = null;
    },
    [goNext, goPrev],
  );

  // ── Count label ─────────────────────────────────────────────────
  const countLabel = (() => {
    const total = filtered.length;
    if (total === 0) return "Žádné projekty";
    if (total === 1) return "1 projekt";
    if (total < 5) return `${total} projekty`;
    return `${total} projektů`;
  })();

  return (
    <div>
      {/* ── Category tabs + Search ── */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <div className="flex flex-wrap gap-2 flex-1">
          {categories.map((cat, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setActiveTab(i);
                setQuery("");
              }}
              className={`
                px-4 py-2 text-[13px] font-semibold rounded-[var(--radius-sm)]
                font-[family-name:var(--font-ui)] cursor-pointer
                transition-all duration-[var(--duration-fast)]
                ${
                  i === activeTab
                    ? "bg-[color-mix(in_srgb,var(--color-gold)_14%,transparent)] text-[var(--color-gold-dark)] border border-[var(--color-gold)]"
                    : "bg-transparent text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] hover:text-[var(--color-text-primary)]"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-[220px] sm:w-[260px] shrink-0">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none text-[#A89E8C]"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            inputMode="search"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder="Hledat..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-[13px] rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-gold)] transition-colors duration-[var(--duration-fast)] font-[family-name:var(--font-ui)]"
          />
        </div>
      </div>

      {/* ── Count ── */}
      <p className="text-[13px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-ui)] mb-6">
        {hasMore
          ? `Zobrazeno ${visible.length} z ${filtered.length} projektů`
          : countLabel}
      </p>

      {/* ── Grid ── */}
      {visible.length === 0 ? (
        <p className="text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] py-12 text-center">
          Žádné projekty neodpovídají vašemu hledání.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[var(--space-grid)]">
          {visible.map((project, i) => {
            const galleryCount = project.lightboxImages.length;
            return (
              <article
                key={`${project._id}-${i}`}
                className="
                  group rounded-[var(--card-radius)] overflow-hidden
                  bg-[var(--color-surface-elevated)] border border-[var(--card-border)]
                  transition-[border-color,box-shadow] duration-[var(--duration-slow)] ease-[var(--ease-spring)]
                  hover:border-[var(--color-border-accent)] hover:shadow-[var(--shadow-gold-sm)]
                  flex flex-col
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    setLightbox({ projectIdx: i, imageIdx: 0 })
                  }
                  className="relative aspect-square bg-white cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:outline-none w-full"
                  aria-label={`Zvětšit ukázku: ${project.client}`}
                >
                  <Image
                    src={project.thumbUrl}
                    alt={project.thumbAlt}
                    fill
                    className="object-cover transition-transform duration-[var(--duration-slow)] group-hover:scale-[1.03] pointer-events-none"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {galleryCount > 1 && (
                    <span className="absolute top-6 right-6 text-[11px] font-semibold font-[family-name:var(--font-ui)] px-2.5 py-1 rounded-[var(--radius-xs)] bg-[#F5F0E6] text-[#8B7D5E]">
                      {galleryCount} images
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
      )}

      {/* ── Load more ── */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            className="
              inline-flex items-center justify-center gap-2
              font-semibold font-[family-name:var(--font-ui)]
              tracking-[0.01em] text-[14px]
              rounded-[var(--btn-radius)]
              px-[var(--btn-padding-x)] py-[var(--btn-padding-y)] min-h-[44px]
              border-[1.5px] border-[var(--color-border-strong)]
              text-[var(--color-text-primary)] bg-transparent
              hover:bg-[var(--color-surface-sunken)]
              hover:border-[var(--color-forest-mid)] hover:text-[var(--color-forest-mid)]
              cursor-pointer transition-[background-color,border-color,color] duration-[var(--duration-normal)]
            "
          >
            Načíst další
          </button>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightbox &&
        images.length > 0 &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="flex items-center justify-center"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              backgroundColor: "rgba(0,0,0,0.85)",
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-20"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "#fff",
              }}
              aria-label="Zavřít"
            >
              <X size={20} />
            </button>

            {images.length > 1 && (
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-20"
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  color: "#fff",
                }}
                aria-label="Předchozí obrázek"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            {/\.(svg|png)/.test(images[lightbox.imageIdx].src) ? (
              <div
                className="w-[min(700px,90vmin)] h-[min(700px,90vmin)] rounded-[var(--radius-lg)] overflow-hidden flex items-center justify-center p-[clamp(24px,5vw,64px)]"
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
              <div className="flex items-center justify-center">
                <img
                  key={`lb-${lightbox.projectIdx}-${lightbox.imageIdx}`}
                  src={images[lightbox.imageIdx].src}
                  alt={images[lightbox.imageIdx].alt}
                  className="block rounded-[var(--radius-lg)]"
                  style={{
                    maxWidth: "min(1000px, 85vw)",
                    maxHeight: "85vh",
                    objectFit: "contain",
                  }}
                />
              </div>
            )}

            {images.length > 1 && (
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-20"
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  color: "#fff",
                }}
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
          document.body,
        )}
    </div>
  );
}
