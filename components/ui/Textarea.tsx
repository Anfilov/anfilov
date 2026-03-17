import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({
  label,
  error,
  id,
  required,
  className = "",
  ...props
}: TextareaProps) {
  const textareaId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  const errorId = error ? `${textareaId}-error` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={textareaId}
        className="text-sm font-medium text-[var(--color-text-primary)] font-[family-name:var(--font-body)]"
      >
        {label}
        {required && (
          <span className="text-[var(--color-error)] ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <textarea
        id={textareaId}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        rows={4}
        className={`
          w-full rounded-[var(--input-radius)]
          border border-[var(--input-border)]
          bg-[var(--input-bg)]
          px-[var(--input-padding-x)] py-[var(--input-padding-y)]
          text-sm text-[var(--color-text-primary)]
          placeholder:text-[var(--color-text-tertiary)]
          font-[family-name:var(--font-body)]
          resize-y min-h-[100px]
          transition-[border-color,box-shadow] duration-[var(--duration-fast)]
          hover:border-[var(--color-border-strong)]
          focus-visible:border-[var(--input-border-focus)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/20 focus-visible:outline-none
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? "border-[var(--color-error)] focus-visible:border-[var(--color-error)] focus-visible:ring-[var(--color-error)]/20" : ""}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p id={errorId} role="alert" className="text-xs text-[var(--color-error)]">
          {error}
        </p>
      )}
    </div>
  );
}
