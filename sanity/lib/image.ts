import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "./client";

const builder = imageUrlBuilder(client);

/** Generate an image URL from a Sanity image reference. */
export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
