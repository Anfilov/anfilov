"use client";

import { Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--space-section-compact)]">
      <Container className="max-w-2xl layout-text">
        <h2 className="text-2xl sm:text-3xl">
          Stay in the loop
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
          Get product updates, design tips, and framework releases — no spam, ever.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md layout-mx"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@company.com"
            required
            aria-required="true"
            className="
              flex-1 rounded-[var(--input-radius)]
              border border-[var(--input-border)]
              bg-[var(--input-bg)]
              px-[var(--input-padding-x)] py-[var(--input-padding-y)]
              text-sm text-[var(--color-text-primary)]
              placeholder:text-[var(--color-text-tertiary)]
              font-[family-name:var(--font-body)]
              min-h-[44px]
              transition-[border-color,box-shadow] duration-[var(--duration-fast)]
              hover:border-[var(--color-border-strong)]
              focus-visible:border-[var(--input-border-focus)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/20 focus-visible:outline-none
            "
          />
          <Button type="submit">
            Subscribe
            <Send size={16} aria-hidden="true" />
          </Button>
        </form>
        <p className="mt-3 text-xs text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
          Unsubscribe anytime. We respect your privacy.
        </p>
      </Container>
    </section>
  );
}
