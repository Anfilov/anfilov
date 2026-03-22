const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "d8caxrt0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const PATCHES = {
  // ── Obalový design ──────────────────────────────────────────────

  "design-obalu": {
    atomicAnswer:
      "Obalový design je tvorba vizuální podoby produktového obalu, která prodává zboží přímo v regálu a odlišuje ho od konkurence. Služba je určena výrobcům potravin, nápojů, kosmetiky a spotřebního zboží, kteří uvádějí nový produkt nebo modernizují stávající řadu. Klient dostává grafický návrh obalu připravený k tisku, 3D vizualizaci produktu pro prezentace a e-shop, tiskové podklady s ořezem a spadávkou ve správném barevném profilu, technický výkres s kótami a adaptace na varianty produktu. Proces začíná analýzou konkurenčních produktů v dané kategorii, pokračuje návrhem konceptu a končí přípravou finálních tiskových dat po konzultaci s tiskárnou. Cena obalového designu začíná od 12 000 Kč, dodací lhůta je přibližně 12 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu obal, který zaujme v regálu a přesvědčí zákazníka k nákupu. Každý design vychází z analýzy kategorie a respektuje technické požadavky výroby.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí design produktového obalu?",
        answer:
          "Cena obalového designu začíná od 12 000 Kč za jeden formát. Konečná částka závisí na složitosti tvaru obalu, počtu variant (příchutě, gramáže) a rozsahu ilustrací nebo fotografií. V ceně je analýza kategorie, návrh konceptu, revizní kola, 3D vizualizace a tiskové podklady. Adaptace na další varianty produktové řady jsou zvýhodněné. Přesnou kalkulaci dostanete po úvodní konzultaci.",
      },
      {
        _key: "f2",
        question: "Jak dlouho trvá návrh obalu?",
        answer:
          "Standardní dodací lhůta je přibližně 12 dní. V prvních dnech probíhá analýza a skicování konceptů, následuje grafické zpracování a revize. Závěrečná fáze zahrnuje přípravu tiskových dat a kontrolu s tiskárnou. Časový rámec závisí na složitosti projektu a rychlosti vaší zpětné vazby. U sériových produktů se čas zkracuje díky navázání na existující designový systém.",
      },
      {
        _key: "f3",
        question: "Připravíte podklady přímo pro tiskárnu?",
        answer:
          "Ano, dodávám kompletní tisková data připravená k výrobě. Soubory obsahují správné barevné profily (CMYK, případně Pantone), ořezové značky, spadávku a technický výkres s kótami. Komunikuji přímo s vaší tiskárnou ohledně specifických požadavků na materiál a technologii tisku. Tím eliminuji chyby, které vznikají při předávání podkladů přes prostředníky.",
      },
      {
        _key: "f4",
        question: "Navrhnete i celou produktovou řadu?",
        answer:
          "Ano, při návrhu řady vytvářím jednotný designový systém, který umožňuje odlišit jednotlivé varianty a zároveň zachovat soudržnost značky. Každý produkt v řadě má vlastní barevné kódování nebo grafický prvek, ale sdílí společný vizuální jazyk. Cena za adaptace na další varianty je zvýhodněná oproti samostatnému návrhu. Systémový přístup šetří čas i rozpočet při rozšiřování sortimentu.",
      },
      {
        _key: "f5",
        question: "Můžete navrhnout obal i bez znalosti tiskové technologie?",
        answer:
          "Nemusíte se starat o technické detaily. Zjistím požadavky vaší tiskárny sám a návrh přizpůsobím konkrétní technologii tisku, ať jde o ofset, flexotisk nebo digitální tisk. Pokud tiskárnu ještě nemáte, doporučím osvědčené dodavatele. Důležité je znát typ produktu, materiál obalu a plánovaný náklad, abych zvolil správný přístup od začátku.",
      },
    ],
    metaTitle: "Obalový design — ANFILOV | Design obalu na míru",
    metaDescription:
      "Obalový design od 12 000 Kč. Návrh obalu, 3D vizualizace, tisková data. 30 let zkušeností v reklamě. Konzultace zdarma.",
  },

  "etiketa-label-design": {
    atomicAnswer:
      "Design etikety je návrh grafické podoby štítku na produkt, který komunikuje značku, informuje zákazníka a splňuje legislativní požadavky. Služba je určena výrobcům vín, piv, limonád, kosmetiky, potravin a dalšího baleného zboží, kteří potřebují profesionální etiketu pro nový produkt nebo řadu. Klient dostává grafický návrh etikety ve finální velikosti, tiskové podklady s přesnými barvami a ořezem, 3D vizualizaci produktu s etiketou na lahvi nebo obalu, adaptace na varianty produktu a verzi pro e-shop. Proces zahrnuje analýzu konkurence v dané kategorii, návrh konceptu s respektováním legislativních textů a přípravu tiskových dat po konzultaci s tiskárnou. Cena designu etikety začíná od 8 000 Kč, dodací lhůta je přibližně 8 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu etiketu, která zaujme na pultu a podpoří příběh vašeho produktu. Design respektuje legislativu a technické požadavky tisku na konkrétní materiál.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí návrh etikety?",
        answer:
          "Cena designu etikety začíná od 8 000 Kč za jeden formát. Závisí na složitosti grafiky, počtu variant (přední a zadní etiketa, krčkový pásek) a rozsahu ilustrací. V ceně je analýza kategorie, grafický návrh, revize, 3D vizualizace a tiskové podklady. Adaptace na další příchutě nebo ročníky jsou zvýhodněné. Přesnou cenu stanovím po úvodní konzultaci, kdy uvidím rozsah projektu.",
      },
      {
        _key: "f2",
        question: "Poradíte s legislativními texty na etiketě?",
        answer:
          "Graficky zpracuji všechny povinné údaje tak, aby splňovaly legislativní požadavky a zároveň nenarušovaly design. Znám pravidla pro velikost písma, povinné symboly a rozmístění informací na potravinových i kosmetických etiketách. Samotný obsah textů (složení, alergeny, nutriční hodnoty) dodáváte vy nebo váš technolog. Zajistím, aby vše bylo čitelné a správně umístěné.",
      },
      {
        _key: "f3",
        question: "Jak dlouho trvá návrh etikety?",
        answer:
          "Dodací lhůta je přibližně 8 dní. V prvních dnech analyzuji kategorii a navrhuji koncepty, následuje grafické zpracování a revize. Závěrečná fáze je příprava tiskových dat. Při návrhu celé produktové řady se doba úměrně prodlužuje, ale jednotlivé adaptace jsou rychlejší. Expresní dodání je možné domluvit individuálně.",
      },
      {
        _key: "f4",
        question: "V jakém formátu etiketu dodáváte?",
        answer:
          "Dodávám kompletní tiskové podklady v PDF s ořezovými značkami a správným barevným profilem (CMYK, případně Pantone pro speciální barvy). Součástí je 3D vizualizace produktu s etiketou pro prezentace a e-shop. Otevřené zdrojové soubory zůstávají k dispozici pro budoucí úpravy. Komunikuji s vaší tiskárnou ohledně specifik materiálu a technologie tisku.",
      },
    ],
    metaTitle: "Etiketa a label design — ANFILOV | Návrh etiket",
    metaDescription:
      "Design etikety od 8 000 Kč. Grafický návrh, 3D vizualizace, tisková data. Víno, pivo, kosmetika. Konzultace zdarma.",
  },

  "merch-promo-predmety": {
    atomicAnswer:
      "Merch a promo předměty jsou reklamní a propagační produkty s grafikou vaší značky, které posilují povědomí o firmě a budují vztah se zákazníky i zaměstnanci. Služba je určena firmám, startupům a organizátorům akcí, kteří potřebují originální propagační materiály od triček po propisky. Klient dostává grafické návrhy potisků a brandingu na vybrané předměty, vizualizace produktů před výrobou, tiskové podklady pro konkrétní technologii (sítotisk, sublimace, tamponový tisk, výšivka) a doporučení dodavatelů s kalkulací výroby. Proces zahrnuje výběr vhodných předmětů podle cílové skupiny a rozpočtu, návrh grafiky respektující technické limity a přípravu podkladů pro výrobu. Cena designu merch a promo předmětů začíná od 10 000 Kč, dodací lhůta je přibližně 10 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu merch a promo předměty, které lidé skutečně používají a rádi nosí. Originální design přizpůsobený technologii výroby a rozpočtu projektu.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí design promo předmětů?",
        answer:
          "Cena začíná od 10 000 Kč za sadu návrhů. Závisí na počtu a typu předmětů, složitosti grafiky a počtu variant. V ceně je návrh grafiky, vizualizace na produktech, tiskové podklady a doporučení dodavatelů. Samotná výroba předmětů není v ceně designu, ale pomohu s výběrem dodavatele a kalkulací výrobních nákladů. Přesnou nabídku sestavím po konzultaci.",
      },
      {
        _key: "f2",
        question: "Jaké promo předměty můžete navrhnout?",
        answer:
          "Navrhuji grafiku pro jakýkoliv propagační předmět: trička, mikiny, čepice, tašky, hrnky, lahve na vodu, deštníky, zápisníky, propisky, USB disky, samolepky, odznaky a další. Klíčové je vybrat předměty, které vaše cílová skupina skutečně ocení a bude používat. Doporučím vhodný sortiment podle účelu, ať jde o firemní onboarding, konferenci nebo zákaznický dárek.",
      },
      {
        _key: "f3",
        question: "Pomůžete i s výběrem dodavatele výroby?",
        answer:
          "Ano, doporučím osvědčené dodavatele propagačních předmětů a pomohu s komunikací technických požadavků. Znám možnosti a limity různých technologií potisku, takže návrh přizpůsobím reálným výrobním podmínkám. Výrobní náklady závisí na nákladu, materiálu a technologii. Kalkulaci výroby zajistí dodavatel, já dohlédnu na kvalitu realizace.",
      },
      {
        _key: "f4",
        question: "Jak dlouho trvá příprava návrhů?",
        answer:
          "Dodací lhůta designu je přibližně 10 dní. Zahrnuje výběr předmětů, návrh grafiky, vizualizace a přípravu tiskových podkladů. Samotná výroba u dodavatele pak trvá dalších 2-4 týdny podle typu předmětů a nákladu. Doporučuji počítat s dostatečnou rezervou, zejména před plánovanými akcemi nebo konferencemi. Expresní design je možný po domluvě.",
      },
      {
        _key: "f5",
        question: "Lze navrhnout merch i pro malý náklad?",
        answer:
          "Ano, návrh přizpůsobím technologiím vhodným pro menší série. Digitální tisk a sublimace umožňují ekonomickou výrobu už od desítek kusů. U velkých nákladů je výhodnější sítotisk nebo výšivka. Poradím, která technologie dává smysl pro vaše množství a rozpočet. Design připravím tak, aby fungoval v dané technologii bez kompromisů na kvalitě.",
      },
    ],
    metaTitle: "Merch a promo předměty — ANFILOV | Reklamní grafika",
    metaDescription:
      "Design merch a promo předmětů od 10 000 Kč. Trička, hrnky, tašky, samolepky. Návrh, vizualizace, podklady. Konzultace zdarma.",
  },

  "pos-materialy": {
    atomicAnswer:
      "POS materiály jsou grafické prvky určené pro místo prodeje, které upoutají pozornost zákazníka a podporují nákupní rozhodování přímo v obchodě. Služba je určena výrobcům, distributorům a maloobchodním řetězcům, kteří potřebují stojany, wobblery, shelf stoppery, plakáty, podlahovou grafiku nebo výlohové polepy. Klient dostává grafické návrhy požadovaných POS materiálů, vizualizace umístění v prostoru, tiskové podklady ve správných rozměrech a barevných profilech a technické specifikace pro výrobce. Proces zahrnuje analýzu prodejního prostoru, návrh konceptu odpovídajícího kampani a přípravu produkčních dat. Cena designu POS materiálů začíná od 8 000 Kč, dodací lhůta je přibližně 7 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu POS materiály, které prodávají za vás přímo v místě prodeje. Efektivní design přizpůsobený prostoru, kampani a výrobním možnostem.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí design POS materiálů?",
        answer:
          "Cena začíná od 8 000 Kč za sadu návrhů. Závisí na počtu a typu materiálů, složitosti grafiky a rozsahu kampně. V ceně je grafický návrh, vizualizace v prostoru a tiskové podklady. Při opakovaných kampaních nebo sériové práci nabízím zvýhodněné podmínky. Výroba materiálů je samostatný náklad, který závisí na technologii a nákladu. Přesnou kalkulaci designu dostanete po konzultaci.",
      },
      {
        _key: "f2",
        question: "Jaké typy POS materiálů navrhujete?",
        answer:
          "Navrhuji kompletní škálu POS materiálů: stojany a displeje, wobblery, shelf stoppery, regálové lišty, podlahovou grafiku, závěsné poutače, výlohové polepy, plakáty, letáky, cenovky a akční štítky. Každý typ má specifické technické požadavky na rozměry, materiál a tiskovinu. Design přizpůsobuji konkrétnímu prodejnímu prostoru a umístění v obchodě.",
      },
      {
        _key: "f3",
        question: "Jak rychle dokážete připravit POS kampaň?",
        answer:
          "Standardní dodací lhůta je přibližně 7 dní od schválení konceptu. U urgentních kampaní je možné expresní zpracování do 3 pracovních dnů. Rychlost závisí na počtu materiálů a složitosti grafiky. Po schválení designu následuje výroba u dodavatele, která trvá dalších 3-7 dní. Doporučuji plánovat kampaň s dostatečným předstihem, aby byl prostor pro revize.",
      },
      {
        _key: "f4",
        question: "Komunikujete přímo s výrobcem POS materiálů?",
        answer:
          "Ano, komunikuji přímo s vaším dodavatelem ohledně technických specifikací, materiálů a tiskových požadavků. Pokud dodavatele nemáte, doporučím osvědčené výrobce POS materiálů. Znám technické limity různých typů stojanů a displejů, takže návrh je od začátku realistický a výrobně proveditelný bez komplikací při realizaci.",
      },
    ],
    metaTitle: "POS materiály — ANFILOV | Design pro místo prodeje",
    metaDescription:
      "Design POS materiálů od 8 000 Kč. Stojany, wobblery, plakáty, podlahová grafika. Tiskové podklady. Konzultace zdarma.",
  },

  // ── Sociální média ──────────────────────────────────────────────

  "sablony-canva": {
    atomicAnswer:
      "Šablony pro Canvu jsou profesionálně navržené editovatelné předlohy ve vaší vizuální identitě, které si sami upravujete v bezplatném online editoru Canva. Služba je určena malým firmám, podnikatelům a marketingovým týmům, které potřebují pravidelně vytvářet grafiku pro sociální sítě, ale nemají vlastního grafika. Klient dostává sadu editovatelných šablon v Canva Pro sdílených přes odkaz, šablony pro příspěvky, stories, carousely a bannery, návod k úpravám s předdefinovanými barvami a fonty, přednastavené textové styly a zástupné fotografie. Proces zahrnuje analýzu komunikačních potřeb, návrh designového systému v Canvě a přípravu šablon s instrukcemi pro snadnou editaci. Cena sady šablon pro Canvu začíná od 8 000 Kč, dodací lhůta je přibližně 7 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Připravím profesionální šablony v Canvě, které si sami upravíte bez grafických znalostí. Vaše příspěvky budou vypadat konzistentně a značkově.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí sada šablon pro Canvu?",
        answer:
          "Cena začíná od 8 000 Kč za základní sadu. Závisí na počtu šablon, typech formátů (příspěvky, stories, bannery) a míře customizace. Základní sada obsahuje 10-15 šablon pokrývajících běžné typy obsahu. Rozšířená sada zahrnuje 20-30 šablon včetně carousel formátů a animovaných stories. V ceně je sdílení přes Canva Pro a návod k editaci.",
      },
      {
        _key: "f2",
        question: "Potřebuji placený Canva Pro účet?",
        answer:
          "Pro plné využití šablon doporučuji Canva Pro, který umožňuje přístup ke všem fontům a funkcím. Základní šablony ale navrhuji tak, aby fungovaly i v bezplatné verzi Canvy. Při konzultaci zjistím, jakou verzi používáte, a design přizpůsobím dostupným možnostem. Canva Pro stojí přibližně 3 000 Kč ročně a vyplatí se, pokud tvoříte obsah pravidelně.",
      },
      {
        _key: "f3",
        question: "Jak složité je šablony upravovat?",
        answer:
          "Šablony navrhuji tak, aby úpravy zvládl kdokoliv bez grafických zkušeností. Měníte pouze texty, fotografie a případně barvy, které jsou předdefinované ve značkové paletě. Součástí dodávky je stručný návod s tipy, co měnit a čeho se vyvarovat. Layout a typografický systém zůstávají zachované, takže výsledek vždy vypadá profesionálně.",
      },
      {
        _key: "f4",
        question: "Můžete šablony později rozšířit nebo aktualizovat?",
        answer:
          "Ano, šablony je možné kdykoliv rozšířit o nové formáty nebo aktualizovat při změně vizuální identity. Nabízím i jednorázové doplnění šablon pro speciální kampaně nebo sezónní obsah. Aktualizace stávajících šablon jsou cenově zvýhodněné. Doporučuji revizi šablon jednou ročně, aby design odpovídal aktuálním trendům a formátům platforem.",
      },
      {
        _key: "f5",
        question: "Pro jaké platformy šablony připravíte?",
        answer:
          "Připravuji šablony pro všechny hlavní platformy: Instagram (příspěvky, stories, reels cover), Facebook (příspěvky, cover, events), LinkedIn (příspěvky, bannery, articles), YouTube (thumbnaily), Pinterest a další. Každá platforma má specifické rozměry a doporučení, která v šablonách respektuji. Sadu přizpůsobím kanálům, na kterých jste aktivní.",
      },
    ],
    metaTitle: "Šablony pro Canvu — ANFILOV | Editovatelný design",
    metaDescription:
      "Šablony pro Canvu od 8 000 Kč. Profesionální design, snadná editace bez grafika. Příspěvky, stories, bannery. Konzultace zdarma.",
  },

  "sablony-socialni-site": {
    atomicAnswer:
      "Šablony pro sociální sítě jsou sada profesionálně navržených grafických předloh v editovatelných formátech, které zajišťují konzistentní vizuální komunikaci vaší značky online. Služba je určena firmám a marketérům, kteří pravidelně publikují na sociálních sítích a potřebují jednotný vizuální styl bez nutnosti řešit každý příspěvek s grafikem. Klient dostává editovatelné šablony ve formátech pro Adobe nebo Figmu, sadu pro příspěvky, stories a bannery ve správných rozměrech, barevnou paletu a typografii napojené na brand manuál a návod k použití pro marketingový tým. Proces zahrnuje analýzu vašeho obsahu a komunikačního mixu, návrh modulárního systému šablon a jejich přípravu v požadovaném softwaru. Cena šablon pro sociální sítě začíná od 6 000 Kč, dodací lhůta je přibližně 7 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu modulární šablony pro sociální sítě, které udrží vaši značku konzistentní příspěvek za příspěvkem. Profesionální výsledek bez každodenní práce grafika.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí šablony pro sociální sítě?",
        answer:
          "Cena začíná od 6 000 Kč za základní sadu. Závisí na počtu šablon, formátů a požadovaném softwaru. Základní sada pokrývá nejčastější typy obsahu pro jednu platformu. Rozšířená sada zahrnuje šablony pro více platforem, carousel formáty a animované varianty. V ceně je návrh designového systému, editovatelné soubory a návod pro tým. Přesnou cenu stanovím po konzultaci.",
      },
      {
        _key: "f2",
        question: "V jakém programu šablony doručíte?",
        answer:
          "Šablony dodávám v programu, který váš tým používá: Adobe Photoshop, Illustrator, InDesign, Figma nebo Canva. Nejčastěji volí klienti Figmu pro její dostupnost a snadné sdílení, nebo Canvu pro jednoduchost editace. Pokud váš tým nemá grafický software, doporučím nejvhodnější variantu podle technických dovedností a rozpočtu.",
      },
      {
        _key: "f3",
        question: "Kolik šablon v sadě dostanu?",
        answer:
          "Základní sada obsahuje 8-12 šablon pokrývajících běžné typy příspěvků: citáty, produktové příspěvky, tipy, oznámení, nabídky a stories. Rozšířená sada přidává carousel formáty, animované stories, cover fotky a highlight ikony. Počet přizpůsobím vašemu obsahovému plánu tak, aby pokryl všechny opakující se typy obsahu, které publikujete.",
      },
      {
        _key: "f4",
        question: "Jak zajistíte, že šablony odpovídají naší značce?",
        answer:
          "Šablony navrhuji na základě vaší vizuální identity, tedy loga, barev, typografie a grafických prvků. Pokud máte brand manuál, řídím se jím. Pokud ne, vytvořím základní vizuální pravidla pro sociální sítě. Výsledkem je systém, který vypadá jako přirozené rozšíření vaší značky, ne jako generická šablona. Konzistence posiluje rozpoznatelnost.",
      },
      {
        _key: "f5",
        question: "Můžu šablony upravovat sám?",
        answer:
          "Ano, šablony jsou navržené pro snadnou editaci. Měníte texty, fotografie a případně barvy v rámci předdefinované palety. Layout zůstává zachovaný, takže výsledek je vždy profesionální. Součástí dodávky je návod, který vysvětluje, co a jak upravovat. U složitějších zásahů doporučuji konzultaci, aby se nenarušil designový systém.",
      },
    ],
    metaTitle: "Šablony pro sociální sítě — ANFILOV | Grafické šablony",
    metaDescription:
      "Šablony pro sociální sítě od 6 000 Kč. Konzistentní příspěvky, stories, bannery. Editovatelné soubory. Konzultace zdarma.",
  },

  "sablony-linkedin": {
    atomicAnswer:
      "Šablony pro LinkedIn jsou profesionálně navržené grafické předlohy optimalizované pro firemní i osobní profily na LinkedIn, které posilují expertní pozici a konzistentní prezentaci značky. Služba je určena firmám, konzultantům, manažerům a odborníkům, kteří aktivně budují svou přítomnost na LinkedIn a chtějí profesionální vizuální doprovod příspěvků. Klient dostává editovatelné šablony pro příspěvky, články, carousely a bannerové obrázky, cover fotku profilu a firemní stránky, šablony pro infografiky a datové vizualizace a návod k editaci. Proces zahrnuje analýzu vašeho LinkedIn obsahu, návrh šablon respektujících specifika platformy a přípravu v editovatelném formátu. Cena šablon pro LinkedIn začíná od 5 000 Kč, dodací lhůta je přibližně 5 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Připravím šablony pro LinkedIn, které podtrhnou vaši expertizu a profesionalitu. Konzistentní vizuál, který buduje důvěru u klientů i partnerů.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí šablony pro LinkedIn?",
        answer:
          "Cena začíná od 5 000 Kč za základní sadu. Závisí na počtu šablon a typech obsahu. Základní sada obsahuje 6-10 šablon pro nejčastější formáty příspěvků plus cover fotku. Rozšířená sada přidává carousel šablony, infografiky a šablony pro firemní stránku. V ceně jsou editovatelné soubory a návod. Přesnou kalkulaci dostanete po konzultaci.",
      },
      {
        _key: "f2",
        question: "Proč potřebuji speciální šablony pro LinkedIn?",
        answer:
          "LinkedIn má specifickou profesionální atmosféru a publikum. Design, který funguje na Instagramu, na LinkedInu působí neprofesionálně nebo příliš prodejně. Šablony pro LinkedIn respektují konzervativnější vizuální jazyk platformy, důraz na čitelnost textu a datovou vizualizaci. Správný vizuál zvyšuje engagement příspěvků a posiluje vaši expertní pozici v oboru.",
      },
      {
        _key: "f3",
        question: "Připravíte šablony pro osobní i firemní profil?",
        answer:
          "Ano, navrhuji šablony pro oba typy profilů. Osobní profil vyžaduje autentičtější a osobnější vizuál, firemní profil klade důraz na brandovou konzistenci. Pokud publikujete z obou profilů, vytvořím systém, kde se osobní a firemní šablony vizuálně doplňují, ale zachovávají svůj charakter. Cover fotky přizpůsobím aktuálním rozměrům LinkedIn.",
      },
      {
        _key: "f4",
        question: "Jsou šablony vhodné i pro carousel příspěvky?",
        answer:
          "Ano, carousel (dokumentový) formát je na LinkedInu velmi efektivní pro sdílení know-how a získává vysoký engagement. Navrhuji carousel šablony s přehlednou strukturou, které vedou čtenáře od úvodu k závěru. Každý slide má jasnou hierarchii informací. Šablony zahrnují titulní slide, obsahové slidy a závěrečný slide s výzvou k akci.",
      },
    ],
    metaTitle: "Šablony pro LinkedIn — ANFILOV | LinkedIn grafika",
    metaDescription:
      "Šablony pro LinkedIn od 5 000 Kč. Příspěvky, carousely, cover fotky. Profesionální design pro expertní pozici. Konzultace zdarma.",
  },

  "design-socialnich-medii": {
    atomicAnswer:
      "Design sociálních médií je komplexní grafický servis, který zahrnuje průběžnou tvorbu vizuálního obsahu pro vaše sociální sítě. Na rozdíl od jednorázových šablon jde o pravidelnou spolupráci, kdy navrhuji grafiku pro konkrétní příspěvky, kampaně a sezónní obsah. Služba je určena firmám a značkám, které publikují pravidelně a potřebují profesionální grafiku na míru ke každému příspěvku. Klient dostává grafické návrhy příspěvků, stories, reels coverů a bannerů, animované prvky a GIF, grafiku pro soutěže a kampaně, sezónní a tematické vizuály a cover fotky profilů. Proces funguje na měsíční nebo projektové bázi s dohodnutým rozsahem a pravidelnými dodávkami. Cena designu sociálních médií začíná od 12 000 Kč měsíčně, dodací lhůta jednotlivých grafik je přibližně 10 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Postarám se o kompletní grafiku vašich sociálních sítí, abyste se mohli soustředit na obsah a komunitu. Pravidelné dodávky, konzistentní kvalita.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí správa grafiky sociálních sítí?",
        answer:
          "Cena začíná od 12 000 Kč měsíčně. Závisí na počtu příspěvků, platforem a složitosti grafiky. Základní balíček pokrývá 8-12 grafik měsíčně pro jednu platformu. Rozšířený balíček zahrnuje více platforem, animace a kampaňové vizuály. Spolupráce funguje na měsíční bázi s jasně dohodnutým rozsahem. Přesnou nabídku sestavím po konzultaci, kdy zmapuji vaše potřeby.",
      },
      {
        _key: "f2",
        question: "Jak probíhá měsíční spolupráce?",
        answer:
          "Na začátku měsíce dostanu váš obsahový plán nebo témata příspěvků. Připravím grafické návrhy v dohodnutém termínu, vy schválíte nebo připomínkujete. Po zapracování revizí dodám finální soubory připravené k publikaci. Komunikace probíhá přes e-mail nebo sdílený prostor. Pravidelný rytmus spolupráce zajišťuje plynulé dodávky bez stresu z deadlinů.",
      },
      {
        _key: "f3",
        question: "Pro jaké sociální sítě grafiku tvoříte?",
        answer:
          "Tvořím grafiku pro všechny hlavní platformy: Instagram, Facebook, LinkedIn, YouTube, TikTok, Pinterest a X. Každá platforma má specifické formáty, rozměry a doporučení, která respektuji. Grafiku optimalizuji pro konkrétní platformu, ne jen měním rozměry. Co funguje na LinkedInu, nefunguje na Instagramu. Přizpůsobím obsah charakteru každé sítě.",
      },
      {
        _key: "f4",
        question: "Zahrnuje služba i animace a video grafiku?",
        answer:
          "Ano, součástí služby mohou být jednoduché animace, animované stories, GIF a grafické prvky pro video obsah. Jednoduché animace (textové přechody, reveal efekty) jsou zahrnuty v rozšířeném balíčku. Komplexnější motion design je samostatná služba. Pro reels a TikTok připravuji statické covery, úvodní a závěrečné grafické rámce.",
      },
      {
        _key: "f5",
        question: "Mohu objednat grafiku i jednorázově?",
        answer:
          "Ano, kromě pravidelné spolupráce nabízím jednorázové projekty pro konkrétní kampaně, soutěže nebo sezónní obsah. Jednorázový projekt je vhodný, pokud potřebujete grafiku pro specifickou akci, ale nemáte průběžnou potřebu. Cena jednorázového projektu se odvíjí od rozsahu. Pro pravidelné publikování je měsíční spolupráce ekonomicky výhodnější.",
      },
    ],
    metaTitle: "Design sociálních médií — ANFILOV | Grafika pro sítě",
    metaDescription:
      "Design sociálních médií od 12 000 Kč/měsíc. Příspěvky, stories, kampaně, animace. Pravidelné dodávky. Konzultace zdarma.",
  },

  "youtube-branding-kit": {
    atomicAnswer:
      "YouTube branding kit je kompletní vizuální balíček pro váš YouTube kanál, který zajišťuje profesionální a rozpoznatelný vzhled od banneru po koncovky videí. Služba je určena firmám, tvůrcům obsahu, koučům a expertům, kteří budují svou přítomnost na YouTube a chtějí vypadat profesionálně od prvního dojmu. Klient dostává channel art (banner) optimalizovaný pro všechna zařízení, profilový obrázek a watermark, šablony thumbnailů pro různé rubriky videí, intro a outro grafiku, lower thirds a textové titulky, end screen šablonu s call-to-action prvky. Proces zahrnuje analýzu vašeho obsahu a cílové skupiny, návrh vizuálního systému kanálu a přípravu editovatelných šablon. Cena YouTube branding kitu začíná od 10 000 Kč, dodací lhůta je přibližně 8 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Připravím kompletní vizuální identitu vašeho YouTube kanálu od banneru po thumbnaily. Profesionální vzhled, který buduje důvěru a zvyšuje proklikovost.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí YouTube branding kit?",
        answer:
          "Cena začíná od 10 000 Kč za kompletní balíček. Zahrnuje channel art, profilový obrázek, šablony thumbnailů, intro/outro grafiku a end screen. Závisí na počtu thumbnail variant, složitosti animací a rozsahu grafických prvků. Samotné šablony thumbnailů bez dalších prvků jsou levnější. Přesnou kalkulaci dostanete po konzultaci, kde zmapuji potřeby vašeho kanálu.",
      },
      {
        _key: "f2",
        question: "Proč jsou thumbnaily tak důležité?",
        answer:
          "Thumbnail je hlavní faktor, který rozhoduje o tom, zda divák klikne na vaše video. Až 90 % úspěšnosti videa závisí na kombinaci thumbnaillu a názvu. Profesionální thumbnail s čitelným textem, kontrastními barvami a jasnou vizuální hierarchií výrazně zvyšuje CTR (click-through rate). Navrhuji systém thumbnailů, který je konzistentní a zároveň každé video vizuálně odliší.",
      },
      {
        _key: "f3",
        question: "Budou šablony thumbnailů editovatelné?",
        answer:
          "Ano, šablony dodávám v editovatelném formátu (Figma, Photoshop nebo Canva podle vašich preferencí). Měníte pouze text, fotografii a případně barvu kategorie. Layout a typografický systém zůstávají zachované. Součástí je návod k editaci, takže thumbnaily zvládnete vytvářet sami pro každé nové video bez grafických znalostí.",
      },
      {
        _key: "f4",
        question: "Připravíte i animované intro a outro?",
        answer:
          "V rámci branding kitu připravuji statickou grafiku pro intro a outro a end screen šablonu. Jednoduché animované verze (reveal logo, textový přechod) jsou součástí rozšířeného balíčku. Komplexní motion design intro s pokročilými animacemi je samostatná služba. Doporučuji krátké intro do 5 sekund, které nezpomaluje začátek videa a neodrazuje diváky.",
      },
      {
        _key: "f5",
        question: "Optimalizujete banner pro všechna zařízení?",
        answer:
          "Ano, YouTube banner (channel art) se zobrazuje výrazně odlišně na mobilu, tabletu, desktopu a TV. Navrhuji banner s bezpečnou zónou, kde klíčové informace zůstávají viditelné na všech zařízeních. Dodávám vizualizace zobrazení na jednotlivých zařízeních, abyste viděli výsledek před nasazením. Rozměr odpovídá aktuálním doporučením YouTube.",
      },
    ],
    metaTitle: "YouTube branding kit — ANFILOV | Vizuál pro YouTube",
    metaDescription:
      "YouTube branding kit od 10 000 Kč. Banner, thumbnaily, intro, outro, end screen. Editovatelné šablony. Konzultace zdarma.",
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
