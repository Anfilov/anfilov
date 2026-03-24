/**
 * Seed script: Assign crossLinks and glossaryTerms to all services in Sanity.
 * Run: node scripts/seed-crosslinks.mjs
 */

const TOKEN = process.env.SANITY_WRITE_TOKEN;
const PROJECT_ID = "d8caxrt0";
const DATASET = "production";
const API_VERSION = "2024-01-01";

if (!TOKEN) {
  console.error("Missing SANITY_WRITE_TOKEN env var");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Service IDs (slug → _id)
// ---------------------------------------------------------------------------
const S = {
  "tvorba-loga": "M2iELtrqSYohjqJLfG48Xi",
  "brand-naming": "M2iELtrqSYohjqJLfH3nDi",
  "brand-audit-strategie": "M2iELtrqSYohjqJLfH3nK6",
  "vizualni-identita": "M2iELtrqSYohjqJLfH3nQU",
  "pos-materialy": "M2iELtrqSYohjqJLfH3rhY",
  "sablony-canva": "M2iELtrqSYohjqJLfH3tIY",
  "sablony-socialni-site": "M2iELtrqSYohjqJLfH3tOw",
  "letak-flyer": "M2iELtrqSYohjqJLfH3teu",
  "ilustrace-ikony": "M2iELtrqSYohjqJLfH3vCi",
  "reklamni-ai-vizual": "M2iELtrqSYohjqJLfH3vJ6",
  "redesign-loga": "NaX3dFCTiySsdMLs9uu2kh",
  "symbol-monogram": "NaX3dFCTiySsdMLs9uu2wp",
  "brand-manual": "NaX3dFCTiySsdMLs9uu3I3",
  "design-obalu": "NaX3dFCTiySsdMLs9uuCL1",
  "etiketa-label-design": "NaX3dFCTiySsdMLs9uuCX9",
  "merch-promo-predmety": "NaX3dFCTiySsdMLs9uuCjH",
  "tvorba-webu": "NaX3dFCTiySsdMLs9uuEaV",
  "redesign-webu": "NaX3dFCTiySsdMLs9uuEmd",
  "ui-kit-design-system": "NaX3dFCTiySsdMLs9uuF4p",
  "wireframing-prototyping": "NaX3dFCTiySsdMLs9uuFGx",
  "sablony-linkedin": "NaX3dFCTiySsdMLs9uuGjv",
  "moderni-vizitka": "NaX3dFCTiySsdMLs9uuHEF",
  "rollup-banner-plakat": "NaX3dFCTiySsdMLs9uuHZT",
  "firemni-dokumenty": "NaX3dFCTiySsdMLs9uuHlb",
  "newsletter-design": "NaX3dFCTiySsdMLs9uuL2l",
  "membership-komunita": "NaX3dFCTiySsdMLs9uuMAV",
  "email-marketing-automatizace": "NaX3dFCTiySsdMLs9uuMYl",
  "microsite-one-page": "oMjknZU0vlxTC65C1zxTyI",
  "design-socialnich-medii": "oMjknZU0vlxTC65C1zxUmN",
  "youtube-branding-kit": "oMjknZU0vlxTC65C1zxUtn",
  "katalog-brozura": "oMjknZU0vlxTC65C1zxVaS",
  "infografiky": "oMjknZU0vlxTC65C1zxX5C",
  "prezentace-pitch-decky": "oMjknZU0vlxTC65C1zxXCc",
  "prodejni-stranky": "oMjknZU0vlxTC65C1zxYBp",
  "online-kurz-design": "oMjknZU0vlxTC65C1zxYMx",
  "konverzni-trychtyr": "oMjknZU0vlxTC65C1zxYY5",
};

// ---------------------------------------------------------------------------
// Glossary term IDs (slug → _id)
// ---------------------------------------------------------------------------
const G = {
  "logo": "M2iELtrqSYohjqJLfHA3uE",
  "logotyp": "NaX3dFCTiySsdMLs9v4OAl",
  "wordmark": "NaX3dFCTiySsdMLs9v4Q51",
  "signet": "NaX3dFCTiySsdMLs9v4POZ",
  "symbol": "oMjknZU0vlxTC65C203o9N",
  "monogram": "M2iELtrqSYohjqJLfHA43o",
  "emblem": "NaX3dFCTiySsdMLs9v4Nyd",
  "moodboard": "M2iELtrqSYohjqJLfHA4Zk",
  "vektorova-grafika": "NaX3dFCTiySsdMLs9v4c0t",
  "kerning": "M2iELtrqSYohjqJLfHA58s",
  "naming": "NaX3dFCTiySsdMLs9v4Oc3",
  "vizualni-identita": "NaX3dFCTiySsdMLs9v4Pst",
  "trademark": "NaX3dFCTiySsdMLs9v4QcN",
  "manual-znacky": "M2iELtrqSYohjqJLfHA31w",
  "rebrand": "NaX3dFCTiySsdMLs9v4P0J",
  "refresh": "NaX3dFCTiySsdMLs9v4PCR",
  "audit-znacky": "NaX3dFCTiySsdMLs9v4MPb",
  "strategie-znacky": "oMjknZU0vlxTC65C203oZL",
  "favicon": "NaX3dFCTiySsdMLs9v4k8F",
  "pravidla-znacky": "M2iELtrqSYohjqJLfHA3RU",
  "styleguide": "M2iELtrqSYohjqJLfHA4g8",
  "tone-of-voice": "M2iELtrqSYohjqJLfHA4Ga",
  "corporate-identity": "M2iELtrqSYohjqJLfHA3nq",
  "barevna-paleta": "NaX3dFCTiySsdMLs9v4lqN",
  "pismova-rodina": "M2iELtrqSYohjqJLfHA5NF",
  "typograficka-hierarchie": "M2iELtrqSYohjqJLfHA5jb",
  "font": "M2iELtrqSYohjqJLfHA4zI",
  "claim": "NaX3dFCTiySsdMLs9v4NUJ",
  "slogan": "NaX3dFCTiySsdMLs9v4Pah",
  "tagline": "oMjknZU0vlxTC65C203oIe",
  "pay-off": "NaX3dFCTiySsdMLs9v4OoB",
  "pozicovani-znacky": "oMjknZU0vlxTC65C203n8J",
  "povedomi-o-znacce": "NaX3dFCTiySsdMLs9v4Mbj",
  "hodnota-znacky": "M2iELtrqSYohjqJLfHA3BW",
  "hodnoty-znacky": "oMjknZU0vlxTC65C203na8",
  "osobnost-znacky": "NaX3dFCTiySsdMLs9v4Mzz",
  "architektura-znacky": "NaX3dFCTiySsdMLs9v4MDT",
  "kontaktni-bod-znacky": "oMjknZU0vlxTC65C203nSi",
  "pribeh-znacky": "M2iELtrqSYohjqJLfHA3cf",
  "prislib-znacky": "oMjknZU0vlxTC65C203nFj",
  "firemni-identita": "NaX3dFCTiySsdMLs9v4Nyd",
  "design-token": "M2iELtrqSYohjqJLfHAFZZ",
  "responsive-design": "oMjknZU0vlxTC65C203sST",
  "mobile-first": "NaX3dFCTiySsdMLs9v4WpT",
  "ux-design": "M2iELtrqSYohjqJLfHA93a",
  "ui-design": "NaX3dFCTiySsdMLs9v4Y6J",
  "wireframe": "oMjknZU0vlxTC65C203tM7",
  "prototyp": "M2iELtrqSYohjqJLfHA8cR",
  "grid-system": "M2iELtrqSYohjqJLfHA7ED",
  "cta-button": "M2iELtrqSYohjqJLfHA74d",
  "seo": "NaX3dFCTiySsdMLs9v4nkd",
  "breakpoint": "M2iELtrqSYohjqJLfHA6tS",
  "hlavni-sekce": "M2iELtrqSYohjqJLfHA7Vm",
  "nad-zlomem": "NaX3dFCTiySsdMLs9v4TYJ",
  "sticky-navigace": "oMjknZU0vlxTC65C203tTX",
  "tmavy-rezim": "oMjknZU0vlxTC65C203rLq",
  "design-system": "oMjknZU0vlxTC65C203rYp",
  "heatmapa": "M2iELtrqSYohjqJLfHAH2a",
  "mira-okamziteho-opusteni": "NaX3dFCTiySsdMLs9v4m8Z",
  "accessibility": "NaX3dFCTiySsdMLs9v4TtX",
  "ui-kit": "NaX3dFCTiySsdMLs9v4YIR",
  "komponentni-knihovna": "M2iELtrqSYohjqJLfHA7cA",
  "hover-state": "NaX3dFCTiySsdMLs9v4Vwt",
  "micro-interakce": "NaX3dFCTiySsdMLs9v4WdL",
  "mockup": "M2iELtrqSYohjqJLfHA7vK",
  "kostrovy-nahled": "oMjknZU0vlxTC65C203shJ",
  "breadcrumbs": "oMjknZU0vlxTC65C203qza",
  "pagination": "M2iELtrqSYohjqJLfHA86V",
  "viewport": "oMjknZU0vlxTC65C203t7H",
  "vstupni-stranka": "oMjknZU0vlxTC65C2042ey",
  "nekonecne-scrollovani": "NaX3dFCTiySsdMLs9v4W91",
  "cmyk": "oMjknZU0vlxTC65C203tgW",
  "dpi": "NaX3dFCTiySsdMLs9v4ZiN",
  "spadavka": "M2iELtrqSYohjqJLfHAAky",
  "gramaz-papiru": "NaX3dFCTiySsdMLs9v4a3b",
  "orezove-znacky": "oMjknZU0vlxTC65C203uJT",
  "predtiskova-priprava": "M2iELtrqSYohjqJLfHAAbO",
  "pantone": "oMjknZU0vlxTC65C203uQt",
  "laminace": "oMjknZU0vlxTC65C203tz4",
  "razba": "oMjknZU0vlxTC65C203vKX",
  "slepotisk": "NaX3dFCTiySsdMLs9v4bHP",
  "tiskovy-arch": "NaX3dFCTiySsdMLs9v4bcd",
  "pdf-x": "M2iELtrqSYohjqJLfHAALQ",
  "icc-profil": "M2iELtrqSYohjqJLfHA9WK",
  "rastrova-grafika": "oMjknZU0vlxTC65C203vD7",
  "ofsetovy-tisk": "oMjknZU0vlxTC65C203vxU",
  "ppi": "oMjknZU0vlxTC65C203ulI",
  "newsletter": "oMjknZU0vlxTC65C2040rg",
  "email-sablona": "NaX3dFCTiySsdMLs9v4jw7",
  "mira-otevreni": "NaX3dFCTiySsdMLs9v4koh",
  "click-through-rate": "NaX3dFCTiySsdMLs9v4jUp",
  "design-banneru": "oMjknZU0vlxTC65C2040Pr",
  "og-image": "NaX3dFCTiySsdMLs9v4kcZ",
  "infografika": "M2iELtrqSYohjqJLfHAFfx",
  "ilustrace": "oMjknZU0vlxTC65C2041aC",
  "ikona": "oMjknZU0vlxTC65C2041P4",
  "svg-animace": "M2iELtrqSYohjqJLfHAGDU",
  "pohybovy-design": "NaX3dFCTiySsdMLs9v4kQR",
  "slide-master": "oMjknZU0vlxTC65C2041He",
  "lottie-animace": "M2iELtrqSYohjqJLfHAFmL",
  "stylovy-ramec": "M2iELtrqSYohjqJLfHAGZq",
  "hlavni-obrazek": "oMjknZU0vlxTC65C2040eh",
  "design-tmaveho-rezimu": "M2iELtrqSYohjqJLfHAGJs",
  "pitch-deck": "NaX3dFCTiySsdMLs9v4l6t",
  "conversion-rate": "M2iELtrqSYohjqJLfHAGwC",
  "call-to-action": "oMjknZU0vlxTC65C20429R",
  "a-b-testovani": "M2iELtrqSYohjqJLfHAGl1",
  "schema-markup": "M2iELtrqSYohjqJLfHAHVK",
  "meta-title": "M2iELtrqSYohjqJLfHAHFM",
  "meta-description": "NaX3dFCTiySsdMLs9v4nYV",
  "lead-magnet": "oMjknZU0vlxTC65C2042mO",
  "opt-in": "oMjknZU0vlxTC65C20436n",
  "retargeting": "NaX3dFCTiySsdMLs9v4o2p",
  "konverzni-trychtyr-pojem": "oMjknZU0vlxTC65C2042XY",
  "session": "oMjknZU0vlxTC65C2043RC",
  "social-proof": "NaX3dFCTiySsdMLs9v4iQ7",
  "carousel": "M2iELtrqSYohjqJLfHADR2",
  "story": "oMjknZU0vlxTC65C203zUM",
  "feed": "NaX3dFCTiySsdMLs9v4gYt",
  "obsahovy-pilir": "NaX3dFCTiySsdMLs9v4gGh",
  "hlas-znacky-na-sitich": "oMjknZU0vlxTC65C203yIA",
  "mira-zapojeni": "M2iELtrqSYohjqJLfHADsB",
  "hashtag-strategie": "M2iELtrqSYohjqJLfHAE1l",
  "organicky-dosah": "NaX3dFCTiySsdMLs9v4i1r",
  "cta-v-postu": "NaX3dFCTiySsdMLs9v4fO7",
  "thumbnail": "oMjknZU0vlxTC65C203zbm",
  "uvodni-obrazek": "M2iELtrqSYohjqJLfHADln",
  "bio-link": "M2iELtrqSYohjqJLfHADB4",
  "reels": "NaX3dFCTiySsdMLs9v4h9H",
  "impressions": "oMjknZU0vlxTC65C203ywy",
  "obsahovy-kalendar": "M2iELtrqSYohjqJLfHADcD",
  "obsahova-strategie": "NaX3dFCTiySsdMLs9v4hgd",
  "placeny-dosah": "oMjknZU0vlxTC65C203zwB",
  "community-management": "NaX3dFCTiySsdMLs9v4j6Z",
  "ugc": "oMjknZU0vlxTC65C203zjC",
  "viralita": "M2iELtrqSYohjqJLfHAFEo",
  "obalovy-design": "M2iELtrqSYohjqJLfHAC2o",
  "die-line": "oMjknZU0vlxTC65C203w4u",
  "etiketa": "M2iELtrqSYohjqJLfHABTg",
  "primarni-obal": "oMjknZU0vlxTC65C203we9",
  "sekundarni-obal": "NaX3dFCTiySsdMLs9v4dHj",
  "regalova-pritazlivost": "M2iELtrqSYohjqJLfHACSM",
  "flexibilni-obal": "oMjknZU0vlxTC65C203wCK",
  "sustainable-packaging": "oMjknZU0vlxTC65C203xFF",
  "mockup-obalu": "oMjknZU0vlxTC65C203wJk",
  "vysek": "oMjknZU0vlxTC65C203xbV",
  "kartonaz": "M2iELtrqSYohjqJLfHABdG",
  "spotova-barva": "M2iELtrqSYohjqJLfHAAw9",
  "sleeve": "oMjknZU0vlxTC65C203xiv",
  "pos-materialy-pojem": "NaX3dFCTiySsdMLs9v4cwV",
  "pop-display": "NaX3dFCTiySsdMLs9v4ckN",
  "stojan": "M2iELtrqSYohjqJLfHACYk",
  "wobbler": "NaX3dFCTiySsdMLs9v4e7H",
  "regalovy-komunikator": "oMjknZU0vlxTC65C203wuq",
  "bigovani": "NaX3dFCTiySsdMLs9v4ePT",
};

// ---------------------------------------------------------------------------
// Helper: create reference objects
// ---------------------------------------------------------------------------
function ref(id) {
  return { _type: "reference", _ref: id, _key: id.slice(-12) };
}

// ---------------------------------------------------------------------------
// Build mutations
// ---------------------------------------------------------------------------
const mutations = [];

function patch(serviceSlug, crossLinkSlugs, termKeys) {
  mutations.push({
    patch: {
      id: S[serviceSlug],
      set: {
        crossLinks: crossLinkSlugs.map((s) => ref(S[s])),
        glossaryTerms: termKeys.map((k) => ref(G[k])),
      },
    },
  });
}

// === Značka & identita ===
patch("tvorba-loga", ["vizualni-identita", "brand-manual", "redesign-loga"],
  ["logo", "logotyp", "wordmark", "signet", "symbol", "monogram", "emblem", "moodboard", "vektorova-grafika", "kerning", "naming", "vizualni-identita", "trademark", "manual-znacky"]);

patch("redesign-loga", ["tvorba-loga", "vizualni-identita", "brand-audit-strategie"],
  ["logo", "logotyp", "rebrand", "refresh", "vizualni-identita", "moodboard", "vektorova-grafika", "symbol", "trademark", "audit-znacky", "strategie-znacky"]);

patch("symbol-monogram", ["tvorba-loga", "vizualni-identita", "brand-manual"],
  ["symbol", "monogram", "logo", "signet", "favicon", "vektorova-grafika", "kerning", "emblem", "vizualni-identita", "trademark"]);

patch("brand-manual", ["vizualni-identita", "tvorba-loga", "brand-audit-strategie"],
  ["manual-znacky", "pravidla-znacky", "styleguide", "vizualni-identita", "tone-of-voice", "corporate-identity", "logo", "barevna-paleta", "pismova-rodina", "typograficka-hierarchie", "font"]);

patch("brand-naming", ["tvorba-loga", "brand-audit-strategie", "vizualni-identita"],
  ["naming", "logo", "trademark", "claim", "slogan", "tagline", "pay-off", "strategie-znacky", "pozicovani-znacky", "povedomi-o-znacce"]);

patch("brand-audit-strategie", ["vizualni-identita", "brand-manual", "tvorba-loga"],
  ["audit-znacky", "strategie-znacky", "pozicovani-znacky", "hodnota-znacky", "hodnoty-znacky", "osobnost-znacky", "architektura-znacky", "povedomi-o-znacce", "kontaktni-bod-znacky", "pribeh-znacky", "prislib-znacky"]);

patch("vizualni-identita", ["brand-manual", "tvorba-loga", "tvorba-webu"],
  ["vizualni-identita", "corporate-identity", "firemni-identita", "logo", "logotyp", "manual-znacky", "barevna-paleta", "pismova-rodina", "moodboard", "typograficka-hierarchie", "styleguide", "design-token"]);

// === Webdesign ===
patch("tvorba-webu", ["redesign-webu", "ui-kit-design-system", "wireframing-prototyping"],
  ["responsive-design", "mobile-first", "ux-design", "ui-design", "wireframe", "prototyp", "grid-system", "cta-button", "seo", "breakpoint", "hlavni-sekce", "nad-zlomem", "sticky-navigace", "tmavy-rezim", "design-system"]);

patch("redesign-webu", ["tvorba-webu", "wireframing-prototyping", "ui-kit-design-system"],
  ["responsive-design", "ux-design", "ui-design", "wireframe", "mobile-first", "breakpoint", "hlavni-sekce", "heatmapa", "seo", "mira-okamziteho-opusteni", "prototyp", "accessibility"]);

patch("ui-kit-design-system", ["tvorba-webu", "wireframing-prototyping", "vizualni-identita"],
  ["design-system", "ui-kit", "ui-design", "komponentni-knihovna", "design-token", "prototyp", "grid-system", "hover-state", "micro-interakce", "tmavy-rezim", "breakpoint"]);

patch("wireframing-prototyping", ["tvorba-webu", "ui-kit-design-system", "redesign-webu"],
  ["wireframe", "prototyp", "ux-design", "ui-design", "grid-system", "mockup", "mobile-first", "hlavni-sekce", "kostrovy-nahled", "breadcrumbs", "pagination"]);

patch("microsite-one-page", ["tvorba-webu", "prodejni-stranky", "redesign-webu"],
  ["responsive-design", "cta-button", "hlavni-sekce", "nad-zlomem", "seo", "mobile-first", "sticky-navigace", "viewport", "vstupni-stranka", "nekonecne-scrollovani"]);

// === Propagační tiskoviny ===
patch("moderni-vizitka", ["firemni-dokumenty", "vizualni-identita", "brand-manual"],
  ["cmyk", "dpi", "spadavka", "gramaz-papiru", "vektorova-grafika", "orezove-znacky", "predtiskova-priprava", "pantone", "laminace", "razba", "slepotisk"]);

patch("katalog-brozura", ["letak-flyer", "firemni-dokumenty", "vizualni-identita"],
  ["cmyk", "dpi", "spadavka", "gramaz-papiru", "tiskovy-arch", "orezove-znacky", "predtiskova-priprava", "pdf-x", "icc-profil", "typograficka-hierarchie", "rastrova-grafika", "laminace"]);

patch("letak-flyer", ["katalog-brozura", "rollup-banner-plakat", "moderni-vizitka"],
  ["cmyk", "dpi", "spadavka", "orezove-znacky", "predtiskova-priprava", "gramaz-papiru", "pdf-x", "rastrova-grafika", "vektorova-grafika", "ofsetovy-tisk"]);

patch("rollup-banner-plakat", ["letak-flyer", "pos-materialy", "katalog-brozura"],
  ["dpi", "cmyk", "spadavka", "vektorova-grafika", "rastrova-grafika", "predtiskova-priprava", "pantone", "orezove-znacky", "tiskovy-arch", "ppi"]);

patch("firemni-dokumenty", ["moderni-vizitka", "brand-manual", "vizualni-identita"],
  ["cmyk", "typograficka-hierarchie", "pismova-rodina", "font", "vektorova-grafika", "pdf-x", "predtiskova-priprava", "gramaz-papiru", "manual-znacky", "barevna-paleta"]);

// === Digitální design ===
patch("newsletter-design", ["email-marketing-automatizace", "infografiky", "sablony-canva"],
  ["newsletter", "email-sablona", "mira-otevreni", "click-through-rate", "design-banneru", "responsive-design", "cta-button", "barevna-paleta", "typograficka-hierarchie", "og-image"]);

patch("infografiky", ["prezentace-pitch-decky", "newsletter-design", "ilustrace-ikony"],
  ["infografika", "ilustrace", "ikona", "barevna-paleta", "typograficka-hierarchie", "design-token", "vektorova-grafika", "svg-animace", "pohybovy-design", "slide-master"]);

patch("ilustrace-ikony", ["vizualni-identita", "infografiky", "sablony-socialni-site"],
  ["ilustrace", "ikona", "vektorova-grafika", "svg-animace", "lottie-animace", "design-token", "barevna-paleta", "stylovy-ramec", "favicon", "pohybovy-design"]);

patch("prezentace-pitch-decky", ["infografiky", "ilustrace-ikony", "firemni-dokumenty"],
  ["pitch-deck", "slide-master", "typograficka-hierarchie", "infografika", "barevna-paleta", "ikona", "ilustrace", "og-image", "design-token", "hlavni-obrazek"]);

patch("reklamni-ai-vizual", ["sablony-socialni-site", "infografiky", "design-socialnich-medii"],
  ["hlavni-obrazek", "ilustrace", "barevna-paleta", "og-image", "design-banneru", "click-through-rate", "infografika", "svg-animace", "design-tmaveho-rezimu", "favicon"]);

// === Online prodej ===
patch("prodejni-stranky", ["konverzni-trychtyr", "tvorba-webu", "email-marketing-automatizace"],
  ["vstupni-stranka", "conversion-rate", "call-to-action", "cta-button", "seo", "a-b-testovani", "heatmapa", "schema-markup", "meta-title", "meta-description", "nad-zlomem", "hlavni-sekce"]);

patch("online-kurz-design", ["membership-komunita", "prodejni-stranky", "konverzni-trychtyr"],
  ["vstupni-stranka", "conversion-rate", "call-to-action", "lead-magnet", "opt-in", "email-sablona", "barevna-paleta", "ux-design", "cta-button", "social-proof"]);

patch("membership-komunita", ["online-kurz-design", "prodejni-stranky", "konverzni-trychtyr"],
  ["conversion-rate", "vstupni-stranka", "lead-magnet", "opt-in", "call-to-action", "ux-design", "cta-button", "email-sablona", "social-proof", "retargeting"]);

patch("konverzni-trychtyr", ["prodejni-stranky", "email-marketing-automatizace", "membership-komunita"],
  ["konverzni-trychtyr-pojem", "conversion-rate", "vstupni-stranka", "call-to-action", "lead-magnet", "opt-in", "a-b-testovani", "retargeting", "email-sablona", "heatmapa", "session"]);

patch("email-marketing-automatizace", ["newsletter-design", "konverzni-trychtyr", "prodejni-stranky"],
  ["newsletter", "email-sablona", "mira-otevreni", "click-through-rate", "opt-in", "lead-magnet", "a-b-testovani", "conversion-rate", "retargeting", "call-to-action"]);

// === Sociální média ===
patch("sablony-canva", ["sablony-socialni-site", "design-socialnich-medii", "vizualni-identita"],
  ["carousel", "story", "feed", "obsahovy-pilir", "hlas-znacky-na-sitich", "mira-zapojeni", "hashtag-strategie", "organicky-dosah", "cta-v-postu", "thumbnail", "uvodni-obrazek", "bio-link"]);

patch("sablony-socialni-site", ["design-socialnich-medii", "sablony-canva", "sablony-linkedin"],
  ["feed", "carousel", "story", "reels", "thumbnail", "obsahovy-pilir", "hlas-znacky-na-sitich", "mira-zapojeni", "organicky-dosah", "impressions", "uvodni-obrazek", "social-proof"]);

patch("sablony-linkedin", ["sablony-socialni-site", "design-socialnich-medii", "prezentace-pitch-decky"],
  ["feed", "carousel", "thumbnail", "hlas-znacky-na-sitich", "obsahovy-pilir", "impressions", "organicky-dosah", "mira-zapojeni", "social-proof", "cta-v-postu", "bio-link"]);

patch("design-socialnich-medii", ["sablony-socialni-site", "sablony-canva", "youtube-branding-kit"],
  ["feed", "carousel", "story", "reels", "obsahovy-kalendar", "obsahova-strategie", "obsahovy-pilir", "hlas-znacky-na-sitich", "mira-zapojeni", "organicky-dosah", "placeny-dosah", "social-proof", "community-management", "ugc"]);

patch("youtube-branding-kit", ["design-socialnich-medii", "sablony-socialni-site", "ilustrace-ikony"],
  ["thumbnail", "uvodni-obrazek", "reels", "hlas-znacky-na-sitich", "feed", "mira-zapojeni", "organicky-dosah", "viralita", "obsahovy-pilir", "hashtag-strategie"]);

// === Obalový design ===
patch("design-obalu", ["etiketa-label-design", "pos-materialy", "vizualni-identita"],
  ["obalovy-design", "die-line", "etiketa", "primarni-obal", "sekundarni-obal", "regalova-pritazlivost", "flexibilni-obal", "sustainable-packaging", "mockup-obalu", "vysek", "kartonaz", "predtiskova-priprava", "cmyk", "pantone"]);

patch("etiketa-label-design", ["design-obalu", "katalog-brozura", "pos-materialy"],
  ["etiketa", "obalovy-design", "die-line", "predtiskova-priprava", "cmyk", "pantone", "spotova-barva", "regalova-pritazlivost", "flexibilni-obal", "sleeve", "mockup-obalu"]);

patch("merch-promo-predmety", ["pos-materialy", "vizualni-identita", "design-obalu"],
  ["pos-materialy-pojem", "mockup-obalu", "vizualni-identita", "manual-znacky", "obalovy-design", "vektorova-grafika", "cmyk", "pantone", "regalovy-komunikator", "stojan"]);

patch("pos-materialy", ["rollup-banner-plakat", "design-obalu", "merch-promo-predmety"],
  ["pos-materialy-pojem", "pop-display", "stojan", "wobbler", "regalovy-komunikator", "regalova-pritazlivost", "obalovy-design", "bigovani", "cmyk", "predtiskova-priprava", "orezove-znacky"]);

// ---------------------------------------------------------------------------
// Send mutations
// ---------------------------------------------------------------------------
async function run() {
  console.log(`Sending ${mutations.length} mutations...`);

  const res = await fetch(
    `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ mutations }),
    }
  );

  const data = await res.json();

  if (res.ok) {
    console.log(`Done! ${data.results?.length ?? 0} documents updated.`);
  } else {
    console.error("Error:", JSON.stringify(data, null, 2));
    process.exit(1);
  }
}

run();
