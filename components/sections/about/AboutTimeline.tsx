"use client";

import { useEffect, useRef, useCallback, type ReactNode } from "react";
import { Container } from "@/components/ui/Container";

const L = (href: string, children: ReactNode) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[var(--color-gold)]/40 hover:decoration-[var(--color-gold)] transition-colors">
    {children}
  </a>
);

interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: ReactNode;
  image?: string;
  highlight?: string;
  highlightUrl?: string;
}

const items: TimelineItem[] = [
  {
    year: "2004 – dosud",
    role: "Brand Designer",
    company: "Freelance",
    description:
      "Práce na volné noze, rozmanitost tvůrčích výzev a neustálá změna je to, co mi vyhovuje. Pomáhám malým i velkým firmám budovat jejich značky od strategie po design. Jsem grafik, textař a tvůrce.",
    image:
      "https://content.app-sources.com/s/41101902986880176/thumbnails/640x480/PR_Images/Simon-Anfilov-Office-1080px-1580604.jpg?format=webp",
  },
  {
    year: "2003",
    role: "Kreativní ředitel",
    company: "WMC",
    description: <>V roce 2003 jsem nastoupil do agentury WMC pod křídla {L("https://www.linkedin.com/in/vondracek-tomas/", "Tomáše Vondráčka")}. Ve spolupráci s {L("https://www.linkedin.com/in/milan-šteindler-3a9b5483/", "Milanem Šteidlerem")} jsme natočili tehdy úžasný {L("https://www.youtube.com/watch?v=AvZabDa1S-M", "TV spot s Leninem")} pro JVC. Dnes by nás za to rusové otrávili novičokem.</>,
    image:
      "https://content.app-sources.com/s/41101902986880176/thumbnails/640x480/PR_Images/Lenin-Simon-Shoot-9752780.jpg?format=webp",
    highlight: "TV spot s Leninem pro JVC",
    highlightUrl: "https://www.youtube.com/watch?v=AvZabDa1S-M",
  },
  {
    year: "1997–1998",
    role: "Senior Art Director",
    company: "Mark BBDO",
    description: <>S parťákem textařem {L("https://www.linkedin.com/in/viktor-špála-48b36089/", "Viktorem Špálou")} jsme jako tým nastoupili do agentury BBDO, která měla tehdy hodně našlápnuto. Zde jsem pochopil, že mé nejsilnější stránky jsou strategické koncepční myšlení a grafický cit zaměřený na branding a vizuální identitu.</>,
    image:
      "https://content.app-sources.com/s/41101902986880176/thumbnails/640x480/PR_Images/Simon-Anfilov-Crazy-0184550.jpg?format=webp",
  },
  {
    year: "1996–1997",
    role: "Art Director",
    company: "DMB&B",
    description: <>Díky skvělému kreativnímu řediteli {L("https://www.linkedin.com/in/gscottmerrell/", "Scottovi Merrellovi")} jsem se do DMB&B vrátil. Tentokrát jako Art Director. Scott položil základy pro moje strategické myšlení v reklamě a týmovou spolupráci. Pod jeho vedením se nám s kolegou textařem Viktorem Špálou podařilo získat prestižní mezinárodní reklamní ocenění Golden Drum Grand Prix za tento {L("https://youtu.be/J4nQ2VRT9hE", "bláznivý TV spot")}.</>,
    image:
      "https://content.app-sources.com/s/41101902986880176/thumbnails/640x480/PR_Images/Golden-Drum-0184581.jpg?format=webp",
    highlight: "Golden Drum Grand Prix",
    highlightUrl: "https://youtu.be/J4nQ2VRT9hE",
  },
  {
    year: "1995–1996",
    role: "Art Director",
    company: "SGA Praha",
    description:
      "Malá česká agentura mi poskytla prostor realizovat mé výtvarné nápady a zdokonalit se především v předtiskové přípravě a dalších grafických aplikacích.",
    image:
      "https://content.app-sources.com/s/41101902986880176/thumbnails/640x480/PR_Images/SGA-Branded-0184607.jpg?format=webp",
  },
  {
    year: "1994–1995",
    role: "DTP Manager",
    company: "DMB&B",
    description: <>Znalost DTP mi otevřela dveře do jedné z renomovaných síťových reklamních agentur této bouřlivé porevoluční doby. Zde jsem dostal šanci učit se od výtečného kolegy {L("https://www.linkedin.com/in/vojtekpsd/", "Michala Vojtka")} a několika ostřílených zahraničních (západních) reklamních matadorů.</>,
  },
  {
    year: "1993–1994",
    role: "DTP Designer",
    company: "GGK Prague",
    description:
      "Do agentury GGK jsem vkročil s přesvědčením, že hodně ohledně DTP umím, abych záhy zjistil, že to tak není. V práci jsem proto musel být často do noci, abych se metodou pokus a omyl rychle vše doučil. Mladost, radost.",
  },
];

export function AboutTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!track || !fill) return;

    const rect = track.getBoundingClientRect();
    const windowH = window.innerHeight;
    const start = rect.top - windowH * 0.3;
    const end = rect.bottom - windowH * 0.5;
    const progress = Math.min(1, Math.max(0, -start / (end - start)));
    fill.style.transform = `scaleY(${progress})`;
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      if (fillRef.current) fillRef.current.style.transform = "scaleY(1)";
      return;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)] overflow-hidden">
      <Container>
        <h2 className="sr-only">Profesní kariéra — 30 let v reklamě a brandingu</h2>

        <div ref={trackRef} className="relative">
          {/* ── Central line (desktop) ── */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-[var(--color-border)]"
          >
            <div
              ref={fillRef}
              className="absolute inset-0 origin-top bg-gradient-to-b from-[var(--color-gold)] to-[var(--color-gold)]/40 transition-none"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          {/* ── Mobile line ── */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute left-5 sm:left-8 top-0 bottom-0 w-[2px] bg-[var(--color-border)]"
          />

          {/* ── Items ── */}
          <div className="relative space-y-16 lg:space-y-20">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={item.year} className="reveal">
                  {/* ── Desktop: alternating 3-col grid ── */}
                  <div className="hidden lg:grid lg:grid-cols-[1fr_40px_1fr] lg:gap-0 items-start">
                    {/* Left column */}
                    <div className="pr-10">
                      {isLeft ? (
                        <TimelineCard item={item} align="right" showYear />
                      ) : (
                        <div />
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="flex justify-center z-10">
                      <div className="w-4 h-4 mt-1 rounded-full border-[3px] border-[var(--color-gold)] bg-[var(--color-surface)] shadow-[0_0_12px_var(--color-gold-glow)]" />
                    </div>

                    {/* Right column */}
                    <div className="pl-10">
                      {!isLeft ? (
                        <TimelineCard item={item} align="left" showYear />
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>

                  {/* ── Mobile: single column ── */}
                  <div className="lg:hidden relative pl-14 sm:pl-20">
                    <div
                      aria-hidden="true"
                      className="absolute left-[14px] sm:left-[26px] top-1 w-3.5 h-3.5 rounded-full border-[3px] border-[var(--color-gold)] bg-[var(--color-surface)] shadow-[0_0_10px_var(--color-gold-glow)] z-10"
                    />
                    <TimelineCard item={item} align="left" showYear />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Card ── */
function TimelineCard({
  item,
  align,
  showYear = false,
}: {
  item: TimelineItem;
  align: "left" | "right";
  showYear?: boolean;
}) {
  const isRight = align === "right";

  return (
    <div className={isRight ? "text-right" : ""}>
      {showYear && (
        <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-2 font-[family-name:var(--font-ui)]">
          {item.year}
        </p>
      )}

      <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-heading)] tracking-[-0.02em] leading-[1.2] mb-1">
        {item.role}
      </h3>
      <p className="text-[14px] font-semibold text-[var(--color-text-secondary)] font-[family-name:var(--font-ui)] mb-3">
        {item.company}
      </p>
      <p
        className={`text-[15px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed ${
          isRight ? "ml-auto" : ""
        } max-w-md`}
      >
        {item.description}
      </p>

      {item.highlight && (
        item.highlightUrl ? (
          <a href={item.highlightUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-[12px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/20 font-[family-name:var(--font-ui)] no-underline hover:bg-[var(--color-gold)]/20 transition-colors">
            {item.highlight}
          </a>
        ) : (
          <span className="inline-block mt-3 text-[12px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/20 font-[family-name:var(--font-ui)]">
            {item.highlight}
          </span>
        )
      )}

      {item.image && (
        <div
          className={`mt-5 rounded-[var(--radius-lg)] overflow-hidden w-48 ${
            isRight ? "ml-auto" : ""
          }`}
        >
          <img
            src={item.image}
            alt={`${item.role}, ${item.company}`}
            className="w-full h-auto object-cover aspect-square"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
