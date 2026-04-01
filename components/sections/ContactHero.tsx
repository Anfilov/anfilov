"use client";

import { useActionState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { sendInquiry, type InquiryState } from "@/app/actions/send-inquiry";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+420 602 26 26 33",
    href: "tel:+420602262633",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "simon@anfilov.cz",
    href: "mailto:simon@anfilov.cz",
  },
];

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

export function ContactHero() {
  const [state, formAction, isPending] = useActionState<InquiryState, FormData>(
    sendInquiry,
    null,
  );

  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)]">

      <Container className="relative pt-20 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:pb-28">
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Domů", href: "/" },
            { label: "Kontakt" },
          ]}
          className="mb-10"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ── Left column — info ── */}
          <div>
            {/* Overline */}
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-accent)] mb-5 font-[family-name:var(--font-heading)]">
              Kontakt
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.06] tracking-[-0.03em] mb-6">
              Pište, volejte!
            </h1>

            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)] mb-10 max-w-[480px]">
              Působím v Praze, Středočeském kraji a&nbsp;online pochopitelně
              kdekoliv. Popište mi svoji zakázku a&nbsp;já vám připravím
              nabídku na míru.
            </p>

            {/* Author mini card */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-[22%] overflow-hidden bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex-shrink-0">
                <Image
                  src="/simon-anfilov.webp"
                  alt="Simon Anfilov"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[15px] font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] leading-tight">
                  Simon Anfilov
                </p>
                <p className="text-[13px] text-[var(--color-text-secondary)] font-[family-name:var(--font-ui)]">
                  Brand Designer
                </p>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <span
                      className="
                        flex-shrink-0 w-[var(--icon-badge-size)] h-[var(--icon-badge-size)] rounded-[var(--icon-badge-radius)]
                        bg-[var(--icon-badge-bg)] text-[var(--icon-badge-color)]
                        inline-flex items-center justify-center
                      "
                      aria-hidden="true"
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </span>
                    <a
                      href={item.href}
                      className="text-[15px] text-[var(--color-text-link)] hover:text-[var(--color-forest)] transition-colors duration-[var(--duration-fast)] font-[family-name:var(--font-body)]"
                    >
                      {item.value}
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Business info */}
            <div className="mb-8 text-[14px] leading-[1.7] text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
              <p>Simon Anfilov, IČ: 64560198</p>
              <p>Krhanice 275, 257 42 Krhanice</p>
              <p>Nejsem plátce DPH.</p>
            </div>

            {/* Social links — outlined icons, same as footer but light */}
            <div className="flex items-center gap-2">
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
                      border border-[var(--color-border)]
                      text-[var(--color-text-tertiary)]
                      hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)]
                      transition-colors duration-[var(--duration-fast)]
                      cursor-pointer min-h-[36px] min-w-[36px]
                      inline-flex items-center justify-center
                      focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none
                    "
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Right column — form (light mode) ── */}
          {state?.success ? (
            <div className="flex flex-col items-center justify-center gap-4 p-6 sm:p-8 rounded-[var(--card-radius)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-center">
              <CheckCircle2 size={48} className="text-[var(--color-forest-mid)]" />
              <h3 className="text-xl font-bold">Děkuji za zprávu!</h3>
              <p className="text-[15px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
                Ozvu se vám co nejdříve — většinou do 24 hodin.
              </p>
            </div>
          ) : (
            <form
              action={formAction}
              className="space-y-5 p-6 sm:p-8 rounded-[var(--card-radius)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)]"
            >
              <input type="hidden" name="slug" value="kontakt" />
              <input type="hidden" name="serviceName" value="Kontaktní formulář" />

              <Input
                label="Vaše jméno a příjmení"
                name="name"
                placeholder="Jan Novák"
                required
              />
              <Input
                label="Váš e-mail"
                name="email"
                type="email"
                placeholder="jan@firma.cz"
                required
              />
              <Input
                label="Váš telefon"
                name="phone"
                type="tel"
                placeholder="+420 777 123 123"
                required
              />
              <Textarea
                label="Váš krátký vzkaz nebo dotaz"
                name="message"
                placeholder="Popište stručně vaše zadání, rozpočet, časový rámec, apod."
                required
              />

              {state?.error && (
                <p role="alert" className="text-sm text-[var(--color-error)] font-[family-name:var(--font-ui)]">
                  {state.error}
                </p>
              )}

              <p className="text-[12px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-ui)] leading-relaxed">
                Kliknutím na tlačítko níže berete na vědomí{" "}
                <a
                  href="/gdpr"
                  className="underline hover:text-[var(--color-text-link)] transition-colors duration-[var(--duration-fast)]"
                >
                  Zásady ochrany osobních údajů
                </a>
                .
              </p>

              <div className="pt-2">
                <Button variant="primary" type="submit" size="lg" className="w-full sm:w-auto" disabled={isPending}>
                  {isPending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                      Odesílám…
                    </>
                  ) : (
                    <>
                      Odeslat dotaz
                      <ArrowRight size={18} aria-hidden="true" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
