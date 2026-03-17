import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { Navbar, Footer, DSControlPanel } from "@/components/sections";

export const metadata: Metadata = {
  title: `Control Panel | ${siteConfig.name}`,
  description:
    "Design concept controls and prompt reference — change one attribute to transform the entire site.",
  robots: { index: false, follow: false },
};

export default function ControlPanelPage() {
  return (
    <>
      <Navbar />
      <main>
        <DSControlPanel />
      </main>
      <Footer />
    </>
  );
}
