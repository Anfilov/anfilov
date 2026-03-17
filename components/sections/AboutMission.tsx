import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const photos = [
  { src: "https://placehold.co/400x280/333333/999999?text=Office", alt: "Office workspace" },
  { src: "https://placehold.co/400x280/1a1a1a/999999?text=Team", alt: "Team collaboration" },
  { src: "https://placehold.co/400x280/111111/999999?text=Culture", alt: "Company culture" },
];

export function AboutMission() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="About us"
          title="Our mission"
          subtitle="We believe great tools should be accessible to every team, regardless of size."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-block)] items-start">
          {/* Editorial quote column */}
          <div className="relative pl-6 sm:pl-8">
            {/* Vertical accent bar */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-[var(--color-accent)]"
            />
            <blockquote>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-[var(--heading-weight)] tracking-[var(--heading-tracking)] leading-[1.2] font-[family-name:var(--font-heading)] text-[var(--color-text-primary)]">
                &ldquo;We started this company because we saw teams wasting
                months rebuilding the same UI patterns from scratch.&rdquo;
              </p>
              <footer className="mt-6">
                <cite className="not-italic text-sm font-semibold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)]">
                  Alex Rivera
                </cite>
                <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
                  Co-founder & CEO
                </p>
              </footer>
            </blockquote>
          </div>

          {/* Body text column */}
          <div>
            <p className="text-[15px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed mb-6">
              Founded in 2022, we set out to build the design framework we
              wished existed — one that adapts to any brand through tokens, ships
              accessible markup by default, and scales from a solo developer to
              an enterprise design team.
            </p>
            <p className="text-[15px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed mb-8">
              Today, thousands of teams use our framework to launch websites
              in days instead of months, without sacrificing quality or
              consistency.
            </p>

            {/* Founded stat callout */}
            <div className="inline-flex items-baseline gap-3 px-5 py-4 rounded-[var(--card-radius)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)]">
              <span className="text-3xl font-[var(--heading-weight)] tracking-[var(--heading-tracking)] font-[family-name:var(--font-heading)] text-[var(--color-accent)]">
                2022
              </span>
              <span className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
                Founded in San Francisco
              </span>
            </div>
          </div>
        </div>

        {/* Photo strip */}
        <div className="mt-[var(--space-block)] grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-grid)]">
          {photos.map((photo) => (
            <div
              key={photo.alt}
              className="relative aspect-[4/3] rounded-[var(--card-radius)] overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                unoptimized
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
