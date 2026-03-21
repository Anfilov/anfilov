const {
  fetchAllProjectIds,
  fetchAllToolIds,
  randomSubset,
  ref,
  createOrUpdateSluzba,
} = require("./_helpers");

const CATEGORY = "socialni-media";

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
    // ── 1. Šablony pro Canva ──────────────────────────────────────────
    {
      slug: "sablony-canva",
      data: {
        name: "Šablony pro Canva",
        category: CATEGORY,
        categoryOrder: 1,
        heroTitle: "Profesionální Canva šablony ve stylu vaší značky",
        heroSubheadline:
          "Váš tým potřebuje rychle tvořit grafiku, ale výsledek musí vypadat profesionálně. Připravím šablony v Canvě, které si kdokoli ve firmě upraví za pár minut — a značka zůstane konzistentní.",
        heroPriceLabel: "Již od 8 000 Kč",
        heroProjectsLabel: "25+ projektů",
        heroDeliveryLabel: "dodání cca 7 dní",
        atomicAnswer:
          "Šablony pro Canva jsou profesionálně navržené grafické předlohy ve vaší firemní vizuální identitě, připravené přímo v prostředí Canva. Umožňují komukoliv ve firmě vytvářet konzistentní grafiku pro sociální sítě, prezentace nebo tiskové materiály bez znalosti designu. Sada obsahuje šablony pro posty, stories, bannery a další formáty, vše s instrukcemi pro úpravy. Cena začíná od 8 000 Kč, dodání do 7 pracovních dní. Šablony navrhuje Simon Anfilov z ANFILOV Studia v Praze, brand & web designer s 30 lety zkušeností.",
        metaTitle: "Šablony pro Canva — ANFILOV | Firemní grafika snadno",
        metaDescription:
          "Profesionální Canva šablony od 8 000 Kč. Váš tým tvoří grafiku sám, značka zůstává konzistentní. Dodání do 7 dní.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Každý ve firmě tvoří grafiku po svém — výsledek vypadá pokaždé jinak a značka ztrácí konzistenci." },
          { _key: "p2", text: "Na každý příspěvek musíte čekat na grafika — to zdržuje a prodražuje marketing." },
          { _key: "p3", text: "Používáte generické šablony z Canvy, které vypadají stejně jako u konkurence." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Canva šablony na míru vaší značce",
        reseniItems: [
          { _key: "r1", title: "Šablony ve vaší identitě", text: "Barvy, fonty, layouty — vše ladí s vaším brand manuálem. Žádné generické šablony." },
          { _key: "r2", title: "Snadná úprava pro celý tým", text: "Stačí změnit text a fotku — design zůstane profesionální, i když ho upravuje netechnický kolega." },
          { _key: "r3", title: "Více formátů v jedné sadě", text: "Posty, stories, bannery, prezentace — kompletní sada pro vaše nejčastější potřeby." },
          { _key: "r4", title: "Návod pro tým", text: "Ke každé šabloně dodám stručné instrukce, jak ji správně používat a co neměnit." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & analýza potřeb", days: 1, text: "Zjistím, jaké formáty a typy grafiky váš tým nejčastěji potřebuje." },
          { _key: "s2", title: "Návrh šablon", days: 3, text: "Navrhnu šablony ve vaší vizuální identitě — layouty, grafické prvky, typografie." },
          { _key: "s3", title: "Zpracování v Canvě", days: 2, text: "Převedu návrhy do Canva prostředí s editovatelnými prvky." },
          { _key: "s4", title: "Revize & předání", days: 1, text: "Doladíme detaily, předám šablony a návod pro tým." },
        ],
        videoOverline: "Video",
        videoTitle: "Podívejte se, jak šablony fungují",
        videoBody: "Ukázka toho, jak snadno váš tým vytvoří profesionální grafiku pomocí připravených šablon v Canvě.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky Canva šablon",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí šablony pro Canva",
        cenikSubtitle: "Cena závisí na počtu šablon a formátů, které potřebujete.",
        cenikPriceTitle: "Cena za sadu šablon",
        cenikPriceLabel: "od 8 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Analýza potřeb", desc: "Zjistíme, jaké formáty a typy grafiky potřebujete" },
          { _key: "c2", name: "Sada šablon v Canvě", desc: "Editovatelné šablony ve vaší firemní identitě" },
          { _key: "c3", name: "Více formátů", desc: "Posty, stories, bannery — dle vašich potřeb" },
          { _key: "c4", name: "Návod pro tým", desc: "Instrukce, jak šablony správně používat" },
          { _key: "c5", name: "1 kolo revizí", desc: "Doladění šablon dle vašeho feedbacku" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Soulad s identitou", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Použitelnost pro tým", scores: [5, 3, 3] },
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
          { _key: "f1", question: "Kolik stojí šablony pro Canva?", answer: "Cena začíná od 8 000 Kč za základní sadu šablon. Finální cena závisí na počtu formátů a šablon. Po úvodním briefu dostanete přesnou kalkulaci." },
          { _key: "f2", question: "Potřebujeme placenou verzi Canvy?", answer: "Šablony navrhnu tak, aby fungovaly i ve free verzi Canvy. Pokud máte Canva Pro, využijeme navíc brand kit s vašimi barvami a fonty pro ještě snazší úpravy." },
          { _key: "f3", question: "Může šablony upravovat kdokoli ve firmě?", answer: "Ano, přesně k tomu jsou navržené. Stačí změnit text a fotku — design zůstane profesionální. Ke každé šabloně dodám stručný návod, co měnit a co nechat." },
          { _key: "f4", question: "Jak dlouho trvá příprava šablon?", answer: "Standardně 5–7 pracovních dní od schválení briefu. Závisí na počtu formátů. U urgentních projektů lze domluvit expresní zpracování." },
          { _key: "f5", question: "Můžete šablony později rozšířit o další formáty?", answer: "Samozřejmě. Většina klientů začne základní sadou a postupně přidává další formáty podle aktuálních potřeb. Navazující šablony jsou cenově výhodnější, protože design systém už existuje." },
        ],
      },
    },

    // ── 2. Šablony pro sociální sítě ──────────────────────────────────
    {
      slug: "sablony-socialni-site",
      data: {
        name: "Šablony pro sociální sítě",
        category: CATEGORY,
        categoryOrder: 2,
        heroTitle: "Šablony pro sociální sítě, které drží vaši značku pohromadě",
        heroSubheadline:
          "Instagram, Facebook, LinkedIn — každá platforma má jiné rozměry, ale vaše značka musí vypadat konzistentně všude. Připravím sadu šablon, se kterou publikujete rychle a profesionálně.",
        heroPriceLabel: "Již od 6 000 Kč",
        heroProjectsLabel: "35+ projektů",
        heroDeliveryLabel: "dodání cca 7 dní",
        atomicAnswer:
          "Šablony pro sociální sítě jsou sady grafických předloh pro Instagram, Facebook a LinkedIn v jednotném vizuálním stylu vaší značky. Zahrnují formáty pro posty, stories, cover photos a bannery. Šablony umožňují rychlou tvorbu obsahu bez grafika — stačí vyměnit text a fotku. Cena začíná od 6 000 Kč, dodání do 7 pracovních dní. Navrhuje Simon Anfilov z ANFILOV Studia v Praze, designer s 30 lety zkušeností a desítkami realizací pro sociální sítě.",
        metaTitle: "Šablony pro sociální sítě — ANFILOV | Konzistentní obsah",
        metaDescription:
          "Šablony pro Instagram, Facebook a LinkedIn od 6 000 Kč. Profesionální design ve vaší identitě. Dodání do 7 dní.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Každý příspěvek vypadá jinak — chybí jednotný vizuální styl napříč platformami." },
          { _key: "p2", text: "Tvorba jednoho postu zabere hodiny, protože pokaždé začínáte od nuly." },
          { _key: "p3", text: "Používáte generické šablony a vaše značka se na sociálních sítích ztrácí v davu." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Jednotný vizuální styl pro všechny platformy",
        reseniItems: [
          { _key: "r1", title: "Multi-platform sada", text: "Šablony pro Instagram, Facebook i LinkedIn — vše v jednotném stylu vaší značky." },
          { _key: "r2", title: "Posty i stories", text: "Čtvercové posty, vertikální stories, cover photos — kompletní sada formátů." },
          { _key: "r3", title: "Variace pro různý obsah", text: "Šablony pro citáty, produktové fotky, tipy, novinky — pokryjeme vaše nejčastější typy obsahu." },
          { _key: "r4", title: "Editovatelné soubory", text: "Dodám v Canvě, Figmě nebo Adobe — podle toho, s čím pracujete." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & audit", days: 1, text: "Zanalyzuji vaše stávající profily a zjistím, jaký obsah publikujete nejčastěji." },
          { _key: "s2", title: "Návrh systému šablon", days: 3, text: "Navrhnu vizuální systém šablon pro různé typy obsahu a platformy." },
          { _key: "s3", title: "Zpracování šablon", days: 2, text: "Vytvořím editovatelné šablony v požadovaném nástroji." },
          { _key: "s4", title: "Revize & předání", days: 1, text: "Doladíme detaily a předám kompletní sadu s návodem." },
        ],
        videoOverline: "Video",
        videoTitle: "Jak šablony urychlí vaši tvorbu obsahu",
        videoBody: "Ukázka procesu — od jednotlivých postů po konzistentní feed.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky šablon pro sociální sítě",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí šablony pro sociální sítě",
        cenikSubtitle: "Cena závisí na počtu platforem, formátů a variací šablon.",
        cenikPriceTitle: "Cena za sadu šablon",
        cenikPriceLabel: "od 6 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Audit stávajících profilů", desc: "Analýza obsahu a vizuálního stylu" },
          { _key: "c2", name: "Sada šablon", desc: "Posty, stories a bannery ve vaší identitě" },
          { _key: "c3", name: "Více platforem", desc: "Instagram, Facebook, LinkedIn — dle potřeby" },
          { _key: "c4", name: "Editovatelné soubory", desc: "Canva, Figma nebo Adobe formát" },
          { _key: "c5", name: "1 kolo revizí", desc: "Doladění dle vašeho feedbacku" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Soulad s identitou", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Multi-platform pokrytí", scores: [5, 4, 3] },
          { _key: "t3", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
          { _key: "t4", criterion: "Rychlost dodání", scores: [4, 3, 5] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(4),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Kolik stojí šablony pro sociální sítě?", answer: "Cena začíná od 6 000 Kč za základní sadu. Závisí na počtu platforem a variací. Po briefu dostanete přesnou kalkulaci." },
          { _key: "f2", question: "Pro jaké platformy šablony navrhujete?", answer: "Nejčastěji Instagram, Facebook a LinkedIn. Na požádání připravím i šablony pro TikTok, Pinterest nebo X (Twitter). Každá platforma má specifické rozměry a best practices." },
          { _key: "f3", question: "V jakém formátu šablony dostanu?", answer: "Podle toho, s čím váš tým pracuje — Canva, Figma nebo Adobe (Photoshop/Illustrator). Canva je nejčastější volba pro týmy bez grafika." },
          { _key: "f4", question: "Kolik šablon je v základní sadě?", answer: "Základní sada obsahuje 8–12 šablon pokrývajících nejčastější typy obsahu — citáty, produktové fotky, tipy, novinky a stories. Rozsah přizpůsobíme vašim potřebám." },
          { _key: "f5", question: "Můžete navrhnout i content strategii pro sítě?", answer: "Šablony navrhnu tak, aby odpovídaly vašemu typu obsahu. Kompletní content strategii doporučuji řešit s vaším marketing týmem — já se postarám o vizuální stránku." },
        ],
      },
    },

    // ── 3. Šablony pro LinkedIn ───────────────────────────────────────
    {
      slug: "sablony-linkedin",
      data: {
        name: "Šablony pro LinkedIn",
        category: CATEGORY,
        categoryOrder: 3,
        heroTitle: "LinkedIn šablony, které budují vaši expertní pozici",
        heroSubheadline:
          "LinkedIn je vaše profesionální vizitka. Připravím šablony pro karusely, bannery a příspěvky, které vypadají profesionálně a posilují vaši osobní i firemní značku.",
        heroPriceLabel: "Již od 5 000 Kč",
        heroProjectsLabel: "30+ projektů",
        heroDeliveryLabel: "dodání cca 5 dní",
        atomicAnswer:
          "Šablony pro LinkedIn jsou profesionálně navržené grafické předlohy optimalizované pro LinkedIn platformu — karusely (document posts), bannerové obrázky, cover photos a grafiky k příspěvkům. Šablony jsou v souladu s vaší firemní identitou a navržené tak, aby maximalizovaly engagement. Cena začíná od 5 000 Kč, dodání do 5 pracovních dní. Navrhuje Simon Anfilov z ANFILOV Studia v Praze, brand designer s 30 lety zkušeností.",
        metaTitle: "Šablony pro LinkedIn — ANFILOV | Profesionální profil",
        metaDescription:
          "LinkedIn šablony od 5 000 Kč. Karusely, bannery, post grafiky ve vaší identitě. Dodání do 5 dní. 30 let zkušeností.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte tyto situace?",
        problemItems: [
          { _key: "p1", text: "Vaše LinkedIn příspěvky vypadají amatérsky vedle konkurence, která má profesionální grafiku." },
          { _key: "p2", text: "Chcete publikovat karusely a vizuální obsah, ale nemáte šablony ani grafika." },
          { _key: "p3", text: "Váš LinkedIn profil a firemní stránka nemají jednotný vizuální styl." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "LinkedIn šablony na míru vaší značce",
        reseniItems: [
          { _key: "r1", title: "Karuselové šablony", text: "Document posts, které zvyšují engagement — slide-by-slide šablony pro edukativní obsah." },
          { _key: "r2", title: "Banner a cover photo", text: "Profesionální hlavičkový obrázek pro osobní profil i firemní stránku." },
          { _key: "r3", title: "Post grafiky", text: "Šablony pro různé typy příspěvků — tipy, citáty, statistiky, oznámení." },
          { _key: "r4", title: "Konzistentní systém", text: "Všechny šablony vizuálně ladí — váš profil vypadá jako profesionální celek." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & audit profilu", days: 1, text: "Zanalyzuji váš LinkedIn profil a zjistím, jaký obsah publikujete." },
          { _key: "s2", title: "Návrh šablon", days: 2, text: "Navrhnu vizuální systém šablon optimalizovaný pro LinkedIn algoritmus." },
          { _key: "s3", title: "Zpracování", days: 1, text: "Vytvořím editovatelné šablony v Canvě nebo Figmě." },
          { _key: "s4", title: "Revize & předání", days: 1, text: "Doladíme detaily a předám kompletní sadu s návodem." },
        ],
        videoOverline: "Video",
        videoTitle: "LinkedIn šablony v akci",
        videoBody: "Ukázka toho, jak profesionální šablony promění váš LinkedIn profil.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky LinkedIn šablon",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí šablony pro LinkedIn",
        cenikSubtitle: "Cena závisí na počtu šablon a typech obsahu, které potřebujete.",
        cenikPriceTitle: "Cena za sadu LinkedIn šablon",
        cenikPriceLabel: "od 5 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Audit LinkedIn profilu", desc: "Analýza stávajícího vizuálního stylu" },
          { _key: "c2", name: "Karuselové šablony", desc: "Slide šablony pro edukativní obsah" },
          { _key: "c3", name: "Post grafiky", desc: "Šablony pro běžné typy příspěvků" },
          { _key: "c4", name: "Banner / cover photo", desc: "Hlavičkový obrázek profilu nebo stránky" },
          { _key: "c5", name: "1 kolo revizí", desc: "Doladění dle vašeho feedbacku" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Znalost LinkedIn specifik", scores: [5, 3, 2] },
          { _key: "t2", criterion: "Soulad s identitou", scores: [5, 4, 2] },
          { _key: "t3", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
          { _key: "t4", criterion: "Rychlost dodání", scores: [5, 3, 4] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(4),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Kolik stojí LinkedIn šablony?", answer: "Cena začíná od 5 000 Kč za základní sadu. Zahrnuje karuselové šablony, post grafiky a banner. Po briefu obdržíte přesnou kalkulaci." },
          { _key: "f2", question: "Navrhujete i karusely pro LinkedIn?", answer: "Ano, karusely (document posts) jsou nejúčinnější formát na LinkedIn z hlediska engagementu. Navrhnu šablony pro slide-by-slide obsah, které si snadno upravíte." },
          { _key: "f3", question: "V jakém formátu šablony dostanu?", answer: "Standardně v Canvě nebo Figmě — podle toho, s čím pracujete. Canva je ideální pro netechnické uživatele, Figma pro pokročilejší týmy." },
          { _key: "f4", question: "Fungují šablony pro osobní i firemní profil?", answer: "Ano, navrhnu šablony pro oba typy. Osobní profil a firemní stránka mohou mít mírně odlišný styl, ale vizuálně spolu ladí." },
          { _key: "f5", question: "Jak šablony zvýší engagement na LinkedIn?", answer: "Profesionální vizuál zvyšuje zastavení scrollu (thumb-stopping effect) a tím i engagement. Karusely mají na LinkedIn 2–3× vyšší reach než textové příspěvky. Šablony navrhnu s ohledem na best practices platformy." },
        ],
      },
    },

    // ── 4. Design sociálních médií ────────────────────────────────────
    {
      slug: "design-socialnich-medii",
      data: {
        name: "Design sociálních médií",
        category: CATEGORY,
        categoryOrder: 4,
        heroTitle: "Kompletní vizuální systém pro vaše sociální sítě",
        heroSubheadline:
          "Nestačí mít hezké logo — na sociálních sítích potřebujete ucelený vizuální systém. Navrhnu vám kompletní design pro všechny platformy včetně pravidel a guidelines.",
        heroPriceLabel: "Již od 12 000 Kč",
        heroProjectsLabel: "40+ projektů",
        heroDeliveryLabel: "dodání cca 10 dní",
        atomicAnswer:
          "Design sociálních médií je kompletní vizuální systém pro vaše profily na sociálních sítích. Zahrnuje cover photos, profilové obrázky, šablony pro posty a stories, highlight covers, grafické prvky a guidelines pro konzistentní vizuální komunikaci. Výstupem je ucelený design systém s pravidly použití. Cena začíná od 12 000 Kč, dodání do 10 pracovních dní. Službu poskytuje Simon Anfilov z ANFILOV Studia v Praze, brand & web designer s 30 lety zkušeností a desítkami projektů pro sociální média.",
        metaTitle: "Design sociálních médií — ANFILOV | Vizuální systém",
        metaDescription:
          "Kompletní design sociálních médií od 12 000 Kč. Cover photos, šablony, guidelines. Systém pro všechny platformy. 30 let zkušeností.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Vaše profily na sociálních sítích vypadají nekonzistentně — každá platforma jako jiná firma." },
          { _key: "p2", text: "Nemáte pravidla pro vizuální styl na sítích — každý příspěvek je ad hoc experiment." },
          { _key: "p3", text: "Vaše značka na sociálních sítích nevypadá tak profesionálně jako na webu nebo v tisku." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Ucelený design systém pro všechny platformy",
        reseniItems: [
          { _key: "r1", title: "Profilová grafika", text: "Cover photos, profilové obrázky a highlight covers pro všechny vaše platformy." },
          { _key: "r2", title: "Šablony pro obsah", text: "Kompletní sada šablon pro posty, stories, reels covers a další formáty." },
          { _key: "r3", title: "Grafické prvky", text: "Ikony, rámečky, pozadí a dekorativní prvky v duchu vaší identity." },
          { _key: "r4", title: "Social media guidelines", text: "Pravidla pro vizuální komunikaci na sítích — co dělat a co ne." },
          { _key: "r5", title: "Adaptace napříč platformami", text: "Jeden vizuální jazyk přizpůsobený specifikám Instagramu, Facebooku, LinkedIn i dalších sítí." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Audit & brief", days: 2, text: "Zanalyzuji vaše stávající profily, konkurenci a definuji vizuální směr." },
          { _key: "s2", title: "Návrh design systému", days: 4, text: "Navrhnu kompletní vizuální systém — profilovou grafiku, šablony, grafické prvky." },
          { _key: "s3", title: "Zpracování šablon", days: 2, text: "Vytvořím editovatelné soubory a připravím guidelines." },
          { _key: "s4", title: "Revize & předání", days: 2, text: "Doladíme detaily a předám kompletní balíček s pravidly." },
        ],
        videoOverline: "Video",
        videoTitle: "Jak vypadá profesionální design sociálních médií",
        videoBody: "Od auditu po kompletní vizuální systém — nahlédněte do procesu.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky designu sociálních médií",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí design sociálních médií",
        cenikSubtitle: "Cena závisí na počtu platforem a rozsahu design systému.",
        cenikPriceTitle: "Cena za kompletní design",
        cenikPriceLabel: "od 12 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Audit stávajících profilů", desc: "Analýza vizuálního stylu a konkurence" },
          { _key: "c2", name: "Profilová grafika", desc: "Cover photos, profilové obrázky, highlight covers" },
          { _key: "c3", name: "Sada šablon", desc: "Posty, stories, reels covers pro všechny platformy" },
          { _key: "c4", name: "Grafické prvky", desc: "Ikony, rámečky, dekorativní elementy" },
          { _key: "c5", name: "Social media guidelines", desc: "Pravidla vizuální komunikace na sítích" },
          { _key: "c6", name: "2 kola revizí", desc: "Dostatečný prostor pro doladění" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Systémový přístup", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Multi-platform koherence", scores: [5, 4, 2] },
          { _key: "t3", criterion: "Poměr cena / kvalita", scores: [5, 2, 3] },
          { _key: "t4", criterion: "Osobní komunikace", scores: [5, 2, 3] },
          { _key: "t5", criterion: "Znalost platform", scores: [5, 4, 2] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(5),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Kolik stojí kompletní design pro sociální sítě?", answer: "Cena začíná od 12 000 Kč za kompletní vizuální systém. Závisí na počtu platforem a rozsahu výstupů. Po auditu a briefu obdržíte přesnou cenovou nabídku." },
          { _key: "f2", question: "Pro jaké sociální sítě navrhujete?", answer: "Nejčastěji Instagram, Facebook a LinkedIn. Na požádání doplním i YouTube, TikTok, Pinterest nebo X. Každá platforma má specifické rozměry a best practices, které respektuji." },
          { _key: "f3", question: "Co jsou social media guidelines?", answer: "Pravidla pro vizuální komunikaci na sociálních sítích — jaké barvy používat, jaké fonty, jak pracovat s fotkami, co dělat a co ne. Díky guidelines bude váš obsah konzistentní, i když ho tvoří více lidí." },
          { _key: "f4", question: "Jak dlouho trvá návrh kompletního designu?", answer: "Standardně 8–12 pracovních dní. Zahrnuje audit, návrh systému, zpracování šablon a guidelines. Rozsah závisí na počtu platforem." },
          { _key: "f5", question: "Můžu si nechat navrhnout design jen pro jednu platformu?", answer: "Ano, ale doporučuji řešit alespoň 2–3 platformy najednou. Vizuální systém pak lépe funguje jako celek a je cenově výhodnější než objednávat platformy jednotlivě." },
        ],
      },
    },

    // ── 5. YouTube branding kit ───────────────────────────────────────
    {
      slug: "youtube-branding-kit",
      data: {
        name: "YouTube branding kit",
        category: CATEGORY,
        categoryOrder: 5,
        heroTitle: "YouTube branding, který z diváků dělá odběratele",
        heroSubheadline:
          "Profesionální channel art, šablony miniatur, end screeny a lower thirds — kompletní vizuální balíček, díky kterému váš kanál vypadá jako od profíků.",
        heroPriceLabel: "Již od 10 000 Kč",
        heroProjectsLabel: "20+ projektů",
        heroDeliveryLabel: "dodání cca 8 dní",
        atomicAnswer:
          "YouTube branding kit je kompletní sada vizuálních prvků pro YouTube kanál — channel art (banner), šablony miniatur (thumbnails), end screen grafika, lower thirds, intro/outro grafika a watermark. Vše navržené v jednotném stylu vaší značky tak, aby váš kanál vypadal profesionálně a konzistentně. Cena začíná od 10 000 Kč, dodání do 8 pracovních dní. Službu poskytuje Simon Anfilov z ANFILOV Studia v Praze, brand & web designer s 30 lety zkušeností.",
        metaTitle: "YouTube branding kit — ANFILOV | Profesionální kanál",
        metaDescription:
          "YouTube branding kit od 10 000 Kč. Channel art, thumbnaily, end screeny, lower thirds. Kompletní vizuál kanálu. 30 let zkušeností.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Váš YouTube kanál vypadá amatérsky — chybí profesionální banner, miniatury jsou nekonzistentní." },
          { _key: "p2", text: "Diváci nepoznají vaše videa v doporučeních, protože miniatury nemají jednotný styl." },
          { _key: "p3", text: "Chybí vám end screeny a lower thirds — přicházíte o odběratele a engagement." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Kompletní vizuální balíček pro YouTube",
        reseniItems: [
          { _key: "r1", title: "Channel art (banner)", text: "Profesionální hlavičkový obrázek optimalizovaný pro všechna zařízení — desktop, tablet i mobil." },
          { _key: "r2", title: "Šablony miniatur", text: "Rozpoznatelné thumbnail šablony, které zvyšují CTR — konzistentní styl, silná typografie." },
          { _key: "r3", title: "End screen & cards", text: "Grafika pro koncovky videí, která navádí na další obsah a tlačí odběry." },
          { _key: "r4", title: "Lower thirds & watermark", text: "Titulky s jménem, popisky a jemný vodoznak pro branding v průběhu videa." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & audit kanálu", days: 1, text: "Zanalyzuji váš kanál, obsah a cílovou skupinu — definujeme vizuální směr." },
          { _key: "s2", title: "Návrh vizuálního systému", days: 3, text: "Navrhnu channel art, styl miniatur a grafické prvky v jednotném stylu." },
          { _key: "s3", title: "Zpracování šablon", days: 3, text: "Vytvořím editovatelné šablony pro miniatury, end screeny a lower thirds." },
          { _key: "s4", title: "Revize & předání", days: 1, text: "Doladíme detaily a předám kompletní branding kit s návodem." },
        ],
        videoOverline: "Video",
        videoTitle: "Jak vypadá profesionální YouTube branding",
        videoBody: "Ukázka kompletního branding kitu — od banneru po end screen.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky YouTube brandingu",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí YouTube branding kit",
        cenikSubtitle: "Cena závisí na rozsahu — od základního kitu po kompletní vizuální systém kanálu.",
        cenikPriceTitle: "Cena za branding kit",
        cenikPriceLabel: "od 10 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Channel art (banner)", desc: "Hlavičkový obrázek pro všechna zařízení" },
          { _key: "c2", name: "Šablony miniatur", desc: "Editovatelné thumbnail šablony (5–8 variant)" },
          { _key: "c3", name: "End screen grafika", desc: "Koncovky videí s CTA prvky" },
          { _key: "c4", name: "Lower thirds & watermark", desc: "Titulky a vodoznak pro videa" },
          { _key: "c5", name: "2 kola revizí", desc: "Doladění dle vašeho feedbacku" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Znalost YouTube specifik", scores: [5, 3, 2] },
          { _key: "t2", criterion: "Koherence vizuálu", scores: [5, 4, 1] },
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
          { _key: "f1", question: "Kolik stojí YouTube branding kit?", answer: "Cena začíná od 10 000 Kč za kompletní kit. Zahrnuje channel art, šablony miniatur, end screeny a lower thirds. Po briefu obdržíte přesnou kalkulaci." },
          { _key: "f2", question: "Navrhujete i šablony pro YouTube miniatury?", answer: "Ano, thumbnail šablony jsou klíčová součást kitu. Navrhnu 5–8 variant pro různé typy videí — tutoriály, rozhovory, vlogy, recenze. Šablony si snadno upravíte v Canvě nebo Figmě." },
          { _key: "f3", question: "Budou miniatury fungovat i na mobilu?", answer: "Ano, všechny prvky navrhuji s ohledem na mobilní zobrazení. Miniatury musí být čitelné i v malé velikosti — proto používám silnou typografii a kontrastní barvy." },
          { _key: "f4", question: "Můžete navrhnout i intro a outro pro videa?", answer: "Statickou grafiku pro intro/outro zahrnuji do branding kitu. Pokud potřebujete animované intro, doporučím spolupráci s motion designérem — vizuální styl připravím já." },
          { _key: "f5", question: "Jak dlouho trvá příprava branding kitu?", answer: "Standardně 6–10 pracovních dní od schválení briefu. Závisí na rozsahu — základní kit je rychlejší, kompletní systém s více variantami trvá déle." },
        ],
      },
    },
  ];
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("\n📱 Kategorie 5: Sociální média\n");

  const projectIds = await fetchAllProjectIds();
  const toolIds = await fetchAllToolIds();

  console.log(`  📦 Found ${projectIds.length} projects, ${toolIds.length} tools\n`);

  const services = buildServices(projectIds, toolIds);

  for (const svc of services) {
    await createOrUpdateSluzba(svc.slug, svc.data);
  }

  console.log("\n✅ Kategorie 5 hotová!\n");
}

module.exports = main;

if (require.main === module) {
  main().catch((e) => {
    console.error("Error:", e.message);
    process.exit(1);
  });
}
