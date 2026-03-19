import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";
import { getAllOfferSlugs } from "@/lib/offer-demo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const offers = getAllOfferSlugs().map((slug) => ({
    url: `${siteConfig.url}/nabidka/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/gdpr`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/cookies`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...offers,
  ];
}
