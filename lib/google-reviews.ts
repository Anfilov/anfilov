// ---------------------------------------------------------------------------
// Google Places API v1 (New) — Reviews Integration
// Server-side only. Uses ISR caching (1h revalidation).
// ---------------------------------------------------------------------------

export interface GoogleReview {
  author: string;
  authorPhoto: string;
  rating: number;
  text: string;
  relativeTime: string;
}

export interface GoogleReviewsData {
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
}

// ---------------------------------------------------------------------------
// Demo / fallback data — used when API key is not configured
// ---------------------------------------------------------------------------

const DEMO_DATA: GoogleReviewsData = {
  rating: 4.9,
  reviewCount: 127,
  reviews: [
    {
      author: "Martin Dvořák",
      authorPhoto: "",
      rating: 5,
      text: "Simon je profesionál na slovo vzatý. Logo pro naši firmu předčilo všechna očekávání. Rychlá komunikace, precizní práce.",
      relativeTime: "před 2 měsíci",
    },
    {
      author: "Petra Nováková",
      authorPhoto: "",
      rating: 5,
      text: "Kompletní rebranding naší kavárny. Od loga po vizitky — vše perfektně sladěné. Hosté se ptají, kdo nám to dělal.",
      relativeTime: "před 3 měsíci",
    },
    {
      author: "Jan Holub",
      authorPhoto: "",
      rating: 5,
      text: "Spolupráce na webu byla bezproblémová. Simon rozumí nejen designu, ale i businessu. Konverze se zvedly o 40 %.",
      relativeTime: "před 1 měsícem",
    },
    {
      author: "Kateřina Marková",
      authorPhoto: "",
      rating: 4,
      text: "Skvělý brand manuál, který náš tým denně používá. Konečně máme jasná pravidla pro vizuální komunikaci.",
      relativeTime: "před 4 měsíci",
    },
    {
      author: "Tomáš Říha",
      authorPhoto: "",
      rating: 5,
      text: "Třetí projekt se Simonem. Vždy dodá přesně to, co potřebujeme. Osobní přístup, který u agentur nenajdete.",
      relativeTime: "před 2 týdny",
    },
  ],
};

// ---------------------------------------------------------------------------
// Fetch from Google Places API v1
// ---------------------------------------------------------------------------

export async function fetchGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // No credentials → return demo data silently
  if (!apiKey || !placeId) {
    return DEMO_DATA;
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}?languageCode=cs`;
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      next: { revalidate: 3600 }, // ISR: revalidate every 1 hour
    });

    if (!res.ok) {
      console.warn(`[Google Reviews] API returned ${res.status}: ${res.statusText}`);
      return DEMO_DATA;
    }

    const data = await res.json();

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .slice(0, 5)
      .map((r: Record<string, unknown>) => {
        const authorAttribution = r.authorAttribution as Record<string, string> | undefined;
        return {
          author: authorAttribution?.displayName ?? "Anonym",
          authorPhoto: authorAttribution?.photoUri ?? "",
          rating: (r.rating as number) ?? 5,
          text: ((r.text as Record<string, string>)?.text) ?? "",
          relativeTime: (r.relativePublishTimeDescription as string) ?? "",
        };
      });

    return {
      rating: (data.rating as number) ?? DEMO_DATA.rating,
      reviewCount: (data.userRatingCount as number) ?? DEMO_DATA.reviewCount,
      reviews: reviews.length > 0 ? reviews : DEMO_DATA.reviews,
    };
  } catch (error) {
    console.warn("[Google Reviews] Fetch failed, using demo data:", error);
    return DEMO_DATA;
  }
}
