# NeuroFlow OS

A predictive productivity intelligence system that analyzes behavioral signals (typing rhythm, pauses, backspace rate) to predict cognitive fatigue and focus drops in real time — and actively intervenes to improve output.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080, path /api)
- `pnpm --filter @workspace/neuroflow run dev` — run the frontend (port 20298, path /)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, Recharts, Framer Motion, wouter
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `lib/api-spec/openapi.yaml` — API contract (source of truth)
- `lib/db/src/schema/` — Drizzle table definitions (sessions, behavioral_snapshots, predictions, interventions, insights, cognitive_profile)
- `artifacts/api-server/src/routes/` — Express route handlers (sessions, behavioral, predictions, interventions, insights, profile, analytics)
- `artifacts/api-server/src/lib/prediction-engine.ts` — Core cognitive prediction algorithm
- `artifacts/neuroflow/src/pages/` — Frontend pages (dashboard, sessions, insights, analytics, profile)
- `artifacts/neuroflow/src/hooks/use-behavioral-tracker.ts` — Real-time keystroke tracking hook

## Architecture decisions

- Privacy-first: only behavioral metadata (WPM, pause count, backspace rate) is tracked — never actual keystrokes or text content
- Prediction engine uses trend-based inference across recent snapshots; personalized against each user's baseline WPM and attention span
- Interventions are rate-limited (1 per type per 10 min per session) to avoid alert fatigue
- Default dark mode with localStorage persistence; cyan + dark navy palette
- Single cognitive profile per user (no auth needed for MVP)

## Product

- Dashboard: live focus/fatigue/distraction gauges, real-time prediction timeline, session start/stop, intervention banners
- Sessions: history of all sessions with per-session metrics
- Insights: AI-generated behavioral insights and peak hour bar chart
- Analytics: 7-day productivity trend, daily session count, peak hour breakdown
- Profile: cognitive model settings (peak hours, attention span, fatigue threshold)

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Always run codegen after changing `lib/api-spec/openapi.yaml`
- Behavioral snapshots are submitted every 10 seconds while a session is active (window-level keydown listener)
- The prediction engine reads the last 20 snapshots to compute trends
- DB push: `pnpm --filter @workspace/db run push`

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
