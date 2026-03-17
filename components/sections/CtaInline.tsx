"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function CtaInline() {
  return (
    <section className="section-contrast bg-[var(--sc-bg)] py-8 sm:py-10">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Text */}
          <div className="flex-1 min-w-0">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight font-[family-name:var(--font-heading)] text-[var(--sc-text)] leading-tight">
              Ready to build something great?
            </h2>
            <p className="mt-1 text-sm text-[var(--sc-text-muted)] font-[family-name:var(--font-body)]">
              Get started in under 5 minutes. No credit card required.
            </p>
          </div>

          {/* Inline form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full sm:w-auto gap-2"
          >
            <label htmlFor="cta-inline-email" className="sr-only">
              Email address
            </label>
            <input
              id="cta-inline-email"
              type="email"
              placeholder="you@example.com"
              aria-required="true"
              className="
                flex-1 sm:w-64
                rounded-[var(--input-radius)]
                border border-[var(--sc-border)]
                bg-[var(--sc-card-bg)]
                px-[var(--input-padding-x)] py-[var(--input-padding-y)]
                text-sm text-[var(--sc-text)]
                placeholder:text-[var(--sc-text-dimmer)]
                font-[family-name:var(--font-body)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:border-transparent
                min-h-[44px]
              "
            />
            <button
              type="submit"
              className="
                inline-flex items-center justify-center gap-2
                font-semibold font-[family-name:var(--font-heading)]
                rounded-[var(--btn-radius)] cursor-pointer select-none
                text-sm px-[var(--btn-padding-x)] py-[var(--btn-padding-y)] min-h-[44px]
                bg-[var(--color-accent)] text-[var(--color-text-on-accent)] hover:bg-[var(--color-accent-hover)]
                shadow-[var(--btn-shadow)]
                active:scale-[0.97]
                transition-[background-color,transform,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-smooth)]
                focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sc-bg)] focus-visible:outline-none
                whitespace-nowrap
              "
            >
              Subscribe
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
