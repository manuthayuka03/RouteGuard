# RouteGuard

Intelligent Route Compliance & Transport Monitoring System
IS2901 Software Development Project · MindMesh-20 · Client: MillenniumIT ESP

RouteGuard compares vehicle GPS movement with authorized routes and schedules, then alerts government officers about deviations, delays and unexpected stops.

## Project structure

```
RouteGuard/
├── web/       React web app (Admin + Government Officer portals)
├── mobile/    React Native driver app
├── backend/   Spring Boot backend
└── docs/      Diagrams, API contract, notes
```

## Module owners

| Member | Module | Where the work lives |
|---|---|---|
| 1 | Administration & Security | `web/src/features/admin` |
| 2 | Transport & Route Management | `web/src/features/transport` |
| 3 | Live Monitoring & Geospatial Engine | `web/src/features/monitoring` |
| 4 | Compliance, Incidents & Analytics | `web/src/features/compliance` |
| 5 | Driver Mobile Application | `mobile/` |

## Running the web app

You need Node.js 20 or newer and Git.

```
git clone https://github.com/manuthayuka03/RouteGuard.git
cd RouteGuard/web
npm install
copy .env.example .env
```

Start the fake data server (terminal 1):

```
npm run mock
```

Start the web app (terminal 2):

```
npm run dev
```

Open http://localhost:5173. The temporary login lets you choose Administrator or Government Officer.

## Team rules

1. Never push directly to `main`. Work on your own branch and open a pull request.
2. Before starting any task, update your copy: `git checkout main` then `git pull`.
3. Branch names: `feature/<module>-<what>`, for example `feature/transport-drivers-page`.
4. Commit messages start with `feat:`, `fix:` or `docs:`.
5. Only edit files inside your own module folder. If you need to change a shared file, tell the group first.
6. Before opening a pull request, run `npm run lint` inside `web` and fix any errors.
7. Never commit `.env` files, passwords or API keys.

## Shared files (change only after telling the team)

- `web/src/theme.js` colours and fonts
- `web/src/layouts/` sidebar, top bar and menus
- `web/src/components/` shared components
- `web/src/services/api.js` connection to the backend
- `web/mock/data/<module>.json` fake data, one file per module. Add your collections to your own file, then restart `npm run mock`. `mock/db.json` is generated, so never edit it.
- `web/src/App.jsx` collects every module's routes. Do not edit it. Add your pages in your own `features/<module>/routes.jsx`
- `web/src/components/` shared pieces: StatusBadge, StatCard, PageHeader, DataTable. See them at /dev/components and use them instead of building your own.

## Agreed decisions

- GPS tracker details (ID, model, provider) are stored inside the vehicle record. There is no separate tracker table.
- The Vehicle & Trip Details page opens from Live Monitoring and other screens. It has no sidebar item.