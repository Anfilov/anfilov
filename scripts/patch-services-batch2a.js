const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "d8caxrt0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const PATCHES = {
  "tvorba-webu": {
    atomicAnswer:
      "Tvorba webu je kompletní proces návrhu a vývoje webových stránek od počáteční strategie přes wireframy a vizuální design až po naprogramování a spuštění. Služba je určena firmám, podnikatelům a projektům, které potřebují profesionální web na míru, nikoliv šablonové řešení. Klient dostává responzivní web optimalizovaný pro všechna zařízení, SEO-ready strukturu s technickým základem pro vyhledávače, redakční systém pro snadnou správu obsahu, napojení na analytiku a měřicí nástroje a kompletní dokumentaci. Proces zahrnuje úvodní strategii a analýzu cílové skupiny, návrh informační architektury, wireframing, vizuální design, vývoj a testování. Cena tvorby webu začíná od 35 000 Kč, dodací lhůta je přibližně 21 dní podle rozsahu projektu. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu a postavím web, který pracuje pro váš byznys od prvního dne. Rychlý, responzivní a připravený na růst bez kompromisů v designu ani výkonu.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí tvorba webových stránek na míru?",
        answer:
          "Cena tvorby webu na míru začíná od 35 000 Kč. Konečná částka závisí na rozsahu projektu, počtu stránek, požadované funkčnosti a integraci s externími systémy. Jednodušší prezentační web se pohybuje na spodní hranici, e-commerce řešení nebo komplexní webové aplikace stojí výrazně více. V ceně je zahrnut návrh, vývoj, testování, nasazení a zaškolení. Přesnou kalkulaci dostanete po úvodní konzultaci, kde zmapuji vaše potřeby a cíle.",
      },
      {
        _key: "f2",
        question: "Jak dlouho trvá vytvoření nového webu?",
        answer:
          "Standardní dodací lhůta je přibližně 21 dní. Prvních 5 dní probíhá strategie a wireframing, dalších 7-8 dní vizuální design a zbylý čas zabírá vývoj, plnění obsahu a testování. Časový rámec závisí na složitosti projektu a rychlosti vaší zpětné vazby. Projekt řídím v jasných milnících, takže vždy víte, v jaké fázi se nacházíme a co je potřeba z vaší strany.",
      },
      {
        _key: "f3",
        question: "Na jaké technologii web postavíte?",
        answer:
          "Technologii volím podle potřeb projektu. Pro většinu firemních webů používám moderní JAMstack přístup s Next.js a headless CMS, který zajišťuje vysokou rychlost, bezpečnost a snadnou správu obsahu. Pro jednodušší projekty může být vhodný WordPress. Vždy doporučím řešení, které odpovídá vašemu rozpočtu, technickým požadavkům a schopnostem týmu, který bude web spravovat po předání.",
      },
      {
        _key: "f4",
        question: "Bude web optimalizovaný pro mobily a vyhledávače?",
        answer:
          "Ano, responzivní design a technické SEO jsou standardní součástí každého projektu. Web navrhuji mobile-first přístupem, tedy primárně pro mobilní zařízení a pak škáluji na desktop. Technické SEO zahrnuje správnou strukturu nadpisů, meta tagy, rychlost načítání, optimalizaci obrázků a strukturovaná data. Výsledkem je web, který dobře vypadá na jakémkoliv zařízení a má solidní základ pro organické vyhledávání.",
      },
      {
        _key: "f5",
        question: "Můžu si web po předání spravovat sám?",
        answer:
          "Ano, součástí dodávky je redakční systém, přes který snadno upravíte texty, obrázky i strukturu stránek bez znalosti programování. Po spuštění vás zaškolím a připravím dokumentaci pro správu obsahu. Pokud budete potřebovat technické úpravy nebo rozšíření funkčnosti, nabízím průběžnou spolupráci formou servisní dohody. Web stavím tak, aby vás neomezoval v každodenní práci s obsahem.",
      },
    ],
    metaTitle: "Tvorba webu — ANFILOV | Webové stránky na míru",
    metaDescription:
      "Profesionální tvorba webu od 35 000 Kč. Responzivní design, SEO základ, redakční systém. Dodání do 3 týdnů. Konzultace zdarma.",
  },

  "redesign-webu": {
    atomicAnswer:
      "Redesign webu je modernizace existujících webových stránek, která zlepší vizuální dojem, uživatelský zážitek a technický výkon při zachování SEO hodnoty, kterou web vybudoval. Služba je určena firmám, jejichž web zastaral, špatně konvertuje nebo nefunguje na mobilních zařízeních. Klient dostává modernizovaný web s aktualizovaným vizuálním designem, vylepšenou navigací a uživatelskou cestou, zachované URL adresy a přesměrování pro ochranu SEO, optimalizovanou rychlost načítání a responzivní zobrazení na všech zařízeních. Proces začíná auditem stávajícího webu, analýzou návštěvnosti a identifikací problémů. Následuje návrh nového designu, migrace obsahu a důkladné testování. Cena redesignu webu začíná od 30 000 Kč, dodací lhůta je přibližně 18 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Modernizuji váš web tak, aby lépe konvertoval a odpovídal aktuálním standardům. Zachovám SEO hodnotu i fungující prvky a opravím to, co brzdí výsledky.",
    faqItems: [
      {
        _key: "f1",
        question: "Kdy je správný čas na redesign webu?",
        answer:
          "Redesign je na místě, když web vizuálně zastaral, špatně funguje na mobilech, má pomalou rychlost načítání nebo neplní obchodní cíle. Dalšími signály jsou vysoká míra opuštění, nízká konverze nebo negativní zpětná vazba od zákazníků. Průměrná životnost webového designu je 3-4 roky. Pokud váš web neprošel úpravou déle, pravděpodobně ztrácíte zákazníky. Konzultace pomůže vyhodnotit, zda stačí dílčí úpravy nebo je potřeba kompletní redesign.",
      },
      {
        _key: "f2",
        question: "Kolik stojí redesign webových stránek?",
        answer:
          "Cena redesignu webu začíná od 30 000 Kč. Závisí na rozsahu změn, počtu stránek a technické složitosti. Vizuální refresh s novým designem při zachování struktury stojí méně než kompletní přestavba včetně změny technologie. V ceně je audit stávajícího webu, nový design, migrace obsahu, SEO přesměrování a testování. Přesnou nabídku sestavím po analýze vašeho aktuálního webu a definici cílů.",
      },
      {
        _key: "f3",
        question: "Ztratím po redesignu pozice ve vyhledávačích?",
        answer:
          "Ne, pokud se redesign provede správně. Klíčem je zachování URL struktury a nastavení 301 přesměrování tam, kde se adresy mění. Před redesignem zmapuji všechny indexované stránky a jejich pozice. Po spuštění ověřím indexaci a monitoruji případné výkyvy. Krátkodobé kolísání pozic je normální a během 2-4 týdnů se stabilizuje. Správně provedený redesign pozice zpravidla zlepší díky lepšímu technickému základu.",
      },
      {
        _key: "f4",
        question: "Jak dlouho trvá redesign webu?",
        answer:
          "Standardní redesign trvá přibližně 18 dní. Prvních 5 dní probíhá audit a návrh nového designu, dalších 8-10 dní vývoj a migrace obsahu, zbytek zabírá testování a ladění. Časový rámec závisí na rozsahu změn. Jednodušší vizuální refresh může být rychlejší, kompletní přestavba s novou technologií zabere více času. Oproti tvorbě webu od nuly je redesign zpravidla efektivnější, protože pracujeme s existujícím obsahem.",
      },
    ],
    metaTitle: "Redesign webu — ANFILOV | Modernizace webových stránek",
    metaDescription:
      "Redesign webu od 30 000 Kč. Moderní design, zachovaná SEO hodnota, lepší konverze. Dodání do 18 dní. Konzultace zdarma.",
  },

  "ui-kit-design-system": {
    atomicAnswer:
      "UI kit a design systém je knihovna opakovaně použitelných komponent, které zajišťují vizuální a funkční konzistenci napříč digitálními produkty. Služba je určena firmám s více digitálními produkty, SaaS projektům a týmům, kde na designu spolupracuje více lidí. Klient dostává knihovnu komponent ve Figma s definovanými stavy a variantami, tokenový systém barev, typografie a mezer, dokumentaci použití každé komponenty, pravidla kompozice a layoutu a gridový systém pro responzivní design. Proces zahrnuje audit stávajících rozhraní, definici atomických prvků, postupné skládání komponent do složitějších celků a tvorbu dokumentace. Výsledek výrazně zrychluje návrh i vývoj nových obrazovek a funkcí. Cena UI kitu a design systému začíná od 25 000 Kč, dodací lhůta je přibližně 14 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Vytvořím knihovnu komponent, která sjednotí vaše digitální produkty a zrychlí práci celého týmu. Jednou navrženo, opakovaně použitelné bez ztráty kvality.",
    faqItems: [
      {
        _key: "f1",
        question: "Co je design systém a k čemu slouží?",
        answer:
          "Design systém je organizovaná knihovna vizuálních komponent s jasnými pravidly použití. Slouží jako jednotný zdroj pravdy pro designéry i vývojáře. Obsahuje tlačítka, formuláře, karty, navigaci a další prvky s definovanými stavy, variantami a rozestupy. Zajišťuje konzistentní vzhled a chování napříč všemi obrazovkami a produkty. Výrazně zrychluje návrh nových funkcí, protože tým skládá z hotových bloků místo kreslení od nuly.",
      },
      {
        _key: "f2",
        question: "Kolik stojí tvorba UI kitu?",
        answer:
          "Cena UI kitu začíná od 25 000 Kč za základní sadu komponent. Rozsáhlý design systém pro velký produkt s desítkami obrazovek stojí výrazně více. Cena závisí na počtu komponent, hloubce dokumentace a míře customizace. Základní kit pokrývá typografii, barvy, tlačítka, formuláře a karty. Rozšířená verze přidává komplexní komponenty, datové vizualizace a interakční vzory. Investice se vrací v ušetřeném čase při dalším vývoji.",
      },
      {
        _key: "f3",
        question: "Jak dlouho trvá vytvoření design systému?",
        answer:
          "Základní UI kit zabere přibližně 14 dní. Prvních 5 dní audit stávajícího rozhraní a definice tokenů, dalších 5-6 dní tvorba komponent ve Figma a zbylý čas dokumentace. Rozsáhlý design systém pro větší produkt může trvat i několik měsíců. Doporučuji začít základní sadou a postupně ji rozšiřovat podle potřeb. Design systém je živý dokument, který roste spolu s produktem.",
      },
      {
        _key: "f4",
        question: "V čem design systém dodáváte?",
        answer:
          "Primárně pracuji ve Figma, které je průmyslovým standardem pro týmovou spolupráci na designu. Komponenty jsou navržené s auto-layoutem, variantami a design tokeny, takže je designéři i vývojáři mohou rovnou používat. Součástí dodávky je dokumentace pravidel použití. Na požádání připravím i specifikaci pro implementaci v kódu včetně CSS proměnných a spacing systému.",
      },
      {
        _key: "f5",
        question: "Potřebuji design systém pro jeden web?",
        answer:
          "I pro jeden web se UI kit vyplatí, pokud plánujete jeho rozvoj nebo máte více lidí v týmu. Konzistentní komponenty zrychlují přidávání nových stránek a funkcí. Pro statický prezentační web bez plánovaného rozvoje stačí standardní design v rámci tvorby webu. Design systém se vyplatí nejvíce u produktů, které se průběžně vyvíjejí, mají více sekcí nebo na nich pracuje více designérů a vývojářů.",
      },
    ],
    metaTitle: "UI kit a design systém — ANFILOV | Knihovna komponent",
    metaDescription:
      "UI kit a design systém od 25 000 Kč. Figma komponenty, tokeny, dokumentace. Konzistentní design pro celý tým. Konzultace zdarma.",
  },

  "wireframing-prototyping": {
    atomicAnswer:
      "Wireframing a prototyping je proces vytváření strukturálních návrhů a interaktivních modelů webu nebo aplikace ještě před vizuálním designem. Služba je určena firmám a produktovým týmům, které chtějí ověřit uživatelskou cestu a funkčnost před investicí do grafiky a vývoje. Klient dostává wireframy klíčových obrazovek s definovanou hierarchií obsahu, interaktivní prototyp proklikatelný v prohlížeči, dokumentaci uživatelských scénářů a toků, výsledky uživatelského testování na prototypu a doporučení pro vizuální design. Proces zahrnuje analýzu požadavků, skicování struktur, tvorbu digitálních wireframů, sestavení prototypu a testování s reálnými uživateli. Odhalíte problémy v rané fázi, kdy jsou opravy levné. Cena wireframingu a prototypingu začíná od 15 000 Kč, dodací lhůta je přibližně 10 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu wireframy a prototyp, na kterém otestujete uživatelský zážitek dříve, než investujete do vývoje. Levná oprava chyb místo drahých předělávek hotového produktu.",
    faqItems: [
      {
        _key: "f1",
        question: "Jaký je rozdíl mezi wireframem a prototypem?",
        answer:
          "Wireframe je statický strukturální návrh, který definuje rozložení prvků na stránce bez grafického zpracování. Ukazuje hierarchii obsahu, navigaci a umístění klíčových elementů. Prototyp je interaktivní model, kde můžete proklikávat jednotlivé obrazovky a simulovat reálné uživatelské scénáře. Wireframe řeší co a kde, prototyp ověřuje jak to funguje. Nejlepší výsledky přináší kombinace obou přístupů v postupném procesu.",
      },
      {
        _key: "f2",
        question: "Kolik stojí wireframing a prototyping?",
        answer:
          "Cena začíná od 15 000 Kč. Závisí na počtu obrazovek, složitosti interakcí a hloubce testování. Jednoduchý web s 5-8 stránkami se pohybuje na spodní hranici. Komplexní aplikace s desítkami obrazovek a podmíněnými toky stojí výrazně více. V ceně je analýza, wireframy, interaktivní prototyp a dokumentace. Tato investice se mnohonásobně vrátí, protože předejdete drahým změnám ve fázi vývoje.",
      },
      {
        _key: "f3",
        question: "Můžu přeskočit wireframing a jít rovnou do designu?",
        answer:
          "Technicky ano, ale nedoporučuji to. Bez wireframů řešíte strukturu a vizuál současně, což vede k kompromisům v obou oblastech. Wireframing odděluje rozhodování o obsahu a funkčnosti od estetických otázek. Změna rozložení ve wireframu trvá minuty, přepracování hotového designu hodiny. U jednoduchých jednostránkových webů lze wireframing zjednodušit, ale u složitějších projektů je to krok, který šetří čas i peníze.",
      },
      {
        _key: "f4",
        question: "V jakém nástroji wireframy a prototypy vytváříte?",
        answer:
          "Wireframy a prototypy vytvářím ve Figma, což umožňuje snadné sdílení s vaším týmem a připomínkování přímo v prohlížeči. Nemusíte instalovat žádný software. Prototyp je proklikatelný na odkazu, který sdílím po dokončení. Figma také zajišťuje plynulý přechod do fáze vizuálního designu, protože wireframy slouží jako podklad pro grafické zpracování bez nutnosti překreslování.",
      },
      {
        _key: "f5",
        question: "Testujete prototyp s reálnými uživateli?",
        answer:
          "Ano, uživatelské testování na prototypu je součástí služby. Testuji s 3-5 reálnými uživateli z vaší cílové skupiny klíčové scénáře, například dokončení objednávky nebo nalezení informace. Pozoruji, kde se uživatelé zaseknou, co je mate a co funguje intuitivně. Výsledky zpracuji do doporučení, která zapracuji do finální verze wireframů před předáním do vizuálního designu.",
      },
    ],
    metaTitle: "Wireframing a prototyping — ANFILOV | UX návrhy",
    metaDescription:
      "Wireframing a prototyping od 15 000 Kč. UX wireframy, interaktivní prototypy, uživatelské testování. Dodání do 10 dní.",
  },

  "microsite-one-page": {
    atomicAnswer:
      "Microsite neboli one-page web je jednostránkový web navržený pro konkrétní účel: kampaň, produkt, událost nebo sběr kontaktů. Služba je určena firmám, které potřebují rychle spustit cílenou stránku s jasnou konverzní akcí bez složitosti klasického webu. Klient dostává responzivní jednostránkový web s optimalizovaným designem pro konverze, napojení na analytiku a sledování cílů, formulář nebo jinou konverzní mechaniku, rychlé načítání díky optimalizované architektuře a hosting a doménu připravenou ke spuštění. Proces zahrnuje definici cíle stránky, návrh obsahu a struktury, vizuální design, vývoj a nasazení. Microsite je hotová rychle a přináší měřitelné výsledky od prvního dne. Cena microsite začíná od 18 000 Kč, dodací lhůta je přibližně 10 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu jednostránkový web, který plní jeden cíl a plní ho dobře. Rychlé spuštění, čistý design a jasná konverzní cesta bez zbytečných komplikací.",
    faqItems: [
      {
        _key: "f1",
        question: "K čemu slouží microsite a kdy ji využít?",
        answer:
          "Microsite je jednostránkový web zaměřený na jeden konkrétní cíl. Využijete ji pro propagaci produktu nebo služby, kampaňovou stránku, registraci na událost, sběr e-mailových kontaktů nebo představení nového projektu. Hodí se všude tam, kde potřebujete rychle spustit cílenou stránku bez složitosti klasického webu. Výhodou je rychlé nasazení, nižší cena a snadná měřitelnost výsledků. Microsite může fungovat samostatně nebo jako doplněk hlavního webu.",
      },
      {
        _key: "f2",
        question: "Kolik stojí jednostránkový web?",
        answer:
          "Cena microsite začíná od 18 000 Kč. Závisí na rozsahu obsahu, požadovaných animacích a interakcích, složitosti konverzní mechaniky a integracích s externími nástroji. Jednoduchá prezentační stránka s formulářem je na spodní hranici. Stránka s propracovanými animacemi, video pozadím nebo napojením na CRM systém stojí více. V ceně je design, vývoj, nasazení a základní analytika. Přesnou nabídku dostanete po konzultaci.",
      },
      {
        _key: "f3",
        question: "Jak rychle může být microsite hotová?",
        answer:
          "Standardní dodací lhůta je přibližně 10 dní. Prvních 3-4 dny strategie a design, dalších 4-5 dní vývoj a nasazení, zbylý čas testování a ladění. Expresní dodání do 5 pracovních dní je možné za příplatek u jednodušších projektů. Rychlost závisí na připravenosti vašeho obsahu, textů, fotografií a podkladů. Čím lépe připravené vstupy, tím rychlejší realizace.",
      },
      {
        _key: "f4",
        question: "Bude microsite fungovat na mobilech?",
        answer:
          "Ano, responzivní design je samozřejmostí. Microsite navrhuji mobile-first přístupem, protože většina návštěvníků kampaňových stránek přichází z mobilních zařízení a sociálních sítí. Design je optimalizovaný pro dotykové ovládání, rychlé načítání na mobilních sítích a pohodlné vyplnění formuláře na telefonu. Testuji na reálných zařízeních s různými velikostmi obrazovek, aby stránka fungovala bezchybně.",
      },
      {
        _key: "f5",
        question: "Můžu microsite později rozšířit na plnohodnotný web?",
        answer:
          "Ano, pokud je microsite postavena na správné technologii. Při návrhu počítám s případným rozšířením, pokud je to v plánu. Ze jednostránkového webu se může stát vícestránková prezentace přidáním dalších sekcí a podstránek. Doporučuji ale začít s jasně definovaným rozsahem a rozšiřovat až na základě dat o chování návštěvníků. Microsite je často nejlepší způsob, jak rychle ověřit nápad před větší investicí.",
      },
    ],
    metaTitle: "Microsite a one-page web — ANFILOV | Jednostránkový web",
    metaDescription:
      "Microsite a one-page web od 18 000 Kč. Kampaňové stránky, landing pages, produktové weby. Dodání do 10 dní. Konzultace zdarma.",
  },
};

async function main() {
  for (const [slug, data] of Object.entries(PATCHES)) {
    const doc = await client.fetch(
      '*[_type=="sluzba" && slug.current==$slug][0]._id',
      { slug }
    );
    if (!doc) {
      console.log("\u26a0\ufe0f " + slug + " not found");
      continue;
    }
    await client.patch(doc).set(data).commit();
    console.log("\u2705 " + slug);
  }
  console.log("\nDone. Patched " + Object.keys(PATCHES).length + " services.");
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
