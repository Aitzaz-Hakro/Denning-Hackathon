# Architecture

## Big picture

```
Browser
  |
  v
src/proxy.ts            refreshes the Supabase session on every request
  |
  v
Next.js App Router      Server Components + Server Actions
  |
  v
@/lib/supabase/server   supabase-js with cookies
  |
  v
Supabase Postgres       Row Level Security enforced
```

## Rendering rules

- Server Components are the default.
- Add `"use client"` only at interactive leaves: forms, menus, modals, realtime widgets.
- Never fetch Supabase data from a Client Component unless the feature needs live updates. Use a Server Component or Server Action.
- Server Actions must verify the user and return a typed result. Do not trust data sent from the browser.

## Which Supabase client to use

| Where the code runs | Import | Notes |
| --- | --- | --- |
| Client Component | `createClient` from `@/lib/supabase/client` | Realtime, auth UI, browser-only reads |
| Server Component | `await createClient()` from `@/lib/supabase/server` | Preferred for reads |
| Server Action | `await createClient()` from `@/lib/supabase/server` | Verify the user first |
| Route Handler | `await createClient()` from `@/lib/supabase/server` | Same rules |
| `src/proxy.ts` | `updateSession` from `@/lib/supabase/proxy` | Session refresh only |

Rules:

- Never import `@/lib/supabase/server` into a Client Component.
- Never create a Supabase client at module scope; create one per request.
- Never pass a Supabase client from server to client as a prop.

## Auth flow

1. A user signs up with email and password (`supabase.auth.signUp`).
2. Supabase inserts the user into `auth.users`.
3. The `handle_new_user` trigger creates the matching `public.profiles` row.
4. Supabase sets session cookies through the server client.
5. `src/proxy.ts` refreshes the session on each request.
6. Server code checks identity with `supabase.auth.getClaims()`.

Use `getClaims()` for authorization decisions. Do not trust `getSession()` on the server.

## Route protection

The proxy refreshes sessions; it is not the only guard. Every protected page and Server Action checks the user itself:

```ts
const { data } = await supabase.auth.getClaims();
if (!data?.claims) redirect("/login");
```

Next.js docs warn that Server Actions are POST requests to a page route, so a proxy matcher change can silently remove protection. Verify inside the action.

## Folder map

```
src/
  app/                 routes, layouts, pages, Server Actions
  components/          shared UI components
  lib/
    supabase/
      client.ts        browser client
      server.ts        server client (cookies)
      proxy.ts         session refresh logic
  proxy.ts             Next.js proxy entry
supabase/
  migrations/          append-only SQL migrations
docs/                  the docs you are reading
```

## Environment variables

| Variable | Used by | Secret? |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | browser + server | No |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | browser + server | No |
| `SUPABASE_SERVICE_ROLE_KEY` | server-only scripts, if ever needed | Yes |

Rules:

- `.env.local` is never committed.
- Anything with `NEXT_PUBLIC_` is visible in the browser. Never put a secret there.
- The publishable key is safe in client code; RLS still decides what data the user can see.

## Next.js 16 gotchas

These are confirmed in `node_modules/next/dist/docs/` for the installed version:

- `cookies()`, `headers()`, `params`, and `searchParams` are async. Await them.
- `middleware.ts` is renamed to `proxy.ts`; the exported function is `proxy`. Proxy runs on Node.js only.
- Turbopack is the default for dev and build.
- `next lint` is removed; use `npm run lint`.
- Cache Components is disabled for this project.

## UI states

Every data view needs:

- A loading state (`loading.tsx` or a Suspense fallback).
- An error state (`error.tsx` or an inline message).
- An empty state that tells the user what to do next.
