# AGENTS.md

## About

GamePlay — a game catalog built on React Router 8 (Framework Mode, SSR), TypeScript, Tailwind 4, Vite.
Data comes from the FreeToGame API (https://www.freetogame.com/api-doc, no API key required).

Features:
- game catalog with sorting and filtering;
- a dedicated page for each individual game (by id).

## Commands

| Command | What it does |
|---------|--------------|
| `npm run dev` | dev server with HMR (http://localhost:5173) |
| `npm run build` | production build |
| `npm start` | serve the built app (`./build/server/index.js`) |
| `npm run typecheck` | `react-router typegen && tsc` |

- `build/` and `.react-router/` are generated and gitignored; `npm start` requires `npm run build` first.
- `.env` files are gitignored.

## Structure (FSD)

The app lives in `src/`. The architecture is Feature-Sliced Design with six layers:

`app`, `pages`, `widgets`, `features`, `entities`, `shared`.

FSD rules:
- In every layer except `shared`, slices may contain `ui` and `model` folders, plus a public API (`index.ts`) at the slice level — it exports everything used outside the slice.
- Only create `ui` + `model` folders if the slice has logic for `model` and multiple components for `ui`. If there is no logic and the slice is a single component, put the component directly in the slice next to the public API.
- Inside `ui`, each component gets its own folder named after the component, with its own public API (`index.ts`).
- Do not create a public API in `model`.
- `index.ts` is a barrel only: it re-exports from a module and must not contain logic or markup.
- Components are anonymous arrow functions (not `function` declarations) and are split by SOLID: each component handles only its own part of the layout/logic.
- Work on one component at a time, noting the files you changed.

Entry and routes:
- `src/root.tsx` — root Layout; `src/routes.ts` — route config; route modules (`loader`, `meta`, pages) live in the `pages` layer.
- Route types are generated into `.react-router/types/` and imported as `./+types/...`. Alias `~/` → `./src`.

## Skills

Installed in `.agents/skills/`:

- `react-router` — work with routes, loaders, meta/SEO, SSR, render errors. For Framework Mode use the `references/framework-mode.md` reference.
- `frontend-design` — design direction: palette, typography, composition; keeps the UI from looking templated.
- `react-component-architecture` — split UI into meaningful, reusable components.