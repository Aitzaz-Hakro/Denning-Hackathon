# Denning Hackathon

_Add the project title and a two-sentence description on the day._

- **Live app:** _add the deployed URL_
- **Demo video:** _add the Google Drive link_
- **Team:** _add names and roles_

## What's already set up

- Next.js App Router with TypeScript
- Tailwind CSS
- Supabase browser + server clients (SSR-ready, so sessions survive page refreshes)
- Email/password and Google OAuth through Supabase
- `/login` for sign-in and signup, `/dashboard` as a protected page
- `/auth/callback` and `/auth/confirm` route handlers for the auth flows
- `src/proxy.ts` refreshes the Supabase session on every request (Next.js 16 renamed `middleware.ts` to `proxy.ts`)

## AI usage

_Describe the OpenAI model and what it does._ AI calls run in server code and read `OPENAI_API_KEY` and `OPENAI_MODEL` from the environment. Optional voice input uses Groq `whisper-large-v3` through `GROQ_API_KEY`.

## Docs

Read these before changing code:

- [Foundation](docs/FOUNDATION.md) — locked stack, decisions, and banned tools
- [Architecture](docs/ARCHITECTURE.md) — data flow, clients, AI integration, and folder map
- [Database](docs/DATABASE.md) — schema, RLS rules, and migrations
- [Auth setup](docs/AUTH-SETUP.md) — Google OAuth redirect URLs and provider setup
- [Workflow](docs/WORKFLOW.md) — day-of sequence, AI rules, and Definition of Done
- [Submission](docs/SUBMISSION.md) — organizer requirements and the submission checklist
- [Design brief](.commandcode/design/brief.md) — visual direction and component rules
- [Chat UI](docs/ui/designs/chat-ui.md) — chat composition, states, and interaction rules
- [AI contract](docs/ui/designs/contract.md) — request, streaming, errors, and mock mode
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

   Open `.env.local` and paste the **Project URL** and **Publishable key** from your Supabase project's **Connect** dialog (or **Settings → API keys**). Add `OPENAI_API_KEY`, `OPENAI_MODEL`, and `GROQ_API_KEY` — all are server-only and must never use the `NEXT_PUBLIC_` prefix.

4. Enable Google sign-in:
   - In Google Cloud Console, add `https://<project-ref>.supabase.co/auth/v1/callback` as the authorized redirect URI.
   - Paste the Google Client ID and Secret into Supabase under **Authentication → Providers → Google**.
   - Add `http://localhost:3000` and the production URL to Google's authorized JavaScript origins.
   - See [Auth setup](docs/AUTH-SETUP.md) for the exact values.

5. Start the dev server:

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

## Auth routes

- `/login` — email/password and Google sign-in
- `/dashboard` — protected page; redirects to `/login` when signed out
- `/auth/callback` — exchanges the Google OAuth code for a session
- `/auth/confirm` — confirms email signups

If Supabase email confirmation is on, signup asks the user to check their inbox.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Deploying

Push to GitHub and import the repo on [Vercel](https://vercel.com/new). Add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `OPENAI_API_KEY`, `OPENAI_MODEL`, and `GROQ_API_KEY` in the Vercel project settings.
