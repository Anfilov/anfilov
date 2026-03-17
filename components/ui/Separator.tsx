interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Separator({
  orientation = "horizontal",
  className = "",
}: SeparatorProps) {
  return (
    <hr
      role="separator"
      aria-orientation={orientation}
      className={`border-none ${
        orientation === "horizontal"
          ? "h-px w-full bg-[var(--color-border)]"
          : "w-px h-full bg-[var(--color-border)] inline-block"
      } ${className}`}
    />
  );
}
