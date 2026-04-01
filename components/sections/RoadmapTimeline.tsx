import { Check, Clock, Circle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type RoadmapStatus = "shipped" | "in-progress" | "planned";

interface RoadmapItem {
  title: string;
  description: string;
  quarter: string;
  status: RoadmapStatus;
}

const roadmap: RoadmapItem[] = [
  {
    title: "Design token system v2",
    description: "Expanded semantic tokens, CSS custom property architecture, and runtime theme switching.",
    quarter: "Q4 2025",
    status: "shipped",
  },
  {
    title: "55+ section library",
    description: "Full block catalogue with showcase page, category grouping, and live previews.",
    quarter: "Q1 2026",
    status: "shipped",
  },
  {
    title: "Visual preset editor",
    description: "GUI for customizing design presets with real-time preview and export to config.",
    quarter: "Q1 2026",
    status: "in-progress",
  },
  {
    title: "Figma plugin sync",
    description: "Two-way sync between Figma design tokens and framework configuration.",
    quarter: "Q2 2026",
    status: "planned",
  },
  {
    title: "AI content assistant",
    description: "Generate placeholder content, copywriting suggestions, and image descriptions.",
    quarter: "Q3 2026",
    status: "planned",
  },
];

const statusConfig: Record<RoadmapStatus, { icon: React.ReactNode; label: string; color: string; dotColor: string }> = {
  shipped: {
    icon: <Check size={14} strokeWidth={2.5} />,
    label: "Shipped",
    color: "text-[var(--color-success)] bg-[var(--color-success-subtle)]",
    dotColor: "bg-[var(--color-success)]",
  },
  "in-progress": {
    icon: <Clock size={14} />,
    label: "In progress",
    color: "text-[var(--color-text-accent)] bg-[var(--color-accent)]/10",
    dotColor: "bg-[var(--color-accent)]",
  },
  planned: {
    icon: <Circle size={14} />,
    label: "Planned",
    color: "text-[var(--color-text-tertiary)] bg-[var(--color-surface-sunken)]",
    dotColor: "bg-[var(--color-text-tertiary)] opacity-40",
  },
};

export function RoadmapTimeline() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Roadmap"
          title="What&rsquo;s next"
          subtitle="Our product roadmap — see what we've shipped, what's in progress, and what's coming."
        />

        <div className="max-w-2xl layout-mx">
          {roadmap.map((item, i) => {
            const config = statusConfig[item.status];
            const isLast = i === roadmap.length - 1;
            return (
              <div key={item.title} className="relative flex gap-5">
                {/* Timeline line + dot */}
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1.5 ${config.dotColor}`} />
                  {!isLast && (
                    <div className="w-px flex-1 bg-[var(--color-border)]" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-8 ${isLast ? "pb-0" : ""}`}>
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="text-base font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-[var(--heading-tracking)]">
                      {item.title}
                    </h3>
                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded-full ${config.color}`}>
                      {config.icon}
                      {config.label}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] font-[family-name:var(--font-heading)] mb-2">
                    {item.quarter}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
