# Denning Hackathon

A web app starter built with Next.js 16, Tailwind CSS 4, and Supabase.

## What's already set up

- Next.js App Router with TypeScript
- Tailwind CSS
- Supabase browser + server clients (SSR-ready, so sessions survive page refreshes)
- `src/proxy.ts` refreshes the Supabase session on every request (Next.js 16 renamed `middleware.ts` to `proxy.ts`)

## Docs

Read these before changing code:

- [Foundation](docs/FOUNDATION.md) — locked stack, decisions, and banned tools
- [Architecture](docs/ARCHITECTURE.md) — data flow, clients, auth, and folder map
- [Database](docs/DATABASE.md) — schema, RLS rules, and migrations
- [Workflow](docs/WORKFLOW.md) — day-of sequence, AI rules, and Definition of Done
- [Hackathon Brief](docs/HACKATHON-BRIEF.md) — fill this in on the day

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a free project at [supabase.com/dashboard](https://supabase.com/dashboard).

3. Copy the env file and fill in your project details:

   ```bash
   copy .env.example .env.local
   ```

   Open `.env.local` and paste the **Project URL** and **Publishable key** from your Supabase project's **Connect** dialog (or **Settings → API keys**).

4. Start the dev server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Using Supabase

```ts
// Client Component
import { createClient } from "@/lib/supabase/client";
const supabase = createClient();

// Server Component, Server Action, or Route Handler
import { createClient } from "@/lib/supabase/server";
const supabase = await createClient();
```

To check who is signed in on the server, use `getClaims()` — it verifies the token. Avoid trusting `getSession()` on the server.

```ts
const { data } = await supabase.auth.getClaims();
const user = data?.claims;
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Deploying

Push to GitHub and import the repo on [Vercel](https://vercel.com/new). Add the same two `NEXT_PUBLIC_SUPABASE_*` variables in the Vercel project settings.
