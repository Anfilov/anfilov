import type { SchemaTypeDefinition } from "sanity";

/**
 * Section schemas for the Page Builder.
 *
 * Add section schemas here per project. Each section schema is an `object` type
 * that maps 1:1 to a component in `components/sections/`.
 *
 * Conventions:
 * - File name: kebab-case (e.g. `feature-grid.ts`)
 * - Schema name: camelCase matching the component (e.g. `featureGrid` → `<FeatureGrid />`)
 * - Type: always `object` (not `document`)
 * - Fields mirror the hardcoded data in the component
 * - Icons: use `string` field with description "Lucide icon name (e.g. Palette, Zap)"
 * - Images: use the `imageWithAlt` object type
 *
 * Example:
 * ```ts
 * // sanity/schemas/sections/feature-grid.ts
 * import { defineType, defineField } from "sanity";
 * import { LayoutGrid } from "lucide-react";
 *
 * export const featureGrid = defineType({
 *   name: "featureGrid",
 *   title: "Feature Grid",
 *   type: "object",
 *   icon: LayoutGrid,
 *   fields: [
 *     defineField({ name: "overline", title: "Overline", type: "string" }),
 *     defineField({ name: "title", title: "Title", type: "string", validation: r => r.required() }),
 *     defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
 *     defineField({
 *       name: "features",
 *       title: "Features",
 *       type: "array",
 *       of: [{
 *         type: "object",
 *         fields: [
 *           defineField({ name: "icon", title: "Icon", type: "string", description: "Lucide icon name" }),
 *           defineField({ name: "title", title: "Title", type: "string" }),
 *           defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
 *         ],
 *       }],
 *     }),
 *   ],
 *   preview: {
 *     select: { title: "title" },
 *     prepare: ({ title }) => ({ title: title || "Feature Grid", subtitle: "Features section" }),
 *   },
 * });
 * ```
 *
 * Then add it to the array below:
 * ```ts
 * import { featureGrid } from "./feature-grid";
 * export const sectionSchemas: SchemaTypeDefinition[] = [featureGrid];
 * ```
 */
export const sectionSchemas: SchemaTypeDefinition[] = [];
