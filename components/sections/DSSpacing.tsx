import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* ── ANFILOV Spacing & Token Data — v3.0 ── */

const spacingTokens = [
  { token: "--s1", value: "4px", label: "S1", desc: "Micro spacing" },
  { token: "--s2", value: "8px", label: "S2 (space-inline)", desc: "Gap mezi inline elementy" },
  { token: "--s3", value: "12px", label: "S3 (space-label)", desc: "Label margin" },
  { token: "--s4", value: "16px", label: "S4", desc: "Within-component" },
  { token: "--s5", value: "24px", label: "S5 (card-gap, stack)", desc: "Card gap, vertikální gap odstavců" },
  { token: "--s6", value: "32px", label: "S6 (card-pad, heading)", desc: "Card padding, heading spacing" },
  { token: "--s7", value: "48px", label: "S7 (group)", desc: "Group spacing" },
  { token: "--s8", value: "64px", label: "S8", desc: "Major blocks" },
  { token: "--s9", value: "96px", label: "S9 (section)", desc: "Section padding" },
  { token: "--s10", value: "128px", label: "S10", desc: "Hero padding" },
];

const radiusTokens = [
  { token: "--radius-sm", value: "10px", label: "SM", desc: "Buttony, inputy" },
  { token: "--radius-md", value: "16px", label: "MD", desc: "Tabulky, kód" },
  { token: "--radius-lg", value: "22px", label: "LG", desc: "Karty, sekce" },
  { token: "--radius-xl", value: "28px", label: "XL", desc: "Mockupy, velké panely" },
  { token: "--radius-2xl", value: "36px", label: "2XL", desc: "Hero prvky" },
  { token: "--radius-full", value: "9999px", label: "Full", desc: "Pills" },
  { token: "--avatar-radius", value: "22%", label: "Squircle", desc: "Avatary (ne kruh!)" },
];

const shadowTokens = [
  { token: "--shadow-xs", label: "XS", value: "0 1px 2px rgba(45,40,32,0.06)", desc: "Jemná elevace" },
  { token: "--shadow-sm", label: "SM", value: "0 2px 8px rgba(45,40,32,0.08)", desc: "Karty, hover" },
  { token: "--shadow-md", label: "MD", value: "0 4px 16px rgba(45,40,32,0.10)", desc: "Dropdowny" },
  { token: "--shadow-lg", label: "LG", value: "0 8px 32px rgba(45,40,32,0.12)", desc: "Elevated panels" },
  { token: "--shadow-xl", label: "XL", value: "0 16px 48px rgba(45,40,32,0.16)", desc: "Modály" },
];

const accentShadows = [
  { token: "--shadow-gold-sm", label: "Gold SM", value: "0 2px 8px rgba(200,168,78,0.12)" },
  { token: "--shadow-gold-md", label: "Gold MD", value: "0 4px 16px rgba(200,168,78,0.15)" },
  { token: "--shadow-forest-sm", label: "Forest SM", value: "0 2px 8px rgba(26,58,46,0.15)" },
  { token: "--shadow-forest-md", label: "Forest MD", value: "0 4px 12px rgba(26,58,46,0.25)" },
];

const componentTokens = [
  { group: "Button", tokens: [
    { token: "--btn-radius", value: "var(--radius-sm) → 10px" },
    { token: "--btn-padding-x/y", value: "26px / 13px" },
    { token: "--btn-shadow", value: "var(--shadow-forest-md)" },
  ]},
  { group: "Card", tokens: [
    { token: "--card-radius", value: "var(--radius-lg) → 22px" },
    { token: "--card-padding", value: "32px" },
    { token: "--card-border", value: "var(--color-border)" },
    { token: "--card-shadow", value: "var(--shadow-sm)" },
  ]},
  { group: "Input", tokens: [
    { token: "--input-radius", value: "var(--radius-sm) → 10px" },
    { token: "--input-border", value: "var(--color-border)" },
    { token: "--input-border-focus", value: "var(--color-forest-mid)" },
  ]},
  { group: "Badge", tokens: [
    { token: "--badge-radius", value: "6px" },
    { token: "--badge-padding-x/y", value: "11px / 5px" },
  ]},
  { group: "Avatar", tokens: [
    { token: "--avatar-radius", value: "22% (squircle)" },
  ]},
  { group: "Navigation", tokens: [
    { token: "--nav-height", value: "72px" },
    { token: "--nav-bg", value: "var(--color-surface-elevated)" },
    { token: "--nav-border", value: "var(--color-border)" },
  ]},
];

const animationTokens = [
  { token: "--duration-fast", value: "120ms", desc: "Hovers, color changes" },
  { token: "--duration-normal", value: "200ms", desc: "Transforms, reveals" },
  { token: "--duration-slow", value: "350ms", desc: "Panel transitions" },
  { token: "--easing-default", value: "cubic-bezier(0.4, 0, 0.2, 1)", desc: "Default easing" },
  { token: "--easing-enter", value: "cubic-bezier(0, 0, 0.2, 1)", desc: "Enter/appear" },
  { token: "--easing-exit", value: "cubic-bezier(0.4, 0, 1, 1)", desc: "Exit/disappear" },
];

const gridTokens = [
  { label: "Max-width", value: "1120px" },
  { label: "Sloupce", value: "12" },
  { label: "Gutter", value: "24px (--s5)" },
  { label: "Margin", value: "32px (--s6)" },
  { label: "Breakpoints", value: "sm 640 · md 768 · lg 1024 · xl 1280" },
];

function SpacingBar({ value, label, token, desc }: { value: string; label: string; token: string; desc: string }) {
  const px = parseInt(value);
  const maxWidth = 128;
  const widthPercent = Math.min((px / maxWidth) * 100, 100);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_auto] gap-2 lg:gap-4 items-center py-3 border-b border-[var(--color-border)] last:border-b-0">
      <div>
        <p className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] tracking-tight">
          {label}
        </p>
        <p className="text-[11px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
          {desc}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div
          className="h-6 rounded-[6px] bg-[rgba(200,168,78,0.15)] border border-[rgba(200,168,78,0.30)] transition-[width] duration-[var(--duration-normal)]"
          style={{ width: `${widthPercent}%`, minWidth: "4px" }}
        />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-mono font-medium text-[var(--color-gold)] bg-[rgba(200,168,78,0.08)] px-2 py-0.5 rounded-[6px]">
          {value}
        </span>
        <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] hidden sm:inline">
          {token}
        </span>
      </div>
    </div>
  );
}

export function DSSpacing() {
  return (
    <section className="bg-white py-[var(--section-padding-y)] border-t border-[var(--color-border)]">
      <Container>
        <SectionHeading
          overline="Brand Identity"
          title="Spacing, Radius & Tokens"
          subtitle="8pt grid systém. Veškerý spacing vychází z násobků 4 px / 8 px."
        />

        {/* ── Spacing Scale ── */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Spacing Scale (8pt grid)
          </p>
          <div className="bg-[var(--color-surface)] rounded-[var(--card-radius)] border border-[var(--color-border)] p-5 sm:p-6">
            {spacingTokens.map((s) => (
              <SpacingBar key={s.token} value={s.value} label={s.label} token={s.token} desc={s.desc} />
            ))}
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Grid
          </p>
          <div className="bg-[var(--color-surface)] rounded-[var(--card-radius)] border border-[var(--color-border)] p-5 sm:p-6">
            {gridTokens.map((g) => (
              <div key={g.label} className="flex items-center justify-between py-3 border-b border-[var(--color-border)] last:border-b-0">
                <span className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] tracking-tight">
                  {g.label}
                </span>
                <span className="text-xs font-mono text-[var(--color-gold)]">
                  {g.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Border Radius ── */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Border Radius
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {radiusTokens.map((r) => (
              <div key={r.token} className="flex flex-col items-center gap-3">
                <div
                  className="w-20 h-20 bg-[rgba(200,168,78,0.10)] border-2 border-[var(--color-gold)] flex items-center justify-center"
                  style={{ borderRadius: r.value }}
                >
                  <span className="text-[10px] font-mono font-medium text-[var(--color-gold)]">
                    {r.value}
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)]">
                    {r.label}
                  </p>
                  <p className="text-[10px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Shadows ── */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-2 font-[family-name:var(--font-heading)] tracking-tight">
            Shadows
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] mb-5">
            Vždy z <code className="text-xs bg-[var(--color-surface-sunken)] px-1.5 py-0.5 rounded-[4px]">rgba(45,40,32,…)</code> — warm tón. <strong>Nikdy čistě černé</strong> (#000).
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-[var(--space-grid)] mb-6">
            {shadowTokens.map((s) => (
              <div
                key={s.token}
                className="bg-white rounded-[var(--card-radius)] p-5 border border-[var(--color-border)]"
                style={{ boxShadow: s.value }}
              >
                <p className="text-sm font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] tracking-tight mb-1">
                  {s.label}
                </p>
                <p className="text-[11px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          {/* Accent shadows */}
          <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
            Accent Shadows
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[var(--space-grid)]">
            {accentShadows.map((s) => (
              <div
                key={s.token}
                className="bg-white rounded-[var(--card-radius)] p-5 border border-[var(--color-border)]"
                style={{ boxShadow: s.value }}
              >
                <p className="text-sm font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] tracking-tight mb-1">
                  {s.label}
                </p>
                <p className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                  {s.token}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Component Tokens ── */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Component Tokens
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-grid)]">
            {componentTokens.map((group) => (
              <div key={group.group} className="bg-[var(--color-surface)] rounded-[var(--card-radius)] border border-[var(--color-border)] p-5">
                <p className="text-sm font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] tracking-tight mb-3">
                  {group.group}
                </p>
                <div className="space-y-2">
                  {group.tokens.map((t) => (
                    <div key={t.token} className="flex items-start justify-between gap-2">
                      <span className="text-[11px] font-mono text-[var(--color-text-secondary)] shrink-0">
                        {t.token.replace("--", "")}
                      </span>
                      <span className="text-[11px] font-mono text-[var(--color-gold)] text-right">
                        {t.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Animation ── */}
        <div>
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-2 font-[family-name:var(--font-heading)] tracking-tight">
            Motion
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] mb-5">
            Max 400 ms. Žádný bounce easing. Respektuj <code className="text-xs bg-[var(--color-surface-sunken)] px-1.5 py-0.5 rounded-[4px]">prefers-reduced-motion: reduce</code>.
          </p>
          <div className="bg-[var(--color-surface)] rounded-[var(--card-radius)] border border-[var(--color-border)] p-5 sm:p-6">
            {animationTokens.map((a) => (
              <div key={a.token} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3 border-b border-[var(--color-border)] last:border-b-0">
                <span className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] tracking-tight sm:w-44 shrink-0">
                  {a.token.replace("--", "")}
                </span>
                <span className="text-xs font-mono text-[var(--color-gold)]">
                  {a.value}
                </span>
                <span className="text-[11px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
                  {a.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
