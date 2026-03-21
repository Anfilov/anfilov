import { defineType, defineField } from "sanity";
import { BookOpen } from "lucide-react";

export const glossaryTerm = defineType({
  name: "glossaryTerm",
  title: "Slovníkový pojem",
  type: "document",
  icon: BookOpen,
  fields: [
    // ── Identifikace ────────────────────────────────────────────────
    defineField({
      name: "term",
      title: "Název pojmu",
      type: "string",
      description: "Hlavní název pojmu (H1 na detail stránce).",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "term" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "aliases",
      title: "Alternativní názvy",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Synonyma, anglické názvy, hovorové výrazy. Zobrazují se kurzívou pod názvem. Prohledávají se ve fulltextu.",
    }),
    defineField({
      name: "category",
      title: "Kategorie",
      type: "string",
      options: {
        list: [
          "Branding",
          "Typografie",
          "Webdesign",
          "Tisk",
          "Obalový design",
          "Sociální média",
          "Digitální design",
          "Marketing",
        ],
      },
      validation: (r) => r.required(),
    }),

    // ── Krátký obsah (vždy vyplněný) ────────────────────────────────
    defineField({
      name: "shortDefinition",
      title: "Krátká definice",
      type: "text",
      rows: 3,
      description:
        "1–2 věty, max 40 slov. Zobrazuje se na hub stránce i jako atomic answer na detailu.",
      validation: (r) => r.required(),
    }),

    // ── Detail stránka (volitelný) ──────────────────────────────────
    defineField({
      name: "hasDetailPage",
      title: "Má vlastní detail stránku?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "extendedDescription",
      title: "Rozšířený popis",
      type: "portableText",
      description: "300–500 slov. Pouze pokud má detail stránku.",
      hidden: ({ parent }) => !parent?.hasDetailPage,
    }),
    defineField({
      name: "practicalUse",
      title: "Praktické použití",
      type: "portableText",
      description: "100–200 slov nebo 3–5 bodů.",
      hidden: ({ parent }) => !parent?.hasDetailPage,
    }),
    defineField({
      name: "image",
      title: "Ilustrace",
      type: "imageWithAlt",
      hidden: ({ parent }) => !parent?.hasDetailPage,
    }),

    // ── Reference ───────────────────────────────────────────────────
    defineField({
      name: "relatedTerms",
      title: "Související pojmy",
      type: "array",
      of: [{ type: "reference", to: [{ type: "glossaryTerm" }] }],
    }),
    defineField({
      name: "relatedServices",
      title: "Související služby",
      type: "array",
      of: [{ type: "reference", to: [{ type: "sluzba" }] }],
    }),

    // ── SEO ─────────────────────────────────────────────────────────
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      description: "Volitelné. Výchozí: Co je {pojem}? — ANFILOV Studio",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 2,
      description: "Volitelné. Max 155 znaků.",
    }),
  ],
  preview: {
    select: { title: "term", subtitle: "category", hasDetail: "hasDetailPage" },
    prepare({ title, subtitle, hasDetail }) {
      return {
        title,
        subtitle: `${subtitle ?? ""}${hasDetail ? " • Detail stránka" : ""}`,
      };
    },
  },
  orderings: [
    { title: "Název A→Z", name: "termAsc", by: [{ field: "term", direction: "asc" }] },
    { title: "Kategorie", name: "categoryAsc", by: [{ field: "category", direction: "asc" }, { field: "term", direction: "asc" }] },
  ],
});
