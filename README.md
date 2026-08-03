# P‡TCH - Official Band Website

Official static website for **P‡TCH**, a Dutch melodic rock project. Built with **[Astro](https://astro.build)**, **Tailwind CSS 4**, and integrated with **[Pages CMS](https://pagescms.org)** for content management.

## Tech Stack

- **Astro**: Static site generator with minimal JavaScript and fast HTML rendering
- **Tailwind CSS 4**: Modern styling via Vite plugin integration
- **TypeScript**: Typed theme constants, props, and content collection schemas
- **Pages CMS**: Web-based admin dashboard integrated via `.pages.yml`
- **Self-hosted Fonts**: Inter, Fraunces, and JetBrains Mono (`.woff2`)

## Features

- 🎸 **Interactive Lineup**: Band member showcase with 1:1 portrait modals, modal switching, and keyboard arrow key navigation (`←` / `→`)
- 📅 **Live Shows & Tour Dates**: Managed via structured JSON content collections (`src/content/shows/`) with automatic upcoming/past show sorting
- 🎵 **Music & Media Page**: Integrated Spotify artist embed player and YouTube live performance video highlights
- 📷 **Touch-Enabled Photo Gallery**: Slideshow with smooth crossfade animations, ambient background blur, mobile touch-swipe support, and thumbnail auto-scrolling
- 📬 **Contact & Booking Form**: Ready for Web3Forms, FormSubmit, or custom HTTPS endpoint integration
- 📱 **100% Mobile Optimized**: Responsive layout with enlarged touch targets, accessible keyboard landmarks, and dark mode support
- 📝 **Pages CMS Integration**: Manage show dates and bio settings via [pagescms.org](https://pagescms.org) directly linked to the GitHub repository

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

The build process compiles static pages and prunes unreferenced original raster assets via [`scripts/prune-unused-assets.mjs`](./scripts/prune-unused-assets.mjs).

Preview the production build locally:

```bash
npm run preview
```

## Theme & Site Configuration

Main site settings live in [`src/config/theme.config.ts`](./src/config/theme.config.ts):

- `SITE.name`
- `SITE.description`
- `NAVIGATION`
- `CONTACT`
- `FORMS`
- `SOCIAL_LINKS`

Set your production URL before deploying:

```bash
SITE_URL=https://your-domain.com
```

or:

```bash
PUBLIC_SITE_URL=https://your-domain.com
```

This keeps canonical URLs, Open Graph metadata, robots.txt, and sitemap generation aligned with your deployed domain.

## Project Structure

```text
patch-website/
├── .pages.yml               # Pages CMS configuration for band management
├── public/
│   ├── favicon.ico          # Site favicon
│   ├── fonts/               # Self-hosted web fonts (Inter, Fraunces, JetBrains Mono)
│   └── images/              # Band assets & gallery photography
│       ├── band/            # Member photos & hero banner
│       └── gallery/         # Gallery slideshow photos
├── scripts/
│   └── prune-unused-assets.mjs # Build script to clean unreferenced images
├── src/
│   ├── components/          # Reusable Astro UI components (Header, Footer, BandMembers, Shows, etc.)
│   ├── config/              # Centralized site configuration (theme.config.ts)
│   ├── content/             # Astro content collections
│   │   ├── settings/        # Global band bio & contact settings JSON
│   │   └── shows/           # Concert dates JSON files
│   ├── layouts/             # Base HTML layout & SEO metadata wrapper
│   ├── pages/               # Site pages (/shows, /music, /gallery, /contact, 404)
│   └── styles.css           # Design tokens & Tailwind CSS configuration
└── astro.config.mjs         # Astro site configuration
```

## Managing Content via Pages CMS

Band members can manage content without touching code:

1. Log into **[pagescms.org](https://pagescms.org)** with GitHub.
2. Connect to the repository (`patch-website`).
3. **Shows**: Add or edit concert dates, venues, cities, and ticket URLs in `src/content/shows/`.
4. **Settings**: Update band bio, email, or social media links in `src/content/settings/`.

## SEO & Metadata

Included out of the box:
- Unique page titles and meta descriptions
- Canonical URLs generated from configured site URL
- Open Graph & Twitter card social preview metadata
- XML sitemap at `/sitemap.xml`
- Dynamic `robots.txt`

## Forms

The contact form in [`src/pages/contact.astro`](./src/pages/contact.astro) uses Web3Forms or FormSubmit endpoints. Replace `WEB3FORMS_ACCESS_KEY` or form action URL with your own endpoint before deploying.

## License

Created for **P‡TCH Band**. All rights reserved.
