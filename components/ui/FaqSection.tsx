"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  items: FaqItem[];
  className?: string;
}

// ---------------------------------------------------------------------------
// FaqSection — ANFILOV-styled animated FAQ
// ---------------------------------------------------------------------------

export function FaqSection({ items, className = "" }: FaqSectionProps) {
  return (
    <div className={`divide-y divide-[var(--color-border)] ${className}`}>
      {items.map((item, index) => (
        <FaqItemRow
          key={index}
          question={item.question}
          answer={item.answer}
          index={index}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// FaqItemRow — single accordion row
// ---------------------------------------------------------------------------

function FaqItemRow({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.05 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="
          w-full flex items-center justify-between gap-6
          py-5 sm:py-6 text-left
          cursor-pointer select-none
          focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:outline-none
          rounded-[var(--radius-sm)]
        "
      >
        <h3
          className="text-[15px] sm:text-base font-bold font-[family-name:var(--font-heading)] tracking-tight"
          style={{
            color: isOpen ? "var(--color-gold)" : "var(--color-text-primary)",
            transition: "color 200ms",
          }}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDown
            size={18}
            strokeWidth={2}
            aria-hidden="true"
            style={{
              color: isOpen ? "var(--color-gold)" : "var(--color-text-tertiary)",
              transition: "color 200ms",
            }}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
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
            <motion.p
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="pb-5 sm:pb-6 pr-14 text-[15px] text-[var(--color-text-secondary)] leading-[1.65] font-[family-name:var(--font-body)]"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
