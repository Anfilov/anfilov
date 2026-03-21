import { defineType, defineField } from "sanity";
import { FileTextIcon } from "lucide-react";
import { sectionSchemas } from "../sections";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: FileTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Page title",
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
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
    defineField({
      name: "tools",
      title: "Nástroje",
      type: "array",
      description: "Aplikace a nástroje používané u této služby (max 5)",
      of: [{ type: "reference", to: [{ type: "tool" }] }],
      validation: (r) => r.max(5),
    }),
    defineField({
      name: "sections",
      title: "Page sections",
      type: "array",
      description: "Add and reorder sections to build the page.",
      of: sectionSchemas.map((s) => ({ type: s.name })),
    }),
  ],
  preview: {
    select: { title: "title", slug: "slug.current" },
    prepare: ({ title, slug }) => ({
      title: title || "Untitled page",
      subtitle: slug ? `/${slug}` : "No slug",
    }),
  },
});
