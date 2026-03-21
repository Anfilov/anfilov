import Image from "next/image";
import { Container } from "@/components/ui/Container";

export interface ToolData {
  _id: string;
  name: string;
  url: string;
  logoUrl: string;
}

interface OfferToolsProps {
  tools?: ToolData[];
}

export function OfferTools({ tools }: OfferToolsProps) {
  if (!tools || tools.length === 0) return null;

  return (
    <section className="bg-[var(--color-surface)] pb-[var(--section-padding-y)] pt-[var(--space-section-compact)]">
      <Container>
        <header className="mb-[var(--space-heading-gap)]">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-accent)] mb-5 font-[family-name:var(--font-heading)]">
            Aplikace &amp; nástroje
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
            Jaké nástroje při tvorbě používám
          </h2>
        </header>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
          {tools.map((tool) => (
            <a
              key={tool._id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-3"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 relative">
                <Image
                  src={tool.logoUrl}
                  alt={tool.name}
                  fill
                  className="object-contain"
                  sizes="64px"
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
