import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutStory() {
  return (
    <section className="bg-[var(--color-surface-sunken)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Můj příběh"
          title="Jak to celé začalo"
        />

        <div className="max-w-[680px] space-y-6 text-[15px] sm:text-[16px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-[1.75]">
          <p>
            Moje holka měla kamarádku a&nbsp;ta kamarádka měla staršího kluka. Jmenoval se Tim a&nbsp;byl to Američan. Všichni čtyři jsme společně pracovali v&nbsp;redakci jednoho lifestylového časopisu. Tim byl počítačový grafik a&nbsp;na obrovským počítači Apple každý měsíc sám vytvářel celý design a&nbsp;připravoval ho do tisku. Na začátku 90.&nbsp;let totiž byla u&nbsp;nás počítačová grafika v&nbsp;plenkách. Ovládat profesionální aplikace uměli převážně jen cizinci.
          </p>
          <p>
            No a&nbsp;co se nestalo. Tim mi jednoho dne po práci řekl:
          </p>

          {/* Tim's quote — highlighted */}
          <blockquote className="border-l-[3px] border-[var(--color-gold)] pl-5 py-1 text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] text-[17px] sm:text-[18px] italic leading-[1.6]">
            &bdquo;Zítra ráno odlítáme do Ameriky. Už nepřijdu, nechceš to dělat za&nbsp;mně? Pojď, já&nbsp;Ti ukážu, jak se to dělá.&ldquo;
          </blockquote>

          <p>
            To víte, že jsem chtěl. Grafika, design a&nbsp;počítače byla vždycky moje vášeň. Ale tohle jsem neuměl. Sedli jsme si ten večer v&nbsp;prázdné kanceláři a&nbsp;Tim mi v&nbsp;nejrychlejším kurzu na světě nalil do hlavy základní principy počítačové grafiky a&nbsp;grafické sazby.
          </p>
          <p>
            Když jsem druhý den přišel do práce, přiřítil se ke mně vzteky rudý šéfredaktor: <em>&bdquo;Tim odletěl do Ameriky, prý to zvládneš za&nbsp;něj. Zvládneš to? Za&nbsp;14&nbsp;dní jdeme do tisku. ZVLÁDNEŠ TO?!!&ldquo;</em>
          </p>
          <p>
            To jsou ty situace, kdy stojíte a&nbsp;před očima se vám promítne celý život. Já blbec tam stál a&nbsp;odpověděl: <em>&bdquo;Jó, zvládnu. Tim mi všechno ukázal.&ldquo;</em>
          </p>
          <p>
            Příští dva týdny jsem se každé ráno psychicky hroutil. Jednou jsem se dokonce rozbrečel. Opravdu. Rozbrečel. Byl jsem denně do noci u&nbsp;toho obrovského monitoru a&nbsp;hledal jsem způsoby, jak udělat nebo vyřešit to či ono. Neměl jsem žádný manuál, žádné video návody, žádný Google, nic. Jenom svoji beznaději, anglický software, postup &bdquo;pokus&nbsp;– omyl&ldquo; a&nbsp;strašnou chuť to dokázat.
          </p>
          <p>
            A&nbsp;dokázal jsem to. Dostal jsem svůj první šek na 10.000&nbsp;Kč. Tehdy skvělý honorář. Ale časopis nevyšel s&nbsp;mým designem. Místo, abych se držel toho, co fungovalo, a&nbsp;co bylo nastaveno&nbsp;— a&nbsp;dobře nastaveno&nbsp;— popustil jsem uzdu svojí fantazii a&nbsp;upravoval design tak, jak se mi líbilo. Myslel jsem si, že už jsem &bdquo;pan grafik&ldquo;…
          </p>
          <p>
            Dneska už nejsem ten dvacetiletý floutek, co si myslí, že všechno ví a&nbsp;všechno zná. Trvalo mi dlouho, než jsem pochopil, že je naopak dobré něco nevědět, protože pak se člověk nejvíc naučí. A&nbsp;má ten nepřekonatelný zážitek z&nbsp;poznávání a&nbsp;objevování něčeho nového. Těch 14&nbsp;dní tehdy bylo těžkých, ale otevřely mi dveře do nového světa.
          </p>
          <p className="text-[var(--color-text-primary)] font-semibold">
            Od mé první profesionální zkušenosti s&nbsp;grafikou uběhlo už 30&nbsp;let a&nbsp;já jsem za&nbsp;tu dobu vytvořil stovky log, reklamních kampaní, konceptů a&nbsp;vizuálních identit. Jestli máte pro svoji práci podobnou vášeň jako já nebo také&nbsp;— jako já&nbsp;— věříte, že i&nbsp;obchodní úspěch pramení z&nbsp;kreativity a&nbsp;objevování nového, měli bychom dát hlavy dohromady. A&nbsp;něco skvělého společně vytvořit.
          </p>
        </div>
      </Container>
    </section>
  );
}
