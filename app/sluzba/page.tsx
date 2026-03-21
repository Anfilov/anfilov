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
  title: "Služby — ANFILOV Studio | Branding, webdesign a grafický design",
  description:
    "Kompletní nabídka služeb: tvorba loga, brand identita, webdesign, tiskoviny, obalový design, sociální média a online prodej. Od strategie po finální design.",
  alternates: {
    canonical: `${siteConfig.url}/sluzba`,
  },
};

// ---------------------------------------------------------------------------
// Categories definition
// ---------------------------------------------------------------------------

const CATEGORIES = [
  { value: "znacka-identita", label: "Značka & identita" },
  { value: "webdesign", label: "Webdesign" },
  { value: "firemni-tiskoviny", label: "Firemní & reklamní tiskoviny" },
  { value: "obalovy-design", label: "Obalový design" },
  { value: "socialni-media", label: "Sociální média" },
  { value: "digitalni-design", label: "Digitální design" },
  { value: "online-prodej", label: "Online prodej" },
] as const;

// ---------------------------------------------------------------------------
// Data fetching
// ---------------------------------------------------------------------------

interface SluzbaListItem {
  _id: string;
  name: string;
  slug: string;
  category?: string;
  categoryOrder?: number;
  heroTitle?: string;
  heroSubheadline?: string;
  heroImage?: { image: Record<string, unknown>; alt?: string };
  heroPriceLabel?: string;
}

async function getAllSluzby(): Promise<SluzbaListItem[]> {
  return client.fetch(
    `*[_type == "sluzba"] | order(categoryOrder asc, name asc) {
      _id,
      name,
      "slug": slug.current,
      category,
      categoryOrder,
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
// JSON-LD ItemList for SEO
// ---------------------------------------------------------------------------

function SluzbyJsonLd({ sluzby }: { sluzby: SluzbaListItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Služby — ANFILOV Studio",
    description:
      "Kompletní nabídka designových služeb od Simona Anfilova: branding, webdesign, tiskoviny, obalový design, sociální média a online prodej.",
    numberOfItems: sluzby.length,
    itemListElement: sluzby.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.heroTitle || s.name,
      url: `${siteConfig.url}/sluzba/${s.slug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function SluzbyPage() {
  const sluzby = await getAllSluzby();

  // Group services by category
  const grouped = new Map<string, SluzbaListItem[]>();
  for (const s of sluzby) {
    const cat = s.category || "other";
    if (!grouped.has(cat)) grouped.set(cat, []);
    grouped.get(cat)!.push(s);
  }

  return (
    <>
      <Navbar />
      <SluzbyJsonLd sluzby={sluzby} />

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

        {/* Service cards grouped by category */}
        <section className="bg-[var(--color-surface)] pb-[var(--section-padding-y)]">
          <Container>
            {CATEGORIES.map((cat, catIndex) => {
              const items = grouped.get(cat.value);
              if (!items || items.length === 0) return null;

              return (
                <div key={cat.value} className={catIndex > 0 ? "mt-16" : ""}>
                  {/* Category header */}
                  <div className="mb-8">
                    <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-2 font-[family-name:var(--font-ui)]">
                      {String(catIndex + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)] font-[family-name:var(--font-heading)]">
                      {cat.label}
                    </h2>
                  </div>

                  {/* Service cards */}
                  <div className="grid grid-cols-1 gap-6 reveal-stagger">
                    {items.map((sluzba) => {
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
                              <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-tight mb-2">
                                {sluzba.heroTitle || sluzba.name}
                              </h3>
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
                </div>
              );
            })}

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
