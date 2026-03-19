"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { GoogleReview } from "@/lib/google-reviews";

interface Props {
  reviews: GoogleReview[];
  rating: number;
  reviewCount: number;
  googleReviewsUrl?: string;
}

/** Blok — Google Reviews marquee. Animované recenze s Google badge. */
export function OfferReviews({ reviews, rating, reviewCount, googleReviewsUrl = "#" }: Props) {
  const [paused, setPaused] = useState(false);

  if (!reviews.length) return null;

  return (
    <section className="bg-[var(--color-surface)]" style={{ paddingTop: "calc(var(--section-padding-y) / 2)", paddingBottom: "var(--section-padding-y)" }}>
      <Container>
        <header className="max-w-[680px] mb-[var(--space-heading-gap)]">
          <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
            Recenze
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em] mb-4">
            Co říkají klienti
          </h2>
          {/* Google Reviews element — same as Hero */}
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 no-underline hover:opacity-80 transition-opacity duration-[var(--duration-fast)]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-label="Google" className="flex-shrink-0">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < Math.round(rating)
                      ? "text-[var(--color-gold)] fill-[var(--color-gold)]"
                      : "text-[var(--color-border)]"
                  }
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-base font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)]">
              {rating}
            </span>
            <span className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-ui)]">
              ({reviewCount} recenzí)
            </span>
          </a>
        </header>
      </Container>

      <MarqueeRow
        items={reviews}
        speed="55s"
        paused={paused}
        onHover={() => setPaused(true)}
        onLeave={() => setPaused(false)}
        googleReviewsUrl={googleReviewsUrl}
      />
    </section>
  );
}

// ---------------------------------------------------------------------------
// MarqueeRow
// ---------------------------------------------------------------------------

function MarqueeRow({
  items,
  reverse = false,
  speed = "50s",
  paused,
  onHover,
  onLeave,
  googleReviewsUrl,
}: {
  items: GoogleReview[];
  reverse?: boolean;
  speed?: string;
  paused: boolean;
  onHover: () => void;
  onLeave: () => void;
  googleReviewsUrl: string;
}) {
  const direction = reverse ? "marquee-scroll-reverse" : "marquee-scroll";
  const tripled = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-[var(--color-surface)] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-[var(--color-surface)] to-transparent"
      />

      <div
        className="flex w-max gap-[var(--space-grid)]"
        style={{
          animation: `${direction} ${speed} linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {tripled.map((review, i) => (
          <ReviewCard key={`${review.author}-${i}`} review={review} ariaHidden={i >= items.length} googleReviewsUrl={googleReviewsUrl} />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ReviewCard — each card is a link to Google Reviews
// ---------------------------------------------------------------------------

function ReviewCard({ review, ariaHidden, googleReviewsUrl }: { review: GoogleReview; ariaHidden: boolean; googleReviewsUrl: string }) {
  const initials = review.author
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <a
      href={googleReviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={ariaHidden || undefined}
      className="
        w-[300px] sm:w-[360px] flex-shrink-0
        p-5 rounded-[var(--card-radius)]
        bg-[var(--color-surface-elevated)] border border-[var(--color-border)]
        flex flex-col no-underline
        transition-[border-color,box-shadow] duration-[var(--duration-slow)] ease-[var(--ease-spring)]
        hover:border-[var(--color-border-accent)] hover:shadow-[var(--shadow-gold-sm)]
      "
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={13}
            className={
              i < review.rating
                ? "text-[var(--color-gold)] fill-[var(--color-gold)]"
                : "text-[var(--color-border)]"
            }
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-[var(--color-text-primary)] leading-relaxed font-[family-name:var(--font-body)] flex-1">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Footer */}
      <footer className="mt-3 pt-3 border-t border-[var(--color-border)] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {review.authorPhoto && review.authorPhoto.startsWith("http") ? (
            <img
              src={review.authorPhoto}
              alt={review.author}
              className="w-8 h-8 rounded-[22%] object-cover bg-[var(--color-surface-sunken)]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <span className="w-8 h-8 rounded-[22%] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] text-[11px] font-bold font-[family-name:var(--font-heading)] inline-flex items-center justify-center">
              {initials}
            </span>
          )}
          <div>
            <cite className="text-xs font-semibold text-[var(--color-text-primary)] not-italic font-[family-name:var(--font-heading)]">
              {review.author}
            </cite>
            <p className="text-[11px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-ui)]">
              {review.relativeTime}
            </p>
          </div>
        </div>

        {/* Google "G" logo */}
        <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google" className="flex-shrink-0">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </footer>
    </a>
  );
}
