import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

/* ── ANFILOV Button Rules ──
   Primary (forest) = on LIGHT backgrounds → forest-mid bg, cream text
   Secondary (gold)  = visual hierarchy step-down, or primary on DARK bg
   Outline           = border-mid, warm-700 text
   Ghost             = transparent, warm-700 text
   Destructive       = error red
   NEVER gold button on light bg. NEVER forest button on dark bg. */

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-forest-mid)] text-[var(--color-cream)] hover:bg-[var(--color-forest)] active:scale-[0.98] shadow-[var(--shadow-forest-md)] hover:shadow-[var(--shadow-forest-md)]",
  secondary:
    "bg-[var(--color-gold)] text-[var(--color-forest)] hover:bg-[var(--color-gold-hover)] active:scale-[0.98] shadow-[var(--shadow-gold-sm)] hover:shadow-[var(--shadow-gold-md)]",
  outline:
    "border-[1.5px] border-[var(--color-border-strong)] text-[var(--color-text-primary)] bg-transparent hover:bg-[var(--color-surface-sunken)] hover:border-[var(--color-forest-mid)] hover:text-[var(--color-forest-mid)] active:scale-[0.98]",
  ghost:
    "text-[var(--color-text-secondary)] bg-transparent hover:text-[var(--color-forest-mid)] active:scale-[0.98]",
  destructive:
    "bg-[var(--color-error)] text-[var(--color-cream)] hover:brightness-110 active:scale-[0.98] shadow-[var(--shadow-sm)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-[13px] px-[calc(var(--btn-padding-x)*0.7)] py-[calc(var(--btn-padding-y)*0.7)] min-h-[36px]",
  md: "text-[14px] px-[var(--btn-padding-x)] py-[var(--btn-padding-y)] min-h-[44px]",
  lg: "text-[15px] px-[calc(var(--btn-padding-x)*1.3)] py-[calc(var(--btn-padding-y)*1.3)] min-h-[52px]",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold font-[family-name:var(--font-ui)]
        tracking-[0.01em]
        rounded-[var(--btn-radius)]
        cursor-pointer select-none
        transition-[background-color,transform,box-shadow,border-color,color] duration-[var(--duration-normal)] ease-[var(--ease-spring)]
        focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:outline-none
        disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
