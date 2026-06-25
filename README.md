# diurdstav.sk

Webová stránka stavebnej spoločnosti **ĎURĎSTAV**. Jednostránkový web
postavený na Vite + React + TypeScript a Tailwind CSS v4.

## Vývoj

```bash
npm install      # inštalácia závislostí
npm run dev      # vývojový server na http://localhost:5173
npm run build    # produkčný build do priečinka dist/
npm run lint     # statická analýza (oxlint)
npm run preview  # náhľad produkčného buildu
```

## Štruktúra

- `src/App.tsx` – skladá jednotlivé sekcie stránky
- `src/components/` – komponenty sekcií a SVG ikony
- `src/data.ts` – upraviteľný obsah (kontakty, služby, projekty)
- `src/index.css` – import Tailwindu a definícia farebnej palety cez `@theme`
