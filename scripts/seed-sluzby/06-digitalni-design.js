const {
  fetchAllProjectIds,
  fetchAllToolIds,
  randomSubset,
  ref,
  createOrUpdateSluzba,
} = require("./_helpers");

const CATEGORY = "digitalni-design";

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
    // ── 1. Newsletter design ──────────────────────────────────────────
    {
      slug: "newsletter-design",
      data: {
        name: "Newsletter design",
        category: CATEGORY,
        categoryOrder: 1,
        heroTitle: "Newslettery, které lidé otevírají a proklikávají",
        heroSubheadline:
          "Většina newsletterů končí v koši. Ten váš ne. Navrhnu e-mailové šablony, které vypadají profesionálně, fungují na všech zařízeních a motivují ke kliknutí.",
        heroPriceLabel: "Již od 5 000 Kč",
        heroProjectsLabel: "30+ projektů",
        heroDeliveryLabel: "dodání cca 5 dní",
        atomicAnswer:
          "Newsletter design je návrh e-mailových šablon optimalizovaných pro vysoký open rate a click-through rate. Služba zahrnuje design responzivní šablony, kódování pro všechny e-mailové klienty a přípravu editovatelných bloků pro snadnou správu. Výstupem je šablona připravená pro Mailchimp, Ecomail nebo jiný nástroj. Cena od 5 000 Kč, dodání do 5 pracovních dní. Navrhuje Simon Anfilov z ANFILOV Studia v Praze, designer s 30+ lety zkušeností.",
        metaTitle: "Newsletter design — ANFILOV | E-maily, které konvertují",
        metaDescription:
          "Profesionální design newsletterů od 5 000 Kč. Responzivní šablony pro Mailchimp, Ecomail a další. Dodání do 5 dní. 30+ let zkušeností.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Vaše newslettery vypadají amatérsky — nízký open rate a minimální prokliky." },
          { _key: "p2", text: "Šablona se rozpadá na mobilu nebo v Outlooku — obsah je nečitelný a tlačítka nefungují." },
          { _key: "p3", text: "Každý newsletter tvoříte od nuly, protože nemáte konzistentní šablonu v souladu s vaší značkou." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Šablony, které fungují technicky i vizuálně",
        reseniItems: [
          { _key: "r1", title: "Responzivní design", text: "Newsletter vypadá skvěle na desktopu, tabletu i mobilu — v každém e-mailovém klientu." },
          { _key: "r2", title: "Modulární bloky", text: "Editovatelné sekce, které si váš tým snadno přeskládá — žádné kódování." },
          { _key: "r3", title: "Optimalizace pro konverze", text: "CTA tlačítka, vizuální hierarchie a layout navržený tak, aby čtenář klikl." },
          { _key: "r4", title: "Integrace s vaším nástrojem", text: "Šablona připravená pro Mailchimp, Ecomail, Brevo nebo jiný nástroj, který používáte." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & analýza", days: 1, text: "Zjistím, jaký obsah posíláte, komu a jaké nástroje používáte." },
          { _key: "s2", title: "Návrh šablony", days: 2, text: "Navrhnu layout a vizuální styl v souladu s vaší značkou." },
          { _key: "s3", title: "Kódování & testování", days: 1, text: "Šablonu nakóduji a otestuji ve všech hlavních e-mailových klientech." },
          { _key: "s4", title: "Předání & zaškolení", days: 1, text: "Nahraji šablonu do vašeho nástroje a ukážu vám, jak s ní pracovat." },
        ],
        videoOverline: "Video",
        videoTitle: "Jak vypadá profesionální newsletter",
        videoBody: "Ukázka procesu návrhu e-mailové šablony od briefu po finální předání.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky newsletterových šablon",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí newsletter design",
        cenikSubtitle: "Cena závisí na složitosti šablony a počtu modulárních bloků.",
        cenikPriceTitle: "Cena za newsletter šablonu",
        cenikPriceLabel: "od 5 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Responzivní design šablony", desc: "Návrh optimalizovaný pro všechna zařízení" },
          { _key: "c2", name: "HTML kódování", desc: "Kompatibilita se všemi hlavními e-mailovými klienty" },
          { _key: "c3", name: "Modulární bloky", desc: "Editovatelné sekce pro snadnou správu obsahu" },
          { _key: "c4", name: "Integrace s nástrojem", desc: "Nahrání do Mailchimpu, Ecomailu nebo jiného nástroje" },
          { _key: "c5", name: "Testování", desc: "Kontrola zobrazení v Outlooku, Gmailu, Apple Mail" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Vizuální kvalita", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Technická kompatibilita", scores: [5, 4, 2] },
          { _key: "t3", criterion: "Rychlost dodání", scores: [5, 3, 4] },
          { _key: "t4", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(5),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Kolik stojí design newsletteru?", answer: "Cena začíná od 5 000 Kč za jednu responzivní šablonu s modulárními bloky. Finální cena závisí na počtu sekcí a složitosti designu. Po briefu obdržíte přesnou cenovou nabídku." },
          { _key: "f2", question: "Pro jaké nástroje šablonu připravíte?", answer: "Pracuji s Mailchimp, Ecomail, Brevo (ex Sendinblue), ActiveCampaign a dalšími. Pokud používáte jiný nástroj, řeknete mi a přizpůsobím výstup." },
          { _key: "f3", question: "Bude newsletter fungovat v Outlooku?", answer: "Ano. Každou šablonu testuji v Outlooku, Gmailu, Apple Mail, Yahoo a dalších klientech. Outlook je notoricky problematický, proto mu věnuji zvláštní pozornost." },
          { _key: "f4", question: "Mohu si šablonu sám upravovat?", answer: "Ano, to je celý smysl. Šablona je navržená tak, abyste snadno měnili texty, obrázky a odkazy bez jakéhokoli kódování. Součástí dodávky je krátké zaškolení." },
        ],
      },
    },

    // ── 2. Infografiky ──────────────────────────────────────────────────
    {
      slug: "infografiky",
      data: {
        name: "Infografiky",
        category: CATEGORY,
        categoryOrder: 2,
        heroTitle: "Složitá data přeměníme na srozumitelný příběh",
        heroSubheadline:
          "Čísla a statistiky nikoho nenadchnou — dokud je nepřevedete do vizuální podoby. Navrhnu infografiky, které vaše publikum pochopí na první pohled a bude je sdílet dál.",
        heroPriceLabel: "Již od 6 000 Kč",
        heroProjectsLabel: "25+ projektů",
        heroDeliveryLabel: "dodání cca 7 dní",
        atomicAnswer:
          "Infografika je vizuální zpracování dat, statistik nebo procesů do přehledné a sdílitelné grafické podoby. Služba zahrnuje analýzu dat, návrh vizuální struktury, design a přípravu souborů pro web i tisk. Výstupem je infografika v PNG, SVG a PDF. Cena od 6 000 Kč, dodání do 7 pracovních dní. Navrhuje Simon Anfilov z ANFILOV Studia v Praze, grafický designer s 30+ lety praxe.",
        metaTitle: "Infografiky — ANFILOV | Data jako vizuální příběh",
        metaDescription:
          "Profesionální infografiky od 6 000 Kč. Převeďte složitá data do srozumitelné vizuální podoby. Dodání do 7 dní. 30+ let zkušeností.",
        problemOverline: "Problém",
        problemTitle: "Proč nikdo nečte vaše reporty?",
        problemItems: [
          { _key: "p1", text: "Máte cenná data, ale ve formě tabulek a textů je nikdo nečte ani nesdílí." },
          { _key: "p2", text: "Prezentace plné grafů z Excelu vypadají neprofesionálně a nudí publikum." },
          { _key: "p3", text: "Konkurence publikuje atraktivní infografiky a vy zaostáváte v content marketingu." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Data, která zaujmou a přesvědčí",
        reseniItems: [
          { _key: "r1", title: "Analýza a strukturování dat", text: "Pomohu vám vybrat klíčová data a sestavit logický příběh, který čtenáře provede." },
          { _key: "r2", title: "Vizuální hierarchie", text: "Nejdůležitější informace vyniknou na první pohled — žádné hledání jehly v kupce sena." },
          { _key: "r3", title: "Design v souladu se značkou", text: "Infografika ladí s vaší vizuální identitou — barvy, typografie, styl ilustrací." },
          { _key: "r4", title: "Formáty pro web i tisk", text: "Výstup připravený pro sociální sítě, blog, prezentace i tiskové materiály." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & data", days: 1, text: "Dodáte mi surová data a já identifikuji klíčové sdělení a cílovou skupinu." },
          { _key: "s2", title: "Struktura & wireframe", days: 2, text: "Navrhnu logickou strukturu infografiky a rozložení informací." },
          { _key: "s3", title: "Vizuální design", days: 3, text: "Zpracuji finální design s ikonami, grafy a vizuálními prvky." },
          { _key: "s4", title: "Revize & předání", days: 1, text: "Doladíme detaily a předám soubory ve všech potřebných formátech." },
        ],
        videoOverline: "Video",
        videoTitle: "Infografiky v praxi",
        videoBody: "Podívejte se, jak z tabulky plné čísel vznikne infografika, kterou lidé sdílejí.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky infografik",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí infografika",
        cenikSubtitle: "Cena závisí na rozsahu dat a složitosti vizualizace.",
        cenikPriceTitle: "Cena za infografiku",
        cenikPriceLabel: "od 6 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Analýza a strukturování dat", desc: "Výběr klíčových dat a logický příběh" },
          { _key: "c2", name: "Vizuální design infografiky", desc: "Profesionální layout s ikonami a grafy" },
          { _key: "c3", name: "2 kola revizí", desc: "Doladění obsahu a vizuálu" },
          { _key: "c4", name: "Soubory pro web i tisk", desc: "PNG, SVG, PDF v potřebných rozměrech" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Vizuální kvalita", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Srozumitelnost dat", scores: [5, 4, 2] },
          { _key: "t3", criterion: "Rychlost dodání", scores: [4, 3, 5] },
          { _key: "t4", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(5),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Kolik stojí infografika?", answer: "Cena začíná od 6 000 Kč za jednu infografiku. Finální cena závisí na množství dat, složitosti vizualizace a počtu výstupních formátů. Po dodání dat obdržíte přesnou nabídku." },
          { _key: "f2", question: "V jakých formátech infografiku dostanu?", answer: "Standardně PNG pro web a sociální sítě, SVG pro škálování a PDF pro tisk. Na přání připravím i verze optimalizované pro konkrétní platformy (Instagram stories, LinkedIn post apod.)." },
          { _key: "f3", question: "Potřebuji mít data připravená?", answer: "Ideálně ano — stačí tabulka v Excelu nebo Google Sheets. Pokud máte surová data bez struktury, pomohu vám identifikovat klíčové informace a sestavit příběh." },
          { _key: "f4", question: "Děláte i animované infografiky?", answer: "Na vyžádání ano. Animovaná infografika (video nebo GIF) je ideální pro sociální sítě. Cena a čas dodání jsou vyšší než u statické verze — domluvíme se na briefu." },
        ],
      },
    },

    // ── 3. Ilustrace a ikony na zakázku ─────────────────────────────────
    {
      slug: "ilustrace-ikony",
      data: {
        name: "Ilustrace a ikony na zakázku",
        category: CATEGORY,
        categoryOrder: 3,
        heroTitle: "Vlastní ilustrace a ikony, které podtrhnou vaši značku",
        heroSubheadline:
          "Generické stock ilustrace vaši značku oslabují. Navrhnu unikátní ilustrace a sady ikon ve stylu, který je jen váš — konzistentní, rozpoznatelný a profesionální.",
        heroPriceLabel: "Již od 8 000 Kč",
        heroProjectsLabel: "35+ projektů",
        heroDeliveryLabel: "dodání cca 10 dní",
        atomicAnswer:
          "Ilustrace a ikony na zakázku jsou unikátní vizuální prvky navržené v souladu s vaší značkou. Služba zahrnuje definici ilustračního stylu, návrh sady ikon nebo ilustrací, vektorizaci a přípravu souborů pro web i tisk. Výstupem jsou SVG ikony, vektorové ilustrace a pravidla jejich použití. Cena od 8 000 Kč, dodání do 10 pracovních dní. Navrhuje Simon Anfilov, ANFILOV Studio Praha, 30+ let praxe v grafickém designu.",
        metaTitle: "Ilustrace & ikony na zakázku — ANFILOV | Unikátní vizuál",
        metaDescription:
          "Zakázkové ilustrace a ikony od 8 000 Kč. Unikátní styl v souladu s vaší značkou. SVG, vektory, kompletní sady. 30+ let zkušeností.",
        problemOverline: "Problém",
        problemTitle: "Proč generické ikony nestačí?",
        problemItems: [
          { _key: "p1", text: "Stock ilustrace a ikony používá každý — vaše značka vypadá jako tisíc dalších." },
          { _key: "p2", text: "Míchání různých stylů ikon na webu a v materiálech působí chaoticky a neprofesionálně." },
          { _key: "p3", text: "Potřebujete specifické ilustrace pro svůj produkt, ale žádný stock je nenabízí." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Vizuální jazyk, který je jen váš",
        reseniItems: [
          { _key: "r1", title: "Definice ilustračního stylu", text: "Společně nastavíme vizuální jazyk — styl čar, barvy, úroveň detailu, nálada." },
          { _key: "r2", title: "Sada konzistentních ikon", text: "Ikony navržené jako systém — stejná tloušťka čar, proporce a styl napříč celou sadou." },
          { _key: "r3", title: "Unikátní ilustrace", text: "Ilustrace navržené přesně pro váš kontext — produkt, služba, příběh, hodnoty." },
          { _key: "r4", title: "Škálovatelné vektory", text: "Vše v SVG a AI — od ikony 16×16 px po velkoformátový tisk bez ztráty kvality." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & moodboard", days: 2, text: "Definujeme vizuální styl, účel a rozsah sady ilustrací nebo ikon." },
          { _key: "s2", title: "Skici & koncepty", days: 3, text: "Připravím první skici a vzorové ikony ke schválení stylu." },
          { _key: "s3", title: "Vektorizace & detaily", days: 3, text: "Zpracuji kompletní sadu ve vektorové podobě s pixel-perfect detailem." },
          { _key: "s4", title: "Revize & předání", days: 2, text: "Doladíme finální podobu a předám všechny formáty včetně pravidel použití." },
        ],
        videoOverline: "Video",
        videoTitle: "Tvorba ikon a ilustrací v praxi",
        videoBody: "Od prvního nápadu po kompletní sadu — nahlédněte do procesu tvorby zakázkových vizuálů.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky ilustrací a ikonových sad",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí zakázkové ilustrace",
        cenikSubtitle: "Cena závisí na počtu ikon/ilustrací a složitosti stylu.",
        cenikPriceTitle: "Cena za ilustrace a ikony",
        cenikPriceLabel: "od 8 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Definice vizuálního stylu", desc: "Moodboard a vzorový styl ke schválení" },
          { _key: "c2", name: "Sada ikon nebo ilustrací", desc: "Kompletní sada dle dohodnutého rozsahu" },
          { _key: "c3", name: "Vektorové soubory", desc: "SVG, AI, PNG — pro web i tisk" },
          { _key: "c4", name: "2 kola revizí", desc: "Doladění stylu a detailů" },
          { _key: "c5", name: "Pravidla použití", desc: "Doporučení pro velikosti, barvy a kontexty" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Originalita stylu", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Konzistence sady", scores: [5, 4, 2] },
          { _key: "t3", criterion: "Technická kvalita", scores: [5, 4, 2] },
          { _key: "t4", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(5),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Kolik ikon je v základní sadě?", answer: "Základní sada obsahuje 10–20 ikon. Rozsah přizpůsobíme vašim potřebám — od malé sady pro web po rozsáhlý systém s desítkami ikon. Cena roste lineárně s počtem." },
          { _key: "f2", question: "Mohu sadu později rozšířit?", answer: "Ano, a přesně proto definujeme vizuální styl na začátku. Díky tomu lze kdykoli přidat další ikony nebo ilustrace, které budou konzistentní s původní sadou." },
          { _key: "f3", question: "Děláte i animované ikony?", answer: "Na vyžádání ano. Animované SVG ikony jsou ideální pro web a aplikace. Cena a čas dodání závisí na složitosti animace." },
          { _key: "f4", question: "V jakém stylu pracujete?", answer: "Přizpůsobím se vaší značce. Tvořím line ikony, filled ikony, duotone, izometrické i plně ilustrované styly. Na briefu společně vybereme směr, který nejlépe ladí s vaší identitou." },
        ],
      },
    },

    // ── 4. Prezentace a pitch decky ─────────────────────────────────────
    {
      slug: "prezentace-pitch-decky",
      data: {
        name: "Prezentace a pitch decky",
        category: CATEGORY,
        categoryOrder: 4,
        heroTitle: "Prezentace, které přesvědčí investory i klienty",
        heroSubheadline:
          "Máte skvělý produkt, ale vaše prezentace ho neprodává. Navrhnu pitch deck nebo firemní prezentaci, která vypadá profesionálně, vypráví příběh a vede k akci.",
        heroPriceLabel: "Již od 12 000 Kč",
        heroProjectsLabel: "40+ projektů",
        heroDeliveryLabel: "dodání cca 7 dní",
        atomicAnswer:
          "Design prezentací a pitch decků je profesionální zpracování slidů, které přesvědčí investory, klienty nebo partnery. Služba zahrnuje strukturování obsahu, vizuální design slidů, datové vizualizace a přípravu editovatelné šablony. Výstupem je prezentace v PowerPointu, Keynote nebo Google Slides. Cena od 12 000 Kč, dodání do 7 pracovních dní. Navrhuje Simon Anfilov, ANFILOV Studio Praha, 30+ let zkušeností s korporátním designem.",
        metaTitle: "Prezentace & pitch decky — ANFILOV | Slidy, které prodávají",
        metaDescription:
          "Profesionální design prezentací od 12 000 Kč. Pitch decky pro investory, firemní prezentace. Dodání do 7 dní. 30+ let zkušeností.",
        problemOverline: "Problém",
        problemTitle: "Proč vaše prezentace nefungují?",
        problemItems: [
          { _key: "p1", text: "Slidy přeplněné textem — publikum čte místo toho, aby poslouchalo vás." },
          { _key: "p2", text: "Investor viděl stovky pitch decků a ten váš vypadá jako všechny ostatní — ničím nezaujme." },
          { _key: "p3", text: "Firemní šablona je zastaralá, omezující a nikdo ji nedodržuje." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Prezentace, která vypráví příběh",
        reseniItems: [
          { _key: "r1", title: "Strukturování obsahu", text: "Pomohu vám sestavit logický příběh — od problému přes řešení k výzvě k akci." },
          { _key: "r2", title: "Vizuální design slidů", text: "Čistý, moderní design s vizuální hierarchií — každý slid má jasné sdělení." },
          { _key: "r3", title: "Datové vizualizace", text: "Grafy a čísla zpracuji tak, aby vypovídaly příběh, ne aby zahltily." },
          { _key: "r4", title: "Editovatelná šablona", text: "Prezentaci snadno upravíte sami — master slidy, styly a komponenty." },
          { _key: "r5", title: "Speaker notes", text: "Ke každému slidu připravím poznámky pro řečníka, pokud potřebujete." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & obsah", days: 1, text: "Dodáte mi obsah a já navrhnu strukturu a příběhovou linku prezentace." },
          { _key: "s2", title: "Wireframe slidů", days: 1, text: "Připravím rozložení každého slidu — co kde bude a proč." },
          { _key: "s3", title: "Vizuální design", days: 3, text: "Zpracuji finální design všech slidů včetně grafů a vizualizací." },
          { _key: "s4", title: "Revize & předání", days: 2, text: "Doladíme detaily a předám editovatelný soubor ve vašem preferovaném formátu." },
        ],
        videoOverline: "Video",
        videoTitle: "Jak vzniká prezentace, která prodává",
        videoBody: "Nahlédněte do procesu tvorby pitch decku — od surového obsahu po finální slidy.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky prezentací a pitch decků",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí design prezentace",
        cenikSubtitle: "Cena závisí na počtu slidů a složitosti datových vizualizací.",
        cenikPriceTitle: "Cena za design prezentace",
        cenikPriceLabel: "od 12 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Strukturování obsahu", desc: "Logický příběh a rozložení slidů" },
          { _key: "c2", name: "Vizuální design", desc: "Profesionální zpracování všech slidů" },
          { _key: "c3", name: "Datové vizualizace", desc: "Grafy, tabulky a čísla v přehledné podobě" },
          { _key: "c4", name: "Editovatelný soubor", desc: "PowerPoint, Keynote nebo Google Slides" },
          { _key: "c5", name: "2 kola revizí", desc: "Doladění obsahu a designu" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Storytelling & struktura", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Vizuální kvalita", scores: [5, 4, 1] },
          { _key: "t3", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
          { _key: "t4", criterion: "Rychlost dodání", scores: [4, 3, 5] },
          { _key: "t5", criterion: "Osobní přístup", scores: [5, 2, 3] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(5),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Kolik stojí design prezentace?", answer: "Cena začíná od 12 000 Kč za prezentaci do 15 slidů. Rozsáhlejší pitch decky (20–30+ slidů) s datovými vizualizacemi stojí více. Po dodání obsahu obdržíte přesnou nabídku." },
          { _key: "f2", question: "V jakém formátu prezentaci dostanu?", answer: "Standardně PowerPoint (.pptx), ale pracuji i s Keynote a Google Slides. Soubor je plně editovatelný — můžete měnit texty, barvy i obrázky." },
          { _key: "f3", question: "Musím mít obsah připravený?", answer: "Ideálně ano — alespoň v bodech. Pokud nemáte strukturu, pomohu vám obsah rozvrhnout a sestavit příběhovou linku. Nepiši texty za vás, ale navrhnu, co by mělo být na kterém slidu." },
          { _key: "f4", question: "Děláte i firemní šablony na opakované použití?", answer: "Ano. Firemní šablona obsahuje master slidy, komponenty a pravidla — váš tým pak tvoří nové prezentace sám v jednotném stylu. Cena za šablonu je vyšší, ale dlouhodobě se vyplatí." },
          { _key: "f5", question: "Jak rychle prezentaci dodáte?", answer: "Standardní dodání je 5–7 pracovních dní. U urgentních projektů (investor meeting za 3 dny) je možné expresní zpracování za příplatek." },
        ],
      },
    },

    // ── 5. Reklamní AI vizuál ───────────────────────────────────────────
    {
      slug: "reklamni-ai-vizual",
      data: {
        name: "Reklamní AI vizuál",
        category: CATEGORY,
        categoryOrder: 5,
        heroTitle: "AI vizuály s profesionálním art direction",
        heroSubheadline:
          "AI generátory umí každý. Ale výsledek, který funguje v reklamní kampani? K tomu potřebujete zkušeného designéra. Spojím sílu AI s profesionálním art direction.",
        heroPriceLabel: "Již od 4 000 Kč",
        heroProjectsLabel: "20+ projektů",
        heroDeliveryLabel: "dodání cca 3 dní",
        atomicAnswer:
          "Reklamní AI vizuál je profesionálně řízená tvorba kampaňových vizuálů s využitím AI generátorů (Midjourney, DALL-E, Stable Diffusion) pod vedením zkušeného art directora. Služba zahrnuje kreativní koncept, generování vizuálů, post-produkci a přípravu souborů pro tisk i digitál. Výstupem jsou vizuály připravené pro sociální sítě, bannery nebo tiskové materiály. Cena od 4 000 Kč, dodání do 3 pracovních dní. Řídí Simon Anfilov, ANFILOV Studio Praha, 30+ let zkušeností v reklamním designu.",
        metaTitle: "Reklamní AI vizuály — ANFILOV | AI + art direction",
        metaDescription:
          "AI vizuály pro reklamní kampaně od 4 000 Kč. Profesionální art direction, ne náhodné generování. Dodání do 3 dní. 30+ let zkušeností.",
        problemOverline: "Problém",
        problemTitle: "Proč AI vizuály z promptu nestačí?",
        problemItems: [
          { _key: "p1", text: "Generujete vizuály sami, ale výsledky vypadají genericky a nezapadají do vaší značky." },
          { _key: "p2", text: "AI obrázky mají artefakty, nesprávné proporce nebo nesmyslné detaily — a vy je neopravíte." },
          { _key: "p3", text: "Potřebujete kampaňové vizuály rychle a levně, ale fotoprodukcí si to nemůžete dovolit." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "AI jako nástroj, designér jako režisér",
        reseniItems: [
          { _key: "r1", title: "Kreativní koncept", text: "Nejdřív strategie, pak generování. Definuji vizuální směr, náladu a sdělení." },
          { _key: "r2", title: "Profesionální prompting", text: "Zkušenosti s Midjourney, DALL-E a Stable Diffusion — vím, jak z AI dostat přesně to, co potřebujete." },
          { _key: "r3", title: "Post-produkce", text: "Retušuji artefakty, doladím barvy, přidám typografii a připravím finální kompozici." },
          { _key: "r4", title: "Brand consistency", text: "AI vizuály ladí s vaší značkou — barvy, styl, nálada odpovídají vaší identitě." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & koncept", days: 1, text: "Definujeme sdělení, cílovou skupinu a vizuální směr kampaně." },
          { _key: "s2", title: "Generování & selekce", days: 1, text: "Vygeneruji desítky variant a vyberu nejsilnější vizuály ke schválení." },
          { _key: "s3", title: "Post-produkce & finalizace", days: 1, text: "Retušuji, doladím a připravím finální soubory pro vaše kanály." },
        ],
        videoOverline: "Video",
        videoTitle: "AI vizuály s profesionálním vedením",
        videoBody: "Podívejte se, jak z AI generátoru vznikne profesionální reklamní vizuál.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky AI kampaňových vizuálů",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí AI vizuál",
        cenikSubtitle: "Cena závisí na počtu vizuálů a rozsahu post-produkce.",
        cenikPriceTitle: "Cena za reklamní AI vizuál",
        cenikPriceLabel: "od 4 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Kreativní koncept", desc: "Vizuální směr a sdělení kampaně" },
          { _key: "c2", name: "AI generování vizuálů", desc: "Profesionální prompting v Midjourney/DALL-E" },
          { _key: "c3", name: "Post-produkce", desc: "Retuš artefaktů, korekce barev, finální úpravy" },
          { _key: "c4", name: "Soubory pro digitál i tisk", desc: "JPG, PNG, TIFF v potřebných rozlišeních" },
          { _key: "c5", name: "1 kolo revizí", desc: "Doladění vizuálu dle vašeho feedbacku" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Kreativní koncept", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Kvalita post-produkce", scores: [5, 4, 1] },
          { _key: "t3", criterion: "Rychlost dodání", scores: [5, 3, 4] },
          { _key: "t4", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(5),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Kolik stojí AI vizuál?", answer: "Cena začíná od 4 000 Kč za jeden reklamní vizuál včetně konceptu a post-produkce. Sada vizuálů pro kampaň (3–5 ks) je cenově výhodnější. Po briefu obdržíte přesnou nabídku." },
          { _key: "f2", question: "Mohu AI vizuály používat komerčně?", answer: "Ano. Pracuji s nástroji, které umožňují komerční použití (Midjourney s placeným plánem, DALL-E API). Licenční podmínky vám vysvětlím na briefu." },
          { _key: "f3", question: "Jaký je rozdíl oproti tomu, když si vizuál vygeneruji sám?", answer: "Art direction. Sám dostanete generický obrázek -- se mnou dostanete vizuál s promyšleným konceptem, správnou kompozicí, retušovaný a připravený pro reálnou kampaň. Rozdíl je jako mezi selfie a profesionální fotkou." },
          { _key: "f4", question: "Jak rychle vizuál dodáte?", answer: "Standardně do 3 pracovních dní. U jednodušších vizuálů je možné dodání i do 24 hodin. AI výrazně zrychluje produkci oproti klasickému fotoateliéru." },
          { _key: "f5", question: "Nahradí AI vizuály profesionální fotografie?", answer: "Ne vždy. AI je ideální pro konceptuální vizuály, abstraktní scény a situace, kde je fotoprodukce drahá nebo nemožná. Pro produktovou fotku nebo portréty stále doporučuji reálné focení." },
        ],
      },
    },
  ];
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("\n💻 Kategorie 6: Digitální design\n");

  const projectIds = await fetchAllProjectIds();
  const toolIds = await fetchAllToolIds();

  console.log(`  📦 Found ${projectIds.length} projects, ${toolIds.length} tools\n`);

  const services = buildServices(projectIds, toolIds);

  for (const svc of services) {
    await createOrUpdateSluzba(svc.slug, svc.data);
  }

  console.log("\n✅ Kategorie 6 hotová!\n");
}

module.exports = main;

if (require.main === module) {
  main().catch((e) => {
    console.error("Error:", e.message);
    process.exit(1);
  });
}
