import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroGradient() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface-dark)] py-24 sm:py-32 lg:py-40">
      {/* Gradient mesh background */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -top-1/2 -left-1/4 w-[80%] h-[80%] rounded-full bg-[var(--color-accent)] opacity-20 blur-[120px]" />
        <div className="absolute -bottom-1/3 -right-1/4 w-[60%] h-[60%] rounded-full bg-[var(--color-accent)] opacity-15 blur-[100px]" />
        <div className="absolute top-1/4 right-1/3 w-[40%] h-[40%] rounded-full bg-[var(--color-surface)] opacity-5 blur-[80px]" />
      </div>

      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      <Container className="relative z-10 layout-text">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[var(--badge-radius)] bg-[var(--color-cream)]/10 backdrop-blur-sm border border-[var(--color-cream)]/10 mb-8">
          <Sparkles size={14} className="text-[var(--color-accent)]" aria-hidden="true" />
          <span className="text-xs font-semibold text-[var(--color-cream)]/80 font-[family-name:var(--font-heading)] tracking-wide">
            Now in public beta
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[var(--color-cream)] max-w-4xl layout-mx">
          Build websites that{" "}
          <span className="text-[var(--color-accent)]">stand out</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[var(--color-cream)]/70 max-w-2xl layout-mx font-[family-name:var(--font-body)] leading-relaxed">
          A design-first framework with 55+ production-ready sections,
          token-driven theming, and one-click presets. From concept to
          deployment in minutes.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 layout-justify">
          <Button variant="secondary" size="lg">
            Get started free
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button variant="outline" size="lg" className="border-[var(--color-cream)]/20 text-[var(--color-cream)] hover:bg-[var(--color-cream)]/10 hover:border-[var(--color-cream)]/30">
            View showcase
          </Button>
        </div>

        {/* Trust line */}
        <p className="mt-12 text-xs text-[var(--color-cream)]/40 font-[family-name:var(--font-body)]">
          No credit card required &middot; Free plan available &middot; 14-day Pro trial
        </p>
      </Container>
    </section>
  );
}
