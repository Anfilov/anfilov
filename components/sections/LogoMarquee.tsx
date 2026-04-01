import { Container } from "@/components/ui/Container";

const logos = [
  "Vercel",
  "Stripe",
  "Notion",
  "Linear",
  "Figma",
  "Supabase",
  "Resend",
  "Clerk",
  "Planetscale",
  "Railway",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const direction = reverse ? "marquee-scroll-reverse" : "marquee-scroll";
  const speed = reverse ? "35s" : "30s";

  return (
    <div className="relative overflow-hidden">
      {/* Gradient fade edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-[var(--color-surface-elevated)] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-[var(--color-surface-elevated)] to-transparent"
      />

      <div
        className="flex w-max gap-x-10 sm:gap-x-16 hover:[animation-play-state:paused]"
        style={{
          animation: `${direction} ${speed} linear infinite`,
        }}
      >
        {/* Duplicate logos for seamless loop */}
        {[...logos, ...logos].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="
              text-lg sm:text-2xl font-[var(--heading-weight)] tracking-[var(--heading-tracking)]
              font-[family-name:var(--font-heading)]
              text-[var(--color-text-primary)]
              opacity-30
              hover:opacity-60
              transition-opacity duration-[var(--duration-normal)]
              cursor-default select-none whitespace-nowrap
              py-4
            "
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--space-section-compact)]">
      <Container>
        <p className="layout-text text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] mb-8 font-[family-name:var(--font-heading)]">
          Powering the best teams in the world
        </p>
      </Container>

      <div className="space-y-2">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
