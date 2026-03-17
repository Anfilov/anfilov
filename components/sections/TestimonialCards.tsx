import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Avatar } from "@/components/ui/Avatar";

const testimonials = [
  {
    quote:
      "This framework saved us weeks of work. We rebranded by changing a single file and the entire site updated instantly.",
    name: "Sarah Chen",
    role: "CTO, TechStart",
    initials: "SC",
  },
  {
    quote:
      "The token architecture is brilliant. We've never had such consistency across our marketing site before.",
    name: "Marcus Johnson",
    role: "Design Lead, Globex",
    initials: "MJ",
  },
  {
    quote:
      "Dark mode just worked. No extra classes, no conditionals in components. We saved at least 40 hours.",
    name: "Elena Rodriguez",
    role: "Frontend Dev, Initech",
    initials: "ER",
  },
  {
    quote:
      "Accessible by default meant we passed our compliance audit on the first try. That never happens.",
    name: "David Kim",
    role: "VP Engineering, Wayne Ent",
    initials: "DK",
  },
  {
    quote:
      "The responsive design is flawless. We tested on 20 devices and every section looked perfect.",
    name: "Aisha Patel",
    role: "Product Manager, Umbrella",
    initials: "AP",
  },
  {
    quote:
      "We went from Figma to production in 3 days. The pre-built sections covered every use case we needed.",
    name: "Tom Lindgren",
    role: "Founder, Acme Corp",
    initials: "TL",
  },
];

export function TestimonialCards() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Testimonials"
          title="Loved by teams"
          subtitle="Don't take our word for it — hear from the teams that build with us."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-grid)]">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="
                p-[var(--card-padding)] rounded-[var(--card-radius)]
                bg-[var(--color-surface-elevated)] border border-[var(--color-border)]
                flex flex-col
              "
            >
              <p className="text-sm text-[var(--color-text-primary)] leading-relaxed font-[family-name:var(--font-body)] italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 pt-4 border-t border-[var(--color-border)] flex items-center gap-3">
                <Avatar initials={t.initials} alt={t.name} size="md" />
                <div>
                  <cite className="text-sm font-semibold text-[var(--color-text-primary)] not-italic font-[family-name:var(--font-heading)]">
                    {t.name}
                  </cite>
                  <p className="text-xs text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
                    {t.role}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
