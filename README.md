# Portfolio — React (Vite + JSX) + Flask

Fully independent rewrite of the original Lovable/TanStack Start/Cloudflare
project into a standard React (Vite, JSX) frontend and a Flask REST API
backend. No Lovable, Cloudflare Workers, TanStack Start, Vinxi, Nitro, or
Hono dependencies remain.

```
project/
├── frontend/        # React 18 + Vite + Tailwind v4 + JSX
└── backend/         # Flask REST API (Mongo + Groq)
```

## Frontend

```bash
cd frontend
cp .env.example .env       # set VITE_API_URL (defaults to http://localhost:5000)
npm install
npm run dev                # http://localhost:5173
npm run build              # production build -> dist/
```

Stack: React 18, Vite 5, Tailwind CSS v4 (`@tailwindcss/vite`), Framer
Motion, Radix UI primitives, lucide-react, Axios. Single-page application
rendered from `src/main.jsx` → `src/App.jsx`. In-page navigation uses
hash anchors (`#about`, `#projects`, etc.) — no router needed.

API calls go through `src/lib/api.js` (Axios instance using
`VITE_API_URL`).

Deploy: any static host — Firebase Hosting, Netlify, Vercel, S3+CloudFront,
Nginx. Just `npm run build` and serve `dist/`.

## Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env              # fill MONGO_URL, GROQ_API_KEY
python app.py                     # http://localhost:5000
```

Production:

```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

### REST endpoints

| Method | Path                | Purpose                            |
|--------|---------------------|------------------------------------|
| GET    | `/`                 | Health string                      |
| GET    | `/api/health`       | `{ "status": "ok" }`               |
| POST   | `/api/contact/`     | Save contact form to MongoDB       |
| POST   | `/api/chat/`        | Groq-powered portfolio Q&A bot     |

CORS is enabled globally via `flask-cors`. For production, restrict
`CORS(app, origins=["https://your-frontend-domain"])`.

Deploy: Render, Railway, Fly.io, any VPS, or a container platform.

## Migration notes (what changed vs. the Lovable original)

### Removed (Lovable / Cloudflare / TanStack Start infra)

- `@lovable.dev/vite-tanstack-config`
- `@cloudflare/vite-plugin`, `wrangler.jsonc`
- `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/router-plugin`
- `@tanstack/react-query` (was unused at runtime; can be re-added if needed)
- `vite-tsconfig-paths`, `typescript`, `tsconfig.json`
- `src/router.jsx`, `src/routes/__root.jsx`, `src/routes/index.jsx`
- `src/server.js`, `src/start.js` (Cloudflare Worker SSR entry)
- `src/lib/error-capture.js`, `src/lib/error-page.js` (Lovable SSR error wrappers)
- `routeTree.gen.ts` and the TanStack file-based routing system

### Added / replaced

- `vite.config.js` — plain Vite + `@vitejs/plugin-react` + `@tailwindcss/vite`
  + `@` path alias
- `index.html` — standard Vite entry with all meta/JSON-LD that used to be
  declared in TanStack `head()`
- `src/main.jsx` — React 18 client root
- `src/App.jsx` — single-page composition (was the TanStack `/` route)
- `src/lib/api.js` — Axios instance bound to `VITE_API_URL`
- `jsconfig.json` — IDE alias resolution for `@/*`
- `axios` dependency for API calls (replaces native `fetch` in `Contact.jsx`
  and `SearchChatbox.jsx`)

### Backend

The backend was already Flask. Added empty `models/` and `utils/` packages
(with `__init__.py`) to match the required layout, pinned versions in
`requirements.txt`, and added `.env.example` plus `.gitignore`.

### UI / behavior

UI is preserved 1:1 — every portfolio component (`Hero`, `About`, `Skills`,
`Experience`, `Projects`, `WhyHire`, `Contact`, `Footer`, `Nav`,
`BackgroundFX`, `CursorGlow`, `ScrollProgress`, `CommandPalette`,
`SearchChatbox`, `MagneticButton`, `Section`, `Counter`) was carried over
unchanged, including `src/styles.css` (Tailwind v4 design tokens, glass
effects, gradients, animations). Form submit + chat behavior preserved;
only the transport switched from `fetch` to Axios with a configurable base
URL.
