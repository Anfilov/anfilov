const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "d8caxrt0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const PATCHES = {
  "moderni-vizitka": {
    atomicAnswer:
      "Moderní vizitka je profesionálně navržená tisková vizitka, která reprezentuje vaši značku při osobním setkání. Slouží jako fyzický kontaktní bod, který zanechává dojem a posiluje důvěryhodnost. Služba je určena podnikatelům, manažerům a firmám, které chtějí kvalitní vizitku odpovídající jejich vizuální identitě. Klient dostává grafický návrh vizitky (líc i rub), tiskový soubor v CMYK s ořezovými značkami a spadávkou (PDF), náhledový soubor pro schválení a specifikaci doporučeného papíru a tisku. Proces začíná analýzou vaší značky a požadavků na obsah, pokračuje návrhem layoutu s typografií a grafickými prvky a končí přípravou tiskových podkladů. Cena návrhu moderní vizitky začíná od 3 000 Kč, dodání trvá přibližně 5 pracovních dnů. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu vizitku, která zaujme na první pohled a přesně odpovídá vaší značce. Promyšlený layout, kvalitní typografie a tiskové podklady připravené k okamžité výrobě.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí návrh profesionální vizitky?",
        answer:
          "Cena návrhu vizitky začíná od 3 000 Kč. V ceně je grafický návrh obou stran, jedno revizní kolo a finální tiskové podklady v CMYK. Pokud potřebujete více variant pro různé zaměstnance nebo nestandardní formát, cena se upraví podle rozsahu. Při objednávce vizitky spolu s vizuální identitou nebo dalšími tiskovinami nabízím zvýhodněnou cenu. Přesnou kalkulaci dostanete po konzultaci.",
      },
      {
        _key: "f2",
        question: "Jak dlouho trvá návrh vizitky?",
        answer:
          "Dodací lhůta je přibližně 5 pracovních dnů od schválení podkladů. První den probíhá analýza a příprava konceptu, následuje návrh layoutu a prezentace. Po vaší zpětné vazbě finalizuji design a připravím tiskové soubory. Rychlost závisí na promptní komunikaci z vaší strany. Expresní dodání do 2 dnů je možné za příplatek.",
      },
      {
        _key: "f3",
        question: "V jakém formátu vizitku dostanu?",
        answer:
          "Dodávám tiskový soubor v PDF s ořezovými značkami, spadávkou a barevným prostorem CMYK, který je připravený pro jakoukoli tiskárnu. Součástí je náhledový PDF pro schválení a zdrojový soubor pro případné budoucí úpravy. Pokud potřebujete i digitální vizitku pro sdílení online, připravím ji jako doplňkovou službu. Specifikuji doporučený papír, gramáž a povrchovou úpravu.",
      },
      {
        _key: "f4",
        question: "Jaký formát a papír doporučujete?",
        answer:
          "Standardní vizitka má rozměr 90 × 50 mm, ale navrhuji i nestandardní formáty, které lépe odpovídají vaší značce. U papíru doporučuji gramáž minimálně 350 g/m² pro profesionální dojem. Výběr povrchové úpravy závisí na stylu značky: matný laminát působí elegantně, lesklý moderně, strukturovaný papír luxusně. Poradím s výběrem tak, aby vizitka odpovídala vašemu brandingu.",
      },
      {
        _key: "f5",
        question: "Zajistíte i tisk vizitek?",
        answer:
          "Primárně se věnuji grafickému návrhu a přípravě tiskových podkladů. Tisk vizitek zajišťuji ve spolupráci s ověřenými tiskárnami, kde garantuji kvalitu výstupu. Pokud máte vlastní tiskárnu, dodám podklady přesně podle jejich specifikací. Dohlédnu na barevnost a kvalitu prvního nátisku, aby výsledek odpovídal návrhu.",
      },
    ],
    metaTitle: "Moderní vizitka — ANFILOV | Profesionální návrh vizitky",
    metaDescription:
      "Návrh moderní vizitky od 3 000 Kč. Profesionální layout, tiskové podklady, dodání do 5 dnů. Konzultace zdarma.",
  },

  "katalog-brozura": {
    atomicAnswer:
      "Katalog nebo brožura je vícestránková tisková publikace, která prezentuje vaše produkty, služby nebo firmu uceleným a profesionálním způsobem. Služba je určena firmám, které potřebují kvalitní tiskovinu pro obchodní jednání, veletrhy, prezentace nebo distribuci zákazníkům. Klient dostává kompletní grafický návrh včetně layoutu stránek, typografie, zpracování fotografií a infografik, tiskový soubor v CMYK s ořezovými značkami (PDF/X), náhledový soubor pro schválení a specifikaci vazby a papíru. Proces začíná analýzou obsahu a cílové skupiny, pokračuje návrhem struktury a grafického konceptu a končí sazbou jednotlivých stran a přípravou tiskových dat. Cena návrhu katalogu nebo brožury začíná od 15 000 Kč, dodání trvá přibližně 14 pracovních dnů podle rozsahu. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu katalog nebo brožuru, která prodává za vás. Přehledná struktura, kvalitní typografie a zpracování, které odpovídá úrovni vaší značky.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí návrh katalogu nebo brožury?",
        answer:
          "Cena začíná od 15 000 Kč a závisí na počtu stran, složitosti layoutu a množství grafických prvků. Jednoduchá brožura o 8 stranách je na spodní hranici, rozsáhlý produktový katalog s desítkami stran stojí výrazně více. V ceně je grafický koncept, sazba všech stran, zpracování fotografií a tiskové podklady. Přesnou kalkulaci sestavím po konzultaci, kdy zmapuji rozsah a požadavky na obsah.",
      },
      {
        _key: "f2",
        question: "Jak dlouho trvá návrh katalogu?",
        answer:
          "Standardní dodací lhůta je přibližně 14 pracovních dnů. Závisí na počtu stran a připravenosti podkladů z vaší strany. První týden probíhá návrh konceptu a struktury, druhý týden sazba a finalizace. U rozsáhlejších katalogů nad 40 stran počítejte s delším časem. Klíčové je mít připravené texty a fotografie, jinak se projekt prodlužuje. Dodání urychlím, pokud máte kompletní podklady od začátku.",
      },
      {
        _key: "f3",
        question: "Co potřebujete od nás jako podklady?",
        answer:
          "Potřebuji texty jednotlivých sekcí, fotografie produktů v dostatečném rozlišení pro tisk (300 DPI), logo a prvky vizuální identity. Pokud nemáte profesionální fotografie, doporučím fotografa nebo navrhneme řešení s ilustracemi a infografikami. Texty mohu pomoci zredigovat, ale copywriting je samostatná služba. Čím kvalitnější podklady dodáte, tím lepší bude výsledek a rychlejší proces.",
      },
      {
        _key: "f4",
        question: "V jakém formátu katalog dodáváte?",
        answer:
          "Dodávám tiskový soubor PDF/X v CMYK s ořezovými značkami a spadávkou, připravený pro ofsetový i digitální tisk. Součástí je náhledový PDF pro schválení a zdrojový soubor pro budoucí aktualizace. Na požádání připravím i interaktivní PDF pro online distribuci s aktivními odkazy a navigací. Specifikuji doporučenou vazbu, papír a povrchovou úpravu pro optimální výsledek.",
      },
      {
        _key: "f5",
        question: "Můžeme katalog později aktualizovat?",
        answer:
          "Ano, zdrojové soubory jsou navržené tak, aby šly snadno aktualizovat. Výměna fotografií, úprava textů nebo přidání stran je běžná služba, kterou nabízím za zvýhodněnou hodinovou sazbu. Doporučuji navrhnout katalog modulárně, aby aktualizace byly co nejjednodušší. Pravidelně aktualizovaný katalog je efektivnější než každoroční kompletní přepracování.",
      },
    ],
    metaTitle: "Katalog a brožura — ANFILOV | Profesionální tiskoviny",
    metaDescription:
      "Návrh katalogu a brožury od 15 000 Kč. Přehledný layout, tiskové podklady, dodání do 14 dnů. Konzultace zdarma.",
  },

  "letak-flyer": {
    atomicAnswer:
      "Leták nebo flyer je jednostránková nebo oboustranná tisková propagace, která rychle a efektivně komunikuje vaši nabídku, akci nebo událost. Služba je určena firmám, obchodům, organizátorům akcí a komukoli, kdo potřebuje přímou tiskovou komunikaci s jasným sdělením. Klient dostává grafický návrh letáku v požadovaném formátu (A5, A4, DL nebo nestandardní), tiskový soubor v CMYK s ořezovými značkami a spadávkou (PDF), náhledový soubor pro schválení a doporučení papíru a tisku. Proces začíná definicí cíle letáku a klíčového sdělení, pokračuje návrhem vizuálně přitažlivého layoutu s jasnou hierarchií informací a končí přípravou tiskových podkladů. Cena návrhu letáku začíná od 4 000 Kč, dodání trvá přibližně 5 pracovních dnů. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu leták, který zaujme a přiměje k akci. Jasné sdělení, přehledný layout a design, který funguje i v záplavě konkurenčních materiálů.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí návrh letáku nebo flyeru?",
        answer:
          "Cena návrhu letáku začíná od 4 000 Kč za jednostranný leták. Oboustranný leták nebo složitější design s infografikou stojí více. V ceně je grafický návrh, jedno revizní kolo a tiskové podklady. Pokud potřebujete sérii letáků se společným vizuálním stylem, nabízím zvýhodněnou cenu za sadu. Přesnou kalkulaci stanovím po konzultaci, kdy zmapuji rozsah a požadavky.",
      },
      {
        _key: "f2",
        question: "Jak rychle můžu leták dostat?",
        answer:
          "Standardní dodací lhůta je přibližně 5 pracovních dnů od dodání podkladů. Zahrnuje návrh konceptu, prezentaci, revizi a přípravu tiskových dat. Expresní dodání do 2 pracovních dnů je možné za příplatek. U opakovaných zakázek se čas zkracuje, protože pracuji s nastaveným vizuálním stylem. Nejrychleji to jde, když máte připravené texty a fotografie.",
      },
      {
        _key: "f3",
        question: "Jaký formát letáku je nejúčinnější?",
        answer:
          "Závisí na účelu a způsobu distribuce. A5 je univerzální pro přímou distribuci a stojany. DL (třetina A4) se vejde do obálky a je ideální pro direct mail. A4 nabízí více prostoru pro komplexnější sdělení. Pro prémiové akce navrhuji nestandardní formáty, které vyniknou. Při konzultaci doporučím formát podle toho, jak a kde bude leták distribuován a co má komunikovat.",
      },
      {
        _key: "f4",
        question: "Napíšete i texty pro leták?",
        answer:
          "Primárně se věnuji grafickému zpracování. Texty doporučuji připravit s copywriterem, který formuluje sdělení pro vaši cílovou skupinu. Mohu ale pomoci s úpravou a zkrácením textů tak, aby fungovaly v rámci grafického layoutu. Leták musí komunikovat jasně a stručně, proto je důležité, aby text a grafika vznikaly v součinnosti. Poradím s hierarchií informací a výzvou k akci.",
      },
      {
        _key: "f5",
        question: "Zajistíte i tisk letáků?",
        answer:
          "Tisk zajišťuji ve spolupráci s ověřenými tiskárnami pro optimální poměr ceny a kvality. Pokud máte vlastní tiskárnu, dodám podklady přesně podle jejich požadavků. U většího nákladu doporučuji ofsetový tisk, u menšího digitální. Specifikuji gramáž papíru a povrchovou úpravu tak, aby leták odpovídal účelu a rozpočtu.",
      },
    ],
    metaTitle: "Leták a flyer — ANFILOV | Návrh propagačních materiálů",
    metaDescription:
      "Návrh letáku a flyeru od 4 000 Kč. Přitažlivý design, tiskové podklady, dodání do 5 dnů. Konzultace zdarma.",
  },

  "rollup-banner-plakat": {
    atomicAnswer:
      "Roll-up, banner nebo plakát je velkoplošný tiskový materiál určený pro prezentaci na veletrzích, konferencích, v prodejnách nebo veřejném prostoru. Služba je určena firmám, které potřebují vizuálně výraznou prezentaci pro události, výstavy nebo prostory s vysokou návštěvností. Klient dostává grafický návrh v požadovaném formátu (roll-up 85 × 200 cm, banner dle specifikace, plakát A2/A1/B1), tiskový soubor ve správném rozlišení a barevném prostoru, náhledový soubor pro schválení a specifikaci materiálu a tisku. Proces začíná definicí účelu a umístění, pokračuje návrhem vizuálně silného designu s jasnou čitelností na vzdálenost a končí přípravou tiskových podkladů. Cena návrhu roll-upu, banneru nebo plakátu začíná od 5 000 Kč, dodání trvá přibližně 5 pracovních dnů. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu roll-up, banner nebo plakát, který přitáhne pozornost z dálky. Čistý design s jasným sdělením, který funguje ve velkém měřítku a odpovídá vaší značce.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí návrh roll-upu nebo banneru?",
        answer:
          "Cena návrhu začíná od 5 000 Kč za jeden roll-up nebo plakát. V ceně je grafický návrh, jedno revizní kolo a tiskové podklady. Sada roll-upů se společným vizuálním stylem je cenově zvýhodněná. Cena závisí na rozměru, složitosti grafiky a počtu variant. Při objednávce více kusů pro veletržní expozici sestavím cenovou nabídku na celý projekt. Přesnou kalkulaci dostanete po konzultaci.",
      },
      {
        _key: "f2",
        question: "Jaký rozměr roll-upu doporučujete?",
        answer:
          "Standardní rozměr roll-upu je 85 × 200 cm, který se hodí do většiny stojanů a prostorů. Pro větší expozice navrhuji šířku 100 nebo 120 cm. U bannerů a plakátů závisí rozměr na umístění a vzdálenosti diváka. Klíčové je přizpůsobit množství informací velikosti a vzdálenosti čtení. Na roll-upu by měl být čitelný hlavní nadpis ze vzdálenosti minimálně 3 metrů.",
      },
      {
        _key: "f3",
        question: "Jak připravit podklady pro velkoplošný tisk?",
        answer:
          "O přípravu tiskových podkladů se postarám kompletně. Fotografie musí mít dostatečné rozlišení pro daný formát, u roll-upu stačí 150 DPI ve finální velikosti. Vektorové prvky jako logo a texty jsou bezproblémové v jakékoliv velikosti. Pokud vaše fotografie nemají dostatečné rozlišení, navrhnu alternativní řešení s grafickými prvky. Tiskové soubory dodávám ve formátu, který vyžaduje výrobce stojanu.",
      },
      {
        _key: "f4",
        question: "Zajistíte i výrobu roll-upu nebo banneru?",
        answer:
          "Výrobu zajišťuji ve spolupráci s ověřenými dodavateli velkoplošného tisku. Doporučím typ stojanu, materiál tisku a povrchovou úpravu podle účelu použití. Pro jednorázové akce stačí ekonomická varianta, pro opakované použití doporučuji kvalitnější materiály. Pokud máte vlastního dodavatele, dodám podklady přesně podle jeho specifikací.",
      },
      {
        _key: "f5",
        question: "Můžu použít stejný design pro různé formáty?",
        answer:
          "Ano, ale každý formát vyžaduje přizpůsobení layoutu. Design roll-upu nelze jednoduše zmenšit na plakát A3, protože se mění proporce, čtecí vzdálenost i hierarchie informací. Navrhuji adaptace designu pro různé formáty tak, aby vizuální styl zůstal konzistentní, ale layout fungoval optimálně v každé velikosti. Sada adaptací je cenově zvýhodněná oproti samostatným návrhům.",
      },
    ],
    metaTitle: "Roll-up, banner, plakát — ANFILOV | Velkoplošný design",
    metaDescription:
      "Návrh roll-upu, banneru a plakátu od 5 000 Kč. Výrazný design pro veletrhy a akce, dodání do 5 dnů. Konzultace zdarma.",
  },

  "firemni-dokumenty": {
    atomicAnswer:
      "Firemní dokumenty jsou profesionálně navržené šablony pro každodenní firemní komunikaci. Zahrnují hlavičkový papír, obálky, faktury, nabídky, smlouvy, interní formuláře a další tiskoviny, které reprezentují vaši značku. Služba je určena firmám, které chtějí konzistentní a profesionální podobu veškeré tištěné i digitální komunikace. Klient dostává sadu grafických šablon v editovatelných formátech (Word, InDesign, PDF), tiskové podklady pro hlavičkový papír a obálky, šablony faktur a nabídek s napojením na firemní vizuální identitu a specifikaci papíru a tisku. Proces začíná analýzou typů dokumentů, které firma používá, pokračuje návrhem jednotného vizuálního systému a končí přípravou editovatelných šablon. Cena návrhu firemních dokumentů začíná od 8 000 Kč, dodání trvá přibližně 7 pracovních dnů. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu jednotné šablony firemních dokumentů, které posilují vaši značku při každém kontaktu. Hlavičkový papír, faktury, nabídky a formuláře v konzistentním designu.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí návrh firemních dokumentů?",
        answer:
          "Cena začíná od 8 000 Kč za základní sadu, která zahrnuje hlavičkový papír, obálku a šablonu faktury. Rozšířená sada s nabídkami, smlouvami, interními formuláři a prezentací stojí více podle počtu šablon. Při objednávce v rámci vizuální identity nabízím zvýhodněnou cenu. Každý dokument je navržen tak, aby odpovídal vašemu brandingu a byl snadno editovatelný. Přesnou kalkulaci sestavím po zmapování vašich potřeb.",
      },
      {
        _key: "f2",
        question: "Jak dlouho trvá příprava šablon?",
        answer:
          "Dodací lhůta je přibližně 7 pracovních dnů pro základní sadu dokumentů. Rozsáhlejší projekty s desítkami šablon trvají déle. První dny probíhá návrh vizuálního systému dokumentů, poté aplikace na jednotlivé typy. Nejdůležitější je správné nastavení editovatelných šablon, aby je mohli vaši zaměstnanci jednoduše používat bez grafických znalostí.",
      },
      {
        _key: "f3",
        question: "V jakém formátu šablony dodáváte?",
        answer:
          "Šablony dodávám v editovatelných formátech podle vašich potřeb. Pro běžné uživatele připravuji šablony ve Wordu s předdefinovanými styly a chráněnými prvky. Pro grafiky dodávám zdrojové soubory v InDesignu. Hlavičkový papír a obálky mají tiskovou verzi v PDF/CMYK. Součástí je stručný návod k používání šablon, aby zaměstnanci věděli, co mohou měnit a co ne.",
      },
      {
        _key: "f4",
        question: "Můžou naši zaměstnanci šablony sami editovat?",
        answer:
          "Ano, šablony jsou navržené pro jednoduchou editaci v běžných programech. Definuji přesně, které prvky jsou editovatelné a které fixní. Zaměstnanci vyplňují obsah do předpřipravených polí, zatímco logo, záhlaví, zápatí a grafické prvky zůstávají chráněné. To zajišťuje konzistentní vizuální podobu bez ohledu na to, kdo dokument vyplňuje. Připravím i krátký návod pro tým.",
      },
      {
        _key: "f5",
        question: "Zahrnuje služba i digitální verze dokumentů?",
        answer:
          "Ano, kromě tiskových šablon připravuji i digitální verze pro odesílání e-mailem. Digitální dokumenty mají optimalizovanou velikost souboru, správné barvy pro obrazovku (RGB) a aktivní kontaktní odkazy. Pokud používáte fakturační systém nebo CRM, přizpůsobím šablony jeho technickým požadavkům. Cílem je, aby vaše dokumenty vypadaly profesionálně v tištěné i digitální podobě.",
      },
    ],
    metaTitle: "Firemní dokumenty — ANFILOV | Šablony a tiskoviny",
    metaDescription:
      "Návrh firemních dokumentů od 8 000 Kč. Hlavičkový papír, faktury, šablony. Dodání do 7 dnů. Konzultace zdarma.",
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
