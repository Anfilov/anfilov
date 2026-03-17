import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroVideo() {
  return (
    <section className="section-contrast relative bg-[var(--sc-bg)] text-[var(--sc-text)] py-[var(--section-padding-y)] overflow-hidden">
      {/* Overlay gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--sc-bg)_80%)] opacity-60"
      />

      <Container className="relative layout-text">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[var(--sc-text)]">
          See it in action
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--sc-text-muted)] max-w-xl layout-mx leading-relaxed font-[family-name:var(--font-body)]">
          Watch how teams use our platform to ship faster, stay consistent, and
          delight their customers.
        </p>

        {/* Video placeholder */}
        <div className="mt-12 relative max-w-4xl layout-mx aspect-video rounded-[var(--card-radius)] overflow-hidden bg-black/30 border border-[var(--sc-border)]">
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              aria-label="Play video"
              className="
                w-20 h-20 rounded-[var(--radius-full)]
                bg-[var(--color-accent)] text-[var(--color-text-on-accent)]
                inline-flex items-center justify-center
                cursor-pointer
                shadow-[var(--shadow-xl)]
                hover:scale-110 active:scale-95
                transition-transform duration-[var(--duration-normal)] ease-[var(--ease-spring)]
                focus-visible:ring-2 focus-visible:ring-[var(--sc-text)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--sc-bg)] focus-visible:outline-none
              "
            >
              <Play size={32} aria-hidden="true" className="ml-1" />
            </button>
          </div>
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--sc-border)]"
          >
            <div className="h-full w-1/3 bg-[var(--color-accent)] rounded-[var(--radius-full)]" />
          </div>
        </div>

        <div className="mt-10">
          <Button variant="outline" size="lg" className="border-[var(--sc-border)] text-[var(--sc-text)] hover:bg-[var(--sc-pill-bg)]">
            Schedule a demo
          </Button>
        </div>
      </Container>
    </section>
  );
}
