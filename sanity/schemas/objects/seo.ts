import { defineType, defineField } from "sanity";
import { SearchIcon } from "lucide-react";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  icon: SearchIcon,
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      description: "Override the page title for search engines (max 60 chars).",
      validation: (r) => r.max(60),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 3,
      description: "Short description for search results (max 160 chars).",
      validation: (r) => r.max(160),
    }),
    defineField({
      name: "ogImage",
      title: "Social share image",
      type: "image",
      description: "1200×630px recommended.",
    }),
  ],
});
