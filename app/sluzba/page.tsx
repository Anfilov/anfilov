import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { getSluzbyPage } from "@/sanity/lib/queries";
import { Navbar, Footer } from "@/components/sections";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBlock } from "@/components/sections/CtaBlock";

// ---------------------------------------------------------------------------
// Revalidation
// ---------------------------------------------------------------------------

export const revalidate = 60;

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
// Types
// ---------------------------------------------------------------------------

interface SluzbaListItem {
  _id: string;
  name: string;
  slug: string;
  heroTitle?: string;
  heroPriceLabel?: string;
}

interface Category {
  label: string;
  services: SluzbaListItem[];
}

// ---------------------------------------------------------------------------
// JSON-LD ItemList for SEO
// ---------------------------------------------------------------------------

function SluzbyJsonLd({ categories }: { categories: Category[] }) {
  const allServices = categories.flatMap((c) => c.services);
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Služby — ANFILOV Studio",
    description:
      "Kompletní nabídka designových služeb od Simona Anfilova: branding, webdesign, tiskoviny, obalový design, sociální média a online prodej.",
    numberOfItems: allServices.length,
    itemListElement: allServices.map((s, i) => ({
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
  const data = await getSluzbyPage();
  const categories: Category[] = (data?.categories ?? []).filter(
    (c: Category) => c.services && c.services.length > 0,
  );

  // Split into rows of 4 for the grid
  const ROW_SIZE = 4;
  const rows: Category[][] = [];
  for (let i = 0; i < categories.length; i += ROW_SIZE) {
    rows.push(categories.slice(i, i + ROW_SIZE));
  }

  return (
    <>
      <Navbar />
      <SluzbyJsonLd categories={categories} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[var(--color-surface)]">

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
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.06] tracking-[-0.03em]">
                Design &amp; Marketing
              </h1>
            </header>
          </Container>
        </section>

        {/* Service cards grouped by category — 4 columns per row */}
        <section className="bg-[var(--color-surface)] pb-[var(--section-padding-y)]">
          <Container>
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14"
                style={rowIndex > 0 ? { marginTop: 48 } : undefined}
              >
                {row.map((cat, catIndex) => (
                  <div key={catIndex}>
                    <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-6 pb-3 border-b border-[var(--color-border)] font-[family-name:var(--font-ui)]">
                      {cat.label}
                    </p>
                    <div className="space-y-5">
                      {cat.services.map((sluzba) => (
                        <Link
                          key={sluzba._id}
                          href={`/sluzba/${sluzba.slug}`}
                          className="group block no-underline"
                        >
                          <h3 className="text-[15px] font-semibold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-tight leading-snug mb-1.5 group-hover:text-[var(--color-forest-mid)] transition-colors duration-[var(--duration-fast)]">
                            {sluzba.name}
                          </h3>
                          {sluzba.heroPriceLabel && (
                            <p className="text-[12px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-ui)]">
                              {sluzba.heroPriceLabel}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </Container>
        </section>

        <CtaBlock
          overline="Nevíte, kde začít?"
          title="Pojďme to řešit společně"
        />
      </main>

      <Footer />
    </>
  );
}
