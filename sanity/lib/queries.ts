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
