import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { Navbar, Footer } from "@/components/sections";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutTimeline } from "@/components/sections/about/AboutTimeline";
import { AboutClients } from "@/components/sections/about/AboutClients";

export const metadata: Metadata = {
  title: `O mně — Simon Anfilov | ${siteConfig.name}`,
  description:
    "Brand designer s více než 30letou praxí v reklamě a brandingu. Od DTP grafika po kreativního ředitele v agenturách Mark BBDO, DMB&B a WMC Grey.",
  alternates: { canonical: `${siteConfig.url}/o-mne` },
  openGraph: {
    title: `O mně — Simon Anfilov | ${siteConfig.name}`,
    description:
      "Brand designer s více než 30letou praxí v reklamě a brandingu.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <ScrollReveal />
        <AboutHero />
        <AboutTimeline />
        <AboutStory />
        <AboutClients />
        <CtaBlock
          overline="Pojďme spolupracovat"
          title="Máte projekt, který potřebuje značku?"
          subtitle="Napište mi — rád se podívám, jak vám mohu pomoci."
        />
      </main>
      <Footer />
    </>
  );
}
