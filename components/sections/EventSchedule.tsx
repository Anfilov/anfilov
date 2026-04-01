import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  type: "webinar" | "workshop" | "conference" | "meetup";
  featured?: boolean;
}

const events: Event[] = [
  {
    title: "Design Systems at Scale",
    date: "Mar 28, 2026",
    time: "2:00 PM EST",
    location: "Online",
    type: "webinar",
    featured: true,
  },
  {
    title: "Hands-on: Token Architecture",
    date: "Apr 5, 2026",
    time: "10:00 AM PST",
    location: "Online",
    type: "workshop",
  },
  {
    title: "Frontend Conf 2026",
    date: "Apr 18–20, 2026",
    time: "All day",
    location: "Berlin, Germany",
    type: "conference",
  },
  {
    title: "Community Office Hours",
    date: "Every Thursday",
    time: "4:00 PM EST",
    location: "Discord",
    type: "meetup",
  },
];

const typeBadgeColors: Record<Event["type"], string> = {
  webinar: "bg-[var(--color-accent)]/10 text-[var(--color-text-accent)]",
  workshop: "bg-[var(--color-warning-subtle)] text-[var(--color-warning)]",
  conference: "bg-[var(--color-info)]/10 text-[var(--color-info)]",
  meetup: "bg-[var(--color-success-subtle)] text-[var(--color-success)]",
};

export function EventSchedule() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Events"
          title="Upcoming events"
          subtitle="Join us for webinars, workshops, and community meetups."
        />

        <div className="space-y-4 max-w-3xl layout-mx">
          {events.map((event) => (
            <a
              key={event.title}
              href="#"
              className={`
                group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6
                rounded-[var(--card-radius)] border
                p-5 sm:p-6 cursor-pointer
                focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none
                transition-colors duration-[var(--duration-fast)]
                ${
                  event.featured
                    ? "border-[var(--color-accent)]/30 bg-[var(--color-accent)]/[0.03]"
                    : "border-[var(--color-border)] bg-[var(--color-surface-elevated)]"
                }
                hover:border-[var(--color-accent)]/40
              `}
            >
              {/* Date block */}
              <div className="flex-shrink-0 flex items-center gap-2 text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
                <Calendar size={15} className="text-[var(--color-text-tertiary)]" aria-hidden="true" />
                <span className="font-medium text-[var(--color-text-primary)]">{event.date}</span>
                <span className="text-[var(--color-text-tertiary)]">&middot;</span>
                <span>{event.time}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-base font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-[var(--heading-tracking)] group-hover:text-[var(--color-accent)] transition-colors duration-[var(--duration-fast)]">
                    {event.title}
                  </h3>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded-full ${typeBadgeColors[event.type]}`}>
                    {event.type}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
                  <MapPin size={12} aria-hidden="true" />
                  {event.location}
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight
                size={16}
                className="hidden sm:block flex-shrink-0 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-[color,transform] duration-[var(--duration-fast)]"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
