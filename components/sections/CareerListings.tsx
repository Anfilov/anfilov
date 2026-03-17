import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
}

const jobs: Job[] = [
  { title: "Senior Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer", department: "Design", location: "San Francisco", type: "Full-time" },
  { title: "Developer Advocate", department: "Marketing", location: "Remote", type: "Full-time" },
  { title: "Data Analyst", department: "Engineering", location: "New York", type: "Full-time" },
  { title: "Technical Writer", department: "Content", location: "Remote", type: "Part-time" },
];

export function CareerListings() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Careers"
          title="Join our team"
          subtitle="We're building something meaningful — and we'd love your help."
        />

        <div className="max-w-4xl layout-mx">
          {jobs.map((job) => (
            <a
              key={job.title}
              href="#"
              className="
                group flex flex-col sm:flex-row sm:items-center justify-between
                gap-3 sm:gap-6
                px-5 py-5 -mx-5
                rounded-[var(--card-radius)]
                border-b border-[var(--color-border)] last:border-b-0
                hover:bg-[var(--color-surface-sunken)]
                transition-[background-color] duration-[var(--duration-fast)] ease-[var(--ease-smooth)]
                cursor-pointer
                focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
              "
            >
              {/* Left: Title + department */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold tracking-tight font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-[var(--duration-fast)]">
                  {job.title}
                </h3>
                <div className="mt-1">
                  <Badge variant="default">{job.department}</Badge>
                </div>
              </div>

              {/* Meta tags */}
              <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} aria-hidden="true" className="text-[var(--color-text-tertiary)]" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} aria-hidden="true" className="text-[var(--color-text-tertiary)]" />
                  {job.type}
                </span>
              </div>

              {/* Arrow */}
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="hidden sm:block flex-shrink-0 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 transition-[color,transform] duration-[var(--duration-fast)]"
              />
            </a>
          ))}

          {/* View all link */}
          <div className="layout-text mt-8">
            <a
              href="#"
              className="
                inline-flex items-center gap-2 text-sm font-semibold
                text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]
                font-[family-name:var(--font-heading)]
                transition-colors duration-[var(--duration-fast)]
                cursor-pointer
                focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none rounded-[var(--radius-sm)]
              "
            >
              View all open positions
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
