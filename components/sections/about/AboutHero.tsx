"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

/* ── Animated counter ── */
function useCounter(target: number, duration = 2500) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

export function AboutHero() {
  const years = useCounter(30, 2500);
  const logos = useCounter(200, 2800);
  const agencies = useCounter(5, 2200);

  return (
    <section className="relative bg-[var(--color-surface)] overflow-hidden">
      <Container className="relative pt-20 sm:pt-28 lg:pt-32 pb-10 sm:pb-14">
        <Breadcrumbs
          items={[
            { label: "Domů", href: "/" },
            { label: "O mně" },
          ]}
          className="mb-10"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
              O mně
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.06] tracking-[-0.03em] mb-6">
              Tvořím, tady jsem.
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)] mb-6 max-w-[520px]">
              Celý život tvořím. Jsem až po uši v&nbsp;brandingu, reklamě
              a&nbsp;marketingu. Prošel jsem nadnárodními reklamními agenturami
              a&nbsp;dnes se věnuji marketingu a&nbsp;strategické tvorbě značek
              pro malé i&nbsp;velké klienty.
            </p>

            {/* Counter stats — same font as service price (font-heading bold) */}
            <div className="flex flex-wrap gap-8 mt-8">
              <div>
                <span
                  ref={years.ref}
                  className="block text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-gold)] tracking-tight tabular-nums"
                >
                  {years.value}+
                </span>
                <span className="text-[13px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-ui)]">
                  let praxe
                </span>
              </div>
              <div>
                <span
                  ref={logos.ref}
                  className="block text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-gold)] tracking-tight tabular-nums"
                >
                  {logos.value}+
                </span>
                <span className="text-[13px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-ui)]">
                  vytvořených log
                </span>
              </div>
              <div>
                <span
                  ref={agencies.ref}
                  className="block text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-gold)] tracking-tight tabular-nums"
                >
                  {agencies.value}
                </span>
                <span className="text-[13px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-ui)]">
                  top agentur
                </span>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center">
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden max-w-md w-full">
              <img
                src="https://content.app-sources.com/s/41101902986880176/thumbnails/640x480/PR_Images/Simon-Anfilov-Office-1080px-1580604.jpg?format=webp"
                alt="Simon Anfilov v pracovně"
                className="block w-full h-auto"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[var(--radius-lg)] ring-1 ring-inset ring-[var(--color-gold)]/15"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
