import { Star } from "lucide-react";

interface RatingProps {
  value: number;
  max?: number;
  size?: number;
  label?: string;
  className?: string;
}

export function Rating({
  value,
  max = 5,
  size = 20,
  label,
  className = "",
}: RatingProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 ${className}`}
      role="img"
      aria-label={label ?? `${value} out of ${max} stars`}
    >
      <div className="flex gap-0.5">
        {Array.from({ length: max }, (_, i) => {
          const filled = i < Math.floor(value);
          const half = !filled && i < value;
          return (
            <span key={i} className="relative" style={{ width: size, height: size }}>
              {/* Background (empty) star */}
              <Star
                size={size}
                className="text-[var(--color-border-strong)] absolute inset-0"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              {/* Filled star */}
              {(filled || half) && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: half ? "50%" : "100%" }}
                >
                  <Star
                    size={size}
                    className="text-[var(--color-accent)] fill-[var(--color-accent)]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
              )}
            </span>
          );
        })}
      </div>
      {label && (
        <span className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
          {label}
        </span>
      )}
    </div>
  );
}
