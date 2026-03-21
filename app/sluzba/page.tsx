import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/site.config";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Navbar, Footer } from "@/components/sections";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Služby — ANFILOV Studio",
  description:
    "Profesionální služby v oblasti brandingu, tvorby loga a webdesignu. Podívejte se, co pro vás mohu udělat.",
  alternates: {
    canonical: `${siteConfig.url}/sluzba`,
  },
};

// ---------------------------------------------------------------------------
// Data fetching
// ---------------------------------------------------------------------------

interface SluzbaListItem {
  _id: string;
  name: string;
  slug: string;
  heroTitle?: string;
  heroSubheadline?: string;
  heroImage?: { image: Record<string, unknown>; alt?: string };
  heroPriceLabel?: string;
}

async function getAllSluzby(): Promise<SluzbaListItem[]> {
  return client.fetch(
    `*[_type == "sluzba"] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      heroTitle,
      heroSubheadline,
      heroImage {
        image { asset->, hotspot, crop },
        alt
      },
      heroPriceLabel
    }`,
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function SluzbyPage() {
  const sluzby = await getAllSluzby();

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[var(--color-surface)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 24px, var(--color-glow-subtle) 24px, var(--color-glow-subtle) 25px)",
            }}
          />

          <Container className="relative pt-20 sm:pt-28 lg:pt-32 pb-10 sm:pb-14">
            <Breadcrumbs
              items={[
                { label: "Domů", href: "/" },
                { label: "Služby" },
              ]}
              className="mb-10"
            />

            <header className="max-w-[680px]">
              <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
                Služby
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.06] tracking-[-0.03em] mb-6">
                Co pro vás mohu udělat
              </h1>
              <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)] max-w-[520px]">
                Každá služba je navržena tak, aby vaše značka fungovala strategicky, vypadala profesionálně a&nbsp;přinášela výsledky.
              </p>
            </header>
          </Container>
        </section>

        {/* Service cards */}
        <section className="bg-[var(--color-surface)] pb-[var(--section-padding-y)]">
          <Container>
            <div className="grid grid-cols-1 gap-8 reveal-stagger">
              {sluzby.map((sluzba) => {
                const imageUrl = sluzba.heroImage?.image
                  ? urlForImage(sluzba.heroImage.image)
                      .width(600)
                      .height(600)
                      .fit("crop")
                      .url()
                  : null;

                return (
                  <Link
                    key={sluzba._id}
                    href={`/sluzba/${sluzba.slug}`}
                    className="
                      reveal group rounded-[var(--card-radius)] overflow-hidden
                      border border-[var(--card-border)]
                      bg-[var(--color-surface-elevated)]
                      transition-[border-color,box-shadow] duration-[var(--duration-slow)] ease-[var(--ease-spring)]
                      hover:border-[var(--color-border-accent)] hover:shadow-[var(--shadow-gold-sm)]
                      no-underline
                    "
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Image */}
                      {imageUrl && (
                        <div className="sm:w-[200px] sm:h-[200px] shrink-0 bg-white">
                          <img
                            src={imageUrl}
                            alt={sluzba.heroImage?.alt || sluzba.name}
                            className="w-full h-full object-cover transition-transform duration-[var(--duration-slow)] group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
                        <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-tight mb-2">
                          {sluzba.heroTitle || sluzba.name}
                        </h2>
                        {sluzba.heroSubheadline && (
                          <p className="text-[15px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-[1.6] mb-4 max-w-[600px]">
                            {sluzba.heroSubheadline}
                          </p>
                        )}
                        <div className="flex items-center gap-4">
                          {sluzba.heroPriceLabel && (
                            <span className="text-sm font-bold text-[var(--color-gold)] font-[family-name:var(--font-heading)]">
                              {sluzba.heroPriceLabel}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-forest-mid)] font-[family-name:var(--font-ui)] group-hover:gap-2 transition-all duration-[var(--duration-fast)]">
                            Zjistit více
                            <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] mb-6">
                Nemůžete se rozhodnout? Napište mi a&nbsp;společně najdeme to pravé řešení.
              </p>
              <Link href="/kontakt">
                <Button variant="primary" size="lg">
                  Kontaktujte mě
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
