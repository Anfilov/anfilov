"use client";

interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export function Toggle({
  label,
  checked,
  onChange,
  className = "",
}: ToggleProps) {
  return (
    <label
      className={`inline-flex items-center gap-3 cursor-pointer select-none min-h-[44px] ${className}`}
    >
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`
          relative inline-flex items-center h-7 w-12 shrink-0 p-[3px]
          rounded-full
          cursor-pointer
          transition-colors duration-[var(--duration-normal)] ease-[var(--ease-smooth)]
          focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
          ${checked ? "bg-[var(--color-accent)]" : "bg-[var(--color-border-strong)]"}
        `}
      >
        <span
          aria-hidden="true"
          className={`
            pointer-events-none inline-block h-[22px] w-[22px]
            rounded-full
            bg-[var(--color-toggle-knob)] shadow-[var(--shadow-sm)]
            transition-transform duration-[var(--duration-normal)] ease-[var(--ease-spring)]
            ${checked ? "translate-x-[20px]" : "translate-x-0"}
          `}
        />
      </button>
      <span className="text-sm text-[var(--color-text-primary)] font-[family-name:var(--font-body)]">
        {label}
      </span>
    </label>
  );
}
