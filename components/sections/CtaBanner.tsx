import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function CtaBanner() {
  return (
    <section className="section-contrast relative bg-[var(--sc-bg)] py-[var(--space-section)] overflow-hidden">
      {/* Layered atmosphere */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,var(--color-glow-strong),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,var(--color-glow-medium),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-pattern-subtle)_25%,transparent_25%,transparent_50%,var(--color-pattern-subtle)_50%,var(--color-pattern-subtle)_75%,transparent_75%)] bg-[length:48px_48px]" />
      </div>

      <Container className="relative layout-text">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[var(--sc-text)] leading-[1.08]">
          Ready to get started?
        </h2>
        <p className="mt-5 text-base sm:text-lg text-[var(--sc-text-muted)] max-w-xl layout-mx font-[family-name:var(--font-body)] leading-relaxed">
          Join thousands of teams building better websites with our design
          framework. Free 14-day trial, no credit card required.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row layout-items layout-justify gap-4">
          {/* Primary CTA — inverted colors relative to section */}
          <button
            className="
              inline-flex items-center justify-center gap-2
              font-semibold font-[family-name:var(--font-heading)] tracking-[var(--heading-tracking)]
              rounded-[var(--btn-radius)] cursor-pointer select-none
              text-[15px] px-[calc(var(--btn-padding-x)*1.3)] py-[calc(var(--btn-padding-y)*1.3)] min-h-[52px]
              bg-[var(--sc-text)] text-[var(--sc-bg)] hover:opacity-90
              shadow-[var(--shadow-lg)]
              active:scale-[0.97]
              transition-[background-color,transform,box-shadow,opacity] duration-[var(--duration-fast)] ease-[var(--ease-smooth)]
              focus-visible:ring-2 focus-visible:ring-[var(--sc-text)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sc-bg)] focus-visible:outline-none
            "
          >
            Start free trial
            <ArrowRight size={18} aria-hidden="true" />
          </button>
          {/* Secondary CTA — ghost outline */}
          <button
            className="
              inline-flex items-center justify-center gap-2
              font-semibold font-[family-name:var(--font-heading)] tracking-[var(--heading-tracking)]
              rounded-[var(--btn-radius)] cursor-pointer select-none
              text-[15px] px-[calc(var(--btn-padding-x)*1.3)] py-[calc(var(--btn-padding-y)*1.3)] min-h-[52px]
              bg-transparent text-[var(--sc-text)]
              border border-[var(--sc-border)] hover:bg-[var(--sc-pill-bg)] hover:border-[var(--sc-text-dim)]
              active:scale-[0.97]
              transition-[background-color,transform,border-color] duration-[var(--duration-fast)] ease-[var(--ease-smooth)]
              focus-visible:ring-2 focus-visible:ring-[var(--sc-text)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sc-bg)] focus-visible:outline-none
            "
          >
            Talk to sales
          </button>
        </div>
      </Container>
    </section>
  );
}
