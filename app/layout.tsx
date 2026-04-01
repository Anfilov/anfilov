import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/site.config";
import "./globals.css";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Structured Data
// ---------------------------------------------------------------------------

function JsonLd() {
  const schemas: Record<string, unknown>[] = [
    // WebSite — always present
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
    },
  ];

  // Organization — only if name is provided
  if (siteConfig.seo.organization.name) {
    const org: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.seo.organization.name,
      url: siteConfig.url,
    };
    if (siteConfig.seo.organization.logo) {
      org.logo = `${siteConfig.url}${siteConfig.seo.organization.logo}`;
    }
    if (siteConfig.seo.organization.email) {
      org.email = siteConfig.seo.organization.email;
    }
    if (siteConfig.seo.organization.phone) {
      org.telephone = siteConfig.seo.organization.phone;
    }
    schemas.push(org);
  }

  // LocalBusiness — only if type + streetAddress are provided
  const lb = siteConfig.seo.localBusiness;
  if (lb.type && lb.streetAddress) {
    const business: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": lb.type,
      name: siteConfig.seo.organization.name || siteConfig.name,
      url: siteConfig.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: lb.streetAddress,
        addressLocality: lb.city,
        postalCode: lb.postalCode,
        addressCountry: lb.country,
      },
    };
    if (siteConfig.seo.organization.phone) {
      business.telephone = siteConfig.seo.organization.phone;
    }
    if (siteConfig.seo.organization.email) {
      business.email = siteConfig.seo.organization.email;
    }
    if (siteConfig.seo.organization.logo) {
      business.image = `${siteConfig.url}${siteConfig.seo.organization.logo}`;
    }
    schemas.push(business);
  }

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
// Anti-flash script — applies saved theme before first paint
// ---------------------------------------------------------------------------

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('${siteConfig.themeStorageKey}');
    if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
  } catch(e){}
})();
`;

// ---------------------------------------------------------------------------
// Root Layout
// ---------------------------------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.locale}
      suppressHydrationWarning
      data-layout={siteConfig.layout}
      data-radius={siteConfig.radius}
      data-density={siteConfig.density}
      data-shadows={siteConfig.shadows}
      data-motion={siteConfig.motion}
      data-dividers={siteConfig.dividers}
      data-contrast={siteConfig.contrast}
      data-ornament={siteConfig.ornament}
      data-texture={siteConfig.texture}
      data-border-weight={siteConfig.borderWeight}
      data-ink={siteConfig.ink}
      data-card-style={siteConfig.cardStyle}
      data-hover={siteConfig.hover}
      className={fontVariables}
    >
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd />
        {siteConfig.cookieConsentId && (
          <script
            id="cookieyes"
            src={`https://cdn-cookieyes.com/client_data/${siteConfig.cookieConsentId}/script.js`}
            async
          />
        )}
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-[var(--radius-sm)] focus:bg-[var(--color-forest-mid)] focus:text-[var(--color-cream)] focus:text-sm focus:font-semibold focus:outline-none"
        >
          Přeskočit na obsah
        </a>
        <ThemeProvider>
          <ScrollReveal />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
