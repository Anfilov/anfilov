import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { SluzbaData } from "@/lib/sluzba-types";

interface Props {
  offer: SluzbaData;
}

/** Služby a pojmy — cross-sell + slovníkové pojmy. */
export function SluzbaSluzbyPojmy({ offer }: Props) {
  const hasLinks = offer.crossLinks.length > 0;
  const hasTerms = offer.glossaryTerms.length > 0;
  if (!hasLinks && !hasTerms) return null;

  return (
    <section className="bg-[var(--color-surface-sunken)] py-[var(--section-padding-y)]">
      <Container>
        <header className="max-w-[680px] mb-[var(--space-heading-gap)]">
          <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
            Související služby a pojmy
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
            Mohlo by se hodit
          </h2>
        </header>

        {/* Service cards */}
        {hasLinks && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-grid)] mb-10">
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
        )}

        {/* Glossary pills */}
        {hasTerms && (
          <div className="flex flex-wrap gap-2.5 mb-10">
            {offer.glossaryTerms.map((term) => {
              const slug = term
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "-");
              return (
                <a
                  key={term}
                  href={`/slovnik#${slug}`}
                  className="
                    inline-block px-3.5 py-2
                    text-[12px] font-semibold
                    rounded-[var(--radius-xs)]
                    bg-[var(--color-surface-elevated)] border border-[var(--color-border)]
                    text-[var(--color-warm-500)]
                    hover:border-[var(--color-border-accent)] hover:text-[var(--color-gold)]
                    transition-[border-color,color] duration-[var(--duration-fast)]
                    font-[family-name:var(--font-ui)] no-underline
                  "
                >
                  {term}
                </a>
              );
            })}
          </div>
        )}

        {/* Links side by side */}
        <div className="flex flex-wrap items-center gap-6">
          {hasLinks && (
            <a
              href="/sluzba-template"
              className="
                inline-flex items-center gap-1.5 text-sm font-semibold
                text-[var(--color-forest-mid)] hover:text-[var(--color-forest)]
                transition-colors duration-[var(--duration-fast)]
                font-[family-name:var(--font-ui)]
              "
            >
              Všechny služby
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          )}
          {hasTerms && (
            <a
              href="/slovnik"
              className="
                inline-flex items-center gap-1.5 text-sm font-semibold
                text-[var(--color-forest-mid)] hover:text-[var(--color-forest)]
                transition-colors duration-[var(--duration-fast)]
                font-[family-name:var(--font-ui)]
              "
            >
              Všechny pojmy
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
