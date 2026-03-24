import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { Navbar, HeroCentered, Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroCentered />
        {/* Add more sections here — browse /showcase for the full catalogue */}
      </main>
      <Footer />
    </>
  );
}
