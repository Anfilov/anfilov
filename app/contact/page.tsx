import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { Navbar, ContactMap, ContactMapCards, Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description:
    "Get in touch with us. Visit our office, send us an email, or give us a call.",
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description:
      "Get in touch with us. Visit our office, send us an email, or give us a call.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Variant 1: Split layout — info left, map right */}
        <ContactMap />

        {/* Divider */}
        <div className="border-t border-[var(--color-border)]" aria-hidden="true" />

        {/* Variant 2: Cards row above full-width map */}
        <ContactMapCards />
      </main>
      <Footer />
    </>
  );
}
