import { defineQuery } from "next-sanity";

/** Fetch a page by slug, including all sections. */
export const PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    seo,
    sections[] {
      _type,
      _key,
      ...
    }
  }
`);

/** Fetch global site settings (singleton). */
export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0] {
    _id,
    siteName,
    logo,
    navigation[] {
      _key,
      label,
      href,
      external
    },
    ctaButton {
      label,
      href,
      external
    },
    footer {
      description,
      linkGroups[] {
        _key,
        title,
        links[] {
          _key,
          label,
          href,
          external
        }
      },
      copyright
    },
    socialLinks[] {
      _key,
      platform,
      url
    }
  }
`);
