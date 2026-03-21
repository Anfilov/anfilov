import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { SluzbaData } from "@/lib/sluzba-types";

interface Props {
  offer: SluzbaData;
}

/** Služby a pojmy / Cross-sell — doporučené služby. */
export function SluzbaCrossSell({ offer }: Props) {
  if (!offer.crossLinks.length) return null;

  return (
    <section className="bg-[var(--color-surface-sunken)] py-[var(--section-padding-y)]">
      <Container>
        <header className="max-w-[680px] mb-[var(--space-heading-gap)]">
          <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
            Mohlo by se vám hodit
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
            Související služby
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-grid)]">
          {offer.crossLinks.map((link) => (
            <a
              key={link.slug}
              href={`/sluzba-template/${link.slug}`}
              className="
                group rounded-[var(--card-radius)]
                border border-[var(--card-border)]
                bg-[var(--color-surface-elevated)] p-[var(--card-padding)]
                transition-[border-color,box-shadow] duration-[var(--duration-slow)] ease-[var(--ease-spring)]
                hover:border-[var(--color-border-accent)] hover:shadow-[var(--shadow-gold-sm)]
                flex flex-col no-underline
              "
            >
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-tight mb-2">
                {link.name}
              </h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-[1.6] flex-1 mb-5">
                {link.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-forest-mid)] group-hover:text-[var(--color-forest)] transition-colors duration-[var(--duration-fast)] font-[family-name:var(--font-ui)]">
                Zjistit více
                <ArrowRight
                  size={14}
                  className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
