import { Container } from "@/components/ui/Container";

const stats = [
  { value: "10K+", label: "Active users" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "150+", label: "Countries" },
  { value: "4.9/5", label: "Customer rating" },
];

export function StatsBar() {
  return (
    <section className="section-contrast relative bg-[var(--sc-bg)] text-[var(--sc-text)] py-[var(--space-section)] overflow-hidden">
      {/* Subtle pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-pattern)_25%,transparent_25%,transparent_50%,var(--color-pattern)_50%,var(--color-pattern)_75%,transparent_75%)] bg-[length:64px_64px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-glow-medium),transparent_60%)]"
      />

      <Container className="relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[var(--space-grid)] lg:gap-[var(--space-grid-lg)]">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative text-center">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-[var(--heading-weight)] tracking-[var(--heading-tracking)] font-[family-name:var(--font-heading)] leading-none">
                {stat.value}
              </p>
              <p className="mt-3 text-sm sm:text-base text-[var(--sc-text-dim)] font-[family-name:var(--font-body)]">
                {stat.label}
              </p>
              {i < stats.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-px h-12 bg-[var(--sc-border)]"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
