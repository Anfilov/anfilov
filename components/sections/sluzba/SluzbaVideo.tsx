"use client";

import { useMemo, useSyncExternalStore } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface SluzbaVideoProps {
  /** Overline label above the heading */
  overline?: string;
  /** Section heading */
  title?: string;
  /** Body copy rendered below the heading */
  body?: string;
  /** CTA label (scrolls to #kontakt) */
  ctaLabel?: string;
  /**
   * Video source — one of:
   * 1. YouTube URL (youtube.com/watch?v=… or youtu.be/…)
   * 2. Vimeo URL  (vimeo.com/123456)
   * 3. Raw embed HTML (iframe / script snippet)
   */
  videoUrl?: string;
  /** Raw embed code (iframe / script). Takes priority over videoUrl. */
  videoEmbed?: string;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function extractYouTubeId(url: string): string | null {
  const m =
    url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/) ??
    url.match(/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/);
  return m?.[1] ?? null;
}

function extractVimeoId(url: string): string | null {
  const m = url.match(/vimeo\.com\/(\d+)/);
  return m?.[1] ?? null;
}

/* ------------------------------------------------------------------ */
/*  Desktop detection (same pattern as SluzbaProces)                   */
/* ------------------------------------------------------------------ */

function useIsDesktop() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(min-width: 1024px)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(min-width: 1024px)").matches,
    () => true,
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function SluzbaVideo({
  overline = "Video",
  title = "Podívejte se, jak to vypadá v praxi",
  body = "Krátká ukázka mého pracovního procesu — od prvního konceptu až po finální výstup. Uvidíte, jak přistupuji k návrhu, na co kladu důraz a proč klienti oceňují transparentní spolupráci od prvního dne.",
  ctaLabel = "Chci nabídku",
  videoUrl,
  videoEmbed,
}: SluzbaVideoProps) {
  const isDesktop = useIsDesktop();

  /* Build embed markup */
  const embedHtml = useMemo(() => {
    // 1. Raw embed code takes priority
    if (videoEmbed) return videoEmbed;
    if (!videoUrl) return null;

    // 2. YouTube
    const ytId = extractYouTubeId(videoUrl);
    if (ytId) {
      return `<iframe src="https://www.youtube-nocookie.com/embed/${ytId}?rel=0" title="Video" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe>`;
    }

    // 3. Vimeo
    const vmId = extractVimeoId(videoUrl);
    if (vmId) {
      return `<iframe src="https://player.vimeo.com/video/${vmId}?dnt=1" title="Video" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe>`;
    }

    // 4. Fallback — treat as direct embed URL
    return `<iframe src="${videoUrl}" title="Video" allow="autoplay; fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe>`;
  }, [videoUrl, videoEmbed]);

  return (
    <section
      className="bg-[var(--color-surface-sunken)]"
      style={{
        paddingTop: "calc(var(--section-padding-y) / 2)",
        paddingBottom: "var(--section-padding-y)",
      }}
    >
      <Container>
        <div
          style={{
            display: isDesktop ? "flex" : "block",
            flexDirection: "row",
            gap: isDesktop ? 64 : 40,
            alignItems: "flex-start",
          }}
        >
          {/* Left column — text ~30% */}
          <div style={{ width: isDesktop ? "30%" : "100%", flexShrink: 0 }}>
            <header className="mb-[var(--space-heading-gap)]">
              <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
                {overline}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
                {title}
              </h2>
            </header>

            {body && (
              <p className="text-[15px] leading-[1.7] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] mb-8">
                {body}
              </p>
            )}

            <a href="#konzultace">
              <Button variant="primary" size="lg">
                {ctaLabel}
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </a>
          </div>

          {/* Right column — video ~70% */}
          <div style={{ flex: 1, marginTop: isDesktop ? 0 : 40 }}>
            {embedHtml ? (
              <div
                className="relative w-full overflow-hidden bg-black"
                style={{ paddingBottom: "56.25%" /* 16:9 */ }}
                dangerouslySetInnerHTML={{ __html: embedHtml }}
              />
            ) : (
              /* Placeholder when no video is set */
              <div
                className="relative w-full rounded-[var(--card-radius)] overflow-hidden bg-[var(--color-surface-elevated)] border border-[var(--card-border)] flex items-center justify-center"
                style={{ paddingBottom: "56.25%" }}
              >
                <span className="absolute inset-0 flex items-center justify-center text-[var(--color-text-tertiary)] text-sm font-[family-name:var(--font-ui)]">
                  Video bude doplněno
                </span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
