import { TrendingUp, TrendingDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Metric {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  /** CSS clip-path for a sparkline shape (simplified) */
  sparkline: string;
  wide?: boolean;
}

const metrics: Metric[] = [
  {
    label: "Monthly Revenue",
    value: "$284K",
    change: "+12.5%",
    positive: true,
    sparkline: "polygon(0% 80%, 10% 70%, 20% 75%, 30% 50%, 40% 55%, 50% 30%, 60% 35%, 70% 20%, 80% 25%, 90% 10%, 100% 15%, 100% 100%, 0% 100%)",
    wide: true,
  },
  {
    label: "Active Users",
    value: "12.4K",
    change: "+8.3%",
    positive: true,
    sparkline: "polygon(0% 60%, 15% 55%, 30% 40%, 45% 45%, 60% 25%, 75% 30%, 90% 15%, 100% 20%, 100% 100%, 0% 100%)",
  },
  {
    label: "Churn Rate",
    value: "2.1%",
    change: "-0.4%",
    positive: true,
    sparkline: "polygon(0% 30%, 15% 35%, 30% 40%, 45% 50%, 60% 55%, 75% 65%, 90% 70%, 100% 75%, 100% 100%, 0% 100%)",
  },
  {
    label: "Avg. Response Time",
    value: "142ms",
    change: "+18ms",
    positive: false,
    sparkline: "polygon(0% 70%, 15% 60%, 30% 65%, 45% 50%, 60% 55%, 75% 40%, 90% 50%, 100% 35%, 100% 100%, 0% 100%)",
  },
];

export function MetricsGrid() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Metrics"
          title="Performance at a glance"
          subtitle="Real-time data from the last 30 days across all regions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-grid)] max-w-5xl mx-auto">
          {metrics.map((metric) => {
            const TrendIcon = metric.positive ? TrendingUp : TrendingDown;
            return (
              <article
                key={metric.label}
                className={`
                  relative overflow-hidden
                  rounded-[var(--card-radius)] border border-[var(--color-border)]
                  bg-[var(--color-surface-elevated)]
                  p-[var(--card-padding)]
                  ${metric.wide ? "sm:col-span-2" : ""}
                `}
              >
                {/* Sparkline background */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-16 opacity-10"
                  style={{
                    clipPath: metric.sparkline,
                    backgroundColor: metric.positive
                      ? "var(--color-success)"
                      : "var(--color-error)",
                  }}
                />

                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] font-[family-name:var(--font-heading)] mb-3">
                    {metric.label}
                  </p>

                  <div className="flex items-end justify-between gap-4">
                    <span className="text-3xl sm:text-4xl font-[var(--heading-weight)] tracking-[var(--heading-tracking)] font-[family-name:var(--font-heading)] text-[var(--color-text-primary)]">
                      {metric.value}
                    </span>

                    <span
                      className={`
                        inline-flex items-center gap-1 text-sm font-semibold font-[family-name:var(--font-body)]
                        px-2 py-0.5 rounded-[var(--badge-radius)]
                        ${
                          metric.positive
                            ? "text-[var(--color-success)] bg-[var(--color-success-subtle)]"
                            : "text-[var(--color-error)] bg-[var(--color-error-subtle)]"
                        }
                      `}
                    >
                      <TrendIcon size={14} aria-hidden="true" />
                      {metric.change}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
