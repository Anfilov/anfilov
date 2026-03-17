import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const rows = [
  {
    title: "Token-Driven Theming",
    description:
      "Our three-layer token architecture — primitive, semantic, and component — means you never touch component files when rebranding. Change six CSS variables and your entire site transforms.",
    image: "https://placehold.co/600x400/111111/e63328?text=Theming",
    alt: "Design token theming interface",
  },
  {
    title: "Responsive by Default",
    description:
      "Every section is designed mobile-first at 375px, then progressively enhanced for tablet and desktop. No afterthought layouts — each breakpoint is intentional.",
    image: "https://placehold.co/600x400/1a1a1a/f25c54?text=Responsive",
    alt: "Responsive design across devices",
  },
  {
    title: "Dark Mode Built In",
    description:
      "A single data attribute on the HTML element switches all semantic tokens. Components don't need to know dark mode exists — the cascade handles everything.",
    image: "https://placehold.co/600x400/111111/999999?text=Dark+Mode",
    alt: "Light and dark mode comparison",
  },
];

export function FeatureAlternating() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="How it works"
          title="Built for real projects"
          subtitle="Not a toy — a production-ready framework that handles edge cases you haven't thought of yet."
        />

        <div className="space-y-[var(--space-block)]">
          {rows.map((row, i) => (
            <div
              key={row.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-grid)] lg:gap-[var(--space-grid-lg)] items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
                  {row.title}
                </h3>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)]">
                  {row.description}
                </p>
              </div>
              <div
                className={`relative aspect-[3/2] rounded-[var(--card-radius)] overflow-hidden bg-[var(--color-surface-dark)] shadow-[var(--shadow-lg)] ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <Image
                  src={row.image}
                  alt={row.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
