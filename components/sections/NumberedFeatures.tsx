import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    number: "01",
    title: "Token-driven theming",
    description:
      "Every color, radius, shadow, and spacing value flows from a single CSS file. Change one token and the entire site transforms — no component-level overrides needed.",
  },
  {
    number: "02",
    title: "Concept system",
    description:
      "Switch between design personalities by toggling data attributes on the HTML element. Sharp or rounded, tight or airy — one attribute controls everything.",
  },
  {
    number: "03",
    title: "Accessible by default",
    description:
      "Semantic HTML, ARIA labels, keyboard navigation, and reduced-motion support are built into every component. Pass compliance audits on the first try.",
  },
  {
    number: "04",
    title: "Production-ready blocks",
    description:
      "Over 40 pre-built sections — hero, features, pricing, testimonials, and more. Each block responds to every design token and concept dimension.",
  },
];

export function NumberedFeatures() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Why us"
          title="Built different"
          subtitle="Four pillars that set this framework apart from everything else."
        />

        <div className="max-w-3xl mx-auto space-y-0">
          {features.map((feature, index) => (
            <article
              key={feature.number}
              className={`
                flex flex-col sm:flex-row items-start gap-6 sm:gap-10
                py-8 sm:py-10
                ${index < features.length - 1 ? "border-b border-[var(--color-border)]" : ""}
              `}
            >
              {/* Large number */}
              <span
                className="
                  text-5xl sm:text-6xl lg:text-7xl font-[var(--heading-weight)]
                  tracking-[var(--heading-tracking)] leading-none
                  font-[family-name:var(--font-heading)]
                  text-[var(--color-accent)]
                  select-none flex-shrink-0
                  opacity-80
                "
                aria-hidden="true"
              >
                {feature.number}
              </span>

              {/* Text */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed max-w-xl">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
