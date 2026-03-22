/**
 * Patch script for improving all 200 glossary term definitions in Sanity.
 *
 * Run with:
 *   SANITY_WRITE_TOKEN=xxx node scripts/patch-glossary-definitions.js
 */

const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "d8caxrt0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

// ─── IMPROVEMENTS MAP ────────────────────────────────────────────────
// { [term]: { shortDefinition, aliases } }

const IMPROVEMENTS = {
  // ═══════════════════════════════════════════════════════════════════
  // BRANDING
  // ═══════════════════════════════════════════════════════════════════
  "Architektura značky": {
    shortDefinition:
      "Architektura značky je systém organizace značek, sub-brandů a produktových řad firmy. Rozlišuje se monolitická (jedna značka), endorsovaná (mateřská + dceřiné) a nezávislá (oddělené značky).",
    aliases: ["Brand architecture", "architektura brandů", "brand hierarchy"],
  },
  "Audit značky": {
    shortDefinition:
      "Audit značky je komplexní analýza současného stavu značky — vizuální identity, komunikace, zákaznického vnímání a konkurenční pozice. Výstupem je podklad pro strategická rozhodnutí.",
    aliases: ["Brand audit", "analýza značky", "brand review"],
  },
  Claim: {
    shortDefinition:
      "Claim je krátké reklamní sdělení vázané na konkrétní kampaň nebo produkt. Na rozdíl od tagline se mění s každou kampaní a není trvalou součástí identity značky.",
    aliases: ["Reklamní tvrzení", "headline značky", "advertising claim", "kampňový slogan"],
  },
  "Corporate identity": {
    shortDefinition:
      "Corporate identity je celkový obraz firmy tvořený vizuální identitou, firemní kulturou, komunikačním stylem a chováním zaměstnanců. Zahrnuje vše, čím se firma prezentuje navenek i dovnitř.",
    aliases: ["CI", "firemní identita", "podniková identita", "korporátní identita"],
  },
  Emblém: {
    shortDefinition:
      "Emblém je typ loga, kde je text integrován přímo do grafického tvaru — kruhu, štítu nebo znaku. Používají ho značky jako Starbucks, Harley-Davidson nebo NFL.",
    aliases: ["Emblem", "odznak", "znak", "crest logo"],
  },
  "Firemní identita": {
    shortDefinition:
      "Firemní identita je souhrnný vizuální a komunikační systém firmy. Zahrnuje logo, barvy, typografii, tone of voice a pravidla jejich použití napříč všemi médii.",
    aliases: ["Corporate identity", "CI", "brand identity system", "vizuální systém firmy"],
  },
  "Hodnota značky": {
    shortDefinition:
      "Hodnota značky je přidaná hodnota, kterou značka přináší produktu nad rámec jeho funkčních vlastností. Měří se povědomím, loajalitou, vnímanou kvalitou a asociacemi.",
    aliases: ["Brand equity", "brand value", "hodnota brandu"],
  },
  "Hodnoty značky": {
    shortDefinition:
      "Hodnoty značky jsou základní principy a přesvědčení, na kterých značka stojí. Řídí rozhodování, komunikaci a chování firmy. Příklad: Nike — výkon, inovace, odvaha.",
    aliases: ["Brand values", "brand principles", "principy značky", "firemní hodnoty"],
  },
  "Kontaktní bod značky": {
    shortDefinition:
      "Kontaktní bod značky je jakýkoli moment, kdy zákazník přijde do styku se značkou — web, obal, vizitka, email, prodejna, sociální sítě nebo zákaznická podpora.",
    aliases: ["Brand touchpoint", "touchpoint", "styčný bod značky"],
  },
  Logo: {
    shortDefinition:
      "Logo je grafické označení firmy nebo produktu sloužící k identifikaci a odlišení od konkurence. Zastřešující pojem pro wordmark, signet, kombinované logo i emblém.",
    aliases: ["Logotyp", "značka", "logotype", "brand mark", "firemní logo"],
  },
  Logotyp: {
    shortDefinition:
      "Logotyp je logo tvořené výhradně stylizovaným písmem bez obrazového prvku. Příklady: Google, Coca-Cola, FedEx. Vhodný pro značky se silným a zapamatovatelným názvem.",
    aliases: ["Textové logo", "wordmark", "typographic logo", "písmové logo"],
  },
  "Manuál značky": {
    shortDefinition:
      "Manuál značky je závazný dokument shrnující pravidla pro používání značky — logo, barvy, typografie, tón komunikace a aplikace na různých médiích.",
    aliases: ["Brandbook", "brand book", "brand manual", "brand guide", "grafický manuál"],
  },
  Monogram: {
    shortDefinition:
      "Monogram je logo složené z iniciál nebo prvních písmen názvu značky. Příklady: IBM, HBO, LV, HP. Efektivní pro značky s dlouhým nebo obtížně zapamatovatelným názvem.",
    aliases: ["Monogramové logo", "lettermark", "iniciálové logo", "letterform logo"],
  },
  Moodboard: {
    shortDefinition:
      "Moodboard je koláž z obrázků, barev, textur a typografie, která vizuálně definuje zamýšlenou atmosféru a estetický směr nového designu nebo rebrandingu.",
    aliases: ["Náladová koláž", "inspirační tabule", "mood board", "vizuální reference"],
  },
  Naming: {
    shortDefinition:
      "Naming je proces vytváření jména pro značku, produkt nebo službu. Zohledňuje zapamatovatelnost, vyslovitelnost, dostupnost domény a možnost registrace ochranné známky.",
    aliases: ["Tvorba názvu", "pojmenování značky", "brand naming", "název značky"],
  },
  "Osobnost značky": {
    shortDefinition:
      "Osobnost značky je soubor lidských vlastností přisouzených značce — přátelská, odborná, odvážná, hravá. Pomáhá vytvořit konzistentní tón komunikace a emocionální spojení se zákazníky.",
    aliases: ["Brand persona", "brand personality", "charakter značky"],
  },
  "Pay-off": {
    shortDefinition:
      "Pay-off je krátká fráze doplňující logo, která shrnuje pozici nebo příslib značky. Používá se zejména v evropském kontextu jako ekvivalent tagline.",
    aliases: ["Dovětek značky", "payoff", "brand payoff", "dovětek loga"],
  },
  "Povědomí o značce": {
    shortDefinition:
      "Povědomí o značce je míra, do jaké cílová skupina zná a rozpoznává značku. Rozlišuje se spontánní (top-of-mind) a podpořené (aided) povědomí.",
    aliases: ["Brand awareness", "znalost značky", "rozpoznatelnost značky"],
  },
  "Pozicování značky": {
    shortDefinition:
      "Pozicování značky je strategické vymezení místa, které značka zaujímá v mysli zákazníka vůči konkurenci. Definuje unikátní hodnotu a odlišení na trhu.",
    aliases: ["Brand positioning", "positioning", "pozice značky", "tržní pozicování"],
  },
  "Pravidla značky": {
    shortDefinition:
      "Pravidla značky jsou praktický návod pro správné použití vizuální identity — specifikace loga, barev, písma, ochranných zón a zakázaných variant. Zajišťují konzistenci.",
    aliases: ["Brand guidelines", "brand guide", "grafický manuál", "guidelines", "style guide"],
  },
  "Příběh značky": {
    shortDefinition:
      "Příběh značky je strategické vyprávění budující emocionální spojení se zákazníkem. Zahrnuje historii vzniku, hodnoty, vizi a autentický důvod existence značky.",
    aliases: ["Brand storytelling", "brand story", "storytelling značky"],
  },
  "Příslib značky": {
    shortDefinition:
      "Příslib značky je hlavní slib, který značka dává zákazníkům — co mohou očekávat při každém kontaktu s ní. Musí být splnitelný a konzistentně naplňovaný.",
    aliases: ["Brand promise", "slib značky", "brand commitment"],
  },
  Rebrand: {
    shortDefinition:
      "Rebrand je zásadní proměna značky — nový název, logo, vizuální identita nebo strategické směřování. Reaguje na změnu trhu, fúzi firem nebo zastaralost stávající identity.",
    aliases: ["Rebranding", "změna značky", "přeznačení", "brand overhaul"],
  },
  Refresh: {
    shortDefinition:
      "Refresh je evoluční aktualizace vizuální identity bez změny základní strategie. Modernizuje vzhled značky při zachování rozpoznatelnosti a kontinuity.",
    aliases: ["Brand refresh", "osvěžení značky", "vizuální refresh", "identity refresh"],
  },
  Signet: {
    shortDefinition:
      "Signet je čistě obrazová část loga bez textu. Funguje samostatně pouze u zavedených značek s vysokým povědomím — Apple, Nike, Twitter. Také se nazývá brand mark.",
    aliases: ["Obrazové logo", "symbol", "piktogram", "brand mark", "icon mark"],
  },
  Slogan: {
    shortDefinition:
      "Slogan je zapamatovatelná fráze shrnující podstatu značky nebo kampaně. Bývá delší než tagline a může se měnit v čase podle aktuálního komunikačního záměru.",
    aliases: ["Heslo", "motto", "reklamní slogan", "advertising slogan"],
  },
  "Strategie značky": {
    shortDefinition:
      "Strategie značky je dlouhodobý plán definující účel, hodnoty, pozicování, cílovou skupinu a komunikační směr značky. Slouží jako kompas pro veškeré marketingové aktivity.",
    aliases: ["Brand strategy", "brandová strategie", "brand plan"],
  },
  Styleguide: {
    shortDefinition:
      "Styleguide je dokument definující vizuální a jazyková pravidla značky — barvy, písma, styl fotografií a tón komunikace. Užší a praktičtější než plný brand book.",
    aliases: ["Stylistická příručka", "style guide", "vizuální příručka", "grafický styleguide"],
  },
  Symbol: {
    shortDefinition:
      "Symbol je grafický prvek reprezentující značku — abstraktní tvar, piktogram nebo stylizovaný objekt. Používá se samostatně nebo jako součást kombinovaného loga.",
    aliases: ["Ikonka značky", "brand mark", "brand symbol", "grafický symbol"],
  },
  Tagline: {
    shortDefinition:
      "Tagline je stálá krátká fráze provázející značku, která vystihuje její podstatu. Příklad: Nike — 'Just Do It'. Na rozdíl od claimu se nemění s kampaněmi.",
    aliases: ["Slogan", "motto", "dovětek", "brand tagline", "heslo značky"],
  },
  "Tone of voice": {
    shortDefinition:
      "Tone of voice je způsob, jakým značka komunikuje — volba slov, styl, humor, formálnost. Musí být konzistentní napříč všemi kanály a odpovídat osobnosti značky.",
    aliases: ["ToV", "tón komunikace", "komunikační tón", "hlas značky"],
  },
  Trademark: {
    shortDefinition:
      "Trademark je právně chráněné označení — název, logo, zvuk nebo tvar — registrované u příslušného úřadu. Chrání značku před neoprávněným užitím konkurencí.",
    aliases: ["Ochranná známka", "™", "®", "TM", "registrovaná značka"],
  },
  "Vizuální identita": {
    shortDefinition:
      "Vizuální identita je soubor vizuálních prvků značky — logo, barvy, typografie, grafické prvky, fotostyl a ikonografie. Tvoří rozpoznatelný a konzistentní vzhled značky.",
    aliases: ["Visual identity", "VI", "vizuální styl", "corporate visual identity"],
  },
  "Věrnost značce": {
    shortDefinition:
      "Věrnost značce je tendence zákazníků opakovaně kupovat produkty jedné značky namísto konkurence. Buduje se kvalitou, důvěrou a emocionálním propojením.",
    aliases: ["Brand loyalty", "loajalita ke značce", "zákaznická věrnost", "brand retention"],
  },
  Wordmark: {
    shortDefinition:
      "Wordmark je logo tvořené pouze typograficky zpracovaným názvem značky bez obrazového prvku. Příklady: Google, Visa, Canon. Klade důraz na samotný název a jeho vizuální zpracování.",
    aliases: ["Textové logo", "logotyp", "typographic logo", "písmenné logo"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // DIGITALNI DESIGN
  // ═══════════════════════════════════════════════════════════════════
  "Barevná paleta": {
    shortDefinition:
      "Barevná paleta je definovaná sada barev značky — primární, sekundární a akcentní. Vychází z brand strategie a zajišťuje vizuální konzistenci napříč všemi médii a materiály.",
    aliases: ["Color palette", "barevné schéma", "brand colors", "barevný systém"],
  },
  "Click-through rate": {
    shortDefinition:
      "Click-through rate je poměr počtu kliknutí k počtu zobrazení vyjádřený v procentech. Měří efektivitu banneru, emailu nebo reklamy — vyšší CTR značí relevantnější obsah.",
    aliases: ["CTR", "míra prokliku", "proklikovost"],
  },
  "Design bannerů": {
    shortDefinition:
      "Design bannerů je návrh reklamních bannerů pro web — statických, animovaných nebo HTML5. Standardní formáty definuje IAB: 300×250, 728×90, 160×600 a další.",
    aliases: ["Banner design", "bannerová grafika", "display banner", "online banner"],
  },
  "Design tmavého režimu": {
    shortDefinition:
      "Design tmavého režimu je návrh rozhraní optimalizovaný pro tmavé pozadí. Vyžaduje upravené kontrasty, sníženou sytost barev a odlišný přístup k typografii a stínům.",
    aliases: ["Dark mode design", "design pro tmavý režim", "dark UI design"],
  },
  "Design token": {
    shortDefinition:
      "Design token je nejmenší jednotka design systému uložená jako proměnná — barva, velikost písma, rozestup, stín. Propojuje design s kódem a zajišťuje konzistenci.",
    aliases: ["Designový token", "token", "style token", "design variable"],
  },
  "Email šablona": {
    shortDefinition:
      "Email šablona je předpřipravený layout pro emailovou komunikaci s pozicemi pro logo, text, obrázky a CTA. Musí být responzivní a kompatibilní s různými emailovými klienty.",
    aliases: ["Email template", "newsletter template", "šablona emailu", "mailová šablona"],
  },
  Favicon: {
    shortDefinition:
      "Favicon je malá ikona (16×16 nebo 32×32 px) zobrazená v záložce prohlížeče, v záložkách a ve výsledcích vyhledávání. Pomáhá s rozpoznatelností webu.",
    aliases: ["Ikona webu", "favicon.ico", "záložková ikona", "browser icon"],
  },
  "Hlavní obrázek": {
    shortDefinition:
      "Hlavní obrázek je velký dominantní vizuál v horní části webu nebo landing page. Měl by okamžitě komunikovat téma stránky a přitáhnout pozornost návštěvníka.",
    aliases: ["Hero image", "hero vizuál", "hlavní vizuál", "hero banner image"],
  },
  Ikona: {
    shortDefinition:
      "Ikona je zjednodušený grafický symbol reprezentující akci, objekt nebo koncept. V UI designu plní navigační a informační funkci a musí být čitelná i v malých velikostech.",
    aliases: ["Icon", "piktogram", "UI icon", "ikonka"],
  },
  Ilustrace: {
    shortDefinition:
      "Ilustrace je originální kresba nebo digitální grafika sloužící k vizuální komunikaci. Na webu, v tisku i na obalu odlišuje značku od konkurence používající stock fotky.",
    aliases: ["Illustration", "digitální ilustrace", "custom illustration", "kresba"],
  },
  Infografika: {
    shortDefinition:
      "Infografika je vizuální zpracování dat, statistik nebo procesů do přehledné grafické podoby. Kombinuje ikony, grafy, text a ilustrace pro snadné pochopení složitých informací.",
    aliases: ["Infographic", "informační grafika", "datová vizualizace", "data visualization"],
  },
  "Lottie animace": {
    shortDefinition:
      "Lottie animace je lehký vektorový animační formát (JSON) exportovaný z After Effects pomocí pluginu Bodymovin. Škálovatelný a výkonově úsporný — ideální pro webové a mobilní animace.",
    aliases: ["Lottie", "bodymovin", "JSON animace", "Lottie file"],
  },
  "Míra otevření": {
    shortDefinition:
      "Míra otevření je procento příjemců, kteří otevřeli emailovou kampaň. Průměr se liší podle odvětví (obvykle 20–30 %). Ovlivňuje ji předmět emailu, odesílatel a načasování.",
    aliases: ["Open rate", "open rate emailu", "e-mail open rate", "OR"],
  },
  Newsletter: {
    shortDefinition:
      "Newsletter je pravidelně rozesílaný email s novinkami, obsahem nebo nabídkami. Buduje vztah s odběrateli a přivádí opakovanou návštěvnost na web.",
    aliases: ["Emailový zpravodaj", "zpravodaj", "email newsletter", "e-mailový newsletter"],
  },
  "OG image": {
    shortDefinition:
      "OG image je obrázek zobrazený při sdílení URL na sociálních sítích (Facebook, LinkedIn, Twitter). Doporučená velikost je 1200×630 px. Správně navržený zvyšuje proklikovost.",
    aliases: ["Open Graph image", "sdílecí obrázek", "social share image", "náhledový obrázek odkazu"],
  },
  "Pitch deck": {
    shortDefinition:
      "Pitch deck je stručná vizuální prezentace (10–20 slidů) představující firmu, produkt nebo projekt investorům, klientům nebo partnerům. Klíčová pro fundraising a obchodní jednání.",
    aliases: ["Prezentace pro investory", "sales deck", "investor deck", "startup prezentace"],
  },
  "Pohybový design": {
    shortDefinition:
      "Pohybový design je animovaná grafika kombinující typografii, ikony, ilustrace a video. Používá se v reklamních spotech, na webu, v aplikacích a na sociálních sítích.",
    aliases: ["Motion design", "motion graphics", "pohyblivá grafika", "MoGraph"],
  },
  "SVG animace": {
    shortDefinition:
      "SVG animace je animace vektorové grafiky přímo v prohlížeči pomocí CSS nebo JavaScriptu. Škálovatelná, lehká a ideální pro animované ikony, loga a dekorativní prvky na webu.",
    aliases: ["Animovaný SVG", "animated SVG", "CSS SVG animace"],
  },
  "Slide master": {
    shortDefinition:
      "Slide master je šablonový snímek v prezentaci definující rozložení, barvy, fonty a pozice prvků. Zajišťuje vizuální konzistenci celé prezentace a urychluje tvorbu nových slidů.",
    aliases: ["Hlavní snímek", "master slide", "prezentační šablona", "slide template"],
  },
  "Stylový rámec": {
    shortDefinition:
      "Stylový rámec je klíčový vizuál definující grafický styl kampaně, videa nebo designového projektu. Slouží ke schválení vizuálního směru před rozpracováním celého projektu.",
    aliases: ["Style frame", "key visual", "KV", "klíčový vizuál"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // MARKETING
  // ═══════════════════════════════════════════════════════════════════
  "A/B testování": {
    shortDefinition:
      "A/B testování je porovnání dvou variant stránky, emailu nebo reklamy zobrazených různým skupinám uživatelů. Varianta s lepšími výsledky (konverze, CTR) se nasadí jako hlavní.",
    aliases: ["Split testing", "A/B test", "split test", "AB test"],
  },
  Backlink: {
    shortDefinition:
      "Backlink je odkaz z jiného webu směřující na váš web. Vyhledávače jej vnímají jako signál důvěryhodnosti — kvalitní backlinky z relevantních zdrojů zlepšují pozici ve vyhledávání.",
    aliases: ["Zpětný odkaz", "inbound link", "incoming link", "externí odkaz"],
  },
  "Call to action": {
    shortDefinition:
      "Call to action je jasná výzva směřující uživatele ke konkrétní akci — nákupu, registraci, stažení nebo kontaktu. Klíčový prvek každé marketingové komunikace a landing page.",
    aliases: ["CTA", "výzva k akci", "výzva k jednání"],
  },
  "Conversion rate": {
    shortDefinition:
      "Conversion rate je procento návštěvníků, kteří provedli cílovou akci — nákup, vyplnění formuláře, registraci. Průměr českých e-shopů se pohybuje kolem 1–3 %.",
    aliases: ["Konverzní poměr", "CR", "míra konverze", "konverzní míra"],
  },
  Heatmapa: {
    shortDefinition:
      "Heatmapa je vizualizace chování uživatelů na webu — kde klikají, kam scrollují, na co najedou myší. Nástroje jako Hotjar nebo Microsoft Clarity pomáhají optimalizovat layout.",
    aliases: ["Heatmap", "teplotní mapa", "kliková mapa", "click map"],
  },
  "Konverzní trychtýř": {
    shortDefinition:
      "Konverzní trychtýř je model zákaznické cesty od prvního kontaktu po nákup — povědomí, zájem, zvažování, rozhodnutí, akce. V každé fázi část návštěvníků odpadá.",
    aliases: ["Sales funnel", "prodejní trychtýř", "marketing funnel", "funnel"],
  },
  "Lead magnet": {
    shortDefinition:
      "Lead magnet je hodnotný obsah nabízený zdarma výměnou za emailový kontakt — e-book, checklist, šablona, webinář. Vstupní bod konverzního trychtýře pro získávání kontaktů.",
    aliases: ["Magnet na kontakty", "freebie", "content upgrade", "opt-in nabídka"],
  },
  "Meta description": {
    shortDefinition:
      "Meta description je HTML tag s popisem stránky zobrazovaným ve výsledcích vyhledávání pod nadpisem. Ideální délka je 150–160 znaků. Přímo neovlivňuje ranking, ale zvyšuje CTR.",
    aliases: ["Meta popis", "meta desc", "popisek stránky"],
  },
  "Meta title": {
    shortDefinition:
      "Meta title je HTML tag definující nadpis stránky ve výsledcích vyhledávání a v záložce prohlížeče. Ideální délka je do 60 znaků. Klíčový on-page SEO faktor.",
    aliases: ["Titulek stránky", "title tag", "SEO titulek", "page title"],
  },
  "Míra okamžitého opuštění": {
    shortDefinition:
      "Míra okamžitého opuštění je procento návštěvníků, kteří opustí web po zobrazení jediné stránky bez další interakce. Vysoká hodnota signalizuje nerelevantní obsah nebo špatný UX.",
    aliases: ["Bounce rate", "BR", "míra odchodu"],
  },
  "Off-page SEO": {
    shortDefinition:
      "Off-page SEO zahrnuje optimalizační aktivity mimo vlastní web — budování zpětných odkazů, zmínky na sociálních sítích, PR články a recenze. Posilují autoritu domény.",
    aliases: ["Mimostránková optimalizace", "off-site SEO", "link building"],
  },
  "On-page SEO": {
    shortDefinition:
      "On-page SEO je optimalizace obsahu a technických prvků přímo na webu — nadpisy, meta tagy, interní odkazy, rychlost načítání a strukturovaná data. Základ viditelnosti ve vyhledávačích.",
    aliases: ["On-site SEO", "stránková optimalizace", "on-page optimalizace"],
  },
  "Opt-in": {
    shortDefinition:
      "Opt-in je dobrovolné přihlášení uživatele k odběru emailů nebo newsletteru. GDPR vyžaduje aktivní souhlas — předvyplněné checkboxy nebo pasivní souhlas nestačí.",
    aliases: ["Přihlášení k odběru", "souhlas", "email opt-in", "přihlášení"],
  },
  Retargeting: {
    shortDefinition:
      "Retargeting je zobrazování reklam uživatelům, kteří již navštívili váš web nebo interagovali se značkou. Připomíná produkt a výrazně zvyšuje pravděpodobnost konverze.",
    aliases: ["Remarketing", "zacílení na vracející se", "behavioral retargeting", "pixel retargeting"],
  },
  SEO: {
    shortDefinition:
      "SEO je soubor technik zvyšujících viditelnost webu v organických výsledcích vyhledávání. Zahrnuje on-page, off-page a technické SEO. Dlouhodobá investice s vysokou návratností.",
    aliases: ["Search Engine Optimization", "optimalizace pro vyhledávače", "vyhledávačová optimalizace"],
  },
  "Schema markup": {
    shortDefinition:
      "Schema markup je strukturovaný kód v HTML, který vyhledávačům pomáhá lépe pochopit obsah stránky — recenze, produkty, FAQ, události. Umožňuje zobrazení rich snippets ve výsledcích.",
    aliases: ["Strukturovaná data", "schema.org", "structured data", "JSON-LD"],
  },
  Session: {
    shortDefinition:
      "Session je jedno spojení uživatele s webem — od příchodu po odchod nebo 30 minut nečinnosti. Základní jednotka webové analytiky v Google Analytics.",
    aliases: ["Relace", "návštěva", "web session", "user session"],
  },
  "Unikátní návštěvník": {
    shortDefinition:
      "Unikátní návštěvník je jeden identifikovaný uživatel webu v daném období bez ohledu na počet jeho návštěv. Měří skutečnou velikost publika webu.",
    aliases: ["Unique visitor", "UU", "unique user", "unikátní uživatel"],
  },
  "Vstupní stránka": {
    shortDefinition:
      "Vstupní stránka je samostatná stránka navržená pro jedinou konverzní akci — registraci, nákup nebo stažení. Nemá klasickou navigaci, aby neodváděla pozornost od cíle.",
    aliases: ["Landing page", "LP", "přistávací stránka", "konverzní stránka"],
  },
  "Základní webové metriky": {
    shortDefinition:
      "Základní webové metriky jsou sada tří metrik od Googlu měřících uživatelský zážitek — LCP (rychlost načtení), INP (odezva na interakci) a CLS (vizuální stabilita). Faktor SEO hodnocení.",
    aliases: ["Core Web Vitals", "CWV", "web vitals", "Google metriky"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // OBALOVY DESIGN
  // ═══════════════════════════════════════════════════════════════════
  Bigování: {
    shortDefinition:
      "Bigování je vytlačení drážky do kartonu podél linie ohybu. Umožňuje čisté a přesné skládání obalu bez lámání nebo praskání materiálu.",
    aliases: ["Creasing", "rilování", "ril", "crease line"],
  },
  Blistr: {
    shortDefinition:
      "Blistr je průhledný plastový tvarovaný obal přilepený nebo zatavenýna kartón. Umožňuje zákazníkovi vidět produkt a zároveň jej chrání a fixuje na místě.",
    aliases: ["Blister pack", "blistrový obal", "blister packaging", "plastový blistr"],
  },
  "Die-line": {
    shortDefinition:
      "Die-line je technický výkres obalu rozložený do plochy — definuje linie řezu, bigování, perforace a lepení. Slouží jako základ pro výrobu výsekové formy.",
    aliases: ["Výsekový výkres", "výseková forma", "dieline", "cutting die", "výkres obalu"],
  },
  Etiketa: {
    shortDefinition:
      "Etiketa je samolepicí nebo přilepená informační a dekorativní plocha na obalu produktu. Nese značku, povinné údaje a grafiku — často je hlavním nositelem vizuální identity.",
    aliases: ["Label", "nálepka", "product label", "samolepka", "štítek"],
  },
  "Flexibilní obal": {
    shortDefinition:
      "Flexibilní obal je obal z ohebného materiálu — sáčky, fólie, pouchy, flow-packy. Lehký, úsporný a celoplošně potisknutelný. Dominuje u potravin a kosmetiky.",
    aliases: ["Flexible packaging", "flexibilní balení", "pouch", "sáček"],
  },
  Kartonáž: {
    shortDefinition:
      "Kartonáž jsou obaly z lepenky a kartonu — skládačky, krabice, přepravní obaly. Dobře potisknutelné, recyklovatelné a vhodné pro strukturální design obalu.",
    aliases: ["Carton packaging", "krabičky", "kartonový obal", "folding carton"],
  },
  "Mockup obalu": {
    shortDefinition:
      "Mockup obalu je realistická 3D vizualizace obalu s aplikovanou grafikou. Slouží k prezentaci návrhu klientovi a simulaci vzhledu produktu na regálu před výrobou.",
    aliases: ["Packaging mockup", "3D vizualizace", "3D mockup obalu", "obalový mockup"],
  },
  "Obalový design": {
    shortDefinition:
      "Obalový design je návrh vizuální a strukturální podoby obalu produktu. Spojuje estetiku, funkčnost, komunikaci značky, regálovou atraktivitu a regulatorní požadavky.",
    aliases: ["Packaging design", "design obalu", "package design", "návrh obalu"],
  },
  "POP display": {
    shortDefinition:
      "POP display je prezentační stojan umístěný přímo v místě nákupu — u pokladny nebo na konci regálu. Upoutává pozornost a podporuje impulzní nákup.",
    aliases: ["Point of purchase display", "prodejní stojan", "POP stojan"],
  },
  "POS materiály": {
    shortDefinition:
      "POS materiály jsou propagační materiály v místě prodeje — stojany, wobblery, shelf talkery, plakáty a podlahová grafika. Podporují prodej a budují povědomí o značce.",
    aliases: ["Point of sale materiály", "POS", "materiály v místě prodeje", "in-store materials"],
  },
  "Primární obal": {
    shortDefinition:
      "Primární obal je obal v přímém kontaktu s produktem — lahev, tuba, kelímek, sáček. Chrání produkt a je hlavním nositelem designu a povinných informací.",
    aliases: ["Primary packaging", "primární balení", "product packaging"],
  },
  "Regálová přitažlivost": {
    shortDefinition:
      "Regálová přitažlivost je schopnost obalu zaujmout zákazníka na regálu v konkurenci desítek dalších produktů. Klíčová vlastnost úspěšného obalového designu v retailu.",
    aliases: ["Shelf appeal", "shelf impact", "regálová atraktivita", "shelf presence"],
  },
  "Regálový komunikátor": {
    shortDefinition:
      "Regálový komunikátor je malý reklamní prvek připevněný na hranu regálu. Upozorňuje na akci, novinku nebo výhodu produktu přímo v místě zákaznického rozhodování.",
    aliases: ["Shelf talker", "regálový poutač", "wobblerová lišta", "shelf strip"],
  },
  "Sekundární obal": {
    shortDefinition:
      "Sekundární obal je vnější obal obsahující primární obal — krabička kolem lahvičky, kartonový sleeve. Slouží k ochraně, seskupování produktů a marketingové komunikaci.",
    aliases: ["Secondary packaging", "vnější obal", "sekundární balení"],
  },
  Sleeve: {
    shortDefinition:
      "Sleeve je papírový nebo fóliový pás obalující primární obal. Často potištěn celoplošně — používá se u lahví, kelímků a krabiček pro prémiový vzhled.",
    aliases: ["Manžeta", "přebal", "shrink sleeve", "obalový sleeve"],
  },
  Stojan: {
    shortDefinition:
      "Stojan je samostatně stojící konstrukce pro vystavení produktů v prodejně — podlahový, stolní nebo závěsný. Součást POS komunikace a regálové prezentace.",
    aliases: ["Display stand", "prezentační stojan", "POS stojan", "display"],
  },
  "Sustainable packaging": {
    shortDefinition:
      "Sustainable packaging je obalový design využívající recyklovatelné, kompostovatelné nebo znovupoužitelné materiály. Minimalizuje ekologickou zátěž při zachování funkčnosti.",
    aliases: ["Udržitelný obal", "eko obal", "ekologický obal", "green packaging"],
  },
  "Unboxing experience": {
    shortDefinition:
      "Unboxing experience je záměrně navržený vizuální a haptický prožitek při otevírání obalu — potisk vnitřních stran, hedvábný papír, osobní vzkaz. Posiluje loajalitu ke značce.",
    aliases: ["Zážitek z rozbalení", "rozbalovací zážitek", "unboxing"],
  },
  Výsek: {
    shortDefinition:
      "Výsek je tvarové vyříznutí materiálu pomocí výsekové formy — okénko v obalu, tvarovaná etiketa nebo netypický obrys krabice. Dodává obalu unikátní charakter.",
    aliases: ["Die-cut", "výřez", "die cutting", "tvarový výsek"],
  },
  Wobbler: {
    shortDefinition:
      "Wobbler je malý reklamní prvek na ohebném plastovém ramínku připevněný k regálu. Pohybuje se a přitahuje pozornost zákazníka k produktu přímo v místě nákupu.",
    aliases: ["Poutač na stojánku", "regálový wobbler", "shelf wobbler"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // SOCIALNI MEDIA
  // ═══════════════════════════════════════════════════════════════════
  "A/B testování příspěvků": {
    shortDefinition:
      "A/B testování příspěvků je souběžné publikování dvou variant příspěvku s odlišným vizuálem, textem nebo CTA pro porovnání výkonu. Vítězná varianta se použije pro širší distribuci.",
    aliases: ["Split test obsahu", "content A/B test", "testování postů"],
  },
  Algoritmus: {
    shortDefinition:
      "Algoritmus sociální sítě je soubor pravidel určujících, jaký obsah se zobrazí konkrétnímu uživateli. Zohledňuje engagement, relevanci, aktuálnost a vztah mezi uživateli.",
    aliases: ["Algorithm", "algo", "feed algorithm", "algoritmus sítě"],
  },
  "Bio link": {
    shortDefinition:
      "Bio link je jediný klikatelný odkaz v profilu na Instagramu. Často vede na rozcestník (Linktree, Bento) s odkazy na web, e-shop a další kanály.",
    aliases: ["Odkaz v biu", "link in bio", "Linktree", "profilový odkaz"],
  },
  "CTA v postu": {
    shortDefinition:
      "CTA v postu je výzva k akci v textu příspěvku — 'komentujte', 'sdílejte', 'klikněte na odkaz v biu'. Směřuje publikum ke konkrétní žádoucí akci a zvyšuje engagement.",
    aliases: ["Call to action v příspěvku", "výzva k akci v postu", "post CTA"],
  },
  Carousel: {
    shortDefinition:
      "Carousel je formát příspěvku s více obrázky nebo videi, které uživatel prochází swipováním. Na Instagramu až 20 snímků. Dosahuje vysokého engagementu díky interakci.",
    aliases: ["Karusel", "galerie", "carousel post", "swipe post", "karuselový příspěvek"],
  },
  "Community management": {
    shortDefinition:
      "Community management je aktivní komunikace se sledujícími — odpovídání na komentáře, DM, moderování diskuzí. Buduje vztah, loajalitu a pozitivní vnímání značky.",
    aliases: ["Správa komunity", "CM", "komunitní management", "správa sociálních sítí"],
  },
  Feed: {
    shortDefinition:
      "Feed je hlavní proud obsahu na sociální síti — chronologický nebo algoritmický. Také označení pro vizuální celek profilu, zejména Instagram grid.",
    aliases: ["Zdroj příspěvků", "hlavní stránka", "news feed", "content feed", "Instagram grid"],
  },
  "Hashtag strategie": {
    shortDefinition:
      "Hashtag strategie je systematický výběr a používání hashtagů pro zvýšení dosahu příspěvků. Kombinuje brandové, niche a populární hashtagy podle cíle a cílové skupiny.",
    aliases: ["Hashtagová strategie", "hashtag plan", "strategie hashtagů"],
  },
  "Hlas značky na sítích": {
    shortDefinition:
      "Hlas značky na sítích je konzistentní komunikační styl značky na sociálních platformách. Přizpůsobený publiku dané sítě při zachování identity a tone of voice značky.",
    aliases: ["Brand voice na sítích", "social media voice", "hlas brandu na sítích"],
  },
  Impressions: {
    shortDefinition:
      "Impressions je celkový počet zobrazení příspěvku včetně opakovaných zobrazení jednomu uživateli. Vyšší než reach, protože jeden člověk může obsah vidět vícekrát.",
    aliases: ["Zobrazení", "imprese", "počet zobrazení", "views"],
  },
  "Influencer marketing": {
    shortDefinition:
      "Influencer marketing je strategie využívající osoby s vlivem na sociálních sítích k propagaci značky. Zahrnuje placené spolupráce, bartry a ambasadorské programy.",
    aliases: ["Spolupráce s influencery", "influencer spolupráce", "influencer campaign"],
  },
  "Míra zapojení": {
    shortDefinition:
      "Míra zapojení je poměr interakcí (lajky, komentáře, sdílení, uložení) k počtu sledujících nebo zobrazení. Klíčový ukazatel kvality obsahu na sociálních sítích.",
    aliases: ["Engagement rate", "ER", "engagement", "míra engagementu"],
  },
  "Obsahová strategie": {
    shortDefinition:
      "Obsahová strategie je plán tvorby, publikování a distribuce obsahu na sociálních sítích s jasně definovanými cíli, cílovou skupinou a měřitelnými KPI.",
    aliases: ["Content strategy", "strategie obsahu", "social media strategy"],
  },
  "Obsahový kalendář": {
    shortDefinition:
      "Obsahový kalendář je plán publikování obsahu na sociálních sítích — témata, formáty, data a platformy. Zajišťuje konzistenci, pravidelnost a strategické pokrytí témat.",
    aliases: ["Content calendar", "redakční plán", "editorial calendar", "publikační plán"],
  },
  "Obsahový pilíř": {
    shortDefinition:
      "Obsahový pilíř je hlavní tematický okruh, kolem kterého značka tvoří obsah — edukace, zákulisí, reference, tipy. Strukturuje obsahovou strategii a zajišťuje pestrost.",
    aliases: ["Content pillar", "tematický pilíř", "content bucket", "obsahová kategorie"],
  },
  "Organický dosah": {
    shortDefinition:
      "Organický dosah je počet uživatelů, kteří viděli příspěvek bez placené propagace. Na většině platforem klesá — typicky 2–5 % sledujících na Facebooku.",
    aliases: ["Organic reach", "neplacený dosah", "přirozený dosah"],
  },
  "Placený dosah": {
    shortDefinition:
      "Placený dosah je počet uživatelů oslovených placenou propagací příspěvku. Umožňuje přesné cílení na konkrétní demografii, zájmy a chování.",
    aliases: ["Paid reach", "boosted post", "promoted reach", "sponzorovaný dosah"],
  },
  Reach: {
    shortDefinition:
      "Reach je počet unikátních uživatelů, kteří viděli příspěvek. Na rozdíl od impressions počítá každého uživatele pouze jednou bez ohledu na počet zobrazení.",
    aliases: ["Dosah", "organic reach", "dosah příspěvku", "zásah"],
  },
  Reels: {
    shortDefinition:
      "Reels jsou krátká vertikální videa (do 90 s) na Instagramu, TikToku a Facebooku. Algoritmy je aktivně propagují — dosahují vyššího organického dosahu než statické posty.",
    aliases: ["Instagram Reels", "krátká videa", "short-form video", "Shorts"],
  },
  "Social proof": {
    shortDefinition:
      "Social proof je psychologický princip, kdy lidé důvěřují značce na základě chování ostatních — recenze, počet sledujících, zmínky, případové studie a doporučení.",
    aliases: ["Sociální důkaz", "social validation", "společenský důkaz"],
  },
  Story: {
    shortDefinition:
      "Story je dočasný obsah (24 h) zobrazený v horní části aplikace — foto, video, ankety, quizy. Buduje autentický a neformální vztah se sledujícími.",
    aliases: ["Příběh", "stories", "Instagram Story", "IG stories", "příběhy"],
  },
  Thumbnail: {
    shortDefinition:
      "Thumbnail je malý náhledový obrázek videa nebo článku. Na YouTube přímo rozhoduje o proklikovosti — kvalitní thumbnail výrazně zvyšuje počet zhlédnutí.",
    aliases: ["Náhledový obrázek", "miniatura", "video thumbnail", "náhled videa"],
  },
  UGC: {
    shortDefinition:
      "UGC je obsah vytvořený zákazníky a fanoušky značky — recenze, fotky, videa. Autentičtější než firemní obsah, buduje důvěru a posiluje komunitu kolem značky.",
    aliases: ["User-generated content", "obsah od uživatelů", "uživatelský obsah", "zákaznický obsah"],
  },
  Viralita: {
    shortDefinition:
      "Viralita je schopnost obsahu šířit se rychle a organicky díky masivnímu sdílení. Závisí na emoci, relevanci, jednoduchosti a sdílitelnosti obsahu.",
    aliases: ["Virality", "viral content", "virální obsah", "virální efekt"],
  },
  "Úvodní obrázek": {
    shortDefinition:
      "Úvodní obrázek je velký vizuál na profilu sociální sítě — Facebook cover (820×312), LinkedIn banner, YouTube channel art. Komunikuje značku a aktuální kampaň.",
    aliases: ["Cover image", "cover photo", "úvodní fotka", "banner profilu", "cover banner"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // TISK
  // ═══════════════════════════════════════════════════════════════════
  "Barevný prostor": {
    shortDefinition:
      "Barevný prostor je rozsah barev, které dokáže zařízení reprodukovat. sRGB se používá pro web, Adobe RGB pro fotografii a CMYK pro tisk — každý má jiný gamut.",
    aliases: ["Color space", "gamut", "barevný gamut", "colour space"],
  },
  CMYK: {
    shortDefinition:
      "CMYK je subtraktivní barevný model pro tiskovou výrobu. Míchání čtyř barev — azurové (C), purpurové (M), žluté (Y) a černé (K) — vytváří plnobarevný tisk.",
    aliases: ["Cyan Magenta Yellow Key", "čtyřbarvotisk", "procesní barvy", "tiskové barvy"],
  },
  DPI: {
    shortDefinition:
      "DPI je počet tiskových bodů na palec — měřítko rozlišení tisku. Pro kvalitní tisk se standardně vyžaduje 300 DPI, pro velkoplošný tisk (billboard) stačí 72–150 DPI.",
    aliases: ["Dots per inch", "body na palec", "tiskové rozlišení"],
  },
  "Gramáž papíru": {
    shortDefinition:
      "Gramáž papíru je hmotnost papíru v gramech na metr čtvereční (g/m²). Vizitky mají typicky 300–350 g/m², letáky 130–170 g/m², kancelářský papír 80 g/m².",
    aliases: ["Grammage", "g/m²", "gsm", "hmotnost papíru", "paper weight"],
  },
  "ICC profil": {
    shortDefinition:
      "ICC profil je standardizovaný soubor popisující barevný prostor zařízení — monitoru, tiskárny nebo skeneru. Zajišťuje konzistentní reprodukci barev v celém tiskovém workflow.",
    aliases: ["Barevný profil", "ICC", "color profile", "ICC color profile"],
  },
  Laminace: {
    shortDefinition:
      "Laminace je potažení tiskového materiálu průhlednou fólií pro ochranu a estetický efekt. Matná laminace tlumí lesk a je příjemná na dotek, lesklá zvyšuje sytost barev.",
    aliases: ["Lamination", "fóliování", "mat laminace", "lesk laminace"],
  },
  "Ofsetový tisk": {
    shortDefinition:
      "Ofsetový tisk je nejrozšířenější tisková technologie pro větší náklady. Barva se přenáší z tiskové desky přes gumový válec na papír. Nabízí vysokou kvalitu a konzistentní barvy.",
    aliases: ["Offset printing", "ofset", "offset", "ofsetový stroj"],
  },
  Overprint: {
    shortDefinition:
      "Overprint je tisk jedné barvy přes druhou bez vyřazení spodní. Používá se u černého textu nad barevným pozadím — zabraňuje vzniku bílých mezer při nepřesném sesazení.",
    aliases: ["Přetisk", "přetisková vlastnost", "overprinting"],
  },
  "Ořezové značky": {
    shortDefinition:
      "Ořezové značky jsou tenké čáry v rozích tiskoviny vyznačující místo ořezu. Tiskař podle nich přesně ořízne hotový výtisk na finální rozměr.",
    aliases: ["Trim marks", "crop marks", "ořezky", "řezací značky"],
  },
  "PDF/X": {
    shortDefinition:
      "PDF/X je standardizovaný formát PDF pro tiskovou výrobu. Vynucuje vložení fontů, správné barvy a rozlišení — eliminuje chyby při přenosu podkladů do tiskárny. Nejčastěji PDF/X-1a nebo PDF/X-4.",
    aliases: ["PDF for Exchange", "PDF/X-1a", "PDF/X-4", "tiskové PDF"],
  },
  PPI: {
    shortDefinition:
      "PPI je počet pixelů na palec v digitálním obrazu. Pro tisk se doporučuje minimálně 300 PPI, pro web stačí 72 PPI. Určuje kvalitu obrazu při dané fyzické velikosti.",
    aliases: ["Pixels per inch", "pixely na palec", "rozlišení obrazu"],
  },
  Pantone: {
    shortDefinition:
      "Pantone je standardizovaný systém přesně definovaných barev (PMS) používaný v grafickém designu a tisku. Zajišťuje přesnou a opakovatelnou reprodukci barvy napříč zakázkami.",
    aliases: ["PMS", "spotová barva Pantone", "Pantone Matching System", "pantone barva"],
  },
  "Parciální lak": {
    shortDefinition:
      "Parciální lak je lesklý UV lak aplikovaný pouze na vybranou část tiskoviny — logo, text nebo grafický prvek. Vytváří kontrastní hmatový i vizuální efekt.",
    aliases: ["Spot UV", "výběrový lak", "UV lak", "spot varnish", "selektivní lak"],
  },
  "Pasovací značky": {
    shortDefinition:
      "Pasovací značky jsou terčíkové značky zajišťující přesné sesazení jednotlivých barevných výtažků při vícebarevném tisku. Bez nich by barvy nesedly přesně na sebe.",
    aliases: ["Registration marks", "registrační značky", "pasery", "register marks"],
  },
  "Předtisková příprava": {
    shortDefinition:
      "Předtisková příprava zahrnuje veškeré technické úpravy grafických podkladů před tiskem — kontrola barev, rozlišení, spadávek, fontů a formátu. Předchází chybám ve výrobě.",
    aliases: ["Prepress", "pre-press", "příprava do tisku", "DTP příprava"],
  },
  RGB: {
    shortDefinition:
      "RGB je aditivní barevný model pro digitální zobrazení. Míchání červeného (R), zeleného (G) a modrého (B) světla vytváří barvy na monitorech, mobilech a projektorech.",
    aliases: ["Red Green Blue", "aditivní model", "RGB barvy", "digitální barvy"],
  },
  Rastr: {
    shortDefinition:
      "Rastr je technika reprodukce plynulých tónů pomocí pravidelné sítě bodů různé velikosti. Základ ofsetového tisku — čím větší bod, tím tmavší tón.",
    aliases: ["Halftone", "rastrový tisk", "halftone screen", "tiskový rastr"],
  },
  "Rastrová grafika": {
    shortDefinition:
      "Rastrová grafika je obraz tvořený mřížkou pixelů — fotografie, skenované dokumenty. Při zvětšení ztrácí kvalitu (pixelizace). Formáty: JPEG, PNG, TIFF, WebP.",
    aliases: ["Bitmap", "pixelová grafika", "bitmapová grafika", "raster graphics"],
  },
  Ražba: {
    shortDefinition:
      "Ražba je technika vytlačení (embossing) nebo vtlačení (debossing) motivu do materiálu, případně přenos kovové fólie za tepla (hot stamping). Dodává tiskovině luxusní haptický dojem.",
    aliases: ["Embossing", "debossing", "hot stamping", "slepá ražba", "foil stamping"],
  },
  Slepotisk: {
    shortDefinition:
      "Slepotisk je vytlačení reliéfního motivu do papíru bez barvy nebo fólie. Čistě hmatový efekt — elegantní zdobení vizitek, obálek, pozvánek a prémiových tiskovin.",
    aliases: ["Blind embossing", "suchý tisk", "slepá ražba", "dry embossing"],
  },
  Spadávka: {
    shortDefinition:
      "Spadávka je oblast grafiky přesahující ořezové značky, typicky o 3–5 mm. Zabraňuje vzniku bílého okraje po ořezu tiskoviny v případě mírné nepřesnosti řezu.",
    aliases: ["Bleed", "přesah", "tisková spadávka", "bleed area"],
  },
  "Spotová barva": {
    shortDefinition:
      "Spotová barva je předmíchaná barva tištěná jako samostatný výtažek — na rozdíl od CMYK mixu. Zajišťuje přesnou reprodukci konkrétního odstínu, typicky Pantone.",
    aliases: ["Spot color", "přímá barva", "speciální barva", "Pantone barva"],
  },
  "Tiskový arch": {
    shortDefinition:
      "Tiskový arch je velký formát papíru, na který se tiskne více stránek najednou. Po tisku se arch řeže a skládá na finální rozměr. Optimální vyřazení šetří materiál.",
    aliases: ["Press sheet", "tiskový formát", "tiskový list", "SRA3"],
  },
  Trapping: {
    shortDefinition:
      "Trapping je mírné překrytí sousedících barevných ploch kompenzující nepřesnosti sesazení barev při tisku. Zabraňuje vzniku bílých mezer mezi barvami.",
    aliases: ["Přesah barev", "soutisk", "choke and spread", "přesahování barev"],
  },
  "Vektorová grafika": {
    shortDefinition:
      "Vektorová grafika je obraz definovaný matematickými křivkami — body, čáry a Bézierovy křivky. Nekonečně škálovatelná bez ztráty kvality. Ideální pro loga. Formáty: SVG, AI, EPS, PDF.",
    aliases: ["Vector", "vektory", "vector graphics", "křivky"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // TYPOGRAFIE
  // ═══════════════════════════════════════════════════════════════════
  Ascender: {
    shortDefinition:
      "Ascender je část malého písmene přesahující nad x-výšku — u písmen b, d, h, k, l. Spolu s descendery definuje celkový charakter a vertikální proporce písma.",
    aliases: ["Horní dotah", "horní přetah", "upper stroke", "horní dotažnice"],
  },
  Baseline: {
    shortDefinition:
      "Baseline je neviditelná linka, na které 'sedí' písmena. Slouží jako základ pro zarovnání textu a měření typografických veličin jako x-výška nebo descender.",
    aliases: ["Účaří", "základní linka", "base line", "písmenková linka"],
  },
  Descender: {
    shortDefinition:
      "Descender je část písmene zasahující pod účaří — u písmen g, j, p, q, y. Spolu s ascendery definuje celkovou výšku řádku a potřebný řádkový proklad.",
    aliases: ["Dolní dotah", "dolní přetah", "lower stroke", "dolní dotažnice"],
  },
  Font: {
    shortDefinition:
      "Font je konkrétní soubor znaků v daném řezu a velikosti — např. Helvetica Bold 12pt. V běžné řeči se používá zaměnitelně s 'typeface', technicky jde o datový soubor.",
    aliases: ["Písmo", "font file", "fontový soubor", "digitální písmo"],
  },
  Glyph: {
    shortDefinition:
      "Glyph je jednotlivý vizuální tvar v rámci písma — písmeno, číslice, interpunkce nebo speciální znak. Jeden znak (character) může mít více glyfových variant.",
    aliases: ["Glyf", "znak", "typografický znak", "character"],
  },
  Kapitálky: {
    shortDefinition:
      "Kapitálky jsou velká písmena zmenšená na x-výšku malých písmen. Používají se pro zvýraznění textu, zkratky nebo dekorativní účely bez narušení optického rytmu řádku.",
    aliases: ["Small caps", "SC", "small capitals", "kapitálkové písmo"],
  },
  Kerning: {
    shortDefinition:
      "Kerning je úprava mezery mezi konkrétními dvojicemi písmen pro opticky vyrovnaný vzhled. Například pár 'AV' vyžaduje menší mezeru než 'HI' kvůli tvaru písmen.",
    aliases: ["Prostrkání dvojice", "letter pair spacing", "metrický kerning", "optický kerning"],
  },
  Ligatura: {
    shortDefinition:
      "Ligatura je spojení dvou nebo více písmen do jednoho glyfu — typicky fi, fl, ff, ffi. Zlepšuje estetiku a plynulost textu, zejména u serifových písem.",
    aliases: ["Ligature", "typografická ligatura", "font ligature"],
  },
  OpenType: {
    shortDefinition:
      "OpenType je moderní formát fontů podporující pokročilé funkce — ligatury, alternativní znaky, stylistické sady a kontextové náhrady. Standard profesionální typografie.",
    aliases: ["OTF", "OpenType formát", "OpenType font", ".otf"],
  },
  "Písmová rodina": {
    shortDefinition:
      "Písmová rodina je kompletní sada všech řezů jednoho písma — light, regular, medium, bold, italic a další varianty sdílející společný designový základ.",
    aliases: ["Font family", "rodina písma", "type family", "fontová rodina"],
  },
  "Sans-serif": {
    shortDefinition:
      "Sans-serif je písmo bez patků (serifů) na koncích tahů. Působí moderně a čistě. Příklady: Helvetica, Arial, Inter, Roboto. Dominuje v digitálním a UI designu.",
    aliases: ["Bezpatkové písmo", "grotesk", "grotesque", "sans"],
  },
  Serif: {
    shortDefinition:
      "Serif je písmo s malými tahy (patkami) na koncích hlavních tahů písmen. Působí tradičně a elegantně. Příklady: Times New Roman, Garamond, Baskerville, Georgia.",
    aliases: ["Patkové písmo", "antikva", "serifové písmo", "patky"],
  },
  "Slab-serif": {
    shortDefinition:
      "Slab-serif je písmo s výraznými hranatými patkami stejné tloušťky jako hlavní tahy. Působí robustně a sebevědomě. Příklady: Rockwell, Courier, Roboto Slab, Clarendon.",
    aliases: ["Egyptienka", "slab", "slab serif", "egyptienne", "mechanické písmo"],
  },
  Tracking: {
    shortDefinition:
      "Tracking je rovnoměrná úprava mezer mezi všemi znaky v bloku textu. Na rozdíl od kerningu se aplikuje plošně — kladná hodnota text rozvolní, záporná zúží.",
    aliases: ["Prostrkání", "letter-spacing", "meziznaková mezera", "character spacing"],
  },
  Typeface: {
    shortDefinition:
      "Typeface je designový návrh celé abecedy a znaků sdílejících společný vizuální styl. Na rozdíl od fontu je typeface designový koncept, font je konkrétní datový soubor.",
    aliases: ["Písmo", "typ písma", "typové písmo", "type design"],
  },
  "Typografická hierarchie": {
    shortDefinition:
      "Typografická hierarchie je systém vizuálního rozlišení důležitosti textu pomocí velikostí, řezů, barev a prostoru. Vede čtenáře od nadpisu přes podnadpis k tělu textu.",
    aliases: ["Typographic hierarchy", "textová hierarchie", "vizuální hierarchie textu"],
  },
  "Variabilní písmo": {
    shortDefinition:
      "Variabilní písmo je jeden fontový soubor obsahující celé spektrum řezů — od thin po black, od condensed po expanded. Šetří datový objem a umožňuje plynulé přechody.",
    aliases: ["Variable font", "VF", "variabilní font", "variable typeface"],
  },
  "Web font": {
    shortDefinition:
      "Web font je písmo optimalizované pro zobrazení na webu, načítané z externího serveru (Google Fonts, Adobe Fonts) nebo hostované vlastní infrastrukturou (self-hosted).",
    aliases: ["Webové písmo", "webfont", "online font", "WOFF", "WOFF2"],
  },
  "Widows & orphans": {
    shortDefinition:
      "Widows & orphans jsou typografické chyby v sazbě — vdova je osamocený řádek na konci sloupce, sirotek je osamocený řádek na začátku nového sloupce či stránky.",
    aliases: ["Vdovy a sirotci", "widow", "orphan", "typografické vdovy"],
  },
  "X-height": {
    shortDefinition:
      "X-height je výška malého písmene 'x' v daném písmu. Písma s větší x-výškou bývají čitelnější v malých velikostech. Klíčový parametr při volbě textového písma.",
    aliases: ["X-výška", "střední výška", "výška písmene x", "corpus height"],
  },
  "Zarovnání textu": {
    shortDefinition:
      "Zarovnání textu je způsob uspořádání textu vůči okrajům — vlevo (ragright), vpravo, na střed nebo do bloku (justify). Ovlivňuje čitelnost a vizuální charakter sazby.",
    aliases: ["Text alignment", "justifikace", "alignment", "sazba textu"],
  },
  "Zobrazovací písmo": {
    shortDefinition:
      "Zobrazovací písmo je písmo navržené pro velké velikosti — nadpisy, plakáty, loga. Bývá výraznější a expresivnější než textová písma, ale v malých velikostech ztrácí čitelnost.",
    aliases: ["Display font", "nadpisové písmo", "dekorativní písmo", "display typeface", "headline font"],
  },
  "Základní písmo": {
    shortDefinition:
      "Základní písmo je písmo určené pro delší texty — odstavce, články, knižní sazbu. Musí být vysoce čitelné i v malých velikostech (9–12 pt). Typicky serif nebo jednoduchý sans-serif.",
    aliases: ["Body font", "textové písmo", "chlebové písmo", "body typeface", "text font"],
  },
  "Řez písma": {
    shortDefinition:
      "Řez písma je varianta písma v rámci jedné rodiny — regular, bold, italic, light, condensed. Každý řez má specifické použití v typografické hierarchii a vizuálním systému.",
    aliases: ["Font weight/style", "tučnost", "font weight", "font style", "řez fontu"],
  },
  "Řádkový proklad": {
    shortDefinition:
      "Řádkový proklad je vertikální vzdálenost mezi účařími sousedních řádků. Ovlivňuje čitelnost a vzdušnost textu. V CSS odpovídá vlastnosti line-height, obvykle 1.4–1.6× velikosti písma.",
    aliases: ["Leading", "line-height", "řádkování", "line spacing", "proklad"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // WEBDESIGN
  // ═══════════════════════════════════════════════════════════════════
  Accessibility: {
    shortDefinition:
      "Accessibility je návrh webu tak, aby jej mohli používat všichni lidé včetně osob se zdravotním postižením — zrakovým, sluchovým, motorickým nebo kognitivním.",
    aliases: ["Přístupnost", "a11y", "web accessibility", "přístupnost webu", "WCAG compliance"],
  },
  Breadcrumbs: {
    shortDefinition:
      "Breadcrumbs je sekundární navigační prvek zobrazující cestu uživatele od hlavní stránky k aktuální podstránce. Zlepšuje orientaci na webu a pomáhá SEO.",
    aliases: ["Drobečková navigace", "breadcrumb navigation", "drobečky", "navigační cesta"],
  },
  Breakpoint: {
    shortDefinition:
      "Breakpoint je šířka obrazovky, při které se layout webu přizpůsobí jinému rozvržení — např. 768px pro tablet, 1024px pro desktop. Klíčový prvek responzivního designu.",
    aliases: ["Zlomový bod", "bod zlomu", "responsive breakpoint", "mediální dotaz"],
  },
  "CTA button": {
    shortDefinition:
      "CTA button je výrazné tlačítko na webu vybízející k cílové akci — 'Objednat', 'Kontaktovat', 'Stáhnout'. Jeho barva, text a umístění přímo ovlivňují konverzní poměr.",
    aliases: ["Tlačítko výzvy k akci", "call to action button", "konverzní tlačítko", "akční tlačítko"],
  },
  "Design systém": {
    shortDefinition:
      "Design systém je ucelená sada pravidel, komponent, tokenů a dokumentace zajišťující konzistentní design napříč celým produktem nebo portfoliem produktů.",
    aliases: ["Design system", "DS", "designový systém", "komponentní systém"],
  },
  "Grid systém": {
    shortDefinition:
      "Grid systém je neviditelná struktura sloupců a mezer, podle které se rozmísťují prvky na stránce. Zajišťuje vizuální řád, konzistenci a snadnější responzivitu layoutu.",
    aliases: ["Mřížka", "layout grid", "grid", "mřížkový systém", "sloupce"],
  },
  "Hamburgerové menu": {
    shortDefinition:
      "Hamburgerové menu je ikona tří vodorovných čárek (☰) skrývající navigační menu — typicky na mobilních zařízeních. Šetří místo, ale může snižovat viditelnost položek.",
    aliases: ["Hamburger menu", "☰ menu", "mobilní menu", "hamburger icon"],
  },
  "Hlavní sekce": {
    shortDefinition:
      "Hlavní sekce je velká vizuální oblast v horní části stránky — obvykle s hlavním nadpisem, podnadpisem, CTA tlačítkem a velkým obrázkem nebo videem na pozadí.",
    aliases: ["Hero section", "hero banner", "hero oblast", "hero sekce", "úvodní sekce"],
  },
  "Hover state": {
    shortDefinition:
      "Hover state je vizuální změna prvku po najetí kurzorem — změna barvy, podtržení, animace nebo zvětšení. Poskytuje uživateli zpětnou vazbu o interaktivitě prvku.",
    aliases: ["Stav najetí", "hover efekt", "hover effect", ":hover"],
  },
  "Jednostránková aplikace": {
    shortDefinition:
      "Jednostránková aplikace je web načítající jednu HTML stránku a dynamicky aktualizující obsah bez celého znovunačtení. Technologie: React, Vue, Angular, Svelte.",
    aliases: ["SPA", "single page application", "single-page app", "SPA aplikace"],
  },
  "Komponentní knihovna": {
    shortDefinition:
      "Komponentní knihovna je organizovaná sbírka znovupoužitelných UI komponent — tlačítka, formuláře, karty, modály. Zrychluje vývoj a zajišťuje vizuální konzistenci webu.",
    aliases: ["Component library", "UI library", "knihovna komponent", "component kit"],
  },
  "Kostrový náhled": {
    shortDefinition:
      "Kostrový náhled je vizuální náhrada obsahu během načítání — šedé bloky napodobující budoucí layout. Působí rychleji než prázdná stránka nebo loadovací spinner.",
    aliases: ["Skeleton screen", "kostra stránky", "placeholder", "skeleton loader"],
  },
  "Líné načítání": {
    shortDefinition:
      "Líné načítání je technika, kdy se obrázky a obsah načítají až ve chvíli, kdy se přibližují viditelnému výřezu prohlížeče. Zrychluje počáteční načtení stránky.",
    aliases: ["Lazy loading", "odložené načítání", "lazy load", "on-demand loading"],
  },
  "Micro-interakce": {
    shortDefinition:
      "Micro-interakce je drobná animace nebo vizuální zpětná vazba reagující na akci uživatele — lajk, přidání do košíku, přepnutí přepínače. Zvyšuje pocit živosti rozhraní.",
    aliases: ["Micro-interaction", "mikrointerakce", "UI animation", "drobná interakce"],
  },
  "Mobile-first": {
    shortDefinition:
      "Mobile-first je strategie návrhu webu, kdy se začíná designem pro mobilní zařízení a postupně se přidávají prvky pro větší obrazovky. Preferovaný přístup moderního webdesignu.",
    aliases: ["Mobile-first přístup", "mobile first design", "mobilní priorita"],
  },
  Mockup: {
    shortDefinition:
      "Mockup je statický vizuální návrh stránky v plném detailu — barvy, typografie, obrázky — bez interaktivity. Slouží ke schválení designu před kódováním a vývojem.",
    aliases: ["Náhled", "vizuál", "design mockup", "vizuální návrh", "grafický návrh"],
  },
  "Nad zlomem": {
    shortDefinition:
      "Nad zlomem je obsah viditelný ihned po načtení stránky bez scrollování. Klíčový prostor pro hlavní sdělení, CTA a vizuální zaujmutí návštěvníka.",
    aliases: ["Above the fold", "viditelná plocha", "ATF", "nad ohybem"],
  },
  "Nekonečné scrollování": {
    shortDefinition:
      "Nekonečné scrollování je technika, kdy se obsah automaticky načítá při scrollování dolů bez stránkování. Vhodné pro sociální sítě a galerie, méně pro e-shopy a katalogy.",
    aliases: ["Infinite scroll", "infinite scrolling", "automatické načítání", "endless scroll"],
  },
  Pagination: {
    shortDefinition:
      "Pagination je rozdělení obsahu na číslované stránky s navigací. Vhodné pro e-shopy a výpisy, kde uživatel potřebuje kontrolu nad procházením a návrat ke konkrétní stránce.",
    aliases: ["Stránkování", "page navigation", "číslování stránek", "paginace"],
  },
  "Progresivní webová aplikace": {
    shortDefinition:
      "Progresivní webová aplikace je web s funkcemi nativní aplikace — offline přístup, push notifikace, instalace na plochu. Kombinuje dosah webu s uživatelským komfortem aplikace.",
    aliases: ["PWA", "Progressive Web App", "progresivní web app"],
  },
  Prototyp: {
    shortDefinition:
      "Prototyp je interaktivní model webu nebo aplikace simulující reálné chování — klikatelné odkazy, přechody, animace. Slouží k testování UX před zahájením vývoje.",
    aliases: ["Prototype", "interaktivní návrh", "klikatelný prototyp", "clickable prototype"],
  },
  "Responsive design": {
    shortDefinition:
      "Responsive design je přístup k návrhu webu, kdy se layout a obsah automaticky přizpůsobují velikosti obrazovky — od mobilu po velký monitor. Dnes absolutní standard.",
    aliases: ["Responzivní design", "RWD", "responzivní web", "responsive web design"],
  },
  "Sticky navigace": {
    shortDefinition:
      "Sticky navigace je navigační lišta, která zůstává viditelná při scrollování stránky. Zajišťuje stálý přístup k menu a zlepšuje orientaci uživatele na webu.",
    aliases: ["Sticky nav", "přilepená navigace", "fixed navigation", "fixed header"],
  },
  "Tmavý režim": {
    shortDefinition:
      "Tmavý režim je alternativní barevné schéma rozhraní s tmavým pozadím a světlým textem. Snižuje únavu očí při práci v noci a šetří baterii OLED displejů.",
    aliases: ["Dark mode", "dark theme", "noční režim", "tmavé téma"],
  },
  "UI design": {
    shortDefinition:
      "UI design je návrh vizuální podoby uživatelského rozhraní — tlačítka, barvy, typografie, ikony a rozložení prvků. Zaměřuje se na estetiku, konzistenci a interakční vzory.",
    aliases: ["Návrh uživatelského rozhraní", "user interface design", "design rozhraní"],
  },
  "UI kit": {
    shortDefinition:
      "UI kit je předpřipravená kolekce designových prvků — tlačítka, inputy, karty, modály — pro konkrétní design systém nebo platformu. Zrychluje návrh nových obrazovek.",
    aliases: ["Sada UI komponent", "UI toolkit", "design kit", "component kit"],
  },
  "UX design": {
    shortDefinition:
      "UX design je proces navrhování produktu tak, aby jeho používání bylo jednoduché, intuitivní a příjemné. Zahrnuje uživatelský výzkum, wireframing, prototypování a testování.",
    aliases: ["User experience design", "návrh uživatelské zkušenosti", "UX", "design zkušenosti"],
  },
  Viewport: {
    shortDefinition:
      "Viewport je viditelná oblast prohlížeče, ve které se zobrazuje obsah stránky. Liší se podle zařízení (mobil, tablet, desktop) a ovlivňuje responzivní chování webu.",
    aliases: ["Výřez", "viditelná oblast", "browser viewport", "zobrazovací oblast"],
  },
  WCAG: {
    shortDefinition:
      "WCAG je mezinárodní standard přístupnosti webového obsahu definující tři úrovně shody — A, AA, AAA. V EU vyžadován směrnicí European Accessibility Act od roku 2025.",
    aliases: ["Web Content Accessibility Guidelines", "WCAG 2.1", "WCAG 2.2", "standardy přístupnosti"],
  },
  Wireframe: {
    shortDefinition:
      "Wireframe je zjednodušené schéma rozložení stránky bez grafiky — pouze boxy, texty a čáry. Slouží k rychlému návrhu struktury a obsahu před vizuálním designem.",
    aliases: ["Drátěný model", "drátěnka", "wireframe mockup", "layout sketch", "drátový model"],
  },
};

// ─── MAIN ────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error("ERROR: SANITY_WRITE_TOKEN environment variable is required.");
    console.error("Run with: SANITY_WRITE_TOKEN=xxx node scripts/patch-glossary-definitions.js");
    process.exit(1);
  }

  console.log("Fetching all glossary terms from Sanity...\n");

  const terms = await client.fetch(
    '*[_type=="glossaryTerm"] | order(category asc, term asc) { _id, term, aliases, category, shortDefinition }'
  );

  console.log(`Found ${terms.length} terms.\n`);

  const improvementKeys = Object.keys(IMPROVEMENTS);
  console.log(`Improvements defined for ${improvementKeys.length} terms.\n`);

  // Check for terms without improvements
  const missing = terms.filter((t) => !IMPROVEMENTS[t.term]);
  if (missing.length > 0) {
    console.warn(`WARNING: ${missing.length} terms have no improvements defined:`);
    missing.forEach((t) => console.warn(`  - "${t.term}" (${t.category})`));
    console.warn("");
  }

  // Check for improvements without matching terms
  const orphaned = improvementKeys.filter((key) => !terms.find((t) => t.term === key));
  if (orphaned.length > 0) {
    console.warn(`WARNING: ${orphaned.length} improvements have no matching term:`);
    orphaned.forEach((key) => console.warn(`  - "${key}"`));
    console.warn("");
  }

  // Group by category for logging
  const byCategory = {};
  for (const t of terms) {
    if (!byCategory[t.category]) byCategory[t.category] = [];
    byCategory[t.category].push(t);
  }

  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (const [category, categoryTerms] of Object.entries(byCategory).sort()) {
    console.log(`\n── ${category} (${categoryTerms.length} terms) ──`);

    for (const term of categoryTerms) {
      const improvement = IMPROVEMENTS[term.term];
      if (!improvement) {
        console.log(`  SKIP: "${term.term}" — no improvement defined`);
        skipped++;
        continue;
      }

      try {
        await client
          .patch(term._id)
          .set({
            shortDefinition: improvement.shortDefinition,
            aliases: improvement.aliases,
          })
          .commit();

        updated++;
        console.log(`  OK:   "${term.term}"`);
      } catch (err) {
        errors++;
        console.error(`  ERR:  "${term.term}" — ${err.message}`);
      }
    }
  }

  console.log("\n════════════════════════════════════════");
  console.log(`DONE: ${updated} updated, ${skipped} skipped, ${errors} errors`);
  console.log("════════════════════════════════════════\n");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
