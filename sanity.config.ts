"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { iconPicker } from "sanity-plugin-icon-picker";
import { schemaTypes } from "./sanity/schemas";
import { structure } from "./sanity/studio/structure";
import { projectId, dataset } from "./sanity/lib/client";

export default defineConfig({
  name: "default",
  title: "ANFILOV Studio",
  projectId,
  dataset,
  basePath: "/studio",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [structureTool({ structure }), visionTool(), iconPicker() as any],
  schema: { types: schemaTypes },
});
