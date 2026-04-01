import type { ReactNode } from "react";
import type { BlockCategory } from "@/lib/block-registry";
import { categoryLabels } from "@/lib/block-registry";

interface ShowcaseBlockProps {
  name: string;
  category: BlockCategory;
  description: string;
  children: ReactNode;
}

const categoryColors: Record<BlockCategory, string> = {
  hero: "bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]",
  features: "bg-[var(--color-success-subtle)] text-[var(--color-success)]",
  "social-proof":
    "bg-[var(--color-warning-subtle)] text-[var(--color-warning)]",
  content: "bg-[var(--color-surface-sunken)] text-[var(--color-text-secondary)]",
  data: "bg-[var(--color-info-subtle)] text-[var(--color-info)]",
  conversion: "bg-[var(--color-error-subtle)] text-[var(--color-error)]",
  media: "bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]",
  navigation:
    "bg-[var(--color-surface-sunken)] text-[var(--color-text-secondary)]",
  integrations:
    "bg-[var(--color-success-subtle)] text-[var(--color-success)]",
};

export function ShowcaseBlock({
  name,
  category,
  description,
  children,
}: ShowcaseBlockProps) {
  return (
    <div id={name}>
      {/* ── Label bar ── */}
      <div className="relative flex items-center gap-3 px-4 sm:px-6 lg:px-8 py-3 max-w-7xl mx-auto">
        {/* Left line */}
        <span
          className="hidden sm:block w-6 h-px bg-[var(--color-border-strong)]"
          aria-hidden="true"
        />

        {/* Block name */}
        <span className="text-[13px] font-mono font-bold tracking-tight text-[var(--color-text-primary)]">
          {name}
        </span>

        {/* Category badge */}
        <span
          className={`
            inline-flex items-center
            rounded-[var(--badge-radius)]
            px-[var(--badge-padding-x)] py-[var(--badge-padding-y)]
            text-[12px] font-semibold uppercase tracking-[0.08em] leading-none
            ${categoryColors[category]}
          `}
        >
          {categoryLabels[category]}
        </span>

        {/* Description */}
        <span className="hidden md:inline text-[12px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)] truncate">
          {description}
        </span>

        {/* Right line (fills remaining space) */}
        <span
          className="flex-1 h-px bg-[var(--color-border)]"
          aria-hidden="true"
        />
      </div>

      {/* ── Actual block (untouched) ── */}
      {children}
    </div>
  );
}
