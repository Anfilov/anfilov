"use client";

import { useState } from "react";
import { User, Building2, CreditCard, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

interface StepDef {
  title: string;
  icon: React.ReactNode;
}

const stepDefs: StepDef[] = [
  { title: "Account", icon: <User size={16} aria-hidden="true" /> },
  { title: "Company", icon: <Building2 size={16} aria-hidden="true" /> },
  { title: "Billing", icon: <CreditCard size={16} aria-hidden="true" /> },
];

function InputField({ id, label, type = "text", placeholder }: { id: string; label: string; type?: string; placeholder: string }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] mb-1.5"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        aria-required="true"
        className="
          w-full rounded-[var(--input-radius)]
          border border-[var(--input-border)]
          bg-[var(--input-bg)]
          px-[var(--input-padding-x)] py-[var(--input-padding-y)]
          text-sm text-[var(--color-text-primary)]
          placeholder:text-[var(--color-text-tertiary)]
          font-[family-name:var(--font-body)]
          min-h-[44px]
          transition-[border-color,box-shadow] duration-[var(--duration-fast)]
          hover:border-[var(--color-border-strong)]
          focus-visible:border-[var(--input-border-focus)] focus-visible:ring-2 focus-visible:ring-[var(--input-border-focus)]/20 focus-visible:outline-none
        "
      />
    </div>
  );
}

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, stepDefs.length - 1));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 0));

  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Get started"
          title="Create your account"
          subtitle="Set up your workspace in just a few quick steps."
        />

        <div className="max-w-xl layout-mx">
          {/* Progress bar */}
          <div className="flex items-center mb-10">
            {stepDefs.map((step, i) => (
              <div key={step.title} className="flex-1 flex items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={`
                      w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold
                      transition-colors duration-[var(--duration-normal)]
                      ${
                        i < currentStep
                          ? "bg-[var(--color-forest-mid)] text-[var(--color-cream)]"
                          : i === currentStep
                            ? "bg-[var(--color-forest-mid)] text-[var(--color-cream)]"
                            : "bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)]"
                      }
                    `}
                  >
                    {i < currentStep ? (
                      <Check size={14} strokeWidth={3} />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <span
                    className={`
                      hidden sm:inline text-xs font-semibold font-[family-name:var(--font-heading)] tracking-wide
                      ${i <= currentStep ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-tertiary)]"}
                    `}
                  >
                    {step.title}
                  </span>
                </div>
                {i < stepDefs.length - 1 && (
                  <div className="flex-1 mx-3">
                    <div className="h-px bg-[var(--color-border)] relative">
                      <div
                        className="absolute inset-y-0 left-0 bg-[var(--color-forest-mid)] transition-[width] duration-[var(--duration-normal)]"
                        style={{ width: i < currentStep ? "100%" : "0%" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Step content */}
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="rounded-[var(--card-radius)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 sm:p-8">
              {currentStep === 0 && (
                <div className="space-y-5">
                  <InputField id="msf-name" label="Full name" placeholder="Jane Smith" />
                  <InputField id="msf-email" label="Email" type="email" placeholder="jane@company.com" />
                  <InputField id="msf-password" label="Password" type="password" placeholder="Create a password" />
                </div>
              )}
              {currentStep === 1 && (
                <div className="space-y-5">
                  <InputField id="msf-company" label="Company name" placeholder="Acme Inc." />
                  <InputField id="msf-role" label="Your role" placeholder="Product Designer" />
                  <InputField id="msf-size" label="Team size" placeholder="10-50" />
                </div>
              )}
              {currentStep === 2 && (
                <div className="space-y-5">
                  <InputField id="msf-card" label="Card number" placeholder="4242 4242 4242 4242" />
                  <div className="grid grid-cols-2 gap-4">
                    <InputField id="msf-expiry" label="Expiry" placeholder="MM / YY" />
                    <InputField id="msf-cvc" label="CVC" placeholder="123" />
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <Button
                type="button"
                variant="ghost"
                onClick={goBack}
                disabled={currentStep === 0}
              >
                Back
              </Button>
              {currentStep < stepDefs.length - 1 ? (
                <Button type="button" onClick={goNext}>
                  Continue
                </Button>
              ) : (
                <Button type="submit">
                  Create account
                </Button>
              )}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
