import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
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
    price: "$49",
    period: "/month",
    description: "For growing teams that need the full toolkit.",
    features: [
      "All 24 sections",
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
    price: "$149",
    period: "/month",
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

export function PricingTable() {
  return (
    <section id="pricing" className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Pricing"
          title="Simple, transparent pricing"
          subtitle="No hidden fees. Cancel anytime. Start with a 14-day free trial."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-grid)] items-start max-w-5xl mx-auto">
          {plans.map((plan) => (
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
              {/* Recommended banner */}
              {plan.recommended && (
                <div className="bg-[var(--color-accent)] text-[var(--color-text-on-accent)] text-xs font-bold tracking-widest uppercase text-center py-2.5 px-4">
                  Most Popular
                </div>
              )}

              <div className="p-[var(--card-padding)] flex flex-col flex-1">
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
                  {plan.description}
                </p>

                <div className="mt-6 mb-8">
                  <span className="text-5xl font-[var(--heading-weight)] tracking-[var(--heading-tracking)] font-[family-name:var(--font-heading)]">
                    {plan.price}
                  </span>
                  <span className="text-sm text-[var(--color-text-tertiary)] ml-1 font-[family-name:var(--font-body)]">
                    {plan.period}
                  </span>
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
          ))}
        </div>
      </Container>
    </section>
  );
}
