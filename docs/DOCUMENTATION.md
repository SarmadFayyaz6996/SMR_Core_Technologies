# SMR Core Technologies Website — Project Documentation

This document explains **what was built**, **how it works**, and **which technologies and
services are used (and how)**. It is written for someone who owns the project but did not
write the code.

---

## Contents

1. [What this project is](#1-what-this-project-is)
2. [Technology stack and services](#2-technology-stack-and-services)
3. [What is deliberately _not_ used](#3-what-is-deliberately-not-used)
4. [How a page gets to the visitor](#4-how-a-page-gets-to-the-visitor)
5. [Folder structure](#5-folder-structure)
6. [Pages and routes](#6-pages-and-routes)
7. [The home page, section by section](#7-the-home-page-section-by-section)
8. [Design system](#8-design-system)
9. [How the key features work](#9-how-the-key-features-work)
10. [The contact form, end to end](#10-the-contact-form-end-to-end)
11. [SEO](#11-seo)
12. [Accessibility](#12-accessibility)
13. [Performance](#13-performance)
14. [Editing content](#14-editing-content)
15. [Configuration](#15-configuration)
16. [Running, building and deploying](#16-running-building-and-deploying)
17. [Quality checks and results](#17-quality-checks-and-results)
18. [Placeholders and things to finish before launch](#18-placeholders-and-things-to-finish-before-launch)
19. [Glossary](#19-glossary)

---

## 1. What this project is

A complete marketing website for **SMR Core Technologies**, a software engineering company.
Tagline: _"We build software that moves business forward."_

It includes:

- A long-form **home page** with 13 sections: hero, services, solutions, case studies, AI,
  technology, process, why SMR, industries, about, FAQ and call to action.
- **Secondary pages:** 8 service detail pages, Work (case studies), Insights (blog) with 6
  articles, Contact, Careers, Privacy, Terms, Cookies and a custom 404 page.
- A working **contact form** with validation in the browser and on the server.
- **Dark and light themes.** The site follows the visitor's system theme, defaults to dark, and
  remembers the visitor's choice.
- Built-in **SEO**: page titles and descriptions, social share images, sitemap, robots.txt and
  structured data for search engines.

**All projects, case studies, metrics and articles are demo content** and are labelled as such
on the site. Nothing claims real clients or real results.

---

## 2. Technology stack and services

### Overview

| Layer        | Technology                                    | Role in this project                                           |
| ------------ | --------------------------------------------- | -------------------------------------------------------------- |
| Framework    | **Next.js 16** (App Router)                   | Routing, page rendering, build system, API endpoint, SEO files |
| UI library   | **React 19**                                  | Builds the page out of components                              |
| Language     | **TypeScript**                                | Type-checked JavaScript; catches errors before runtime         |
| Styling      | **CSS Modules** + CSS variables               | Component-scoped styles and a token-based design system        |
| Fonts        | **Geist / Geist Mono** via `next/font/google` | Typography, downloaded at build time and self-hosted           |
| Bundler      | **Turbopack** (built into Next.js)            | Compiles and bundles the code                                  |
| Code quality | **ESLint** + **Prettier**                     | Lint rules and consistent formatting                           |
| Runtime      | **Node.js** (v24 used locally)                | Runs the build and the server                                  |

The project has only **three runtime dependencies**: `next`, `react` and `react-dom`.
Everything else (icons, animations, tabs, form validation, diagrams) is written in the project
itself.

### Next.js — how it is used

Next.js is the backbone. This project uses these parts of it:

- **App Router (`src/app/`)**: every folder is a URL. For example `src/app/contact/page.tsx`
  serves `/contact`.
- **Static generation**: most pages are rendered to HTML once at build time, so the server sends
  ready-made HTML, which is fast and SEO-friendly. Service and article pages are generated from
  data with `generateStaticParams`.
- **Dynamic rendering**: only `/contact` renders per request, because it reads URL parameters
  (`?type=ai-integration` pre-selects a project type).
- **Server Components**: most components render only on the server and send zero JavaScript to
  the browser.
- **Client Components** (marked `'use client'`): only the interactive parts ship JavaScript. These
  are the navbar, theme toggle, tabs, AI console, process timeline, contact form, and the pointer
  and scroll effects.
- **Route Handler**: `src/app/api/contact/route.ts` is a small backend endpoint that receives
  contact form submissions.
- **Metadata API**: generates `<title>`, descriptions, canonical links and Open Graph tags per page.
- **Special files**: `sitemap.ts`, `robots.ts`, `manifest.ts`, `opengraph-image.tsx` (social card
  generated as an image) and `icon.svg` (favicon).
- **`next/font`**: downloads the Geist fonts **at build time** and serves them from your own
  domain.
- **`next/link`**: client-side navigation between pages with automatic prefetching.

### React — how it is used

Pages are built from small, reusable components such as `Button`, `SectionHeader`,
`ServiceCard`, `CaseStudyDetail` and `ContactForm`. Hooks (`useState`, `useEffect`,
`useSyncExternalStore`) are used only inside the client components listed above.

### TypeScript — how it is used

All code is TypeScript in **strict mode**. Content files define types (for example `Service`,
`CaseStudy`, `Article`), so a missing field or typo in content fails the build instead of breaking
the live site.

### CSS Modules and CSS variables — how they are used

- Each component has its own `.module.css` file. Class names are automatically made unique, so
  styles never leak between components.
- A **design system** of CSS variables (colours, spacing, type sizes, radii, motion) lives in
  `src/app/globals.css`. Switching themes only swaps these variables. See [Design system](#8-design-system).

### Google Fonts (Geist) — how it is used

- Fonts: **Geist** (main text) and **Geist Mono** (small technical labels).
- They are fetched from Google **once, during `npm run build`**, and bundled into the site.
  **Visitors' browsers never contact Google**, which is good for privacy and speed.
- Only the Latin character subset is included, which keeps the files small.
- Geist Mono is not preloaded because it only appears in small labels. This keeps the first paint
  fast.

### ESLint and Prettier — how they are used

- `npm run lint` checks the code against Next.js, React and TypeScript rules. `console.log` is
  disallowed; only `console.error` is allowed, for real server errors.
- `npm run format` formats all code consistently.

### External services at runtime

| Service                       | Used?           | Details                                                                                                                                                                                |
| ----------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Google Fonts                  | Build time only | Fonts are downloaded during the build, not by visitors.                                                                                                                                |
| Contact webhook (your choice) | **Optional**    | If `CONTACT_WEBHOOK_URL` is set, form submissions are POSTed there as JSON (for example Zapier, Make, Slack, a CRM or an email service). If it is not set, the form runs in demo mode. |
| Analytics, ads, trackers      | No              | None installed.                                                                                                                                                                        |
| Database                      | No              | All content lives in TypeScript files in `src/data/`.                                                                                                                                  |
| CMS                           | No              | Content is edited in code (see [Editing content](#14-editing-content)).                                                                                                                |
| CDN for images or icons       | No              | Icons are inline SVG and covers are generated with CSS, so there are no image downloads.                                                                                               |

### Tools used while building (not part of the project)

These were used only to test the site during development. They ran from a temporary folder and
are **not** installed in the project:

- **Google Chrome (headless)** with **Puppeteer**, to take screenshots at every breakpoint and
  in both themes, and to test interactions (menu, form, AI console).
- **Lighthouse**, to measure Performance, Accessibility, Best Practices and SEO.

---

## 3. What is deliberately _not_ used

The goal was a fast, maintainable site with few moving parts:

- **No UI kit** (Bootstrap, Material, Tailwind): the design is original and lives in CSS Modules.
- **No animation library** (Framer Motion, GSAP): motion uses CSS, SVG and a few small scripts.
- **No icon library**: about 50 icons are drawn as inline SVG in `src/components/ui/Icon.tsx`.
- **No stock photos or raster screenshots**: product "screenshots" are built in HTML/CSS, so they
  stay sharp, match both themes and weigh almost nothing.
- **No carousel and no fake testimonials.**

---

## 4. How a page gets to the visitor

```
                     BUILD TIME (npm run build)
  src/data/*.ts ──►  React components ──►  Static HTML + CSS + small JS chunks
  (content)          (src/components)       (in .next/)
                                                 │
                     REQUEST TIME                ▼
  Visitor's browser ◄──── Next.js server (npm start) or a hosting platform
        │
        ├─ HTML arrives already rendered (fast, readable by search engines)
        ├─ An inline script sets the theme before paint (no flash)
        └─ Small JS "islands" hydrate: navbar, tabs, AI console, form, …
```

- Content is visible even if JavaScript fails or is disabled. Scroll-reveal animations only hide
  content once JavaScript has confirmed it is running.
- Clicking internal links swaps pages without a full reload, through Next.js client navigation.

---

## 5. Folder structure

```
SRM_Core_Technologies/
├─ src/
│  ├─ app/                    ← Routes (each folder = a URL) + site-wide files
│  │  ├─ layout.tsx           ← Wraps every page: fonts, theme script, navbar, footer, schema
│  │  ├─ page.tsx             ← Home page (assembles the sections)
│  │  ├─ globals.css          ← Design tokens, base styles, shared utilities
│  │  ├─ contact/  work/  insights/  insights/[slug]/  services/[slug]/
│  │  ├─ careers/  privacy/  terms/  cookies/
│  │  ├─ api/contact/route.ts ← Contact form backend endpoint
│  │  ├─ not-found.tsx        ← Custom 404
│  │  ├─ sitemap.ts  robots.ts  manifest.ts  opengraph-image.tsx  icon.svg
│  ├─ components/
│  │  ├─ layout/              ← Navbar, Footer, PageHero, ThemeToggle, RevealObserver, LegalPage
│  │  ├─ sections/            ← Home sections (hero/, ai/, process/, technology/, solutions/, …)
│  │  ├─ case-studies/        ← Case study tabs, detail, product mock, architecture diagram
│  │  ├─ cards/               ← ServiceCard, IndustryCard
│  │  ├─ contact/             ← ContactForm
│  │  ├─ insights/            ← ArticleCard, ArticleCover
│  │  ├─ ui/                  ← Button, Icon, Logo, SectionHeader, Tabs, DemoBadge, Magnetic, PointerField
│  │  └─ seo/JsonLd.tsx       ← Outputs structured data
│  ├─ data/                   ← ALL site content (edit these to change text)
│  └─ lib/                    ← Helpers: seo, contact validation, theme, formatting, hooks
├─ docs/DOCUMENTATION.md      ← This file
├─ .env.example               ← Environment variables template
├─ next.config.ts             ← Next.js config + security headers
├─ eslint.config.mjs  .prettierrc.json  tsconfig.json
└─ package.json
```

`AGENTS.md` and `CLAUDE.md` in the project root are written by `next dev` itself and contain
guidance for AI coding tools. Disable them with `agentRules: false` in `next.config.ts` if you
don't want them.

---

## 6. Pages and routes

| URL                                                                     | File                           | Rendering         | Purpose                                           |
| ----------------------------------------------------------------------- | ------------------------------ | ----------------- | ------------------------------------------------- |
| `/`                                                                     | `app/page.tsx`                 | Static            | Home page                                         |
| `/services/[slug]`                                                      | `app/services/[slug]/page.tsx` | Static (8 pages)  | One page per service: deliverables, tech, related |
| `/work`                                                                 | `app/work/page.tsx`            | Static            | All 4 demo case studies in full, plus solutions   |
| `/insights`                                                             | `app/insights/page.tsx`        | Static            | Blog index (featured + grid)                      |
| `/insights/[slug]`                                                      | `app/insights/[slug]/page.tsx` | Static (6 pages)  | Article pages                                     |
| `/contact`                                                              | `app/contact/page.tsx`         | Dynamic           | Contact form (reads `?type=` and `?topic=`)       |
| `/careers`                                                              | `app/careers/page.tsx`         | Static            | Culture + "no open roles" + intro email           |
| `/privacy` `/terms` `/cookies`                                          | `app/<name>/page.tsx`          | Static, `noindex` | Legal templates (pending legal review)            |
| `/api/contact`                                                          | `app/api/contact/route.ts`     | Server endpoint   | Receives form submissions                         |
| `/sitemap.xml` `/robots.txt` `/manifest.webmanifest` `/opengraph-image` | `app/*.ts(x)`                  | Generated         | SEO and app metadata                              |
| anything else                                                           | `app/not-found.tsx`            | —                 | Custom 404 page                                   |

The navigation links to home sections with anchors (for example `/#services`). Work links to the
`/work` page.

---

## 7. The home page, section by section

The order is set in `src/app/page.tsx`. Each section is its own component.

| #   | Section          | Component                                            | What it shows / how it behaves                                                                                                                                                                                                                              |
| --- | ---------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| —   | **Hero**         | `sections/hero/Hero.tsx` + `HeroVisual.tsx`          | Headline with a word-by-word reveal (desktop) and two CTAs. The **"system core"** visual is a processor-like core wired to 6 modules, with data packets travelling along the traces, plus floating code and deploy panels that follow the pointer slightly. |
| —   | **Principles**   | `sections/Principles.tsx`                            | 6 engineering principles + a scrolling "technology we work with" ticker (pauses on hover, static under reduced motion).                                                                                                                                     |
| 01  | **Services**     | `sections/Services.tsx` + `cards/ServiceCard.tsx`    | 8 services in a hairline grid. Hover lifts the icon and reveals "Learn more"; the whole card links to its service page.                                                                                                                                     |
| 02  | **Solutions**    | `sections/solutions/*`                               | 6 "Concept Project" cards in a bento layout, each with a mini product preview (chat, kanban, ECG, receipt, unit grid, chart).                                                                                                                               |
| 03  | **Case studies** | `case-studies/CaseStudies.tsx`                       | Tabbed showcase of 4 demo projects: product mock, architecture diagram, problem, solution, stack and **Demo metrics**.                                                                                                                                      |
| 04  | **AI**           | `sections/ai/*`                                      | Always-dark band. Interactive **AI console**: pick a capability and a scripted run types the prompt, completes steps, fires a neural graph and streams the answer.                                                                                          |
| 05  | **Technology**   | `sections/technology/*`                              | Stack of 6 layers (AI to DevOps). Hovering or selecting a layer shows its tools as **periodic-table tiles**.                                                                                                                                                |
| 06  | **Process**      | `sections/process/*`                                 | 7-step timeline. A spine fills as you scroll, steps light up, and a sticky counter rolls (01–07).                                                                                                                                                           |
| 07  | **Why SMR**      | `sections/WhySmr.tsx`                                | 9 long-term engineering commitments in a grid, with a sticky intro.                                                                                                                                                                                         |
| 08  | **Industries**   | `sections/Industries.tsx` + `cards/IndustryCard.tsx` | 10 industries with focus areas (no client claims).                                                                                                                                                                                                          |
| 09  | **About**        | `sections/About.tsx`                                 | Mission statement, copy and 3 values.                                                                                                                                                                                                                       |
| 10  | **FAQ**          | `sections/Faq.tsx`                                   | Accordion built on native `<details>`; also emits FAQ structured data.                                                                                                                                                                                      |
| —   | **CTA**          | `sections/CTASection.tsx`                            | "Have an idea worth building?" with expanding rings and a pointer spotlight. Reused on other pages.                                                                                                                                                         |

---

## 8. Design system

All tokens live at the top of `src/app/globals.css`.

### Visual identity

- **Palette:** near-black (`#07080b`), white and neutral greys. The accent is **electric indigo**
  (`#6d69ff`), with a secondary **signal cyan** (`#3ad6f2`) used sparingly.
- **Type:** Geist with tight letter-spacing for headings; Geist Mono for uppercase labels such as
  `[01] SERVICES`.
- **Recurring motifs:**
  - Numbered section eyebrows (`[01]`, `[02]`, …).
  - A faint blueprint grid behind key areas.
  - Engineering-drawing corner ticks around the hero visual.
  - Hairline 1px-gap grids.
  - The **logo mark**: nested frames around an offset core, echoed in the hero, CTA rings, 404
    page and article covers.

### Tokens

| Group   | Examples                                                                                           |
| ------- | -------------------------------------------------------------------------------------------------- |
| Colour  | `--bg`, `--surface`, `--text`, `--text-muted`, `--accent`, `--border` (defined for dark and light) |
| Type    | `--fs-display`, `--fs-h1`, `--fs-h2`, `--fs-lead` (fluid `clamp()` sizes)                          |
| Spacing | `--space-1` … `--space-24` (4px base), `--section-y`, `--gutter`                                   |
| Layout  | `--container` (76rem), `--container-wide` (90rem), `--nav-h`                                       |
| Shape   | `--radius-sm` … `--radius-xl`, `--radius-pill`                                                     |
| Motion  | `--ease-out`, `--dur-fast/base/slow`                                                               |

### Themes

- **Dark** is defined on `:root` and `[data-theme='dark']`; **light** is defined on
  `[data-theme='light']`. Components use only the variables, so they work in both themes
  automatically.
- Any element can force a theme. The AI section uses `data-theme="dark"` to stay dark even in
  light mode.

### Shared utilities (global classes)

`container`, `container-wide`, `section`, `section--alt`, `section--tight`, `mono`,
`gradient-text`, `grid-bg`, `corners`, `sr-only`, `skip-link`.

---

## 9. How the key features work

### Theme switching (dark/light)

- **Files:** `lib/theme.ts`, `components/layout/ThemeToggle.tsx`, `app/layout.tsx`.
- A tiny inline script in `<head>` runs **before the page paints**. It reads the saved choice
  from `localStorage` (`smr-theme`). If nothing is saved, it uses the system preference, falling
  back to dark. It sets `data-theme` on `<html>`, which prevents a "flash" of the wrong theme.
- The toggle button flips `data-theme` and saves the choice.
- Until the visitor picks a theme, the site follows live OS theme changes.

### Scroll-reveal animations

- **Files:** `components/layout/RevealObserver.tsx`, `globals.css` (`[data-reveal]`).
- Elements marked `data-reveal` fade and slide up when they enter the viewport.
- One shared `IntersectionObserver` watches every such element, which is cheaper than one per
  element. It re-scans after each page navigation.
- Safe by design: content is hidden only when JavaScript is confirmed (the `js` class on
  `<html>`), so search engines and no-JS visitors always see everything.
- Above-the-fold headings (hero, page headers) use pure CSS animation instead, so they never
  delay the first paint.

### Navbar

- **File:** `components/layout/Navbar.tsx`.
- Becomes **compact and blurred** after you scroll 24px.
- **Highlights the current section** on the home page using an `IntersectionObserver`.
- **Mobile menu:** a full-screen panel with a clip-path reveal and staggered links. It locks page
  scroll, **traps keyboard focus**, closes on Escape, and closes automatically if the window grows
  to desktop size.

### Hero "system core" visual

- **File:** `components/sections/hero/HeroVisual.tsx`.
- Pure SVG: orbit rings rotate with CSS, packets travel along circuit traces with SVG
  `<animateMotion>`, and the core pulses.
- `PointerField` exposes the mouse position as CSS variables, and the layers shift slightly for
  parallax (fine pointers only).
- On phones, one floating panel is hidden so nothing overlaps.

### AI console

- **Files:** `components/sections/ai/AIConsole.tsx`, `NeuralGraph.tsx`, data in `data/ai.ts`.
- Each capability has a scripted prompt, steps and response. **These are illustrative demos, not
  live AI calls.** There is no API key and no external request.
- A timer tracks elapsed time, and everything on screen is derived from it: typed prompt
  characters, completed steps and streamed answer characters.
- It only plays while visible, auto-advances to the next capability until the visitor clicks
  one, and shows the full result instantly under reduced motion.
- Screen readers get the final text announced once through an `aria-live` region, not character
  by character.

### Tabs (case studies and technology map)

- **File:** `components/ui/Tabs.tsx`.
- Follows the **WAI-ARIA Tabs pattern**: arrow keys, Home and End, roles and selected states.
- Panels are rendered on the server and passed in, so **all case-study and technology content is
  in the HTML** for search engines. Inactive panels are simply hidden.
- The technology map also activates on mouse hover (`hoverActivate`).

### Process timeline (scroll interaction)

- **File:** `components/sections/process/ProcessTimeline.tsx`.
- On scroll, progress is written directly to a CSS variable (`--progress`), which fills the spine
  and the progress bar **without re-rendering React on every frame**.
- React state changes only when the active step changes. That rolls the big counter and lights
  the step.

### Magnetic buttons

- **File:** `components/ui/Magnetic.tsx`.
- Primary CTAs drift gently toward the cursor. This is disabled on touch devices and under reduced
  motion.

### Product mocks, architecture diagrams and article covers

- `case-studies/ProductMock.tsx`: four fake app screens built in HTML/CSS (workflow, clinic
  calendar, inventory, migration dashboard).
- `case-studies/ArchitectureDiagram.tsx`: tiered diagram with animated connectors, drawn from each
  case study's `architecture` data.
- `insights/ArticleCover.tsx`: **generative** covers. The colour comes from the article category,
  and the dot pattern is seeded from the article slug. No image files are needed.

---

## 10. The contact form, end to end

**Files:** `components/contact/ContactForm.tsx` (browser), `lib/contact.ts` (shared rules),
`app/api/contact/route.ts` (server), `data/projectOptions.ts` (dropdown values).

```
 Visitor fills form
        │
        ▼
 ContactForm (browser)
  • validates on blur and on submit using lib/contact.ts
  • shows inline errors, focuses the first invalid field
        │  POST /api/contact  (JSON)
        ▼
 Route handler (server)
  • parses JSON safely (bad JSON → 400)
  • honeypot field filled? → pretend success (bots get nothing)
  • validates again with the SAME rules (invalid → 422 + field errors)
  • CONTACT_WEBHOOK_URL set?
        ├─ yes → POST the lead as JSON to your webhook (8s timeout)
        │         webhook fails → 502 "please try again"
        └─ no  → demo mode, nothing is sent anywhere
        │
        ▼
 Browser shows success screen ("Thanks, Jane — message received")
 or an error banner with a retry
```

### Fields and rules

| Field           | Required | Validation                                       |
| --------------- | -------- | ------------------------------------------------ |
| Full name       | Yes      | Not empty, ≤ 120 characters                      |
| Work email      | Yes      | Valid email format                               |
| Company         | No       | ≤ 120 characters                                 |
| Phone           | No       | 7–20 digits, spaces and `+()-.` characters       |
| Project type    | Yes      | One of the 9 options in `data/projectOptions.ts` |
| Budget range    | Yes      | One of the 5 options                             |
| Message         | Yes      | 20–4000 characters (live counter)                |
| Privacy consent | Yes      | Checkbox must be ticked                          |
| `website`       | Hidden   | Honeypot: must stay empty                        |

### Pre-filling

- `/contact?type=ai-integration` pre-selects the project type. Service pages link like this.
- `/contact?topic=expert` pre-fills the message with "I'd like to talk to an expert about …".
  The "Talk to an Expert" button links here.

### Connecting it to a real inbox

Set `CONTACT_WEBHOOK_URL` to any endpoint that accepts JSON POSTs, for example a Zapier, Make or
n8n webhook, a Slack incoming webhook (via a small adapter), or your own API. The payload looks
like this:

```json
{
  "fullName": "Jane Cooper",
  "workEmail": "jane@company.com",
  "company": "Acme",
  "phone": "",
  "projectType": "ai-integration",
  "budget": "15k-50k",
  "message": "…",
  "consent": true,
  "submittedAt": "2026-10-05T10:00:00.000Z"
}
```

---

## 11. SEO

| Feature                   | Where                                      | Details                                                                                                                                                                                   |
| ------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Titles and descriptions   | `lib/seo.ts` → `buildMetadata()`           | Unique per page; title template `Page \| SMR Core Technologies`                                                                                                                           |
| Canonical URLs            | `buildMetadata()`                          | Built from `NEXT_PUBLIC_SITE_URL`                                                                                                                                                         |
| Open Graph / X cards      | `buildMetadata()` + `opengraph-image.tsx`  | 1200×630 social image generated at build time                                                                                                                                             |
| Sitemap                   | `app/sitemap.ts`                           | 19 URLs: main pages, 8 services, 6 articles                                                                                                                                               |
| robots.txt                | `app/robots.ts`                            | Allows all, blocks `/api/`, points to the sitemap                                                                                                                                         |
| Structured data (JSON-LD) | `lib/seo.ts` + `components/seo/JsonLd.tsx` | **Organization/ProfessionalService** and **WebSite** on every page; **FAQPage** on home; **BreadcrumbList** on secondary pages; **Service** on service pages; **BlogPosting** on articles |
| `noindex`                 | Legal pages, 404                           | Templates are kept out of search results until final                                                                                                                                      |
| Semantic HTML             | Throughout                                 | One `<h1>` per page, ordered headings, landmarks                                                                                                                                          |

Keyword topics (custom software, web/mobile/AI/SaaS development, ASP.NET, Angular,
modernization, cloud) are written naturally into the copy, without keyword stuffing.

---

## 12. Accessibility

- **Keyboard:** everything is reachable by Tab. A "Skip to content" link appears on first Tab.
  Visible focus rings are shown everywhere.
- **Mobile menu:** focus trap, Escape to close, and `inert` when closed.
- **Tabs:** full ARIA tabs pattern with arrow-key navigation.
- **Forms:** real `<label>`s, `fieldset`/`legend` for option groups, `aria-invalid`,
  `aria-describedby` linking errors to fields, an error banner with `role="alert"` and a success
  message with `role="status"`.
- **Decorative visuals** are hidden from screen readers or given one descriptive label.
- **Reduced motion:** with `prefers-reduced-motion`, animations stop, the ticker becomes static,
  and the AI console shows results instantly.
- **Contrast:** colours were adjusted until Lighthouse and axe reported no contrast failures in
  either theme.

---

## 13. Performance

What makes the site fast:

- **Static HTML** for almost every page.
- **Minimal JavaScript**: only interactive islands ship JS, and there are no third-party
  libraries.
- **Self-hosted, subset fonts**, with only the main font preloaded.
- **No images to download**: icons are SVG, and mocks and covers are CSS.
- **Animations use `transform`/`opacity`** (GPU-friendly). Scroll effects are throttled with
  `requestAnimationFrame` and write to CSS variables instead of re-rendering.
- The hero headline is the LCP element. It paints immediately, and on phones the word animation is
  switched off.
- **Security headers** in `next.config.ts`: `X-Content-Type-Options`, `Referrer-Policy`,
  `X-Frame-Options`, `Permissions-Policy`. The `X-Powered-By` header is removed.

---

## 14. Editing content

All text lives in `src/data/`. After editing, the dev server reloads automatically.

| To change…                           | Edit                     |
| ------------------------------------ | ------------------------ |
| Company name, email, domain, socials | `data/site.ts`           |
| Navigation and footer links          | `data/navigation.ts`     |
| Services (+ their detail pages)      | `data/services.ts`       |
| Concept solutions                    | `data/solutions.ts`      |
| Case studies                         | `data/projects.ts`       |
| AI console scripts                   | `data/ai.ts`             |
| Technology stack and tiles           | `data/technologies.ts`   |
| Process steps                        | `data/process.ts`        |
| Principles / Why SMR                 | `data/principles.ts`     |
| Industries                           | `data/industries.ts`     |
| FAQ                                  | `data/faq.ts`            |
| Blog articles                        | `data/blog.ts`           |
| Legal page text                      | `data/legal.ts`          |
| Contact form options                 | `data/projectOptions.ts` |

### Example: add a service

1. Add an object to the `services` array in `data/services.ts`, with `slug`, `title`, `icon`,
   `summary`, `description`, `deliverables`, `technologies` and `projectType`.
2. Done. The card, the `/services/<slug>` page, the sitemap entry and the structured data are all
   created automatically. TypeScript reports any missing field.

### Example: add an article

1. Add an object to `articles` in `data/blog.ts`. The first article in the list is shown as
   featured.
2. A page at `/insights/<slug>`, a generated cover and a sitemap entry are created automatically.

### Icons

Available names are the keys in `components/ui/Icon.tsx` (for example `cloud`, `shield`,
`sparkles`). To add one, add a new entry with SVG paths on a 24×24 grid.

---

## 15. Configuration

Copy `.env.example` to `.env.local`:

| Variable               | Required    | Purpose                                                                                                                                                                             |
| ---------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Your real domain (for example `https://www.yourdomain.com`), used for canonical URLs, the sitemap, social cards and structured data. Defaults to `https://smrcoretechnologies.com`. |
| `CONTACT_WEBHOOK_URL`  | Optional    | Where contact submissions are sent. Leave empty for demo mode.                                                                                                                      |

`.env.local` is git-ignored, so secrets never get committed.

---

## 16. Running, building and deploying

```bash
npm install            # install dependencies (once)
npm run dev            # development server → http://localhost:3000 (live reload)
npm run build          # production build (also type-checks)
npm start              # serve the production build → http://localhost:3000
npm run lint           # ESLint
npm run typecheck      # TypeScript only
npm run format         # Prettier
```

### Deploying

Any Node.js host that supports Next.js works:

- **Vercel** (made by the Next.js team): import the Git repository and set the two environment
  variables. Zero configuration.
- **Netlify, AWS Amplify, Azure Static Web Apps / App Service, Render, Railway**: all support
  Next.js.
- **Your own server or Docker:** run `npm ci && npm run build && npm start` behind a reverse
  proxy such as Nginx.

A Node runtime is required, not a purely static host, because `/contact` and `/api/contact` run
on the server.

---

## 17. Quality checks and results

Checks run during development:

- `npm run lint`, `npm run typecheck` and `npm run build`: all pass.
- **Screenshots** at 320, 375, 390, 768, 1024, 1440, 1920 and 2560px, in dark and light themes.
  No horizontal scrolling at any width.
- **Interaction tests:**
  - Form errors, focus on the first invalid field, the success screen and URL pre-selection.
  - Mobile menu focus and Escape handling.
  - AI console playback.
  - API rejection of invalid input and bad JSON.

### Lighthouse (local production build)

| Page         | Mobile Perf. | Desktop Perf. | Accessibility | Best Practices | SEO |
| ------------ | ------------ | ------------- | ------------- | -------------- | --- |
| Home         | 91           | 100           | 100           | 100            | 100 |
| Work         | 92           | —             | 100           | 100            | 100 |
| Contact      | 96           | 100           | 100           | 100            | 100 |
| Insights     | 96           | —             | 100           | 100            | 100 |
| Service page | 95           | —             | 100           | 100            | 100 |

Mobile scores use Lighthouse's simulated slow phone and network. Real-world numbers depend on
your hosting.

---

## 18. Placeholders and things to finish before launch

| Item                          | Where                 | Action                                                                           |
| ----------------------------- | --------------------- | -------------------------------------------------------------------------------- |
| LinkedIn / GitHub / X links   | `data/site.ts`        | Replace with real profiles, or remove                                            |
| Contact delivery              | `CONTACT_WEBHOOK_URL` | Connect a webhook, otherwise submissions go nowhere                              |
| Legal pages                   | `data/legal.ts`       | Have counsel review, then remove `noIndex` and the "template" badge              |
| Demo case studies and metrics | `data/projects.ts`    | Replace with real (approved) projects when available, and remove the demo labels |
| Demo articles                 | `data/blog.ts`        | Replace with real articles                                                       |
| Reply promise                 | `ContactForm.tsx`     | "Usually reply within one business day": keep or change it                       |
| Git                           | —                     | Nothing has been committed yet                                                   |

---

## 19. Glossary

- **App Router:** Next.js's folder-based routing in `src/app/`.
- **Server Component:** a React component rendered only on the server; it sends no JavaScript to
  the browser.
- **Client Component:** a component marked `'use client'` that runs in the browser for
  interactivity.
- **Static generation:** pages pre-rendered to HTML at build time.
- **Route Handler:** a server endpoint (here `/api/contact`).
- **CSS Module:** a CSS file whose class names are scoped to one component.
- **Design token:** a named CSS variable (colour, spacing and so on) reused across the site.
- **JSON-LD / structured data:** machine-readable page information for search engines.
- **LCP (Largest Contentful Paint):** how quickly the main content appears; a key speed metric.
- **Honeypot:** a hidden form field that only bots fill in, used to filter spam.
- **Webhook:** a URL that receives data via HTTP POST, used here to deliver form leads.
- **Hydration:** React attaching interactivity to server-rendered HTML in the browser.
