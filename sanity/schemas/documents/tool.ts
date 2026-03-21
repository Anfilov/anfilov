import { defineType, defineField } from "sanity";
import { WrenchIcon } from "lucide-react";

export const tool = defineType({
  name: "tool",
  title: "Nástroj",
  type: "document",
  icon: WrenchIcon,
  fields: [
    defineField({
      name: "name",
      title: "Název nástroje",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "SVG, WebP nebo PNG logo nástroje",
      options: { hotspot: false },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "url",
      title: "URL služby",
      type: "url",
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "logo",
    },
  },
});
