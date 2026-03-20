import type { SchemaTypeDefinition } from "sanity";

// Documents
import { page } from "./documents/page";
import { siteSettings } from "./documents/site-settings";
import { project } from "./documents/project";

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
  // Objects
  link,
  imageWithAlt,
  seo,
  portableText,
  // Sections
  ...sectionSchemas,
];
