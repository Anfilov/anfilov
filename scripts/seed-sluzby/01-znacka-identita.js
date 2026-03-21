const {
  fetchAllProjectIds,
  fetchAllToolIds,
  randomSubset,
  ref,
  createOrUpdateSluzba,
} = require("./_helpers");

const CATEGORY = "znacka-identita";

// ---------------------------------------------------------------------------
// Placeholder video (design-related YouTube video)
// ---------------------------------------------------------------------------
const PLACEHOLDER_VIDEO = "https://www.youtube.com/watch?v=UFHGBhGuYOI";

// ---------------------------------------------------------------------------
// Services data
// ---------------------------------------------------------------------------

function buildServices(projectIds, toolIds) {
  const rp = (n) => randomSubset(projectIds, n).map(ref);
  const rt = (n) => randomSubset(toolIds, n).map(ref);

  return [
    // ── 1. Tvorba loga ────────────────────────────────────────────────
    {
      slug: "tvorba-loga",
      data: {
        name: "Tvorba loga",
        category: CATEGORY,
        categoryOrder: 1,
        heroTitle: "Logo, které vaši zákazníci nezapomenou",
        heroSubheadline:
          "Získejte důvěru těch správných zákazníků a oslovte je logem sladěným s celým vizuálním stylem. Provedu vás tvorbou firemní identity od strategie po samotný design.",
        heroPriceLabel: "Již od 15 000 Kč",
        heroProjectsLabel: "200+ projektů",
        heroDeliveryLabel: "dodání cca 12 dní",
        atomicAnswer:
          "Tvorba loga je proces návrhu unikátní vizuální značky, která odráží hodnoty a strategii vaší firmy. Služba je určena podnikatelům, startupům a firmám, které chtějí profesionální logo — ne generický clipart z Canvy. Získáte originální logotyp ve všech potřebných formátech, základní brand manuál a 2 kola revizí. Cena začíná od 15 000 Kč a dodání trvá přibližně 12 pracovních dní. Službu poskytuje Simon Anfilov z ANFILOV Studia v Praze, brand & web designer s 30 lety zkušeností a stovkami dokončených projektů.",
        metaTitle: "Tvorba loga — ANFILOV | Logo, které prodává",
        metaDescription:
          "Profesionální tvorba loga od 15 000 Kč. Originální design, strategický přístup, dodání do 12 dnů. 30 let zkušeností. Chci nabídku →",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Vaše logo vypadá zastarale a neprofesionálně — klienti vás berou méně vážně, než byste si zasloužili." },
          { _key: "p2", text: "Logo z Canvy nebo Fiverru vypadá jako tisíc dalších — vaše značka se v konkurenci ztrácí." },
          { _key: "p3", text: "Zákazníci si vaši značku nepamatují a zaměňují vás s konkurencí." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Profesionální logo navržené na míru",
        reseniItems: [
          { _key: "r1", title: "Originální logotyp", text: "Unikátní vizuální identita navržená na míru — žádné šablony ani AI generátory." },
          { _key: "r2", title: "2–3 konceptuální návrhy", text: "Vybíráte z promyšlených variant, ne z jedné take-it-or-leave-it verze." },
          { _key: "r3", title: "Základní brand manuál", text: "Pravidla použití loga, barvy, písma — váš tým bude vědět, jak značku používat správně." },
          { _key: "r4", title: "Všechny formáty pro web i tisk", text: "SVG, PNG, PDF — logo funguje na vizitce i na billboardu." },
          { _key: "r5", title: "2 kola revizí", text: "Doladíme každý detail, dokud nebudete spokojeni." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & strategie", days: 1, text: "Vyplníte krátký dotazník, probíráme cíle, konkurenci a cílovou skupinu." },
          { _key: "s2", title: "Rešerše & moodboard", days: 2, text: "Analyzuji trh, hledám vizuální směr a připravím moodboard ke schválení." },
          { _key: "s3", title: "Konceptuální návrhy", days: 5, text: "Představím 2–3 originální koncepty s vysvětlením designového záměru." },
          { _key: "s4", title: "Revize & finalizace", days: 3, text: "Na základě vašeho feedbacku doladíme vybraný koncept do finální podoby." },
          { _key: "s5", title: "Předání souborů", days: 1, text: "Dostanete kompletní balíček: logo ve všech formátech + základní brand manuál." },
        ],
        videoOverline: "Video",
        videoTitle: "Podívejte se, jak to vypadá v praxi",
        videoBody: "Krátká ukázka mého procesu tvorby loga — od prvního briefu po finální předání.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky tvorby loga",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí tvorba loga",
        cenikSubtitle: "Cena závisí na rozsahu projektu a požadovaných výstupech. Zde je orientační přehled.",
        cenikPriceTitle: "Cena za návrh loga",
        cenikPriceLabel: "od 15 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Strategický brief", desc: "Analýza cílů, konkurence a cílové skupiny" },
          { _key: "c2", name: "2–3 konceptuální návrhy", desc: "Originální varianty s designovým zdůvodněním" },
          { _key: "c3", name: "2 kola revizí", desc: "Úpravy vybraného konceptu dle vašeho feedbacku" },
          { _key: "c4", name: "Kompletní soubory", desc: "SVG, PNG, PDF — pro web, tisk i sociální sítě" },
          { _key: "c5", name: "Základní brand manuál", desc: "Pravidla použití loga, barvy a typografie" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Strategický přístup", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Originalita návrhu", scores: [5, 4, 2] },
          { _key: "t3", criterion: "Rychlost dodání", scores: [4, 3, 5] },
          { _key: "t4", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
          { _key: "t5", criterion: "Osobní přístup", scores: [5, 2, 3] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(5),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Kolik stojí tvorba loga?", answer: "Cena začíná od 15 000 Kč za kompletní návrh včetně brand manuálu. Finální cena závisí na rozsahu — zda potřebujete jen logotyp, nebo i kompletní vizuální identitu. Po úvodním briefu vám pošlu přesnou kalkulaci." },
          { _key: "f2", question: "Jak dlouho trvá tvorba loga?", answer: "Standardní dodání je 10–14 pracovních dní od schválení briefu. Zahrnuje rešerši, konceptuální návrhy, revize a finální předání. U urgentních projektů lze domluvit expresní zpracování." },
          { _key: "f3", question: "Co když se mi žádný návrh nelíbí?", answer: "Za 30 let praxe se to nestalo — a je to díky důkladnému briefu na začátku. Každý koncept vychází ze strategie, kterou společně odsouhlasíme. Navíc máte 2 kola revizí na doladění detailů." },
          { _key: "f4", question: "Dostanu zdrojové soubory?", answer: "Ano, vždy. Dostanete logo ve formátech SVG, PNG a PDF — vše v otevřených formátech. Zdrojové soubory (AI/Figma) jsou součástí předání." },
          { _key: "f5", question: "Navrhujete i vizuální identitu, nebo jen logo?", answer: "Obojí. Logo je základ, ale nabízím i kompletní vizuální identitu — barvy, typografie, vizitky, šablony a brand manuál. Můžeme začít logem a identitu rozšířit postupně." },
        ],
      },
    },

    // ── 2. Redesign loga ──────────────────────────────────────────────
    {
      slug: "redesign-loga",
      data: {
        name: "Redesign loga",
        category: CATEGORY,
        categoryOrder: 2,
        heroTitle: "Modernizujte svou značku bez ztráty identity",
        heroSubheadline:
          "Vaše logo sloužilo dobře, ale trh se posunul. Redesign zachová DNA vaší značky a přinese ji do současnosti — čistší, čitelnější, silnější.",
        heroPriceLabel: "Již od 12 000 Kč",
        heroProjectsLabel: "80+ redesignů",
        heroDeliveryLabel: "dodání cca 10 dní",
        atomicAnswer:
          "Redesign loga je profesionální modernizace stávající vizuální značky. Zachovává rozpoznatelnost a DNA originálu, ale přináší lepší čitelnost, moderní estetiku a technickou použitelnost na všech platformách. Služba zahrnuje analýzu stávajícího loga, 2–3 návrhy redesignu, 2 kola revizí a kompletní předání souborů. Cena začíná od 12 000 Kč, dodání do 10 pracovních dní. Redesign provádí Simon Anfilov z ANFILOV Studia — 30 let praxe v brandingu, stovky rebrandů.",
        metaTitle: "Redesign loga — ANFILOV | Moderní značka",
        metaDescription:
          "Profesionální redesign loga od 12 000 Kč. Zachováme DNA vaší značky a přineseme ji do současnosti. 30 let zkušeností.",
        problemOverline: "Problém",
        problemTitle: "Kdy je čas na redesign?",
        problemItems: [
          { _key: "p1", text: "Logo vypadá zastarale a neodpovídá současné kvalitě vašich služeb nebo produktů." },
          { _key: "p2", text: "Značka špatně funguje v digitálu — rozmazává se na mobilu, nečitelná v malých velikostech." },
          { _key: "p3", text: "Rozšiřujete nabídku nebo vstupujete na nový trh a stávající logo už nestačí." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Evoluce, ne revoluce",
        reseniItems: [
          { _key: "r1", title: "Audit stávajícího loga", text: "Analyzuji silné i slabé stránky — co zachovat a co změnit." },
          { _key: "r2", title: "2–3 varianty redesignu", text: "Od jemné evoluce po výraznější modernizaci — vybíráte míru změny." },
          { _key: "r3", title: "Responzivní verze", text: "Logo, které funguje od faviconu po billboard — v každé velikosti." },
          { _key: "r4", title: "Migrační manuál", text: "Jak přejít ze starého na nové logo — timeline, touchpointy, checklist." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá redesign",
        procesSteps: [
          { _key: "s1", title: "Audit & analýza", days: 2, text: "Zhodnotím stávající logo, identifikuji co funguje a co ne." },
          { _key: "s2", title: "Strategický směr", days: 1, text: "Definujeme míru změny — evoluce vs. revoluce." },
          { _key: "s3", title: "Návrhy redesignu", days: 4, text: "Představím 2–3 varianty s různou mírou modernizace." },
          { _key: "s4", title: "Revize & finalizace", days: 2, text: "Doladíme vybranou variantu a připravím finální soubory." },
          { _key: "s5", title: "Předání + migrační plán", days: 1, text: "Kompletní balíček souborů + doporučení pro přechod na nové logo." },
        ],
        videoOverline: "Video",
        videoTitle: "Redesign v praxi",
        videoBody: "Podívejte se, jak vypadá profesionální redesign loga krok za krokem.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky redesignů",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí redesign loga",
        cenikSubtitle: "Cena závisí na míře požadované změny a rozsahu výstupů.",
        cenikPriceTitle: "Cena za redesign loga",
        cenikPriceLabel: "od 12 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Audit stávajícího loga", desc: "Analýza silných a slabých stránek" },
          { _key: "c2", name: "2–3 návrhy redesignu", desc: "Varianty s různou mírou modernizace" },
          { _key: "c3", name: "2 kola revizí", desc: "Doladění vybraného konceptu" },
          { _key: "c4", name: "Kompletní soubory", desc: "SVG, PNG, PDF pro všechny platformy" },
          { _key: "c5", name: "Migrační plán", desc: "Doporučení pro přechod na nové logo" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Zachování identity značky", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Strategický přístup", scores: [5, 4, 1] },
          { _key: "t3", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
          { _key: "t4", criterion: "Osobní komunikace", scores: [5, 2, 3] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(4),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Jaký je rozdíl mezi redesignem a novým logem?", answer: "Redesign zachovává rozpoznatelné prvky vaší stávající značky a modernizuje je. Nové logo začíná od nuly. Redesign je vhodný, když vaše značka má vybudovanou pověst, kterou nechcete ztratit." },
          { _key: "f2", question: "Neztratíme redesignem zákazníky?", answer: "Ne, pokud se provede správně. Strategický redesign posiluje značku — zákazníci ji stále poznají, ale vnímají ji jako modernější a důvěryhodnější. Součástí dodávky je migrační plán pro hladký přechod." },
          { _key: "f3", question: "Kolik stojí redesign loga?", answer: "Redesign začíná od 12 000 Kč. Finální cena závisí na míře požadované změny a rozsahu výstupů. Po úvodní konzultaci obdržíte přesnou cenovou nabídku." },
          { _key: "f4", question: "Jak dlouho redesign trvá?", answer: "Standardně 8–12 pracovních dní. Zahrnuje audit, návrhy, revize a finální předání. Expresní zpracování je možné po domluvě." },
        ],
      },
    },

    // ── 3. Symbol / Monogram ──────────────────────────────────────────
    {
      slug: "symbol-monogram",
      data: {
        name: "Symbol / Monogram",
        category: CATEGORY,
        categoryOrder: 3,
        heroTitle: "Ikonický symbol, který řekne vše bez slov",
        heroSubheadline:
          "Silný symbol nebo monogram funguje všude — od faviconu po merch. Navrhnu vám značku, která je zapamatovatelná na první pohled.",
        heroPriceLabel: "Již od 8 000 Kč",
        heroProjectsLabel: "60+ symbolů",
        heroDeliveryLabel: "dodání cca 8 dní",
        atomicAnswer:
          "Symbol nebo monogram je zjednodušená vizuální značka, která reprezentuje vaši firmu bez nutnosti textu. Ideální jako ikona aplikace, favicon, razítko nebo merch element. Služba zahrnuje strategický návrh, 2–3 koncepty, revize a předání ve všech formátech. Cena od 8 000 Kč, dodání do 8 pracovních dní. Navrhuje Simon Anfilov, ANFILOV Studio Praha.",
        metaTitle: "Symbol & monogram — ANFILOV | Ikonická značka",
        metaDescription:
          "Návrh symbolu nebo monogramu od 8 000 Kč. Zapamatovatelná ikona pro vaši značku. Dodání do 8 dní.",
        problemOverline: "Problém",
        problemTitle: "Proč potřebujete symbol?",
        problemItems: [
          { _key: "p1", text: "Vaše logo nefunguje v malých velikostech — favicon, app ikona, sociální sítě." },
          { _key: "p2", text: "Potřebujete rozpoznatelný vizuální element pro merch, razítka nebo vodoznaky." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Symbol, který funguje všude",
        reseniItems: [
          { _key: "r1", title: "Unikátní symbol nebo monogram", text: "Originální značka navržená tak, aby fungovala od 16×16 px po velkoformátový tisk." },
          { _key: "r2", title: "Responzivní varianty", text: "Verze pro různé velikosti a kontexty — plný detail i zjednodušená ikona." },
          { _key: "r3", title: "Integrace s logotypem", text: "Symbol, který vizuálně ladí s vaším stávajícím logem a identitou." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & inspirace", days: 1, text: "Zjistím, co má symbol vyjadřovat a kde všude bude použit." },
          { _key: "s2", title: "Skici & koncepty", days: 3, text: "Ručně skicuji desítky variant, vyberu 2–3 nejsilnější." },
          { _key: "s3", title: "Digitální zpracování", days: 2, text: "Vybraný koncept převedu do vektorové podoby s pixel-perfect detailem." },
          { _key: "s4", title: "Revize & předání", days: 2, text: "Doladíme finální podobu a předám všechny formáty." },
        ],
        videoOverline: "Video",
        videoTitle: "Tvorba symbolu v praxi",
        videoBody: "Od prvního nápadu po finální ikonu — nahlédněte do procesu.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky symbolů a monogramů",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí návrh symbolu",
        cenikSubtitle: "Cena závisí na složitosti a počtu požadovaných variant.",
        cenikPriceTitle: "Cena za návrh symbolu",
        cenikPriceLabel: "od 8 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "2–3 konceptuální návrhy", desc: "Promyšlené varianty symbolu nebo monogramu" },
          { _key: "c2", name: "Responzivní varianty", desc: "Verze pro různé velikosti a kontexty" },
          { _key: "c3", name: "2 kola revizí", desc: "Doladění finální podoby" },
          { _key: "c4", name: "Vektorové soubory", desc: "SVG, PNG, PDF — pro všechny použití" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Originalita návrhu", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Technická preciznost", scores: [5, 4, 2] },
          { _key: "t3", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
          { _key: "t4", criterion: "Osobní přístup", scores: [5, 2, 3] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(4),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Jaký je rozdíl mezi symbolem a monogramem?", answer: "Symbol je abstraktní nebo figurativní ikona (např. jablko Apple). Monogram je typografická značka z iniciál (např. LV pro Louis Vuitton). Obě varianty fungují jako samostatná vizuální identifikace vaší značky." },
          { _key: "f2", question: "Mohu symbol používat samostatně bez loga?", answer: "Ano, přesně k tomu je navržen. Symbol funguje jako zkratka vaší značky — na favicon, app ikonu, razítko, merch nebo vodoznak. Je navržen tak, aby byl rozpoznatelný i bez doprovodu textu." },
          { _key: "f3", question: "Kolik stojí návrh symbolu?", answer: "Cena začíná od 8 000 Kč a závisí na složitosti a počtu variant. Po konzultaci obdržíte přesnou cenovou nabídku." },
        ],
      },
    },

    // ── 4. Brand manuál ───────────────────────────────────────────────
    {
      slug: "brand-manual",
      data: {
        name: "Brand manuál",
        category: CATEGORY,
        categoryOrder: 4,
        heroTitle: "Pravidla, díky kterým vaše značka funguje konzistentně",
        heroSubheadline:
          "Brand manuál je váš designový zákon. Definuje, jak správně používat logo, barvy, typografii a další elementy — ať už je používá váš tým, tiskárna nebo agentura.",
        heroPriceLabel: "Již od 15 000 Kč",
        heroProjectsLabel: "70+ manuálů",
        heroDeliveryLabel: "dodání cca 14 dní",
        atomicAnswer:
          "Brand manuál je dokument definující pravidla vizuální identity vaší značky — použití loga, barevnou paletu, typografii, ochranné zóny a příklady správné i nesprávné aplikace. Zajišťuje konzistentní vystupování značky napříč všemi kanály a materiály. Služba zahrnuje analýzu stávající identity, tvorbu kompletního manuálu a revize. Cena od 15 000 Kč, dodání do 14 pracovních dní. Zpracovává Simon Anfilov, ANFILOV Studio Praha.",
        metaTitle: "Brand manuál — ANFILOV | Konzistentní značka",
        metaDescription:
          "Profesionální brand manuál od 15 000 Kč. Pravidla pro logo, barvy, typografii. Vaše značka bude fungovat konzistentně všude.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte tyto situace?",
        problemItems: [
          { _key: "p1", text: "Každý ve firmě používá logo jinak — jiné barvy, jiné proporce, jiné pozadí." },
          { _key: "p2", text: "Dodavatelé (tiskárny, agentury, freelanceři) se ptají na specifikace a vy nemáte co poslat." },
          { _key: "p3", text: "Vaše značka vypadá na webu jinak než na vizitce a jinak než na sociálních sítích." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Jeden dokument, kompletní pravidla",
        reseniItems: [
          { _key: "r1", title: "Pravidla loga", text: "Varianty, ochranné zóny, minimální velikosti, správné i nesprávné použití." },
          { _key: "r2", title: "Barevná paleta", text: "Primární a sekundární barvy s kódy pro CMYK, RGB, HEX a Pantone." },
          { _key: "r3", title: "Typografie", text: "Vybrané fonty, hierarchie nadpisů, pravidla pro web i tisk." },
          { _key: "r4", title: "Příklady aplikací", text: "Ukázky správného použití na reálných materiálech — vizitky, web, sociální sítě." },
          { _key: "r5", title: "Do's & Don'ts", text: "Jasné příklady co dělat a co nedělat — prevence chyb." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak vzniká brand manuál",
        procesSteps: [
          { _key: "s1", title: "Audit identity", days: 2, text: "Zrevidujeme stávající materiály a identifikujeme mezery." },
          { _key: "s2", title: "Definice pravidel", days: 5, text: "Stanovíme pravidla pro všechny elementy identity." },
          { _key: "s3", title: "Tvorba manuálu", days: 5, text: "Zpracuji přehledný dokument s vizuálními příklady." },
          { _key: "s4", title: "Revize & předání", days: 2, text: "Projdeme manuál společně a doladíme detaily." },
        ],
        videoOverline: "Video",
        videoTitle: "Proč potřebujete brand manuál",
        videoBody: "Krátké vysvětlení, jak brand manuál šetří čas a peníze.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky brand manuálů",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí brand manuál",
        cenikSubtitle: "Cena závisí na rozsahu identity a počtu elementů, které je potřeba pokrýt.",
        cenikPriceTitle: "Cena za brand manuál",
        cenikPriceLabel: "od 15 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Audit stávající identity", desc: "Revize všech materiálů a identifikace mezer" },
          { _key: "c2", name: "Kompletní brand manuál", desc: "PDF dokument s pravidly pro všechny elementy" },
          { _key: "c3", name: "Digitální i tiskový formát", desc: "Interaktivní PDF + tisková verze" },
          { _key: "c4", name: "2 kola revizí", desc: "Doladění obsahu a struktury" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Praktická použitelnost", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Vizuální kvalita manuálu", scores: [5, 4, 1] },
          { _key: "t3", criterion: "Poměr cena / kvalita", scores: [5, 2, 3] },
          { _key: "t4", criterion: "Znalost branže", scores: [5, 3, 1] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(4),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Co všechno obsahuje brand manuál?", answer: "Pravidla pro logo (varianty, ochranné zóny, minimální velikosti), barevnou paletu (CMYK, RGB, HEX, Pantone), typografii, příklady správné aplikace a Do's & Don'ts. Rozsah přizpůsobíme vašim potřebám." },
          { _key: "f2", question: "Potřebuji brand manuál, i když jsem malá firma?", answer: "Ano — právě malé firmy z něj mají největší užitek. Bez manuálu riskujete, že každý materiál vypadá jinak. Manuál šetří čas a peníze při zadávání práce dodavatelům." },
          { _key: "f3", question: "V jakém formátu manuál dostanu?", answer: "Standardně jako interaktivní PDF s klikacími odkazy. Na přání mohu dodat i webovou verzi nebo tiskovou verzi pro archivaci." },
          { _key: "f4", question: "Kolik stojí brand manuál?", answer: "Cena začíná od 15 000 Kč a závisí na rozsahu. Základní manuál (logo + barvy + typo) je levnější, kompletní manuál s aplikacemi a šablonami stojí více." },
        ],
      },
    },

    // ── 5. Brand naming ───────────────────────────────────────────────
    {
      slug: "brand-naming",
      data: {
        name: "Brand naming",
        category: CATEGORY,
        categoryOrder: 5,
        heroTitle: "Název, který si zapamatují a budou šířit dál",
        heroSubheadline:
          "Dobrý název je první krok k silné značce. Pomohu vám najít jméno, které je unikátní, zapamatovatelné a dostupné jako doména i ochranná známka.",
        heroPriceLabel: "Již od 12 000 Kč",
        heroProjectsLabel: "40+ názvů",
        heroDeliveryLabel: "dodání cca 10 dní",
        atomicAnswer:
          "Brand naming je proces tvorby názvu značky, produktu nebo služby. Zahrnuje strategickou analýzu, kreativní workshopy, lingvistickou kontrolu a ověření dostupnosti domény i ochranné známky. Výstupem je shortlist 5–10 názvů s doporučením. Cena od 12 000 Kč, dodání do 10 pracovních dní. Službu poskytuje Simon Anfilov, ANFILOV Studio Praha.",
        metaTitle: "Brand naming — ANFILOV | Název pro vaši značku",
        metaDescription:
          "Tvorba názvu značky od 12 000 Kč. Unikátní, zapamatovatelný, s ověřenou doménou. 30 let zkušeností v brandingu.",
        problemOverline: "Problém",
        problemTitle: "Proč je výběr názvu tak těžký?",
        problemItems: [
          { _key: "p1", text: "Všechny dobré názvy jsou už zabrané — domény, ochranné známky, sociální sítě." },
          { _key: "p2", text: "Přemýšlíte o názvu měsíce a stále nemáte ten pravý — rozhodování paralyzuje." },
          { _key: "p3", text: "Bojíte se, že název bude vypadat neprofesionálně nebo bude špatně vyslovitelný." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Strukturovaný proces namísto brainstormingu",
        reseniItems: [
          { _key: "r1", title: "Strategická analýza", text: "Zmapuji váš trh, konkurenci a cílovou skupinu — název musí ladit s pozicí značky." },
          { _key: "r2", title: "Kreativní naming workshop", text: "Systematicky generuji desítky variant — neologismy, složeniny, metafory, akronymy." },
          { _key: "r3", title: "Lingvistická kontrola", text: "Ověřím výslovnost, konotace v cizích jazycích a potenciální negativní asociace." },
          { _key: "r4", title: "Ověření dostupnosti", text: "Kontrola domén (.cz, .com), ochranných známek a profilů na sociálních sítích." },
          { _key: "r5", title: "Shortlist s doporučením", text: "Doporučím 5–10 finálních variant s argumentací, proč fungují." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá naming",
        procesSteps: [
          { _key: "s1", title: "Brief & strategie", days: 1, text: "Definujeme hodnoty značky, cílovou skupinu a kritéria pro název." },
          { _key: "s2", title: "Generování názvů", days: 4, text: "Vytvořím 50–100 variant napříč různými naming strategiemi." },
          { _key: "s3", title: "Filtrování & ověření", days: 3, text: "Kontrola domén, ochranných známek, lingvistiky — zůstane shortlist." },
          { _key: "s4", title: "Prezentace & výběr", days: 2, text: "Představím finální varianty s doporučením a společně vybereme vítěze." },
        ],
        videoOverline: "Video",
        videoTitle: "Jak se rodí název značky",
        videoBody: "Nahlédněte do procesu, jak systematicky přicházím na jména, která fungují.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Značky, které jsem pojmenoval",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí brand naming",
        cenikSubtitle: "Cena závisí na rozsahu — pojmenování jedné značky vs. produktové řady.",
        cenikPriceTitle: "Cena za naming",
        cenikPriceLabel: "od 12 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Strategická analýza", desc: "Trh, konkurence, cílová skupina" },
          { _key: "c2", name: "50–100 variant názvů", desc: "Systematicky generované across různé strategie" },
          { _key: "c3", name: "Ověření dostupnosti", desc: "Domény, ochranné známky, sociální sítě" },
          { _key: "c4", name: "Shortlist 5–10 názvů", desc: "Finální varianty s argumentací" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Strategický základ", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Kreativní rozsah", scores: [5, 4, 2] },
          { _key: "t3", criterion: "Ověření dostupnosti", scores: [5, 4, 2] },
          { _key: "t4", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(4),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Kolik názvů mi navrhnete?", answer: "Vytvořím 50–100 variant a z nich vyfiltruju shortlist 5–10 finálních názvů. Každý projde kontrolou dostupnosti domény a ochranné známky." },
          { _key: "f2", question: "Ověříte i dostupnost domény?", answer: "Ano, kontroluji dostupnost .cz a .com domén, profilů na sociálních sítích a zápis v rejstříku ochranných známek ÚPV. Nedoporučím název, který nepůjde zaregistrovat." },
          { _key: "f3", question: "Jak dlouho naming trvá?", answer: "Standardně 8–12 pracovních dní. Kvalitní název vyžaduje čas na kreativu i důkladné ověření. Expresní zpracování je možné po domluvě." },
          { _key: "f4", question: "Mohu si vybrat z více variant?", answer: "Ano, dostanete shortlist 5–10 variant s argumentací, proč každá funguje. Finální volbu necháme na vás — já doporučím, vy rozhodnete." },
        ],
      },
    },

    // ── 6. Brand audit & strategie ────────────────────────────────────
    {
      slug: "brand-audit-strategie",
      data: {
        name: "Brand audit & strategie",
        category: CATEGORY,
        categoryOrder: 6,
        heroTitle: "Zjistěte, kde vaše značka ztrácí a kde může růst",
        heroSubheadline:
          "Komplexní audit vaší značky odhalí slabá místa a definuje strategii, jak je napravit. Data, ne dojmy — to je základ pro růst.",
        heroPriceLabel: "Již od 18 000 Kč",
        heroProjectsLabel: "50+ auditů",
        heroDeliveryLabel: "dodání cca 14 dní",
        atomicAnswer:
          "Brand audit je systematická analýza stávající značky — vizuální identity, komunikace, konkurenčního prostředí a vnímání zákazníky. Výstupem je strategický dokument s konkrétními doporučeními pro zlepšení. Zahrnuje analýzu touchpointů, konkurenční benchmark, SWOT a akční plán. Cena od 18 000 Kč, dodání do 14 pracovních dní. Zpracovává Simon Anfilov, ANFILOV Studio Praha, 30 let zkušeností v brand strategii.",
        metaTitle: "Brand audit & strategie — ANFILOV | Růst značky",
        metaDescription:
          "Brand audit od 18 000 Kč. Odhalte slabá místa vaší značky a získejte strategii pro růst. Konkrétní doporučení, ne obecné rady.",
        problemOverline: "Problém",
        problemTitle: "Tušíte, že něco nefunguje, ale nevíte co?",
        problemItems: [
          { _key: "p1", text: "Investujete do marketingu, ale výsledky neodpovídají — konverze stagnují, brand awareness roste pomalu." },
          { _key: "p2", text: "Vaše značka vypadá jinak na webu, jinak na sociálních sítích a jinak v offline materiálech." },
          { _key: "p3", text: "Konkurence roste rychleji a vy nevíte, čím se od ní odlišit." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Audit založený na datech, ne na pocitech",
        reseniItems: [
          { _key: "r1", title: "Analýza touchpointů", text: "Projdu každý kontaktní bod se zákazníkem — web, sociální sítě, tisk, prostory." },
          { _key: "r2", title: "Konkurenční benchmark", text: "Porovnám vaši značku s 3–5 klíčovými konkurenty na trhu." },
          { _key: "r3", title: "SWOT analýza značky", text: "Identifikuji silné stránky, slabiny, příležitosti a hrozby." },
          { _key: "r4", title: "Strategický akční plán", text: "Konkrétní kroky s prioritami — co řešit hned, co může počkat." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá audit",
        procesSteps: [
          { _key: "s1", title: "Sběr podkladů", days: 2, text: "Potřebuji přístup k vašim materiálům, datům a brandovým assetům." },
          { _key: "s2", title: "Analýza & benchmark", days: 5, text: "Detailní rozbor všech touchpointů a srovnání s konkurencí." },
          { _key: "s3", title: "Strategická doporučení", days: 4, text: "Zpracuji dokument s konkrétními doporučeními a akčním plánem." },
          { _key: "s4", title: "Prezentace & diskuze", days: 1, text: "Osobně představím výsledky a prodiskutujeme další postup." },
        ],
        videoOverline: "Video",
        videoTitle: "Co odhalí brand audit",
        videoBody: "Ukázka toho, jaké problémy audit typicky odhalí a jak je řešit.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky brandových strategií",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí brand audit",
        cenikSubtitle: "Cena závisí na rozsahu — velikost firmy, počet touchpointů, hloubka analýzy.",
        cenikPriceTitle: "Cena za brand audit",
        cenikPriceLabel: "od 18 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Analýza touchpointů", desc: "Revize všech kontaktních bodů se zákazníkem" },
          { _key: "c2", name: "Konkurenční benchmark", desc: "Srovnání s 3–5 konkurenty" },
          { _key: "c3", name: "SWOT analýza", desc: "Silné stránky, slabiny, příležitosti, hrozby" },
          { _key: "c4", name: "Strategický dokument", desc: "PDF s doporučeními a akčním plánem" },
          { _key: "c5", name: "Osobní prezentace", desc: "60min online nebo osobní prezentace výsledků" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Hloubka analýzy", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Praktičnost doporučení", scores: [5, 3, 2] },
          { _key: "t3", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
          { _key: "t4", criterion: "Zkušenosti s rebrandy", scores: [5, 3, 1] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(4),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Co přesně brand audit obsahuje?", answer: "Kompletní analýzu vaší značky: vizuální identitu, komunikační tón, touchpointy (web, sítě, tisk), konkurenční benchmark a SWOT. Výstupem je strategický dokument s konkrétními doporučeními." },
          { _key: "f2", question: "Pro koho je audit vhodný?", answer: "Pro firmy, které cítí, že jejich značka nefunguje optimálně, plánují rebranding, nebo chtějí data-driven podklad pro strategická rozhodnutí o značce." },
          { _key: "f3", question: "Kolik stojí brand audit?", answer: "Cena začíná od 18 000 Kč. Závisí na velikosti firmy a hloubce analýzy. Po úvodní konzultaci (zdarma) obdržíte přesnou nabídku." },
          { _key: "f4", question: "Můžete rovnou navrhnout i řešení?", answer: "Ano. Audit je ideální první krok před redesignem loga, novou vizuální identitou nebo rebrandem. Doporučení z auditu slouží jako zadání pro navazující práci." },
        ],
      },
    },

    // ── 7. Vizuální identita (komplet) ────────────────────────────────
    {
      slug: "vizualni-identita",
      data: {
        name: "Vizuální identita (komplet)",
        category: CATEGORY,
        categoryOrder: 7,
        heroTitle: "Kompletní vizuální identita, která buduje důvěru",
        heroSubheadline:
          "Logo je jen začátek. Kompletní vizuální identita zahrnuje vše od barev a typografie po vizitky, šablony a brand manuál — systém, který roste s vaší firmou.",
        heroPriceLabel: "Již od 45 000 Kč",
        heroProjectsLabel: "100+ identit",
        heroDeliveryLabel: "dodání cca 21 dní",
        atomicAnswer:
          "Kompletní vizuální identita je ucelený designový systém vaší značky. Zahrnuje logo, barevnou paletu, typografii, vizitky, hlavičkový papír, šablony pro sociální sítě, e-mailový podpis a brand manuál. Vše navržené strategicky — ne jako soubor izolovaných prvků, ale jako koherentní celek. Cena od 45 000 Kč, dodání do 21 pracovních dní. Navrhuje Simon Anfilov, ANFILOV Studio Praha, 30 let zkušeností.",
        metaTitle: "Vizuální identita — ANFILOV | Kompletní branding",
        metaDescription:
          "Kompletní vizuální identita od 45 000 Kč. Logo, barvy, typo, vizitky, šablony i brand manuál. Systém, který roste s firmou.",
        problemOverline: "Problém",
        problemTitle: "Máte logo, ale nemáte systém?",
        problemItems: [
          { _key: "p1", text: "Máte logo, ale každý materiál vypadá jinak — chybí jednotný vizuální jazyk." },
          { _key: "p2", text: "Tvorba nových materiálů trvá věčně, protože pokaždé začínáte od nuly." },
          { _key: "p3", text: "Vaše značka nevypadá jako celek — působí neprofesionálně a nekonzistentně." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Systém, ne jednotlivé kusy",
        reseniItems: [
          { _key: "r1", title: "Logo a symbol", text: "Originální logotyp s responzivními variantami pro všechny kontexty." },
          { _key: "r2", title: "Barevná paleta & typografie", text: "Definované barvy a písma s pravidly použití." },
          { _key: "r3", title: "Firemní tiskoviny", text: "Vizitky, hlavičkový papír, e-mailový podpis — vše v jednotném stylu." },
          { _key: "r4", title: "Šablony pro sociální sítě", text: "Připravené šablony, které si váš tým snadno upraví." },
          { _key: "r5", title: "Brand manuál", text: "Kompletní pravidla pro konzistentní používání identity." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak vzniká vizuální identita",
        procesSteps: [
          { _key: "s1", title: "Strategie & brief", days: 2, text: "Definujeme hodnoty, pozici a vizuální směr značky." },
          { _key: "s2", title: "Logo & základní prvky", days: 6, text: "Navrhuji logo, paletu barev a typografii." },
          { _key: "s3", title: "Aplikace na materiály", days: 5, text: "Vizitky, hlavičkový papír, šablony, e-mailové podpisy." },
          { _key: "s4", title: "Brand manuál", days: 5, text: "Zpracuji kompletní manuál s pravidly a příklady." },
          { _key: "s5", title: "Revize & předání", days: 3, text: "Finální úpravy a předání všech souborů a šablon." },
        ],
        videoOverline: "Video",
        videoTitle: "Jak vzniká kompletní identita",
        videoBody: "Od prvního briefu po finální brand manuál — nahlédněte do procesu.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky vizuálních identit",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí vizuální identita",
        cenikSubtitle: "Cena závisí na rozsahu — od základní identity po kompletní systém s desítkami aplikací.",
        cenikPriceTitle: "Cena za kompletní identitu",
        cenikPriceLabel: "od 45 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Logo + symbol", desc: "Originální logotyp s responzivními variantami" },
          { _key: "c2", name: "Barevná paleta & typografie", desc: "Definované barvy a písma s kódy" },
          { _key: "c3", name: "Firemní tiskoviny", desc: "Vizitky, hlavičkový papír, e-mailový podpis" },
          { _key: "c4", name: "Šablony pro sociální sítě", desc: "Instagram, Facebook, LinkedIn" },
          { _key: "c5", name: "Brand manuál", desc: "Kompletní pravidla pro používání identity" },
          { _key: "c6", name: "3 kola revizí", desc: "Dostatečný prostor pro doladění" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Strategický přístup", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Koherence systému", scores: [5, 4, 2] },
          { _key: "t3", criterion: "Poměr cena / kvalita", scores: [5, 2, 3] },
          { _key: "t4", criterion: "Osobní komunikace", scores: [5, 2, 3] },
          { _key: "t5", criterion: "Rychlost dodání", scores: [4, 3, 5] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(5),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Co všechno zahrnuje kompletní vizuální identita?", answer: "Logo s variantami, barevnou paletu, typografii, vizitky, hlavičkový papír, e-mailový podpis, šablony pro sociální sítě a brand manuál. Rozsah přizpůsobíme vašim potřebám — můžeme přidat i obalový design, merch nebo webové prvky." },
          { _key: "f2", question: "Kolik stojí kompletní identita?", answer: "Cena začíná od 45 000 Kč za kompletní balíček. Závisí na rozsahu výstupů a složitosti projektu. Po úvodní konzultaci obdržíte detailní cenovou nabídku." },
          { _key: "f3", question: "Jak dlouho to trvá?", answer: "Kompletní identita zabere přibližně 15–25 pracovních dní. Závisí na rozsahu projektu a rychlosti vašeho feedbacku." },
          { _key: "f4", question: "Mohu začít jen logem a identitu rozšířit později?", answer: "Ano, to je běžný postup. Můžeme začít logem a základní paletou, a postupně přidávat další prvky. Důležité je, aby byl od začátku definovaný strategický směr." },
          { _key: "f5", question: "Navrhujete i webdesign jako součást identity?", answer: "Webdesign je samostatná služba, ale často ji řeším společně s identitou. Web pak dokonale ladí s vaší značkou. Podívejte se na moji nabídku webdesignu." },
        ],
      },
    },
  ];
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("\n🏷️  Kategorie 1: Značka & identita\n");

  const projectIds = await fetchAllProjectIds();
  const toolIds = await fetchAllToolIds();

  console.log(`  📦 Found ${projectIds.length} projects, ${toolIds.length} tools\n`);

  const services = buildServices(projectIds, toolIds);

  for (const svc of services) {
    await createOrUpdateSluzba(svc.slug, svc.data);
  }

  console.log("\n✅ Kategorie 1 hotová!\n");
}

module.exports = main;

if (require.main === module) {
  main().catch((e) => {
    console.error("Error:", e.message);
    process.exit(1);
  });
}
