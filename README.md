# SMR Core Technologies — Website

Marketing website for **SMR Core Technologies** — _We build software that moves business forward._

Built with **Next.js 16 (App Router) · React 19 · TypeScript · CSS Modules**. No UI or animation
libraries: all motion is CSS/SVG plus a few small client islands.

## Getting started

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL (and optionally CONTACT_WEBHOOK_URL)
npm run dev                  # http://localhost:3000
```

| Script              | Purpose                    |
| ------------------- | -------------------------- |
| `npm run build`     | Production build           |
| `npm start`         | Serve the production build |
| `npm run lint`      | ESLint (Next + TypeScript) |
| `npm run typecheck` | `tsc --noEmit`             |
| `npm run format`    | Prettier                   |

## Environment

| Variable               | Description                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin used for metadata, sitemap, robots and JSON-LD.                                                                    |
| `CONTACT_WEBHOOK_URL`  | Optional. Contact submissions are POSTed here as JSON (CRM, Slack, email). Without it the form validates and succeeds in demo mode. |

## Structure

```
src/
  app/                 Routes, metadata, sitemap/robots/OG image, /api/contact
  components/
    layout/            Navbar, Footer, PageHero, ThemeToggle, RevealObserver, LegalPage
    sections/          Home page sections (hero, services, AI, technology, process, …)
    case-studies/      CaseStudies tabs, CaseStudyDetail, ProductMock, ArchitectureDiagram
    cards/             ServiceCard, IndustryCard
    contact/           ContactForm
    insights/          ArticleCard, ArticleCover (generative covers)
    ui/                Button, Icon, SectionHeader, Tabs, Logo, DemoBadge, Magnetic, PointerField
    seo/               JsonLd
  data/                All site content (services, projects, industries, technologies, blog, faq, …)
  lib/                 seo, contact validation, theme, formatting, hooks
```

Design tokens (colour, type, spacing, motion, both themes) live in `src/app/globals.css`.

## Content notes

- **All projects, case studies, metrics and articles are demo content** and are labelled as such
  in the UI. Nothing claims real clients or results.
- Legal pages are templates marked "pending legal review" and are `noindex` until finalised.
- Placeholder brand details (domain, email, social URLs) are in `src/data/site.ts`.

## Quality

Lighthouse (production build, local): desktop 100 / 100 / 100 / 100; mobile Performance 91–96 with
Accessibility, Best Practices and SEO at 100. Respects `prefers-reduced-motion`, works without
JavaScript for all content, and supports keyboard navigation throughout.
