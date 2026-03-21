const {
  fetchAllProjectIds,
  fetchAllToolIds,
  randomSubset,
  ref,
  createOrUpdateSluzba,
} = require("./_helpers");

const CATEGORY = "obalovy-design";

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
    // ── 1. Design obalu produktu ──────────────────────────────────────
    {
      slug: "design-obalu",
      data: {
        name: "Design obalu produktu",
        category: CATEGORY,
        categoryOrder: 1,
        heroTitle: "Obal, který prodává dřív, než zákazník přečte název",
        heroSubheadline:
          "Regál je bojiště. Máte 3 sekundy, aby si zákazník vybral právě vás. Navrhnu obal, který vyčnívá z řady, komunikuje hodnotu produktu a buduje důvěru ke značce.",
        heroPriceLabel: "Již od 12 000 Kč",
        heroProjectsLabel: "35+ projektů",
        heroDeliveryLabel: "dodání cca 12 dní",
        atomicAnswer:
          "Design obalu produktu je proces návrhu vizuální podoby balení, která zaujme na regálu, komunikuje hodnotu produktu a podpoří rozhodnutí o koupi. Služba zahrnuje analýzu konkurence, návrh grafického konceptu, přípravu tiskových dat a mockupy pro prezentaci. Výstupem jsou tiskově připravené soubory a 3D vizualizace obalu. Cena začíná od 12 000 Kč, dodání přibližně 12 pracovních dní. Službu poskytuje Simon Anfilov z ANFILOV Studia v Praze, designer s 30 lety zkušeností a desítkami realizovaných obalových projektů.",
        metaTitle: "Design obalu produktu — ANFILOV | Obal, co prodává",
        metaDescription:
          "Profesionální design obalu od 12 000 Kč. Obal, který vyčnívá na regálu a prodává. 35+ projektů, dodání do 12 dní. Chci nabídku →",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Váš produkt se na regálu ztrácí mezi konkurencí — zákazníci ho přehlížejí, i když je kvalitní." },
          { _key: "p2", text: "Obal nevypadá profesionálně a neodpovídá ceně ani kvalitě produktu uvnitř." },
          { _key: "p3", text: "Chystáte nový produkt a potřebujete obal, který zaujme od prvního dne na trhu." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Obal navržený strategicky, ne jen hezky",
        reseniItems: [
          { _key: "r1", title: "Analýza konkurence na regálu", text: "Zmapuji vizuální prostředí vaší kategorie — obal navrhuji tak, aby vyčníval, ne splýval." },
          { _key: "r2", title: "2–3 konceptuální návrhy", text: "Promyšlené varianty s různým vizuálním přístupem — vybíráte ze strategicky podložených návrhů." },
          { _key: "r3", title: "3D mockupy a vizualizace", text: "Realistické vizualizace obalu ještě před tiskem — uvidíte, jak bude produkt vypadat na regálu." },
          { _key: "r4", title: "Tiskově připravené soubory", text: "Kompletní tisková data v souladu se specifikacemi vaší tiskárny — žádné překvapení při výrobě." },
          { _key: "r5", title: "2 kola revizí", text: "Doladíme každý detail, dokud nebudete s výsledkem spokojeni." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & analýza kategorie", days: 2, text: "Zjistím vše o produktu, cílové skupině a zmapuji konkurenci na regálu." },
          { _key: "s2", title: "Konceptuální návrhy", days: 5, text: "Představím 2–3 varianty obalového designu s vizuálním zdůvodněním." },
          { _key: "s3", title: "Revize & 3D vizualizace", days: 3, text: "Doladíme vybraný koncept a připravím realistické 3D mockupy." },
          { _key: "s4", title: "Tisková příprava & předání", days: 2, text: "Finalizuji tiskové soubory dle specifikací tiskárny a předám kompletní balíček." },
        ],
        videoOverline: "Video",
        videoTitle: "Podívejte se, jak to vypadá v praxi",
        videoBody: "Krátká ukázka mého procesu návrhu obalového designu — od briefu po finální tisk.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky obalového designu",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí design obalu",
        cenikSubtitle: "Cena závisí na typu obalu, počtu variant a složitosti tiskové přípravy.",
        cenikPriceTitle: "Cena za design obalu",
        cenikPriceLabel: "od 12 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Analýza konkurence", desc: "Vizuální audit kategorie a regálového prostředí" },
          { _key: "c2", name: "2–3 konceptuální návrhy", desc: "Strategicky podložené varianty designu" },
          { _key: "c3", name: "3D mockupy", desc: "Realistické vizualizace produktu na regálu" },
          { _key: "c4", name: "2 kola revizí", desc: "Doladění vybraného konceptu dle feedbacku" },
          { _key: "c5", name: "Tiskově připravené soubory", desc: "PDF/AI soubory dle specifikací tiskárny" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Strategický přístup k regálu", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Originalita designu", scores: [5, 4, 2] },
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
          { _key: "f1", question: "Kolik stojí design obalu?", answer: "Cena začíná od 12 000 Kč za jeden obalový design. Finální cena závisí na typu obalu, složitosti grafiky a počtu variant. Po úvodním briefu vám pošlu přesnou kalkulaci." },
          { _key: "f2", question: "Jak dlouho trvá návrh obalu?", answer: "Standardní dodání je 10–14 pracovních dní od schválení briefu. Zahrnuje analýzu, konceptuální návrhy, revize a tiskovou přípravu. Expresní zpracování je možné po domluvě." },
          { _key: "f3", question: "Připravíte i tiskové podklady?", answer: "Ano, vždy. Součástí dodávky jsou kompletní tiskově připravené soubory v souladu se specifikacemi vaší tiskárny — rozměry, spadávky, barevný prostor, řezné značky." },
          { _key: "f4", question: "Navrhujete i etikety a labely?", answer: "Ano, etikety a label design je moje samostatná služba. Pokud potřebujete obal i etiketu, nabídnu zvýhodněný balíček. Podívejte se na službu Etiketa a label design." },
          { _key: "f5", question: "Mohu vidět návrh na mockupu před tiskem?", answer: "Ano, součástí každého projektu jsou realistické 3D mockupy. Uvidíte, jak bude obal vypadat na regálu, v ruce zákazníka i v kontextu celé produktové řady." },
        ],
      },
    },

    // ── 2. Etiketa a label design ─────────────────────────────────────
    {
      slug: "etiketa-label-design",
      data: {
        name: "Etiketa a label design",
        category: CATEGORY,
        categoryOrder: 2,
        heroTitle: "Etiketa, která přitáhne ruku k regálu",
        heroSubheadline:
          "Láhev, sklenice, kosmetika nebo víno — etiketa je první, co zákazník vidí. Navrhnu label, který komunikuje kvalitu a odliší váš produkt od konkurence.",
        heroPriceLabel: "Již od 8 000 Kč",
        heroProjectsLabel: "40+ projektů",
        heroDeliveryLabel: "dodání cca 8 dní",
        atomicAnswer:
          "Etiketa a label design je návrh grafické podoby etikety pro lahve, sklenice, potraviny, kosmetiku, víno a další produkty. Služba zahrnuje analýzu kategorie, grafický návrh etikety, přípravu tiskových dat a mockupy pro prezentaci. Výstupem jsou tiskově připravené soubory a realistické vizualizace. Cena začíná od 8 000 Kč, dodání přibližně 8 pracovních dní. Navrhuje Simon Anfilov z ANFILOV Studia v Praze, designer se 30 lety praxe v obalovém a grafickém designu.",
        metaTitle: "Etiketa a label design — ANFILOV | Design etiket",
        metaDescription:
          "Profesionální design etiket od 8 000 Kč. Lahve, sklenice, víno, kosmetika. Dodání do 8 dní, 40+ projektů. Chci nabídku →",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Etiketa vašeho produktu vypadá levně a neodpovídá kvalitě obsahu — zákazníci sáhnou po konkurenci." },
          { _key: "p2", text: "Uvádíte nový produkt na trh a potřebujete etiketu, která zaujme a splní legislativní požadavky." },
          { _key: "p3", text: "Máte produktovou řadu, ale etikety nejsou vizuálně sjednocené — působí chaoticky." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Etiketa, která prodává i informuje",
        reseniItems: [
          { _key: "r1", title: "Analýza kategorie a konkurence", text: "Zmapuji vizuální prostředí vaší kategorie — etiketu navrhuji tak, aby vyčnívala." },
          { _key: "r2", title: "2–3 grafické koncepty", text: "Varianty s různým vizuálním přístupem — od minimalismu po výraznou grafiku." },
          { _key: "r3", title: "Mockupy na reálném produktu", text: "Uvidíte etiketu na lahvi nebo sklenici ještě před tiskem — realistická vizualizace." },
          { _key: "r4", title: "Tisková příprava", text: "Soubory připravené přesně dle požadavků vaší tiskárny včetně výseku a speciálních úprav." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & analýza", days: 1, text: "Zjistím vše o produktu, rozměrech, materiálu a legislativních požadavcích." },
          { _key: "s2", title: "Grafické návrhy", days: 3, text: "Představím 2–3 koncepty etikety s vizuálním zdůvodněním." },
          { _key: "s3", title: "Revize & mockupy", days: 2, text: "Doladíme vybraný koncept a připravím realistické vizualizace na produktu." },
          { _key: "s4", title: "Tisková příprava & předání", days: 2, text: "Finalizuji tiskové soubory a předám kompletní balíček." },
        ],
        videoOverline: "Video",
        videoTitle: "Tvorba etikety v praxi",
        videoBody: "Ukázka procesu návrhu etikety — od prvního briefu po tisk.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky label designu",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí design etikety",
        cenikSubtitle: "Cena závisí na složitosti grafiky, počtu variant a speciálních tiskových technikách.",
        cenikPriceTitle: "Cena za design etikety",
        cenikPriceLabel: "od 8 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Analýza kategorie", desc: "Vizuální audit konkurence ve vaší kategorii" },
          { _key: "c2", name: "2–3 grafické koncepty", desc: "Varianty designu s různým přístupem" },
          { _key: "c3", name: "Mockupy na produktu", desc: "Realistické vizualizace na lahvi/sklenici" },
          { _key: "c4", name: "2 kola revizí", desc: "Doladění vybraného konceptu" },
          { _key: "c5", name: "Tiskové soubory", desc: "PDF/AI dle specifikací tiskárny" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Znalost obalového designu", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Originalita návrhu", scores: [5, 4, 2] },
          { _key: "t3", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
          { _key: "t4", criterion: "Osobní přístup", scores: [5, 2, 3] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(5),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Kolik stojí design etikety?", answer: "Cena začíná od 8 000 Kč za jednu etiketu. Závisí na složitosti grafiky a speciálních tiskových technikách (ražba, lak, výsek). Při více produktech v řadě nabídnu zvýhodněnou cenu." },
          { _key: "f2", question: "Navrhujete etikety pro víno?", answer: "Ano, vinné etikety jsou jedna z mých specializací. Znám legislativní požadavky, tiskové techniky i trendy ve wine designu. Navrhnu etiketu, která obstojí i na mezinárodních soutěžích." },
          { _key: "f3", question: "Řešíte i legislativní požadavky na etiketě?", answer: "Pohlídám rozložení povinných údajů (složení, alergeny, čárové kódy) tak, aby nenarušily vizuální koncept. Finální obsah a legislativní správnost ale ověřte se svým technologem." },
          { _key: "f4", question: "Jak dlouho trvá návrh etikety?", answer: "Standardní dodání je 7–10 pracovních dní. Zahrnuje analýzu, koncepty, revize a tiskovou přípravu. U produktových řad počítejte s delším časem." },
          { _key: "f5", question: "Mohu objednat celou produktovou řadu najednou?", answer: "Ano, a doporučuji to. Řadu navrhuji jako systém — etikety sdílejí vizuální jazyk, ale každý produkt je snadno rozlišitelný. U řady nabízím zvýhodněnou cenu za kus." },
        ],
      },
    },

    // ── 3. Merch a promo předměty ─────────────────────────────────────
    {
      slug: "merch-promo-predmety",
      data: {
        name: "Merch a promo předměty",
        category: CATEGORY,
        categoryOrder: 3,
        heroTitle: "Merch, který lidé opravdu chtějí nosit a používat",
        heroSubheadline:
          "Firemní trička, hrnky, zápisníky, tašky a propisky — navrhnu merch, který není trapný, ale naopak posiluje značku a dělá radost příjemcům.",
        heroPriceLabel: "Již od 10 000 Kč",
        heroProjectsLabel: "30+ projektů",
        heroDeliveryLabel: "dodání cca 10 dní",
        atomicAnswer:
          "Merch a promo předměty zahrnují návrh grafiky pro firemní reklamní a dárkové předměty — trička, mikiny, hrnky, zápisníky, tašky, propisky a další. Služba pokrývá grafický návrh, přípravu tiskových podkladů pro různé technologie (sítotisk, DTG, sublimace, tampoprint) a mockupy pro schválení. Cena začíná od 10 000 Kč, dodání přibližně 10 pracovních dní. Navrhuje Simon Anfilov, ANFILOV Studio Praha, 30 let zkušeností v grafickém a obalovém designu.",
        metaTitle: "Merch a promo předměty — ANFILOV | Firemní merch",
        metaDescription:
          "Design merche a promo předmětů od 10 000 Kč. Trička, hrnky, tašky, zápisníky. Dodání do 10 dní. Chci nabídku →",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Firemní merch nikdo nenosí — trička končí v šuplíku a hrnky na dně skříně." },
          { _key: "p2", text: "Reklamní předměty vypadají genericky a nepředstavují kvalitu vaší značky." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Merch, který značku posiluje",
        reseniItems: [
          { _key: "r1", title: "Koncept merch kolekce", text: "Navrhnu ucelenou kolekci, která vizuálně ladí a dává smysl jako celek." },
          { _key: "r2", title: "Design pro konkrétní předměty", text: "Grafika přizpůsobená technologii tisku — sítotisk, DTG, sublimace, tampoprint." },
          { _key: "r3", title: "Mockupy pro schválení", text: "Realistické vizualizace na konkrétních předmětech — uvidíte výsledek před výrobou." },
          { _key: "r4", title: "Tiskově připravené soubory", text: "Podklady připravené přesně dle požadavků výrobce nebo dodavatele." },
          { _key: "r5", title: "Doporučení dodavatelů", text: "Ověřené kontakty na tiskárny a dodavatele merche — ušetříte čas s hledáním." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & výběr předmětů", days: 1, text: "Definujeme účel, rozpočet a vybereme vhodné předměty pro vaši značku." },
          { _key: "s2", title: "Grafické návrhy", days: 4, text: "Navrhnu grafiku pro každý předmět s ohledem na technologii tisku." },
          { _key: "s3", title: "Mockupy & revize", days: 3, text: "Představím realistické mockupy a doladíme detaily dle vašeho feedbacku." },
          { _key: "s4", title: "Tisková příprava & předání", days: 2, text: "Připravím finální soubory pro výrobu a doporučím vhodné dodavatele." },
        ],
        videoOverline: "Video",
        videoTitle: "Jak vzniká firemní merch",
        videoBody: "Nahlédněte do procesu návrhu merch kolekce — od nápadu po hotový produkt.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky merche a promo předmětů",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí design merche",
        cenikSubtitle: "Cena závisí na počtu předmětů a složitosti grafiky.",
        cenikPriceTitle: "Cena za design merche",
        cenikPriceLabel: "od 10 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Koncept merch kolekce", desc: "Vizuálně sjednocená sada předmětů" },
          { _key: "c2", name: "Grafické návrhy", desc: "Design přizpůsobený technologii tisku" },
          { _key: "c3", name: "Mockupy na předmětech", desc: "Realistické vizualizace pro schválení" },
          { _key: "c4", name: "2 kola revizí", desc: "Doladění grafiky dle feedbacku" },
          { _key: "c5", name: "Tiskové soubory", desc: "Podklady připravené pro výrobce" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Kreativní přístup", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Znalost tiskových technologií", scores: [5, 4, 1] },
          { _key: "t3", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
          { _key: "t4", criterion: "Osobní přístup", scores: [5, 2, 3] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(5),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Kolik stojí design merche?", answer: "Cena začíná od 10 000 Kč za sadu předmětů. Závisí na počtu typů předmětů a složitosti grafiky. Při objednání více kusů nabídnu zvýhodněnou cenu. Po briefu obdržíte přesnou kalkulaci." },
          { _key: "f2", question: "Zajistíte i výrobu merche?", answer: "Sám výrobu nezajišťuji, ale doporučím ověřené dodavatele a tiskárny, se kterými mám zkušenosti. Tiskové podklady připravím přesně dle jejich specifikací." },
          { _key: "f3", question: "Jaké předměty navrhujete nejčastěji?", answer: "Nejčastěji trička, mikiny, hrnky, zápisníky, plátěné tašky, propisky a flash disky. Navrhnu ale grafiku na cokoliv — od samolepek po reklamní stany." },
          { _key: "f4", question: "Můžete navrhnout celou merch kolekci?", answer: "Ano, a doporučuji to. Ucelená kolekce působí profesionálně a vizuálně konzistentně. Navrhnu systém, kde každý předmět ladí s ostatními i s vaší vizuální identitou." },
          { _key: "f5", question: "Jak dlouho návrh trvá?", answer: "Standardní dodání je 8–12 pracovních dní v závislosti na počtu předmětů. Zahrnuje koncepty, mockupy, revize a tiskovou přípravu." },
        ],
      },
    },

    // ── 4. POS materiály ──────────────────────────────────────────────
    {
      slug: "pos-materialy",
      data: {
        name: "POS materiály",
        category: CATEGORY,
        categoryOrder: 4,
        heroTitle: "POS materiály, které prodávají přímo v místě nákupu",
        heroSubheadline:
          "Wobblery, shelf talkery, stojany, displeje a samolepky — navrhnu POS materiály, které zaujmou zákazníka přesně tam, kde se rozhoduje o koupi.",
        heroPriceLabel: "Již od 8 000 Kč",
        heroProjectsLabel: "25+ projektů",
        heroDeliveryLabel: "dodání cca 7 dní",
        atomicAnswer:
          "POS (Point of Sale) materiály jsou reklamní prvky umístěné přímo v místě prodeje — wobblery, shelf talkery, stojany, displeje, samolepky a podlahová grafika. Služba zahrnuje návrh grafického konceptu, přípravu tiskových dat a mockupy pro schválení. Materiály jsou navržené tak, aby upoutaly pozornost a podpořily impulzní nákup. Cena od 8 000 Kč, dodání přibližně 7 pracovních dní. Navrhuje Simon Anfilov, ANFILOV Studio Praha, 30 let zkušeností v grafickém designu.",
        metaTitle: "POS materiály — ANFILOV | Design pro místo prodeje",
        metaDescription:
          "Design POS materiálů od 8 000 Kč. Wobblery, shelf talkery, displeje, samolepky. Dodání do 7 dní. Chci nabídku →",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Vaše produkty na regálu nikdo nevidí — chybí výrazná komunikace přímo v místě prodeje." },
          { _key: "p2", text: "POS materiály od dodavatele vypadají genericky a nevyčnívají mezi konkurencí." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "POS materiály, které zastavují zákazníka",
        reseniItems: [
          { _key: "r1", title: "Strategický koncept POS", text: "Navrhnu materiály s ohledem na konkrétní umístění v prodejně a nákupní chování zákazníků." },
          { _key: "r2", title: "Design wobblérů a shelf talkerů", text: "Malé formáty s velkým dopadem — grafika, která zaujme periferním viděním." },
          { _key: "r3", title: "Stojany a displeje", text: "Návrh grafiky pro podlahové stojany, pultové displeje a regálové systémy." },
          { _key: "r4", title: "Samolepky a podlahová grafika", text: "Navigační a promo prvky, které vedou zákazníka přímo k vašemu produktu." },
          { _key: "r5", title: "Tiskově připravené soubory", text: "Kompletní podklady dle specifikací výrobce — rozměry, materiály, řezné kontury." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & specifikace", days: 1, text: "Zjistím typy materiálů, rozměry, umístění v prodejně a požadavky na výrobu." },
          { _key: "s2", title: "Grafické návrhy", days: 3, text: "Navrhnu grafiku pro jednotlivé POS prvky s ohledem na viditelnost a čitelnost." },
          { _key: "s3", title: "Revize & mockupy", days: 2, text: "Doladíme návrhy a připravím vizualizace v kontextu prodejního prostředí." },
          { _key: "s4", title: "Tisková příprava & předání", days: 1, text: "Finalizuji soubory dle specifikací výrobce a předám kompletní balíček." },
        ],
        videoOverline: "Video",
        videoTitle: "POS design v praxi",
        videoBody: "Ukázka procesu tvorby POS materiálů — od briefu po hotový výrobek v prodejně.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky POS materiálů",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí design POS materiálů",
        cenikSubtitle: "Cena závisí na počtu a typech materiálů a složitosti grafiky.",
        cenikPriceTitle: "Cena za design POS",
        cenikPriceLabel: "od 8 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Strategický koncept", desc: "Návrh POS komunikace pro vaše prodejní místo" },
          { _key: "c2", name: "Grafické návrhy", desc: "Design pro jednotlivé typy POS materiálů" },
          { _key: "c3", name: "Mockupy v kontextu", desc: "Vizualizace materiálů v prodejním prostředí" },
          { _key: "c4", name: "2 kola revizí", desc: "Doladění grafiky dle feedbacku" },
          { _key: "c5", name: "Tiskové soubory", desc: "Podklady připravené pro výrobce" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Znalost retailového prostředí", scores: [5, 4, 1] },
          { _key: "t2", criterion: "Efektivita POS komunikace", scores: [5, 4, 2] },
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
          { _key: "f1", question: "Kolik stojí design POS materiálů?", answer: "Cena začíná od 8 000 Kč za sadu POS materiálů. Závisí na počtu typů prvků a složitosti grafiky. Při komplexnějším projektu (stojan + wobblery + shelf talkery) nabídnu zvýhodněnou cenu." },
          { _key: "f2", question: "Jaké POS materiály navrhujete?", answer: "Wobblery, shelf talkery, podlahové stojany, pultové displeje, závěsné POS, samolepky, podlahovou grafiku a regálové lišty. Navrhnu grafiku na jakýkoliv formát v místě prodeje." },
          { _key: "f3", question: "Zajistíte i výrobu POS materiálů?", answer: "Výrobu nezajišťuji přímo, ale spolupracuji s ověřenými dodavateli POS materiálů. Tiskové podklady připravím přesně dle jejich specifikací, takže výroba proběhne bez komplikací." },
          { _key: "f4", question: "Jak rychle dokážete POS materiály dodat?", answer: "Design je hotový za 5–8 pracovních dní. Výroba závisí na dodavateli — standardně 5–10 dní navíc. U urgentních kampaní lze domluvit expresní zpracování." },
          { _key: "f5", question: "Navrhujete POS i pro e-commerce?", answer: "Ano, navrhuji i digitální POS prvky — bannery pro e-shopy, produktové karty a grafiku pro marketplace platformy. Principy pozornosti a konverze jsou stejné online i offline." },
        ],
      },
    },
  ];
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("\n📦 Kategorie 4: Obalový design\n");

  const projectIds = await fetchAllProjectIds();
  const toolIds = await fetchAllToolIds();

  console.log(`  📦 Found ${projectIds.length} projects, ${toolIds.length} tools\n`);

  const services = buildServices(projectIds, toolIds);

  for (const svc of services) {
    await createOrUpdateSluzba(svc.slug, svc.data);
  }

  console.log("\n✅ Kategorie 4 hotová!\n");
}

module.exports = main;

if (require.main === module) {
  main().catch((e) => {
    console.error("Error:", e.message);
    process.exit(1);
  });
}
