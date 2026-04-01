import { Linkedin, Instagram, Facebook } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Separator } from "@/components/ui/Separator";

/* ── ANFILOV Symbol — White outline (for dark bg) ── */
function AnfilovSymbol({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 360 360" width={size} height={size} aria-hidden="true">
      <path
        fill="#fff"
        d="M281.8,0H78.2C35.01,0,0,35,0,78.16v203.67C0,325,35.01,360,78.2,360h203.6c43.19,0,78.2-35,78.2-78.16V78.16C360,35,324.99,0,281.8,0ZM326.79,279.67c0,25.99-21.16,47.14-47.16,47.14H80.37c-26,0-47.16-21.15-47.16-47.14V80.33c0-25.99,21.16-47.14,47.16-47.14h199.27c26,0,47.16,21.15,47.16,47.14v199.33Z"
      />
      <path
        fill="#fff"
        d="M163.76,92.32h32.24l62.58,168.31h-34.85l-11.62-33.66h-64.48l-11.38,33.66h-34.85l62.35-168.31ZM202.64,198.53l-22.52-65.9h-.47l-22.52,65.9h45.52Z"
      />
    </svg>
  );
}

/* ── Pinterest icon — matches Lucide style (line, 1.5px stroke, round caps) ── */
function PinterestIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 12a4 4 0 1 1 8 0c0 3-2 5-4 5s-2.5-1-2.5-1" />
      <path d="M9.5 15.5 8 21" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

const footerLinks = [
  {
    title: "Kontakt",
    links: [
      { label: "simon@anfilov.cz", href: "mailto:simon@anfilov.cz" },
      { label: "+420 602 26 26 33", href: "tel:+420602262633" },
    ],
  },
  {
    title: "Nabídka",
    links: [
      { label: "Služby", href: "/sluzba" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    title: "Zdroje",
    links: [
      { label: "Slovník", href: "/slovnik" },
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
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/simon-anfilov/",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/simonanfilov/",
  },
  {
    label: "Pinterest",
    icon: PinterestIcon,
    href: "https://cz.pinterest.com/anfilov/",
  },
  {
    label: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/anfilov",
  },
];

export function Footer() {
  return (
    <footer className="section-contrast bg-[var(--sc-bg)] text-[var(--sc-text)] pt-[var(--space-section)] pb-[var(--space-element)]">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-x-[var(--space-grid)] gap-y-10 sm:gap-y-[var(--space-grid)] lg:gap-[var(--space-grid-lg)]">
          {/* ── Brand col (logo + socials pinned bottom) ── */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1 mb-4 lg:mb-0 flex flex-col">
            <a
              href="/"
              aria-label="Anfilov — domů"
              className="inline-block hover:opacity-80 transition-opacity duration-[var(--duration-fast)]"
            >
              <AnfilovSymbol size={36} />
            </a>

            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      p-2 rounded-[var(--radius-sm)]
                      border border-[var(--sc-border)]
                      text-[var(--sc-text-dimmer)]
                      hover:text-[var(--sc-text)] hover:border-[var(--sc-text-dimmer)]
                      transition-colors duration-[var(--duration-fast)]
                      cursor-pointer min-h-[36px] min-w-[36px]
                      inline-flex items-center justify-center
                      focus-visible:ring-2 focus-visible:ring-[var(--sc-text)] focus-visible:outline-none
                    "
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Link columns ── */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4 font-[family-name:var(--font-heading)]">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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

        <Separator className="my-14 !bg-[var(--sc-border)]" />

        <p className="text-xs text-[var(--sc-text-dimmer)] font-[family-name:var(--font-body)] pb-10">
          &copy; {new Date().getFullYear()} Simon Anfilov, Krhanice 275, 257 42
          Krhanice
        </p>
      </Container>
    </footer>
  );
}
