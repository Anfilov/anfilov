"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface CtaBlockProps {
  overline?: string;
  title?: React.ReactNode;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

/** Shared CTA block — dark section with parallax background, left-aligned, gold accent. */
export function CtaBlock({
  overline = "Další krok",
  title = "Pojďme to řešit společně",
  subtitle = "Pojďme společně probrat, jak bych mohl váš projekt nebo značku posunout dál. Napište mi, ozvu se vám. Nebo rovnou zavolejte.",
  buttonLabel = "Kontakt",
  buttonHref = "/kontakt",
}: CtaBlockProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;
    const rect = section.getBoundingClientRect();
    const windowH = window.innerHeight;
    const progress = (windowH - rect.top) / (windowH + rect.height);
    const offset = (progress - 0.5) * 200;
    img.style.transform = `translateY(${offset}px)`;
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-surface-dark)] py-16 sm:py-20 lg:py-24"
      data-theme="dark"
    >
      {/* Parallax background */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div
          ref={imgRef}
          className="absolute inset-[-15%] will-change-transform"
          style={{
            backgroundImage: "url(/cta-bg.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[var(--color-surface-dark)]/85" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          {/* Left — text */}
          <div className="max-w-[520px]">
            <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
              {overline}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em] text-white mb-4 font-[family-name:var(--font-heading)]">
              {title}
            </h2>
            <p className="text-[16px] text-[rgba(255,255,255,0.6)] leading-relaxed font-[family-name:var(--font-body)]">
              {subtitle}
            </p>
          </div>

          {/* Right — button */}
          <div className="shrink-0">
            <Link
              href={buttonHref}
              className="
                inline-flex items-center justify-center gap-2.5
                font-semibold font-[family-name:var(--font-ui)] tracking-[0.01em]
                rounded-[var(--btn-radius)] cursor-pointer select-none
                transition-[background-color,transform,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-spring)]
                focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:outline-none
                bg-[var(--color-gold)] text-[var(--color-warm-900)]
                hover:bg-[var(--color-gold-hover)] active:scale-[0.98]
                shadow-[var(--shadow-gold-md)]
                text-[15px] px-8 py-3.5 min-h-[48px]
                no-underline
              "
            >
              {buttonLabel}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
