import { Heart, Lightbulb, Users, Shield, Leaf, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const values: Value[] = [
  {
    title: "People first",
    description: "Every decision starts with how it impacts the humans using what we build.",
    icon: <Heart size={22} aria-hidden="true" />,
  },
  {
    title: "Radical clarity",
    description: "We communicate openly, document thoroughly, and never hide behind jargon.",
    icon: <Lightbulb size={22} aria-hidden="true" />,
  },
  {
    title: "Collaborate deeply",
    description: "Great work happens when diverse perspectives collide with shared purpose.",
    icon: <Users size={22} aria-hidden="true" />,
  },
  {
    title: "Earn trust daily",
    description: "Security, reliability, and honesty are not features — they are foundations.",
    icon: <Shield size={22} aria-hidden="true" />,
  },
  {
    title: "Sustainable pace",
    description: "We build for the long haul. No crunch, no burnout, no shortcuts.",
    icon: <Leaf size={22} aria-hidden="true" />,
  },
  {
    title: "Bias to action",
    description: "Ship, learn, iterate. Progress beats perfection every time.",
    icon: <Zap size={22} aria-hidden="true" />,
  },
];

export function ValuesGrid() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Our values"
          title="What we stand for"
          subtitle="The principles that guide every product decision, team interaction, and line of code."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value) => (
            <article
              key={value.title}
              className="group flex flex-col"
            >
              {/* Icon */}
              <div className="
                inline-flex items-center justify-center w-12 h-12
                rounded-[var(--radius-md)]
                bg-[var(--color-accent)]/10 text-[var(--color-accent)]
                mb-4
                transition-transform duration-[var(--duration-normal)] ease-[var(--ease-smooth)]
                group-hover:scale-110
              ">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-[var(--heading-tracking)]">
                {value.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
