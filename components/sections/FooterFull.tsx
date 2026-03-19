"use client";

import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { Container } from "@/components/ui/Container";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
      { label: "Templates", href: "#" },
      { label: "API Reference", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "GDPR", href: "/gdpr" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

const socialLinks = [
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "GitHub", icon: Github, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
];

export function FooterFull() {
  return (
    <footer className="bg-[var(--color-surface-elevated)] border-t border-[var(--color-border)]">
      <Container>
        {/* ── Main grid ── */}
        <div className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <a
              href="#"
              className="
                text-xl font-bold tracking-[var(--heading-tracking)]
                font-[family-name:var(--font-heading)]
                text-[var(--color-text-primary)]
                hover:opacity-80 transition-opacity duration-[var(--duration-fast)]
                cursor-pointer
              "
            >
              Brand
            </a>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] max-w-xs">
              Building the future of web experiences. Ship faster, design
              better, and scale with confidence.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="
                      p-2 rounded-[var(--radius-md)]
                      text-[var(--color-text-tertiary)]
                      hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-sunken)]
                      transition-colors duration-[var(--duration-fast)]
                      cursor-pointer min-h-[44px] min-w-[44px]
                      inline-flex items-center justify-center
                      focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none
                    "
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] mb-4">
                  {col.title}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="
                          text-sm text-[var(--color-text-secondary)]
                          hover:text-[var(--color-text-primary)]
                          transition-colors duration-[var(--duration-fast)]
                          cursor-pointer
                          focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none rounded-[var(--radius-sm)]
                        "
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Newsletter bar ── */}
        <div className="border-t border-[var(--color-border)] py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)]">
              Stay up to date
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)] mt-0.5 font-[family-name:var(--font-body)]">
              Get product updates and news delivered to your inbox.
            </p>
          </div>
          <form
            className="flex w-full sm:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="you@company.com"
              aria-required="true"
              className="
                flex-1 sm:w-56 px-3.5 py-2.5 text-sm
                rounded-l-[var(--radius-md)]
                border border-r-0 border-[var(--color-border)]
                bg-[var(--color-surface)]
                text-[var(--color-text-primary)]
                placeholder:text-[var(--color-text-tertiary)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
                font-[family-name:var(--font-body)]
              "
            />
            <button
              type="submit"
              className="
                px-4 py-2.5 text-sm font-semibold
                rounded-r-[var(--radius-md)]
                bg-[var(--color-accent)] text-[var(--color-text-on-accent)]
                hover:opacity-90 active:opacity-80
                transition-opacity duration-[var(--duration-fast)]
                cursor-pointer min-h-[44px]
                focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none
                font-[family-name:var(--font-heading)]
              "
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* ── Copyright bar ── */}
        <div className="border-t border-[var(--color-border)] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
            &copy; {new Date().getFullYear()} Brand, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/gdpr"
              className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors duration-[var(--duration-fast)] cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none rounded-[var(--radius-sm)]"
            >
              GDPR
            </a>
            <a
              href="/cookies"
              className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors duration-[var(--duration-fast)] cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none rounded-[var(--radius-sm)]"
            >
              Cookies
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
