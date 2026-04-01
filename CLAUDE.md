# CLAUDE.md — Anfilov Web

## Projekt

Tvoříme webdesign pro **ANFILOV** (anfilov.cz) — designové studio. Web je v **českém jazyce**.

Při práci na frontendu vždy aktivuj skill `/frontend-design`.
Při jakékoliv práci na tomto projektu vždy aktivuj skill `/anfilov-visual-guidelines` — obsahuje kompletní brand identitu, tokeny, barvy, typografii a pravidla.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (přes `@tailwindcss/postcss`, tokeny v `@theme` v `app/globals.css`)
- **Framer Motion** — animace
- **Lucide React** — ikony
- **Averta Standard** — font (local WOFF2, váhy 400/600/700)
- **Sanity CMS** — obsah
- **Resend** — emaily
- Import alias: `@/*` → kořen projektu

## Struktura

- `app/` — App Router stránky a layouty
- `components/ui/` — atomické UI komponenty (Button, Card, Input…)
- `components/sections/` — sekce stránek (Hero, Gallery, FAQ…)
- `lib/` — utility, typy, font config, queries
- `sanity/` — schémata, klient, queries
- `scripts/` — Node.js skripty pro seed/patch Sanity dat
- `site.config.ts` — centrální konfigurace (layout, barvy, SEO, concept dimensions)

## Design systém

### Layout: LEFT-aligned

- **Nikdy** necentrovat obsah (`text-center`, `mx-auto` na obsahové bloky)
- Používat layout utility: `layout-text`, `layout-mx`, `layout-justify` (reagují na `data-layout="left"`)
- Text-heavy bloky: `max-w-[680px]` bez centrování

### Barvy (ANFILOV Warm Signature 2026)

- **Gold:** `#C8A84E` (primární akcent)
- **Forest:** `#1A3A2E` (primární brand), `#245C46` (mid), `#2E7A5A` (light)
- **Cream:** `#F5F0E6` (pozadí light mode)
- Dark mode: tmavé forest pozadí, cream text

### Design tokeny

4-vrstvý systém v `app/globals.css`:
1. **Primitives** — surové barvy
2. **Semantic** — `--color-surface-*`, `--color-text-*`, `--color-border-*`
3. **Component** — `--button-*`, `--card-*`, `--input-*`
4. **Concept** — řízeny `data-*` atributy na `<html>` (nastavení v `site.config.ts`)

### Concept dimensions (z `site.config.ts`)

`layout: "left"`, `radius: "rounded"`, `density: "balanced"`, `shadows: "subtle"`, `motion: "subtle"`, `contrast: "medium"`, `cardStyle: "outlined"`, `hover: "lift"`

## Konvence kódu

- **PascalCase** pro komponenty (`Button.tsx`, `HeroGradient.tsx`)
- **kebab-case** pro utility soubory (`sluzba-types.ts`)
- `components/ui/` = malé, znovupoužitelné; `components/sections/` = větší bloky stránek
- `site.config.ts` = jediný zdroj pravdy pro konfiguraci webu

---

## Sanity CMS

- **Project ID:** `d8caxrt0`
- **Dataset:** `production`
- **API Version:** `2024-01-01`
- **Write token:** uložen v `.env.local` jako `SANITY_WRITE_TOKEN` (role: Editor, name: claude-write)

### Jak načíst token ve skriptech

V Node.js skriptech nelze použít `source .env.local` — token se nepředá do `process.env`. Vždy načti `.env.local` manuálně:

```js
const fs = require("fs");
const path = require("path");
const envPath = path.join(__dirname, "../.env.local");
const envLines = fs.readFileSync(envPath, "utf8").split("\n");
for (const line of envLines) {
  const match = line.match(/^([A-Z_]+)=(.+)$/);
  if (match) process.env[match[1]] = match[2];
}
```

### Sanity klient pro zápis

```js
const { createClient } = require("next-sanity");
const client = createClient({
  projectId: "d8caxrt0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});
```

### Existující helper skripty

- `scripts/seed-sluzby/_client.js` — write klient (vyžaduje `SANITY_WRITE_TOKEN` v env)
- `scripts/seed-sluzby/_helpers.js` — `fetchAllProjectIds()`, `ref(id)`, `createOrUpdateSluzba(slug, data)`
- `scripts/seed-projects.js` — vzor pro upload obrázků a vytvoření projektů
- `scripts/seed-brand-boards.js` — upload brand boardů do portfolia

### Schéma dokumentů

- `project` — portfolio položka (title, slug, client, year, image, description, tags, services)
- `sluzba` — stránka služby (portfolioProjects = array referencí na project)
- `tool` — nástroj/software
- `glossaryTerm` — slovníček pojmů

### Image objekt

```js
image: {
  _type: "imageWithAlt",
  image: {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  },
  alt: "popis obrázku",
}
```
