import { Container } from "@/components/ui/Container";

export interface ToolData {
  _id: string;
  name: string;
  url: string;
  logoUrl: string;
}

interface SluzbaNastrojeProps {
  tools?: ToolData[];
  overline?: string;
  title?: string;
}

/** Nástroje — grid log používaných nástrojů. */
export function SluzbaNastroje({ tools, overline, title }: SluzbaNastrojeProps) {
  if (!tools || tools.length === 0) return null;

  return (
    <section className="bg-[var(--color-surface)] pb-[var(--section-padding-y)] pt-[var(--space-section-compact)]">
      <Container>
        <header className="mb-[var(--space-heading-gap)]">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-accent)] mb-5 font-[family-name:var(--font-heading)]">
            {overline || "Nástroje"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
            {title || "S čím pracuji"}
          </h2>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {tools.map((tool) => (
            <a
              key={tool._id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-3"
            >
              <div style={{ width: 160, height: 40, display: "flex", alignItems: "center" }}>
                <img
                  src={tool.logoUrl}
                  alt={tool.name}
                  loading="lazy"
                  style={{
                    width: 160,
                    height: 40,
                    objectFit: "contain",
                    objectPosition: "left center",
                  }}
                />
              </div>
              <span className="text-[13px] font-semibold text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-[var(--duration-slow)] font-[family-name:var(--font-ui)]">
                {tool.name}
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
