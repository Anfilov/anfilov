import { defineType, defineField } from "sanity";
import { SettingsIcon } from "lucide-react";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: SettingsIcon,
  fields: [
    defineField({
      name: "siteName",
      title: "Site name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "navigation",
      title: "Main navigation",
      type: "array",
      of: [{ type: "link" }],
    }),
    defineField({
      name: "ctaButton",
      title: "Navigation CTA button",
      type: "link",
      description: "Optional call-to-action button in the navbar.",
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        defineField({
          name: "description",
          title: "Footer description",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "linkGroups",
          title: "Link groups",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Group title",
                  type: "string",
                }),
                defineField({
                  name: "links",
                  title: "Links",
                  type: "array",
                  of: [{ type: "link" }],
                }),
              ],
            },
          ],
        }),
        defineField({
          name: "copyright",
          title: "Copyright text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  "facebook",
                  "instagram",
                  "twitter",
                  "linkedin",
                  "youtube",
                  "tiktok",
                  "github",
                ],
              },
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
          ],
          preview: {
            select: { title: "platform", subtitle: "url" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
