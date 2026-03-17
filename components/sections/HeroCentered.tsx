import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroCentered() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)] py-[var(--space-section-hero)]">
      {/* Layered gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,var(--color-glow),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,var(--color-glow-subtle),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
      </div>

      <Container className="relative layout-text">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-[var(--radius-full)] border border-[var(--color-accent)]/20 bg-[var(--color-accent-subtle)] px-4 py-2 text-xs font-semibold text-[var(--color-text-accent)] tracking-wide uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" aria-hidden="true" />
          Now available — v2.0 release
        </div>

        {/* Headline — massive, dramatic */}
        <h1 className="text-[2.5rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-5xl layout-mx">
          Build faster with{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[var(--color-accent)]">design tokens</span>
            <span
              aria-hidden="true"
              className="absolute -inset-x-2 bottom-1 h-3 sm:h-4 bg-[var(--color-accent)]/10 -skew-x-2 rounded-sm"
            />
          </span>
        </h1>

        <p className="mt-7 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-3xl layout-mx leading-relaxed font-[family-name:var(--font-body)]">
          A comprehensive design framework for business websites. Change one
          file, rebrand everything. Pixel&#8209;perfect, responsive, accessible.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row layout-items layout-justify gap-4">
          <Button size="lg">
            Get Started
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button variant="ghost" size="lg" className="text-[var(--color-text-secondary)]">
            <Play size={16} aria-hidden="true" className="text-[var(--color-accent)]" />
            Watch demo
          </Button>
        </div>

        {/* Metrics bar */}
        <div className="mt-[var(--space-block)] pt-[var(--space-grid)] border-t border-[var(--color-border)] grid grid-cols-2 sm:grid-cols-4 gap-[var(--space-grid)] max-w-3xl layout-mx">
          {[
            { value: "24+", label: "Sections" },
            { value: "18", label: "UI Components" },
            { value: "3-layer", label: "Token System" },
            { value: "100%", label: "Responsive" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-[var(--heading-weight)] text-[var(--color-brand)] font-[family-name:var(--font-heading)] tracking-[var(--heading-tracking)]">
                {stat.value}
              </p>
              <p className="text-sm text-[var(--color-text-tertiary)] mt-1.5 font-[family-name:var(--font-body)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
