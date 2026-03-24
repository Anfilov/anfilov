import type { Metadata } from "next";
import Link from "next/link";
// import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/site.config";
import { getAllGlossaryTerms } from "@/sanity/lib/queries";
import { Navbar, Footer } from "@/components/sections";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { GlossaryHub } from "./GlossaryHub";

// ---------------------------------------------------------------------------
// Revalidation
// ---------------------------------------------------------------------------

export const revalidate = 60;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface GlossaryTermListItem {
  _id: string;
  term: string;
  slug: string;
  aliases?: string[];
  category: string;
  shortDefinition: string;
  hasDetailPage?: boolean;
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Slovník pojmů pro design, grafiku a marketing — ANFILOV Studio",
  description:
    "Vysvětlení 200+ pojmů z grafického designu, brandingu, webdesignu a marketingu. Od logotypu po konverzní trychtýř — vše srozumitelně.",
  alternates: {
    canonical: `${siteConfig.url}/slovnik`,
  },
};

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------

function GlossaryJsonLd({ terms }: { terms: GlossaryTermListItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Slovník pojmů pro design, grafiku a marketing",
    description:
      "Kompletní slovník pojmů z grafického designu, brandingu, webdesignu a marketingu od ANFILOV Studia.",
    url: `${siteConfig.url}/slovnik`,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.shortDefinition,
      ...(t.aliases?.length ? { alternateName: t.aliases } : {}),
      ...(t.hasDetailPage ? { url: `${siteConfig.url}/slovnik/${t.slug}` } : {}),
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domů", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Slovník", item: `${siteConfig.url}/slovnik` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function SlovnikPage() {
  const terms = (await getAllGlossaryTerms()) as GlossaryTermListItem[];

  return (
    <>
      <Navbar />
      <GlossaryJsonLd terms={terms} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[var(--color-surface)]">
          <Container className="relative pt-20 sm:pt-28 lg:pt-32 pb-10 sm:pb-14">
            <Breadcrumbs
              items={[{ label: "Domů", href: "/" }, { label: "Slovník" }]}
              className="mb-10"
            />
            <header className="max-w-[680px]">
              <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
                Slovník
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.06] tracking-[-0.03em] mb-6">
                Slovník pojmů pro design, grafiku a marketing
              </h1>
              <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)] max-w-[520px]">
                {terms.length}+ pojmů z oblasti grafického designu, brandingu, webdesignu
                a&nbsp;marketingu — srozumitelně a&nbsp;s příklady.
              </p>
            </header>
          </Container>
        </section>

        {/* Interactive glossary (client component) */}
        <section className="bg-[var(--color-surface)] pb-[var(--section-padding-y)]">
          <Container>
            <GlossaryHub terms={terms} />

          </Container>
        </section>

        <CtaBlock
          overline="Potřebujete pomoct?"
          title="Řekněte mi, co řešíte"
        />
      </main>

      <Footer />
    </>
  );
}
