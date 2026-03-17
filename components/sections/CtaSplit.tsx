"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaSplit() {
  return (
    <section className="bg-[var(--color-brand)] py-[var(--section-padding-y)]">
      <Container>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            <h2
              className="
                text-3xl sm:text-4xl lg:text-5xl
                font-[var(--heading-weight)] tracking-[var(--heading-tracking)] leading-[var(--heading-line-height)]
                font-[family-name:var(--font-heading)]
                text-[var(--color-surface)]
                mb-4
              "
            >
              Ready to ship?
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-surface)] opacity-70 font-[family-name:var(--font-body)] leading-relaxed max-w-md mb-6">
              Start building with the framework today. No credit card required.
              Free for personal projects, affordable for teams.
            </p>
            <ul className="space-y-2.5 mb-0 lg:mb-0">
              {["Free tier available", "No vendor lock-in", "Cancel anytime"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-[var(--color-surface)] opacity-80 font-[family-name:var(--font-body)]"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form card */}
          <div className="rounded-[var(--card-radius)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] p-6 sm:p-8 shadow-[var(--shadow-xl)]">
            <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] tracking-tight text-[var(--color-text-primary)] mb-1">
              Get early access
            </h3>
            <p className="text-sm text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)] mb-6">
              Enter your email and we&apos;ll set up your workspace.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="cta-split-name"
                  className="block text-sm font-medium text-[var(--color-text-primary)] font-[family-name:var(--font-body)] mb-1.5"
                >
                  Full name
                </label>
                <input
                  id="cta-split-name"
                  type="text"
                  placeholder="Jane Smith"
                  aria-required="true"
                  className="
                    w-full px-3.5 py-2.5 text-sm
                    rounded-[var(--input-radius)]
                    border border-[var(--color-border)]
                    bg-[var(--color-surface)]
                    text-[var(--color-text-primary)]
                    font-[family-name:var(--font-body)]
                    placeholder:text-[var(--color-text-tertiary)]
                    transition-[border-color,box-shadow] duration-[var(--duration-fast)]
                    focus-visible:border-[var(--input-border-focus)] focus-visible:ring-2 focus-visible:ring-[var(--input-border-focus)]/20 focus-visible:outline-none
                    min-h-[44px]
                  "
                />
              </div>
              <div>
                <label
                  htmlFor="cta-split-email"
                  className="block text-sm font-medium text-[var(--color-text-primary)] font-[family-name:var(--font-body)] mb-1.5"
                >
                  Work email
                </label>
                <input
                  id="cta-split-email"
                  type="email"
                  placeholder="jane@company.com"
                  aria-required="true"
                  className="
                    w-full px-3.5 py-2.5 text-sm
                    rounded-[var(--input-radius)]
                    border border-[var(--color-border)]
                    bg-[var(--color-surface)]
                    text-[var(--color-text-primary)]
                    font-[family-name:var(--font-body)]
                    placeholder:text-[var(--color-text-tertiary)]
                    transition-[border-color,box-shadow] duration-[var(--duration-fast)]
                    focus-visible:border-[var(--input-border-focus)] focus-visible:ring-2 focus-visible:ring-[var(--input-border-focus)]/20 focus-visible:outline-none
                    min-h-[44px]
                  "
                />
              </div>
              <Button size="lg" className="w-full">
                Get started
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
