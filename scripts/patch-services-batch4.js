const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "d8caxrt0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const PATCHES = {
  // ─── DIGITÁLNÍ DESIGN ──────────────────────────────────────────────

  "newsletter-design": {
    atomicAnswer:
      "Newsletter design je tvorba vizuálně atraktivních e-mailových šablon, které zvyšují otevření a proklikovost vašich kampaní. Služba je určena firmám, e-shopům a tvůrcům obsahu, kteří chtějí profesionální e-maily bez nutnosti řešit grafiku při každém rozesílce. Klient dostává responzivní HTML šablonu kompatibilní s hlavními e-mailovými klienty, sadu opakovaně použitelných modulů (hlavička, CTA, produktový blok, patička), grafické prvky a ikony v souladu s vizuální identitou, exporty pro Mailchimp, Ecomail nebo jiný nástroj a stručný návod k úpravám. Proces začíná analýzou vaší značky a cílové skupiny, pokračuje wireframem struktury a končí grafickým zpracováním s testováním zobrazení napříč zařízeními. Cena newsletter designu začíná od 5 000 Kč, dodací lhůta je přibližně 5 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu e-mailové šablony, které vypadají profesionálně v každém poštovním klientu. Responzivní design, modulární stavba a snadná editace bez grafika.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí design newsletterové šablony?",
        answer:
          "Cena začíná od 5 000 Kč za jednu responzivní šablonu. Závisí na počtu modulů, složitosti layoutu a požadavcích na animace. Balíček více šablon pro různé typy kampaní (prodejní, obsahový, uvítací) je cenově zvýhodněný. V ceně je návrh, kódování do HTML a testování zobrazení. Přesnou kalkulaci dostanete po konzultaci, kde zmapuji vaše potřeby a rozesílací nástroj.",
      },
      {
        _key: "f2",
        question: "Bude šablona fungovat ve všech e-mailových klientech?",
        answer:
          "Šablonu testuji v hlavních klientech: Gmail, Outlook, Apple Mail, Yahoo a mobilních aplikacích. E-mailový design má specifická omezení oproti webu, proto navrhuji s ohledem na maximální kompatibilitu. Používám osvědčené techniky pro responzivní zobrazení. Součástí dodávky je report z testování s náhledy v nejpoužívanějších klientech.",
      },
      {
        _key: "f3",
        question: "Můžu si šablonu sám upravovat?",
        answer:
          "Ano, šablonu navrhuji jako modulární systém s editovatelnými bloky. V rozesílacím nástroji snadno změníte texty, obrázky i pořadí sekcí. Dodávám přehledný návod k úpravám. Pro složitější změny layoutu doporučuji konzultaci, aby zůstala zachována kvalita zobrazení. Cílem je vaše nezávislost při běžných rozesílkách.",
      },
      {
        _key: "f4",
        question: "Pro jaké rozesílací nástroje šablony připravujete?",
        answer:
          "Šablony připravuji pro všechny běžné platformy: Mailchimp, Ecomail, Smartemailing, Brevo (Sendinblue), ConvertKit i vlastní SMTP řešení. Exportuji ve formátu, který váš nástroj podporuje. Pokud teprve vybíráte rozesílací platformu, poradím s výběrem na základě vašich potřeb a rozpočtu.",
      },
      {
        _key: "f5",
        question: "Jak rychle newsletter šablonu dodáte?",
        answer:
          "Standardní dodání je přibližně 5 pracovních dní. Zahrnuje konzultaci, návrh, kódování a testování. U jednodušších šablon je možné expresní dodání do 3 dnů. Složitější projekty s více moduly nebo animacemi mohou trvat déle. Přesný termín stanovím po úvodní konzultaci podle rozsahu projektu.",
      },
    ],
    metaTitle: "Newsletter design — ANFILOV | E-mailové šablony na míru",
    metaDescription:
      "Profesionální newsletter design od 5 000 Kč. Responzivní šablony pro Mailchimp, Ecomail i další. Dodání do 5 dní.",
  },

  "infografiky": {
    atomicAnswer:
      "Infografika je vizuální zpracování dat, procesů nebo informací do přehledné a sdílitelné grafické formy. Služba je určena firmám, médiím a marketingovým týmům, které potřebují srozumitelně komunikovat složitá data nebo postupy. Klient dostává infografiku v tiskové kvalitě (PDF, AI) i webové verzi (PNG, SVG), varianty pro sociální sítě v optimálních rozměrech, editovatelné zdrojové soubory a responzivní verzi pro web, pokud je potřeba. Proces začíná analýzou dat a definicí příběhu, který chcete vyprávět. Následuje návrh struktury, výběr vizuálního stylu a finální zpracování s důrazem na čitelnost a hierarchii informací. Cena infografiky začíná od 6 000 Kč, dodací lhůta je přibližně 7 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Převedu vaše data a procesy do vizuálně přitažlivé infografiky, která se snadno sdílí. Jasná hierarchie, čistý design a příběh, který čtenář pochopí na první pohled.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí zpracování infografiky?",
        answer:
          "Cena začíná od 6 000 Kč za jednu infografiku. Závisí na množství dat, složitosti vizualizace a počtu výstupních formátů. Jednoduchá procesní infografika je na spodní hranici, komplexní datová vizualizace s desítkami datových bodů stojí více. V ceně je analýza dat, návrh struktury, grafické zpracování a dodání ve všech domluvených formátech.",
      },
      {
        _key: "f2",
        question: "Jaká data potřebujete pro vytvoření infografiky?",
        answer:
          "Potřebuji zdrojová data v jakémkoliv formátu, tabulku, dokument, prezentaci nebo i surové poznámky. Důležitý je hlavní sdělení, které chcete komunikovat. Pomůžu s výběrem klíčových dat a jejich uspořádáním do logického příběhu. Čím přesnější vstupní data dostanu, tím rychlejší je proces zpracování. Data zpracovávám důvěrně.",
      },
      {
        _key: "f3",
        question: "V jakých formátech infografiku dodáváte?",
        answer:
          "Standardně dodávám PNG a PDF pro sdílení, SVG pro web, AI pro případné budoucí úpravy. Pro sociální sítě připravím varianty v optimálních rozměrech pro Instagram, LinkedIn a Facebook. Na požádání zpracuji i animovanou verzi pro web nebo video. Formáty přizpůsobuji tomu, kde infografiku plánujete využít.",
      },
      {
        _key: "f4",
        question: "Jak dlouho trvá vytvoření infografiky?",
        answer:
          "Standardní dodání je přibližně 7 pracovních dní. První fáze je analýza dat a návrh struktury, druhá grafické zpracování a finalizace. Expresní dodání do 3 dnů je možné za příplatek. Délka závisí i na připravenosti vstupních dat. Pokud dodáte kompletní podklady a jasné zadání, proces je výrazně rychlejší.",
      },
    ],
    metaTitle: "Infografiky — ANFILOV | Vizualizace dat a procesů",
    metaDescription:
      "Profesionální infografiky od 6 000 Kč. Přehledná vizualizace dat pro web, tisk i sociální sítě. Dodání do 7 dní.",
  },

  "ilustrace-ikony": {
    atomicAnswer:
      "Ilustrace a ikony jsou originální grafické prvky navržené na míru vaší značce, které odlišují vizuální komunikaci od konkurence používající stockové materiály. Služba je určena firmám, aplikacím a projektům, které potřebují konzistentní sadu ikon pro web a UI, vlastní ilustrace pro weby, prezentace nebo tiskoviny, nebo unikátní vizuální styl pro obsahový marketing. Klient dostává sadu ikon nebo ilustrací ve vektorovém formátu (SVG, AI), rastrové exporty v požadovaných velikostech (PNG), barevné i jednobarevné varianty, specifikaci mřížky a pravidel pro rozšiřování sady a zdrojové soubory pro budoucí úpravy. Proces zahrnuje definici vizuálního stylu, tvorbu referenčních prvků a systematické zpracování celé sady. Cena ilustrací a ikon začíná od 8 000 Kč, dodací lhůta je přibližně 10 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu originální ilustrace a ikony, které dají vaší značce vlastní vizuální jazyk. Konzistentní styl, čisté tvary a neomezená škálovatelnost díky vektorovému zpracování.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí sada ikon nebo ilustrací na míru?",
        answer:
          "Cena začíná od 8 000 Kč. Závisí na počtu prvků, složitosti stylu a požadovaných variantách. Základní sada 10-15 ikon pro web je na spodní hranici. Komplexní ilustrační systém s desítkami scén stojí výrazně více. V ceně je definice vizuálního stylu, zpracování celé sady a dodání ve všech formátech. Nabízím i postupné rozšiřování sady za zvýhodněnou cenu.",
      },
      {
        _key: "f2",
        question: "Jaký styl ilustrací nabízíte?",
        answer:
          "Styl přizpůsobuji charakteru vaší značky. Pracuji s geometrickými tvary, line art stylem, flat designem i detailnějšími ilustracemi. Klíčové je, aby styl ladil s vaší vizuální identitou a byl reprodukovatelný pro budoucí rozšiřování. Na začátku projektu vytvářím moodboard a referenční prvky ke schválení, než zpracuji celou sadu.",
      },
      {
        _key: "f3",
        question: "Můžu sadu ikon později rozšířit?",
        answer:
          "Ano, sadu navrhuji s jasnou mřížkou a pravidly, aby kdokoliv mohl přidávat další prvky ve stejném stylu. Součástí dodávky je specifikace proporcí, tlouštěk linek, zaoblení rohů a barevného schématu. Pokud rozšíření zajistím já, garantuji dokonalou konzistenci. Toto je hlavní výhoda oproti stockovým ikonám, kde konzistence chybí.",
      },
      {
        _key: "f4",
        question: "Dodáváte ikony i ve formátu pro vývojáře?",
        answer:
          "Ano, pro vývojáře připravuji optimalizované SVG soubory s čistým kódem, pojmenovanými vrstvami a konzistentní strukturou. Na požádání vytvořím i ikonový font nebo React komponentu. Dodávám specifikaci velikostní mřížky, padding a optického vyvážení. Vývojář dostane vše potřebné pro bezproblémovou implementaci do webu nebo aplikace.",
      },
      {
        _key: "f5",
        question: "Jak dlouho trvá vytvoření sady ikon?",
        answer:
          "Dodání sady je přibližně do 10 pracovních dní. První fáze zahrnuje definici stylu a schválení referenčních prvků. Druhá fáze je zpracování celé sady. Čas závisí na počtu prvků a složitosti stylu. Menší sada do 15 ikon může být hotová rychleji, rozsáhlý ilustrační systém zabere déle. Přesný harmonogram stanovím po konzultaci.",
      },
    ],
    metaTitle: "Ilustrace a ikony — ANFILOV | Originální grafické prvky",
    metaDescription:
      "Ilustrace a ikony na míru od 8 000 Kč. Vektorové zpracování, konzistentní styl, SVG pro web. Dodání do 10 dní.",
  },

  "prezentace-pitch-decky": {
    atomicAnswer:
      "Prezentace a pitch deck je profesionálně navržený soubor slidů, který vizuálně podpoří vaše sdělení a pomůže přesvědčit investory, klienty nebo partnery. Služba je určena startupům hledajícím investory, obchodním týmům i přednášejícím na konferencích. Klient dostává kompletní prezentaci v PowerPointu nebo Google Slides s editovatelnými šablonami, sadu master slidů (titulní, obsahový, datový, citace, CTA), grafické zpracování grafů, diagramů a vizualizací dat, exporty v PDF pro sdílení a zdrojové soubory pro budoucí úpravy. Proces začíná pochopením vašeho příběhu a cílového publika, pokračuje návrhem struktury a dramaturgickým zpracováním a končí grafickým designem každého slidu. Cena prezentace začíná od 12 000 Kč, dodací lhůta je přibližně 7 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu prezentaci, která podpoří váš příběh a přesvědčí publikum. Čistý design, promyšlená struktura a slidy, které si snadno upravíte sami.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí profesionální prezentace nebo pitch deck?",
        answer:
          "Cena začíná od 12 000 Kč. Závisí na počtu slidů, složitosti vizualizací a požadavcích na animace. Standardní pitch deck o 12-15 slidech je na spodní hranici. Rozsáhlá firemní prezentace se šablonami pro opakované použití stojí více. V ceně je návrh struktury, grafický design, editovatelné šablony a export v požadovaných formátech.",
      },
      {
        _key: "f2",
        question: "V jakém nástroji prezentaci připravujete?",
        answer:
          "Pracuji v PowerPointu, Google Slides nebo Keynote podle vašich preferencí. Výstup je plně editovatelný, můžete měnit texty, obrázky a přidávat nové slidy pomocí připravených šablon. Pro investorské pitch decky doporučuji PDF verzi, která zachovává přesný design. Pro týmové prezentace je ideální Google Slides kvůli snadnému sdílení.",
      },
      {
        _key: "f3",
        question: "Pomůžete i se strukturou a příběhem prezentace?",
        answer:
          "Ano, struktura a storytelling jsou klíčové. Nejde jen o hezké slidy, ale o to, jak informace řadíte a jaký příběh vyprávíte. Projdu s vámi obsah, navrhnu logické členění, doporučím kde zjednodušit a kde vizualizovat. U pitch decků pracuji s osvědčenou strukturou, kterou investoři očekávají. Dramaturgii prezentace považuji za stejně důležitou jako grafiku.",
      },
      {
        _key: "f4",
        question: "Jak rychle prezentaci dodáte?",
        answer:
          "Standardní dodání je přibližně 7 pracovních dní. Expresní zpracování do 3 dnů je možné za příplatek. Čas zahrnuje konzultaci, návrh struktury, grafický design a revize. Rychlost závisí i na připravenosti vašeho obsahu. Pokud máte jasný text a data, proces je výrazně rychlejší. U rozsáhlejších prezentací počítejte s delším termínem.",
      },
    ],
    metaTitle: "Prezentace a pitch decky — ANFILOV | Design slidů",
    metaDescription:
      "Profesionální prezentace a pitch decky od 12 000 Kč. Editovatelné šablony, vizualizace dat. Dodání do 7 dní.",
  },

  "reklamni-ai-vizual": {
    atomicAnswer:
      "Reklamní AI vizuál je grafický podklad pro kampaně vytvořený s využitím generativní umělé inteligence a profesionálního designérského zpracování. Služba je určena firmám a marketérům, kteří potřebují unikátní vizuály pro reklamy na sociálních sítích, bannery nebo obsahový marketing rychle a cenově efektivně. Klient dostává hotové reklamní vizuály v požadovaných rozměrech pro jednotlivé platformy, varianty pro A/B testování, soubory v PNG a JPG optimalizované pro web, zdrojové soubory v PSD nebo AI pro úpravy a sadu šablon pro opakované použití. Proces zahrnuje briefing, generování AI podkladů pomocí Midjourney a DALL-E, profesionální retušování a kompozici v Photoshopu a finální úpravu typografie a brandingových prvků. Cena reklamního AI vizuálu začíná od 4 000 Kč, dodací lhůta je přibližně 3 dny. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Vytvořím reklamní vizuály s pomocí AI technologií rychle a za zlomek ceny fotoprodukcí. Profesionální výsledek s unikátním obsahem, který nepoužívá nikdo jiný.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí reklamní vizuál vytvořený s AI?",
        answer:
          "Cena začíná od 4 000 Kč za sadu vizuálů pro jednu kampaň. Zahrnuje generování AI podkladů, profesionální postprodukci, nasazení brandingu a dodání v rozměrech pro požadované platformy. Balíčky s více variantami pro A/B testování jsou cenově zvýhodněné. Oproti klasické fotoprodukci ušetříte řádově na fotografovi, modelech, lokaci a postprodukci.",
      },
      {
        _key: "f2",
        question: "Jak AI vizuály vypadají oproti klasické fotografii?",
        answer:
          "Kvalita generativních AI nástrojů dosáhla úrovně, kdy výsledky jsou v reklamním kontextu nerozeznatelné od fotografie. Klíčová je profesionální postprodukce a zkušenost s promptováním. AI umožňuje vytvořit scény a kompozice, které by byly při klasické produkci extrémně nákladné nebo nemožné. Pro specifické produktové fotografie reálných předmětů ale stále doporučuji klasický fotograf.",
      },
      {
        _key: "f3",
        question: "Můžu AI vizuály legálně použít v reklamě?",
        answer:
          "Ano, vizuály vytvořené v nástrojích jako Midjourney a DALL-E jsou určeny ke komerčnímu využití v rámci jejich licenčních podmínek. Nepoužívám AI ke kopírování konkrétních existujících děl nebo osob. Výstup je unikátní obsah, který nevznikl kopírováním. Pokud máte specifické právní požadavky, doporučuji konzultaci s právníkem pro váš konkrétní případ.",
      },
      {
        _key: "f4",
        question: "Jak rychle AI vizuály doručíte?",
        answer:
          "Standardní dodání je přibližně 3 pracovní dny. Expresní zpracování je možné do 24 hodin. Rychlost je jedna z hlavních výhod oproti klasické produkci, kde příprava, focení a postprodukce trvají týdny. AI generování umožňuje rychlé iterace a testování více vizuálních směrů. Ideální pro kampaně s krátkými deadliny.",
      },
      {
        _key: "f5",
        question: "Pro jaké platformy vizuály připravujete?",
        answer:
          "Připravuji vizuály pro všechny relevantní platformy: Meta (Facebook, Instagram), Google Ads, LinkedIn, TikTok, YouTube i programatické bannery. Každá platforma má specifické rozměry a pravidla, která respektuji. Dodávám optimalizované soubory v správných rozlišeních a poměrech stran. Na požádání připravím i varianty pro tisk nebo outdoor.",
      },
    ],
    metaTitle: "Reklamní AI vizuály — ANFILOV | Kreativa s umělou inteligencí",
    metaDescription:
      "Reklamní AI vizuály od 4 000 Kč. Unikátní grafika pro kampaně s pomocí Midjourney a DALL-E. Dodání do 3 dnů.",
  },

  // ─── ONLINE PRODEJ ─────────────────────────────────────────────────

  "prodejni-stranky": {
    atomicAnswer:
      "Prodejní stránka (landing page) je jednoúčelová webová stránka navržená s jediným cílem: přesvědčit návštěvníka k akci, ať už je to nákup, registrace nebo objednávka konzultace. Služba je určena podnikatelům, tvůrcům kurzů, SaaS firmám a e-shopům, kteří potřebují stránku s vysokou konverzí. Klient dostává kompletní design a kódování prodejní stránky, responzivní layout optimalizovaný pro mobily, napojení na platební bránu nebo formulář, A/B testovací varianty klíčových sekcí, rychlé načítání a SEO základ. Proces začíná analýzou vaší nabídky a cílové skupiny, pokračuje copywritingovou strukturou, wireframem a končí grafickým designem s implementací. Cena prodejní stránky začíná od 18 000 Kč, dodací lhůta je přibližně 10 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu prodejní stránku, která mění návštěvníky v zákazníky. Promyšlená struktura, přesvědčivý design a technické řešení na jednom místě.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí prodejní stránka na míru?",
        answer:
          "Cena začíná od 18 000 Kč. Zahrnuje návrh struktury, grafický design, responzivní kódování a napojení na formulář nebo platební bránu. Závisí na délce stránky, počtu sekcí a technické složitosti. Jednoduchá landing page pro sběr kontaktů je na spodní hranici. Komplexní prodejní stránka s videem, kalkulačkou a platební integrací stojí více. Přesnou cenu stanovím po konzultaci.",
      },
      {
        _key: "f2",
        question: "Na jaké platformě prodejní stránku postavíte?",
        answer:
          "Volím platformu podle vašich potřeb. Pro maximální výkon a rychlost stavím na Next.js nebo statickém HTML. Pro snadnou editaci používám WordPress nebo Webflow. Pro e-commerce řešení Shopify. Pokud už máte web na konkrétní platformě, stránku integruji do stávajícího systému. Doporučení platformy je součástí úvodní konzultace.",
      },
      {
        _key: "f3",
        question: "Pomůžete i s texty na prodejní stránce?",
        answer:
          "Navrhuji strukturu a copywritingový framework, tedy pořadí sekcí, hlavní argumenty a výzvy k akci. Pro finální texty doporučuji spolupráci s copywriterem, kterého vám mohu doporučit. Kvalitní design bez dobrého textu nefunguje a naopak. Pokud máte texty připravené, integruji je do designu a navrhnu úpravy pro lepší čitelnost a konverzi.",
      },
      {
        _key: "f4",
        question: "Jak měříte úspěšnost prodejní stránky?",
        answer:
          "Součástí dodávky je nastavení analytiky: Google Analytics, konverzní události a heat mapy. Po spuštění doporučuji minimálně měsíc sběru dat pro vyhodnocení. Na základě dat navrhuji optimalizace. Klíčové metriky jsou konverzní poměr, bounce rate a čas na stránce. Nabízím i follow-up optimalizaci na základě reálných dat z provozu.",
      },
      {
        _key: "f5",
        question: "Jak rychle prodejní stránku dodáte?",
        answer:
          "Standardní dodání je přibližně 10 pracovních dní. Zahrnuje konzultaci, wireframe, design, kódování a testování. Expresní dodání je možné za příplatek. Čas závisí na připravenosti textů a podkladů z vaší strany. Doporučuji nespěchat, protože kvalitní prodejní stránka se vám vrátí mnohonásobně v konverzích.",
      },
    ],
    metaTitle: "Prodejní stránky — ANFILOV | Landing page s vysokou konverzí",
    metaDescription:
      "Prodejní stránky a landing pages od 18 000 Kč. Design zaměřený na konverze, responzivní kódování. Dodání do 10 dní.",
  },

  "online-kurz-design": {
    atomicAnswer:
      "Online kurz design je kompletní vizuální a uživatelské zpracování vaší vzdělávací platformy, které z obsahu vytvoří profesionální produkt s vysokou vnímanou hodnotou. Služba je určena lektorům, koučům a expertům, kteří prodávají online vzdělávání a chtějí, aby jejich kurz vypadal na úrovni prémiových platforem. Klient dostává design členské sekce a přehrávače lekcí, grafiku pro prodejní stránku kurzu, šablony pro pracovní listy a doprovodné materiály v PDF, grafiku pro e-mailové sekvence a sociální sítě, návrh certifikátu o absolvování a branding celého kurzového produktu. Proces začíná analýzou obsahu a cílové skupiny, pokračuje návrhem uživatelského rozhraní a končí grafickým zpracováním všech materiálů. Cena designu online kurzu začíná od 25 000 Kč, dodací lhůta je přibližně 21 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu kompletní vizuální podobu vašeho online kurzu, od prodejní stránky po certifikát. Profesionální design zvyšuje vnímanou hodnotu a ochotu platit.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí design online kurzu?",
        answer:
          "Cena začíná od 25 000 Kč. Zahrnuje branding kurzového produktu, design prodejní stránky, členské sekce, šablony doprovodných materiálů a grafiku pro marketing. Závisí na rozsahu kurzu, počtu modulů a požadovaných materiálech. Jednoduchý minikurz je na spodní hranici. Rozsáhlý certifikační program s desítkami lekcí stojí více. Projekt lze rozdělit do etap.",
      },
      {
        _key: "f2",
        question: "Na jakých platformách online kurzy navrhujete?",
        answer:
          "Navrhuji pro všechny běžné kurzové platformy: Teachable, Thinkific, Kajabi, Memberful, WordPress s LearnDash i vlastní řešení. Design přizpůsobuji možnostem a omezením konkrétní platformy. Pokud teprve vybíráte, poradím s volbou podle vašich potřeb, rozpočtu a technických znalostí. Cílem je najít řešení, které zvládnete spravovat sami.",
      },
      {
        _key: "f3",
        question: "Pomůžete i s prodejní stránkou kurzu?",
        answer:
          "Ano, prodejní stránka je klíčová součást projektu. Navrhuji ji s důrazem na konverzi: přesvědčivá struktura, ukázky obsahu, sociální důkazy, jasná cenová prezentace a silná výzva k akci. Design prodejní stránky je zahrnut v ceně kompletního balíčku. Pokud potřebujete pouze prodejní stránku bez designu celého kurzu, nabízím ji i samostatně.",
      },
      {
        _key: "f4",
        question: "Jak design ovlivní prodeje kurzu?",
        answer:
          "Profesionální design přímo zvyšuje vnímanou hodnotu a ochotu zaplatit vyšší cenu. Kurz za 5 000 Kč s amatérskou grafikou budí nedůvěru. Stejný obsah s profesionálním designem působí jako prémiový produkt. Design také snižuje míru vrácení a zvyšuje dokončení kurzu díky lepší uživatelské zkušenosti. Je to investice, která se vrací v každém prodeji.",
      },
      {
        _key: "f5",
        question: "Jak dlouho trvá design online kurzu?",
        answer:
          "Kompletní design zabere přibližně 21 pracovních dní. Zahrnuje branding, prodejní stránku, členskou sekci, doprovodné materiály a marketing. U menších projektů je dodání rychlejší. Projekt řídím v milnících: nejdříve branding a prodejní stránka, pak členská sekce a materiály. Můžete začít prodávat, zatímco dokončuji doprovodné materiály.",
      },
    ],
    metaTitle: "Online kurz design — ANFILOV | Vizuál vzdělávacího produktu",
    metaDescription:
      "Design online kurzu od 25 000 Kč. Prodejní stránka, členská sekce, materiály, marketing. Dodání do 21 dní.",
  },

  "membership-komunita": {
    atomicAnswer:
      "Membership a komunita design je kompletní vizuální a funkční návrh členské platformy, která buduje loajalitu a opakující se příjmy z předplatného. Služba je určena tvůrcům, expertům a firmám, kteří chtějí monetizovat komunitu, exkluzivní obsah nebo průběžné vzdělávání formou měsíčního nebo ročního členství. Klient dostává design členské platformy s přehlednou navigací a strukturou obsahu, onboardingový průvodce pro nové členy, šablony pro pravidelný obsah (články, videa, live streamy), design komunitních prvků (fórum, komentáře, profily), grafiku pro marketingové materiály a e-mailové sekvence a návrh cenových plánů a upgrade cest. Proces začíná analýzou hodnotové nabídky a cílové skupiny, pokračuje návrhem informační architektury a končí grafickým zpracováním. Cena designu membership platformy začíná od 30 000 Kč, dodací lhůta je přibližně 21 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu členskou platformu, kde se lidé rádi vracejí a platí pravidelně. Přehledná struktura, zapojující design a jasná cesta od návštěvníka k platícímu členovi.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí design membership platformy?",
        answer:
          "Cena začíná od 30 000 Kč. Zahrnuje design členské sekce, onboarding, šablony obsahu, komunitní prvky a marketingové materiály. Závisí na složitosti platformy, počtu cenových plánů a rozsahu obsahu. Jednodušší membership s jedním plánem je na spodní hranici. Komplexní platforma s více úrovněmi, fórem a gamifikací stojí více. Projekt lze rozdělit do fází.",
      },
      {
        _key: "f2",
        question: "Na jaké platformě membership stavíte?",
        answer:
          "Navrhuji pro platformy jako Memberful, Circle, Mighty Networks, Skool, WordPress s BuddyBoss nebo vlastní řešení. Volba závisí na typu komunity, rozpočtu a technických požadavcích. Pro obsahové membership je ideální Memberful, pro aktivní komunitu Circle nebo Skool. Poradím s výběrem na základě vaší konkrétní situace a plánů na růst.",
      },
      {
        _key: "f3",
        question: "Jak udržet členy, aby neodcházeli?",
        answer:
          "Klíčové je onboarding, pravidelná hodnota a pocit sounáležitosti. Navrhuji onboardingovou sekvenci, která nového člena provede platformou a aktivuje ho. Design podporuje pravidelné návyky: přehledná struktura obsahu, notifikace, gamifikace. Komunitní prvky budují vazby mezi členy. Správný UX design přímo snižuje churn rate a zvyšuje lifetime value každého člena.",
      },
      {
        _key: "f4",
        question: "Pomůžete i s cenovou strategií membership?",
        answer:
          "Ano, navrhuji strukturu cenových plánů, upgrade cesty a prezentaci hodnoty na prodejní stránce. Doporučuji optimální počet úrovní, co do každé zahrnout a jak komunikovat rozdíly. Správná cenová architektura výrazně ovlivňuje konverze i průměrný příjem na člena. Cílem je, aby nejprodávanější plán byl ten s nejvyšší marží.",
      },
      {
        _key: "f5",
        question: "Jak dlouho trvá design membership platformy?",
        answer:
          "Kompletní design zabere přibližně 21 pracovních dní. Začínáme strategií a informační architekturou, pokračujeme designem členské sekce a onboardingu, končíme marketingovými materiály. Spustit můžete postupně, nejdříve základní členskou sekci a pak přidávat další prvky. Tento iterativní přístup umožňuje testovat a optimalizovat na základě zpětné vazby reálných členů.",
      },
    ],
    metaTitle: "Membership a komunita — ANFILOV | Design členské platformy",
    metaDescription:
      "Design membership platformy od 30 000 Kč. Členská sekce, onboarding, komunita, cenové plány. Dodání do 21 dní.",
  },

  "konverzni-trychtyr": {
    atomicAnswer:
      "Konverzní trychtýř (funnel) je promyšlená posloupnost stránek a kroků, která systematicky provádí návštěvníka od prvního kontaktu až k nákupu a opakovaným objednávkám. Služba je určena firmám, e-shopům a tvůrcům digitálních produktů, kteří chtějí maximalizovat tržby z každého návštěvníka pomocí automatizovaného prodejního procesu. Klient dostává kompletní design a implementaci prodejního trychtýře zahrnujícího lead magnet stránku, děkovnou stránku s upsell nabídkou, prodejní stránku hlavního produktu, checkout s order bumpem, poděkování s cross-sell nabídkou a retargetingové vizuály. Proces začíná mapováním zákaznické cesty, pokračuje návrhem jednotlivých kroků s důrazem na konverzi a končí implementací s nastavením analytiky. Cena konverzního trychtýře začíná od 35 000 Kč, dodací lhůta je přibližně 18 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu prodejní trychtýř, který automaticky mění návštěvníky v zákazníky a zákazníky v opakované kupce. Každý krok optimalizovaný pro maximální konverzi.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí návrh konverzního trychtýře?",
        answer:
          "Cena začíná od 35 000 Kč. Zahrnuje strategii, design všech stránek v trychtýři, implementaci a nastavení analytiky. Závisí na počtu kroků, složitosti nabídky a požadované automatizaci. Jednoduchý trychtýř s lead magnetem a prodejní stránkou je na spodní hranici. Komplexní funnel s upselly, downselly a automatizací stojí více. Investice se vrací ve vyšší konverzi a průměrné hodnotě objednávky.",
      },
      {
        _key: "f2",
        question: "Co je konverzní trychtýř a proč ho potřebuji?",
        answer:
          "Konverzní trychtýř je automatizovaný prodejní proces, který provází návštěvníka od prvního kontaktu po nákup. Místo jedné prodejní stránky pracujete se sekvencí kroků: lead magnet zachytí kontakt, e-mailová sekvence buduje důvěru, prodejní stránka přesvědčí k nákupu, upsell zvýší hodnotu objednávky. Bez trychtýře ztrácíte většinu návštěvníků, kteří nejsou připraveni koupit hned.",
      },
      {
        _key: "f3",
        question: "Na jaké platformě trychtýř stavíte?",
        answer:
          "Volím podle vaší situace. Pro komplexní funnely používám ClickFunnels nebo Systeme.io. Pro integraci se stávajícím webem WordPress s CartFlows nebo vlastní řešení na Next.js. Pro e-commerce Shopify s příslušnými pluginy. Klíčová je návaznost na váš e-mailový marketing a platební řešení. Doporučení platformy je součástí úvodní strategie.",
      },
      {
        _key: "f4",
        question: "Jak měříte úspěšnost trychtýře?",
        answer:
          "Sledujeme konverzi každého kroku zvlášť: opt-in rate, sales conversion rate, upsell take rate a celkový ROAS. Nastavuji Google Analytics, Meta Pixel a konverzní události pro kompletní přehled. Po spuštění doporučuji minimálně 2 týdny sběru dat před optimalizací. Nabízím i průběžnou správu a optimalizaci trychtýře na základě reálných dat.",
      },
      {
        _key: "f5",
        question: "Jak dlouho trvá vytvoření konverzního trychtýře?",
        answer:
          "Kompletní trychtýř dodávám přibližně za 18 pracovních dní. Zahrnuje strategii, design, copywriting framework, implementaci a testování. Spuštění může být postupné: nejdříve hlavní prodejní stránka, pak přidáváme lead magnet, upselly a automatizace. Tento přístup umožňuje rychlejší návratnost investice a optimalizaci na základě reálných dat.",
      },
    ],
    metaTitle: "Konverzní trychtýř — ANFILOV | Prodejní funnel na míru",
    metaDescription:
      "Konverzní trychtýř od 35 000 Kč. Lead magnety, prodejní stránky, upselly, automatizace. Dodání do 18 dní.",
  },

  "email-marketing-automatizace": {
    atomicAnswer:
      "E-mail marketing a automatizace je návrh a implementace e-mailových sekvencí, které automaticky pracují s vašimi kontakty od prvního přihlášení po opakovaný nákup. Služba je určena firmám, e-shopům a tvůrcům, kteří chtějí systematicky budovat vztah se zákazníky a zvyšovat tržby bez manuální práce. Klient dostává strategii e-mailové komunikace, design a nastavení automatických sekvencí (uvítací, prodejní, reaktivační, po-nákupní), šablony pro pravidelné rozesílky, segmentaci kontaktů podle chování, nastavení tagování a scoring systému a analytický dashboard pro sledování výkonu. Proces začíná mapováním zákaznické cesty, pokračuje návrhem sekvencí s důrazem na správný timing a personalizaci a končí implementací v rozesílacím nástroji s testováním doručitelnosti. Cena e-mail marketingu a automatizace začíná od 15 000 Kč, dodací lhůta je přibližně 10 dní. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Nastavím e-mailové automatizace, které pracují za vás 24 hodin denně. Správné sdělení, správnému člověku, ve správný čas bez manuální práce.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí nastavení e-mail marketingové automatizace?",
        answer:
          "Cena začíná od 15 000 Kč. Zahrnuje strategii, design šablon, nastavení automatických sekvencí a segmentaci. Závisí na počtu sekvencí, složitosti logiky a rozesílacím nástroji. Základní set s uvítací a prodejní sekvencí je na spodní hranici. Komplexní automatizace s desítkami větví a podmínek stojí více. Investice se vrací v úspoře času a zvýšených tržbách z databáze.",
      },
      {
        _key: "f2",
        question: "Jaké automatické sekvence nastavujete?",
        answer:
          "Základní sada zahrnuje uvítací sekvenci pro nové kontakty, prodejní sekvenci pro konverzi, po-nákupní sekvenci pro budování loajality a reaktivační sekvenci pro neaktivní kontakty. Dále nastavuji sekvence pro opuštěný košík, narozeninové e-maily, upsell a cross-sell automatizace. Každá sekvence má jasný cíl a měřitelné výsledky. Rozsah přizpůsobuji vašim potřebám a rozpočtu.",
      },
      {
        _key: "f3",
        question: "S jakými rozesílacími nástroji pracujete?",
        answer:
          "Pracuji s Mailchimp, Ecomail, Smartemailing, ConvertKit, ActiveCampaign, Brevo a dalšími. Volba závisí na vašich potřebách: pro jednoduchou automatizaci stačí Mailchimp nebo Ecomail, pro pokročilou segmentaci a scoring doporučuji ActiveCampaign. Pokud už nástroj používáte, pracuji s ním. Pokud teprve vybíráte, poradím s výběrem podle funkcí a rozpočtu.",
      },
      {
        _key: "f4",
        question: "Jak dlouho trvá nastavení e-mailové automatizace?",
        answer:
          "Kompletní nastavení zabere přibližně 10 pracovních dní. Zahrnuje strategii, design šablon, psaní e-mailů, nastavení sekvencí, segmentaci a testování. Spuštění může být postupné: nejdříve uvítací sekvence, pak prodejní, pak pokročilé automatizace. Tento přístup umožňuje rychle začít sbírat data a optimalizovat na základě reálných výsledků.",
      },
      {
        _key: "f5",
        question: "Pomůžete i s texty e-mailů?",
        answer:
          "Připravuji copywritingový framework: strukturu každého e-mailu, hlavní sdělení, předměty a výzvy k akci. Pro finální texty doporučuji spolupráci s copywriterem, kterého vám mohu doporučit. Design e-mailových šablon a nastavení automatizace je plně v mé režii. Kvalitní texty jsou klíčové pro výkon sekvencí, proto jim věnuji pozornost i v rámci strategického návrhu.",
      },
    ],
    metaTitle: "E-mail marketing — ANFILOV | Automatizace e-mailů na míru",
    metaDescription:
      "E-mail marketing a automatizace od 15 000 Kč. Sekvence, segmentace, šablony pro Mailchimp i Ecomail. Dodání do 10 dní.",
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
