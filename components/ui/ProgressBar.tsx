interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showValue = false,
  className = "",
}: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {(label || showValue) && (
        <div className="flex justify-between items-center text-sm font-[family-name:var(--font-body)]">
          {label && (
            <span className="text-[var(--color-text-primary)] font-medium">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-[var(--color-text-secondary)]">{Math.round(percent)}%</span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
        className="h-2 w-full rounded-[var(--radius-full)] bg-[var(--color-surface-sunken)] overflow-hidden"
      >
        <div
          className="h-full rounded-[var(--radius-full)] bg-[var(--color-accent)] transition-[width] duration-[var(--duration-slow)] ease-[var(--ease-smooth)]"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
