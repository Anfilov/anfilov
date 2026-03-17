import { Paintbrush, Code, Rocket, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    icon: Paintbrush,
    number: "01",
    title: "Define your brand",
    description:
      "Set your colors, fonts, and spacing in a single CSS file. The token system propagates changes everywhere.",
  },
  {
    icon: Code,
    number: "02",
    title: "Pick your sections",
    description:
      "Choose from 24 pre-built sections. Remove what you don't need, reorder for your story.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Customize content",
    description:
      "Replace placeholder text and images with your actual content. Connect to your CMS if needed.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Ship it",
    description:
      "Deploy with confidence. Responsive, accessible, and performant out of the box.",
  },
];

export function ProcessSteps() {
  return (
    <section className="section-contrast relative bg-[var(--sc-bg)] text-[var(--sc-text)] py-[var(--section-padding-y)] overflow-hidden">
      {/* Atmospheric background */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--color-glow-medium),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-pattern)_25%,transparent_25%,transparent_50%,var(--color-pattern)_50%,var(--color-pattern)_75%,transparent_75%)] bg-[length:48px_48px]" />
      </div>

      <Container className="relative">
        <div className="layout-text mb-[var(--space-heading-gap)]">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent-light)] mb-4 font-[family-name:var(--font-heading)]">
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[var(--sc-text)] leading-[1.08]">
            From zero to launch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--sc-text-dim)] max-w-xl layout-mx font-[family-name:var(--font-body)] leading-relaxed">
            Four steps to a fully branded, production-ready website.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-grid)]">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-8 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-[var(--sc-border)]"
          />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 mx-auto mb-4">
                  <span
                    className="
                      inline-flex items-center justify-center
                      w-16 h-16 rounded-[var(--avatar-radius)]
                      bg-[var(--sc-card-bg)] border-2 border-[var(--sc-border)]
                      text-[var(--color-accent-light)]
                    "
                    aria-hidden="true"
                  >
                    <Icon size={24} />
                  </span>
                </div>
                <p className="text-xs font-bold tracking-widest text-[var(--color-accent-light)] uppercase mb-2 font-[family-name:var(--font-heading)]">
                  Step {step.number}
                </p>
                <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-heading)] text-[var(--sc-text)]">{step.title}</h3>
                <p className="text-sm text-[var(--sc-text-dim)] leading-relaxed font-[family-name:var(--font-body)]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
