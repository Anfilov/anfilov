"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";

const subjectOptions = [
  { value: "general", label: "General inquiry" },
  { value: "sales", label: "Sales question" },
  { value: "support", label: "Technical support" },
  { value: "partnership", label: "Partnership" },
];

export function ContactForm() {
  return (
    <section id="contact" className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Contact"
          title="Get in touch"
          subtitle="Have a question or want to work together? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-[var(--space-grid)] lg:gap-[var(--space-grid-lg)] max-w-5xl mx-auto">
          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input
                label="First name"
                placeholder="John"
                required
              />
              <Input
                label="Last name"
                placeholder="Doe"
                required
              />
            </div>
            <Input
              label="Email"
              type="email"
              placeholder="john@company.com"
              required
            />
            <Select
              label="Subject"
              options={subjectOptions}
              required
            />
            <Textarea
              label="Message"
              placeholder="Tell us about your project..."
              required
            />
            <div className="pt-1">
              <Checkbox label="I agree to the privacy policy" required />
            </div>
            <div className="pt-1">
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send message
              </Button>
            </div>
          </form>

          {/* Contact info */}
          <aside className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <span
                className="
                  flex-shrink-0 w-10 h-10 rounded-[var(--radius-md)]
                  bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]
                  inline-flex items-center justify-center
                "
                aria-hidden="true"
              >
                <Mail size={18} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)]">
                  Email
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mt-0.5 font-[family-name:var(--font-body)]">
                  hello@company.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span
                className="
                  flex-shrink-0 w-10 h-10 rounded-[var(--radius-md)]
                  bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]
                  inline-flex items-center justify-center
                "
                aria-hidden="true"
              >
                <Phone size={18} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)]">
                  Phone
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mt-0.5 font-[family-name:var(--font-body)]">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span
                className="
                  flex-shrink-0 w-10 h-10 rounded-[var(--radius-md)]
                  bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]
                  inline-flex items-center justify-center
                "
                aria-hidden="true"
              >
                <MapPin size={18} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)]">
                  Office
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mt-0.5 font-[family-name:var(--font-body)]">
                  123 Innovation Drive
                  <br />
                  San Francisco, CA 94107
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-[4/3] rounded-[var(--card-radius)] bg-[var(--color-surface-sunken)] border border-[var(--color-border)] flex items-center justify-center">
              <p className="text-sm text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
                Map placeholder
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
