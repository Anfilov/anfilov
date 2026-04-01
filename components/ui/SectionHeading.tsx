import type { ReactNode } from "react";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string | ReactNode;
  /** Explicit alignment override. When omitted, follows global data-layout token. */
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  subtitle,
  align,
  className = "",
}: SectionHeadingProps) {
  /* When align is set explicitly, use hardcoded classes.
     When undefined, use layout-aware utility classes that respond to data-layout on <html>. */
  const isExplicit = align !== undefined;
  const textClass = isExplicit
    ? align === "center" ? "text-center" : "text-left"
    : "layout-text";
  const mxClass = isExplicit
    ? align === "center" ? "mx-auto" : ""
    : "layout-mx";
  const subtitleMxClass = isExplicit
    ? align === "center" ? "mx-auto" : ""
    : "layout-mx";

  return (
    <header
      className={`
        max-w-3xl mb-[var(--space-heading-gap)]
        ${textClass} ${mxClass}
        ${className}
      `}
    >
      {overline && (
        <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-accent)] mb-4 font-[family-name:var(--font-heading)]">
          {overline}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.08]">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-[17px] sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)] max-w-2xl ${subtitleMxClass}`}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
