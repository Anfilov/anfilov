import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { Navbar, Footer } from "@/components/sections";
import { LegalLayout } from "@/components/sections/LegalLayout";

export const metadata: Metadata = {
  title: `Zásady ochrany osobních údajů | ${siteConfig.name}`,
  description:
    "Informace o zpracování a ochraně osobních údajů v souladu s GDPR.",
  openGraph: {
    title: `Zásady ochrany osobních údajů | ${siteConfig.name}`,
    description:
      "Informace o zpracování a ochraně osobních údajů v souladu s GDPR.",
  },
};

export default function GdprPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <LegalLayout title="Zásady ochrany osobních údajů">
          <h3>Správce osobních údajů</h3>
          <p>
            Správcem osobních údajů je Simon Anfilov, Krhanice 275, 257 42
            Krhanice, e-mail:{" "}
            <a href="mailto:simon@anfilov.cz">simon@anfilov.cz</a> (dále jen
            „Správce").
          </p>
          <p>
            Správce osobních údajů tímto informuje subjekty údajů o způsobu a
            rozsahu zpracování osobních údajů v souladu s nařízením Evropského
            parlamentu a Rady (EU) 2016/679 (GDPR).
          </p>
          <p>
            Osobní údaje jsou zpracovávány na základě plnění smlouvy,
            oprávněného zájmu Správce, plnění právních povinností a v některých
            případech na základě uděleného souhlasu.
          </p>

          <h3>Rozsah zpracovávaných osobních údajů</h3>
          <p>Správce zpracovává zejména tyto osobní údaje:</p>
          <ul>
            <li>jméno a příjmení,</li>
            <li>e-mailovou adresu,</li>
            <li>telefonní číslo,</li>
            <li>název společnosti nebo projektu,</li>
            <li>
              popis požadavků na grafické služby (rozsah, zadání, reference),
            </li>
            <li>
              případně další údaje, které subjekt údajů dobrovolně uvede v rámci
              poptávkového formuláře.
            </li>
          </ul>

          <h3>Právní důvody a účely zpracování</h3>
          <p>Osobní údaje jsou zpracovávány na základě:</p>
          <ul>
            <li>
              plnění smlouvy nebo provedení opatření před uzavřením smlouvy na
              žádost subjektu údajů,
            </li>
            <li>oprávněného zájmu Správce,</li>
            <li>plnění právních povinností,</li>
            <li>souhlasu subjektu údajů, je-li vyžadován.</li>
          </ul>

          <p>Účelem zpracování je zejména:</p>
          <ul>
            <li>zpracování poptávky po grafických a designových službách,</li>
            <li>komunikace se zájemcem o služby,</li>
            <li>vypracování nezávazné cenové nabídky,</li>
            <li>poskytování grafických a webových služeb,</li>
            <li>vedení interní evidence poptávek a projektů,</li>
            <li>
              zajištění provozu, bezpečnosti a zlepšování webových stránek,
            </li>
            <li>
              marketingová komunikace, pouze pokud byl udělen souhlas.
            </li>
          </ul>

          <h3>Zapojení třetích stran</h3>
          <p>
            Osobní údaje mohou být zpracovávány prostřednictvím smluvních
            zpracovatelů, zejména poskytovatelů:
          </p>
          <ul>
            <li>technické a aplikační infrastruktury webových stránek,</li>
            <li>hostingových a serverových služeb,</li>
            <li>zabezpečení a provozu informačních systémů,</li>
            <li>online formulářových a databázových nástrojů.</li>
          </ul>
          <p>
            Tito zpracovatelé zpracovávají osobní údaje pouze v rozsahu
            nezbytném pro zajištění poskytovaných služeb a v souladu s platnými
            právními předpisy.
          </p>

          <h3>Doba uchování osobních údajů</h3>
          <p>Osobní údaje jsou uchovávány:</p>
          <ul>
            <li>
              po dobu nezbytnou k vyřízení poptávky a následné komunikace,
            </li>
            <li>po dobu nezbytnou k ochraně práv Správce,</li>
            <li>
              u osobních údajů zpracovávaných na základě souhlasu do jeho
              odvolání, nejdéle po dobu 3 let.
            </li>
          </ul>

          <h3>Práva subjektu údajů</h3>
          <p>Subjekt údajů má právo:</p>
          <ul>
            <li>na přístup k osobním údajům,</li>
            <li>na opravu nebo doplnění,</li>
            <li>na výmaz,</li>
            <li>na omezení zpracování,</li>
            <li>na přenositelnost údajů,</li>
            <li>
              podat stížnost u dozorového úřadu — Úřadu pro ochranu osobních
              údajů.
            </li>
          </ul>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
