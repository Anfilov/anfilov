import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Mention {
  publication: string;
  quote: string;
}

const mentions: Mention[] = [
  { publication: "TechCrunch", quote: "A refreshingly opinionated approach to web frameworks." },
  { publication: "The Verge", quote: "Sets a new standard for design-first development." },
  { publication: "Forbes", quote: "One of the most promising tools for modern web teams." },
  { publication: "Wired", quote: "Finally, a framework that designers and developers both love." },
  { publication: "Fast Company", quote: "Bridging the gap between design tools and production code." },
  { publication: "Smashing Mag", quote: "Token-driven theming done right — flexible yet consistent." },
];

export function MediaMentions() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="In the press"
          title="What they&rsquo;re saying"
          subtitle="Featured in leading technology and design publications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentions.map((mention) => (
            <article
              key={mention.publication}
              className="
                flex flex-col justify-between
                rounded-[var(--card-radius)] border border-[var(--color-border)]
                bg-[var(--color-surface)] p-6 sm:p-8
                hover-effect glass-surface
              "
            >
              {/* Publication name as typographic logo */}
              <p className="text-lg sm:text-xl font-[var(--heading-weight)] tracking-[var(--heading-tracking)] font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] opacity-60 mb-4">
                {mention.publication}
              </p>

              {/* Quote */}
              <blockquote className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)] italic">
                &ldquo;{mention.quote}&rdquo;
              </blockquote>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
