import type { SchemaTypeDefinition } from "sanity";

// Documents
import { page } from "./documents/page";
import { siteSettings } from "./documents/site-settings";
import { project } from "./documents/project";
import { tool } from "./documents/tool";
import { sluzba } from "./documents/sluzba";
import { glossaryTerm } from "./documents/glossary-term";

// Objects
import { link } from "./objects/link";
import { imageWithAlt } from "./objects/image-with-alt";
import { seo } from "./objects/seo";
import { portableText } from "./objects/portable-text";

// Sections (per-project, see sections/index.ts for conventions)
import { sectionSchemas } from "./sections";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Documents
  page,
  siteSettings,
  project,
  tool,
  sluzba,
  glossaryTerm,
  // Objects
  link,
  imageWithAlt,
  seo,
  portableText,
  // Sections
  ...sectionSchemas,
];
