import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Avatar } from "@/components/ui/Avatar";

export function TestimonialLarge() {
  return (
    <section className="section-contrast relative bg-[var(--sc-bg)] py-[var(--section-padding-y)] overflow-hidden">
      {/* Atmospheric gradient */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--color-glow-medium),transparent_60%)]" />
      </div>

      <Container className="relative max-w-3xl text-center">
        <Quote
          size={48}
          className="mx-auto mb-6 text-[var(--color-accent-light)] opacity-50"
          aria-hidden="true"
        />
        <blockquote>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium leading-snug text-[var(--sc-text)] font-[family-name:var(--font-body)] italic">
            &ldquo;Switching to this framework was the best decision we made
            this year. Our development velocity tripled, our design consistency
            improved dramatically, and we finally have a system our whole team
            understands.&rdquo;
          </p>
          <footer className="mt-8 flex flex-col items-center gap-3">
            <Avatar initials="JW" alt="Jessica Wu" size="lg" />
            <div>
              <cite className="text-base font-bold text-[var(--sc-text)] not-italic block font-[family-name:var(--font-heading)]">
                Jessica Wu
              </cite>
              <p className="text-sm text-[var(--sc-text-dim)] font-[family-name:var(--font-body)]">
                Head of Product, Stark Industries
              </p>
            </div>
          </footer>
        </blockquote>
      </Container>
    </section>
  );
}
