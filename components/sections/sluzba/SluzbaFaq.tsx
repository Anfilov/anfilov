import { Container } from "@/components/ui/Container";
import { FaqSection } from "@/components/ui/FaqSection";
import type { SluzbaFaqItem } from "@/lib/sluzba-types";

interface Props {
  faq: SluzbaFaqItem[];
  serviceName: string;
}

/** FAQ — často kladené otázky. Dvousloupcový accordion. */
export function SluzbaFaq({ faq, serviceName }: Props) {
  const items = faq.map((f) => ({ question: f.q, answer: f.a }));
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);

  return (
    <section
      id="faq"
      className="bg-[var(--color-surface-sunken)] py-[var(--section-padding-y)]"
    >
      <Container>
        <header className="mb-[var(--space-heading-gap)]">
          <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
            Časté otázky ohledně tvorby loga
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0 reveal-stagger">
          <div className="reveal">
            <FaqSection items={left} />
          </div>
          <div className="reveal">
            <FaqSection items={right} />
          </div>
        </div>
      </Container>
    </section>
  );
}
