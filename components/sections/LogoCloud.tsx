import { Container } from "@/components/ui/Container";

const logos = [
  "Acme Corp",
  "Globex",
  "Initech",
  "Umbrella",
  "Stark Ind",
  "Wayne Ent",
];

export function LogoCloud() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--space-section-compact)]">
      <Container>
        <p className="layout-text text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] mb-10 font-[family-name:var(--font-heading)]">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap layout-items layout-justify gap-x-12 gap-y-6 sm:gap-x-16">
          {logos.map((name) => (
            <div
              key={name}
              className="
                text-xl sm:text-2xl font-[var(--heading-weight)] tracking-[var(--heading-tracking)]
                font-[family-name:var(--font-heading)]
                text-[var(--color-text-primary)]
                opacity-35
                hover:opacity-70
                transition-opacity duration-[var(--duration-slow)]
                cursor-default select-none
              "
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
