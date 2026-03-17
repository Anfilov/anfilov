import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import {
  Navbar,
  Footer,
  DSLogo,
  DSColors,
  DSTypography,
  DSElements,
  DSSpacing,
} from "@/components/sections";

export const metadata: Metadata = {
  title: `Brandguide | ${siteConfig.name}`,
  description:
    "Design system reference — logo, color palette, typography, UI elements, and spacing scale.",
  robots: { index: false, follow: false },
};

export default function BrandguidePage() {
  return (
    <>
      <Navbar />
      <main>
        <DSLogo />
        <DSColors />
        <DSTypography />
        <DSElements />
        <DSSpacing />
      </main>
      <Footer />
    </>
  );
}
