import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { Navbar, Footer } from "@/components/sections";
import { LegalLayout } from "@/components/sections/LegalLayout";

export const metadata: Metadata = {
  title: `Pravidla používání cookies | ${siteConfig.name}`,
  description: "Informace o používání souborů cookies na našich stránkách.",
  openGraph: {
    title: `Pravidla používání cookies | ${siteConfig.name}`,
    description: "Informace o používání souborů cookies na našich stránkách.",
  },
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <LegalLayout title="Zásady používání souborů cookies">
          <h3>Co jsou soubory cookies</h3>
          <p>
            Cookies jsou malé textové soubory, které jsou ukládány do zařízení
            uživatele při návštěvě webových stránek. Slouží k zajištění správné
            funkčnosti webu a ke zlepšení uživatelského prostředí.
          </p>

          <h3>K čemu cookies používáme</h3>
          <p>
            Cookies pomáhají k jednoduchému prohlížení webových stránek. Cookies
            používáme zejména k těmto účelům:
          </p>
          <ul>
            <li>zajištění správné funkčnosti našich webových stránek,</li>
            <li>analýza návštěvnosti a chování uživatelů,</li>
            <li>zlepšování obsahu a použitelnosti webu,</li>
            <li>
              zajištění funkčnosti poptávkového formuláře.
            </li>
          </ul>

          <h3>Druhy cookies</h3>

          <h5>Technické cookies</h5>
          <p>
            Technické cookies jsou nezbytné pro správné fungování webových
            stránek. Bez těchto cookies by nebylo možné zajistit odeslání
            formuláře a základní funkce webu. Jejich použití nelze odmítnout.
          </p>

          <h5>Analytické cookies</h5>
          <p>
            Analytické cookies slouží k vyhodnocování fungování webových
            stránek, zejména:
          </p>
          <ul>
            <li>měření návštěvnosti,</li>
            <li>zlepšování použitelnosti,</li>
            <li>optimalizace výkonu.</li>
          </ul>
          <p>
            Analytická data mohou být v nezbytném rozsahu zpracovávána na
            základě oprávněného zájmu provozovatele. Ostatní analytické cookies
            jsou používány pouze na základě souhlasu uživatele.
          </p>

          <h5>Marketingové cookies</h5>
          <p>
            Tento web aktuálně nevyužívá marketingové cookies. V případě jejich
            budoucího využití budou ukládány výhradně na základě svobodného
            souhlasu uživatele.
          </p>

          <h3>Správa cookies</h3>
          <p>
            Uživatel může nastavení cookies kdykoliv změnit nebo odvolat
            prostřednictvím nástroje pro správu cookies nebo nastavení svého
            internetového prohlížeče.
          </p>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
