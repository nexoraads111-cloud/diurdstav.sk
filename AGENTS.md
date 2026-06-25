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

- `src/App.tsx` – composes the page sections
- `src/components/` – section components (`Hero`, `Services`, `About`, `Projects`, `Process`, `Contact`, `Footer`, `Navbar`) and `icons.tsx` (inline SVG icons)
- `src/data.ts` – all editable site content (company info, services, projects, steps)
- `src/index.css` – Tailwind import, theme tokens (`brand`/`ink` palettes), and the `.form-input` component class

## Cursor Cloud specific instructions

- Dependencies are plain `npm install`; the startup update script already runs it.
- Tailwind v4 here is configured entirely in CSS (`@import "tailwindcss";` + `@theme {}` in `src/index.css`). There is intentionally no `tailwind.config.js`/`postcss.config.js`; add theme tokens via `@theme` rather than creating a JS config.
- The contact form is front-end only — submitting it just shows an in-page success state (no backend/network call).
- Google Fonts (Inter/Sora) load via a `<link>` in `index.html`; if the VM has no internet the site still renders correctly with system-font fallbacks.
