import { defineType, defineField } from "sanity";
import { LayoutGrid } from "lucide-react";

export const sluzbyPage = defineType({
  name: "sluzbyPage",
  title: "Stránka služby (rozcestník)",
  type: "document",
  icon: LayoutGrid,
  fields: [
    defineField({
      name: "title",
      title: "Interní název",
      type: "string",
      initialValue: "Stránka služby",
      hidden: true,
    }),
    defineField({
      name: "categories",
      title: "Kategorie služeb",
      type: "array",
      description:
        "Přetáhněte kategorie do požadovaného pořadí. Služby v každé kategorii řaďte také přetažením.",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Název kategorie",
              type: "string",
              description: 'Zobrazí se na webu, např. "Značka & identita"',
              validation: (r) => r.required(),
            }),
            defineField({
              name: "services",
              title: "Služby v kategorii",
              type: "array",
              description:
                "Přetáhněte služby do požadovaného pořadí. Pořadí zde = pořadí na webu.",
              of: [
                {
                  type: "reference",
                  to: [{ type: "sluzba" }],
                },
              ],
              validation: (r) => r.min(1),
            }),
          ],
          preview: {
            select: { title: "label", services: "services" },
            prepare: ({ title, services }) => ({
              title: title || "Kategorie",
              subtitle: `${services?.length ?? 0} služeb`,
            }),
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Stránka služby (rozcestník)",
    }),
  },
});
