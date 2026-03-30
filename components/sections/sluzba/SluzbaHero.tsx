import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { SluzbaHeroVideo } from "./SluzbaHeroVideo";
import type { SluzbaData } from "@/lib/sluzba-types";

interface Props {
  offer: SluzbaData;
  googleRating?: number;
  googleReviewCount?: number;
  googleReviewsUrl?: string;
}

function pracovnichDniDo(n: number): string {
  if (n === 1) return "1 pracovního dne";
  return `${n} pracovních dní`;
}

/** Hero — hlavní banner s Atomic Answer. */
export function SluzbaHero({ offer, googleRating, googleReviewCount, googleReviewsUrl = "#" }: Props) {
  const rating = googleRating ?? offer.rating;
  const reviewCount = googleReviewCount ?? offer.projectCount;
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-surface)" }}
    >

      <Container className="relative pt-20 sm:pt-28 lg:pt-32 pb-10 sm:pb-14">
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Domů", href: "/" },
            { label: "Služby", href: "/sluzba" },
            { label: offer.name },
          ]}
          className="mb-10"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column — on mobile appears second (after image) */}
          <div className="order-2 lg:order-1">
            <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
              {offer.name}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.06] tracking-[-0.03em] mb-6">
              {offer.heroTitle || offer.name}
            </h1>
            {offer.heroSubheadline && (
              <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)] mb-6 max-w-[520px]">
                {offer.heroSubheadline}
              </p>
            )}

            {/* Price anchor — derived from ceník */}
            {offer.cenikPriceLabel && (
              <p className="text-2xl sm:text-3xl font-bold text-[var(--color-gold)] font-[family-name:var(--font-heading)] tracking-tight mb-6">
                Již {offer.cenikPriceLabel}
              </p>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a href="#konzultace">
                <Button variant="primary" size="lg">
                  Chci nabídku
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
              </a>
              <a href="#portfolio">
                <Button variant="outline" size="lg">
                  Reference
                </Button>
              </a>
            </div>

            {/* Google Reviews + trust signals */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 no-underline hover:opacity-80 transition-opacity duration-[var(--duration-fast)]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" aria-label="Google" className="flex-shrink-0">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.round(rating)
                          ? "text-[var(--color-gold)] fill-[var(--color-gold)]"
                          : "text-[var(--color-border)]"
                      }
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="text-base font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)]">
                  {rating}
                </span>
              </a>
              {offer.heroProjectsLabel && (
                <>
                  <span className="text-[var(--color-border-strong)]" aria-hidden="true">&middot;</span>
                  <span className="text-base font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)]">
                    {offer.heroProjectsLabel}
                  </span>
                </>
              )}
              {offer.deliveryDays > 0 && (
                <>
                  <span className="text-[var(--color-border-strong)]" aria-hidden="true">&middot;</span>
                  <span className="text-base font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)]">
                    Dodání do {pracovnichDniDo(offer.deliveryDays)}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Media column — image or video */}
          {offer.heroMediaType === "video" && offer.heroVideoUrl ? (
            <SluzbaHeroVideo
              src={offer.heroVideoUrl}
              poster={offer.heroImage || undefined}
              loop={offer.heroVideoLoop ?? false}
              alt={`Ukázka služby ${offer.name}`}
            />
          ) : offer.heroImage ? (
            <div className="relative order-1 lg:order-2 flex items-center justify-center rounded-[var(--radius-lg)] overflow-hidden">
              <img
                src={offer.heroImage}
                alt={`Ukázka služby ${offer.name}`}
                className="block w-full h-auto"
              />
            </div>
          ) : (
            <div className="order-1 lg:order-2" />
          )}
        </div>
      </Container>

      {/* ── Atomic Answer — SEO-rich summary, visually subtle ── */}
      <Container className="relative pt-2 sm:pt-3 pb-[var(--section-padding-y)]">
        <section
          role="doc-abstract"
          aria-label="Shrnutí služby"
          itemScope
          itemType="https://schema.org/Service"
          className="rounded-[var(--radius-lg)] border-[1.5px] border-dashed border-[var(--color-border)] bg-[var(--color-surface-sunken)] px-6 sm:px-8 py-5 sm:py-6"
        >
          <meta itemProp="name" content={offer.name} />
          <meta itemProp="provider" content="ANFILOV Studio" />
          <meta itemProp="areaServed" content="CZ" />
          <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-text-tertiary)] mb-2 font-[family-name:var(--font-ui)]">
            Nabídka v kostce
          </p>
          <p
            itemProp="description"
            className="text-[13px] sm:text-[14px] leading-[1.7] text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]"
          >
            {offer.atomicAnswer}
          </p>
        </section>
      </Container>
    </section>
  );
}
