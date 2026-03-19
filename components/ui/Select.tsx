import type { SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
}

export function Select({
  label,
  options,
  placeholder = "Select an option",
  error,
  id,
  required,
  className = "",
  ...props
}: SelectProps) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  const errorId = error ? `${selectId}-error` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={selectId}
        className="text-sm font-medium text-[var(--color-text-primary)] font-[family-name:var(--font-body)]"
      >
        {label}
        {required && (
          <span className="text-[var(--color-error)] ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <select
        id={selectId}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={`
          w-full rounded-[var(--input-radius)]
          border border-[var(--input-border)]
          bg-[var(--input-bg)]
          px-[var(--input-padding-x)] py-[var(--input-padding-y)]
          text-sm text-[var(--color-text-primary)]
          font-[family-name:var(--font-body)]
          min-h-[44px]
          cursor-pointer appearance-none
          bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')]
          bg-[position:right_12px_center] bg-no-repeat
          pr-10
          transition-[border-color,box-shadow] duration-[var(--duration-fast)]
          hover:border-[var(--color-border-strong)]
          focus-visible:border-[var(--input-border-focus)] focus-visible:ring-2 focus-visible:ring-[var(--input-focus-ring)] focus-visible:outline-none
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? "border-[var(--color-error)]" : ""}
          ${className}
        `}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} role="alert" className="text-xs text-[var(--color-error)]">
          {error}
        </p>
      )}
    </div>
  );
}
