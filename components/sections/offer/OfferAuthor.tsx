"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Linkedin, Globe, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
const workshopImages = [
  { id: 1, title: "Vášeň pro strategii", src: "/Simon-Anfilov-Workshop.webp" },
  { id: 2, title: "Workshop Elesentia", src: "/Workshop-Elesentia.webp" },
  { id: 3, title: "Nadšení s Casa Moderna", src: "/Casa-Moderna-Workshop.webp" },
  { id: 4, title: "Workshop Ekonews", src: "/Workshop-Ekonews.webp" },
];

const stats = [
  { value: 30, suffix: "+", label: "let v oboru" },
  { value: 100, suffix: "+", label: "vizuálních identit" },
  { value: 4, suffix: "", label: "prestižní ocenění" },
];

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 1200;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) animate(); },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <span ref={ref} className="block text-3xl sm:text-4xl font-bold text-[var(--color-gold)] font-[family-name:var(--font-heading)] tracking-tight leading-none">
      {display}{suffix}
    </span>
  );
}

/** Blok 9 — Autor / E-E-A-T. Celá šířka, 3 sloupce. */
export function OfferAuthor() {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <section className="bg-[var(--color-surface)] pt-[var(--section-padding-y)] pb-[var(--space-section-compact)]">
      <Container>
        {/* Header */}
        <header className="mb-[var(--space-heading-gap)]">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-accent)] mb-5 font-[family-name:var(--font-heading)]">
            Brand Designer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
            Simon Anfilov
          </h2>
        </header>

        {/* 3 columns: 10 / 30 / 60 */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
          {/* 1 — Photo (square, fixed size) */}
          <div className="shrink-0">
            <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-[22%] overflow-hidden bg-[var(--color-surface-elevated)] border border-[var(--color-border)]">
              <Image
                src="/simon-anfilov.webp"
                alt="Simon Anfilov — Brand Designer"
                width={100}
                height={100}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* 2 — Stats (side by side, number on top, label below) */}
          <div className="flex gap-8 md:w-[35%] shrink-0">
            {stats.map((stat) => (
              <div key={stat.label}>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <span className="block text-[14px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* 3 — Bio text + links */}
          <div className="flex-1 min-w-0">
            <p className="text-[17px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-[1.7] mb-6">
              Celý život jsem až po uši v&nbsp;brandingu, reklamě a&nbsp;marketingu.
              V&nbsp;90. letech jsem začal profesní kariéru jako DTP grafik. Dnes se
              věnuji strategické tvorbě velkých i&nbsp;malých značek pro firmy
              i&nbsp;jednotlivce.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {[
                { href: "/o-mne", icon: User, label: "O mně", external: false },
                { href: "https://linkedin.com/in/simonanfilov", icon: Linkedin, label: "LinkedIn", external: true },
                { href: "/portfolio", icon: Globe, label: "Portfolio", external: false },
              ].map(({ href, icon: Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="
                    inline-flex items-center gap-1.5 text-sm font-semibold
                    text-[var(--color-forest-mid)] hover:text-[var(--color-forest)]
                    transition-colors duration-[var(--duration-fast)]
                    font-[family-name:var(--font-ui)]
                  "
                >
                  <Icon size={15} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>

            {/* Workshop gallery — inside bio column so it aligns perfectly */}
            <div className="mt-8" style={{ position: "relative", paddingBottom: "56.25%" }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", gap: 6 }}>
                {workshopImages.map((img, i) => (
                  <div
                    key={img.id}
                    role="button"
                    tabIndex={0}
                    aria-label={img.title}
                    onMouseEnter={() => setActiveImg(i)}
                    onClick={() => setActiveImg(i)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveImg(i); } }}
                    style={{
                      flex: i === activeImg ? "4 1 0%" : "0.4 1 0%",
                      transition: "flex var(--duration-slow, 350ms) var(--easing-default, cubic-bezier(0.4, 0, 0.2, 1))",
                      position: "relative",
                      borderRadius: "var(--r-lg, 22px)",
                      overflow: "hidden",
                      cursor: "pointer",
                      minWidth: 36,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${img.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(28,28,28,0.15)" }} />
                    {i === activeImg && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 16,
                          left: 20,
                          color: "var(--color-cream, #F5F0E6)",
                          fontSize: 14,
                          fontWeight: 600,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {img.title}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
