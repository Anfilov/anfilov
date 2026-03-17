"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/ui/ThemeProvider";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Homepage", href: "/" },
  { label: "Showcase", href: "/showcase" },
  { label: "Brandguide", href: "/brandguide" },
  { label: "Contact", href: "/contact" },
];

/* ── ANFILOV Symbol for nav ── */
function NavLogo({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 360 360" width={size} height={size} aria-hidden="true">
      <path fill="currentColor" d="M281.8,0H78.2C35.01,0,0,35,0,78.16v203.67C0,325,35.01,360,78.2,360h203.6c43.19,0,78.2-35,78.2-78.16V78.16C360,35,324.99,0,281.8,0h0Z"/>
      <path fill="var(--color-surface-elevated)" d="M279.63,33.2c26,0,47.16,21.15,47.16,47.14v199.33c0,25.99-21.16,47.14-47.16,47.14H80.37c-26,0-47.16-21.15-47.16-47.14V80.33c0-25.99,21.16-47.14,47.16-47.14h199.27"/>
      <path fill="currentColor" d="M163.76,92.32h32.24l62.58,168.31h-34.85l-11.62-33.66h-64.48l-11.38,33.66h-34.85l62.35-168.31ZM202.64,198.53l-22.52-65.9h-.47l-22.52,65.9h45.52Z"/>
    </svg>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={mobileOpen ? "active" : undefined}
        className="fixed z-50 w-full px-2 group"
        aria-label="Main navigation"
      >
        {/* ── Scrollable container — shrinks + rounds on scroll ── */}
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-[var(--duration-normal)] lg:px-12",
            isScrolled && "max-w-4xl rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--nav-bg)] backdrop-blur-[20px] lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* ── Logo + mobile toggle ── */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="ANFILOV — domů"
                className="flex items-center gap-2.5 text-[var(--color-brand)] hover:opacity-80 transition-opacity duration-[var(--duration-fast)]"
              >
                <NavLogo size={28} />
                <span className="text-[15px] font-bold tracking-[0.04em] uppercase font-[family-name:var(--font-heading)]">
                  Anfilov
                </span>
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Zavřít menu" : "Otevřít menu"}
                aria-expanded={mobileOpen}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu
                  className={cn(
                    "size-6 transition-all duration-[var(--duration-normal)]",
                    mobileOpen && "rotate-180 scale-0 opacity-0"
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 transition-all duration-[var(--duration-normal)]",
                    mobileOpen && "rotate-0 scale-100 opacity-100"
                  )}
                />
              </button>
            </div>

            {/* ── Desktop centered links ── */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] block transition-colors duration-[var(--duration-fast)] font-[family-name:var(--font-ui)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Right side: theme toggle + CTA ── */}
            <div
              className={cn(
                // Mobile dropdown panel
                "mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-[var(--shadow-lg)] md:flex-nowrap",
                // Desktop: reset to inline
                "lg:m-0 lg:flex lg:w-fit lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                // Mobile open state
                "group-data-[state=active]:block lg:group-data-[state=active]:flex"
              )}
            >
              {/* Mobile nav links */}
              <div className="lg:hidden">
                <ul className="space-y-5 text-base">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] block transition-colors duration-[var(--duration-fast)] font-[family-name:var(--font-ui)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex w-full items-center gap-2 pt-6 border-t border-[var(--color-border)] sm:flex-row md:w-fit lg:pt-0 lg:border-t-0">
                <button
                  onClick={toggle}
                  aria-label={`Přepnout na ${theme === "light" ? "tmavý" : "světlý"} režim`}
                  className="shrink-0 p-2 rounded-[var(--radius-sm)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--duration-fast)] cursor-pointer min-h-[36px] min-w-[36px] inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  {theme === "light" ? (
                    <Moon size={18} strokeWidth={1.5} aria-hidden="true" />
                  ) : (
                    <Sun size={18} strokeWidth={1.5} aria-hidden="true" />
                  )}
                </button>

                <Button size="sm">
                  <Link href="#">Začít</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
