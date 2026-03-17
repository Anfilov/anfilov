import { Upload, Sliders, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Install & configure",
    description:
      "Clone the repo, run npm install, and set your brand tokens in a single CSS file. You're live in under five minutes.",
  },
  {
    number: "02",
    icon: Sliders,
    title: "Customize tokens",
    description:
      "Adjust colors, typography, spacing, and radius tokens to match your brand. Every component updates instantly.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Ship to production",
    description:
      "Compose pages from pre-built sections, connect your CMS, and deploy. Performance-optimized from day one.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="How it works"
          title="Three steps to launch"
          subtitle="From zero to production in minutes, not months."
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
            {/* Connecting line (desktop only) */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-[52px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-[var(--color-border)]"
            />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    <div
                      className="
                        w-[104px] h-[104px] rounded-[var(--card-radius)]
                        bg-[var(--color-surface-elevated)] border border-[var(--color-border)]
                        flex items-center justify-center
                        shadow-[var(--shadow-sm)]
                        relative z-10
                      "
                    >
                      <Icon
                        size={32}
                        strokeWidth={1.5}
                        className="text-[var(--color-accent)]"
                        aria-hidden="true"
                      />
                    </div>
                    <span
                      className="
                        absolute -top-3 -right-3 z-20
                        w-8 h-8 rounded-full
                        bg-[var(--color-accent)] text-[var(--color-text-on-accent)]
                        text-xs font-bold font-[family-name:var(--font-heading)]
                        inline-flex items-center justify-center
                        shadow-[var(--shadow-sm)]
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-bold tracking-tight font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed max-w-xs">
                    {step.description}
                  </p>

                  {/* Mobile step connector */}
                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="md:hidden w-px h-8 bg-[var(--color-border)] mt-6"
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
