"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Avatar } from "@/components/ui/Avatar";

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const row1: TestimonialItem[] = [
  { quote: "This framework saved us weeks of work. Rebranded by changing one file.", name: "Sarah Chen", role: "CTO, TechStart", initials: "SC" },
  { quote: "The token architecture is brilliant. Perfect consistency across every page.", name: "Marcus Johnson", role: "Design Lead, Globex", initials: "MJ" },
  { quote: "Dark mode just worked. No extra classes. We saved 40+ hours.", name: "Elena Rodriguez", role: "Frontend Dev, Initech", initials: "ER" },
  { quote: "Accessible by default — passed compliance on the first try.", name: "David Kim", role: "VP Engineering, Wayne Ent", initials: "DK" },
  { quote: "Best component library we've ever used. Nothing else comes close.", name: "Lisa Park", role: "Lead Designer, Acme", initials: "LP" },
  { quote: "Responsive design is flawless. Tested on 20 devices, all perfect.", name: "Aisha Patel", role: "PM, Umbrella", initials: "AP" },
];

const row2: TestimonialItem[] = [
  { quote: "Figma to production in 3 days. The pre-built sections covered everything.", name: "Tom Lindgren", role: "Founder, Acme Corp", initials: "TL" },
  { quote: "The concept system is genius. One attribute changes the whole site's personality.", name: "Nina Zhao", role: "Creative Director, Stark", initials: "NZ" },
  { quote: "Our design team can now prototype in code. That's never happened before.", name: "James Wright", role: "CTO, Globex Systems", initials: "JW" },
  { quote: "Finally a framework that doesn't look like every other Bootstrap site.", name: "Maria Santos", role: "Brand Lead, Umbrella", initials: "MS" },
  { quote: "We ship landing pages in hours, not weeks. Total game-changer.", name: "Ryan O'Brien", role: "Growth Lead, Initech", initials: "RO" },
  { quote: "The code quality is impeccable. TypeScript strict, semantic HTML, the works.", name: "Priya Sharma", role: "Senior Dev, Wayne Ent", initials: "PS" },
];

const row3: TestimonialItem[] = [
  { quote: "Setup was painless. Had a beautiful site running in under an hour.", name: "Alex Rivera", role: "Founder, Startup Co", initials: "AR" },
  { quote: "I've tried Chakra, Radix, shadcn — this framework surpasses them all.", name: "Ben Taylor", role: "Full-stack Dev", initials: "BT" },
  { quote: "Our bounce rate dropped 35% after switching to these pre-built sections.", name: "Sophie Laurent", role: "Marketing VP, Globex", initials: "SL" },
  { quote: "Enterprise-grade without the enterprise complexity. Exactly what we needed.", name: "Kenji Tanaka", role: "Tech Lead, MegaCorp", initials: "KT" },
  { quote: "The SEO defaults are incredible. Rankings improved within weeks.", name: "Emma Wilson", role: "Content Lead, Acme", initials: "EW" },
  { quote: "Customer support loves the FAQ accordion. Support tickets dropped 25%.", name: "Carlos Mendez", role: "CS Manager, TechStart", initials: "CM" },
];

function MarqueeRow({
  items,
  reverse = false,
  speed = "40s",
  paused,
  onHover,
  onLeave,
}: {
  items: TestimonialItem[];
  reverse?: boolean;
  speed?: string;
  paused: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const direction = reverse ? "marquee-scroll-reverse" : "marquee-scroll";
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-[var(--color-surface)] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-[var(--color-surface)] to-transparent"
      />

      <div
        className="flex w-max gap-[var(--space-grid)]"
        style={{
          animation: `${direction} ${speed} linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {doubled.map((item, i) => (
          <blockquote
            key={`${item.name}-${i}`}
            aria-hidden={i >= items.length ? true : undefined}
            className="
              w-[300px] sm:w-[340px] flex-shrink-0
              p-5 rounded-[var(--card-radius)]
              bg-[var(--color-surface-elevated)] border border-[var(--color-border)]
              flex flex-col
            "
          >
            <p className="text-sm text-[var(--color-text-primary)] leading-relaxed font-[family-name:var(--font-body)] italic flex-1">
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer className="mt-3 pt-3 border-t border-[var(--color-border)] flex items-center gap-2.5">
              <Avatar initials={item.initials} alt={item.name} size="sm" />
              <div>
                <cite className="text-xs font-semibold text-[var(--color-text-primary)] not-italic font-[family-name:var(--font-heading)]">
                  {item.name}
                </cite>
                <p className="text-[12px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
                  {item.role}
                </p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}

export function TestimonialMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <div className="layout-text mb-10">
          <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] font-[family-name:var(--font-heading)] mb-3">
            Wall of love
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)] text-[var(--color-text-primary)]">
            Trusted by thousands
          </h2>
        </div>
      </Container>

      <div className="space-y-[var(--space-grid)]">
        <MarqueeRow items={row1} speed="45s" paused={paused} onHover={() => setPaused(true)} onLeave={() => setPaused(false)} />
        <MarqueeRow items={row2} speed="50s" reverse paused={paused} onHover={() => setPaused(true)} onLeave={() => setPaused(false)} />
        <MarqueeRow items={row3} speed="42s" paused={paused} onHover={() => setPaused(true)} onLeave={() => setPaused(false)} />
      </div>
    </section>
  );
}
