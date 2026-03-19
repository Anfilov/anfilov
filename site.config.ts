export const siteConfig = {
  slug: "anfilov",
  name: "Anfilov",
  url: "https://anfilov.cz",
  locale: "cs",
  title: "Anfilov",
  description: "",
  ogImage: "/og.jpg",

  // Design dimensions (applied to <html> data-attributes)
  layout: "left" as const,
  radius: "rounded" as const,
  density: "balanced" as const,
  shadows: "subtle" as const,
  motion: "subtle" as const,
  dividers: "subtle" as const,
  contrast: "medium" as const,
  ornament: "minimal" as const,
  texture: "clean" as const,
  borderWeight: "normal" as const,
  ink: "soft" as const,
  cardStyle: "outlined" as const,
  hover: "lift" as const,

  themeStorageKey: "anfilov-theme",

  cookieConsentId: "",

  // Google Reviews — Place ID from Place ID Finder
  google: {
    placeId: process.env.GOOGLE_PLACE_ID ?? "",
  },

  seo: {
    organization: {
      name: "Anfilov",
      logo: "/logo.svg",
      phone: "",
      email: "",
    },
    localBusiness: {
      type: "",
      streetAddress: "",
      city: "",
      postalCode: "",
      country: "",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
