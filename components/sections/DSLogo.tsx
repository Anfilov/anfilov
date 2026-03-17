import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* ══════════════════════════════════════════════════════════
   ANFILOV Logo SVGs — from brand guidelines v3.0
   Symbol is ALWAYS #1C1C1C on light, white on dark.
   Never change color, deform, or simplify.
   ══════════════════════════════════════════════════════════ */

function SymbolDark({ size = 80 }: { size?: number }) {
  return (
    <svg viewBox="0 0 360 360" width={size} height={size} aria-label="ANFILOV symbol">
      <path fill="#1c1c1c" d="M281.8,0H78.2C35.01,0,0,35,0,78.16v203.67C0,325,35.01,360,78.2,360h203.6c43.19,0,78.2-35,78.2-78.16V78.16C360,35,324.99,0,281.8,0h0Z"/>
      <path fill="#fff" d="M279.63,33.2c26,0,47.16,21.15,47.16,47.14v199.33c0,25.99-21.16,47.14-47.16,47.14H80.37c-26,0-47.16-21.15-47.16-47.14V80.33c0-25.99,21.16-47.14,47.16-47.14h199.27"/>
      <path fill="#1c1c1c" d="M163.76,92.32h32.24l62.58,168.31h-34.85l-11.62-33.66h-64.48l-11.38,33.66h-34.85l62.35-168.31ZM202.64,198.53l-22.52-65.9h-.47l-22.52,65.9h45.52Z"/>
    </svg>
  );
}

function SymbolWhite({ size = 80 }: { size?: number }) {
  return (
    <svg viewBox="0 0 360 360" width={size} height={size} aria-label="ANFILOV symbol white">
      <path fill="#fff" d="M281.8,0H78.2C35.01,0,0,35,0,78.16v203.67C0,325,35.01,360,78.2,360h203.6c43.19,0,78.2-35,78.2-78.16V78.16C360,35,324.99,0,281.8,0ZM326.79,279.67c0,25.99-21.16,47.14-47.16,47.14H80.37c-26,0-47.16-21.15-47.16-47.14V80.33c0-25.99,21.16-47.14,47.16-47.14h199.27c26,0,47.16,21.15,47.16,47.14v199.33Z"/>
      <path fill="#fff" d="M163.76,92.32h32.24l62.58,168.31h-34.85l-11.62-33.66h-64.48l-11.38,33.66h-34.85l62.35-168.31ZM202.64,198.53l-22.52-65.9h-.47l-22.52,65.9h45.52Z"/>
    </svg>
  );
}

function FullLogoDark({ width = 360 }: { width?: number }) {
  const height = width * (90 / 360);
  return (
    <svg viewBox="0 0 1430 360" width={width} height={height} aria-label="ANFILOV full logo">
      <path fill="#1c1c1c" d="M281.8,0H78.2C35.01,0,0,35,0,78.16v203.67c0,43.17,35.01,78.16,78.2,78.16h203.6c43.19,0,78.2-35,78.2-78.16V78.16C360,35,324.99,0,281.8,0h0Z"/>
      <path fill="#fff" d="M279.63,33.2c26,0,47.16,21.15,47.16,47.14v199.33c0,25.99-21.16,47.14-47.16,47.14H80.37c-26,0-47.16-21.15-47.16-47.14V80.33c0-25.99,21.16-47.14,47.16-47.14h199.27"/>
      <path fill="#1c1c1c" d="M510.78,92.34h32.24l62.58,168.3h-34.85l-11.62-33.66h-64.48l-11.38,33.66h-34.85l62.34-168.3ZM549.66,198.53l-22.52-65.9h-.47l-22.52,65.9h45.51Z"/>
      <path fill="#1c1c1c" d="M622.19,92.34h32.71l75.62,113.54h.47v-113.54h32.95v168.3h-33.42l-74.67-111.17h-.47v111.17h-33.19V92.34Z"/>
      <path fill="#1c1c1c" d="M792.63,92.34h111.65v29.63h-78.7v45.04h65.66v29.87h-65.66v63.77h-32.95V92.34Z"/>
      <path fill="#1c1c1c" d="M926.56,92.34h33.9v168.3h-33.9V92.34Z"/>
      <path fill="#1c1c1c" d="M992.7,92.34h33.9v138.67h74.43v29.63h-108.33V92.34Z"/>
      <path fill="#1c1c1c" d="M1103.25,176.49c0-50.02,34.85-86.28,85.81-86.28s85.57,34.85,85.57,86.28-36.27,86.29-85.57,86.29-85.81-36.27-85.81-86.29ZM1239.79,176.49c0-31.76-21.81-54.99-50.73-54.99-30.34,0-51.2,24.42-51.2,54.99s20.86,55,51.2,55,50.73-23.23,50.73-55Z"/>
      <path fill="#1c1c1c" d="M1275.43,92.34h36.03l41.25,120.42h.47l41.01-120.42h35.56l-62.34,168.3h-29.39l-62.58-168.3Z"/>
      <path fill="#1c1c1c" d="M163.76,92.32h32.24l62.58,168.31h-34.85l-11.62-33.66h-64.48l-11.38,33.66h-34.85l62.35-168.31ZM202.64,198.53l-22.52-65.9h-.47l-22.52,65.9h45.52Z"/>
    </svg>
  );
}

function FullLogoWhite({ width = 360 }: { width?: number }) {
  const height = width * (90 / 360);
  return (
    <svg viewBox="0 0 1430 360" width={width} height={height} aria-label="ANFILOV full logo white">
      <path fill="#fff" d="M281.8,0H78.2C35.01,0,0,35,0,78.16v203.67C0,325,35.01,360,78.2,360h203.6c43.19,0,78.2-35,78.2-78.16V78.16C360,35,324.99,0,281.8,0ZM326.79,279.67c0,25.99-21.16,47.14-47.16,47.14H80.37c-26,0-47.16-21.15-47.16-47.14V80.33c0-25.99,21.16-47.14,47.16-47.14h199.27c26,0,47.16,21.15,47.16,47.14v199.33Z"/>
      <path fill="#fff" d="M163.76,92.32h32.24l62.58,168.31h-34.85l-11.62-33.66h-64.48l-11.38,33.66h-34.85l62.35-168.31ZM202.64,198.53l-22.52-65.9h-.47l-22.52,65.9h45.52Z"/>
      <path fill="#fff" d="M510.78,92.34h32.24l62.58,168.3h-34.85l-11.62-33.66h-64.48l-11.38,33.66h-34.85l62.34-168.3ZM549.66,198.53l-22.52-65.9h-.47l-22.52,65.9h45.51Z"/>
      <path fill="#fff" d="M622.19,92.34h32.71l75.62,113.54h.47v-113.54h32.95v168.3h-33.42l-74.67-111.17h-.47v111.17h-33.19V92.34Z"/>
      <path fill="#fff" d="M792.63,92.34h111.65v29.63h-78.7v45.04h65.66v29.87h-65.66v63.77h-32.95V92.34Z"/>
      <path fill="#fff" d="M926.56,92.34h33.9v168.3h-33.9V92.34Z"/>
      <path fill="#fff" d="M992.7,92.34h33.9v138.67h74.43v29.63h-108.33V92.34Z"/>
      <path fill="#fff" d="M1103.25,176.49c0-50.02,34.85-86.28,85.81-86.28s85.57,34.85,85.57,86.28-36.27,86.29-85.57,86.29-85.81-36.27-85.81-86.29ZM1239.79,176.49c0-31.76-21.81-54.99-50.73-54.99-30.34,0-51.2,24.42-51.2,54.99s20.86,55,51.2,55,50.73-23.23,50.73-55Z"/>
      <path fill="#fff" d="M1275.43,92.34h36.03l41.25,120.42h.47l41.01-120.42h35.56l-62.34,168.3h-29.39l-62.58-168.3Z"/>
    </svg>
  );
}

/* ── Reusable display card ── */
function DisplayCard({
  label,
  dark = false,
  children,
}: {
  label: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-0">
      <p className="text-[12px] font-semibold uppercase tracking-[3px] text-[var(--color-gold)] font-[family-name:var(--font-ui)] mb-3">
        {label}
      </p>
      <div
        className={`
          flex items-center justify-center
          rounded-[var(--radius-lg)] border
          min-h-[160px] px-8 py-10
          ${
            dark
              ? "bg-[#1C1C1C] border-[rgba(245,240,230,0.10)]"
              : "bg-white border-[var(--color-warm-200)]"
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}

export function DSLogo() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)] border-b border-[var(--color-border)]">
      <Container>
        <SectionHeading
          overline="Brand Identity"
          title="Logo"
          subtitle="Logo usage guidelines — varianty, clearspace, minimální velikosti a pravidla pro favicon."
        />

        {/* =========== LOGO VARIANTS — LIGHT BG =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Light Background
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-grid)]">
            <DisplayCard label="Full Logo — Dark">
              <FullLogoDark width={280} />
            </DisplayCard>

            <DisplayCard label="Symbol — Dark">
              <SymbolDark size={80} />
            </DisplayCard>

            <DisplayCard label="Symbol — Minimum (24px)">
              <SymbolDark size={24} />
            </DisplayCard>
          </div>
        </div>

        {/* =========== LOGO VARIANTS — DARK BG =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Dark Background
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-grid)]">
            <DisplayCard label="Full Logo — White" dark>
              <FullLogoWhite width={280} />
            </DisplayCard>

            <DisplayCard label="Symbol — White (Outline)" dark>
              <SymbolWhite size={80} />
            </DisplayCard>

            <DisplayCard label="Favicon (bílý glyf na tmavém)" dark>
              <div className="flex items-center gap-4">
                {[48, 32, 16].map((s) => (
                  <div key={s} className="flex flex-col items-center gap-2">
                    <div className="bg-[#1C1C1C] rounded-[4px] flex items-center justify-center" style={{ width: s, height: s }}>
                      <SymbolWhite size={s} />
                    </div>
                    <span className="text-[10px] font-mono text-[rgba(245,240,230,0.5)]">{s}px</span>
                  </div>
                ))}
              </div>
            </DisplayCard>
          </div>
        </div>

        {/* =========== CLEARSPACE =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Clearspace
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed mb-6 max-w-2xl">
            Ochranná zóna kolem loga musí odpovídat výšce písmene &ldquo;A&rdquo; ze symbolu.
            Žádný text, grafika ani jiné prvky nesmí do této zóny zasahovat.
          </p>

          <div className="inline-flex items-center justify-center bg-white border border-[var(--color-warm-200)] rounded-[var(--radius-lg)] p-14 sm:p-20">
            <div className="relative">
              {/* Dashed clearspace border */}
              <div
                className="absolute border-2 border-dashed border-[var(--color-gold)]/40 rounded-[var(--radius-sm)]"
                style={{
                  top: "-48px",
                  right: "-48px",
                  bottom: "-48px",
                  left: "-48px",
                }}
              />

              {/* Dimension marker — top */}
              <div
                className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
                style={{ top: "-44px" }}
              >
                <span className="text-[11px] font-mono text-[var(--color-gold)] font-semibold leading-none">
                  A
                </span>
              </div>

              {/* Dimension marker — left */}
              <div
                className="absolute top-1/2 -translate-y-1/2 flex items-center"
                style={{ left: "-44px" }}
              >
                <span className="text-[11px] font-mono text-[var(--color-gold)] font-semibold leading-none">
                  A
                </span>
              </div>

              {/* The logo */}
              <FullLogoDark width={240} />
            </div>
          </div>
        </div>

        {/* =========== MINIMUM SIZE =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Minimální velikosti
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed mb-6 max-w-2xl">
            Minimální symbol: <strong>24 px</strong> (digitál) / 8 mm (tisk).
            Minimální logotyp: <strong>120 px</strong> (digitál) / 30 mm (tisk).
          </p>

          <div className="flex flex-wrap items-end gap-8">
            {[
              { size: 80, ok: true, label: "80px" },
              { size: 48, ok: true, label: "48px" },
              { size: 32, ok: true, label: "32px" },
              { size: 24, ok: true, label: "24px min" },
              { size: 16, ok: false, label: "16px" },
            ].map(({ size, ok, label }) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <div
                  className={`
                    relative flex items-center justify-center
                    rounded-[var(--radius-md)] border px-4 py-3
                    ${
                      ok
                        ? "bg-white border-[var(--color-warm-200)]"
                        : "bg-[var(--color-error-subtle)] border-[var(--color-error)]/30"
                    }
                  `}
                >
                  <SymbolDark size={size} />
                  {!ok && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        width="100%"
                        height="100%"
                        className="absolute inset-0 text-[var(--color-error)]/40"
                        aria-hidden="true"
                      >
                        <line
                          x1="0"
                          y1="100%"
                          x2="100%"
                          y2="0"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <span
                  className={`text-[11px] font-mono ${
                    ok
                      ? "text-[var(--color-text-tertiary)]"
                      : "text-[var(--color-error)] font-semibold"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =========== DO'S & DON'TS =========== */}
        <div>
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Pravidla
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-grid)]">
            {/* Do's */}
            <div className="bg-[var(--color-success-subtle)] border border-[var(--color-success)]/20 rounded-[var(--radius-lg)] p-6">
              <p className="text-sm font-bold text-[var(--color-success)] mb-3 font-[family-name:var(--font-heading)]">
                Správně
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-warm-700)] font-[family-name:var(--font-body)]">
                <li>Symbol vždy #1C1C1C na světlém</li>
                <li>Bílá outline varianta na tmavém</li>
                <li>Clearspace = výška písmene &ldquo;A&rdquo;</li>
                <li>Favicon: nezměněný SVG symbol, žádné zjednodušování</li>
                <li>Wordmark ve stejné barvě jako symbol</li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="bg-[var(--color-error-subtle)] border border-[var(--color-error)]/20 rounded-[var(--radius-lg)] p-6">
              <p className="text-sm font-bold text-[var(--color-error)] mb-3 font-[family-name:var(--font-heading)]">
                Špatně
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-warm-700)] font-[family-name:var(--font-body)]">
                <li>Měnit barvu symbolu na jinou než černá/bílá</li>
                <li>Používat zlatou na symbol loga</li>
                <li>Deformovat poměr stran</li>
                <li>Rotovat logo</li>
                <li>Symbol pod 24 px</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
