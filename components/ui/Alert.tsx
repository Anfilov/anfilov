import type { ReactNode } from "react";
import { AlertCircle, CheckCircle2, AlertTriangle, Info, X } from "lucide-react";

type AlertVariant = "info" | "success" | "warning" | "error";

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

const variantStyles: Record<AlertVariant, string> = {
  info: "bg-[var(--color-info-subtle)] border-[var(--color-info)]/30 text-[var(--color-info)]",
  success:
    "bg-[var(--color-success-subtle)] border-[var(--color-success)]/30 text-[var(--color-success)]",
  warning:
    "bg-[var(--color-warning-subtle)] border-[var(--color-warning)]/30 text-[var(--color-warning)]",
  error:
    "bg-[var(--color-error-subtle)] border-[var(--color-error)]/30 text-[var(--color-error)]",
};

const variantIcons: Record<AlertVariant, typeof Info> = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle,
};

export function Alert({
  variant = "info",
  title,
  children,
  dismissible = false,
  onDismiss,
  className = "",
}: AlertProps) {
  const Icon = variantIcons[variant];

  return (
    <div
      role="alert"
      className={`
        flex gap-3 rounded-[var(--radius-md)] border px-4 py-3
        ${variantStyles[variant]}
        ${className}
      `}
    >
      <Icon size={20} strokeWidth={1.5} className="shrink-0 mt-0.5" aria-hidden="true" />
      <div className="flex-1 min-w-0">
        {title && (
          <p className="text-sm font-semibold font-[family-name:var(--font-heading)] tracking-tight mb-0.5">
            {title}
          </p>
        )}
        <div className="text-sm font-[family-name:var(--font-body)] opacity-90 leading-relaxed">
          {children}
        </div>
      </div>
      {dismissible && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss alert"
          className="shrink-0 p-1 rounded-[var(--radius-sm)] opacity-60 hover:opacity-100 transition-opacity duration-[var(--duration-fast)] cursor-pointer min-h-[44px] min-w-[44px] inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <X size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
