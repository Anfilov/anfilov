"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 19,
    yearlyPrice: 15,
    description: "Perfect for small projects and personal sites.",
    features: [
      "5 page sections",
      "Light & dark mode",
      "Responsive design",
      "Email support",
    ],
    cta: "Start free trial",
    recommended: false,
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: "For growing teams that need the full toolkit.",
    features: [
      "All 40+ sections",
      "Custom token presets",
      "Priority support",
      "Figma source files",
      "CMS integration",
    ],
    cta: "Start free trial",
    recommended: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 149,
    yearlyPrice: 119,
    description: "White-glove service for large organizations.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom component builds",
      "SLA guarantee",
      "SSO & security audit",
      "Onboarding workshop",
    ],
    cta: "Contact sales",
    recommended: false,
  },
];

export function PricingToggle() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Pricing"
          title="Plans for every team"
          subtitle="Switch between monthly and yearly billing. Save up to 20% with annual plans."
        />

        {/* Toggle */}
        <div className="flex items-center layout-justify gap-3 mb-10">
          <span
            className={`text-sm font-semibold font-[family-name:var(--font-heading)] transition-colors duration-[var(--duration-fast)] ${
              !isYearly ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-tertiary)]"
            }`}
          >
            Monthly
          </span>

          <button
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle yearly billing"
            onClick={() => setIsYearly(!isYearly)}
            className={`
              relative inline-flex h-5 w-9 shrink-0 items-center rounded-[var(--radius-sm)]
              cursor-pointer p-[2px]
              transition-colors duration-[var(--duration-fast)]
              focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
              ${isYearly ? "bg-[var(--color-accent)]" : "bg-[var(--color-surface-sunken)] border border-[var(--color-border)]"}
            `}
          >
            <span
              className={`
                inline-block h-3.5 w-3.5 rounded-[6px]
                bg-[var(--color-toggle-knob)] shadow-[var(--shadow-xs)]
                transition-transform duration-[var(--duration-fast)] ease-[var(--ease-spring)]
                ${isYearly ? "translate-x-[14px]" : "translate-x-0"}
              `}
            />
          </button>

          <span
            className={`text-sm font-semibold font-[family-name:var(--font-heading)] transition-colors duration-[var(--duration-fast)] ${
              isYearly ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-tertiary)]"
            }`}
          >
            Yearly
          </span>

          {isYearly && (
            <Badge variant="success">Save 20%</Badge>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-grid)] items-start max-w-5xl mx-auto">
          {plans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <article
                key={plan.name}
                className={`
                  relative rounded-[var(--card-radius)] border flex flex-col overflow-hidden
                  hover-effect
                  ${
                    plan.recommended
                      ? "border-[var(--color-accent)] shadow-[var(--shadow-xl)] bg-[var(--color-surface-elevated)] md:scale-105 z-10"
                      : "border-[var(--color-border)] bg-[var(--color-surface-elevated)]"
                  }
                `}
              >
                {plan.recommended && (
                  <div className="bg-[var(--color-accent)] text-[var(--color-text-on-accent)] text-xs font-bold tracking-widest uppercase text-center py-2.5 px-4">
                    Most Popular
                  </div>
                )}

                <div className="p-[var(--card-padding)] flex flex-col flex-1">
                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)]">{plan.name}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
                    {plan.description}
                  </p>

                  <div className="mt-6 mb-8">
                    <span className="text-5xl font-[var(--heading-weight)] tracking-[var(--heading-tracking)] font-[family-name:var(--font-heading)]">
                      ${price}
                    </span>
                    <span className="text-sm text-[var(--color-text-tertiary)] ml-1 font-[family-name:var(--font-body)]">
                      /month
                    </span>
                    {isYearly && (
                      <span className="block text-xs text-[var(--color-text-tertiary)] mt-1 font-[family-name:var(--font-body)]">
                        billed annually
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-[15px] text-[var(--color-text-primary)] font-[family-name:var(--font-body)]"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-[var(--avatar-radius)] bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)] inline-flex items-center justify-center mt-0.5">
                          <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.recommended ? "primary" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
