"use client";

import { useState } from "react";
import { ChevronDown, Layers, Palette, Code2, BarChart3, BookOpen, Headphones } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface MenuCategory {
  title: string;
  items: { label: string; description: string; icon: React.ReactNode }[];
}

const menuData: MenuCategory[] = [
  {
    title: "Product",
    items: [
      { label: "Components", description: "55+ pre-built sections", icon: <Layers size={18} aria-hidden="true" /> },
      { label: "Design Tokens", description: "One-file theming system", icon: <Palette size={18} aria-hidden="true" /> },
      { label: "Developer API", description: "Extend and customize", icon: <Code2 size={18} aria-hidden="true" /> },
      { label: "Analytics", description: "Built-in performance insights", icon: <BarChart3 size={18} aria-hidden="true" /> },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Documentation", description: "Guides and API reference", icon: <BookOpen size={18} aria-hidden="true" /> },
      { label: "Support", description: "Get help from our team", icon: <Headphones size={18} aria-hidden="true" /> },
    ],
  },
];

export function MegaMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav
      className="relative bg-[var(--color-surface-elevated)] border-b border-[var(--color-border)]"
      aria-label="Mega menu example"
    >
      <Container className="flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold tracking-[var(--heading-tracking)] font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] hover:opacity-80 transition-opacity duration-[var(--duration-fast)] cursor-pointer"
        >
          Brand
        </a>

        {/* Menu triggers */}
        <div className="hidden md:flex items-center gap-1">
          {menuData.map((cat, idx) => (
            <div key={cat.title} className="relative">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                className="
                  inline-flex items-center gap-1 px-3 py-2
                  text-sm font-medium text-[var(--color-text-secondary)]
                  hover:text-[var(--color-text-primary)]
                  transition-colors duration-[var(--duration-fast)]
                  cursor-pointer rounded-[var(--radius-md)]
                  min-h-[44px]
                  focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none
                  font-[family-name:var(--font-body)]
                "
              >
                {cat.title}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-[var(--duration-fast)] ${openIndex === idx ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </div>
          ))}
          <a href="#" className="px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--duration-fast)] cursor-pointer rounded-[var(--radius-md)] min-h-[44px] inline-flex items-center focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none font-[family-name:var(--font-body)]">
            Pricing
          </a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--duration-fast)] cursor-pointer rounded-[var(--radius-md)] min-h-[44px] inline-flex items-center focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none font-[family-name:var(--font-body)]">
            Blog
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--duration-fast)] cursor-pointer min-h-[44px] inline-flex items-center focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none rounded-[var(--radius-md)] px-3 font-[family-name:var(--font-body)]">
            Sign in
          </a>
          <a
            href="#"
            className="
              px-4 py-2 text-sm font-semibold
              rounded-[var(--btn-radius)]
              bg-[var(--color-accent)] text-[var(--color-text-on-accent)]
              hover:opacity-90 active:opacity-80
              transition-opacity duration-[var(--duration-fast)]
              cursor-pointer min-h-[44px] inline-flex items-center
              focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none
              font-[family-name:var(--font-heading)]
            "
          >
            Get started
          </a>
        </div>
      </Container>

      {/* Dropdown panel */}
      {openIndex !== null && (
        <div className="absolute left-0 right-0 z-50 bg-[var(--color-surface-elevated)] border-b border-[var(--color-border)] shadow-[var(--shadow-xl)]">
          <Container className="py-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {menuData[openIndex].items.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="
                    group flex items-start gap-3 p-3
                    rounded-[var(--radius-md)]
                    hover:bg-[var(--color-surface-sunken)]
                    transition-colors duration-[var(--duration-fast)]
                    cursor-pointer
                    focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none
                  "
                >
                  <span className="
                    flex-shrink-0 mt-0.5
                    inline-flex items-center justify-center w-9 h-9
                    rounded-[var(--radius-md)]
                    bg-[var(--color-accent)]/10 text-[var(--color-accent)]
                    group-hover:bg-[var(--color-accent)]/15
                    transition-colors duration-[var(--duration-fast)]
                  ">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] group-hover:text-[var(--color-accent)] transition-colors duration-[var(--duration-fast)]">
                      {item.label}
                    </p>
                    <p className="text-xs text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)] mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
