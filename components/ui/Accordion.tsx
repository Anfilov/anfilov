"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  className = "",
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div
      className={`divide-y divide-[var(--color-border)] border-t border-b border-[var(--color-border)] ${className}`}
    >
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div key={item.id}>
            <button
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              id={`accordion-trigger-${item.id}`}
              className="
                w-full flex items-center justify-between gap-4
                py-4 px-1 text-left cursor-pointer
                text-[var(--color-text-primary)] hover:text-[var(--color-text-accent)]
                transition-colors duration-[var(--duration-fast)]
                focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
                rounded-[var(--radius-sm)]
              "
            >
              <span className="text-sm font-semibold font-[family-name:var(--font-heading)] tracking-tight">
                {item.title}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                className="flex-shrink-0"
              >
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  style={{
                    color: isOpen
                      ? "var(--color-accent)"
                      : "var(--color-text-tertiary)",
                    transition: "color 200ms",
                  }}
                />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-trigger-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: { duration: 0.25, ease: [0, 0, 0.2, 1] },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="pb-4 px-1 text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
