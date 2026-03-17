const phrases = [
  "Design tokens",
  "Pixel-perfect",
  "Ship faster",
  "Zero compromise",
  "Built to scale",
  "Token-driven",
];

export function TextMarquee() {
  return (
    <section
      className="bg-[var(--color-brand)] py-5 sm:py-6 overflow-hidden select-none"
      aria-label="Scrolling tagline"
    >
      <div
        className="flex w-max gap-x-8 sm:gap-x-12 hover:[animation-play-state:paused]"
        style={{
          animation: "marquee-scroll 25s linear infinite",
        }}
      >
        {/* Triple duplicate for seamless loop */}
        {[...phrases, ...phrases, ...phrases].map((phrase, i) => (
          <span
            key={`${phrase}-${i}`}
            className="
              flex items-center gap-8 sm:gap-12
              text-xl sm:text-2xl lg:text-3xl font-[var(--heading-weight)] tracking-[var(--heading-tracking)]
              font-[family-name:var(--font-heading)]
              text-[var(--color-surface)] whitespace-nowrap
            "
          >
            {phrase}
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full bg-[var(--color-surface)] opacity-40 shrink-0"
            />
          </span>
        ))}
      </div>
    </section>
  );
}
