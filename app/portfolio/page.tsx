import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { getPortfolioPage } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { Navbar, Footer } from "@/components/sections";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { PortfolioGrid } from "./PortfolioGrid";

// ---------------------------------------------------------------------------
// Revalidation
// ---------------------------------------------------------------------------

export const revalidate = 60;

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Portfolio — ANFILOV Studio | Ukázky práce",
  description:
    "Prohlédněte si 200+ projektů: tvorba loga, brand identita, webdesign, grafický a obalový design. Reálné výsledky pro reálné značky.",
  alternates: {
    canonical: `${siteConfig.url}/portfolio`,
  },
  openGraph: {
    title: "Portfolio — ANFILOV Studio | Ukázky práce",
    description:
      "Prohlédněte si 200+ projektů: tvorba loga, brand identita, webdesign, grafický a obalový design.",
    url: `${siteConfig.url}/portfolio`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface RawProject {
  _id: string;
  title?: string;
  client: string;
  description?: string;
  result?: string;
  externalUrl?: string;
  tags?: string[];
  image?: { image: Record<string, unknown>; alt?: string };
  gallery?: { image: Record<string, unknown>; alt?: string }[];
}

export interface PortfolioItem {
  _id: string;
  title?: string;
  client: string;
  description?: string;
  result?: string;
  externalUrl?: string;
  tags: string[];
  thumbUrl: string;
  thumbAlt: string;
  lightboxImages: { src: string; alt: string }[];
}

export interface PortfolioCategory {
  label: string;
  projects: PortfolioItem[];
}

// ---------------------------------------------------------------------------
// Image URL builder
// ---------------------------------------------------------------------------

function buildPortfolioItem(p: RawProject): PortfolioItem | null {
  if (!p || !p.image?.image) return null;

  const img = p.image;
  const gallery = p.gallery ?? [];

  const lightboxImages: { src: string; alt: string }[] = [
    {
      src: urlForImage(img.image).width(1400).fit("max").url(),
      alt: img.alt || p.client,
    },
    ...gallery.map((g) => ({
      src: urlForImage(g.image).width(1400).fit("max").url(),
      alt: g.alt || p.client,
    })),
  ];

  return {
    _id: p._id,
    title: p.title,
    client: p.client,
    description: p.description,
    result: p.result,
    externalUrl: p.externalUrl,
    tags: p.tags ?? [],
    thumbUrl: urlForImage(img.image).width(600).height(600).fit("crop").url(),
    thumbAlt: img.alt || `Ukázka: ${p.client}`,
    lightboxImages,
  };
}

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------

function PortfolioJsonLd({ categories }: { categories: PortfolioCategory[] }) {
  const allProjects = categories.flatMap((c) => c.projects);
  // Deduplicate by _id
  const seen = new Set<string>();
  const unique = allProjects.filter((p) => {
    if (seen.has(p._id)) return false;
    seen.add(p._id);
    return true;
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio — ANFILOV Studio",
    description:
      "Ukázky designových projektů od Simona Anfilova: loga, brand identity, weby, tiskoviny a obaly.",
    url: `${siteConfig.url}/portfolio`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: unique.length,
      itemListElement: unique.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title || p.client,
        ...(p.externalUrl ? { url: p.externalUrl } : {}),
      })),
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domů", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: `${siteConfig.url}/portfolio`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function PortfolioPage() {
  const data = await getPortfolioPage();

  const categories: PortfolioCategory[] = (data?.categories ?? [])
    .map(
      (cat: { label: string; projects: RawProject[] }) => ({
        label: cat.label,
        projects: (cat.projects ?? [])
          .map(buildPortfolioItem)
          .filter((p): p is PortfolioItem => p !== null),
      }),
    )
    .filter((cat: PortfolioCategory) => cat.projects.length > 0);

  return (
    <>
      <Navbar />
      <PortfolioJsonLd categories={categories} />

      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[var(--color-surface)]">

          <Container className="relative pt-20 sm:pt-28 lg:pt-32 pb-10 sm:pb-14">
            <Breadcrumbs
              items={[
                { label: "Domů", href: "/" },
                { label: "Portfolio" },
              ]}
              className="mb-10"
            />

            <header className="max-w-[680px]">
              <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
                Portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.06] tracking-[-0.03em]">
                Ukázky práce
              </h1>
            </header>
          </Container>
        </section>

        {/* Portfolio grid */}
        <section className="bg-[var(--color-surface)] pb-[var(--section-padding-y)]">
          <Container>
            <PortfolioGrid categories={categories} />
          </Container>
        </section>

        <CtaBlock
          overline="Líbí se vám, co vidíte?"
          title={<>Vytvořím vám<br /> podobný design</>}
        />
      </main>

      <Footer />
    </>
  );
}
