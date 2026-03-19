"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Shield, Cookie } from "lucide-react";

const navItems = [
  {
    href: "/gdpr",
    label: "Ochrana osobních údajů",
    icon: Shield,
  },
  {
    href: "/cookies",
    label: "Pravidla cookies",
    icon: Cookie,
  },
];

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const breadcrumbLabel =
    pathname === "/gdpr"
      ? "Ochrana osobních údajů"
      : "Pravidla cookies";

  return (
    <>
      {/* ━━━ Hero — matches OfferHero pattern ━━━ */}
      <section className="relative overflow-hidden bg-[var(--color-surface)]">
        {/* Subtle diagonal pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 24px, rgba(200,168,78,0.025) 24px, rgba(200,168,78,0.025) 25px)",
          }}
        />

        <Container className="relative pt-20 sm:pt-28 lg:pt-32 pb-14 sm:pb-20">
          {/* Breadcrumb */}
          <Breadcrumbs
            items={[
              { label: "Domů", href: "/" },
              { label: breadcrumbLabel },
            ]}
            className="mb-10"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* ── Left column (2/5 = 40%) ── */}
            <div className="lg:col-span-2">
              {/* Overline */}
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-accent)] mb-5 font-[family-name:var(--font-heading)]">
                Právní informace
              </p>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.08] tracking-[-0.02em] mb-10">
                {title}
              </h1>

              {/* Nav pills */}
              <nav className="flex flex-col gap-[4px] mb-[32px]">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-[10px] px-[14px] py-[11px] rounded-[10px] text-[15px] transition-all duration-200 ${
                        isActive
                          ? "bg-[var(--color-accent-subtle)] text-[var(--color-text-primary)] font-semibold shadow-[inset_0_0_0_1px_var(--color-border-accent)]"
                          : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text-primary)]"
                      }`}
                    >
                      <Icon
                        className={`w-[18px] h-[18px] shrink-0 ${
                          isActive
                            ? "text-[var(--color-gold)]"
                            : "text-[var(--color-warm-400)]"
                        }`}
                        strokeWidth={1.5}
                      />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Divider */}
              <div className="h-px bg-[var(--color-border)] mb-[24px]" />

              {/* Správce */}
              <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-warm-400)] mb-[12px]">
                Správce webu
              </span>
              <div className="text-[14px] leading-[1.65] text-[var(--color-text-secondary)] space-y-[1px]">
                <p className="font-semibold text-[var(--color-text-primary)]">
                  Simon Anfilov
                </p>
                <p>Krhanice 275</p>
                <p>257 42 Krhanice</p>
                <p className="pt-[4px]">
                  <a
                    href="mailto:simon@anfilov.cz"
                    className="text-[var(--color-text-link)] hover:underline"
                  >
                    simon@anfilov.cz
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+420602262633"
                    className="text-[var(--color-text-link)] hover:underline"
                  >
                    +420 602 26 26 33
                  </a>
                </p>
              </div>
            </div>

            {/* ── Right column (3/5 = 60%) — content ── */}
            <div className="lg:col-span-3">
              <div className="legal-content">{children}</div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
