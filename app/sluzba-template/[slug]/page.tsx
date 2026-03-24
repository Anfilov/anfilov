import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/site.config";
import { getSluzbaBySlug, getAllSluzbaSlugs } from "@/lib/sluzba-demo-data";
import { fetchGoogleReviews } from "@/lib/google-reviews";
import { getToolsForPage, getTopProjects } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import type { PortfolioProjectView } from "@/components/sections/sluzba/SluzbaPortfolio";
import type { SluzbaData } from "@/lib/sluzba-types";
import { Navbar, Footer } from "@/components/sections";
import {
  SluzbaHero,
  SluzbaProblem,
  SluzbaReseni,
  SluzbaProces,
  SluzbaVideo,
  SluzbaPortfolio,
  SluzbaRecenze,
  SluzbaCenik,
  SluzbaAutor,
  SluzbaNastroje,
  SluzbaFaq,
  SluzbaClanky,
  SluzbaSluzbyPojmy,
  SluzbaPoptavka,
} from "@/components/sections/sluzba";

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export const revalidate = 60;

export function generateStaticParams() {
  return getAllSluzbaSlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Metadata (SEO + OG + Twitter)
// ---------------------------------------------------------------------------

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sluzba = getSluzbaBySlug(slug);
  if (!sluzba) return {};

  const url = `${siteConfig.url}/sluzba-template/${sluzba.slug}`;
  const ogImage = `${siteConfig.url}/og/${sluzba.slug}.jpg`;
  const ogFallback = `${siteConfig.url}/og/default-sluzba.jpg`;

  return {
    title: sluzba.metaTitle,
    description: sluzba.metaDescription,
    alternates: {
      canonical: url,
      languages: { cs: url },
    },
    openGraph: {
      title: sluzba.metaTitle,
      description: sluzba.metaDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: sluzba.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: sluzba.metaTitle,
      description: sluzba.metaDescription,
      images: [ogImage, ogFallback],
    },
  };
}

// ---------------------------------------------------------------------------
// JSON-LD Structured Data (full schema stack)
// ---------------------------------------------------------------------------

function SluzbaJsonLd({ sluzba, googleRating, googleReviewCount }: { sluzba: SluzbaData; googleRating?: number; googleReviewCount?: number }) {
  const url = `${siteConfig.url}/sluzba-template/${sluzba.slug}`;

  const organization = {
    "@type": "Organization",
    name: "ANFILOV Studio",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
  };

  const person = {
    "@type": "Person",
    name: "Simon Anfilov",
    jobTitle: "Brand & Web Designer",
    url: `${siteConfig.url}/o-mne`,
    sameAs: ["https://linkedin.com/in/simonanfilov"],
    worksFor: organization,
  };

  const schemas: Record<string, unknown>[] = [
    // 1. Service
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: sluzba.name,
      description: sluzba.atomicAnswer,
      url,
      provider: organization,
      areaServed: {
        "@type": "Country",
        name: "CZ",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${sluzba.name} — služby`,
        itemListElement: sluzba.deliverables.map((d, i) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: d.title,
            description: d.benefit,
          },
          position: i + 1,
        })),
      },
    },

    // 2. Offer (pricing)
    {
      "@context": "https://schema.org",
      "@type": "Offer",
      name: sluzba.name,
      url,
      priceCurrency: "CZK",
      price: sluzba.priceFrom,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "CZK",
        price: sluzba.priceFrom,
        unitText: "od",
      },
      seller: organization,
    },

    // 3. FAQPage
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: sluzba.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },

    // 4. HowTo (process)
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `Jak probíhá ${sluzba.name.toLowerCase()}`,
      step: sluzba.steps.map((s) => ({
        "@type": "HowToStep",
        name: s.title,
        text: s.desc,
        position: s.num,
      })),
      totalTime: `P${sluzba.deliveryDays}D`,
    },

    // 5. Person (author / E-E-A-T)
    {
      "@context": "https://schema.org",
      ...person,
    },

    // 6. AggregateRating
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: sluzba.name,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: googleRating ?? sluzba.rating,
        bestRating: 5,
        ratingCount: googleReviewCount ?? sluzba.projectCount,
      },
    },

    // 7. BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Domů",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Služby",
          item: `${siteConfig.url}/sluzba-template`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: sluzba.name,
          item: url,
        },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
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
// Page component
// ---------------------------------------------------------------------------

export default async function SluzbaPage({ params }: PageProps) {
  const { slug } = await params;
  const sluzba = getSluzbaBySlug(slug);
  if (!sluzba) notFound();

  // Fetch Google Reviews (ISR cached 1h, falls back to demo data)
  const [googleData, tools, rawProjects] = await Promise.all([
    fetchGoogleReviews(),
    getToolsForPage(slug),
    getTopProjects(6),
  ]);

  // Pre-compute image URLs on server so client component doesn't need urlForImage
  const projects: PortfolioProjectView[] = (rawProjects ?? []).map((p: Record<string, unknown>) => {
    const img = p.image as { image: Record<string, unknown>; alt?: string };
    const gallery = (p.gallery ?? []) as { image: Record<string, unknown>; alt?: string }[];
    const lightboxImages: { src: string; alt: string }[] = [
      {
        src: urlForImage(img.image).width(1400).height(1400).fit("max").url(),
        alt: img.alt || (p.client as string),
      },
      ...gallery.map((g) => ({
        src: urlForImage(g.image).width(1400).fit("max").url(),
        alt: g.alt || (p.client as string),
      })),
    ];
    return {
      _id: p._id as string,
      client: p.client as string,
      description: p.description as string | undefined,
      result: p.result as string | undefined,
      thumbUrl: urlForImage(img.image).width(600).height(600).fit("crop").url(),
      thumbAlt: img.alt || `Ukázka loga pro ${p.client}`,
      lightboxImages,
    };
  });

  return (
    <>
      <SluzbaJsonLd sluzba={sluzba} googleRating={googleData.rating} googleReviewCount={googleData.reviewCount} />
      <Navbar />

      <main>
        {/* Hero */}
        <SluzbaHero offer={sluzba} googleRating={googleData.rating} googleReviewCount={googleData.reviewCount} googleReviewsUrl={`https://search.google.com/local/reviews?placeid=${process.env.GOOGLE_PLACE_ID ?? ""}`} />

        {/* Problém */}
        <div className="reveal">
          <SluzbaProblem offer={sluzba} />
        </div>

        {/* Řešení */}
        <div className="reveal">
          <SluzbaReseni offer={sluzba} />
        </div>

        {/* Proces */}
        <div className="reveal">
          <SluzbaProces offer={sluzba} />
        </div>

        {/* Video */}
        <div className="reveal">
          <SluzbaVideo />
        </div>

        {/* Portfolio */}
        <div className="reveal">
          <SluzbaPortfolio projects={projects} />
        </div>

        {/* Recenze */}
        <div className="reveal">
          <SluzbaRecenze reviews={googleData.reviews} rating={googleData.rating} reviewCount={googleData.reviewCount} googleReviewsUrl={`https://search.google.com/local/reviews?placeid=${process.env.GOOGLE_PLACE_ID ?? ""}`} />
        </div>

        {/* Ceník */}
        <div className="reveal">
          <SluzbaCenik offer={sluzba} />
        </div>

        {/* Autor */}
        <div className="reveal">
          <SluzbaAutor />
        </div>

        {/* Nástroje */}
        <div className="reveal">
          <SluzbaNastroje tools={tools} />
        </div>

        {/* FAQ */}
        <div className="reveal">
          <SluzbaFaq faq={sluzba.faq} serviceName={sluzba.name} />
        </div>

        {/* Články */}
        <div className="reveal">
          <SluzbaClanky offer={sluzba} />
        </div>

        {/* Služby a pojmy */}
        <div className="reveal">
          <SluzbaSluzbyPojmy offer={sluzba} />
        </div>

        {/* Poptávka */}
        <div className="reveal">
          <SluzbaPoptavka slug={sluzba.slug} serviceName={sluzba.name} />
        </div>
      </main>

      <Footer />
    </>
  );
}
