import { Github, Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Separator } from "@/components/ui/Separator";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Team", href: "#team" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "FAQ", href: "#faq" },
      { label: "Support", href: "#contact" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "GitHub", icon: Github, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer className="section-contrast bg-[var(--sc-bg)] text-[var(--sc-text)] pt-[var(--space-section)] pb-[var(--space-element)]">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-[var(--space-grid)] lg:gap-[var(--space-grid-lg)]">
          {/* Brand col */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <a
              href="#"
              className="text-xl font-bold tracking-[var(--heading-tracking)] font-[family-name:var(--font-heading)] hover:opacity-80 transition-opacity duration-[var(--duration-fast)] cursor-pointer"
            >
              Brand
            </a>
            <p className="mt-3 text-sm text-[var(--sc-text-muted)] leading-relaxed font-[family-name:var(--font-body)] max-w-xs">
              A comprehensive design framework for business websites, driven by
              design tokens.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold mb-3 text-[var(--sc-text)]">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="
                        text-sm text-[var(--sc-text-muted)]
                        hover:text-[var(--sc-text)]
                        transition-colors duration-[var(--duration-fast)]
                        cursor-pointer
                        focus-visible:ring-2 focus-visible:ring-[var(--sc-text)] focus-visible:outline-none rounded-[var(--radius-sm)]
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

        <Separator className="my-8 !bg-[var(--sc-border)]" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--sc-text-dimmer)] font-[family-name:var(--font-body)]">
            &copy; {new Date().getFullYear()} Brand. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="
                    p-2 rounded-[var(--radius-md)]
                    text-[var(--sc-text-dimmer)]
                    hover:text-[var(--sc-text)] hover:bg-[var(--sc-pill-bg)]
                    transition-colors duration-[var(--duration-fast)]
                    cursor-pointer min-h-[44px] min-w-[44px]
                    inline-flex items-center justify-center
                    focus-visible:ring-2 focus-visible:ring-[var(--sc-text)] focus-visible:outline-none
                  "
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
