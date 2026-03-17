"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    title: "Token-driven theming",
    description:
      "Change six CSS variables and your entire site transforms — colors, spacing, radius, shadows. No component-level overrides needed.",
    image: "https://placehold.co/800x500/1a1a2e/e0e0e0?text=Theming",
  },
  {
    title: "Concept system",
    description:
      "Toggle data attributes on the HTML element to switch between design personalities. Sharp or rounded, tight or airy — one attribute controls everything.",
    image: "https://placehold.co/800x500/2d1b69/e0e0e0?text=Concepts",
  },
  {
    title: "40+ production blocks",
    description:
      "Hero, features, pricing, testimonials, and more. Each block responds to every design token and concept dimension automatically.",
    image: "https://placehold.co/800x500/0f3460/e0e0e0?text=Blocks",
  },
  {
    title: "Accessible by default",
    description:
      "Semantic HTML, ARIA labels, keyboard navigation, and reduced-motion support baked into every component. WCAG AA from the start.",
    image: "https://placehold.co/800x500/16213e/e0e0e0?text=A11y",
  },
];

export function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Features"
          title="Everything you need"
          subtitle="A deep dive into the capabilities that make this framework different."
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
          {/* Left: feature list */}
          <div className="space-y-1">
            {features.map((feature, index) => (
              <button
                key={feature.title}
                onClick={() => setActiveIndex(index)}
                className={`
                  w-full text-left p-5 sm:p-6 rounded-[var(--card-radius)]
                  border cursor-pointer
                  transition-[background-color,border-color,box-shadow] duration-[var(--duration-fast)]
                  focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
                  ${
                    activeIndex === index
                      ? "bg-[var(--color-surface)] border-[var(--color-accent)] shadow-[var(--shadow-sm)]"
                      : "bg-transparent border-transparent hover:bg-[var(--color-surface-sunken)]"
                  }
                `}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`
                      shrink-0 w-8 h-8 rounded-full
                      text-xs font-bold font-[family-name:var(--font-heading)]
                      inline-flex items-center justify-center
                      transition-[background-color,color] duration-[var(--duration-fast)]
                      ${
                        activeIndex === index
                          ? "bg-[var(--color-accent)] text-[var(--color-text-on-accent)]"
                          : "bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)]"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-bold tracking-tight font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-1">
                      {feature.title}
                    </h3>
                    {activeIndex === index && (
                      <p className="text-[14px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: image */}
          <div className="rounded-[var(--card-radius)] border border-[var(--color-border)] overflow-hidden bg-[var(--color-surface-sunken)] aspect-[8/5] relative">
            <Image
              src={features[activeIndex].image}
              alt={features[activeIndex].title}
              fill
              className="object-cover transition-opacity duration-[var(--duration-normal)]"
              sizes="(max-width: 1024px) 100vw, 55vw"
              unoptimized
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
