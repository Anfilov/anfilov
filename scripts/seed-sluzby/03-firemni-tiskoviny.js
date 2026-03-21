const {
  fetchAllProjectIds,
  fetchAllToolIds,
  randomSubset,
  ref,
  createOrUpdateSluzba,
} = require("./_helpers");

const CATEGORY = "firemni-tiskoviny";

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
    // ── 1. Moderní vizitka ─────────────────────────────────────────────
    {
      slug: "moderni-vizitka",
      data: {
        name: "Moderní vizitka",
        category: CATEGORY,
        categoryOrder: 1,
        heroTitle: "Vizitka, která udělá první dojem za vás",
        heroSubheadline:
          "Profesionální vizitka je stále jedním z nejsilnějších nástrojů prvního kontaktu. Navrhnu vám vizitku, která zaujme designem, materiálem i zpracováním — a kterou si váš protějšek nechá.",
        heroPriceLabel: "Již od 3 000 Kč",
        heroProjectsLabel: "150+ projektů",
        heroDeliveryLabel: "dodání cca 5 dní",
        atomicAnswer:
          "Moderní vizitka je profesionálně navržená tisková vizitka, která reprezentuje vaši značku a zanechává silný první dojem. Služba zahrnuje grafický návrh obou stran vizitky, přípravu tiskových dat a volbu vhodného papíru a zpracování. Výstupem jsou tiskové soubory ve formátu PDF připravené pro tiskárnu. Cena začíná od 3 000 Kč, dodání do 5 pracovních dní. Vizitky navrhuje Simon Anfilov z ANFILOV Studia v Praze — grafický designér s více než 30 lety zkušeností a 150+ realizovanými projekty v oblasti firemních tiskovin.",
        metaTitle: "Návrh vizitky — ANFILOV | Vizitka, která zaujme",
        metaDescription:
          "Profesionální návrh vizitky od 3 000 Kč. Oboustranný design, tisková příprava, dodání do 5 dní. 150+ projektů. Chci nabídku →",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Vaše vizitka vypadá jako z šablony — nikdo si ji nezapamatuje a končí v koši." },
          { _key: "p2", text: "Design vizitky neodpovídá kvalitě vašich služeb — působíte levněji, než jste." },
          { _key: "p3", text: "Nemáte vizitku v souladu s vizuální identitou a vaše materiály vypadají nesourodě." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Vizitka navržená na míru vaší značce",
        reseniItems: [
          { _key: "r1", title: "Oboustranný design", text: "Grafický návrh přední i zadní strany — každý centimetr vizitky pracuje pro vaši značku." },
          { _key: "r2", title: "Tisková příprava", text: "PDF v tiskové kvalitě s ořezovými značkami, správným barevným prostorem a spadávkou." },
          { _key: "r3", title: "Doporučení materiálu", text: "Poradím s výběrem papíru, gramáže a finální úpravy — laminace, ražba, slepotisk." },
          { _key: "r4", title: "Návaznost na identitu", text: "Vizitka ladí s vaším logem, webem a dalšími materiály — jednotný vizuální jazyk." },
          { _key: "r5", title: "2 kola revizí", text: "Doladíme každý detail, dokud nebudete spokojeni." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Zadání & podklady", days: 1, text: "Předáte mi logo, kontaktní údaje a případné preference ohledně stylu." },
          { _key: "s2", title: "Grafický návrh", days: 2, text: "Připravím 2 varianty oboustranného designu vizitky." },
          { _key: "s3", title: "Revize & finalizace", days: 1, text: "Na základě vašeho feedbacku doladíme vybranou variantu." },
          { _key: "s4", title: "Tisková příprava", days: 1, text: "Připravím tiskové PDF a doporučím tiskárnu i materiál." },
        ],
        videoOverline: "Video",
        videoTitle: "Podívejte se, jak to vypadá v praxi",
        videoBody: "Krátká ukázka procesu návrhu vizitky — od prvního konceptu po tiskový soubor.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky navržených vizitek",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí návrh vizitky",
        cenikSubtitle: "Cena závisí na rozsahu projektu a požadovaných výstupech. Zde je orientační přehled.",
        cenikPriceTitle: "Cena za návrh vizitky",
        cenikPriceLabel: "od 3 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Oboustranný grafický návrh", desc: "Design přední i zadní strany vizitky" },
          { _key: "c2", name: "2 varianty konceptu", desc: "Vybíráte z promyšlených návrhů" },
          { _key: "c3", name: "2 kola revizí", desc: "Doladění vybraného konceptu dle vašeho feedbacku" },
          { _key: "c4", name: "Tiskové PDF", desc: "Soubory připravené pro profesionální tiskárnu" },
          { _key: "c5", name: "Doporučení materiálu", desc: "Papír, gramáž, finální úprava — laminace, ražba" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Kvalita designu", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Tisková příprava", scores: [5, 4, 1] },
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
          { _key: "f1", question: "Kolik stojí návrh vizitky?", answer: "Cena začíná od 3 000 Kč za kompletní oboustranný návrh včetně tiskové přípravy. Finální cena závisí na složitosti — zda chcete standardní design, nebo prémiovou vizitku s ražbou či slepotiskem. Po zadání vám pošlu přesnou kalkulaci." },
          { _key: "f2", question: "Jak dlouho trvá návrh vizitky?", answer: "Standardně 3–5 pracovních dní od dodání podkladů. Zahrnuje návrh, revize a tiskovou přípravu. U urgentních projektů lze domluvit expresní zpracování do 48 hodin." },
          { _key: "f3", question: "Zajistíte i samotný tisk vizitek?", answer: "Sám netisknu, ale doporučím spolehlivou tiskárnu, se kterou dlouhodobě spolupracuji. Tisková data připravím tak, aby výsledek přesně odpovídal návrhu." },
          { _key: "f4", question: "V jakém formátu vizitku dostanu?", answer: "Tiskové PDF s ořezovými značkami a spadávkou, připravené pro profesionální tisk. Na přání dodám i editovatelný soubor ve Figmě nebo Adobe Illustratoru." },
          { _key: "f5", question: "Můžete navrhnout vizitku, která navazuje na moji vizuální identitu?", answer: "Ano, to je ideální postup. Pokud máte brand manuál nebo alespoň logo a definované barvy, vizitku navrhnu tak, aby perfektně ladila s celým vizuálním stylem vaší značky." },
        ],
      },
    },

    // ── 2. Katalog / Brožura ───────────────────────────────────────────
    {
      slug: "katalog-brozura",
      data: {
        name: "Katalog / Brožura",
        category: CATEGORY,
        categoryOrder: 2,
        heroTitle: "Katalog, který vaše produkty prodá za vás",
        heroSubheadline:
          "Profesionální katalog nebo brožura je prodejní nástroj, který pracuje 24/7. Navrhnu vám tiskovinu, která prezentuje vaši nabídku přehledně, atraktivně a přesvědčivě.",
        heroPriceLabel: "Již od 15 000 Kč",
        heroProjectsLabel: "40+ projektů",
        heroDeliveryLabel: "dodání cca 14 dní",
        atomicAnswer:
          "Katalog nebo brožura je profesionálně navržená vícestránková tiskovina určená k prezentaci produktů, služeb nebo firmy. Služba zahrnuje návrh layoutu, sazbu textu, práci s fotografiemi a přípravu tiskových dat. Výstupem je tiskové PDF i digitální verze pro web. Cena začíná od 15 000 Kč, dodání do 14 pracovních dní. Katalogy a brožury navrhuje Simon Anfilov z ANFILOV Studia v Praze — grafický designér s více než 30 lety zkušeností a desítkami realizovaných tiskovin pro české i zahraniční firmy.",
        metaTitle: "Katalog a brožura — ANFILOV | Design, který prodává",
        metaDescription:
          "Profesionální návrh katalogu nebo brožury od 15 000 Kč. Přehledný layout, tisková příprava, dodání do 14 dní. 40+ projektů.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Váš katalog vypadá zastarale a nezaujme — zákazníci ho odloží dřív, než si ho pročtou." },
          { _key: "p2", text: "Sázíte katalog sami ve Wordu nebo Canvě a výsledek nevypadá profesionálně." },
          { _key: "p3", text: "Nemáte čas ani zkušenosti s přípravou tiskových dat — tiskárna vrací soubory s chybami." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Katalog navržený na míru vaší nabídce",
        reseniItems: [
          { _key: "r1", title: "Profesionální layout", text: "Přehledná struktura, vizuální hierarchie a typografie, které vedou čtenáře od první do poslední stránky." },
          { _key: "r2", title: "Práce s fotografiemi", text: "Retušování, úpravy a optimální zasazení vašich fotek do layoutu." },
          { _key: "r3", title: "Sazba textu", text: "Profesionální typografická sazba — čitelnost, odsazení, řádkování, žádné vdovy a sirotky." },
          { _key: "r4", title: "Tisková i digitální verze", text: "PDF pro tiskárnu + interaktivní verze pro web s proklikávatelnými odkazy." },
          { _key: "r5", title: "2 kola revizí", text: "Doladíme každou stránku, dokud nebude perfektní." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Brief & struktura", days: 2, text: "Definujeme obsah, rozsah a vizuální směr katalogu. Navrhuji strukturu stránek." },
          { _key: "s2", title: "Layout & design", days: 6, text: "Vytvořím kompletní grafický návrh všech stránek včetně obálky." },
          { _key: "s3", title: "Sazba & fotografie", days: 3, text: "Zasadím texty, upravím fotografie a doladím typografické detaily." },
          { _key: "s4", title: "Revize & finalizace", days: 2, text: "Projdeme katalog společně a zapracuji vaše připomínky." },
          { _key: "s5", title: "Tisková příprava", days: 1, text: "Exportuji tiskové PDF a doporučím tiskárnu, papír a vazbu." },
        ],
        videoOverline: "Video",
        videoTitle: "Podívejte se, jak vzniká katalog",
        videoBody: "Od prvního briefu po tiskový soubor — nahlédněte do procesu tvorby katalogu.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky katalogů a brožur",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí katalog nebo brožura",
        cenikSubtitle: "Cena závisí na počtu stran, složitosti layoutu a množství fotografií.",
        cenikPriceTitle: "Cena za návrh katalogu",
        cenikPriceLabel: "od 15 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Návrh layoutu a obálky", desc: "Kompletní grafický design všech stránek" },
          { _key: "c2", name: "Sazba textu", desc: "Profesionální typografická sazba celého obsahu" },
          { _key: "c3", name: "Úprava fotografií", desc: "Retuše, korekce barev a zasazení do layoutu" },
          { _key: "c4", name: "Tiskové PDF", desc: "Soubory připravené pro profesionální tiskárnu" },
          { _key: "c5", name: "Digitální verze", desc: "Interaktivní PDF pro web a e-mail" },
          { _key: "c6", name: "2 kola revizí", desc: "Doladění obsahu a designu dle vašeho feedbacku" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Kvalita layoutu", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Typografická preciznost", scores: [5, 4, 1] },
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
          { _key: "f1", question: "Kolik stojí návrh katalogu?", answer: "Cena začíná od 15 000 Kč a závisí na počtu stran a složitosti. Katalog o 8 stranách vyjde jinak než 48stránková brožura. Po úvodním briefu vám pošlu přesnou kalkulaci." },
          { _key: "f2", question: "Jak dlouho trvá návrh katalogu?", answer: "Standardně 10–14 pracovních dní od dodání podkladů. U rozsáhlejších katalogů (nad 32 stran) může být termín delší. Expresní zpracování je možné po domluvě." },
          { _key: "f3", question: "Potřebuji mít připravené texty a fotografie?", answer: "Ideálně ano — kvalitní podklady zrychlí celý proces. Pokud texty nebo fotky nemáte, mohu doporučit copywritera a fotografa, se kterými spolupracuji." },
          { _key: "f4", question: "Můžete navrhnout katalog i v cizím jazyce?", answer: "Ano, běžně navrhuji katalogy v češtině, angličtině i němčině. Při vícejazyčných verzích připravím šablonu, která usnadní překlad a sazbu dalších mutací." },
          { _key: "f5", question: "Doporučíte tiskárnu a typ vazby?", answer: "Ano. Na základě rozsahu a účelu katalogu doporučím vhodný papír, gramáž a typ vazby (V1, V2, spirála). Tiskárna dostane data připravená přesně podle jejích specifikací." },
        ],
      },
    },

    // ── 3. Leták / Flyer ───────────────────────────────────────────────
    {
      slug: "letak-flyer",
      data: {
        name: "Leták / Flyer",
        category: CATEGORY,
        categoryOrder: 3,
        heroTitle: "Leták, který zaujme a přiměje k akci",
        heroSubheadline:
          "Účinný leták musí zaujmout během 2 sekund. Navrhnu vám tiskovinu s jasným sdělením, silným vizuálem a výzvou k akci — ať už jde o akci, event nebo nový produkt.",
        heroPriceLabel: "Již od 4 000 Kč",
        heroProjectsLabel: "80+ projektů",
        heroDeliveryLabel: "dodání cca 5 dní",
        atomicAnswer:
          "Leták neboli flyer je jednostránková nebo skládaná tiskovina určená k propagaci produktů, služeb, akcí nebo eventů. Služba zahrnuje grafický návrh, sazbu textu, práci s fotografiemi a přípravu tiskových dat. Výstupem jsou tiskové soubory ve formátu PDF a volitelně digitální verze pro sociální sítě. Cena začíná od 4 000 Kč, dodání do 5 pracovních dní. Letáky navrhuje Simon Anfilov z ANFILOV Studia v Praze s více než 30 lety zkušeností v grafickém designu a 80+ realizovanými projekty v oblasti reklamních tiskovin.",
        metaTitle: "Návrh letáku — ANFILOV | Leták, který zaujme",
        metaDescription:
          "Profesionální návrh letáku od 4 000 Kč. Atraktivní design, jasné sdělení, tisková příprava. Dodání do 5 dní. 80+ projektů.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Vaše letáky končí v koši — nepřitáhnou pozornost a nemotivují k akci." },
          { _key: "p2", text: "Leták navržený v Canvě vypadá genericky a neodlišuje vás od konkurence." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Leták, který plní svůj účel",
        reseniItems: [
          { _key: "r1", title: "Výrazný vizuální koncept", text: "Design, který zaujme na první pohled — silný vizuál, jasná hierarchie informací." },
          { _key: "r2", title: "Jasná výzva k akci", text: "Čtenář okamžitě ví, co má udělat — zavolat, navštívit web, přijít na akci." },
          { _key: "r3", title: "Tisková i digitální verze", text: "PDF pro tiskárnu + formáty optimalizované pro sociální sítě a e-mail." },
          { _key: "r4", title: "2 kola revizí", text: "Doladíme design i texty, dokud nebudete spokojeni." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Zadání & podklady", days: 1, text: "Definujeme cíl letáku, cílovou skupinu a klíčové sdělení." },
          { _key: "s2", title: "Grafický návrh", days: 2, text: "Připravím 2 varianty designu s různým vizuálním přístupem." },
          { _key: "s3", title: "Revize & finalizace", days: 1, text: "Zapracuji váš feedback a doladím finální verzi." },
          { _key: "s4", title: "Tisková příprava", days: 1, text: "Exportuji tiskové PDF a případně verze pro digitální kanály." },
        ],
        videoOverline: "Video",
        videoTitle: "Jak vzniká efektivní leták",
        videoBody: "Podívejte se, jak navrhuji letáky, které zaujmou a přimějí k akci.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky letáků a flyerů",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí návrh letáku",
        cenikSubtitle: "Cena závisí na formátu, počtu stran a složitosti designu.",
        cenikPriceTitle: "Cena za návrh letáku",
        cenikPriceLabel: "od 4 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Grafický návrh", desc: "Oboustranný design letáku nebo flyeru" },
          { _key: "c2", name: "2 varianty konceptu", desc: "Různé vizuální přístupy k výběru" },
          { _key: "c3", name: "2 kola revizí", desc: "Doladění designu a textů" },
          { _key: "c4", name: "Tiskové PDF", desc: "Soubory připravené pro profesionální tisk" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Vizuální impact", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Konverzní design", scores: [5, 4, 1] },
          { _key: "t3", criterion: "Rychlost dodání", scores: [5, 3, 4] },
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
          { _key: "f1", question: "Kolik stojí návrh letáku?", answer: "Cena začíná od 4 000 Kč za oboustranný leták A5 nebo DL. Skládané letáky (trojhran, Z-fold) nebo větší formáty stojí více. Po zadání obdržíte přesnou cenovou nabídku." },
          { _key: "f2", question: "Jak rychle leták doručíte?", answer: "Standardně do 5 pracovních dní. U jednoduchých projektů i dříve. Expresní zpracování do 48 hodin je možné za příplatek." },
          { _key: "f3", question: "Navrhnete i skládaný leták?", answer: "Ano. Navrhuji všechny běžné formáty — jednolistý A5/A4/DL, trojhranný fold, Z-fold i brožuru. Formát doporučím na základě obsahu a účelu tiskoviny." },
          { _key: "f4", question: "Můžete leták navrhnout i pro digitální distribuci?", answer: "Samozřejmě. Kromě tiskového PDF dodám i verze optimalizované pro sociální sítě (Instagram, Facebook) a e-mailové kampaně. Formáty přizpůsobím vašim kanálům." },
        ],
      },
    },

    // ── 4. Roll-up / Banner / Plakát ───────────────────────────────────
    {
      slug: "rollup-banner-plakat",
      data: {
        name: "Roll-up / Banner / Plakát",
        category: CATEGORY,
        categoryOrder: 4,
        heroTitle: "Velkoformátový design, který nepřehlédnete",
        heroSubheadline:
          "Roll-up, banner nebo plakát musí fungovat na dálku — jasné sdělení, silný vizuál a čitelnost z několika metrů. Navrhnu vám tiskovinu, která zaujme na výstavě, v prodejně i na ulici.",
        heroPriceLabel: "Již od 5 000 Kč",
        heroProjectsLabel: "60+ projektů",
        heroDeliveryLabel: "dodání cca 5 dní",
        atomicAnswer:
          "Roll-up, banner a plakát jsou velkoformátové tiskové materiály určené pro výstavy, konference, prodejny a venkovní reklamu. Služba zahrnuje grafický návrh s ohledem na čitelnost na vzdálenost, přípravu tiskových dat ve velkém rozlišení a doporučení produkce. Cena začíná od 5 000 Kč, dodání do 5 pracovních dní. Velkoformátový design provádí Simon Anfilov z ANFILOV Studia v Praze — grafický designér s více než 30 lety zkušeností a desítkami realizací pro veletrhy, retailové řetězce i kulturní akce.",
        metaTitle: "Roll-up a banner — ANFILOV | Velkoformátový design",
        metaDescription:
          "Návrh roll-upu, banneru nebo plakátu od 5 000 Kč. Profesionální design pro výstavy a eventy. Dodání do 5 dní.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Váš roll-up vypadá jako DIY projekt — neprofesionální design vás na výstavě diskvalifikuje." },
          { _key: "p2", text: "Text je nečitelný z větší vzdálenosti a kolemjdoucí váš stánek přejdou bez povšimnutí." },
          { _key: "p3", text: "Tisková data nemají správné rozlišení a výsledný tisk je rozmazaný nebo pixelovaný." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Design optimalizovaný pro velký formát",
        reseniItems: [
          { _key: "r1", title: "Čitelnost na vzdálenost", text: "Správná velikost písma, kontrast a hierarchie — sdělení funguje i z 5 metrů." },
          { _key: "r2", title: "Silný vizuální koncept", text: "Design, který přitáhne pozornost v prostředí plném vizuálního šumu." },
          { _key: "r3", title: "Tisková data ve vysokém rozlišení", text: "Soubory připravené přesně podle specifikací tiskárny — žádné pixely." },
          { _key: "r4", title: "Doporučení produkce", text: "Materiál, typ tisku, laminace — poradím s volbou pro vaše konkrétní použití." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Zadání & specifikace", days: 1, text: "Definujeme formát, účel a místo použití. Zjistíme specifikace tiskárny." },
          { _key: "s2", title: "Grafický návrh", days: 2, text: "Připravím návrh optimalizovaný pro konkrétní formát a vzdálenost čtení." },
          { _key: "s3", title: "Revize & finalizace", days: 1, text: "Zapracuji vaše připomínky a doladím finální podobu." },
          { _key: "s4", title: "Tisková příprava", days: 1, text: "Exportuji data ve správném rozlišení a formátu pro tiskárnu." },
        ],
        videoOverline: "Video",
        videoTitle: "Jak navrhuji velkoformátový design",
        videoBody: "Od prvního konceptu po tiskový soubor — ukázka procesu návrhu roll-upu.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky roll-upů, bannerů a plakátů",
        portfolioProjects: rp(4),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí velkoformátový design",
        cenikSubtitle: "Cena závisí na typu tiskoviny, formátu a složitosti designu.",
        cenikPriceTitle: "Cena za velkoformátový design",
        cenikPriceLabel: "od 5 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Grafický návrh", desc: "Design optimalizovaný pro velký formát" },
          { _key: "c2", name: "Vizuální koncept", desc: "Atraktivní řešení s jasnou hierarchií" },
          { _key: "c3", name: "2 kola revizí", desc: "Doladění designu dle vašeho feedbacku" },
          { _key: "c4", name: "Tisková data", desc: "Soubory ve vysokém rozlišení pro tiskárnu" },
          { _key: "c5", name: "Doporučení produkce", desc: "Materiál, typ tisku, laminace" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Vizuální impact", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Technická příprava", scores: [5, 4, 1] },
          { _key: "t3", criterion: "Rychlost dodání", scores: [5, 3, 4] },
          { _key: "t4", criterion: "Poměr cena / kvalita", scores: [5, 2, 4] },
        ],
        cenikTableNote: "Hodnocení 1–5 na základě reálných zkušeností z trhu.",
        nastrojeOverline: "Nástroje",
        nastrojeTitle: "S čím pracuji",
        nastrojeItems: rt(4),
        faqOverline: "FAQ",
        faqTitle: "Často kladené otázky",
        faqItems: [
          { _key: "f1", question: "Kolik stojí návrh roll-upu?", answer: "Cena za návrh roll-upu začíná od 5 000 Kč. Zahrnuje grafický design, přípravu tiskových dat a doporučení tiskárny. Bannery a plakáty se cenově pohybují podobně — závisí na formátu a složitosti." },
          { _key: "f2", question: "V jakém rozlišení dodáváte soubory?", answer: "Pro velkoformátový tisk standardně 150–300 DPI v reálné velikosti, podle specifikací tiskárny. U roll-upů a bannerů je to typicky 150 DPI v měřítku 1:1." },
          { _key: "f3", question: "Můžete navrhnout celý výstavní stánek?", answer: "Ano. Kromě roll-upů navrhuji i kompletní vizuál výstavních expozic — wall grafiku, pultové bannery, podlahovou grafiku a informační panely. Řeším vše od konceptu po tiskovou přípravu." },
          { _key: "f4", question: "Jak rychle roll-up doručíte?", answer: "Návrh je hotový do 5 pracovních dní. Samotný tisk a výroba roll-upu trvá u tiskárny dalších 2–5 dní. Při urgentním termínu mohu návrh dodat do 48 hodin." },
          { _key: "f5", question: "Zajistíte i samotnou výrobu?", answer: "Sám nevyrábím, ale spolupracuji s ověřenými tiskárnami. Tisková data připravím přesně podle jejich specifikací a doporučím nejlepší poměr cena/kvalita pro váš projekt." },
        ],
      },
    },

    // ── 5. Firemní dokumenty ───────────────────────────────────────────
    {
      slug: "firemni-dokumenty",
      data: {
        name: "Firemní dokumenty",
        category: CATEGORY,
        categoryOrder: 5,
        heroTitle: "Firemní dokumenty, které působí profesionálně a konzistentně",
        heroSubheadline:
          "Každý e-mail, nabídka a prezentace je vizitkou vaší firmy. Navrhnu vám šablony pro Word, PowerPoint a PDF, které váš tým snadno použije a vaše značka bude vypadat skvěle při každém kontaktu.",
        heroPriceLabel: "Již od 8 000 Kč",
        heroProjectsLabel: "50+ projektů",
        heroDeliveryLabel: "dodání cca 7 dní",
        atomicAnswer:
          "Firemní dokumenty jsou profesionálně navržené šablony pro běžnou firemní komunikaci — nabídky, faktury, prezentace, dopisy a interní dokumenty. Služba zahrnuje návrh designu, vytvoření editovatelných šablon ve formátech Word, PowerPoint a PDF a přípravu pravidel pro jejich používání. Výstupem jsou šablony, které si váš tým snadno upraví bez designérských znalostí. Cena začíná od 8 000 Kč, dodání do 7 pracovních dní. Šablony navrhuje Simon Anfilov z ANFILOV Studia v Praze — 30+ let zkušeností v korporátním designu a desítky firem s konzistentní dokumentací.",
        metaTitle: "Firemní dokumenty — ANFILOV | Šablony na míru",
        metaDescription:
          "Profesionální šablony firemních dokumentů od 8 000 Kč. Word, PowerPoint, PDF. Konzistentní komunikace. Dodání do 7 dní.",
        problemOverline: "Problém",
        problemTitle: "Poznáváte některý z těchto problémů?",
        problemItems: [
          { _key: "p1", text: "Každý kolega formátuje dokumenty po svém — nabídky a prezentace vypadají pokaždé jinak." },
          { _key: "p2", text: "Nemáte šablony a tvorba každého dokumentu zabere zbytečně mnoho času." },
          { _key: "p3", text: "Vaše dokumenty neodpovídají vizuální identitě firmy — logo je tam, ale zbytek vypadá amatérsky." },
        ],
        reseniOverline: "Řešení",
        reseniTitle: "Šablony, které váš tým zvládne používat",
        reseniItems: [
          { _key: "r1", title: "Editovatelné šablony", text: "Word, PowerPoint, Google Docs — váš tým si obsah upraví sám, design zůstane konzistentní." },
          { _key: "r2", title: "Sada klíčových dokumentů", text: "Nabídka, faktura, dopis, prezentace, hlavičkový papír — kompletní sada pro denní provoz." },
          { _key: "r3", title: "Návaznost na identitu", text: "Šablony přesně odpovídají vašemu brand manuálu — barvy, typografie, logo." },
          { _key: "r4", title: "Návod k použití", text: "Krátký manuál, jak šablony správně používat — aby je zvládl i nový kolega." },
          { _key: "r5", title: "2 kola revizí", text: "Doladíme šablony, dokud nebudou přesně vyhovovat vašemu workflow." },
        ],
        procesOverline: "Proces",
        procesTitle: "Jak probíhá spolupráce",
        procesSteps: [
          { _key: "s1", title: "Audit & zadání", days: 1, text: "Zmapuji, jaké dokumenty denně používáte a v jakých formátech je potřebujete." },
          { _key: "s2", title: "Grafický návrh", days: 3, text: "Navrhnu design šablon v souladu s vaší vizuální identitou." },
          { _key: "s3", title: "Tvorba šablon", days: 2, text: "Připravím editovatelné šablony ve Word, PowerPoint nebo Google Docs." },
          { _key: "s4", title: "Revize & předání", days: 1, text: "Otestujeme šablony s vaším týmem, zapracuji připomínky a předám finální verze." },
        ],
        videoOverline: "Video",
        videoTitle: "Proč investovat do firemních šablon",
        videoBody: "Krátké vysvětlení, jak šablony dokumentů šetří čas a posilují značku.",
        videoSource: "url",
        videoUrl: PLACEHOLDER_VIDEO,
        portfolioOverline: "Reference",
        portfolioTitle: "Ukázky firemních dokumentů",
        portfolioProjects: rp(3),
        cenikOverline: "Ceník a srovnání",
        cenikTitle: "Kolik stojí firemní šablony",
        cenikSubtitle: "Cena závisí na počtu typů dokumentů a požadovaných formátech.",
        cenikPriceTitle: "Cena za sadu šablon",
        cenikPriceLabel: "od 8 000 Kč",
        cenikIncludedTitle: "Co vše je v ceně",
        cenikIncludedItems: [
          { _key: "c1", name: "Grafický návrh šablon", desc: "Design v souladu s vizuální identitou firmy" },
          { _key: "c2", name: "Editovatelné soubory", desc: "Word, PowerPoint, Google Docs — dle potřeby" },
          { _key: "c3", name: "Sada klíčových dokumentů", desc: "Nabídka, dopis, prezentace, hlavičkový papír" },
          { _key: "c4", name: "Návod k použití", desc: "Stručný manuál pro váš tým" },
          { _key: "c5", name: "2 kola revizí", desc: "Doladění šablon dle vašeho feedbacku" },
        ],
        cenikTableTitle: "Proč je to se mnou výhodnější",
        cenikTableColumns: ["ANFILOV", "Agentura", "Svépomocí"],
        cenikTableRows: [
          { _key: "t1", criterion: "Konzistence s identitou", scores: [5, 4, 2] },
          { _key: "t2", criterion: "Použitelnost šablon", scores: [5, 3, 3] },
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
          { _key: "f1", question: "Kolik stojí sada firemních šablon?", answer: "Cena začíná od 8 000 Kč za základní sadu (hlavičkový papír, nabídka, prezentace). Kompletní sada se všemi typy dokumentů stojí více. Po zmapování vašich potřeb vám pošlu přesnou kalkulaci." },
          { _key: "f2", question: "V jakém formátu šablony doručíte?", answer: "Standardně ve formátu Word (.dotx) a PowerPoint (.potx). Na přání dodám i Google Docs, Google Slides nebo Adobe InDesign šablony. Formát přizpůsobím nástrojům, které váš tým denně používá." },
          { _key: "f3", question: "Zvládne šablony používat i netechnický kolega?", answer: "Ano, to je klíčový požadavek. Šablony navrhuji tak, aby stačilo vyplnit obsah — formátování, barvy a rozvržení se aplikují automaticky. Součástí je i krátký návod k použití." },
          { _key: "f4", question: "Můžete navrhnout i prezentaci v PowerPointu?", answer: "Ano. PowerPoint šablona obsahuje titulní slide, obsahové slidy, slidy s grafy a tabulkami, mezislidy a závěrečný slide. Vše s předdefinovanými styly, aby prezentace vypadala profesionálně bez manuálního formátování." },
          { _key: "f5", question: "Jak zajistíte, že šablony budou odpovídat naší identitě?", answer: "Vycházím z vašeho brand manuálu — barvy, typografie, logo. Pokud brand manuál nemáte, navrhnu šablony na základě vašeho stávajícího vizuálního stylu a doporučím, jak ho sjednotit." },
        ],
      },
    },
  ];
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("\n🖨️ Kategorie 3: Firemní & reklamní tiskoviny\n");

  const projectIds = await fetchAllProjectIds();
  const toolIds = await fetchAllToolIds();

  console.log(`  📦 Found ${projectIds.length} projects, ${toolIds.length} tools\n`);

  const services = buildServices(projectIds, toolIds);

  for (const svc of services) {
    await createOrUpdateSluzba(svc.slug, svc.data);
  }

  console.log("\n✅ Kategorie 3 hotová!\n");
}

module.exports = main;

if (require.main === module) {
  main().catch((e) => {
    console.error("Error:", e.message);
    process.exit(1);
  });
}
