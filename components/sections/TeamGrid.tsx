import { Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Avatar } from "@/components/ui/Avatar";

const team = [
  { name: "Alex Morgan", role: "CEO & Founder", initials: "AM" },
  { name: "Jordan Lee", role: "Head of Design", initials: "JL" },
  { name: "Sam Taylor", role: "Lead Engineer", initials: "ST" },
  { name: "Casey Rivera", role: "Product Manager", initials: "CR" },
];

export function TeamGrid() {
  return (
    <section id="team" className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Team"
          title="Meet the people"
          subtitle="A small, focused team building tools that make web development better."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-grid)]">
          {team.map((member) => (
            <article
              key={member.name}
              className="
                text-center p-[var(--card-padding)] rounded-[var(--card-radius)]
                bg-[var(--color-surface-elevated)] border border-[var(--color-border)]
                hover:shadow-[var(--shadow-md)]
                transition-shadow duration-[var(--duration-normal)]
              "
            >
              <Avatar
                initials={member.initials}
                alt={member.name}
                size="lg"
                className="mx-auto mb-4"
              />
              <h3 className="text-base font-bold font-[family-name:var(--font-heading)]">{member.name}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1 font-[family-name:var(--font-body)]">
                {member.role}
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <a
                  href="#"
                  aria-label={`${member.name} on LinkedIn`}
                  className="
                    p-2 rounded-[var(--radius-md)]
                    text-[var(--color-text-tertiary)]
                    hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-sunken)]
                    transition-colors duration-[var(--duration-fast)]
                    cursor-pointer min-h-[44px] min-w-[44px]
                    inline-flex items-center justify-center
                    focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
                  "
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href="#"
                  aria-label={`${member.name} on Twitter`}
                  className="
                    p-2 rounded-[var(--radius-md)]
                    text-[var(--color-text-tertiary)]
                    hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-sunken)]
                    transition-colors duration-[var(--duration-fast)]
                    cursor-pointer min-h-[44px] min-w-[44px]
                    inline-flex items-center justify-center
                    focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
                  "
                >
                  <Twitter size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
