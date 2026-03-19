import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { Navbar, Footer } from "@/components/sections";
import { ContactHero } from "@/components/sections/ContactHero";

export const metadata: Metadata = {
  title: `Kontakt | ${siteConfig.name}`,
  description:
    "Napište mi, zavolejte nebo vyplňte poptávkový formulář. Působím v Praze, Středočeském kraji a online kdekoliv.",
  openGraph: {
    title: `Kontakt | ${siteConfig.name}`,
    description:
      "Napište mi, zavolejte nebo vyplňte poptávkový formulář. Působím v Praze, Středočeském kraji a online kdekoliv.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
      </main>
      <Footer />
    </>
  );
}
