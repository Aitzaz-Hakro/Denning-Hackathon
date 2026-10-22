<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project guardrails

Read these before editing code:

- `docs/FOUNDATION.md` — locked stack and decisions
- `docs/ARCHITECTURE.md` — system design and Supabase client usage
- `docs/DATABASE.md` — schema, RLS, and migration rules
- `docs/AUTH-SETUP.md` — Google OAuth redirect and provider setup
- `docs/HACKATHON-BRIEF.md` — current product scope
- `docs/SUBMISSION.md` — organizer requirements and submission checklist

Do not propose or switch the locked stack. No ORMs, NextAuth/Clerk/Firebase, Redux/Zustand/React Query/SWR, CSS-in-JS, Pages Router, or UI kits.

Hard rules:

- RLS stays enabled on every table. Never disable it to make a query work.
- Every new table ships with explicit policies in the same migration.
- Never expose the Supabase service-role key to the browser. Never use `NEXT_PUBLIC_` for secrets.
- Server Actions and protected pages verify the user with `supabase.auth.getClaims()`. `proxy.ts` is not the only guard.
- Never edit `auth.users` or an already-applied migration.
- Every schema change is a date-stamped migration in `supabase/migrations/`, pushed to Supabase with `npx supabase db push`. No dashboard-only schema edits.
- Google OAuth is configured through Supabase. The Google authorized redirect URI is the Supabase callback, never the app URL.
- AI calls run only in Server Actions or Route Handlers. The key lives in `OPENAI_API_KEY`, never `NEXT_PUBLIC_*`.
- One AI provider (OpenAI) for the event. No local model hosting or a second AI SDK.
- Do not add dependencies without updating `docs/FOUNDATION.md` and getting approval.
- Verify with `npm run lint`, `npx tsc --noEmit`, and `npm run build`.

Stop and ask when:

- A request conflicts with a locked decision.
- A change needs a new table, a schema change, or a new dependency.
- Auth, `src/proxy.ts`, the Supabase clients, or the OpenAI integration need to change.
- Something requires disabling RLS or using the service-role key.
- A change would break deployment, the README, or the submission checklist.
