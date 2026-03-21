const {
  fetchAllProjectIds,
  fetchAllToolIds,
  randomSubset,
  ref,
  createOrUpdateSluzba,
} = require("./_helpers");

const CATEGORY = "webdesign";

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
    // ── 1. Tvorba webu ─────────────────────────────────────────────────
    {
      slug: "tvorba-webu",
      data: {
        name: "Tvorba webu",
        category: CATEGORY,
        categoryOrder: 1,
        heroTitle: "Web, který prodává za vás — 24 hodin denně",
        heroSubheadline:
          "Získejte profesionální web navržený od strategie po spuštění. Responzivní, rychlý, optimalizovaný pro vyhledávače — a hlavně navržený tak, aby přiváděl zákazníky.",
        heroPriceLabel: "Již od 35 000 Kč",
        heroProjectsLabel: "60+ projektů",
        heroDeliveryLabel: "dodání cca 21 dní",
        atomicAnswer:
          "Tvorba webu je kompletní proces návrhu a vývoje webových stránek — od strategie a wireframů přes vizuální design až po kódování a spuštění. Služba je určena firmám, podnikatelům a startupům, které potřebují profesionální web generující obchodní výsledky. Získáte responzivní web optimalizovaný pro mobily, rychlé načítání a SEO. Součástí je UX návrh, grafický design, vývoj a testování. Cena začíná od 35 000 Kč, dodání přibližně 21 pracovních dní. Web navrhuje a realizuje Simon Anfilov z ANFILOV Studia v Praze — 30 let zkušeností v designu a desítky úspěšně spuštěných webů.",
        metaTitle: "Tvorba webu — ANFILOV | Web, který prodává",
        metaDescription:
          "Profesionální tvorba webu od 35 000 Kč. Responzivní design, SEO, rychlé načítání. Dodání do 21 dní. 30 let zkušeností. Chci nabídku →",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Váš web vypadá zastarale a na mobilu se rozpadá — návštěvníci odcházejí dřív, než zjistí, co nabízíte." },
          { _key: "p2", text: "Stránky se načítají pomalu a Google vás za to penalizuje — ztrácíte pozice ve vyhledávání." },
          { _key: "p3", text: "Web nepřivádí zákazníky — nemá jasnou strukturu, chybí výzvy k akci a konverze jsou mizivé." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Web navržený od strategie po pixel",
        reseniItems: [
          { _key: "r1", title: "Strategie a UX návrh", text: "Než začnu designovat, definujeme cíle webu, cílovou skupinu a uživatelské cesty." },
          { _key: "r2", title: "Responzivní design", text: "Web, který vypadá skvěle na desktopu, tabletu i mobilu — bez kompromisů." },
          { _key: "r3", title: "Rychlé načítání", text: "Optimalizovaný kód a správná architektura — web se načte do 2 sekund." },
          { _key: "r4", title: "SEO od základů", text: "Technické SEO, správná struktura nadpisů, meta tagy — Google váš web najde." },
          { _key: "r5", title: "Předání a zaškolení", text: "Kompletní předání s dokumentací a zaškolením pro správu obsahu." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá tvorba webu",
        procesSteps: [
          { _key: "s1", title: "Brief & strategie", days: 2, text: "Definujeme cíle webu, cílovou skupinu, strukturu a klíčové funkcionality." },
          { _key: "s2", title: "Wireframy & UX", days: 3, text: "Navrhnu drátěné modely klíčových stránek — ověříme uživatelské toky." },
          { _key: "s3", title: "Vizuální design", days: 5, text: "Grafický návrh v souladu s vaší značkou — barvy, typografie, komponenty." },
          { _key: "s4", title: "Vývoj & kódování", days: 7, text: "Převedu design do kódu — responzivní, rychlý, přístupný web." },
          { _key: "s5", title: "Testování & launch", days: 3, text: "Otestuji na všech zařízeních, opravím detaily a spustíme web." },
          { _key: "s6", title: "Předání & zaškolení", days: 1, text: "Předám přístupy, dokumentaci a zaškolím vás do správy obsahu." },
        ],
        videoOverline: "Video",
        videoTitle: "Podívejte se, jak vzniká web",
        videoBody: "Krátká ukázka mého procesu tvorby webu — od briefu přes wireframy po finální spuštění.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky webů, které jsem vytvořil",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí tvorba webu",
        cenikSubtitle: "Cena závisí na rozsahu projektu, počtu stránek a požadovaných funkcionalitách.",
        cenikPriceTitle: "Cena za tvorbu webu",
        cenikPriceLabel: "od 35 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Strategie a UX návrh", desc: "Cíle, struktura, uživatelské cesty" },
          { _key: "c2", name: "Wireframy klíčových stránek", desc: "Drátěné modely pro ověření UX" },
          { _key: "c3", name: "Grafický design", desc: "Vizuální návrh v souladu s vaší značkou" },
          { _key: "c4", name: "Responzivní vývoj", desc: "Kódování pro desktop, tablet i mobil" },
          { _key: "c5", name: "SEO optimalizace", desc: "Technické SEO, meta tagy, rychlost" },
          { _key: "c6", name: "Testování a zaškolení", desc: "QA na všech zařízeních + předání s dokumentací" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Strategický přístup", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Kvalita designu", scores: [5, 4, 2] },
          { _key: "t3", criterion: "Rychlost dodání", scores: [4, 3, 5] },
          { _key: "t4", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
          { _key: "t5", criterion: "Osobní komunikace", scores: [5, 2, 3] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(5),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Kolik stojí tvorba webových stránek?", answer: "Cena začíná od 35 000 Kč za kompletní web včetně designu, vývoje a SEO. Finální cena závisí na počtu stránek, funkcionalitách a složitosti projektu. Po úvodním briefu obdržíte přesnou kalkulaci." },
          { _key: "f2", question: "Jak dlouho trvá vytvoření webu?", answer: "Standardní dodání je přibližně 21 pracovních dní. Zahrnuje strategii, wireframy, design, vývoj, testování a spuštění. U jednodušších webů to může být rychlejší, u rozsáhlých projektů delší." },
          { _key: "f3", question: "Budu moci web sám upravovat?", answer: "Ano. Web postavím na redakčním systému, kde snadno změníte texty, obrázky i přidáte nové stránky. Součástí předání je zaškolení, abyste byli soběstační." },
          { _key: "f4", question: "Je v ceně i SEO optimalizace?", answer: "Ano, technické SEO je standardní součástí každého webu. Správná struktura nadpisů, meta tagy, rychlost načítání, responzivita — vše, co Google potřebuje. Obsahovou SEO strategii řeším jako doplňkovou službu." },
          { _key: "f5", question: "Co když potřebuji e-shop, ne jen web?", answer: "E-shop je specifický typ webu s vlastními požadavky. Nabízím i tvorbu e-shopů — kontaktujte mě pro individuální nabídku. Základní prezentační web s jednoduchým prodejem lze řešit i v rámci standardní tvorby webu." },
        ],
      },
    },

    // ── 2. Redesign webu ───────────────────────────────────────────────
    {
      slug: "redesign-webu",
      data: {
        name: "Redesign webu",
        category: CATEGORY,
        categoryOrder: 2,
        heroTitle: "Modernizujte web bez ztráty pozic ve vyhledávačích",
        heroSubheadline:
          "Váš web sloužil dobře, ale trh se posunul. Redesign přinese moderní design, lepší UX a vyšší konverze — a zároveň zachová SEO equity, kterou jste budovali roky.",
        heroPriceLabel: "Již od 30 000 Kč",
        heroProjectsLabel: "50+ redesignů",
        heroDeliveryLabel: "dodání cca 18 dní",
        atomicAnswer:
          "Redesign webu je modernizace stávajících webových stránek — nový vizuální design, vylepšená uživatelská zkušenost a aktualizovaná technologie, přičemž se zachovávají SEO pozice a rozpoznatelnost značky. Služba zahrnuje audit stávajícího webu, UX analýzu, nový design, vývoj a migraci obsahu. Cena začíná od 30 000 Kč, dodání přibližně 18 pracovních dní. Redesign provádí Simon Anfilov z ANFILOV Studia v Praze — 30 let zkušeností v designu, desítky úspěšných redesignů.",
        metaTitle: "Redesign webu — ANFILOV | Moderní web, silné SEO",
        metaDescription:
          "Profesionální redesign webu od 30 000 Kč. Moderní design, lepší UX, zachované SEO. Dodání do 18 dní. 50+ úspěšných redesignů.",
        problemOverline: "Problém",
        problemTitle: "Kdy je čas na redesign webu?",
        problemItems: [
          { _key: "p1", text: "Web vypadá zastarale a neodpovídá současné kvalitě vašich služeb — návštěvníci vás berou méně vážně." },
          { _key: "p2", text: "Uživatelé se na webu ztrácejí, bounce rate roste a konverze klesají — špatné UX vás stojí zákazníky." },
          { _key: "p3", text: "Web je pomalý, nefunguje na mobilech a technologie je zastaralá — údržba je drahá a složitá." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Evoluce webu, ne revoluce",
        reseniItems: [
          { _key: "r1", title: "Audit stávajícího webu", text: "Analyzuji, co funguje a co ne — data z analytics, heatmapy, uživatelské testy." },
          { _key: "r2", title: "Zachování SEO equity", text: "Pečlivé přesměrování URL, migrace obsahu a zachování pozic ve vyhledávačích." },
          { _key: "r3", title: "Moderní UX design", text: "Nová informační architektura, lepší navigace a jasné konverzní cesty." },
          { _key: "r4", title: "Responzivní vývoj", text: "Aktuální technologie, rychlé načítání a bezchybné zobrazení na všech zařízeních." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá redesign",
        procesSteps: [
          { _key: "s1", title: "Audit & analýza", days: 3, text: "Zhodnotím stávající web — analytics, UX, SEO, technický stav." },
          { _key: "s2", title: "Strategie & wireframy", days: 3, text: "Nová informační architektura a drátěné modely klíčových stránek." },
          { _key: "s3", title: "Vizuální design", days: 4, text: "Moderní grafický návrh, který respektuje vaši značku." },
          { _key: "s4", title: "Vývoj & migrace", days: 6, text: "Kódování nového webu a migrace obsahu ze stávajícího." },
          { _key: "s5", title: "Testování & launch", days: 2, text: "QA, kontrola přesměrování, spuštění a monitoring." },
        ],
        videoOverline: "Video",
        videoTitle: "Redesign webu v praxi",
        videoBody: "Podívejte se, jak vypadá profesionální redesign webu krok za krokem.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky redesignů webů",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí redesign webu",
        cenikSubtitle: "Cena závisí na rozsahu stávajícího webu a míře požadovaných změn.",
        cenikPriceTitle: "Cena za redesign webu",
        cenikPriceLabel: "od 30 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Audit stávajícího webu", desc: "UX, SEO a technická analýza" },
          { _key: "c2", name: "Nový UX a wireframy", desc: "Informační architektura a drátěné modely" },
          { _key: "c3", name: "Vizuální redesign", desc: "Moderní grafický design v souladu se značkou" },
          { _key: "c4", name: "Vývoj a migrace obsahu", desc: "Kódování + přenos stávajícího obsahu" },
          { _key: "c5", name: "SEO migrace", desc: "Přesměrování URL a zachování pozic" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Zachování SEO pozic", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Kvalita UX designu", scores: [5, 4, 2] },
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
          { _key: "f1", question: "Kolik stojí redesign webových stránek?", answer: "Redesign webu začíná od 30 000 Kč. Finální cena závisí na rozsahu stávajícího webu, počtu stránek a požadovaných změnách. Po auditu stávajícího webu obdržíte přesnou kalkulaci." },
          { _key: "f2", question: "Nepřijdu redesignem o pozice v Googlu?", answer: "Ne, pokud se redesign provede správně. Součástí mé práce je SEO migrace — pečlivé přesměrování URL, zachování meta dat a monitoring pozic po spuštění. Cílem je pozice udržet nebo zlepšit." },
          { _key: "f3", question: "Jak dlouho trvá redesign webu?", answer: "Standardní redesign trvá přibližně 18 pracovních dní. Zahrnuje audit, wireframy, design, vývoj, migraci a testování. U rozsáhlých webů to může být delší." },
          { _key: "f4", question: "Můžete redesignovat web na jiné technologii?", answer: "Ano, migrace na modernější platformu je častou součástí redesignu. Obsah přenesu, URL přesměruji a zajistím plynulý přechod bez výpadku." },
          { _key: "f5", question: "Stačí redesign, nebo potřebuji úplně nový web?", answer: "Závisí na technickém stavu. Pokud je kód zastaralý a neudržovatelný, může být nový web efektivnější. Při auditu vám řeknu, co dává smysl — redesign nebo nový web od nuly." },
        ],
      },
    },

    // ── 3. UI kit / Design systém ──────────────────────────────────────
    {
      slug: "ui-kit-design-system",
      data: {
        name: "UI kit / Design systém",
        category: CATEGORY,
        categoryOrder: 3,
        heroTitle: "Komponentová knihovna pro konzistentní digitální produkty",
        heroSubheadline:
          "Zrychlíte vývoj, snížíte designový dluh a zajistíte, že každá stránka a obrazovka vypadá jako součást jednoho celku. Design systém je investice, která se vrátí.",
        heroPriceLabel: "Již od 25 000 Kč",
        heroProjectsLabel: "30+ projektů",
        heroDeliveryLabel: "dodání cca 14 dní",
        atomicAnswer:
          "UI kit nebo design systém je knihovna opakovaně použitelných komponent — tlačítek, formulářů, karet, navigací a dalších prvků — s jasně definovanými pravidly použití. Zajišťuje konzistentní design napříč celým digitálním produktem a výrazně zrychluje vývoj. Služba zahrnuje audit stávajícího UI, návrh komponent, dokumentaci a implementační podklady. Cena začíná od 25 000 Kč, dodání přibližně 14 pracovních dní. Systém navrhuje Simon Anfilov z ANFILOV Studia v Praze — 30 let designových zkušeností.",
        metaTitle: "UI kit & design systém — ANFILOV | Konzistentní UI",
        metaDescription:
          "Profesionální UI kit a design systém od 25 000 Kč. Zrychlete vývoj a zajistěte konzistentní UI. Dodání do 14 dní.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte tyto problémy?",
        problemItems: [
          { _key: "p1", text: "Každá stránka vypadá trochu jinak — nekonzistentní barvy, rozestupy, velikosti tlačítek." },
          { _key: "p2", text: "Vývoj nových funkcí trvá věčně, protože designéři i vývojáři pokaždé vymýšlejí kolo znovu." },
          { _key: "p3", text: "Designový dluh narůstá — opravy jednoho prvku rozbijí tři další." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Systém, který šetří čas i peníze",
        reseniItems: [
          { _key: "r1", title: "Audit stávajícího UI", text: "Zmapuji všechny existující komponenty a identifikuji nekonzistence." },
          { _key: "r2", title: "Komponentová knihovna", text: "Definuji základní atomy (barvy, typo, ikony) a složitější molekuly (karty, formuláře, navigace)." },
          { _key: "r3", title: "Design tokeny", text: "Barvy, rozestupy, velikosti — vše definované jako tokeny pro snadnou implementaci." },
          { _key: "r4", title: "Dokumentace a pravidla", text: "Každá komponenta má popis, varianty, stavy a příklady správného použití." },
          { _key: "r5", title: "Figma knihovna", text: "Sdílená Figma library s auto-layout komponentami připravenými pro váš tým." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak vzniká design systém",
        procesSteps: [
          { _key: "s1", title: "Audit & inventář", days: 2, text: "Zmapuji stávající UI prvky a identifikuji nekonzistence a duplikáty." },
          { _key: "s2", title: "Design tokeny", days: 2, text: "Definuji základní proměnné — barvy, typografie, rozestupy, stíny." },
          { _key: "s3", title: "Návrh komponent", days: 5, text: "Navrhnu jednotlivé komponenty s variantami a stavy." },
          { _key: "s4", title: "Dokumentace", days: 3, text: "Popíšu pravidla použití, příklady a edge cases." },
          { _key: "s5", title: "Předání & workshop", days: 2, text: "Předám Figma knihovnu a provedu workshop pro váš tým." },
        ],
        videoOverline: "Video",
        videoTitle: "Design systém v praxi",
        videoBody: "Ukázka, jak design systém zrychluje práci a zajišťuje konzistenci.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky design systémů",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí design systém",
        cenikSubtitle: "Cena závisí na rozsahu produktu a počtu komponent, které je potřeba pokrýt.",
        cenikPriceTitle: "Cena za design systém",
        cenikPriceLabel: "od 25 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Audit stávajícího UI", desc: "Inventář komponent a identifikace nekonzistencí" },
          { _key: "c2", name: "Design tokeny", desc: "Barvy, typografie, rozestupy jako proměnné" },
          { _key: "c3", name: "Komponentová knihovna", desc: "Klíčové komponenty s variantami a stavy" },
          { _key: "c4", name: "Dokumentace", desc: "Pravidla použití a příklady pro každou komponentu" },
          { _key: "c5", name: "Figma library", desc: "Sdílená knihovna s auto-layout komponentami" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Praktická použitelnost", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Kvalita dokumentace", scores: [5, 4, 1] },
          { _key: "t3", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
          { _key: "t4", criterion: "Zkušenosti s implementací", scores: [5, 3, 1] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(5),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Co je to design systém a k čemu slouží?", answer: "Design systém je knihovna opakovaně použitelných UI komponent s definovanými pravidly. Zajišťuje, že celý digitální produkt vypadá konzistentně, a výrazně zrychluje design i vývoj nových funkcí." },
          { _key: "f2", question: "Kolik stojí vytvoření design systému?", answer: "Cena začíná od 25 000 Kč a závisí na rozsahu produktu a počtu komponent. Základní UI kit je levnější, kompletní design systém s dokumentací a tokeny stojí více. Po konzultaci obdržíte přesnou nabídku." },
          { _key: "f3", question: "Jak dlouho trvá vytvoření UI kitu?", answer: "Základní UI kit připravím za 10–14 pracovních dní. Zahrnuje audit, návrh komponent, dokumentaci a předání Figma knihovny. Rozsáhlejší systémy mohou trvat déle." },
          { _key: "f4", question: "Potřebuji design systém, i když mám malý web?", answer: "I malý web profituje ze základního UI kitu — zajistí konzistenci a usnadní budoucí rozšíření. Plný design systém se vyplatí hlavně u větších produktů s více stránkami nebo aplikací." },
          { _key: "f5", question: "V čem design systém dodáváte?", answer: "Standardně jako sdílenou Figma knihovnu s auto-layout komponentami. Na přání mohu dodat i specifikaci design tokenů ve formátu JSON pro přímou implementaci do kódu." },
        ],
      },
    },

    // ── 4. Wireframing a prototyping ───────────────────────────────────
    {
      slug: "wireframing-prototyping",
      data: {
        name: "Wireframing a prototyping",
        category: CATEGORY,
        categoryOrder: 4,
        heroTitle: "Ověřte koncept dřív, než investujete do vývoje",
        heroSubheadline:
          "UX wireframy a interaktivní prototypy odhalí problémy v rané fázi, kdy je oprava levná. Stavíte na ověřených základech, ne na domněnkách.",
        heroPriceLabel: "Již od 15 000 Kč",
        heroProjectsLabel: "40+ projektů",
        heroDeliveryLabel: "dodání cca 10 dní",
        atomicAnswer:
          "Wireframing a prototyping je proces návrhu drátěných modelů a interaktivních prototypů webových stránek nebo aplikací. Wireframy definují strukturu, rozložení obsahu a uživatelské toky ještě před vizuálním designem. Prototyp umožňuje otestovat koncept s reálnými uživateli. Služba zahrnuje analýzu požadavků, wireframy klíčových stránek, interaktivní prototyp a uživatelské testování. Cena od 15 000 Kč, dodání přibližně 10 pracovních dní. Navrhuje Simon Anfilov, ANFILOV Studio Praha.",
        metaTitle: "Wireframing & prototyping — ANFILOV | UX návrhy",
        metaDescription:
          "Profesionální wireframy a prototypy od 15 000 Kč. Ověřte koncept před vývojem. Dodání do 10 dní. Ušetříte čas i peníze.",
        problemOverline: "Problém",
        problemTitle: "Proč stavět bez plánu nedává smysl?",
        problemItems: [
          { _key: "p1", text: "Stavíte web nebo aplikaci rovnou v designu — změny jsou drahé a zdržují celý projekt." },
          { _key: "p2", text: "Uživatelské toky nejsou promyšlené — návštěvníci se na webu ztrácejí a nedokončí konverzi." },
          { _key: "p3", text: "Tým se neshodne na struktuře a funkcionalitách — bez wireframů každý vidí výsledek jinak." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Wireframy a prototypy, které šetří peníze",
        reseniItems: [
          { _key: "r1", title: "Wireframy klíčových stránek", text: "Drátěné modely definují strukturu, hierarchii a rozložení obsahu." },
          { _key: "r2", title: "Interaktivní prototyp", text: "Klikací prototyp, ve kterém si projdete uživatelské cesty jako na hotovém webu." },
          { _key: "r3", title: "Uživatelské testování", text: "Otestuji prototyp s reálnými uživateli a identifikuji problémová místa." },
          { _key: "r4", title: "UX dokumentace", text: "Anotované wireframy s popisem funkcionalit pro vývojáře." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá wireframing",
        procesSteps: [
          { _key: "s1", title: "Analýza požadavků", days: 1, text: "Definujeme cíle, cílovou skupinu a klíčové uživatelské scénáře." },
          { _key: "s2", title: "Informační architektura", days: 2, text: "Navrhuji strukturu webu — sitemap, navigace, hierarchie obsahu." },
          { _key: "s3", title: "Wireframy", days: 3, text: "Vytvořím drátěné modely klíčových stránek s anotacemi." },
          { _key: "s4", title: "Interaktivní prototyp", days: 2, text: "Propojím wireframy do klikacího prototypu." },
          { _key: "s5", title: "Testování & iterace", days: 2, text: "Otestuji s uživateli, zapracuji zpětnou vazbu a finalizuji." },
        ],
        videoOverline: "Video",
        videoTitle: "Od wireframu k prototypu",
        videoBody: "Ukázka procesu — jak z drátěného modelu vzniká interaktivní prototyp.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky wireframů a prototypů",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí wireframing a prototyping",
        cenikSubtitle: "Cena závisí na počtu stránek, složitosti uživatelských toků a hloubce testování.",
        cenikPriceTitle: "Cena za wireframy a prototyp",
        cenikPriceLabel: "od 15 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Informační architektura", desc: "Sitemap a struktura webu" },
          { _key: "c2", name: "Wireframy klíčových stránek", desc: "Drátěné modely s anotacemi" },
          { _key: "c3", name: "Interaktivní prototyp", desc: "Klikací prototyp pro testování" },
          { _key: "c4", name: "UX dokumentace", desc: "Popis funkcionalit pro vývojáře" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "UX zkušenosti", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Rychlost dodání", scores: [4, 3, 5] },
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
          { _key: "f1", question: "Co je to wireframe a k čemu slouží?", answer: "Wireframe je drátěný model stránky, který definuje rozložení obsahu, navigaci a uživatelské toky bez vizuálního designu. Slouží k ověření struktury a funkcionality ještě před investicí do grafiky a vývoje." },
          { _key: "f2", question: "Jaký je rozdíl mezi wireframem a prototypem?", answer: "Wireframe je statický drátěný model — ukazuje rozložení obsahu na stránce. Prototyp je interaktivní — můžete si v něm klikat, procházet stránky a simulovat reálné uživatelské cesty. Prototyp se testuje s uživateli." },
          { _key: "f3", question: "Kolik stojí wireframing webu?", answer: "Cena začíná od 15 000 Kč a závisí na počtu stránek a složitosti uživatelských toků. Základní wireframy pro 5–7 stránek jsou levnější, komplexní prototyp s testováním stojí více." },
          { _key: "f4", question: "Můžu wireframy použít pro briefování vývojářů?", answer: "Ano, přesně k tomu slouží. Wireframy s anotacemi jasně definují, co má vývojář postavit — rozložení, funkcionality, interakce. Výrazně redukují nedorozumění a předělávky." },
        ],
      },
    },

    // ── 5. Microsite / One-page web ────────────────────────────────────
    {
      slug: "microsite-one-page",
      data: {
        name: "Microsite / One-page web",
        category: CATEGORY,
        categoryOrder: 5,
        heroTitle: "Jednoduchý web, který jde rovnou k věci",
        heroSubheadline:
          "Potřebujete rychle webovou prezentaci pro kampaň, produkt nebo event? One-page web je elegantní, rychlý a soustředěný na jeden cíl — konverzi.",
        heroPriceLabel: "Již od 18 000 Kč",
        heroProjectsLabel: "35+ projektů",
        heroDeliveryLabel: "dodání cca 10 dní",
        atomicAnswer:
          "Microsite nebo one-page web je jednoduchá jednostránková prezentace zaměřená na konkrétní cíl — propagaci produktu, kampaně, eventu nebo služby. Na rozdíl od klasického webu jde přímo k věci a maximalizuje konverze. Služba zahrnuje strategii, design, vývoj a optimalizaci. Získáte responzivní landing page s jasnou strukturou, rychlým načítáním a integrací formulářů nebo platební brány. Cena od 18 000 Kč, dodání přibližně 10 pracovních dní. Navrhuje Simon Anfilov, ANFILOV Studio Praha.",
        metaTitle: "Microsite & one-page web — ANFILOV | Rychlý web",
        metaDescription:
          "Microsite a one-page web od 18 000 Kč. Rychlá webová prezentace pro kampaně a produkty. Dodání do 10 dní. Jde rovnou k věci.",
        problemOverline: "Problém",
        problemTitle: "Potřebujete web rychle a jednoduše?",
        problemItems: [
          { _key: "p1", text: "Potřebujete webovou prezentaci pro kampaň nebo event, ale nemáte čas na měsíce vývoje." },
          { _key: "p2", text: "Klasický web je pro váš účel předimenzovaný — potřebujete jednu stránku, která prodá." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "One-page web zaměřený na výsledek",
        reseniItems: [
          { _key: "r1", title: "Jasná struktura", text: "Jedna stránka s logickou návazností sekcí — od problému přes řešení k výzvě k akci." },
          { _key: "r2", title: "Konverzní optimalizace", text: "Strategicky umístěné CTA, formuláře a sociální důkazy pro maximální konverze." },
          { _key: "r3", title: "Bleskové načítání", text: "Jednoduchá architektura = rychlý web. Pod 1,5 sekundy na mobilu." },
          { _key: "r4", title: "Responzivní design", text: "Skvělý vzhled na všech zařízeních — od mobilu po desktop." },
          { _key: "r5", title: "Integrace a analytika", text: "Napojení na formuláře, e-mail marketing, platební brány a Google Analytics." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak vzniká one-page web",
        procesSteps: [
          { _key: "s1", title: "Brief & obsah", days: 1, text: "Definujeme cíl stránky, cílovou skupinu a připravíme obsah." },
          { _key: "s2", title: "Wireframe", days: 2, text: "Navrhnu strukturu a rozložení sekcí pro maximální konverzi." },
          { _key: "s3", title: "Vizuální design", days: 3, text: "Grafický návrh v souladu s vaší značkou nebo kampaní." },
          { _key: "s4", title: "Vývoj & integrace", days: 3, text: "Kódování, napojení formulářů, analytiky a dalších nástrojů." },
          { _key: "s5", title: "Launch", days: 1, text: "Testování, spuštění a kontrola funkčnosti." },
        ],
        videoOverline: "Video",
        videoTitle: "One-page web v praxi",
        videoBody: "Ukázka tvorby micrositu — od konceptu po spuštění během 10 dní.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky micrositů a landing pages",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí microsite",
        cenikSubtitle: "Cena závisí na délce stránky, požadovaných integracích a složitosti designu.",
        cenikPriceTitle: "Cena za microsite / one-page web",
        cenikPriceLabel: "od 18 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Wireframe a struktura", desc: "Rozložení sekcí optimalizované pro konverze" },
          { _key: "c2", name: "Responzivní design", desc: "Grafický návrh pro desktop i mobil" },
          { _key: "c3", name: "Vývoj a kódování", desc: "Rychlý, čistý kód s optimalizací" },
          { _key: "c4", name: "Integrace formulářů", desc: "Kontaktní formulář nebo napojení na e-mail marketing" },
          { _key: "c5", name: "Analytika", desc: "Google Analytics, tracking konverzí" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Konverzní design", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Rychlost dodání", scores: [5, 3, 4] },
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
          { _key: "f1", question: "Kolik stojí jednoduchý one-page web?", answer: "Cena začíná od 18 000 Kč za kompletní one-page web včetně designu, vývoje a základních integrací. Finální cena závisí na délce stránky a požadovaných funkcionalitách." },
          { _key: "f2", question: "Jak rychle může být one-page web hotový?", answer: "Standardní dodání je přibližně 10 pracovních dní. U urgentních projektů je možné expresní zpracování do 5–7 dní po domluvě." },
          { _key: "f3", question: "Jaký je rozdíl mezi micrositem a klasickým webem?", answer: "Microsite je jednoduchý jednostránkový web zaměřený na jeden cíl — propagaci produktu, kampaně nebo eventu. Klasický web má více stránek a slouží jako komplexní prezentace firmy. Microsite je rychlejší na realizaci a levnější." },
          { _key: "f4", question: "Lze microsite později rozšířit na plnohodnotný web?", answer: "Ano, microsite může sloužit jako základ. Pokud se projekt rozroste, můžeme přidat další stránky a funkcionality. Stavím microsite na technologiích, které umožňují snadné rozšíření." },
          { _key: "f5", question: "Můžete napojit microsite na e-mail marketing?", answer: "Ano, standardně integruji napojení na Mailchimp, Ecomail nebo jiný e-mail marketing nástroj. Formulář na micrositu tak automaticky přidává kontakty do vaší databáze." },
        ],
      },
    },
  ];
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("\n🌐 Kategorie 2: Webdesign\n");

  const projectIds = await fetchAllProjectIds();
  const toolIds = await fetchAllToolIds();

  console.log(`  📦 Found ${projectIds.length} projects, ${toolIds.length} tools\n`);

  const services = buildServices(projectIds, toolIds);

  for (const svc of services) {
    await createOrUpdateSluzba(svc.slug, svc.data);
  }

  console.log("\n✅ Kategorie 2 hotová!\n");
}

module.exports = main;

if (require.main === module) {
  main().catch((e) => {
    console.error("Error:", e.message);
    process.exit(1);
  });
}
