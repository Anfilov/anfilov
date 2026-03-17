import { Palette, Code2, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Palette,
    title: "Brand Design",
    description:
      "We craft cohesive visual identities that resonate with your audience and stand the test of time.",
    deliverables: [
      "Logo & brand guidelines",
      "Color & typography system",
      "Marketing collateral",
      "Social media templates",
    ],
    gradient: "from-[var(--color-accent)]/20 to-[var(--color-accent)]/5",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Production-grade websites and web apps built with modern frameworks, optimized for performance.",
    deliverables: [
      "Responsive implementation",
      "CMS integration",
      "Performance optimization",
      "SEO & accessibility audit",
    ],
    gradient: "from-[var(--color-success)]/20 to-[var(--color-success)]/5",
  },
  {
    icon: Rocket,
    title: "Growth Strategy",
    description:
      "Data-driven strategies to acquire users, increase engagement, and scale your product sustainably.",
    deliverables: [
      "Conversion rate optimization",
      "A/B testing & analytics",
      "Landing page design",
      "Marketing automation",
    ],
    gradient: "from-[var(--color-warning)]/20 to-[var(--color-warning)]/5",
  },
];

export function ServiceCards() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Services"
          title="What we do"
          subtitle="End-to-end expertise from concept to launch and beyond."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-grid)]">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="
                  group flex flex-col
                  rounded-[var(--card-radius)] border border-[var(--color-border)]
                  bg-[var(--color-surface-elevated)] overflow-hidden
                  hover-effect
                "
              >
                {/* Gradient icon header */}
                <div className={`bg-gradient-to-br ${service.gradient} px-[var(--card-padding)] pt-[var(--card-padding)] pb-8`}>
                  <span
                    className="inline-flex items-center justify-center w-14 h-14 rounded-[var(--radius-lg)] bg-[var(--color-surface-elevated)] shadow-[var(--shadow-sm)] text-[var(--color-text-primary)]"
                    aria-hidden="true"
                  >
                    <Icon size={26} strokeWidth={1.6} />
                  </span>
                </div>

                {/* Content */}
                <div className="px-[var(--card-padding)] pt-5 pb-[var(--card-padding)] flex flex-col flex-1">
                  <h3 className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables list */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-[var(--color-text-primary)] font-[family-name:var(--font-body)]"
                      >
                        <span
                          className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Learn more link */}
                  <a
                    href="#"
                    className="
                      inline-flex items-center text-sm font-semibold
                      text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]
                      font-[family-name:var(--font-heading)]
                      transition-colors duration-[var(--duration-fast)]
                      cursor-pointer
                      focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none rounded-[var(--radius-sm)]
                    "
                  >
                    Learn more
                    <span aria-hidden="true" className="ml-1 group-hover:translate-x-0.5 transition-transform duration-[var(--duration-fast)]">&rarr;</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
