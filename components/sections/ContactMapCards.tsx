import { Mail, MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contactCards = [
  {
    icon: MapPin,
    title: "Headquarters",
    lines: ["123 Innovation Drive", "San Francisco, CA 94107"],
    action: { label: "Get directions", href: "https://maps.google.com/?q=123+Innovation+Drive+San+Francisco+CA+94107" },
  },
  {
    icon: Mail,
    title: "Email us",
    lines: ["General: hello@company.com", "Support: support@company.com"],
    action: { label: "Send email", href: "mailto:hello@company.com" },
  },
  {
    icon: Phone,
    title: "Call us",
    lines: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
    action: { label: "Call now", href: "tel:+15551234567" },
  },
  {
    icon: Clock,
    title: "Office hours",
    lines: ["Mon–Fri: 9:00 AM – 6:00 PM", "Sat–Sun: Closed"],
    action: undefined,
  },
];

/**
 * ContactMapCards — Contact info as a row of distinct cards above a full-width map.
 * No form. Bold, modern card grid with prominent map below.
 */
export function ContactMapCards() {
  return (
    <section
      id="contact-map-cards"
      className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]"
    >
      <Container>
        <SectionHeading
          overline="Get in touch"
          title="We'd love to hear from you"
          subtitle="Reach out through any of the channels below or visit us at our office."
        />

        {/* ── Contact cards row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-grid)] max-w-6xl layout-mx mb-[var(--space-grid-lg)]">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="
                  group relative flex flex-col p-6
                  rounded-[var(--card-radius)]
                  bg-[var(--color-surface)]
                  border border-[var(--color-border)]
                  shadow-[var(--shadow-sm)]
                  hover-effect
                "
              >
                {/* Icon */}
                <span
                  className="
                    w-12 h-12 rounded-[var(--radius-md)]
                    bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]
                    inline-flex items-center justify-center mb-5
                    transition-transform duration-[var(--duration-fast)]
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                >
                  <Icon size={22} strokeWidth={1.8} />
                </span>

                {/* Title */}
                <h3 className="text-base font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-[var(--heading-tracking)] mb-3">
                  {card.title}
                </h3>

                {/* Detail lines */}
                <div className="space-y-1 flex-1">
                  {card.lines.map((line) => (
                    <p
                      key={line}
                      className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)]"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Action link */}
                {card.action && (
                  <a
                    href={card.action.href}
                    target={card.action.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="
                      inline-flex items-center gap-1.5 mt-5 text-sm font-semibold
                      text-[var(--color-accent)] hover:text-[var(--color-text-accent)]
                      transition-colors duration-[var(--duration-fast)]
                      cursor-pointer
                      focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
                      rounded-[var(--radius-sm)]
                      min-h-[44px] min-w-[44px]
                      items-center
                    "
                  >
                    {card.action.label}
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
              </article>
            );
          })}
        </div>

        {/* ── Full-width map ── */}
        <div
          className="
            relative w-full max-w-6xl layout-mx
            aspect-[21/9]
            rounded-[var(--card-radius)]
            border border-[var(--color-border)]
            shadow-[var(--shadow-lg)]
            overflow-hidden
            bg-[var(--color-surface-sunken)]
          "
        >
          <iframe
            title="Office location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977830560377!2d-122.39901068441547!3d37.78779997975756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807abad77c31%3A0x5765667ec4d8ac3c!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, position: "absolute", inset: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}
