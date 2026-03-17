import type { ReactNode } from "react";

type BadgeVariant = "default" | "accent" | "success" | "warning" | "error" | "outline";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-[var(--color-surface-sunken)] text-[var(--color-text-secondary)]",
  accent:
    "bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]",
  success:
    "bg-[var(--color-success-subtle)] text-[var(--color-success)]",
  warning:
    "bg-[var(--color-warning-subtle)] text-[var(--color-warning)]",
  error:
    "bg-[var(--color-error-subtle)] text-[var(--color-error)]",
  outline:
    "bg-transparent border border-[var(--color-border-strong)] text-[var(--color-text-secondary)]",
};

export function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        rounded-[var(--badge-radius)]
        px-[var(--badge-padding-x)] py-[var(--badge-padding-y)]
        text-xs font-medium leading-none
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
