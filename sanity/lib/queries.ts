import { client } from "./client";

// ---------------------------------------------------------------------------
// Shared GROQ fragments
// ---------------------------------------------------------------------------

const imageFields = `
  image {
    image { asset->, hotspot, crop },
    alt,
    caption
  }
`;

const projectFields = `
  _id,
  title,
  "slug": slug.current,
  client,
  year,
  category,
  ${imageFields},
  gallery[] {
    image { asset->, hotspot, crop },
    alt,
    caption
  },
  description,
  tags,
  featured,
  order,
  result,
  testimonial,
  services[]->{ _id, title, "slug": slug.current },
  externalUrl
`;

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------

/** All projects sorted by order (ascending), then year (descending). */
export async function getAllProjects() {
  return client.fetch(
    `*[_type == "project"] | order(order asc, year desc) { ${projectFields} }`,
  );
}

/** Only featured projects. */
export async function getFeaturedProjects() {
  return client.fetch(
    `*[_type == "project" && featured == true] | order(order asc, year desc) { ${projectFields} }`,
  );
}

/** Projects filtered by category. */
export async function getProjectsByCategory(category: string) {
  return client.fetch(
    `*[_type == "project" && category == $category] | order(order asc, year desc) { ${projectFields} }`,
    { category },
  );
}

/** Single project by slug. */
export async function getProjectBySlug(slug: string) {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] { ${projectFields} }`,
    { slug },
  );
}

// ---------------------------------------------------------------------------
// Tools for a page (nabídka)
// ---------------------------------------------------------------------------

const toolFields = `
  _id,
  name,
  url,
  "logoUrl": logo.asset->url
`;

/** Tools referenced by a page slug. Returns ordered array (max 5). */
export async function getToolsForPage(slug: string) {
  return client.fetch(
    `*[_type == "page" && slug.current == $slug][0].tools[]->{ ${toolFields} }`,
    { slug },
  );
}

/** First N projects for portfolio preview (e.g. on offer pages). */
export async function getTopProjects(limit = 6) {
  return client.fetch(
    `*[_type == "project"] | order(order asc, year desc) [0...$limit] {
      _id,
      title,
      "slug": slug.current,
      client,
      description,
      result,
      ${imageFields},
      gallery[] {
        image { asset->, hotspot, crop },
        alt,
        caption
      }
    }`,
    { limit },
  );
}

/** All unique project slugs (for static generation). */
export async function getAllProjectSlugs(): Promise<string[]> {
  return client.fetch(
    `*[_type == "project"].slug.current`,
  );
}

// ---------------------------------------------------------------------------
// Služby (service pages)
// ---------------------------------------------------------------------------

const sluzbaFields = `
  _id,
  name,
  "slug": slug.current,
  category,
  categoryOrder,
  heroTitle,
  heroSubheadline,
  heroMediaType,
  heroImage {
    image { asset->, hotspot, crop },
    alt
  },
  heroVideo { asset-> { url } },
  heroVideoLoop,
  heroEmbed,
  heroPriceLabel,
  heroProjectsLabel,
  heroDeliveryLabel,
  atomicAnswer,
  metaTitle,
  metaDescription,
  problemOverline,
  problemTitle,
  problemItems[] {
    "imageUrl": image.asset->url,
    text
  },
  reseniOverline,
  reseniTitle,
  reseniItems[] { title, text },
  reseniMediaType,
  reseniImage {
    image { asset->, hotspot, crop },
    alt,
    caption
  },
  reseniIcon,
  reseniEmbed,
  procesOverline,
  procesTitle,
  procesSteps[] { title, days, text },
  videoOverline,
  videoTitle,
  videoBody,
  videoSource,
  videoUrl,
  videoEmbed,
  portfolioOverline,
  portfolioTitle,
  portfolioProjects[]-> {
    _id,
    title,
    "slug": slug.current,
    client,
    description,
    result,
    externalUrl,
    ${imageFields},
    gallery[] {
      image { asset->, hotspot, crop },
      alt,
      caption
    }
  },
  cenikOverline,
  cenikTitle,
  cenikSubtitle,
  cenikPriceTitle,
  cenikPriceLabel,
  cenikIncludedTitle,
  cenikIncludedItems[] { name, desc },
  cenikTableTitle,
  cenikTableColumns,
  cenikTableRows[] { criterion, scores },
  cenikTableNote,
  nastrojeOverline,
  nastrojeTitle,
  nastrojeItems[]-> { ${toolFields} },
  faqOverline,
  faqTitle,
  faqItems[] { question, answer }
`;

/** Single služba by slug. */
export async function getSluzbaBySlug(slug: string) {
  return client.fetch(
    `*[_type == "sluzba" && slug.current == $slug][0] { ${sluzbaFields} }`,
    { slug },
  );
}

/** All služba slugs (for static generation). */
export async function getAllSluzbaSlugs(): Promise<string[]> {
  return client.fetch(`*[_type == "sluzba"].slug.current`);
}

// ---------------------------------------------------------------------------
// Glossary (slovník)
// ---------------------------------------------------------------------------

const glossaryTermFields = `
  _id,
  term,
  "slug": slug.current,
  aliases,
  category,
  shortDefinition,
  hasDetailPage
`;

const glossaryDetailFields = `
  ${glossaryTermFields},
  extendedDescription,
  practicalUse,
  image {
    image { asset->, hotspot, crop },
    alt
  },
  relatedTerms[]-> { _id, term, "slug": slug.current, hasDetailPage, shortDefinition, category },
  relatedServices[]-> { _id, name, "slug": slug.current, heroTitle, heroPriceLabel },
  metaTitle,
  metaDescription
`;

/** All glossary terms (for hub page). */
export async function getAllGlossaryTerms() {
  return client.fetch(
    `*[_type == "glossaryTerm"] | order(term asc) { ${glossaryTermFields} }`,
  );
}

/** Single glossary term by slug (for detail page). */
export async function getGlossaryTermBySlug(slug: string) {
  return client.fetch(
    `*[_type == "glossaryTerm" && slug.current == $slug][0] { ${glossaryDetailFields} }`,
    { slug },
  );
}

/** All glossary detail slugs (for static generation — only hasDetailPage). */
export async function getAllGlossaryDetailSlugs(): Promise<string[]> {
  return client.fetch(
    `*[_type == "glossaryTerm" && hasDetailPage == true].slug.current`,
  );
}
