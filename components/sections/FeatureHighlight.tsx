import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const benefits = [
  "Real-time collaboration with your team",
  "Automatic version history and rollback",
  "Granular permissions and access controls",
  "Built-in analytics and usage insights",
  "API-first architecture for custom workflows",
];

export function FeatureHighlight() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Screenshot */}
        <div className="relative rounded-[var(--card-radius)] overflow-hidden bg-[var(--color-surface-sunken)] shadow-[var(--shadow-xl)] border border-[var(--color-border)]">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-text-tertiary)] opacity-30" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-text-tertiary)] opacity-30" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-text-tertiary)] opacity-30" />
            </div>
            <div className="flex-1 mx-8">
              <div className="h-5 rounded-[var(--radius-sm)] bg-[var(--color-surface-sunken)] max-w-xs mx-auto" />
            </div>
          </div>
          <div className="relative aspect-[16/10]">
            <Image
              src="https://placehold.co/960x600/111111/e63328.png?text=Feature+Deep+Dive"
              alt="Feature deep dive screenshot showing collaboration interface"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-accent)] mb-4 font-[family-name:var(--font-heading)]">
            Collaboration
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]">
            Work together,{" "}
            <span className="text-[var(--color-accent)]">seamlessly</span>
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)]">
            Built for teams that move fast. Edit in real-time, leave comments
            in context, and ship with confidence — all from one workspace.
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-[var(--color-text-primary)] font-[family-name:var(--font-body)]"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-[var(--avatar-radius)] bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)] inline-flex items-center justify-center"
                >
                  <Check size={12} strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button>
              Learn more
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
