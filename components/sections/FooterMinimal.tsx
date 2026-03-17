import { Github, Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Separator } from "@/components/ui/Separator";

const links = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

const socialLinks = [
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "GitHub", icon: Github, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
];

export function FooterMinimal() {
  return (
    <footer className="bg-[var(--color-surface-elevated)]">
      <Container>
        <Separator />
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <a
            href="#"
            className="text-base font-bold tracking-[var(--heading-tracking)] font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] hover:opacity-80 transition-opacity duration-[var(--duration-fast)] cursor-pointer"
          >
            Brand
          </a>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {links.map((link) => (
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
          </nav>

          {/* Social icons */}
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
      </Container>
    </footer>
  );
}
