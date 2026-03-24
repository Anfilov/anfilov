import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/portable-text-components";
import { siteConfig } from "@/site.config";
import {
  getGlossaryTermBySlug,
  getAllGlossaryDetailSlugs,
} from "@/sanity/lib/queries";
import { Navbar, Footer } from "@/components/sections";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

// ---------------------------------------------------------------------------
// Revalidation
// ---------------------------------------------------------------------------

export const revalidate = 60;

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  const slugs = await getAllGlossaryDetailSlugs();
  return slugs.map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface GlossaryTerm {
  _id: string;
  term: string;
  slug: string;
  aliases?: string[];
  category: string;
  shortDefinition: string;
  hasDetailPage?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extendedDescription?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  practicalUse?: any;
  image?: { image: Record<string, unknown>; alt?: string };
  relatedTerms?: {
    _id: string;
    term: string;
    slug: string;
    hasDetailPage?: boolean;
    shortDefinition: string;
    category: string;
  }[];
  relatedServices?: {
    _id: string;
    name: string;
    slug: string;
    heroTitle?: string;
    heroPriceLabel?: string;
  }[];
  metaTitle?: string;
  metaDescription?: string;
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = (await getGlossaryTermBySlug(slug)) as GlossaryTerm | null;
  if (!term) return {};

  const title = term.metaTitle || `Co je ${term.term}? Definice — ANFILOV Studio`;
  const description =
    term.metaDescription ||
    `${term.shortDefinition} Srozumitelné vysvětlení s příklady z praxe.`;
  const url = `${siteConfig.url}/slovnik/${term.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
    },
  };
}

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------

function TermJsonLd({ term }: { term: GlossaryTerm }) {
  const url = `${siteConfig.url}/slovnik/${term.slug}`;

  const definedTerm = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.shortDefinition,
    ...(term.aliases?.length ? { alternateName: term.aliases } : {}),
    url,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Slovník pojmů pro design, grafiku a marketing",
      url: `${siteConfig.url}/slovnik`,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domů", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Slovník", item: `${siteConfig.url}/slovnik` },
      { "@type": "ListItem", position: 3, name: term.term, item: url },
    ],
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Simon Anfilov",
    jobTitle: "Brand & Web Designer",
    url: `${siteConfig.url}/o-mne`,
    worksFor: {
      "@type": "Organization",
      name: "ANFILOV Studio",
      url: siteConfig.url,
    },
  };

  return (
    <>
      {[definedTerm, breadcrumb, person].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

// ---------------------------------------------------------------------------
// Helper: slugify for anchor links
// ---------------------------------------------------------------------------

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function GlossaryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const term = (await getGlossaryTermBySlug(slug)) as GlossaryTerm | null;

  if (!term || !term.hasDetailPage) notFound();

  return (
    <>
      <Navbar />
      <TermJsonLd term={term} />

      <main>
        {/* BLOK 1 — Hero */}
        <section className="bg-[var(--color-surface)] pt-20 sm:pt-28 lg:pt-32 pb-[var(--section-padding-y)]">
          <Container>
            <Breadcrumbs
              items={[
                { label: "Domů", href: "/" },
                { label: "Slovník", href: "/slovnik" },
                { label: term.term },
              ]}
              className="mb-10"
            />

            <header className="max-w-[680px]">
              <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-[var(--radius-xs)] font-[family-name:var(--font-ui)] bg-[color-mix(in_srgb,var(--color-gold)_12%,transparent)] text-[var(--color-gold-dark)] mb-4">
                {term.category}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.06] tracking-[-0.03em] mb-4">
                {term.term}
              </h1>

              {term.aliases && term.aliases.length > 0 && (
                <p className="text-[15px] italic text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)] mb-6">
                  také: {term.aliases.join(", ")}
                </p>
              )}

              <p className="text-lg sm:text-xl font-semibold text-[var(--color-text-primary)] leading-relaxed font-[family-name:var(--font-body)]">
                {term.shortDefinition}
              </p>
            </header>
          </Container>
        </section>

        {/* BLOK 2 — Rozšířený popis */}
        {term.extendedDescription && term.extendedDescription.length > 0 && (
          <section className="bg-[var(--color-surface-sunken)] py-[var(--section-padding-y)]">
            <Container>
              <div className="max-w-[720px]">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                  Co je {term.term}
                </h2>
                <div className="prose prose-lg text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-[1.7]">
                  <PortableText value={term.extendedDescription} components={portableTextComponents} />
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* BLOK 3 — Praktické použití */}
        {term.practicalUse && term.practicalUse.length > 0 && (
          <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
            <Container>
              <div className="max-w-[720px]">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                  {term.term} v praxi
                </h2>
                <div className="prose prose-lg text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-[1.7]">
                  <PortableText value={term.practicalUse} components={portableTextComponents} />
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* BLOK 4 — Související pojmy */}
        {term.relatedTerms && term.relatedTerms.length > 0 && (
          <section className="bg-[var(--color-surface-sunken)] py-[var(--section-padding-y)]">
            <Container>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
                Související pojmy
              </h2>
              <div className="flex flex-wrap gap-3">
                {term.relatedTerms.map((rt) => (
                  <Link
                    key={rt._id}
                    href={
                      rt.hasDetailPage
                        ? `/slovnik/${rt.slug}`
                        : `/slovnik#${slugify(rt.term)}`
                    }
                    className="
                      inline-flex items-center gap-1.5 px-4 py-2
                      text-[14px] font-semibold font-[family-name:var(--font-ui)]
                      rounded-[var(--radius-sm)]
                      border border-[var(--color-border)]
                      bg-[var(--color-surface-elevated)]
                      text-[var(--color-text-primary)]
                      hover:border-[var(--color-border-accent)]
                      hover:shadow-[var(--shadow-gold-sm)]
                      transition-[border-color,box-shadow] duration-[var(--duration-fast)]
                      no-underline
                    "
                  >
                    {rt.term}
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* BLOK 5 — CTA na službu */}
        {term.relatedServices && term.relatedServices.length > 0 && (
          <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
            <Container>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
                Potřebujete pomoct?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                {term.relatedServices.map((svc) => (
                  <Link
                    key={svc._id}
                    href={`/sluzba/${svc.slug}`}
                    className="
                      group rounded-[var(--card-radius)] overflow-hidden
                      border border-[var(--card-border)]
                      bg-[var(--color-surface-elevated)]
                      p-6
                      hover:border-[var(--color-border-accent)]
                      hover:shadow-[var(--shadow-gold-sm)]
                      transition-[border-color,box-shadow] duration-[var(--duration-slow)]
                      no-underline
                    "
                  >
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-tight mb-2">
                      {svc.heroTitle || svc.name}
                    </h3>
                    {svc.heroPriceLabel && (
                      <p className="text-sm font-bold text-[var(--color-gold)] font-[family-name:var(--font-heading)] mb-3">
                        {svc.heroPriceLabel}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-forest-mid)] font-[family-name:var(--font-ui)] group-hover:gap-2 transition-all duration-[var(--duration-fast)]">
                      Zjistit více
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
