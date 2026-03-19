"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  Heart,
  Mail,
  Search,
  Settings,
  Star,
  Trash2,
  Upload,
  X,
  Zap,
  Globe,
  Lock,
  Eye,
  Bell,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Toggle } from "@/components/ui/Toggle";
import { Avatar } from "@/components/ui/Avatar";
import { Tabs } from "@/components/ui/Tabs";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Separator } from "@/components/ui/Separator";
import { Tooltip } from "@/components/ui/Tooltip";
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/Card";
import { Alert } from "@/components/ui/Alert";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DropdownMenu } from "@/components/ui/DropdownMenu";
import { Accordion } from "@/components/ui/Accordion";
import { Pagination } from "@/components/ui/Pagination";
import { Rating } from "@/components/ui/Rating";
import { Table } from "@/components/ui/Table";

export function DSElements() {
  const [toggleA, setToggleA] = useState(false);
  const [toggleB, setToggleB] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)] border-t border-[var(--color-border)]">
      <Container>
        <SectionHeading
          overline="Brand Identity"
          title="Elementy"
          subtitle="Všechny interaktivní komponenty — buttony, formuláře, badges, karty, togles, avatary a další."
        />

        {/* =========== BUTTONS — LIGHT BG =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Buttony — Light Background
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] mb-5">
            <strong>Forest</strong> = primární na světlém pozadí. Gold se na světlém pozadí <strong>nikdy nepoužívá</strong>.
          </p>

          {/* Variants */}
          <div className="mb-6">
            <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
              Varianty
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Primary (Forest)</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
              Velikosti
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* With icons */}
          <div className="mb-6">
            <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
              S ikonami
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button>
                Začít <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button variant="outline">
                <Download size={16} aria-hidden="true" /> Stáhnout
              </Button>
              <Button variant="ghost">
                <Heart size={16} aria-hidden="true" /> Oblíbit
              </Button>
            </div>
          </div>

          {/* Disabled */}
          <div>
            <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
              Disabled
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button disabled>Disabled Primary</Button>
              <Button variant="outline" disabled>Disabled Outline</Button>
            </div>
          </div>
        </div>

        {/* =========== BUTTONS — DARK BG =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Buttony — Dark Background
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] mb-5">
            <strong>Gold</strong> = primární na tmavém pozadí. Forest se na tmavém <strong>nikdy nepoužívá</strong>.
          </p>
          <div className="bg-[var(--color-surface-dark)] rounded-[var(--radius-lg)] p-8 flex flex-wrap items-center gap-3">
            <Button variant="secondary">Gold Button</Button>
            <button className="inline-flex items-center justify-center gap-2 font-semibold font-[family-name:var(--font-ui)] tracking-[0.01em] text-[14px] px-[26px] py-[13px] min-h-[44px] rounded-[10px] cursor-pointer select-none border-[1.5px] border-[rgba(245,240,230,0.20)] text-[var(--color-cream)] bg-transparent hover:border-[var(--color-gold-light)] hover:text-[var(--color-gold-light)] transition-all duration-200">
              Outline Dark
            </button>
            <button className="inline-flex items-center justify-center gap-2 font-semibold font-[family-name:var(--font-ui)] tracking-[0.01em] text-[14px] px-[26px] py-[13px] min-h-[44px] rounded-[10px] cursor-pointer select-none text-[var(--color-cream)] bg-transparent hover:text-[var(--color-gold-light)] transition-all duration-200">
              Ghost Dark
            </button>
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== BADGES =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Badges / Tagy
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Default</Badge>
            <Badge variant="accent">Gold</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== FORM INPUTS =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Formuláře
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Input label="Text Input" placeholder="Vaše jméno" />
            <Input label="Email" type="email" placeholder="email@example.com" />
            <Input label="S chybou" placeholder="Neplatná hodnota" error="Toto pole je povinné" />
            <Input label="Povinné" placeholder="Povinné" required />
            <Input label="Disabled" placeholder="Nelze editovat" disabled />
            <Select
              label="Select"
              placeholder="Vyberte možnost"
              options={[
                { value: "opt1", label: "Možnost jedna" },
                { value: "opt2", label: "Možnost dva" },
                { value: "opt3", label: "Možnost tři" },
              ]}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <Textarea label="Textarea" placeholder="Napište zprávu..." />
            <Textarea label="S chybou" placeholder="Něco špatně..." error="Zadejte alespoň 10 znaků" />
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== TOGGLES & CHECKBOXES =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Toggles &amp; Checkboxes
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] font-[family-name:var(--font-ui)]">
                Toggles
              </p>
              <Toggle label="Notifikace" checked={toggleA} onChange={setToggleA} />
              <Toggle label="Dark mode" checked={toggleB} onChange={setToggleB} />
            </div>
            <div className="space-y-4">
              <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] font-[family-name:var(--font-ui)]">
                Checkboxes
              </p>
              <Checkbox label="Souhlasím s podmínkami" />
              <Checkbox label="Odebírat newsletter" />
              <Checkbox label="Zapamatovat si mě" />
            </div>
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== AVATARS =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-2 font-[family-name:var(--font-heading)] tracking-tight">
            Avatary
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] mb-5">
            Squircle (22 %) — <strong>nikdy kruh (50 %)</strong>.
          </p>
          <div className="flex flex-wrap items-end gap-4">
            <div className="text-center">
              <Avatar size="sm" initials="S" alt="Small" />
              <p className="text-[11px] text-[var(--color-text-tertiary)] mt-2 font-mono">32px</p>
            </div>
            <div className="text-center">
              <Avatar size="md" initials="MD" alt="Medium" />
              <p className="text-[11px] text-[var(--color-text-tertiary)] mt-2 font-mono">44px</p>
            </div>
            <div className="text-center">
              <Avatar size="lg" initials="LG" alt="Large" />
              <p className="text-[11px] text-[var(--color-text-tertiary)] mt-2 font-mono">64px</p>
            </div>
            <div className="ml-4">
              <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-2 font-[family-name:var(--font-ui)]">
                Stacked
              </p>
              <div className="flex -space-x-2">
                <Avatar size="md" initials="A" alt="User A" className="ring-2 ring-[var(--color-surface)]" />
                <Avatar size="md" initials="B" alt="User B" className="ring-2 ring-[var(--color-surface)]" />
                <Avatar size="md" initials="C" alt="User C" className="ring-2 ring-[var(--color-surface)]" />
                <Avatar size="md" initials="+3" alt="3 more users" className="ring-2 ring-[var(--color-surface)]" />
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== ICONS =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-2 font-[family-name:var(--font-heading)] tracking-tight">
            Ikony (Lucide)
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] mb-5">
            Styl: line, 1.5 px stroke, rounded caps. Velikost: 20 px (inline), 24 px (standalone). Barva: warm-700 (default), gold (accent).
          </p>
          <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 gap-3">
            {[
              { icon: ArrowRight, name: "ArrowRight" },
              { icon: Check, name: "Check" },
              { icon: ChevronDown, name: "ChevronDown" },
              { icon: Download, name: "Download" },
              { icon: Heart, name: "Heart" },
              { icon: Mail, name: "Mail" },
              { icon: Search, name: "Search" },
              { icon: Settings, name: "Settings" },
              { icon: Star, name: "Star" },
              { icon: Trash2, name: "Trash2" },
              { icon: Upload, name: "Upload" },
              { icon: X, name: "X" },
              { icon: Zap, name: "Zap", accent: true },
              { icon: Globe, name: "Globe" },
              { icon: Lock, name: "Lock" },
              { icon: Eye, name: "Eye" },
              { icon: Bell, name: "Bell", accent: true },
            ].map(({ icon: Icon, name, accent }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-1.5 p-3 rounded-[var(--radius-lg)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] hover:border-[var(--color-gold-light)] hover:shadow-[var(--shadow-gold-sm)] transition-[border-color,box-shadow] duration-[var(--duration-fast)]"
              >
                <Icon
                  size={20}
                  className={accent ? "text-[var(--color-gold)]" : "text-[var(--color-warm-700)]"}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-[9px] font-mono text-[var(--color-text-tertiary)] truncate w-full text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== TABS =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Tabs
          </p>
          <Tabs
            tabs={[
              {
                id: "overview",
                label: "Přehled",
                content: (
                  <div className="py-4 text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
                    Přehled panelu. Taby přepínají obsah bez reloadu stránky.
                  </div>
                ),
              },
              {
                id: "features",
                label: "Funkce",
                content: (
                  <div className="py-4 text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
                    Detaily funkcí se zobrazují zde. Každý tab panel se renderuje nezávisle.
                  </div>
                ),
              },
              {
                id: "pricing",
                label: "Ceník",
                content: (
                  <div className="py-4 text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
                    Informace o cenách. Všechny panely si zachovávají svůj stav.
                  </div>
                ),
              },
            ]}
          />
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== CARDS =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Karty
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-grid)]">
            {/* Basic card */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] tracking-tight">Základní karta</h3>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                  Standardní karta s header, body a footer. Radius 22 px, warm-200 border.
                </p>
              </CardBody>
              <CardFooter>
                <Button size="sm" variant="outline">Více</Button>
              </CardFooter>
            </Card>

            {/* Hover card */}
            <Card hover>
              <CardHeader>
                <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] tracking-tight">Hover karta</h3>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                  Interaktivní karta s hover efektem. Gold-light border + shadow-gold-sm on hover.
                </p>
              </CardBody>
              <CardFooter>
                <Button size="sm">Akce</Button>
              </CardFooter>
            </Card>

            {/* Dark card — gold button */}
            <div className="bg-[var(--color-surface-dark)] rounded-[var(--card-radius)] border border-[var(--color-border)] p-[var(--card-padding)] flex flex-col gap-3">
              <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] tracking-tight text-[var(--color-cream)]">Dark karta</h3>
              <p className="text-sm text-[rgba(245,240,230,0.7)] font-[family-name:var(--font-body)] leading-relaxed">
                Invertovaná karta. Na tmavém pozadí se používá gold button — nikdy forest.
              </p>
              <div className="mt-auto pt-3">
                <Button variant="secondary" size="sm">Gold CTA</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== BLOCKQUOTE =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Citace
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] mb-5">
            Zlatý border — <strong>jen pro citace</strong>.
          </p>
          <div className="relative pl-[48px] pr-[32px] py-[32px] border-l-[3px] border-[var(--color-border-quote)] bg-[var(--color-accent-subtle)] rounded-r-[var(--card-radius)] max-w-2xl">
            <p className="font-[family-name:var(--font-body)] text-[20px] italic text-[var(--color-warm-800)] leading-[1.5]">
              &ldquo;Design je nejen to, jak to vypadá a jak to působí. Design je to, jak to funguje.&rdquo;
            </p>
            <cite className="block mt-[12px] font-[family-name:var(--font-ui)] text-[13px] font-semibold not-italic text-[var(--color-gold-dark)]">
              Steve Jobs
            </cite>
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== PROGRESS BAR =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Progress Bars
          </p>
          <div className="space-y-4 max-w-lg">
            <ProgressBar value={25} label="Upload progress" />
            <ProgressBar value={60} label="Task completion" />
            <ProgressBar value={90} label="Storage used" />
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== TOOLTIPS =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Tooltips
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip text="Nastavení" position="top">
              <button
                aria-label="Settings"
                className="p-3 rounded-[var(--radius-sm)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-warm-700)] hover:text-[var(--color-forest-mid)] hover:border-[var(--color-border-strong)] transition-colors duration-[var(--duration-fast)] cursor-pointer min-h-[44px] min-w-[44px] inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Settings size={18} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </Tooltip>
            <Tooltip text="Nahrát soubory" position="top">
              <button
                aria-label="Upload"
                className="p-3 rounded-[var(--radius-sm)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-warm-700)] hover:text-[var(--color-forest-mid)] hover:border-[var(--color-border-strong)] transition-colors duration-[var(--duration-fast)] cursor-pointer min-h-[44px] min-w-[44px] inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Upload size={18} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </Tooltip>
            <Tooltip text="Hledat" position="bottom">
              <button
                aria-label="Search"
                className="p-3 rounded-[var(--radius-sm)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-warm-700)] hover:text-[var(--color-forest-mid)] hover:border-[var(--color-border-strong)] transition-colors duration-[var(--duration-fast)] cursor-pointer min-h-[44px] min-w-[44px] inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Search size={18} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </Tooltip>
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== MODAL =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Modal / Dialog
          </p>
          <Button variant="outline" onClick={() => setModalOpen(true)}>
            Otevřít modal
          </Button>

          {modalOpen && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-label="Example dialog"
            >
              <div
                className="absolute inset-0 bg-[rgba(28,28,28,0.6)] backdrop-blur-sm"
                onClick={() => setModalOpen(false)}
                aria-hidden="true"
              />
              <div className="relative w-full max-w-md bg-[var(--color-surface-elevated)] rounded-[var(--radius-xl)] shadow-[var(--shadow-xl)] border border-[var(--color-border)] p-6 sm:p-8">
                <button
                  onClick={() => setModalOpen(false)}
                  aria-label="Close dialog"
                  className="absolute top-4 right-4 p-1.5 rounded-[10px] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-sunken)] transition-colors duration-[var(--duration-fast)] cursor-pointer min-h-[44px] min-w-[44px] inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <X size={18} aria-hidden="true" />
                </button>
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight mb-2">
                  Dialog
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed mb-6">
                  Ukázkový modal dialog. Overlay, elevated surface, shadow-xl.
                </p>
                <div className="flex items-center justify-end gap-3">
                  <Button variant="ghost" onClick={() => setModalOpen(false)}>Zrušit</Button>
                  <Button onClick={() => setModalOpen(false)}>Potvrdit</Button>
                </div>
              </div>
            </div>
          )}
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== ALERTS =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Alerts
          </p>
          <div className="space-y-3 max-w-xl">
            <Alert variant="info" title="Informace">
              Informační zpráva pro neutrální sdělení.
            </Alert>
            <Alert variant="success" title="Úspěch">
              Operace byla úspěšně dokončena.
            </Alert>
            <Alert variant="warning" title="Upozornění">
              Zkontrolujte před pokračováním.
            </Alert>
            <Alert variant="error" title="Chyba">
              Něco se pokazilo. Zkuste to znovu.
            </Alert>
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== BREADCRUMBS =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Breadcrumbs
          </p>
          <div className="space-y-4">
            <Breadcrumbs
              items={[
                { label: "Domů", href: "#" },
                { label: "Produkty", href: "#" },
                { label: "Kategorie", href: "#" },
                { label: "Aktuální stránka" },
              ]}
            />
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== DROPDOWN MENU =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Dropdown Menu
          </p>
          <div className="flex flex-wrap gap-4">
            <DropdownMenu
              trigger={<Button variant="outline">Akce <ChevronDown size={14} aria-hidden="true" /></Button>}
              items={[
                { label: "Upravit", icon: <Settings size={14} />, onClick: () => {} },
                { label: "Duplikovat", icon: <Upload size={14} />, onClick: () => {} },
                { label: "Stáhnout", icon: <Download size={14} />, onClick: () => {} },
                { separator: true, label: "" },
                { label: "Smazat", icon: <Trash2 size={14} />, destructive: true, onClick: () => {} },
              ]}
            />
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== ACCORDION =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Accordion
          </p>
          <div className="max-w-xl">
            <Accordion
              items={[
                {
                  id: "acc-1",
                  title: "Co je design token?",
                  content:
                    "Design token je pojmenovaná hodnota (barva, spacing, radius atd.), která reprezentuje design rozhodnutí. Tokeny jsou jediný zdroj pravdy pro vizuální konzistenci celého systému.",
                },
                {
                  id: "acc-2",
                  title: "Jak fungují concept dimensions?",
                  content:
                    "Concept dimensions jsou data atributy na root HTML elementu (např. data-radius, data-density), které přepisují skupiny tokenů současně a transformují celý web jedinou změnou.",
                },
                {
                  id: "acc-3",
                  title: "Proč Averta Standard?",
                  content:
                    "ANFILOV používá jedno písmo — Averta Standard — napříč celou identitou. Škála je založená na Major Third (≈ 1.25). Minimální velikost: 12 px.",
                },
              ]}
            />
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== PAGINATION =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Pagination
          </p>
          <div className="space-y-4">
            <Pagination currentPage={3} totalPages={10} />
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== RATING =========== */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Rating
          </p>
          <div className="space-y-3">
            <Rating value={5} label="5.0 — Vynikající" />
            <Rating value={3.5} label="3.5 — Dobré" />
            <Rating value={1} label="1.0 — Slabé" />
          </div>
        </div>

        <Separator className="mb-[var(--space-block)]" />

        {/* =========== TABLE =========== */}
        <div>
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-5 font-[family-name:var(--font-heading)] tracking-tight">
            Tabulka
          </p>
          <Table
            striped
            columns={[
              { key: "name", header: "Jméno" },
              { key: "role", header: "Role" },
              { key: "status", header: "Status", render: (row) => (
                <span className={`inline-flex items-center rounded-[6px] px-[11px] py-[5px] text-xs font-semibold leading-none ${
                  row.status === "Aktivní"
                    ? "bg-[var(--color-success-subtle)] text-[var(--color-success)]"
                    : "bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)]"
                }`}>
                  {row.status as string}
                </span>
              )},
              { key: "joined", header: "Přidán", align: "right" },
            ]}
            data={[
              { name: "Alice Nováková", role: "Designer", status: "Aktivní", joined: "2024-01" },
              { name: "Bob Martinez", role: "Developer", status: "Aktivní", joined: "2023-11" },
              { name: "Carol Singhová", role: "PM", status: "Neaktivní", joined: "2024-03" },
              { name: "David Kim", role: "Developer", status: "Aktivní", joined: "2023-08" },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
