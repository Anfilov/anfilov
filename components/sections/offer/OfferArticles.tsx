import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { OfferData } from "@/lib/offer-types";

interface Props {
  offer: OfferData;
}

const funnelColors: Record<string, string> = {
  TOFU: "bg-[var(--color-tag-forest)] text-[var(--color-forest-mid)]",
  MOFU: "bg-[var(--color-tag-gold)] text-[var(--color-warm-600)]",
  BOFU: "bg-[var(--color-tag-forest-light)] text-[var(--color-forest-light)]",
};

/** Blok 11 — Související články. Content cluster propojení. */
export function OfferArticles({ offer }: Props) {
  if (!offer.articles.length) return null;

  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <header className="max-w-[680px] mb-[var(--space-heading-gap)]">
          <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
            Články
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
            Přečtěte si více o&nbsp;tvorbě loga
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-grid)] reveal-stagger">
          {offer.articles.map((article) => (
            <a
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="
                reveal group rounded-[var(--card-radius)]
                border border-[var(--card-border)]
                bg-[var(--card-bg)] overflow-hidden
                transition-[border-color,box-shadow] duration-[var(--duration-slow)] ease-[var(--ease-spring)]
                hover:border-[var(--color-border-accent)] hover:shadow-[var(--shadow-gold-sm)]
                flex flex-col no-underline
              "
            >
              {/* Thumbnail */}
              <div className="relative aspect-[5/3] bg-[var(--color-surface-sunken)]">
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-[var(--duration-slow)] group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    className={`text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-[var(--radius-xs)] font-[family-name:var(--font-ui)] ${
                      funnelColors[article.funnelTag] ?? funnelColors.TOFU
                    }`}
                  >
                    {article.funnelTag}
                  </span>
                  <span className="text-[12px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-ui)]">
                    {article.type}
                  </span>
                </div>
                <h3 className="text-[15px] font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-tight leading-[1.4] group-hover:text-[var(--color-forest-mid)] transition-colors duration-[var(--duration-fast)]">
                  {article.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
