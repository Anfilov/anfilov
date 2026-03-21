import { defineType, defineField } from "sanity";
import { Layers } from "lucide-react";

export const sluzba = defineType({
  name: "sluzba",
  title: "Služba",
  type: "document",
  icon: Layers,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "problem", title: "Problém" },
    { name: "reseni", title: "Řešení" },
    { name: "proces", title: "Proces" },
    { name: "video", title: "Video" },
    { name: "portfolio", title: "Portfolio" },
    { name: "cenik", title: "Ceník" },
    { name: "nastroje", title: "Nástroje" },
    { name: "faq", title: "FAQ" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // ── Základ ──────────────────────────────────────────────────────
    defineField({
      name: "name",
      title: "Název služby",
      type: "string",
      description: 'Hlavní nadpis H1. Např. "Tvorba loga", "Brand identita"',
      validation: (r) => r.required(),
      group: "hero",
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "name" },
      description: "Bude v URL: /sluzba-template/{slug}",
      validation: (r) => r.required(),
      group: "hero",
    }),

    // ── Kategorie ──────────────────────────────────────────────────────
    defineField({
      name: "category",
      title: "Kategorie",
      type: "string",
      description: "Kategorie služby pro seskupení na stránce /sluzba",
      options: {
        list: [
          { value: "znacka-identita", title: "Značka & identita" },
          { value: "webdesign", title: "Webdesign" },
          { value: "firemni-tiskoviny", title: "Firemní & reklamní tiskoviny" },
          { value: "obalovy-design", title: "Obalový design" },
          { value: "socialni-media", title: "Sociální média" },
          { value: "digitalni-design", title: "Digitální design" },
          { value: "online-prodej", title: "Online prodej" },
        ],
      },
      validation: (r) => r.required(),
      group: "hero",
    }),
    defineField({
      name: "categoryOrder",
      title: "Pořadí v kategorii",
      type: "number",
      description: "Pořadí služby v rámci její kategorie (1, 2, 3...)",
      validation: (r) => r.required().min(1),
      group: "hero",
    }),

    // ── Hero ─────────────────────────────────────────────────────────
    defineField({
      name: "heroTitle",
      title: "Nadpis H1",
      type: "string",
      description:
        'Hlavní nadpis stránky. Pokud nevyplníte, použije se Název služby. Např. "Logo, které vaši zákazníci nezapomenou".',
      group: "hero",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Podnadpis hero",
      type: "text",
      rows: 3,
      description: "Text pod hlavním nadpisem. Podporuje volné formátování.",
      group: "hero",
    }),
    defineField({
      name: "heroMediaType",
      title: "Typ hero média",
      type: "string",
      options: {
        list: [
          { title: "Obrázek", value: "image" },
          { title: "Embed kód (iframe / script / Lottie)", value: "embed" },
        ],
        layout: "radio",
      },
      initialValue: "image",
      group: "hero",
    }),
    defineField({
      name: "heroImage",
      title: "Hero obrázek",
      type: "imageWithAlt",
      hidden: ({ document }) => document?.heroMediaType !== "image",
      group: "hero",
    }),
    defineField({
      name: "heroEmbed",
      title: "Hero embed kód",
      type: "text",
      rows: 8,
      description:
        "Celý HTML snippet — iframe, script, Lottie player, animovaný SVG. Bude vložen do stránky tak jak je.",
      hidden: ({ document }) => document?.heroMediaType !== "embed",
      group: "hero",
    }),

    // ── Trust signály (volné texty) ─────────────────────────────────
    defineField({
      name: "heroPriceLabel",
      title: "Cena (štítek)",
      type: "string",
      description: 'Celý text, např. "Již od 15 000 Kč". Zobrazí se pod podnadpisem.',
      group: "hero",
    }),
    defineField({
      name: "heroProjectsLabel",
      title: "Projekty (štítek)",
      type: "string",
      description: 'Celý text, např. "100+ projektů". Zobrazí se v řádku trust signálů.',
      group: "hero",
    }),
    defineField({
      name: "heroDeliveryLabel",
      title: "Dodání (štítek)",
      type: "string",
      description: 'Celý text, např. "dodání cca 12 dní". Zobrazí se v řádku trust signálů.',
      group: "hero",
    }),

    // ── Atomic Answer ───────────────────────────────────────────────
    defineField({
      name: "atomicAnswer",
      title: "Atomic Answer",
      type: "text",
      rows: 6,
      description:
        'SEO shrnutí služby (max 200 slov). Zobrazí se pod hero v rámečku "Nabídka v kostce". Důležité pro AI extrakci.',
      group: "hero",
    }),

    // ── SEO ──────────────────────────────────────────────────────────
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      description: "Titulek stránky pro vyhledávače. Max 60 znaků.",
      validation: (r) => r.max(70),
      group: "seo",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 2,
      description: "Popis stránky pro vyhledávače. Max 160 znaků.",
      validation: (r) => r.max(170),
      group: "seo",
    }),

    // ── Problém ──────────────────────────────────────────────────────
    defineField({
      name: "problemOverline",
      title: "Nadtitulek",
      type: "string",
      initialValue: "Problém",
      group: "problem",
    }),
    defineField({
      name: "problemTitle",
      title: "Titulek",
      type: "string",
      initialValue: "Poznáváte některý z těchto problémů?",
      group: "problem",
    }),
    defineField({
      name: "problemItems",
      title: "Problémy",
      type: "array",
      description: "1 až 3 problémy. Každý má obrázek a text.",
      validation: (r) => r.min(1).max(3),
      group: "problem",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Obrázek",
              type: "image",
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "string",
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: "text", media: "image" },
            prepare: ({ title, media }) => ({
              title: title || "Problém",
              media,
            }),
          },
        },
      ],
    }),

    // ── Řešení ──────────────────────────────────────────────────────
    defineField({
      name: "reseniOverline",
      title: "Nadtitulek",
      type: "string",
      initialValue: "Řešení",
      group: "reseni",
    }),
    defineField({
      name: "reseniTitle",
      title: "Titulek",
      type: "string",
      initialValue: "Skvělé logo, které prodává",
      group: "reseni",
    }),
    defineField({
      name: "reseniItems",
      title: "Položky řešení",
      type: "array",
      description: "Repeater — titulek + text. Ikona (check) je stejná pro všechny.",
      group: "reseni",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Titulek",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "text",
              rows: 3,
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
    defineField({
      name: "reseniMediaType",
      title: "Typ média (levý sloupec)",
      type: "string",
      options: {
        list: [
          { title: "Obrázek", value: "image" },
          { title: "Embed kód (iframe / script / Lottie)", value: "embed" },
        ],
        layout: "radio",
      },
      initialValue: "image",
      group: "reseni",
    }),
    defineField({
      name: "reseniImage",
      title: "Obrázek",
      type: "imageWithAlt",
      hidden: ({ document }) => document?.reseniMediaType !== "image",
      group: "reseni",
    }),
    defineField({
      name: "reseniEmbed",
      title: "Embed kód",
      type: "text",
      rows: 8,
      description: "HTML snippet — iframe, script, Lottie player, animovaný SVG.",
      hidden: ({ document }) => document?.reseniMediaType !== "embed",
      group: "reseni",
    }),

    // ── Proces ──────────────────────────────────────────────────────
    defineField({
      name: "procesOverline",
      title: "Nadtitulek",
      type: "string",
      initialValue: "Proces",
      group: "proces",
    }),
    defineField({
      name: "procesTitle",
      title: "Titulek",
      type: "string",
      initialValue: "Jak probíhá spolupráce",
      group: "proces",
    }),
    defineField({
      name: "procesSteps",
      title: "Kroky procesu",
      type: "array",
      description:
        "Kroky spolupráce. Čísla se generují automaticky (01, 02, 03…). Dny se sčítají do celkového součtu.",
      group: "proces",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Titulek kroku",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "days",
              title: "Počet dní",
              type: "number",
              validation: (r) => r.required().min(1),
            }),
            defineField({
              name: "text",
              title: "Popis",
              type: "text",
              rows: 3,
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: "title", days: "days" },
            prepare: ({ title, days }) => ({
              title: title || "Krok",
              subtitle: days ? `${days} ${days === 1 ? "den" : days <= 4 ? "dny" : "dní"}` : "",
            }),
          },
        },
      ],
    }),

    // ── Video ───────────────────────────────────────────────────────
    defineField({
      name: "videoOverline",
      title: "Nadtitulek",
      type: "string",
      initialValue: "Video",
      group: "video",
    }),
    defineField({
      name: "videoTitle",
      title: "Titulek",
      type: "string",
      initialValue: "Podívejte se, jak to vypadá v praxi",
      group: "video",
    }),
    defineField({
      name: "videoBody",
      title: "Text",
      type: "text",
      rows: 4,
      group: "video",
    }),
    defineField({
      name: "videoSource",
      title: "Zdroj videa",
      type: "string",
      options: {
        list: [
          { title: "YouTube / Vimeo URL", value: "url" },
          { title: "Embed kód (iframe / script / jiné)", value: "embed" },
        ],
        layout: "radio",
      },
      initialValue: "url",
      group: "video",
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "YouTube nebo Vimeo URL.",
      hidden: ({ document }) => document?.videoSource !== "url",
      group: "video",
    }),
    defineField({
      name: "videoEmbed",
      title: "Embed kód",
      type: "text",
      rows: 6,
      description: "Celý HTML snippet — iframe, script, nebo jiný embed.",
      hidden: ({ document }) => document?.videoSource !== "embed",
      group: "video",
    }),

    // ── Portfolio ────────────────────────────────────────────────────
    defineField({
      name: "portfolioOverline",
      title: "Nadtitulek",
      type: "string",
      initialValue: "Reference",
      group: "portfolio",
    }),
    defineField({
      name: "portfolioTitle",
      title: "Titulek",
      type: "string",
      initialValue: "Ukázky tvorby loga",
      group: "portfolio",
    }),
    defineField({
      name: "portfolioProjects",
      title: "Vybrané projekty",
      type: "array",
      description:
        "Vyberte projekty a seřaďte je přetažením. Zobrazí se v tomto pořadí.",
      group: "portfolio",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
    }),

    // ── Ceník a srovnání ──────────────────────────────────────────
    defineField({
      name: "cenikOverline",
      title: "Nadtitulek",
      type: "string",
      initialValue: "Ceník a srovnání",
      group: "cenik",
    }),
    defineField({
      name: "cenikTitle",
      title: "Titulek",
      type: "string",
      initialValue: "Kolik stojí tvorba loga",
      group: "cenik",
    }),
    defineField({
      name: "cenikSubtitle",
      title: "Podtitulek",
      type: "text",
      rows: 2,
      group: "cenik",
    }),

    // Levý sloupec — cena
    defineField({
      name: "cenikPriceTitle",
      title: "Titulek nad cenou",
      type: "string",
      description: 'Např. "Cena za návrh loga"',
      group: "cenik",
    }),
    defineField({
      name: "cenikPriceLabel",
      title: "Cena (celý string)",
      type: "string",
      description: 'Celý text ceny, např. "od 15 000 Kč"',
      group: "cenik",
    }),
    defineField({
      name: "cenikIncludedTitle",
      title: "Podtitulek co je v ceně",
      type: "string",
      initialValue: "Co vše je v ceně",
      group: "cenik",
    }),
    defineField({
      name: "cenikIncludedItems",
      title: "Co je v ceně — položky",
      type: "array",
      group: "cenik",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Název",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "desc",
              title: "Popis",
              type: "string",
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "desc" },
          },
        },
      ],
    }),

    // Pravý sloupec — srovnávací tabulka
    defineField({
      name: "cenikTableTitle",
      title: "Titulek tabulky",
      type: "string",
      description: 'Např. "Proč je to se mnou výhodnější"',
      group: "cenik",
    }),
    defineField({
      name: "cenikTableColumns",
      title: "Sloupce tabulky (hlavička)",
      type: "array",
      description: 'Názvy sloupců, např. "ANFILOV", "Agentura", "Svépomocí"',
      group: "cenik",
      of: [{ type: "string" }],
      validation: (r) => r.min(2).max(4),
    }),
    defineField({
      name: "cenikTableRows",
      title: "Řádky tabulky",
      type: "array",
      description: "Každý řádek = kritérium + skóre (1–5) pro každý sloupec.",
      group: "cenik",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "criterion",
              title: "Kritérium",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "scores",
              title: "Skóre",
              type: "array",
              description: "Skóre 1–5 pro každý sloupec (ve stejném pořadí jako sloupce).",
              of: [{ type: "number" }],
            }),
          ],
          preview: {
            select: { title: "criterion", scores: "scores" },
            prepare: ({ title, scores }) => ({
              title: title || "Kritérium",
              subtitle: scores ? scores.join(" · ") : "",
            }),
          },
        },
      ],
    }),
    defineField({
      name: "cenikTableNote",
      title: "Poznámka pod tabulkou",
      type: "string",
      group: "cenik",
    }),

    // ── FAQ ─────────────────────────────────────────────────────────
    defineField({
      name: "faqOverline",
      title: "Nadtitulek",
      type: "string",
      initialValue: "FAQ",
      group: "faq",
    }),
    defineField({
      name: "faqTitle",
      title: "Titulek",
      type: "string",
      initialValue: "Často kladené otázky",
      group: "faq",
    }),
    defineField({
      name: "faqItems",
      title: "Otázky a odpovědi",
      type: "array",
      description:
        "Seřaďte přetažením. Zobrazují se ve 2 sloupcích — sudé vlevo, liché vpravo (vyrovnaně).",
      group: "faq",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Otázka",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "answer",
              title: "Odpověď",
              type: "text",
              rows: 4,
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: "question" },
          },
        },
      ],
    }),

    // ── Nástroje ────────────────────────────────────────────────────
    defineField({
      name: "nastrojeOverline",
      title: "Nadtitulek",
      type: "string",
      initialValue: "Nástroje",
      group: "nastroje",
    }),
    defineField({
      name: "nastrojeTitle",
      title: "Titulek",
      type: "string",
      initialValue: "S čím pracuji",
      group: "nastroje",
    }),
    defineField({
      name: "nastrojeItems",
      title: "Nástroje",
      type: "array",
      description: "Vyberte nástroje z existujících a seřaďte přetažením.",
      group: "nastroje",
      of: [
        {
          type: "reference",
          to: [{ type: "tool" }],
        },
      ],
    }),

    // ── Bloky budou přidávány postupně ──────────────────────────────
  ],
  orderings: [
    {
      title: "Název (A→Z)",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      slug: "slug.current",
      media: "heroImage.image",
    },
    prepare: ({ title, slug, media }) => ({
      title: title || "Bez názvu",
      subtitle: slug ? `/sluzba-template/${slug}` : "",
      media,
    }),
  },
});
