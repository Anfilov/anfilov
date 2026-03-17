import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function HeroMinimal() {
  return (
    <section className="bg-[var(--color-surface)] py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="max-w-4xl layout-mx">
          <Badge variant="accent" className="mb-6">
            Now in public beta
          </Badge>

          <h1
            className="
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              font-[var(--heading-weight)] tracking-[var(--heading-tracking)] leading-[0.95]
              font-[family-name:var(--font-heading)]
              text-[var(--color-text-primary)]
              mb-6 sm:mb-8
            "
          >
            Build websites
            <br />
            <span className="text-[var(--color-accent)]">that matter.</span>
          </h1>

          <p
            className="
              text-lg sm:text-xl
              text-[var(--color-text-secondary)]
              font-[family-name:var(--font-body)]
              leading-relaxed
              max-w-xl
              mb-8 sm:mb-10
            "
          >
            A token-driven design system with 40+ production-ready sections.
            Change one file, transform the entire site.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg">
              Start building
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button variant="outline" size="lg">
              View showcase
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
