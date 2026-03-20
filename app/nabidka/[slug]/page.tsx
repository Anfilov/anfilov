import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/site.config";
import { getOfferBySlug, getAllOfferSlugs } from "@/lib/offer-demo-data";
import { fetchGoogleReviews } from "@/lib/google-reviews";
import type { OfferData } from "@/lib/offer-types";
import { Navbar, Footer } from "@/components/sections";
import {
  OfferHero,
  OfferPainPoints,
  OfferDeliverables,
  OfferProcess,
  OfferPortfolio,
  OfferPricing,
  OfferFaq,
  OfferAuthor,
  OfferTools,
  OfferArticles,
  OfferContact,
  OfferRelated,
  OfferReviews,
} from "@/components/sections/offer";

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return getAllOfferSlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Metadata (SEO + OG + Twitter)
// ---------------------------------------------------------------------------

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);
  if (!offer) return {};

  const url = `${siteConfig.url}/nabidka/${offer.slug}`;
  const ogImage = `${siteConfig.url}/og/${offer.slug}.jpg`;
  const ogFallback = `${siteConfig.url}/og/default-nabidka.jpg`;

  return {
    title: offer.metaTitle,
    description: offer.metaDescription,
    alternates: {
      canonical: url,
      languages: { cs: url },
    },
    openGraph: {
      title: offer.metaTitle,
      description: offer.metaDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: offer.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: offer.metaTitle,
      description: offer.metaDescription,
      images: [ogImage, ogFallback],
    },
  };
}

// ---------------------------------------------------------------------------
// JSON-LD Structured Data (full schema stack)
// ---------------------------------------------------------------------------

function OfferJsonLd({ offer, googleRating, googleReviewCount }: { offer: OfferData; googleRating?: number; googleReviewCount?: number }) {
  const url = `${siteConfig.url}/nabidka/${offer.slug}`;

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
      name: offer.name,
      description: offer.atomicAnswer,
      url,
      provider: organization,
      areaServed: {
        "@type": "Country",
        name: "CZ",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${offer.name} — služby`,
        itemListElement: offer.deliverables.map((d, i) => ({
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
      name: offer.name,
      url,
      priceCurrency: "CZK",
      price: offer.priceFrom,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "CZK",
        price: offer.priceFrom,
        unitText: "od",
      },
      seller: organization,
    },

    // 3. FAQPage
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: offer.faq.map((item) => ({
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
      name: `Jak probíhá ${offer.name.toLowerCase()}`,
      step: offer.steps.map((s) => ({
        "@type": "HowToStep",
        name: s.title,
        text: s.desc,
        position: s.num,
      })),
      totalTime: `P${offer.deliveryDays}D`,
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
      name: offer.name,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: googleRating ?? offer.rating,
        bestRating: 5,
        ratingCount: googleReviewCount ?? offer.projectCount,
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
          item: `${siteConfig.url}/nabidka`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: offer.name,
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

export default async function OfferPage({ params }: PageProps) {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);
  if (!offer) notFound();

  // Fetch Google Reviews (ISR cached 1h, falls back to demo data)
  const googleData = await fetchGoogleReviews();

  return (
    <>
      <OfferJsonLd offer={offer} googleRating={googleData.rating} googleReviewCount={googleData.reviewCount} />
      <Navbar />

      <main>
        {/* Blok 0+1 — Hero (includes Atomic Answer) */}
        <OfferHero offer={offer} googleRating={googleData.rating} googleReviewCount={googleData.reviewCount} googleReviewsUrl={`https://search.google.com/local/reviews?placeid=${process.env.GOOGLE_PLACE_ID ?? ""}`} />

        {/* Blok 2 — Pain Points */}
        <OfferPainPoints offer={offer} />

        {/* Blok 3 — Deliverables */}
        <OfferDeliverables offer={offer} />

        {/* Blok 4 — Process */}
        <OfferProcess offer={offer} />

        {/* Blok 5 — Portfolio */}
        <OfferPortfolio offer={offer} />

        {/* Google Reviews Marquee */}
        <OfferReviews reviews={googleData.reviews} rating={googleData.rating} reviewCount={googleData.reviewCount} googleReviewsUrl={`https://search.google.com/local/reviews?placeid=${process.env.GOOGLE_PLACE_ID ?? ""}`} />

        {/* Blok 6+7 — Pricing & Comparison */}
        <OfferPricing offer={offer} />

        {/* Blok 9 — Author / E-E-A-T */}
        <OfferAuthor />

        {/* Blok — Nástroje */}
        <OfferTools />

        {/* Blok 8 — FAQ */}
        <OfferFaq faq={offer.faq} serviceName={offer.name} />

        {/* Blok 11 — Articles */}
        <OfferArticles offer={offer} />

        {/* Blok 10+13 — Související služby a pojmy */}
        <OfferRelated offer={offer} />

        {/* Blok 12 — Contact */}
        <OfferContact slug={offer.slug} serviceName={offer.name} />
      </main>

      <Footer />
    </>
  );
}
