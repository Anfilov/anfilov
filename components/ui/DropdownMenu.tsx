"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";

interface DropdownItem {
  label: string;
  onClick?: () => void;
  icon?: ReactNode;
  destructive?: boolean;
  separator?: boolean;
}

interface DropdownMenuProps {
  trigger: ReactNode;
  items: DropdownItem[];
  align?: "left" | "right";
  className?: string;
}

export function DropdownMenu({
  trigger,
  items,
  align = "left",
  className = "",
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [open]);

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      <div onClick={() => setOpen((prev) => !prev)}>{trigger}</div>

      {open && (
        <div
          role="menu"
          className={`
            absolute z-50 mt-1.5 min-w-[180px]
            bg-[var(--card-bg)] border border-[var(--card-border)]
            rounded-[var(--card-radius)] shadow-[var(--shadow-lg)]
            py-1 overflow-hidden
            ${align === "right" ? "right-0" : "left-0"}
          `}
        >
          {items.map((item, i) => {
            if (item.separator) {
              return (
                <div
                  key={i}
                  className="my-1 h-px bg-[var(--color-border)]"
                  role="separator"
                />
              );
            }
            return (
              <button
                key={i}
                role="menuitem"
                onClick={() => {
                  item.onClick?.();
                  setOpen(false);
                }}
                className={`
                  w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left
                  font-[family-name:var(--font-body)]
                  transition-colors duration-[var(--duration-fast)] cursor-pointer
                  focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-0 focus-visible:outline-none
                  ${
                    item.destructive
                      ? "text-[var(--color-error)] hover:bg-[var(--color-error-subtle)]"
                      : "text-[var(--color-text-primary)] hover:bg-[var(--color-surface-sunken)]"
                  }
                `}
              >
                {item.icon && (
                  <span className="shrink-0 opacity-60" aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
