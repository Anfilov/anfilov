import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroSplit() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-grid)] lg:gap-[var(--space-grid-lg)] items-center">
        {/* Text */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-accent)] mb-4 font-[family-name:var(--font-heading)]">
            Why choose us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Everything you need to
            <span className="text-[var(--color-accent)]"> scale fast</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)]">
            Our platform gives you the tools, insights, and support to grow your
            business. From day one to enterprise scale, we&apos;ve got you covered.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Token-driven design that scales",
              "Mobile-first responsive layout",
              "Accessible by default (WCAG AA)",
              "Dark mode with zero extra code",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-[var(--color-text-primary)] font-[family-name:var(--font-body)]"
              >
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 rounded-[var(--avatar-radius)] bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)] inline-flex items-center justify-center"
                >
                  <Check size={12} strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button size="lg">
              Start free trial
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] rounded-[var(--card-radius)] overflow-hidden bg-[var(--color-surface-dark)] shadow-[var(--shadow-xl)]">
          <Image
            src="https://placehold.co/800x600/111111/e63328?text=Product+Screenshot"
            alt="Product screenshot showing dashboard interface"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </Container>
    </section>
  );
}
