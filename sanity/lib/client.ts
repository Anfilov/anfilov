import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

/**
 * Sanity client for fetching data.
 * Uses a dummy projectId when env vars are missing to prevent build errors.
 */
export const client = createClient({
  projectId: projectId || "dummy",
  dataset,
  apiVersion,
  useCdn: true,
});

/** Whether Sanity is configured (env vars present) */
export const isSanityConfigured = Boolean(projectId);
