import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/site.config";
import { getOfferBySlug, getAllOfferSlugs } from "@/lib/offer-demo-data";
import { fetchGoogleReviews } from "@/lib/google-reviews";
import { getToolsForPage, getTopProjects } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import type { PortfolioProjectView } from "@/components/sections/offer/OfferPortfolio";
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

  const url = `${siteConfig.url}/sluzba-template/${offer.slug}`;
  const ogImage = `${siteConfig.url}/og/${offer.slug}.jpg`;
  const ogFallback = `${siteConfig.url}/og/default-sluzba.jpg`;

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
  const url = `${siteConfig.url}/sluzba-template/${offer.slug}`;

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
          item: `${siteConfig.url}/sluzba-template`,
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
      <OfferJsonLd offer={offer} googleRating={googleData.rating} googleReviewCount={googleData.reviewCount} />
      <Navbar />

      <main>
        {/* Blok 0+1 — Hero (includes Atomic Answer) */}
        <OfferHero offer={offer} googleRating={googleData.rating} googleReviewCount={googleData.reviewCount} googleReviewsUrl={`https://search.google.com/local/reviews?placeid=${process.env.GOOGLE_PLACE_ID ?? ""}`} />

        <div className="reveal">
          <OfferPainPoints offer={offer} />
        </div>

        <div className="reveal">
          <OfferDeliverables offer={offer} />
        </div>

        <div className="reveal">
          <OfferProcess offer={offer} />
        </div>

        <div className="reveal">
          <OfferPortfolio projects={projects} />
        </div>

        <div className="reveal">
          <OfferReviews reviews={googleData.reviews} rating={googleData.rating} reviewCount={googleData.reviewCount} googleReviewsUrl={`https://search.google.com/local/reviews?placeid=${process.env.GOOGLE_PLACE_ID ?? ""}`} />
        </div>

        <div className="reveal">
          <OfferPricing offer={offer} />
        </div>

        <div className="reveal">
          <OfferAuthor />
        </div>

        <div className="reveal">
          <OfferTools tools={tools} />
        </div>

        <div className="reveal">
          <OfferFaq faq={offer.faq} serviceName={offer.name} />
        </div>

        <div className="reveal">
          <OfferArticles offer={offer} />
        </div>

        <div className="reveal">
          <OfferRelated offer={offer} />
        </div>

        <div className="reveal">
          <OfferContact slug={offer.slug} serviceName={offer.name} />
        </div>
      </main>

      <Footer />
    </>
  );
}
