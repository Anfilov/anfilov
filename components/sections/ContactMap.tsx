import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@company.com",
    href: "mailto:hello@company.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Innovation Drive\nSan Francisco, CA 94107",
    href: "https://maps.google.com/?q=123+Innovation+Drive+San+Francisco+CA+94107",
  },
  {
    icon: Clock,
    label: "Office hours",
    value: "Mon–Fri, 9:00 AM – 6:00 PM",
    href: undefined,
  },
];

/**
 * ContactMap — Split layout: contact info column left, large embedded map right.
 * No form. Clean, editorial feel with clickable contact details.
 */
export function ContactMap() {
  return (
    <section
      id="contact-map"
      className="bg-[var(--color-surface)] py-[var(--section-padding-y)]"
    >
      <Container>
        <SectionHeading
          overline="Contact"
          title="Visit our office"
          subtitle="Drop by for a coffee or reach out through any of the channels below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-[var(--space-grid)] lg:gap-[var(--space-grid-lg)] max-w-6xl layout-mx">
          {/* ── Contact info column ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const Wrapper = item.href ? "a" : "div";
              const wrapperProps = item.href
                ? {
                    href: item.href,
                    target: item.href.startsWith("http") ? "_blank" as const : undefined,
                    rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined,
                  }
                : {};

              return (
                <Wrapper
                  key={item.label}
                  {...wrapperProps}
                  className={`
                    group flex items-start gap-4 p-5
                    rounded-[var(--card-radius)]
                    bg-[var(--color-surface-elevated)]
                    border border-[var(--color-border)]
                    shadow-[var(--shadow-sm)]
                    transition-transform transition-shadow duration-[var(--duration-fast)]
                    ${item.href ? "cursor-pointer hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none" : ""}
                  `}
                >
                  <span
                    className="
                      flex-shrink-0 w-11 h-11 rounded-[var(--radius-md)]
                      bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]
                      inline-flex items-center justify-center
                      transition-transform duration-[var(--duration-fast)]
                      group-hover:scale-105
                    "
                    aria-hidden="true"
                  >
                    <Icon size={20} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-text-tertiary)] mb-1 font-[family-name:var(--font-heading)]">
                      {item.label}
                    </h3>
                    <p className="text-[15px] font-medium text-[var(--color-text-primary)] whitespace-pre-line leading-relaxed font-[family-name:var(--font-body)]">
                      {item.value}
                    </p>
                  </div>
                  {item.href && (
                    <ArrowUpRight
                      size={16}
                      className="flex-shrink-0 mt-1 text-[var(--color-text-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-fast)]"
                      aria-hidden="true"
                    />
                  )}
                </Wrapper>
              );
            })}
          </div>

          {/* ── Map column ── */}
          <div className="lg:col-span-3">
            <div
              className="
                relative w-full h-full min-h-[360px] lg:min-h-[480px]
                rounded-[var(--card-radius)]
                border border-[var(--color-border)]
                shadow-[var(--shadow-md)]
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
          </div>
        </div>
      </Container>
    </section>
  );
}
