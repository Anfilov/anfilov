"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/ui/ThemeProvider";

const leftLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

const rightLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "/contact" },
];

const allLinks = [...leftLinks, ...rightLinks];

export function NavbarCentered() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const linkClasses = `
    px-3 py-2 text-sm font-medium
    text-[var(--color-text-secondary)]
    rounded-[var(--radius-md)]
    transition-colors duration-[var(--duration-fast)]
    hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-sunken)]
    focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
    cursor-pointer min-h-[44px] inline-flex items-center
  `;

  return (
    <nav
      className="sticky top-0 z-50 h-[var(--nav-height)] border-b border-[var(--nav-border)] bg-[var(--nav-bg)]/95 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <Container className="flex items-center justify-between h-full">
        {/* Left links (desktop) */}
        <ul className="hidden md:flex items-center gap-1 flex-1">
          {leftLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClasses}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Center logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-[var(--heading-tracking)] font-[family-name:var(--font-heading)] text-[var(--color-brand)] hover:opacity-80 transition-opacity duration-[var(--duration-fast)] md:mx-8 shrink-0"
        >
          Brand
        </Link>

        {/* Right links + actions (desktop) */}
        <div className="hidden md:flex items-center justify-end gap-1 flex-1">
          <ul className="flex items-center gap-1">
            {rightLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="w-px h-5 bg-[var(--color-border)] mx-2" aria-hidden="true" />
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="
              p-2 rounded-[var(--radius-md)]
              text-[var(--color-text-secondary)]
              hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-sunken)]
              transition-colors duration-[var(--duration-fast)]
              cursor-pointer min-h-[44px] min-w-[44px]
              inline-flex items-center justify-center
              focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
            "
          >
            {theme === "light" ? (
              <Moon size={18} aria-hidden="true" />
            ) : (
              <Sun size={18} aria-hidden="true" />
            )}
          </button>
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="
              p-2 rounded-[var(--radius-md)]
              text-[var(--color-text-secondary)]
              hover:bg-[var(--color-surface-sunken)]
              cursor-pointer min-h-[44px] min-w-[44px]
              inline-flex items-center justify-center
              focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
            "
          >
            {theme === "light" ? (
              <Moon size={18} aria-hidden="true" />
            ) : (
              <Sun size={18} aria-hidden="true" />
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="
              p-2 rounded-[var(--radius-md)]
              text-[var(--color-text-secondary)]
              hover:bg-[var(--color-surface-sunken)]
              cursor-pointer min-h-[44px] min-w-[44px]
              inline-flex items-center justify-center
              focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
            "
          >
            {mobileOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--nav-bg)]">
          <Container className="py-4 flex flex-col gap-1">
            {allLinks.map((link) => (
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
            <div className="pt-2 mt-2 border-t border-[var(--color-border)]">
              <Button size="md" className="w-full">
                Get Started
              </Button>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
