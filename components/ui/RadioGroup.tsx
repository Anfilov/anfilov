import type { InputHTMLAttributes } from "react";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  legend: string;
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  required?: boolean;
  className?: string;
}

export function RadioGroup({
  legend,
  name,
  options,
  value,
  onChange,
  required,
  className = "",
}: RadioGroupProps) {
  return (
    <fieldset className={`flex flex-col gap-2 ${className}`}>
      <legend className="text-sm font-medium text-[var(--color-text-primary)] font-[family-name:var(--font-body)] mb-1">
        {legend}
        {required && (
          <span className="text-[var(--color-error)] ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </legend>
      {options.map((opt) => (
        <label
          key={opt.value}
          className="inline-flex items-center gap-2 cursor-pointer select-none min-h-[44px]"
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={onChange}
            aria-required={required || undefined}
            className="
              w-5 h-5
              border border-[var(--input-border)]
              bg-[var(--input-bg)]
              cursor-pointer
              accent-[var(--color-accent)]
              transition-[border-color] duration-[var(--duration-fast)]
              hover:border-[var(--color-border-strong)]
              focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
            "
          />
          <span className="text-sm text-[var(--color-text-primary)] font-[family-name:var(--font-body)]">
            {opt.label}
          </span>
        </label>
      ))}
    </fieldset>
  );
}
