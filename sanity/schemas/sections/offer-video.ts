import { defineType, defineField } from "sanity";
import { PlayCircle } from "lucide-react";

export const offerVideo = defineType({
  name: "offerVideo",
  title: "Video sekce",
  type: "object",
  icon: PlayCircle,
  fields: [
    defineField({
      name: "overline",
      title: "Overline (štítek)",
      type: "string",
      initialValue: "Video",
    }),
    defineField({
      name: "title",
      title: "Nadpis",
      type: "string",
      validation: (r) => r.required(),
      initialValue: "Podívejte se, jak to vypadá v praxi",
    }),
    defineField({
      name: "body",
      title: "Text pod nadpisem",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "ctaLabel",
      title: "Text tlačítka CTA",
      type: "string",
      initialValue: "Chci nabídku",
    }),
    defineField({
      name: "videoSource",
      title: "Zdroj videa",
      type: "string",
      options: {
        list: [
          { title: "YouTube / Vimeo URL", value: "url" },
          { title: "Vlastní embed kód (iframe / script)", value: "embed" },
        ],
        layout: "radio",
      },
      initialValue: "url",
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description:
        "YouTube (youtube.com/watch?v=…, youtu.be/…) nebo Vimeo (vimeo.com/123456) URL.",
      hidden: ({ parent }) => parent?.videoSource !== "url",
      validation: (r) =>
        r.custom((val, ctx) => {
          const parent = ctx.parent as { videoSource?: string } | undefined;
          if (parent?.videoSource === "url" && !val) return "Zadejte URL videa";
          return true;
        }),
    }),
    defineField({
      name: "videoEmbed",
      title: "Embed kód",
      type: "text",
      rows: 6,
      description:
        "Celý HTML snippet — iframe, script tag, nebo kombinace. Bude vložen do stránky tak jak je.",
      hidden: ({ parent }) => parent?.videoSource !== "embed",
      validation: (r) =>
        r.custom((val, ctx) => {
          const parent = ctx.parent as { videoSource?: string } | undefined;
          if (parent?.videoSource === "embed" && !val)
            return "Vložte embed kód";
          return true;
        }),
    }),
  ],
  preview: {
    select: { title: "title", videoSource: "videoSource" },
    prepare: ({ title, videoSource }) => ({
      title: title || "Video sekce",
      subtitle: videoSource === "embed" ? "Vlastní embed" : "YouTube / Vimeo",
    }),
  },
});
