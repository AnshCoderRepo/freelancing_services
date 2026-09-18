# Ansh Adarsh — Software Development Engineer Portfolio & Architecture

A state-of-the-art developer portfolio and interactive engineering showcase built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🌟 Key Architecture & Features

- **Interactive Developer Hero Terminal**:
  - Full-featured client-side terminal command engine supporting `whoami`, `skills`, `projects`, `stats`, `experience`, `education`, `contact`, `matrix`, and `quote`.
  - Glassmorphism macOS UI with command history, keyboard navigation, and quick-click pill bar.
- **Single-Page Application (SPA) Anchor Navigation**:
  - Smooth anchor-scrolling across `#hero`, `#about`, `#skills`, `#experience`, `#timeline`, `#projects`, `#expertise`, and `#contact`.
- **Interactive Skills Circuit Ecosystem**:
  - Circuit diagram with animated SVG beam lines interconnecting React 19, Next.js 16, TypeScript, Node.js, Python, PostgreSQL, and Docker.
- **Interactive MacBook Workspace Mockup**:
  - Staged 3D MacBook lid opening and automated app launch when scrolling into view.
  - WhatsApp/macOS-styled dual-pane conversation sync covering Euroasiann SDE and LVPEI Data Science internships.
  - Downloadable verified completion certificates.
- **Comprehensive Production SEO**:
  - Dynamic OpenGraph image generation (`/opengraph-image`), JSON-LD schema markup (`Person` & `WebSite`), `sitemap.xml`, `robots.txt`, and Web App Manifest (`manifest.webmanifest`).
- **Session-Aware Preloader**:
  - Smooth loader playing only once per browser session via `sessionStorage`.

---

## 🛠️ Tech Stack

| Domain | Technology |
|---|---|
| **Framework** | Next.js 16.1.6 (App Router, Turbopack) |
| **UI Library** | React 19.2.3 |
| **Language** | TypeScript 5 (Strict Mode) |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion & Motion |
| **Icons** | Lucide React & React Icons |
| **Bundler** | Turbopack |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **npm** or **pnpm** / **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AnshCoderRepo/freelancing_services.git
   cd freelancing_services
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Scripts

- `npm run dev`: Starts the Next.js development server with Turbopack.
- `npm run build`: Generates the optimized production build.
- `npm run start`: Starts the Next.js production server.
- `npm run lint`: Runs ESLint across the codebase.

---

## 📁 Directory Structure

```
├── public/                     # Static assets, logos, project previews
├── src/
│   ├── app/                    # Next.js App Router (pages, layouts, SEO endpoints)
│   │   ├── about/              # Secondary About page
│   │   ├── error.tsx           # Global runtime error boundary
│   │   ├── layout.tsx          # Root layout with fonts, SEO & metadata
│   │   ├── loading.tsx         # Suspense loading fallback
│   │   ├── manifest.ts         # Web App Manifest
│   │   ├── not-found.tsx       # Custom 404 handler
│   │   ├── opengraph-image.tsx # Edge-rendered dynamic OpenGraph banner
│   │   ├── page.tsx            # Single-page portfolio flow
│   │   ├── robots.ts           # Search engine indexing rules
│   │   └── sitemap.ts          # XML Sitemap generator
│   ├── components/             # High-level section components
│   │   ├── about-section.tsx
│   │   ├── david-hero.tsx
│   │   ├── experience-section.tsx
│   │   ├── glass-navbar.jsx
│   │   ├── hero-terminal.tsx
│   │   ├── skills-section.tsx
│   │   └── ui/                 # Reusable UI primitives & widgets
│   ├── data/                   # Data constants (branding, portfolio, timeline)
│   └── lib/                    # Utility functions (cn, clsx, tailwind-merge)
├── .env.example                # Environment variable template
└── next.config.ts              # Next.js build & image optimization configuration
```

---

## 🔒 Security & Performance Guidelines

- **Zero Client-Side Secrets**: All public variables are strictly scoped with `NEXT_PUBLIC_`.
- **Image Optimization**: Remote domains (`images.unsplash.com`, `ui.aceternity.com`) explicitly allowlisted in `next.config.ts`.
- **Zero Memory Leaks**: All component timers (`setTimeout`, `setInterval`) utilize ref tracking with mandatory unmount cleanup.

---

## 📄 License & Attribution

Designed and engineered by **Ansh Adarsh** © 2026. All rights reserved.
