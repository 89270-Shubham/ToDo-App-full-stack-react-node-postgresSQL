## Copilot instructions for the Next‑Gen To‑Do App

These notes are intended to make an AI coding agent immediately productive in this repo. They are short, specific, and based only on discoverable patterns in this project (see `README.md` and `instructions.md`).

- Big picture
  - Full‑stack React + Node app using Supabase (Postgres) for DB, Auth (Google OAuth), and Realtime.
  - Frontend: React (Vite or CRA mentioned) + Bootstrap for UI.
  - Backend: Node.js + Express API layer. Background jobs (reminders/recurrence) may be implemented as server cron jobs or Supabase scheduled functions.

- Key concepts & data shapes (from `instructions.md`)
  - `tasks` table fields to expect: id, user_id, title, description, due_date, completed, priority, recurrence, reminder_time, created_at.
  - `users` table: Supabase-managed auth users; project may add `is_admin` to enforce admin routes.

- Where to look first
  - `README.md` and `instructions.md` — high-level architecture, features, and intended dev flows.
  - Search for `supabase`, `supabase-js`, `channel().on('postgres_changes')`, `signInWithOAuth`, and `service_role` in the codebase to find auth, realtime, and server-side integrations.
  - Look for `package.json` files at repo root and in frontend/backend folders to discover exact dev commands. If not present, prefer the commands below as examples.

- Common developer workflows (explicit examples & fallbacks)
  - Frontend dev: use the frontend package scripts.
    - Install & run (Windows cmd.exe):
      - cd into frontend and run `npm install`, then `npm run dev` (Vite). Example:
        - `cd frontend` then `npm install` then `npm run dev`.
  - Backend dev: use the backend package scripts.
    - Install & run (Windows cmd.exe):
      - `cd backend` then `npm install` then `npm run dev` (uses nodemon) or `npm start` to run the production server.
  - Environment variables: expect `.env` files for Supabase URL, anon/public key, and a service role key for server APIs. Do NOT hardcode keys — prefer reading from env.

- Project-specific patterns
  - Realtime: uses Supabase channels and `postgres_changes` events to sync tasks across devices. Search for `.channel()` usage.
  - Recurrence & reminders: either implemented on the backend (Express route or scheduled job) or via Supabase functions; when marking a recurring task complete, code should create the next instance with an updated `due_date`.
  - Admin surface: protected at `/admin` and gated by `is_admin` in user metadata or a users table column. Admin APIs may require the service_role key.

- Integration points & external dependencies
  - Supabase: DB, Auth, Realtime, and scheduled functions (for reminders). Service-role key is required for admin/all-users queries.
  - OAuth: Google provider via Supabase Auth (use `supabase.auth.signInWithOAuth({ provider: 'google' })`).
  - Notifications: may be delivered via a cron job or 3rd‑party API; search for `cron`, `node-cron`, `agenda`, or `bull`.

- Concrete examples to include in changes
  - When modifying task logic, reference the `tasks` columns listed above and maintain immediate UI updates on change (frontend expects realtime push or optimistic updates).
  - For admin endpoints, require server-side checks that use `is_admin` or validate the service role before returning all-users data.

- Safety & non-discoverable assumptions
  - Do not add secrets (API keys) directly into code; use env vars and document required var names in `README.md` if missing.
  - If a choice is required for dev commands (CRA vs Vite, or exact script names), search for `package.json` and prefer the script that exists.

- Helpful quick tasks for contributors
  - Add a top-level `package.json` or two package.json files (frontend/backend) if missing, and include `dev` scripts that map to discovered build tools.
  - Add a short `scripts` section in README with the exact npm commands discovered in the repo.

Example exact commands discovered in this repo (run from the repo root):

```cmd
cd "s:\Next-Gen Todo app\App-code\ToDo-App-full-stack-react-node-postgresSQL\frontend"
npm install
set VITE_SUPABASE_URL=https://your-project.supabase.co
set VITE_SUPABASE_ANON_KEY=your-anon-key
npm run dev

cd "s:\Next-Gen Todo app\App-code\ToDo-App-full-stack-react-node-postgresSQL\backend"
npm install
set SUPABASE_URL=https://your-project.supabase.co
set SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
npm run dev
```

If anything here is unclear or you'd like me to include additional concrete file references (for example, after you point me to the frontend/backend folders), tell me which areas to expand and I will update this file.
