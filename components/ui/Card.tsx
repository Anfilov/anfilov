import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <article
      className={`
        bg-[var(--card-bg)] rounded-[var(--card-radius)]
        border border-[var(--card-border)]
        shadow-[var(--card-shadow)]
        overflow-hidden
        ${hover ? "hover-effect" : ""}
        ${className}
      `}
    >
      {children}
    </article>
  );
}

export function CardHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <header className={`p-[var(--card-padding)] pb-0 ${className}`}>
      {children}
    </header>
  );
}

export function CardBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`p-[var(--card-padding)] ${className}`}>{children}</div>
  );
}

export function CardFooter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <footer
      className={`p-[var(--card-padding)] pt-0 mt-auto ${className}`}
    >
      {children}
    </footer>
  );
}
