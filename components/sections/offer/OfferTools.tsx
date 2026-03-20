"use client";

import { Container } from "@/components/ui/Container";

const tools = [
  {
    name: "Adobe Illustrator",
    href: "/nastroje",
    color: "#FF9A00",
    logo: (
      <svg viewBox="0 0 240 234" className="w-full h-full">
        <path fill="currentColor" d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0Z" />
        <path fill="var(--color-surface, #FAF8F4)" d="M116.5 50h15.8l38.5 104h-21.5l-7.1-20.8H103l-7 20.8H75.5L116.5 50Zm23.8 65.5-13.8-40.7h-.3l-13.8 40.7h27.9ZM78 76.8h18.3v77.3H78V76.8Zm0-26.5h18.3v18.5H78V50.3Z" />
      </svg>
    ),
  },
  {
    name: "Adobe Photoshop",
    href: "/nastroje",
    color: "#31A8FF",
    logo: (
      <svg viewBox="0 0 240 234" className="w-full h-full">
        <path fill="currentColor" d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0Z" />
        <path fill="var(--color-surface, #FAF8F4)" d="M54 164.1V61.2c0-.7.3-1.1 1-1.1 1.7 0 3.3-.1 5.6-.2 2.4-.1 5-.2 7.8-.3 2.9-.1 5.9-.2 9.1-.2 3.2-.1 6.2-.1 9.1-.1 8.8 0 16 1 21.8 3.1 5 1.8 9.3 4.4 12.8 7.8 3 3 5.3 6.5 6.8 10.5 1.5 4 2.2 8.2 2.2 12.7 0 10.5-3.6 18.9-10.7 25-7.1 6.1-17 9.2-29.5 9.2-2.9 0-5-.1-6.4-.2-1.4-.1-3-.2-4.8-.4v36.9c.1.8-.4 1.2-1.1 1.2H55.2c-.8 0-1.2-.4-1.2-1.1Zm17.8-86.1v33.4c1.5.3 3 .4 4.4.5 1.7.1 3.4.1 5.2.1 6.5 0 11.7-1.8 15.5-5.5 3.8-3.6 5.7-8.5 5.7-14.4 0-4-1-7.3-2.9-10.1-1.9-2.8-4.5-4.9-7.6-6.2-3.5-1.4-7.5-2.1-12.1-2.1-2.5 0-4.5 0-5.9.1-1.5.1-2.3.2-2.3.2Zm76.4 46.1c0-5.5 1.2-10.6 3.5-15.1 2.3-4.5 5.6-8.4 9.8-11.4 4.1-3 9.2-5.2 15.1-6.5 4.3-.9 9-1.4 14.2-1.4 2.1 0 3.8.1 5.2.2 1.5.1 3.1.3 5 .6V87c0-4.3-1.3-7.8-3.8-10.4-2.8-2.9-7-4.3-12.4-4.3-4 0-7.8.5-11.3 1.6-3.8 1.1-7.1 2.6-9.8 4.3-.5.3-1 .5-1.3.5-.5 0-.8-.3-1-.8l-3.2-8c-.3-.5-.2-1 .3-1.4 3.3-2.5 7.6-4.6 12.8-6.2 5.2-1.7 10.5-2.5 15.8-2.5 10.5 0 18.3 2.7 23.3 8.2 5 5.5 7.5 13 7.5 22.6v52.1c0 1.1.1 2 .2 2.8.1.8.3 1.4.6 1.8.3.4.7.7 1.2.9.5.2 1.2.4 2.1.6.5.2.8.5.8 1v8.4c0 .6-.3 1-1 1.2-2.1.5-4.6.8-7.6.8-3.4 0-6-.7-7.8-2-1.8-1.4-3-3.5-3.7-6.4-3.5 2.8-7.3 5-11.5 6.6-4.2 1.6-8.5 2.3-12.8 2.3-7.5 0-13.6-2.2-18.2-6.7-4.6-4.5-6.9-10.2-6.9-17.2Zm17.4-1.2c0 4 1.3 7.2 3.9 9.5 2.6 2.4 6 3.5 10.1 3.5 3.1 0 6.1-.7 9-2.1 2.9-1.4 5.5-3.3 7.8-5.7v-18.7c-1.5-.4-3.2-.7-5.1-.9-1.9-.2-3.8-.3-5.7-.3-5.9 0-10.6 1.5-14.1 4.5-3.9 3.2-5.9 6.5-5.9 10.2Z" />
      </svg>
    ),
  },
  {
    name: "Claude AI",
    href: "/nastroje",
    color: "#D97757",
    logo: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <path fill="currentColor" d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0Zm28.4 146.8c-3.7 1.9-8.2.4-10.1-3.3L103 113.3H82.4L68 143.2c-1.9 3.7-6.4 5.2-10.1 3.3-3.7-1.9-5.2-6.4-3.3-10.1l36-72c1.4-2.8 4.2-4.5 7.3-4.5h.2c3.1 0 5.9 1.8 7.3 4.6l35.3 72c1.8 3.7.3 8.2-3.3 10.1l-.1.1-.1.1ZM91.4 99.3h16.9l-8.4-17.2-8.5 17.2Z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "/nastroje",
    color: "#E60023",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12c0 5.1 3.2 9.4 7.6 11.2-.1-.9-.2-2.4 0-3.4.2-.9 1.4-6 1.4-6s-.4-.7-.4-1.8c0-1.7 1-2.9 2.2-2.9 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.7-2.2 3.7-5.5 0-2.9-2.1-4.9-5-4.9-3.4 0-5.4 2.6-5.4 5.2 0 1 .4 2.1.9 2.7.1.1.1.2.1.3-.1.4-.3 1.2-.3 1.4-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.7 0-3.8 2.8-7.3 8-7.3 4.2 0 7.5 3 7.5 7 0 4.2-2.6 7.5-6.3 7.5-1.2 0-2.4-.6-2.8-1.4l-.8 2.9c-.3 1.1-.9 2.2-1.4 3 1.1.3 2.2.5 3.4.5 6.6 0 12-5.4 12-12S18.6 0 12 0Z" />
      </svg>
    ),
  },
  {
    name: "Canva",
    href: "/nastroje",
    color: "#00C4CC",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0Zm5.4 14.5c-.2.6-1 1.3-1.6 1.3-.3 0-.4-.2-.4-.5 0-.2.1-.5.2-.8.2-.6.4-1.4.4-1.8 0-.7-.4-1.2-1.2-1.2-1.4 0-2.8 1.8-3.4 3.2-.2.6-1 1.3-1.6 1.3-.3 0-.4-.2-.4-.5 0-.2.1-.5.2-.8l1.2-3.6c.1-.2.1-.4.1-.6 0-.3-.2-.5-.5-.5-.7 0-1.7 1-2.4 2.1-.4.6-.8 1.4-1 2-.2.6-1 1.3-1.6 1.3-.3 0-.4-.2-.4-.5 0-.2.1-.5.2-.8l2-6c.1-.2.1-.4.1-.5 0-.3-.1-.5-.4-.5-.4 0-1 .5-1.7 1.3-.1.2-.3.2-.5.1-.1-.2-.2-.3 0-.5C5.8 7 7 6.2 7.8 6.2c.7 0 1 .5 1 1.1 0 .3-.1.6-.2.9l-.6 2h.1c.8-1.5 2.3-4 4.1-4 1 0 1.5.6 1.5 1.4 0 .3-.1.6-.2 1h.1c.8-1.4 2.2-2.4 3.4-2.4 1.1 0 1.8.7 1.8 1.8 0 .6-.1 1.2-.4 1.9l-.6 1.6c-.1.2-.1.4-.1.5 0 .3.1.5.4.5.5 0 1.1-.6 1.6-1.5.1-.2.3-.2.5-.1.1.2.2.4 0 .6Z" />
      </svg>
    ),
  },
];

export function OfferTools() {
  return (
    <section className="bg-[var(--color-surface)] pb-[var(--section-padding-y)] pt-[var(--space-section-compact)]">
      <Container>
        <header className="mb-[var(--space-heading-gap)]">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-accent)] mb-5 font-[family-name:var(--font-heading)]">
            Aplikace &amp; nástroje
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
            Jaké nástroje při tvorbě používám
          </h2>
        </header>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.href}
              className="group flex flex-col items-start gap-3 text-[var(--color-warm-400)] transition-colors duration-[var(--duration-slow)] hover:text-[var(--tool-color)]"
              style={{ "--tool-color": tool.color } as React.CSSProperties}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16">
                {tool.logo}
              </div>
              <span className="text-[13px] font-semibold text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-[var(--duration-slow)] font-[family-name:var(--font-ui)]">
                {tool.name}
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
