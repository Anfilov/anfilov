"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/ui/ThemeProvider";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "/contact" },
];

export function NavbarFloating() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed left-1/2 -translate-x-1/2 z-50
        w-[calc(100%-2rem)] max-w-3xl
        rounded-[var(--radius-pill,9999px)]
        border border-[var(--color-border)]
        bg-[var(--color-surface-elevated)]/80
        backdrop-blur-2xl backdrop-saturate-150
        transition-[box-shadow,top] duration-[var(--duration-normal)] ease-[var(--ease-smooth)]
        ${scrolled ? "top-3 shadow-[var(--shadow-lg)]" : "top-4 shadow-[var(--shadow-md)]"}
      `}
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between h-12 sm:h-14 px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-[var(--heading-tracking)] font-[family-name:var(--font-heading)] text-[var(--color-brand)] hover:opacity-80 transition-opacity duration-[var(--duration-fast)] shrink-0"
        >
          Brand
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="
                  px-3 py-1.5 text-sm font-medium
                  text-[var(--color-text-secondary)]
                  rounded-[var(--radius-pill,9999px)]
                  transition-colors duration-[var(--duration-fast)]
                  hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-sunken)]
                  focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
                  cursor-pointer min-h-[36px] inline-flex items-center
                "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="
              p-1.5 rounded-[var(--radius-pill,9999px)]
              text-[var(--color-text-secondary)]
              hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-sunken)]
              transition-colors duration-[var(--duration-fast)]
              cursor-pointer min-h-[36px] min-w-[36px]
              inline-flex items-center justify-center
              focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
            "
          >
            {theme === "light" ? (
              <Moon size={16} aria-hidden="true" />
            ) : (
              <Sun size={16} aria-hidden="true" />
            )}
          </button>
          <Button size="sm" className="rounded-[var(--radius-pill,9999px)] min-h-[36px] text-xs px-4">
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="
              p-2 rounded-[var(--radius-pill,9999px)]
              text-[var(--color-text-secondary)]
              hover:bg-[var(--color-surface-sunken)]
              cursor-pointer min-h-[44px] min-w-[44px]
              inline-flex items-center justify-center
              focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
            "
          >
            {theme === "light" ? (
              <Moon size={16} aria-hidden="true" />
            ) : (
              <Sun size={16} aria-hidden="true" />
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="
              p-2 rounded-[var(--radius-pill,9999px)]
              text-[var(--color-text-secondary)]
              hover:bg-[var(--color-surface-sunken)]
              cursor-pointer min-h-[44px] min-w-[44px]
              inline-flex items-center justify-center
              focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
            "
          >
            {mobileOpen ? (
              <X size={18} aria-hidden="true" />
            ) : (
              <Menu size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] px-4 py-3">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="
                  px-3 py-2.5 text-sm font-medium
                  text-[var(--color-text-secondary)]
                  rounded-[var(--radius-md)]
                  hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-sunken)]
                  cursor-pointer min-h-[44px] flex items-center
                  transition-colors duration-[var(--duration-fast)]
                "
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 mt-1 border-t border-[var(--color-border)]">
              <Button size="md" className="w-full rounded-[var(--radius-pill,9999px)]">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
