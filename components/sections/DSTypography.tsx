import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fontMeta } from "@/lib/fonts";

/* ── ANFILOV Typographic Scale — Major Third (≈ 1.25)
   One font: Averta Standard across the entire identity.
   Minimum size: 12 px. Never use weight 800 (Extra Bold).
   ──────────────────────────────────────────────────────── */

const headingSizes = [
  { tag: "Display", label: "Display", px: "48", weight: "700", tracking: "-1.5px", lineHeight: "1.08" },
  { tag: "H1", label: "Heading 1", px: "38", weight: "700", tracking: "-1.0px", lineHeight: "1.12" },
  { tag: "H2", label: "Heading 2", px: "30", weight: "700", tracking: "-0.5px", lineHeight: "1.20" },
  { tag: "H3", label: "Heading 3", px: "24", weight: "700", tracking: "-0.3px", lineHeight: "1.28" },
  { tag: "H4", label: "Heading 4", px: "20", weight: "700", tracking: "0", lineHeight: "1.32" },
  { tag: "H5", label: "Heading 5", px: "18", weight: "600", tracking: "0", lineHeight: "1.40" },
  { tag: "H6", label: "Heading 6", px: "16", weight: "600", tracking: "0", lineHeight: "1.40" },
];

const bodySizes = [
  { label: "Body Large (subtitle)", px: "20", lineHeight: "1.55", weight: "400" },
  { label: "Body", px: "18", lineHeight: "1.70", weight: "400" },
  { label: "Body Small", px: "16", lineHeight: "1.65", weight: "400" },
  { label: "Small / UI", px: "14", lineHeight: "1.40", weight: "400–600" },
  { label: "Overline", px: "12", lineHeight: "1.40", weight: "600", extra: "uppercase, tracking 3px" },
];

export function DSTypography() {
  return (
    <section className="bg-white py-[var(--section-padding-y)] border-t border-[var(--color-border)]">
      <Container>
        <SectionHeading
          overline="Brand Identity"
          title="Typografie"
          subtitle={`Jedno písmo: ${fontMeta.heading.name}. Škála založená na Major Third (≈ 1.25). Font stack: 'Averta Standard', -apple-system, BlinkMacSystemFont, sans-serif.`}
        />

        {/* ── Font specimen ── */}
        <div className="mb-[var(--space-block)]">
          <div className="bg-[var(--color-surface)] rounded-[var(--card-radius)] border border-[var(--color-border)] p-6 sm:p-8">
            <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-4 font-[family-name:var(--font-ui)]">
              Averta Standard
            </p>
            <p className="text-4xl sm:text-5xl font-bold tracking-tight font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] leading-[1.08] mb-4">
              {fontMeta.heading.name}
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {["400 Regular", "400 Italic", "600 SemiBold", "700 Bold", "700 Bold Italic"].map((w) => (
                <span
                  key={w}
                  className="px-3 py-1 text-xs font-mono rounded-[6px] bg-[var(--color-surface-sunken)] text-[var(--color-text-secondary)]"
                >
                  {w}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <p className="text-2xl font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] font-bold tracking-tight leading-snug">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className="text-2xl font-[family-name:var(--font-heading)] text-[var(--color-text-secondary)] font-bold tracking-tight leading-snug">
                  abcdefghijklmnopqrstuvwxyz
                </p>
                <p className="text-2xl font-[family-name:var(--font-body)] text-[var(--color-text-tertiary)] leading-snug">
                  0123456789 !@#$%&amp;
                </p>
              </div>
              <div>
                <p className="text-2xl font-[family-name:var(--font-body)] text-[var(--color-text-primary)] leading-snug">
                  Příliš žluťoučký kůň úpěl
                </p>
                <p className="text-2xl font-[family-name:var(--font-body)] text-[var(--color-text-secondary)] italic leading-snug">
                  ďábelské ódy — číslo 42
                </p>
                <p className="text-lg font-[family-name:var(--font-body)] text-[var(--color-text-tertiary)] leading-relaxed mt-2">
                  Czech diacritics: ě š č ř ž ý á í é ů ú ó ď ť ň
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Heading Scale ── */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-6 font-[family-name:var(--font-heading)] tracking-tight">
            Heading Scale
          </p>
          <div className="space-y-0 divide-y divide-[var(--color-border)]">
            {headingSizes.map((h) => (
              <div key={h.tag} className="py-5 sm:py-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-baseline">
                <div>
                  <p
                    className="font-[family-name:var(--font-heading)] text-[var(--color-text-primary)]"
                    style={{
                      fontSize: `${h.px}px`,
                      fontWeight: Number(h.weight),
                      letterSpacing: h.tracking,
                      lineHeight: Number(h.lineHeight),
                    }}
                  >
                    {h.label}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="text-xs font-mono text-[var(--color-text-tertiary)] bg-[var(--color-surface-sunken)] px-2 py-0.5 rounded-[6px]">
                    {h.px}px
                  </span>
                  <span className="text-xs font-mono text-[var(--color-text-tertiary)]">
                    wt {h.weight}
                  </span>
                  <span className="text-xs font-mono text-[var(--color-text-tertiary)]">
                    lh {h.lineHeight}
                  </span>
                  <span className="text-xs font-mono text-[var(--color-text-tertiary)]">
                    ls {h.tracking}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Body Scale ── */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-6 font-[family-name:var(--font-heading)] tracking-tight">
            Body &amp; UI Scale
          </p>
          <div className="space-y-0 divide-y divide-[var(--color-border)]">
            {bodySizes.map((b) => (
              <div key={b.label} className="py-4 sm:py-5 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-3 items-baseline">
                <div>
                  <p
                    className="font-[family-name:var(--font-body)] text-[var(--color-text-primary)]"
                    style={{
                      fontSize: `${b.px}px`,
                      fontWeight: b.weight.includes("–") ? 400 : Number(b.weight),
                      lineHeight: Number(b.lineHeight),
                    }}
                  >
                    {b.label} — Příliš žluťoučký kůň úpěl ďábelské ódy.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="text-xs font-mono text-[var(--color-text-tertiary)] bg-[var(--color-surface-sunken)] px-2 py-0.5 rounded-[6px]">
                    {b.px}px
                  </span>
                  <span className="text-xs font-mono text-[var(--color-text-tertiary)]">
                    wt {b.weight}
                  </span>
                  <span className="text-xs font-mono text-[var(--color-text-tertiary)]">
                    lh {b.lineHeight}
                  </span>
                  {b.extra && (
                    <span className="text-xs font-mono text-[var(--color-gold)]">
                      {b.extra}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Rules ── */}
        <div className="bg-[var(--color-warning-subtle)] border border-[var(--color-gold)]/20 rounded-[var(--radius-lg)] p-5">
          <p className="text-sm font-bold text-[var(--color-warm-700)] mb-2 font-[family-name:var(--font-heading)]">
            Pravidla
          </p>
          <ul className="space-y-1 text-[13px] text-[var(--color-warm-600)] font-[family-name:var(--font-body)]">
            <li>Jedno písmo: <strong>Averta Standard</strong> pro veškerý text</li>
            <li>Minimální velikost: <strong>12 px</strong></li>
            <li>Nikdy nepoužívat font-weight 800 (Extra Bold)</li>
            <li>Font stack: <code className="text-xs bg-white/60 px-1.5 py-0.5 rounded-[4px]">&apos;Averta Standard&apos;, -apple-system, BlinkMacSystemFont, sans-serif</code></li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
