# Foundation — The Rock

Read this before writing code. If an AI tool suggests something that conflicts with this document, this document wins.

## Stack (LOCKED)

| Layer | Choice | Installed version | Why |
| --- | --- | --- | --- |
| Framework | Next.js, App Router, `src/` directory | 16.4.2 | UI and server code in one project |
| UI | React | 19.3.0 | Ships with Next.js |
| Language | TypeScript (strict) | 5.x | Catches errors before the demo |
| Styling | Tailwind CSS | 4.x | Fast layout without extra CSS files |
| Backend | Supabase (Postgres, Auth, Storage) | supabase-js 2.118.0, @supabase/ssr 0.12.7 | Database, auth, and file storage in one service |
| Package manager | npm | 11.x | Already configured |
| Hosting | Vercel | — | Deploys Next.js with no setup |

## Locked decisions

1. **App Router only.** Every page lives in `src/app`. Do not create `pages/`.
2. **Supabase is the only backend.** No separate Express/Nest server, no Firebase.
3. **No ORM.** Query with `supabase-js`. Schema changes are SQL migrations.
4. **Email + password auth only.** No NextAuth, Clerk, or OAuth providers.
5. **Tailwind only.** No component library, CSS-in-JS, or second styling system. Copy-pasted Tailwind snippets are fine.
6. **Server-first data fetching.** Server Components and Server Actions by default. No React Query, SWR, Redux, or Zustand.
7. **npm + Vercel.** Do not switch package managers or hosts during the event.
8. **TypeScript strict, no `any`.** If `any` is unavoidable, leave a comment explaining why.
9. **Cache Components off.** `cacheComponents` stays out of `next.config.ts`; it forces Suspense boundaries around dynamic Supabase data and slows the event down.

## Banned

- Prisma, Drizzle, or any other ORM
- NextAuth, Clerk, Firebase Auth, OAuth providers
- Redux, Zustand, React Query, SWR
- CSS-in-JS (styled-components, Emotion)
- Pages Router
- UI kits or component libraries
- Supabase service-role key in any `NEXT_PUBLIC_*` variable or client component
- Editing `auth.users` directly

## Dependencies

Only install what is already in `package.json`. Adding anything else requires:

1. Agreeing as a team.
2. Adding it to this document with one line explaining why.
3. Installing it.

AI agents must ask before installing anything.

## Change protocol

A locked decision changes only by editing this document. If an AI tool wants to break a rule, it must stop and ask. The answer is no unless this document is updated first.

## Source of truth

1. Running code and the versions in `package.json`
2. These docs
3. Any AI tool's memory or suggestions

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Typecheck |
| `npm run start` | Run the production build |

## What good looks like

- Small diffs that solve one problem.
- Server Components unless interactivity is required.
- RLS policies for every table, tested with two accounts.
- Loading, error, and empty states for every data view.
