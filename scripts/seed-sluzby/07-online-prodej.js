const {
  fetchAllProjectIds,
  fetchAllToolIds,
  randomSubset,
  ref,
  createOrUpdateSluzba,
} = require("./_helpers");

const CATEGORY = "online-prodej";

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
    // ── 1. Prodejní stránky (landing page) ────────────────────────────
    {
      slug: "prodejni-stranky",
      data: {
        name: "Prodejní stránky (landing page)",
        category: CATEGORY,
        categoryOrder: 1,
        heroTitle: "Landing page, která promění návštěvníky v zákazníky",
        heroSubheadline:
          "Vaše reklama přivádí lidi na web, ale nikdo nekupuje? Problém není v kampani — je v landing page. Navrhnu vám prodejní stránku postavenou na konverzních principech, psychologii rozhodování a reálných datech.",
        heroPriceLabel: "Již od 18 000 Kč",
        heroProjectsLabel: "45+ projektů",
        heroDeliveryLabel: "dodání cca 10 dní",
        atomicAnswer:
          "Prodejní stránka (landing page) je jednoúčelová webová stránka navržená tak, aby návštěvníka přiměla k jedné konkrétní akci — nákupu, registraci nebo poptávce. Na rozdíl od běžné webové stránky nemá navigaci a eliminuje rušivé elementy. Služba zahrnuje konverzní strategii, copywriting, UX/UI design a napojení na analytiku. Cena začíná od 18 000 Kč, dodání do 10 pracovních dní. Službu poskytuje Simon Anfilov z ANFILOV Studia v Praze, web & brand designer s 30+ lety zkušeností a desítkami úspěšných landing pages.",
        metaTitle: "Prodejní stránky (landing page) — ANFILOV | Konverze, ne jen design",
        metaDescription:
          "Profesionální landing page od 18 000 Kč. Design postavený na konverzních principech. 45+ projektů, dodání do 10 dní. Chci nabídku →",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Investujete do reklamy, ale konverzní poměr je mizivý — lidé přijdou a hned odejdou." },
          { _key: "p2", text: "Vaše stránka vypadá hezky, ale neprodává — chybí jasná struktura a výzvy k akci." },
          { _key: "p3", text: "Konkurence má lepší landing pages a přetahuje vám zákazníky přímo před nosem." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Landing page postavená na datech, ne na domněnkách",
        reseniItems: [
          { _key: "r1", title: "Konverzní strategie", text: "Než začnu designovat, analyzuji vaši cílovou skupinu, nabídku a konkurenci — design vychází ze strategie." },
          { _key: "r2", title: "Persuasivní copywriting", text: "Texty, které osloví bolesti zákazníka a vedou ho k akci — žádné prázdné fráze." },
          { _key: "r3", title: "UX design pro konverze", text: "Každý element na stránce má svůj účel — od hero sekce po CTA tlačítko." },
          { _key: "r4", title: "Mobilní optimalizace", text: "Většina návštěvníků přichází z mobilu — stránka funguje perfektně na všech zařízeních." },
          { _key: "r5", title: "Napojení na analytiku", text: "Google Analytics, Facebook Pixel, heatmapy — měříte výkon od prvního dne." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & konverzní audit", days: 1, text: "Analyzuji vaši nabídku, cílovou skupinu a stávající konverzní cestu." },
          { _key: "s2", title: "Wireframe & copy", days: 3, text: "Navrhnu strukturu stránky a připravím persuasivní texty." },
          { _key: "s3", title: "UI design", days: 4, text: "Vizuální návrh landing page s důrazem na konverzní elementy." },
          { _key: "s4", title: "Implementace & testování", days: 2, text: "Nasazení stránky, napojení analytiky a A/B test tracking." },
        ],
        videoOverline: "Video",
        videoTitle: "Podívejte se, jak to vypadá v praxi",
        videoBody: "Ukázka mého procesu tvorby prodejní stránky — od analýzy po spuštění.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky prodejních stránek",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí landing page",
        cenikSubtitle: "Cena závisí na rozsahu projektu, počtu sekcí a náročnosti integrace.",
        cenikPriceTitle: "Cena za prodejní stránku",
        cenikPriceLabel: "od 18 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Konverzní strategie", desc: "Analýza cílové skupiny a konkurence" },
          { _key: "c2", name: "Persuasivní copywriting", desc: "Texty postavené na psychologii rozhodování" },
          { _key: "c3", name: "UX/UI design", desc: "Vizuální návrh optimalizovaný pro konverze" },
          { _key: "c4", name: "Mobilní optimalizace", desc: "Responzivní design pro všechna zařízení" },
          { _key: "c5", name: "Analytika & tracking", desc: "Google Analytics, Pixel, heatmapy" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Konverzní strategie", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Kvalita copywritingu", scores: [5, 3, 2] },
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
          { _key: "f1", question: "Kolik stojí landing page?", answer: "Cena začíná od 18 000 Kč za kompletní prodejní stránku včetně strategie, copywritingu a designu. Finální cena závisí na počtu sekcí a složitosti integrace. Po úvodním briefu obdržíte přesnou kalkulaci." },
          { _key: "f2", question: "Jak dlouho trvá tvorba landing page?", answer: "Standardní dodání je 8–12 pracovních dní. Zahrnuje strategii, wireframe, design, implementaci a testování. U urgentních projektů lze domluvit expresní zpracování." },
          { _key: "f3", question: "Píšete i texty na stránku?", answer: "Ano, persuasivní copywriting je nedílnou součástí služby. Texty píšu na základě analýzy vaší cílové skupiny a konverzní strategie — ne od stolu, ale z dat." },
          { _key: "f4", question: "Jaký konverzní poměr mohu očekávat?", answer: "Záleží na nabídce, ceně a cílové skupině. Průměrné landing pages mají konverzi 2–5 %, dobře navržené 5–15 %. Klíčem je testování a optimalizace po spuštění." },
          { _key: "f5", question: "Pomozte i s reklamní kampaní?", answer: "Primárně se zaměřuji na design a konverzní strategii. Na PPC kampaně vás rád propojím s ověřeným specialistou, se kterým pravidelně spolupracuji." },
        ],
      },
    },

    // ── 2. Online kurz — design a řešení ────────────────────────────────
    {
      slug: "online-kurz-design",
      data: {
        name: "Online kurz — design a řešení",
        category: CATEGORY,
        categoryOrder: 2,
        heroTitle: "Online kurz, který vypadá profesionálně a prodává se sám",
        heroSubheadline:
          "Máte know-how, ale vaše kurzová platforma vypadá jako ze šablony? Navrhnu vám kompletní designové řešení pro online vzdělávání — od prodejní stránky po prostředí kurzu. Na Kajabi, Teachable i vlastním řešení.",
        heroPriceLabel: "Již od 25 000 Kč",
        heroProjectsLabel: "15+ projektů",
        heroDeliveryLabel: "dodání cca 21 dní",
        atomicAnswer:
          "Design online kurzu je kompletní vizuální a UX řešení pro platformy digitálního vzdělávání. Zahrnuje návrh prodejní stránky kurzu, design prostředí pro studenty, šablony pro lekce a materiály, napojení na platební systém a automatizace. Služba je vhodná pro kouče, experty a edukátory, kteří chtějí profesionální prezentaci svého know-how. Cena od 25 000 Kč, dodání do 21 pracovních dní. Navrhuje Simon Anfilov, ANFILOV Studio Praha, 30+ let zkušeností v designu.",
        metaTitle: "Online kurz — design a řešení — ANFILOV | Profesionální e-learning",
        metaDescription:
          "Design online kurzu od 25 000 Kč. Prodejní stránka, prostředí kurzu, šablony lekcí. Kajabi, Teachable i custom řešení. Dodání do 21 dní.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Vaše kurzová platforma vypadá amatérsky — studenti nemají důvěru a nedokončují kurz." },
          { _key: "p2", text: "Prodejní stránka kurzu neprodává — lidé odcházejí, aniž by se přihlásili." },
          { _key: "p3", text: "Strávíte hodiny nastavováním platformy místo tvorby obsahu — technikálie vás brzdí." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Kompletní designové řešení pro váš online kurz",
        reseniItems: [
          { _key: "r1", title: "Prodejní stránka kurzu", text: "High-converting landing page, která přesvědčí potenciální studenty k nákupu." },
          { _key: "r2", title: "Design prostředí kurzu", text: "Přehledné a příjemné rozhraní pro studenty — navigace, progress bar, lekce." },
          { _key: "r3", title: "Šablony pro lekce a materiály", text: "Jednotný vizuální styl pro videa, PDF materiály a pracovní listy." },
          { _key: "r4", title: "Nastavení platformy", text: "Technické nastavení Kajabi, Teachable nebo vlastního řešení — platby, přístupy, e-maily." },
          { _key: "r5", title: "Automatizace onboardingu", text: "Uvítací sekvence, připomínky, certifikáty — vše běží automaticky." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & strategie", days: 2, text: "Definujeme cílovou skupinu, strukturu kurzu a výběr platformy." },
          { _key: "s2", title: "Wireframe & UX", days: 4, text: "Navrhnu strukturu prodejní stránky a prostředí kurzu." },
          { _key: "s3", title: "UI design", days: 7, text: "Vizuální návrh všech klíčových obrazovek a šablon." },
          { _key: "s4", title: "Implementace", days: 6, text: "Nasazení designu na platformu, nastavení automatizací a plateb." },
          { _key: "s5", title: "Testování & spuštění", days: 2, text: "Otestujeme celou cestu studenta a spustíme kurz." },
        ],
        videoOverline: "Video",
        videoTitle: "Design online kurzu v praxi",
        videoBody: "Ukázka, jak vypadá profesionálně navržený online kurz — od prodejní stránky po lekce.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky online kurzů",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí design online kurzu",
        cenikSubtitle: "Cena závisí na rozsahu — počet lekcí, složitost platformy, míra automatizace.",
        cenikPriceTitle: "Cena za design kurzu",
        cenikPriceLabel: "od 25 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Prodejní stránka kurzu", desc: "High-converting landing page s konverzní strategií" },
          { _key: "c2", name: "Design prostředí kurzu", desc: "UX/UI pro přehlednou navigaci a příjemný zážitek" },
          { _key: "c3", name: "Šablony lekcí a materiálů", desc: "Jednotný vizuální styl pro veškerý obsah" },
          { _key: "c4", name: "Nastavení platformy", desc: "Kajabi, Teachable nebo custom řešení" },
          { _key: "c5", name: "Automatizace", desc: "Onboarding, připomínky, certifikáty" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Konverzní design", scores: [5, 4, 2] },
          { _key: "t2", criterion: "UX pro studenty", scores: [5, 3, 2] },
          { _key: "t3", criterion: "Technické nastavení", scores: [5, 4, 3] },
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
          { _key: "f1", question: "Jakou platformu doporučujete?", answer: "Záleží na vašich potřebách. Kajabi je all-in-one řešení pro pokročilé, Teachable je jednodušší a levnější pro začátek. Pro maximální kontrolu navrhuji custom řešení. Poradím vám po konzultaci." },
          { _key: "f2", question: "Kolik stojí design online kurzu?", answer: "Cena začíná od 25 000 Kč za kompletní řešení. Finální cena závisí na počtu lekcí, složitosti platformy a rozsahu automatizací. Po briefu obdržíte detailní kalkulaci." },
          { _key: "f3", question: "Pomůžete i s tvorbou obsahu?", answer: "Zaměřuji se na design a technické řešení. S tvorbou obsahu (videa, texty) vás rád propojím s ověřenými specialisty. Postarám se o to, aby vše vizuálně ladilo." },
          { _key: "f4", question: "Jak dlouho trvá celý projekt?", answer: "Standardně 15–25 pracovních dní. Závisí na rozsahu kurzu a rychlosti dodání vašeho obsahu. Expresní zpracování je možné po domluvě." },
          { _key: "f5", question: "Zvládnu pak platformu spravovat sám?", answer: "Ano, to je cíl. Navrhnu vše tak, aby byla správa intuitivní. Součástí předání je krátké zaškolení a dokumentace. Pro přidání nových lekcí nepotřebujete designéra." },
        ],
      },
    },

    // ── 3. Membership / Komunita ────────────────────────────────────────
    {
      slug: "membership-komunita",
      data: {
        name: "Membership / Komunita",
        category: CATEGORY,
        categoryOrder: 3,
        heroTitle: "Členská platforma, která drží komunitu pohromadě",
        heroSubheadline:
          "Budujete komunitu kolem svého brandu, ale chybí vám profesionální prostor? Navrhnu a postavím membership site, kde se vaši členové budou cítit jako doma — a budou platit měsíc co měsíc.",
        heroPriceLabel: "Již od 30 000 Kč",
        heroProjectsLabel: "10+ projektů",
        heroDeliveryLabel: "dodání cca 21 dní",
        atomicAnswer:
          "Membership site je uzavřená webová platforma s placenými přístupy pro vaši komunitu. Zahrnuje design členské sekce, systém předplatného, exkluzivní obsah, fórum nebo skupinový chat a automatizace pro onboarding i retenci. Služba je určena koučům, expertům a tvůrcům, kteří chtějí monetizovat svou komunitu. Cena od 30 000 Kč, dodání do 21 pracovních dní. Navrhuje Simon Anfilov, ANFILOV Studio Praha, 30+ let zkušeností.",
        metaTitle: "Membership / Komunita — ANFILOV | Placená členská platforma",
        metaDescription:
          "Design membership site od 30 000 Kč. Členská sekce, předplatné, exkluzivní obsah. Profesionální komunita, která vydělává. Dodání do 21 dní.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Vaše komunita žije na Facebooku nebo Discordu — nemáte kontrolu nad platformou ani daty." },
          { _key: "p2", text: "Členové se nepřihlašují opakovaně — chybí engagement a důvod se vracet." },
          { _key: "p3", text: "Chcete monetizovat komunitu, ale nevíte, jak nastavit platby a přístupy." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Membership platforma na míru",
        reseniItems: [
          { _key: "r1", title: "Design členské sekce", text: "Přehledné prostředí s jasnou navigací — členové okamžitě najdou, co hledají." },
          { _key: "r2", title: "Systém předplatného", text: "Měsíční nebo roční platby, různé úrovně členství, automatické fakturace." },
          { _key: "r3", title: "Exkluzivní obsah", text: "Sekce pro články, videa, kurzy, soubory ke stažení — vše za paywallem." },
          { _key: "r4", title: "Komunitní funkce", text: "Diskuzní fórum, skupinový chat nebo Q&A sekce pro aktivní engagement." },
          { _key: "r5", title: "Retenční automatizace", text: "Uvítací sekvence, připomínky nového obsahu, win-back e-maily při odchodu." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & strategie", days: 2, text: "Definujeme model členství, cenové úrovně a typ obsahu." },
          { _key: "s2", title: "UX & wireframe", days: 5, text: "Navrhnu strukturu platformy, členskou cestu a klíčové obrazovky." },
          { _key: "s3", title: "UI design", days: 6, text: "Vizuální návrh členské sekce, dashboardu a všech komponent." },
          { _key: "s4", title: "Implementace & automatizace", days: 6, text: "Nasazení platformy, nastavení plateb, automatizací a integrací." },
          { _key: "s5", title: "Testování & spuštění", days: 2, text: "End-to-end testování celé členské cesty a spuštění." },
        ],
        videoOverline: "Video",
        videoTitle: "Membership platforma v praxi",
        videoBody: "Podívejte se, jak vypadá profesionální členská sekce a co vše umí.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky membership platforem",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí membership platforma",
        cenikSubtitle: "Cena závisí na složitosti platformy, počtu úrovní členství a rozsahu automatizací.",
        cenikPriceTitle: "Cena za membership site",
        cenikPriceLabel: "od 30 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Design členské sekce", desc: "UX/UI pro přehlednou navigaci a engagement" },
          { _key: "c2", name: "Systém předplatného", desc: "Platby, úrovně členství, automatické fakturace" },
          { _key: "c3", name: "Prodejní stránka", desc: "Landing page pro získání nových členů" },
          { _key: "c4", name: "Komunitní funkce", desc: "Fórum, chat nebo Q&A sekce" },
          { _key: "c5", name: "Retenční automatizace", desc: "E-mailové sekvence pro udržení členů" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "UX design pro retenci", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Monetizační strategie", scores: [5, 3, 1] },
          { _key: "t3", criterion: "Technické řešení", scores: [5, 4, 3] },
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
          { _key: "f1", question: "Jakou platformu pro membership doporučujete?", answer: "Záleží na vašich potřebách. Pro all-in-one řešení je skvělé Kajabi nebo Circle. Pro WordPress existuje MemberPress nebo Restrict Content Pro. Pro maximální kontrolu navrhuji custom řešení. Po konzultaci doporučím optimální variantu." },
          { _key: "f2", question: "Kolik stojí membership platforma?", answer: "Cena začíná od 30 000 Kč za kompletní řešení včetně designu, implementace a automatizací. Finální cena závisí na složitosti platformy. Po briefu obdržíte detailní nabídku." },
          { _key: "f3", question: "Kolik členů platforma zvládne?", answer: "Záleží na zvoleném technickém řešení. Standardní platformy bez problému zvládají stovky až tisíce členů. Při návrhu zohledňuji váš růstový plán a škálovatelnost." },
          { _key: "f4", question: "Mohu nabízet různé úrovně členství?", answer: "Ano, nastavím vám více cenových úrovní s různým obsahem a přístupy. Např. Free, Basic a Premium — s automatickým řízením přístupů a upgradů." },
          { _key: "f5", question: "Jak dlouho trvá celý projekt?", answer: "Standardně 15–25 pracovních dní. Závisí na složitosti platformy a rozsahu automatizací. Expresní zpracování je možné po domluvě." },
        ],
      },
    },

    // ── 4. Konverzní trychtýř (funnel) ──────────────────────────────────
    {
      slug: "konverzni-trychtyr",
      data: {
        name: "Konverzní trychtýř (funnel)",
        category: CATEGORY,
        categoryOrder: 4,
        heroTitle: "Prodejní funnel, který vede zákazníka od zájmu k nákupu",
        heroSubheadline:
          "Jednotlivé stránky neprodávají — prodává systém. Navrhnu vám kompletní konverzní trychtýř, který automaticky zahřívá, přesvědčuje a konvertuje potenciální zákazníky v platící klienty.",
        heroPriceLabel: "Již od 35 000 Kč",
        heroProjectsLabel: "20+ projektů",
        heroDeliveryLabel: "dodání cca 18 dní",
        atomicAnswer:
          "Konverzní trychtýř (sales funnel) je soustava propojených stránek a automatizací, která systematicky vede potenciálního zákazníka od prvního kontaktu k nákupu. Zahrnuje lead magnet, opt-in stránku, e-mailovou sekvenci, prodejní stránku, checkout a upsell. Služba pokrývá strategii, design, copywriting a technické nastavení celého funnelu. Cena od 35 000 Kč, dodání do 18 pracovních dní. Navrhuje Simon Anfilov, ANFILOV Studio Praha, 30+ let zkušeností.",
        metaTitle: "Konverzní trychtýř (funnel) — ANFILOV | Systém, který prodává",
        metaDescription:
          "Profesionální sales funnel od 35 000 Kč. Lead magnet, e-maily, prodejní stránka, upsell. Kompletní systém, dodání do 18 dní.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Máte skvělý produkt, ale zákazníci potřebují víc než jednu stránku, aby se rozhodli ke koupi." },
          { _key: "p2", text: "Sbíráte e-maily, ale nemáte systém, který z nich udělá platící zákazníky." },
          { _key: "p3", text: "Konkurence používá sofistikované funnely a vy ztrácíte tržní podíl." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Kompletní prodejní systém, ne izolované stránky",
        reseniItems: [
          { _key: "r1", title: "Lead magnet & opt-in", text: "Hodnotný freebie, který přiláká správné lidi a získá jejich e-mail." },
          { _key: "r2", title: "E-mailová zahřívací sekvence", text: "Automatická série e-mailů, která buduje důvěru a vzdělává potenciální zákazníky." },
          { _key: "r3", title: "Prodejní stránka", text: "High-converting landing page navržená pro maximální konverze." },
          { _key: "r4", title: "Checkout & platební brána", text: "Bezproblémový platební proces s minimálním počtem kroků." },
          { _key: "r5", title: "Upsell & cross-sell", text: "Nabídky po nákupu, které zvyšují průměrnou hodnotu objednávky." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Strategie funnelu", days: 2, text: "Zmapujeme zákaznickou cestu a definujeme strukturu celého trychtýře." },
          { _key: "s2", title: "Copywriting & lead magnet", days: 4, text: "Připravím texty pro všechny stránky a e-maily, navrhnu lead magnet." },
          { _key: "s3", title: "Design všech stránek", days: 6, text: "Vizuální návrh opt-in, prodejní stránky, checkoutu a upsellů." },
          { _key: "s4", title: "Technické nastavení", days: 4, text: "Implementace stránek, e-mailových sekvencí a platební brány." },
          { _key: "s5", title: "Testování & optimalizace", days: 2, text: "End-to-end test celého funnelu a nastavení analytiky." },
        ],
        videoOverline: "Video",
        videoTitle: "Prodejní funnel v praxi",
        videoBody: "Ukázka, jak funguje profesionální konverzní trychtýř — od lead magnetu po upsell.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky konverzních trychtýřů",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí konverzní trychtýř",
        cenikSubtitle: "Cena závisí na počtu kroků ve funnelu, složitosti e-mailových sekvencí a integracích.",
        cenikPriceTitle: "Cena za kompletní funnel",
        cenikPriceLabel: "od 35 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Strategie funnelu", desc: "Mapování zákaznické cesty a konverzních bodů" },
          { _key: "c2", name: "Lead magnet", desc: "Design a obsah hodnotného freebies" },
          { _key: "c3", name: "E-mailová sekvence", desc: "5–7 zahřívacích e-mailů s copywritingem" },
          { _key: "c4", name: "Prodejní stránka + checkout", desc: "High-converting design s platební bránou" },
          { _key: "c5", name: "Upsell / cross-sell stránky", desc: "Nabídky po nákupu pro vyšší hodnotu objednávky" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Konverzní strategie", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Kvalita copywritingu", scores: [5, 3, 2] },
          { _key: "t3", criterion: "Technická integrace", scores: [5, 4, 3] },
          { _key: "t4", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
          { _key: "t5", criterion: "End-to-end řešení", scores: [5, 3, 1] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(5),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Co přesně je konverzní trychtýř?", answer: "Sales funnel je automatizovaný systém stránek a e-mailů, který vede potenciálního zákazníka od prvního kontaktu (lead magnet) přes budování důvěry (e-mailová sekvence) až k nákupu (prodejní stránka + checkout) a dalším nákupům (upsell)." },
          { _key: "f2", question: "Kolik stojí kompletní funnel?", answer: "Cena začíná od 35 000 Kč za kompletní trychtýř. Závisí na počtu kroků, složitosti sekvencí a integracích. Po strategické konzultaci obdržíte detailní cenovou nabídku." },
          { _key: "f3", question: "Jaký nástroj pro funnel používáte?", answer: "Záleží na vašich potřebách. Pracuji s ClickFunnels, Systeme.io, Kajabi i custom řešeními. Důležitý je výsledek, ne nástroj — doporučím optimální variantu po konzultaci." },
          { _key: "f4", question: "Jak rychle uvidím výsledky?", answer: "První data máte ihned po spuštění. Reálné výsledky se projeví po 2–4 týdnech testování a optimalizace. Funnel je živý systém — data z prvních týdnů použijeme pro zlepšení konverzí." },
          { _key: "f5", question: "Píšete i e-mailové sekvence?", answer: "Ano, kompletní copywriting e-mailových sekvencí je součástí služby. Píšu persuasivní texty založené na konverzních principech — žádné generické šablony." },
        ],
      },
    },

    // ── 5. Email marketing a automatizace ───────────────────────────────
    {
      slug: "email-marketing-automatizace",
      data: {
        name: "Email marketing a automatizace",
        category: CATEGORY,
        categoryOrder: 5,
        heroTitle: "E-mailový marketing, který pracuje za vás 24/7",
        heroSubheadline:
          "E-mail je stále nejziskovější marketingový kanál s ROI až 4 200 %. Nastavím vám šablony, automatizace a sekvence, které prodávají — i když spíte.",
        heroPriceLabel: "Již od 15 000 Kč",
        heroProjectsLabel: "25+ projektů",
        heroDeliveryLabel: "dodání cca 10 dní",
        atomicAnswer:
          "Email marketing a automatizace je nastavení kompletního e-mailového systému pro vaše podnikání. Zahrnuje výběr a nastavení platformy (Mailchimp, Ecomail, ActiveCampaign), design e-mailových šablon, tvorbu automatizovaných sekvencí (welcome, prodejní, win-back) a segmentaci databáze. Služba je určena podnikatelům a firmám, které chtějí systematicky komunikovat se zákazníky a zvyšovat tržby. Cena od 15 000 Kč, dodání do 10 pracovních dní. Nastavuje Simon Anfilov, ANFILOV Studio Praha, 30+ let zkušeností.",
        metaTitle: "Email marketing a automatizace — ANFILOV | E-maily, které prodávají",
        metaDescription:
          "Nastavení email marketingu od 15 000 Kč. Šablony, automatizace, sekvence. ROI až 4 200 %. 25+ projektů, dodání do 10 dní.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Máte databázi kontaktů, ale neposíláte e-maily — peníze leží na stole." },
          { _key: "p2", text: "Rozesíláte občasné newslettery bez strategie — open rate klesá a odhlášení rostou." },
          { _key: "p3", text: "Nemáte žádné automatizace — každý e-mail píšete a odesíláte ručně." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "E-mailový systém, který prodává automaticky",
        reseniItems: [
          { _key: "r1", title: "Nastavení platformy", text: "Výběr a konfigurace e-mailového nástroje — Mailchimp, Ecomail, ActiveCampaign nebo jiný." },
          { _key: "r2", title: "Šablony e-mailů", text: "Profesionální šablony v souladu s vaší vizuální identitou — newsletter, promo, transakční." },
          { _key: "r3", title: "Automatizované sekvence", text: "Welcome série, prodejní sekvence, follow-up po nákupu, win-back — vše běží automaticky." },
          { _key: "r4", title: "Segmentace databáze", text: "Rozdělení kontaktů podle chování a zájmů — správná zpráva správným lidem." },
          { _key: "r5", title: "Analytika a reporty", text: "Tracking open rate, click rate, konverzí — víte přesně, co funguje." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Audit & strategie", days: 1, text: "Zhodnotím stávající e-mailový marketing a definujeme strategii." },
          { _key: "s2", title: "Nastavení platformy", days: 2, text: "Konfigurace nástroje, import kontaktů, nastavení domény a DKIM." },
          { _key: "s3", title: "Design šablon", days: 3, text: "Navrhnu a nakóduji šablony e-mailů v souladu s vaší identitou." },
          { _key: "s4", title: "Tvorba automatizací", days: 3, text: "Nastavím automatizované sekvence a segmentační pravidla." },
          { _key: "s5", title: "Testování & spuštění", days: 1, text: "Otestujeme doručitelnost, zobrazení v klientech a spustíme." },
        ],
        videoOverline: "Video",
        videoTitle: "Email marketing v praxi",
        videoBody: "Ukázka, jak vypadá profesionální e-mailový systém s automatizacemi.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky e-mailového marketingu",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí nastavení email marketingu",
        cenikSubtitle: "Cena závisí na rozsahu — počet šablon, složitost automatizací, velikost databáze.",
        cenikPriceTitle: "Cena za email marketing",
        cenikPriceLabel: "od 15 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Nastavení platformy", desc: "Konfigurace, domény, DKIM, import kontaktů" },
          { _key: "c2", name: "3 šablony e-mailů", desc: "Newsletter, promo, transakční — v jednotném stylu" },
          { _key: "c3", name: "Welcome sekvence", desc: "Automatická série pro nové odběratele" },
          { _key: "c4", name: "Segmentace databáze", desc: "Rozdělení kontaktů podle chování a zájmů" },
          { _key: "c5", name: "Analytika & reporting", desc: "Nastavení trackingu a reportovacího dashboardu" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Strategický přístup", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Design šablon", scores: [5, 3, 2] },
          { _key: "t3", criterion: "Automatizace", scores: [5, 4, 3] },
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
          { _key: "f1", question: "Jaký e-mailový nástroj doporučujete?", answer: "Pro český trh je skvělý Ecomail — česká podpora, GDPR. Pro pokročilejší automatizace doporučuji ActiveCampaign. Pro začátek stačí Mailchimp. Doporučím optimální řešení po konzultaci." },
          { _key: "f2", question: "Kolik stojí nastavení email marketingu?", answer: "Cena začíná od 15 000 Kč za kompletní nastavení včetně šablon a automatizací. Nezahrnuje měsíční poplatky za platformu — ty platíte přímo poskytovateli. Po briefu obdržíte detailní kalkulaci." },
          { _key: "f3", question: "Kolik e-mailů mám posílat?", answer: "Záleží na vašem odvětví a cílové skupině. Obecně doporučuji 1–2 e-maily týdně pro newsletter plus automatizované sekvence. Klíčem je kvalita obsahu, ne kvantita — lépe jeden hodnotný e-mail než pět prázdných." },
          { _key: "f4", question: "Pomozte i s psaním textů?", answer: "Texty pro automatizované sekvence (welcome, prodejní, follow-up) jsou součástí služby. Pro pravidelné newslettery vás rád nasměruji nebo propojím s copywriterem, se kterým spolupracuji." },
          { _key: "f5", question: "Jak rychle uvidím výsledky?", answer: "Automatizace začnou pracovat ihned po spuštění. Reálný dopad na tržby uvidíte typicky po 4–8 týdnech, kdy se sekvence dostanou k dostatečnému počtu kontaktů. E-mail marketing je dlouhodobá investice s jedním z nejvyšších ROI." },
        ],
      },
    },
  ];
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("\n🛒 Kategorie 7: Online prodej\n");

  const projectIds = await fetchAllProjectIds();
  const toolIds = await fetchAllToolIds();

  console.log(`  📦 Found ${projectIds.length} projects, ${toolIds.length} tools\n`);

  const services = buildServices(projectIds, toolIds);

  for (const svc of services) {
    await createOrUpdateSluzba(svc.slug, svc.data);
  }

  console.log("\n✅ Kategorie 7 hotová!\n");
}

module.exports = main;

if (require.main === module) {
  main().catch((e) => {
    console.error("Error:", e.message);
    process.exit(1);
  });
}
