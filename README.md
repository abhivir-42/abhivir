# abhivir.com

Personal website and digital home for Abhivir Singh. Built with Astro, deployed on Cloudflare Pages.

**Live:** https://abhivir.com

---

## Quick Start

```bash
npm install
npm run dev        # Start dev server at http://localhost:4321
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
```

Requires Node.js 22+ and npm.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build) (static site generation + server routes) |
| UI Components | Astro components + [React](https://react.dev) islands (for interactive features) |
| Styling | [Tailwind CSS](https://tailwindcss.com) with custom editorial design system |
| Content | [MDX](https://mdxjs.com) for blog posts via Astro Content Collections |
| Deployment | [Cloudflare Pages](https://pages.cloudflare.com) with auto-deploy from `main` |
| Adapter | `@astrojs/cloudflare` (enables server-side API routes on Cloudflare) |

---

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── SiteHeader.astro     # Navigation header with mobile menu
│   ├── SiteFooter.astro     # Footer with social links
│   └── ProjectCard.astro    # Project display card
│
├── layouts/             # Page layout wrappers
│   ├── BaseLayout.astro     # Root layout (head, fonts, meta, header/footer)
│   └── BlogLayout.astro     # Blog post wrapper (title, date, tags, prose)
│
├── pages/               # Routes (each file = a URL)
│   ├── index.astro          # /           — Home page
│   ├── work.astro           # /work       — All projects
│   ├── papers.astro         # /papers     — Research papers
│   ├── now.astro            # /now        — What I'm currently doing
│   ├── blog/
│   │   ├── index.astro      # /blog       — Blog index + reading list
│   │   └── [...slug].astro  # /blog/:slug — Individual blog post
│   └── api/
│       ├── projects.ts      # GET /api/projects → JSON
│       ├── now.ts           # GET /api/now → JSON
│       └── reading.ts       # GET /api/reading → JSON
│
├── data/                # Structured content (TypeScript)
│   ├── work.ts              # Project definitions (title, description, tags, date)
│   ├── papers.ts            # Research papers
│   └── reading.ts           # Reading list items
│
├── content/             # MDX content files
│   └── blog/
│       └── hello-world.mdx  # Blog posts go here
│
├── styles/
│   └── global.css           # Design system (colors, typography, component classes)
│
└── content.config.ts    # Astro Content Collections schema
```

### Config Files (repo root)

| File | Purpose |
|---|---|
| `astro.config.mjs` | Astro configuration: Cloudflare adapter, React/Tailwind/MDX integrations |
| `tailwind.config.mjs` | Tailwind theme: fonts, colors (HSL variables), border radius |
| `tsconfig.json` | TypeScript config (extends Astro strict, React JSX) |
| `package.json` | Dependencies and scripts |

---

## Design System

### Typography

Three font families loaded from Google Fonts:

- **Playfair Display** (`font-serif`) — Headlines, page titles, project names
- **IBM Plex Sans** (`font-sans`) — Body text, navigation, descriptions
- **IBM Plex Mono** (`font-mono`) — Tags, dates, code

### Colors

HSL-based color tokens defined as CSS custom properties in `global.css`. Supports light and dark mode via `.dark` class.

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--background` | Warm cream | Dark navy | Page background |
| `--foreground` | Dark navy | Warm off-white | Primary text |
| `--muted-foreground` | Gray-blue | Warm gray | Secondary text |
| `--accent` | Orange/rust | Orange/rust | Hover states, highlights |
| `--border` | Warm gray | Dark gray-blue | Dividers, card borders |
| `--card` | Slightly darker cream | Slightly lighter navy | Card hover background |
| `--secondary` | Warm beige | Dark secondary | Tag pill backgrounds |

### Component Classes

Defined in `global.css` under `@layer components`:

| Class | Usage |
|---|---|
| `.editorial-container` | Content wrapper (`max-w-5xl`, centered, `px-6`) |
| `.section-label` | Section headings (`ABOUT`, `FEATURED WORK`) — uppercase, tracked, muted |
| `.editorial-card` | Project cards — bordered, hover background transition |
| `.editorial-link` | In-content links — underlined, accent hover |
| `.tag-pill` | Technology/category tags — small, mono font, secondary bg |
| `.grid-line` | Horizontal divider |

### Prose Styles

Blog posts render inside a `.prose` wrapper with custom styles for headings, paragraphs, lists, links, code blocks, and blockquotes. All styled to match the editorial design system.

---

## Content Management

### Adding a Project

Edit `src/data/work.ts`. Add an entry to the `work` array:

```typescript
{
  title: "Project Name",
  description: "What you built and why.",
  tags: ["Tag1", "Tag2"],
  date: "2026",
  href: "https://optional-link.com",  // optional, omit for no link
  featured: true,                      // optional, shows on home page
}
```

### Adding a Blog Post

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Post Title"
description: "Brief summary for the index page."
date: "2026-03-10"
tags: ["tag1", "tag2"]
---

Your markdown content here. Supports all standard markdown plus
JSX components if needed.
```

The post will automatically appear at `/blog/<filename>` and in the blog index.

### Adding a Paper

Edit `src/data/papers.ts`. Types: `"Thesis"`, `"Publication"`, `"Reference"`.

### Adding to the Reading List

Edit `src/data/reading.ts`. Types: `"article"`, `"paper"`, `"book"`.

### Updating the Now Page

Edit `src/pages/now.astro` directly. Also update `src/pages/api/now.ts` to keep the API in sync.

---

## API Endpoints

All endpoints return JSON with `Access-Control-Allow-Origin: *`.

| Endpoint | Method | Returns |
|---|---|---|
| `/api/projects` | GET | All projects from `work.ts` |
| `/api/now` | GET | Current status (building, reading, thinking) |
| `/api/reading` | GET | Reading list from `reading.ts` |

These run as Cloudflare Pages Functions (server-side). They are not prerendered.

---

## Deployment

**Auto-deploy:** Push to `main` on GitHub → Cloudflare Pages builds and deploys automatically (~60 seconds).

**Cloudflare Pages config:**
- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Custom domain: `abhivir.com`

**Preview deployments:** PRs and branches get their own preview URLs automatically via Cloudflare Pages.

---

## Development Notes

### Astro Components vs React Islands

Most components are `.astro` files (zero JavaScript, server-rendered HTML). Use React (`.tsx`) only when you need client-side interactivity (e.g., search, chat, demos). Add `client:load` or `client:visible` directive to mount React islands:

```astro
---
import InteractiveWidget from "../components/InteractiveWidget.tsx";
---
<InteractiveWidget client:visible />
```

### Adding New Pages

Create a new `.astro` file in `src/pages/`. The file path becomes the URL:
- `src/pages/contact.astro` → `/contact`
- `src/pages/work/[slug].astro` → `/work/:slug` (dynamic route)

Use `BaseLayout` as the wrapper:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---
<BaseLayout title="Page Title">
  <div class="editorial-container">
    <!-- your content -->
  </div>
</BaseLayout>
```

### Adding API Routes

Create a `.ts` file in `src/pages/api/`. Must export a `GET`, `POST`, etc. function and set `prerender = false`:

```typescript
import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = () => {
  return new Response(JSON.stringify({ data: "value" }), {
    headers: { "Content-Type": "application/json" },
  });
};
```
