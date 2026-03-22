const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "d8caxrt0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const PATCHES = {
  "tvorba-loga": {
    atomicAnswer:
      "Tvorba loga je proces návrhu unikátního vizuálního symbolu, který reprezentuje vaši firmu, produkt nebo projekt. Určena je podnikatelům, startupům i zavedeným firmám, které potřebují profesionální značku od základu. Klient dostává kompletní logotyp ve vektorovém formátu (SVG, AI, EPS), barevné varianty (plnobarevná, jednobarevná, inverzní), soubory pro web i tisk (PNG, PDF) a stručný manuál použití loga. Proces začíná analýzou vašeho oboru a cílové skupiny, pokračuje skicováním konceptů a končí finalizací vybraného směru ve 2-3 prezentačních kolech. Cena tvorby loga začíná od 15 000 Kč, dodací lhůta je 2-4 týdny podle rozsahu projektu. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu logo, které funguje napříč médii a roste spolu s vaší firmou. Každý návrh vychází z analýzy trhu a strategického přístupu k budování značky.",
    faqItems: [
      {
        _key: "f1",
        question: "Kolik stojí tvorba loga na zakázku?",
        answer:
          "Cena tvorby loga začíná od 15 000 Kč. Konečná částka závisí na rozsahu projektu, počtu konceptů a požadovaných výstupech. V ceně je zahrnuta analýza konkurence, 2-3 návrhy konceptů, revizní kola a finální dodání ve všech potřebných formátech. U komplexnějších projektů, které zahrnují celou vizuální identitu, se cena pohybuje výš. Přesnou kalkulaci dostanete po úvodní konzultaci zdarma.",
      },
      {
        _key: "f2",
        question: "Jak dlouho trvá návrh nového loga?",
        answer:
          "Standardní dodací lhůta je 2-4 týdny. První týden probíhá analýza a skicování, druhý týden prezentace konceptů. Další čas zabírají revize a finalizace. Časový rámec závisí na rychlosti vaší zpětné vazby. Expresní dodání do 5 pracovních dnů je možné za příplatek. Kvalitní logo nelze uspěchat, proto doporučuji počítat s dostatečnou rezervou.",
      },
      {
        _key: "f3",
        question: "V jakých formátech logo dostanu?",
        answer:
          "Dodávám kompletní balíček: vektorové soubory (SVG, AI, EPS) pro tisk a škálování, rastrové soubory (PNG v různých rozlišeních) pro web a sociální sítě, PDF pro prezentace a dokumenty. Součástí jsou barevné varianty (plnobarevná, jednobarevná, inverzní) a verze na světlé i tmavé pozadí. Vše organizované v přehledné složce s návodem k použití.",
      },
      {
        _key: "f4",
        question: "Kolik návrhů loga dostanu k výběru?",
        answer:
          "Standardně prezentuji 2-3 odlišné koncepty, z nichž vyberete směr k dopracování. Každý koncept vychází z jiného strategického přístupu. Po výběru následují 2 kola revizí, kde ladíme detaily. Tento postup je efektivnější než desítky nepromyšlených variant. Cílem není kvantita, ale kvalita založená na analýze vašeho trhu a cílové skupiny.",
      },
      {
        _key: "f5",
        question: "Můžu si logo později upravit nebo rozšířit?",
        answer:
          "Ano, veškerá práva k finálnímu logu přecházejí na vás. Dodávám otevřené vektorové soubory, které lze kdykoliv upravit. Doporučuji ale úpravy konzultovat, aby logo zůstalo konzistentní. Nabízím i navazující služby jako brand manuál, vizuální identitu nebo redesign, pokud se vaše značka vyvine. Zdrojové soubory archivuji minimálně 5 let.",
      },
    ],
    metaTitle: "Tvorba loga — ANFILOV | Profesionální logo na míru",
    metaDescription:
      "Profesionální tvorba loga od 15 000 Kč. Strategický návrh, kompletní formáty, 30 let zkušeností. Objednejte konzultaci zdarma.",
  },

  "redesign-loga": {
    atomicAnswer:
      "Redesign loga je modernizace stávající značky tak, aby odpovídala současným standardům a potřebám firmy, ale neztratila svou rozpoznatelnost. Služba je určena firmám, jejichž logo zastaralo, nefunguje v digitálním prostředí nebo neodpovídá nové strategii. Klient dostává aktualizovaný logotyp s vylepšenou typografií a proporcemi, kompletní sadu formátů pro web i tisk (SVG, AI, PNG, PDF), barevné varianty a porovnání staré a nové verze pro interní komunikaci. Proces začíná auditem stávajícího loga a analýzou toho, co funguje a co ne. Následují návrhy úprav v rozsahu od jemného vyladění po výraznější modernizaci. Cena redesignu loga začíná od 12 000 Kč, dodání trvá 2-3 týdny. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Modernizuji vaše logo tak, aby fungovalo v digitální době a zůstalo rozpoznatelné. Zachovám to, co funguje, a opravím to, co brzdí vaši značku.",
    faqItems: [
      {
        _key: "f1",
        question: "Kdy je čas na redesign loga?",
        answer:
          "Redesign je na místě, když logo nefunguje v malých velikostech na mobilech a sociálních sítích, působí zastarale oproti konkurenci, nebo se změnila strategie firmy. Dalším signálem je potřeba zjednodušení pro digitální aplikace. Redesign neznamená zahození historie značky. Jde o evoluci, která zachovává rozpoznatelnost a přidává moderní funkčnost. Konzultace pomůže vyhodnotit, zda potřebujete jemné vyladění nebo výraznější zásah.",
      },
      {
        _key: "f2",
        question: "Kolik stojí redesign firemního loga?",
        answer:
          "Cena redesignu začíná od 12 000 Kč. Závisí na rozsahu zásahu. Jemné vyladění proporcí a typografie stojí méně než kompletní přepracování vizuální koncepce. V ceně je audit stávajícího loga, návrh 2-3 směrů úprav, revizní kola a finální dodání ve všech formátech. Přesnou nabídku sestavím po konzultaci, kdy posoudím aktuální stav a vaše potřeby.",
      },
      {
        _key: "f3",
        question: "Poznají zákazníci, že jsme změnili logo?",
        answer:
          "Záleží na rozsahu změn. Evoluční redesign zachovává klíčové prvky, takže zákazníci vnímají značku jako modernější, aniž by ji přestali poznávat. U výraznějšího přepracování doporučuji komunikační strategii pro představení nového vizuálu. Součástí dodávky je porovnání staré a nové verze, které můžete využít pro interní i externí komunikaci změny.",
      },
      {
        _key: "f4",
        question: "Jak dlouho trvá redesign loga?",
        answer:
          "Redesign loga trvá obvykle 2-3 týdny. Začínáme auditem stávající značky, pak následuje návrh variant a revize. Proces je často rychlejší než tvorba loga od nuly, protože pracujeme s existujícím základem. Časově náročnější bývá rozhodovací proces na straně klienta. Doporučuji nepospíchat, protože logo budete používat dalších 10-15 let.",
      },
    ],
    metaTitle: "Redesign loga — ANFILOV | Modernizace vaší značky",
    metaDescription:
      "Redesign loga od 12 000 Kč. Modernizace značky bez ztráty rozpoznatelnosti. Konzultace zdarma, dodání do 3 týdnů.",
  },

  "symbol-monogram": {
    atomicAnswer:
      "Symbol nebo monogram je zjednodušený grafický prvek, který doplňuje logotyp a funguje samostatně v situacích, kde celé logo nelze použít. Služba je určena firmám a osobním značkám, které potřebují ikonický znak pro favikony, profilové obrázky, vodoznaky nebo aplikační ikony. Klient dostává unikátní symbol nebo monogram ve vektorovém formátu (SVG, AI), rastrové verze v různých velikostech (PNG), varianty pro světlé i tmavé pozadí a specifikaci minimální velikosti. Proces zahrnuje analýzu stávající značky, hledání klíčového vizuálního motivu a jeho zjednodušení do čistého geometrického tvaru. Výsledek musí fungovat i ve velikosti 16x16 pixelů. Cena návrhu symbolu nebo monogramu začíná od 8 000 Kč, dodání trvá 1-2 týdny. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu symbol nebo monogram, který funguje od favikonu po billboard. Čistý tvar, který se vrývá do paměti a posiluje rozpoznatelnost vaší značky.",
    faqItems: [
      {
        _key: "f1",
        question: "Jaký je rozdíl mezi symbolem a monogramem?",
        answer:
          "Symbol je abstraktní nebo figurativní grafický znak, který reprezentuje značku bez použití písmen. Monogram kombinuje iniciály do jednoho grafického celku. Symbol funguje univerzálněji napříč kulturami, monogram je vhodnější pro osobní značky a luxusní segment. Volba závisí na charakteru vaší firmy a způsobu použití. Při konzultaci doporučím, která varianta lépe odpovídá vaší značce a cílové skupině.",
      },
      {
        _key: "f2",
        question: "Potřebuji symbol, když už mám logo?",
        answer:
          "Ano, pokud vaše logo obsahuje delší textový název. V digitálním prostředí potřebujete zkrácenou verzi pro profilové obrázky, favikony, ikony aplikací nebo vodoznaky. Symbol zajišťuje rozpoznatelnost i ve velmi malých velikostech, kde by celý logotyp byl nečitelný. Většina úspěšných značek pracuje se symbolem jako doplňkem hlavního loga. Je to investice do konzistentní prezentace na všech platformách.",
      },
      {
        _key: "f3",
        question: "Kolik stojí návrh symbolu nebo monogramu?",
        answer:
          "Cena začíná od 8 000 Kč. Zahrnuje analýzu značky, návrh 2-3 konceptů, revizní kola a dodání ve všech potřebných formátech. Pokud symbol vzniká současně s logem nebo vizuální identitou, nabízím zvýhodněnou cenu v rámci balíčku. Samostatný monogram pro osobní značku je na spodní hranici ceníku. Přesnou cenu stanovím po konzultaci.",
      },
      {
        _key: "f4",
        question: "Jak zajistit, aby symbol fungoval ve všech velikostech?",
        answer:
          "Klíčem je jednoduchost. Symbol navrhuji primárně ve velmi malé velikosti a teprve pak jej škáluji nahoru. Testováním v reálných podmínkách ověřuji čitelnost na favikonu (16x16 px), profilovém obrázku i na velkoplošném tisku. Používám čistou geometrii a minimální počet detailů. Výsledkem je tvar, který si zachovává charakter v jakékoliv velikosti.",
      },
    ],
    metaTitle: "Symbol a monogram — ANFILOV | Ikonický znak značky",
    metaDescription:
      "Návrh symbolu nebo monogramu od 8 000 Kč. Funkční od favikonu po billboard. Konzultace zdarma, dodání do 2 týdnů.",
  },

  "brand-manual": {
    atomicAnswer:
      "Brand manuál je komplexní dokument, který definuje pravidla používání vizuální identity vaší značky. Zajišťuje konzistentní prezentaci firmy napříč všemi kanály a materiály. Služba je určena firmám, které mají logo a vizuální identitu, ale potřebují jasná pravidla pro jejich správné používání interně i externě. Klient dostává strukturovaný dokument v PDF obsahující specifikaci loga (varianty, ochranná zóna, minimální velikost), barevný systém s přesnými kódy (CMYK, RGB, HEX, Pantone), typografická pravidla, grafické prvky, příklady správného a nesprávného použití a šablony pro běžné materiály. Rozsah manuálu přizpůsobuji velikosti firmy a počtu komunikačních kanálů. Cena brand manuálu začíná od 15 000 Kč, dodání trvá 2-4 týdny podle rozsahu. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Sestavím přehledný brand manuál, který zajistí konzistentní používání vaší značky. Jasná pravidla pro tým, dodavatele i partnery bez prostoru pro improvizaci.",
    faqItems: [
      {
        _key: "f1",
        question: "Co obsahuje brand manuál?",
        answer:
          "Brand manuál obsahuje specifikaci loga (varianty, ochranná zóna, minimální velikost, zakázané úpravy), definici barevného systému (primární a sekundární barvy s kódy CMYK, RGB, HEX, Pantone), typografická pravidla (písma, řezy, hierarchie), grafické prvky a vzory, pravidla pro fotografii a ilustrace, příklady aplikací na reálných materiálech. Rozsah přizpůsobuji potřebám firmy. Menší firma vystačí s 15-20 stranami, korporace potřebuje 50 a více.",
      },
      {
        _key: "f2",
        question: "Kolik stojí brand manuál?",
        answer:
          "Cena brand manuálu začíná od 15 000 Kč za základní verzi. Rozsáhlý manuál pro korporaci s desítkami aplikací stojí výrazně více. Cena závisí na počtu definovaných prvků, rozsahu příkladů použití a formátu dodání. Pokud manuál vzniká v rámci tvorby celé vizuální identity, je jeho cena zvýhodněná. Přesnou kalkulaci dostanete po konzultaci, kde zmapuji vaše potřeby.",
      },
      {
        _key: "f3",
        question: "Potřebuje malá firma brand manuál?",
        answer:
          "Ano, i malá firma profituje ze základních pravidel. Stačí stručný dokument o 10-15 stranách s klíčovými informacemi o logu, barvách a typografii. Jakmile spolupracujete s externími dodavateli na tiskovinách, webu nebo sociálních sítích, manuál šetří čas a peníze. Bez jasných pravidel vznikají nekonzistentní materiály, které oslabují značku. Základní manuál je investice, která se vrátí velmi rychle.",
      },
      {
        _key: "f4",
        question: "V jakém formátu brand manuál dodáváte?",
        answer:
          "Standardně dodávám interaktivní PDF, které je snadno sdílitelné a přístupné na všech zařízeních. Na požádání připravím i webovou verzi nebo prezentaci. Součástí dodávky je balíček se všemi grafickými podklady, na které manuál odkazuje, tedy loga, fonty, barevné palety a šablony. Formát přizpůsobím tomu, jak s manuálem budete pracovat v praxi.",
      },
      {
        _key: "f5",
        question: "Jak často je potřeba brand manuál aktualizovat?",
        answer:
          "Doporučuji revizi každé 2-3 roky nebo při významné změně strategie firmy. Aktualizace je potřeba i při vstupu na nové komunikační kanály, například při spuštění podcastu nebo TikToku. Nabízím servisní aktualizace za zvýhodněnou cenu. Dobře navržený manuál má ale základní pravidla platná i po 5 letech, protože vychází z nadčasových principů.",
      },
    ],
    metaTitle: "Brand manuál — ANFILOV | Pravidla vizuální identity",
    metaDescription:
      "Brand manuál od 15 000 Kč. Jasná pravidla pro konzistentní značku. Logo, barvy, typografie, aplikace. Konzultace zdarma.",
  },

  "brand-naming": {
    atomicAnswer:
      "Brand naming je proces tvorby názvu pro firmu, produkt nebo službu. Správný název je zapamatovatelný, vyslovitelný, dostupný jako doména a právně chráněný. Služba je určena startupům, novým produktům i firmám, které procházejí rebrandingem. Klient dostává 10-15 propracovaných návrhů názvů s vysvětlením strategie za každým, ověření dostupnosti domén (.cz, .com), předběžnou rešerši ochranných známek v databázi EUIPO a ÚPŘV, lingvistickou kontrolu negativních konotací a doporučení 3 finálních kandidátů s argumentací. Proces zahrnuje workshop pro definici hodnot značky, kreativní fázi generování názvů a systematickou selekci podle stanovených kritérií. Cena brand namingu začíná od 12 000 Kč, dodání trvá 2-3 týdny. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Vytvořím název, který se snadno zapamatuje, dobře vyslovuje a je dostupný jako doména. Systematický proces, ne náhodný brainstorming.",
    faqItems: [
      {
        _key: "f1",
        question: "Jak probíhá tvorba názvu značky?",
        answer:
          "Proces začíná definicí hodnot, cílové skupiny a pozice na trhu. Následuje kreativní fáze, kde generuji desítky kandidátů pomocí různých strategií: deskriptivní názvy, neologismy, metafory, zkratky, složeniny. Každý kandidát procházím filtrem vyslovitelnosti, zapamatovatelnosti, dostupnosti domén a právní čistoty. Výsledkem je 10-15 propracovaných návrhů s argumentací. Z nich doporučím 3 finalisty. Celý proces trvá 2-3 týdny.",
      },
      {
        _key: "f2",
        question: "Kolik stojí vymyšlení názvu firmy?",
        answer:
          "Cena brand namingu začíná od 12 000 Kč. Zahrnuje strategický workshop, kreativní fázi, rešerši domén a předběžné ověření ochranných známek. Cena závisí na rozsahu projektu a počtu trhů, kde název musí fungovat. Mezinárodní názvy vyžadují lingvistickou kontrolu ve více jazycích, což cenu navyšuje. Investice do správného názvu se mnohonásobně vrátí, protože pozdější přejmenování firmy je nesrovnatelně dražší.",
      },
      {
        _key: "f3",
        question: "Ověříte dostupnost domény a ochranné známky?",
        answer:
          "Ano. U každého navrženého názvu ověřuji dostupnost klíčových domén (.cz, .com, případně dalších TLD). Provádím předběžnou rešerši ochranných známek v databázích ÚPŘV a EUIPO. Toto není náhradou za právní posouzení, ale eliminuje názvy s jasnými kolizemi. Pro finální registraci ochranné známky doporučuji spolupráci se specializovaným patentovým zástupcem, kterého vám mohu doporučit.",
      },
      {
        _key: "f4",
        question: "Co když se mi žádný navržený název nelíbí?",
        answer:
          "V praxi se to stává výjimečně, protože návrhy vycházejí z vašich vstupů a hodnot. Pokud ani jeden z 10-15 návrhů nerezonuje, analyzujeme společně důvody a spustíme další kolo s upřesněným zadáním. První iterace funguje jako výzkum preferencí. Klíčové je dát si čas a žít s názvy několik dní, protože první reakce na neznámé slovo je často negativní, ale rychle se mění.",
      },
    ],
    metaTitle: "Brand naming — ANFILOV | Název, který prodává",
    metaDescription:
      "Tvorba názvu firmy nebo produktu od 12 000 Kč. Rešerše domén, ochranné známky, lingvistická kontrola. Konzultace zdarma.",
  },

  "brand-audit-strategie": {
    atomicAnswer:
      "Brand audit a strategie je komplexní analýza vaší značky a vytvoření plánu pro její posílení. Služba odhalí slabá místa v prezentaci, nekonzistentnosti a nevyužitý potenciál. Určena je firmám, které chtějí pochopit, jak jejich značku vnímá trh, a získat konkrétní doporučení pro zlepšení. Klient dostává analytickou zprávu zahrnující audit vizuální identity (logo, barvy, typografie, materiály), analýzu komunikačních kanálů a jejich konzistence, srovnání s konkurencí, identifikaci silných a slabých stránek a strategický plán s prioritizovanými doporučeními na 6-12 měsíců. Proces zahrnuje sběr podkladů, hloubkovou analýzu, prezentaci zjištění a workshop nad strategií. Cena brand auditu a strategie začíná od 18 000 Kč, dodání trvá 3-4 týdny. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Provedu nezávislý audit vaší značky a dodám strategii s konkrétními kroky. Zjistíte, co funguje, co opravit a kam investovat.",
    faqItems: [
      {
        _key: "f1",
        question: "Co je brand audit a co zjistím?",
        answer:
          "Brand audit je systematická analýza všech prvků vaší značky. Vizuální identita, komunikace, pozice na trhu, konzistence napříč kanály. Zjistíte, jak vaši značku vnímají zákazníci oproti záměru, kde ztrácíte důvěryhodnost nekonzistentní prezentací a které investice do brandingu přinesou největší návratnost. Výstupem je zpráva s konkrétními zjištěními a prioritizovaný plán nápravných opatření s odhadem nákladů a časového rámce.",
      },
      {
        _key: "f2",
        question: "Kolik stojí brand audit?",
        answer:
          "Cena brand auditu a strategie začíná od 18 000 Kč. Rozsah závisí na velikosti firmy, počtu komunikačních kanálů a hloubce analýzy. Základní audit pokrývá vizuální identitu a klíčové kontaktní body. Rozšířená verze zahrnuje konkurenční analýzu, zákaznický průzkum a strategický plán. Audit je investice, která vám ušetří zbytečné výdaje za neefektivní brandingové aktivity a ukáže, kam směřovat rozpočet.",
      },
      {
        _key: "f3",
        question: "Kdy je správný čas na brand audit?",
        answer:
          "Brand audit doporučuji před každou větší investicí do vizuální identity, před vstupem na nový trh, při poklesu rozpoznatelnosti značky nebo při nespokojenosti s výsledky marketingu. Také při fúzi firem nebo generační výměně ve vedení. Audit je výchozí bod, který zamezí plýtvání rozpočtem na změny, které nepotřebujete, a naopak upozorní na kritické problémy, které jste přehlédli.",
      },
      {
        _key: "f4",
        question: "Zahrnuje brand strategie i implementaci?",
        answer:
          "Strategie obsahuje konkrétní plán s prioritami a časovým rámcem, ale samotná implementace je samostatná služba. Mohu realizovat vizuální část strategie, tedy nové logo, identitu, brand manuál. Na další oblasti jako marketing nebo PR doporučuji specializované partnery. Strategický plán je koncipovaný tak, abyste jej mohli realizovat postupně podle priorit a rozpočtu bez nutnosti investovat vše najednou.",
      },
    ],
    metaTitle: "Brand audit a strategie — ANFILOV | Analýza značky",
    metaDescription:
      "Brand audit a strategie od 18 000 Kč. Analýza identity, konkurence, komunikace. Konkrétní plán na posílení značky. Konzultace zdarma.",
  },

  "vizualni-identita": {
    atomicAnswer:
      "Vizuální identita je kompletní systém vizuálních prvků, které tvoří ucelenou prezentaci značky. Zahrnuje vše od loga po aplikace na konkrétních materiálech. Služba je určena firmám a projektům, které potřebují profesionální a konzistentní vizuální prezentaci od základu nebo při rebrandingu. Klient dostává logotyp se symbolem, definovaný barevný systém (primární i sekundární paleta), typografický systém (nadpisy, text, doplňkové písmo), grafické prvky a vzory, šablony vizitky, hlavičkového papíru, e-mailového podpisu, prezentace a sociálních sítí, fotostyl a brand manuál. Proces zahrnuje strategický workshop, tvorbu konceptu, postupnou aplikaci na jednotlivé materiály a finální kompletaci. Cena vizuální identity začíná od 45 000 Kč, dodání trvá 4-8 týdnů podle rozsahu. Službu zajišťuje Simon Anfilov, designér s 30 lety zkušeností v reklamě a brandingu.",
    heroSubheadline:
      "Navrhnu kompletní vizuální systém, který drží pohromadě od vizitky po web. Strategický přístup, propracované detaily a materiály připravené k okamžitému použití.",
    faqItems: [
      {
        _key: "f1",
        question: "Co vše zahrnuje vizuální identita?",
        answer:
          "Vizuální identita zahrnuje logotyp a symbol, barevný systém s přesnými kódy pro tisk i web, typografický systém, grafické prvky a vzory, pravidla pro fotografii. Součástí jsou aplikace: vizitka, hlavičkový papír, obálka, e-mailový podpis, šablona prezentace, profily sociálních sítí. Vše je dokumentováno v brand manuálu. Rozsah přizpůsobuji potřebám firmy, není nutné objednávat vše naráz.",
      },
      {
        _key: "f2",
        question: "Kolik stojí kompletní vizuální identita?",
        answer:
          "Cena kompletní vizuální identity začíná od 45 000 Kč. Závisí na rozsahu, počtu aplikací a složitosti projektu. Základní balíček zahrnuje logo, barvy, typografii, vizitku a hlavičkový papír. Rozšířená verze přidává grafické prvky, šablony prezentací, sociální sítě a detailní brand manuál. Projekty je možné rozdělit do etap a rozpočet rozložit v čase. Přesnou kalkulaci sestavím po úvodní konzultaci.",
      },
      {
        _key: "f3",
        question: "Jak dlouho trvá tvorba vizuální identity?",
        answer:
          "Kompletní vizuální identita zabere 4-8 týdnů. První 2 týdny se věnuji strategii a konceptu loga. Další 2-3 týdny rozšiřuji koncept na barevný systém, typografii a grafické prvky. Poslední fáze jsou aplikace na konkrétní materiály a kompletace brand manuálu. Časový rámec závisí i na rychlosti zpětné vazby. Projekt řídím v jasných milnících, abyste vždy věděli, kde se nacházíme.",
      },
      {
        _key: "f4",
        question: "Můžu objednat jen část vizuální identity?",
        answer:
          "Ano, jednotlivé prvky nabízím i samostatně. Můžete začít logem a postupně přidávat další prvky. Doporučuji ale alespoň základní balíček zahrnující logo, barvy a typografii, protože tyto tři prvky se vzájemně ovlivňují a nejlépe fungují, když vznikají společně. Postupný přístup je rozumný rozpočtově, ale strategicky je efektivnější řešit identitu jako celek od začátku.",
      },
      {
        _key: "f5",
        question: "Připravíte i podklady pro tiskárnu a programátora?",
        answer:
          "Ano, součástí dodávky jsou kompletní produkční podklady. Pro tiskárnu připravuji soubory v CMYK s ořezovými značkami a spadávkou. Pro web dodávám optimalizované soubory v RGB, SVG ikony a specifikaci barev v HEX. Programátor dostane typografické specifikace, grid systém a měřítka. Vše je zdokumentované tak, aby žádný dodavatel nemusel hádat správné parametry.",
      },
    ],
    metaTitle: "Vizuální identita — ANFILOV | Kompletní firemní design",
    metaDescription:
      "Vizuální identita od 45 000 Kč. Logo, barvy, typografie, šablony, brand manuál. 30 let zkušeností. Konzultace zdarma.",
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
