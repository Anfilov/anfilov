import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function HeroProduct() {
  return (
    <section className="relative bg-[var(--color-surface)] py-[var(--space-section-hero)] overflow-hidden">
      {/* Subtle gradient backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,var(--color-accent-subtle),transparent_60%)]"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-block)] items-center">
          {/* Text column */}
          <div>
            <Badge variant="accent" className="mb-6">
              <Sparkles size={12} aria-hidden="true" className="mr-1.5" />
              Now in public beta
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--heading-weight)] tracking-[var(--heading-tracking)] leading-[var(--heading-line-height)] font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-6">
              Ship products{" "}
              <span className="text-[var(--color-accent)]">faster</span>
            </h1>

            <p className="text-lg text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed max-w-lg mb-8">
              The all-in-one platform that helps your team go from idea to
              production in days, not months. Built for modern development
              workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg">
                Get started free
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button variant="outline" size="lg">
                View demo
              </Button>
            </div>
          </div>

          {/* Product screenshot in browser chrome */}
          <div className="relative">
            <div
              className="
                rounded-[var(--card-radius)] overflow-hidden
                border border-[var(--color-border)]
                shadow-[var(--shadow-xl)]
                bg-[var(--color-surface-elevated)]
              "
            >
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-sunken)]">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="w-3 h-3 rounded-full bg-[var(--color-error)]" />
                  <span className="w-3 h-3 rounded-full bg-[var(--color-warning)]" />
                  <span className="w-3 h-3 rounded-full bg-[var(--color-success)]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-[11px] text-[var(--color-text-tertiary)] font-mono bg-[var(--color-surface)] rounded-[var(--radius-sm)] px-3 py-1 border border-[var(--color-border)]">
                    app.example.com/dashboard
                  </span>
                </div>
              </div>

              {/* Screenshot area */}
              <div className="relative aspect-[16/10]">
                <Image
                  src="https://placehold.co/960x600/111111/999999?text=Product+Dashboard"
                  alt="Product dashboard screenshot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </div>

            {/* Floating shadow behind */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[var(--radius-2xl)] bg-[var(--color-accent)]/5 blur-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
