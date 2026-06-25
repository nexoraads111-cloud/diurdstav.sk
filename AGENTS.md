# diurdstav.sk

Marketing website for **ĎURĎSTAV**, a Slovak construction company. Single-page
React site (content in Slovak).

## Tech stack

- Vite 8 + React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin; configured with `@theme` in `src/index.css`, no `tailwind.config.js`)
- oxlint for linting

## Commands

- `npm run dev` – start the Vite dev server (default port `5173`, HMR enabled)
- `npm run build` – type-check (`tsc -b`) and build for production into `dist/`
- `npm run lint` – run oxlint
- `npm run preview` – serve the production build locally

## Structure

- `src/App.tsx` – composes the page sections in order: `Navbar`, `Hero`, `WhyUs`, `Services`, `Realizations`, `CtaProject`, `Footer`
- `src/components/` – section components plus `Logo.tsx` and `icons.tsx` (inline SVG icons)
- `src/data.ts` – all editable site content (company info, nav links, services, reasons, gallery image list)
- `src/index.css` – Tailwind import, theme tokens (`brand` = red, `ink` = dark palettes), `.form-input` and `.no-scrollbar` component classes
- `public/images/` – local JPGs used by the services grid, hero, and gallery (referenced as `/images/<name>.jpg`)

## Cursor Cloud specific instructions

- Dependencies are plain `npm install`; the startup update script already runs it.
- Tailwind v4 here is configured entirely in CSS (`@import "tailwindcss";` + `@theme {}` in `src/index.css`). There is intentionally no `tailwind.config.js`/`postcss.config.js`; add theme tokens via `@theme` rather than creating a JS config.
- Images live in `public/images/` and are committed to the repo, so the site renders offline. Only the footer map (`<iframe>` to Google Maps) and Google Fonts (Inter/Oswald) need internet; both degrade gracefully (system-font fallback / empty map frame) when offline.
- The site is a single-page marketing site with no backend. CTAs use `tel:`/`mailto:` links; there is no form submission endpoint.
