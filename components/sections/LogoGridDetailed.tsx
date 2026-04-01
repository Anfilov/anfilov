import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const partners = [
  { name: "Vercel", detail: "Deployment partner" },
  { name: "Stripe", detail: "Payments infrastructure" },
  { name: "Notion", detail: "Knowledge management" },
  { name: "Linear", detail: "Project tracking" },
  { name: "Figma", detail: "Design collaboration" },
  { name: "Supabase", detail: "Backend platform" },
  { name: "Resend", detail: "Email delivery" },
  { name: "Clerk", detail: "Authentication" },
];

export function LogoGridDetailed() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Ecosystem"
          title="Works with your stack"
          subtitle="First-class integrations with the tools you already use."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="
                group relative
                rounded-[var(--card-radius)] border border-[var(--color-border)]
                bg-[var(--color-surface)] p-6 sm:p-8
                flex flex-col items-center justify-center text-center
                transition-[border-color] duration-[var(--duration-fast)] ease-[var(--ease-smooth)]
                hover:border-[var(--color-accent)]
                hover-effect
              "
            >
              {/* Logo placeholder */}
              <span
                className="
                  text-lg sm:text-xl font-[var(--heading-weight)] tracking-[var(--heading-tracking)]
                  font-[family-name:var(--font-heading)]
                  text-[var(--color-text-primary)] opacity-50
                  group-hover:opacity-100
                  transition-opacity duration-[var(--duration-fast)]
                  mb-1.5
                "
              >
                {partner.name}
              </span>

              {/* Detail text — always visible */}
              <span
                className="
                  text-[12px] text-[var(--color-text-tertiary)]
                  font-[family-name:var(--font-body)]
                  group-hover:text-[var(--color-accent)]
                  transition-colors duration-[var(--duration-fast)]
                "
              >
                {partner.detail}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
