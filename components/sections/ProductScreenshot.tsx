import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function ProductScreenshot() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)] overflow-hidden">
      <Container>
        <div className="layout-text mb-10">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] font-[family-name:var(--font-heading)] mb-3">
            Product preview
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)] text-[var(--color-text-primary)]">
            See it in action
          </h2>
        </div>
      </Container>

      {/* Full-bleed screenshot with app frame */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          <div
            className="
              rounded-[var(--card-radius)] overflow-hidden
              border border-[var(--color-border)]
              shadow-[var(--shadow-xl)]
              bg-[var(--color-surface-elevated)]
              transition-[transform,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-smooth)]
              group-hover:shadow-[var(--shadow-xl)]
            "
          >
            {/* App window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-sunken)]">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-[var(--color-error)]" />
                <span className="w-3 h-3 rounded-full bg-[var(--color-warning)]" />
                <span className="w-3 h-3 rounded-full bg-[var(--color-success)]" />
              </div>
              <div className="flex-1 flex justify-center">
                <span className="text-[11px] text-[var(--color-text-tertiary)] font-mono bg-[var(--color-surface)] rounded-[var(--radius-sm)] px-3 py-1 border border-[var(--color-border)]">
                  app.example.com
                </span>
              </div>
              <div className="w-[54px]" aria-hidden="true" />
            </div>

            {/* Screenshot */}
            <div className="relative aspect-[16/9]">
              <Image
                src="https://placehold.co/1200x675/111111/999999?text=Application+Interface"
                alt="Application interface screenshot showing the main dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1152px"
                unoptimized
              />
            </div>
          </div>

          {/* Ambient glow behind the screenshot */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[var(--radius-2xl)] bg-gradient-to-b from-[var(--color-accent)]/8 to-transparent blur-3xl"
          />
        </div>

        {/* Optional caption */}
        <p className="layout-text mt-6 text-sm text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
          The main dashboard — track all your metrics, manage teams, and configure settings in one place.
        </p>
      </div>
    </section>
  );
}
