import type { ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
  position?: "top" | "bottom";
  className?: string;
}

export function Tooltip({
  text,
  children,
  position = "top",
  className = "",
}: TooltipProps) {
  return (
    <span className={`relative inline-flex group ${className}`}>
      {children}
      <span
        role="tooltip"
        className={`
          pointer-events-none absolute left-1/2 -translate-x-1/2
          z-50 px-2.5 py-1.5
          text-xs font-medium whitespace-nowrap
          bg-[var(--color-surface-dark)] text-[var(--color-text-inverse)]
          rounded-[var(--radius-sm)] shadow-[var(--shadow-md)]
          opacity-0 scale-95
          transition-[opacity,transform] duration-[var(--duration-fast)] ease-[var(--ease-spring)]
          group-hover:opacity-100 group-hover:scale-100
          group-focus-within:opacity-100 group-focus-within:scale-100
          ${position === "top" ? "bottom-full mb-2" : "top-full mt-2"}
        `}
      >
        {text}
      </span>
    </span>
  );
}
