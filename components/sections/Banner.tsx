"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

export function Banner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="section-contrast relative bg-[var(--sc-bg)] text-[var(--sc-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-3 text-sm">
        <p className="font-medium font-[family-name:var(--font-body)]">
          Introducing our new product line
          <a
            href="#"
            className="inline-flex items-center gap-1 ml-2 underline underline-offset-2 hover:opacity-80 transition-opacity duration-[var(--duration-fast)] cursor-pointer font-semibold"
          >
            Learn more
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        </p>
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss banner"
          className="
            absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
            p-1.5 rounded-[var(--radius-sm)]
            hover:bg-[var(--sc-pill-bg)] transition-colors duration-[var(--duration-fast)]
            cursor-pointer min-h-[44px] min-w-[44px]
            inline-flex items-center justify-center
            focus-visible:ring-2 focus-visible:ring-[var(--sc-text)] focus-visible:outline-none
          "
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
