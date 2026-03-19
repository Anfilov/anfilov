"use client";

import { useActionState, useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { sendInquiry, type InquiryState } from "@/app/actions/send-inquiry";

interface OfferContactProps {
  slug?: string;
  serviceName?: string;
}

/** Blok 12 — Kontakt / Finální CTA. Light surface. */
export function OfferContact({ slug, serviceName }: OfferContactProps) {
  const [state, formAction, isPending] = useActionState<InquiryState, FormData>(
    sendInquiry,
    null,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;
    const rect = section.getBoundingClientRect();
    const windowH = window.innerHeight;
    const progress = (windowH - rect.top) / (windowH + rect.height);
    const offset = (progress - 0.5) * 200;
    img.style.transform = `translateY(${offset}px)`;
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      ref={sectionRef}
      id="konzultace"
      className="relative overflow-hidden bg-[var(--color-surface-dark)] py-[var(--section-padding-y)]" data-theme="dark"
    >
      {/* Background image + dark overlay */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div
          ref={imgRef}
          className="absolute inset-[-15%] will-change-transform"
          style={{ backgroundImage: "url(/cta-bg.webp)", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-[var(--color-surface-dark)]/85" />
      </div>
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-[var(--space-grid)] lg:gap-[var(--space-grid-lg)]">
          {/* Left column — info */}
          <div className="lg:col-span-2">
            <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
              Nabídka &amp; konzultace
            </p>
            <h2 className="text-3xl sm:text-4xl leading-[1.08] tracking-[-0.03em] mb-5">
              Pojďme se nezávazně pobavit o&nbsp;vašem projektu
            </h2>
            <p className="text-[15px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-[1.65] mb-8">
              Napište mi, zavolejte nebo vyplňte poptávkový formulář.
              Popište mi svoji zakázku a&nbsp;já vám připravím nabídku na míru.
            </p>

            {/* Author mini card */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-[22%] overflow-hidden bg-[var(--color-surface-elevated)] border border-[var(--card-border)] flex-shrink-0">
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

            <div className="space-y-5">
              <ContactInfo icon={Phone} label="Telefon" value="+420 602 26 26 33" href="tel:+420602262633" />
              <ContactInfo icon={Mail} label="Email" value="simon@anfilov.cz" href="mailto:simon@anfilov.cz" />
            </div>
          </div>

          {/* Right column — form */}
          {state?.success ? (
            <div className="lg:col-span-3 flex flex-col items-center justify-center gap-4 p-6 sm:p-8 rounded-[var(--card-radius)] bg-[var(--color-surface-elevated)] border border-[var(--card-border)] text-center">
              <CheckCircle2 size={48} className="text-[var(--color-gold)]" />
              <h3 className="text-xl font-bold">Děkuji za poptávku!</h3>
              <p className="text-[15px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
                Ozvu se vám co nejdříve — většinou do 24 hodin.
              </p>
            </div>
          ) : (
            <form
              ref={formRef}
              action={formAction}
              className="lg:col-span-3 space-y-5 sm:p-8"
            >
              {/* Hidden fields for slug & service name */}
              <input type="hidden" name="slug" value={slug ?? ""} />
              <input type="hidden" name="serviceName" value={serviceName ?? ""} />

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
                label="Shrnutí poptávky"
                name="message"
                placeholder="Popište stručně vaše zadání, rozpočet, časový rámec, apod."
                required
              />

              {/* Error message */}
              {state?.error && (
                <p role="alert" className="text-sm text-[var(--color-error)] font-[family-name:var(--font-ui)]">
                  {state.error}
                </p>
              )}

              {/* GDPR */}
              <p className="text-[12px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-ui)] leading-relaxed">
                Odesláním formuláře berete na vědomí zpracování osobních údajů
                za účelem odpovědi na vaši poptávku. Více informací naleznete
                v&nbsp;našich{" "}
                <a
                  href="/gdpr"
                  className="underline hover:text-[var(--color-text-link)] transition-colors duration-[var(--duration-fast)]"
                >
                  Zásadách o ochraně osobních údajů
                </a>
                .
              </p>

              <div className="pt-2">
                <Button variant="secondary" type="submit" size="lg" className="w-full sm:w-auto" disabled={isPending}>
                  {isPending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                      Odesílám…
                    </>
                  ) : (
                    <>
                      Odeslat poptávku
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

function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const ValueTag = href ? "a" : "p";
  return (
    <div className="flex items-center gap-4">
      <span
        className="
          flex-shrink-0 w-10 h-10 rounded-[var(--radius-md)]
          bg-[rgba(200,168,78,0.08)] text-[var(--color-gold)]
          inline-flex items-center justify-center
        "
        aria-hidden="true"
      >
        <Icon size={18} />
      </span>
      <ValueTag
        {...(href
          ? {
              href,
              className:
                "text-sm text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors duration-[var(--duration-fast)] font-[family-name:var(--font-ui)]",
            }
          : {
              className:
                "text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-ui)]",
            })}
      >
        {value}
      </ValueTag>
    </div>
  );
}
