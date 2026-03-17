import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: "10,000+", label: "teams worldwide" },
  { value: "4.8", label: "average rating", hasStar: true },
  { value: "99.9%", label: "uptime SLA" },
  { value: "< 2 min", label: "avg. setup time" },
];

export function SocialProofBar() {
  return (
    <section className="bg-[var(--color-surface-sunken)] border-y border-[var(--color-border)] py-5 sm:py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] font-[family-name:var(--font-heading)]">
            Trusted by
          </p>

          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-x-8 sm:gap-x-12">
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="hidden sm:block w-px h-6 bg-[var(--color-border)] -ml-4 sm:-ml-6"
                />
              )}
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-[var(--heading-weight)] tracking-[var(--heading-tracking)] font-[family-name:var(--font-heading)] text-[var(--color-text-primary)]">
                  {stat.value}
                </span>
                {stat.hasStar && (
                  <Star
                    size={14}
                    className="text-[var(--color-warning)] fill-[var(--color-warning)]"
                    aria-hidden="true"
                  />
                )}
                <span className="text-xs text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
