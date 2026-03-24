import { defineType, defineField } from "sanity";
import { Image } from "lucide-react";

export const portfolioPage = defineType({
  name: "portfolioPage",
  title: "Stránka portfolia",
  type: "document",
  icon: Image,
  fields: [
    defineField({
      name: "title",
      title: "Interní název",
      type: "string",
      initialValue: "Stránka portfolia",
      hidden: true,
    }),
    defineField({
      name: "categories",
      title: "Kategorie portfolia",
      type: "array",
      description:
        'Přetáhněte kategorie do požadovaného pořadí. První kategorie (např. "Vybrané práce") se zobrazí jako výchozí. Projekty v každé kategorii řaďte přetažením. Jeden projekt může být ve více kategoriích.',
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Název kategorie",
              type: "string",
              description: 'Zobrazí se jako tab na webu, např. "Vybrané práce", "Logo Design"',
              validation: (r) => r.required(),
            }),
            defineField({
              name: "projects",
              title: "Projekty v kategorii",
              type: "array",
              description:
                "Přetáhněte projekty do požadovaného pořadí. Pořadí zde = pořadí na webu.",
              of: [
                {
                  type: "reference",
                  to: [{ type: "project" }],
                },
              ],
              validation: (r) => r.min(1),
            }),
          ],
          preview: {
            select: { title: "label", projects: "projects" },
            prepare: ({ title, projects }) => ({
              title: title || "Kategorie",
              subtitle: `${projects?.length ?? 0} projektů`,
            }),
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Stránka portfolia",
    }),
  },
});
