import { defineType, defineField } from "sanity";
import { BriefcaseIcon } from "lucide-react";

export const project = defineType({
  name: "project",
  title: "Projekt",
  type: "document",
  icon: BriefcaseIcon,
  fields: [
    defineField({
      name: "title",
      title: "Název projektu",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "client",
      title: "Klient",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "year",
      title: "Rok realizace",
      type: "number",
      validation: (r) => r.required().min(1990).max(2030),
    }),
    defineField({
      name: "image",
      title: "Hlavní obrázek",
      type: "imageWithAlt",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "gallery",
      title: "Galerie",
      type: "array",
      of: [{ type: "imageWithAlt" }],
    }),
    defineField({
      name: "description",
      title: "Popis projektu",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tags",
      title: "Štítky",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "featured",
      title: "Zvýrazněný",
      type: "boolean",
      description: "Zobrazit na homepage a jako hlavní referenci",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Pořadí",
      type: "number",
      description: "Nižší číslo = zobrazí se dříve",
    }),
    defineField({
      name: "result",
      title: "Výsledek / dopad",
      type: "string",
      description: 'Měřitelný výsledek, např. "+65% rozpoznatelnost značky"',
    }),
    defineField({
      name: "testimonial",
      title: "Reference klienta",
      type: "object",
      fields: [
        defineField({
          name: "quote",
          title: "Citace",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "author",
          title: "Autor",
          type: "string",
        }),
        defineField({
          name: "role",
          title: "Pozice / firma",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "services",
      title: "Související služby",
      type: "array",
      of: [{ type: "reference", to: [{ type: "page" }] }],
      description: "Propojení na stránky nabídek",
    }),
    defineField({
      name: "externalUrl",
      title: "Odkaz na web klienta",
      type: "url",
    }),
  ],
  orderings: [
    {
      title: "Pořadí",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Rok (nejnovější)",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      client: "client",
      year: "year",
      media: "image.image",
    },
    prepare: ({ title, client, year, media }) => ({
      title: title || "Bez názvu",
      subtitle: [client, year].filter(Boolean).join(" · "),
      media,
    }),
  },
});
