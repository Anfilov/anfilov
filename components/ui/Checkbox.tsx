"use client";

import type { InputHTMLAttributes } from "react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export function Checkbox({
  label,
  id,
  required,
  className = "",
  ...props
}: CheckboxProps) {
  const checkboxId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label
      htmlFor={checkboxId}
      className={`inline-flex items-center gap-2 cursor-pointer select-none min-h-[44px] ${className}`}
    >
      <input
        type="checkbox"
        id={checkboxId}
        aria-required={required || undefined}
        className="
          w-5 h-5 rounded-[var(--radius-sm)]
          border border-[var(--input-border)]
          bg-[var(--input-bg)]
          cursor-pointer
          accent-[var(--color-accent)]
          transition-[border-color] duration-[var(--duration-fast)]
          hover:border-[var(--color-border-strong)]
          focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
        "
        {...props}
      />
      <span className="text-sm text-[var(--color-text-primary)] font-[family-name:var(--font-body)]">
        {label}
        {required && (
          <span className="text-[var(--color-error)] ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </span>
    </label>
  );
}
