# Foundation — The Rock

Read this before writing code. If an AI tool suggests something that conflicts with this document, this document wins.

## Event requirements (from the organizers)

These are non-negotiable. A missing item means the project cannot be judged.

- 5-hour build: Friday 23 October 2026, Auditorium, DITE, Hyderabad.
- Working web app, deployed online with a link that opens for anyone.
- Must use AI: an API, a pre-trained model, or your own model.
- Public GitHub repository with a complete README.
- Demo video, 3 to 5 minutes, on Google Drive with "Anyone with the link" access.
- Code must be written during the 5 hours; no pushes after the deadline.
- No API keys or passwords in code; use environment variables.
- Team of up to 3.

The starter and these docs are preparation. Product features must be written during the 5 hours. Full checklist: `docs/SUBMISSION.md`.

## Stack (LOCKED)

| Layer | Choice | Installed version | Why |
| --- | --- | --- | --- |
| Framework | Next.js, App Router, `src/` directory | 16.4.2 | UI and server code in one project |
| UI | React | 19.3.0 | Ships with Next.js |
| Language | TypeScript (strict) | 5.x | Catches errors before the demo |
| Styling | Tailwind CSS | 4.x | Fast layout without extra CSS files |
| Backend | Supabase (Postgres, Auth, Storage) | supabase-js 2.118.0, @supabase/ssr 0.12.7 | Database, auth, and file storage in one service |
| AI chat | OpenAI API, called from the server | Official `openai` SDK when the chat route starts | Key provided by Habib; required by the event |
| Speech-to-text | Groq Whisper `whisper-large-v3`, called from the server | Groq API via `fetch` | Optional voice input; free tier; key in `GROQ_API_KEY` |
| Motion | Lenis + Framer Motion (`motion`) + GSAP | lenis 1.3.27, motion 14.6.0, gsap 3.15.0, @gsap/react 2.1.2 | Landing pages only; CSS 3D is the default |
| Package manager | npm | 11.x | Already configured |
| Hosting | Vercel | — | Deploys Next.js with no setup |

## Locked decisions

1. **App Router only.** Every page lives in `src/app`. Do not create `pages/`.
2. **Supabase is the only application backend.** The AI provider is an external API, not a second backend. No separate Express/Nest server, no Firebase.
3. **No ORM.** Query with `supabase-js`. Every schema change is a date-stamped migration in `supabase/migrations/` and is pushed to Supabase.
4. **Supabase Auth only: email + password and Google OAuth.** No NextAuth, Clerk, or another auth library.
5. **Tailwind only.** No component library, CSS-in-JS, or second styling system. Copy-pasted Tailwind snippets are fine.
6. **Server-first data fetching.** Server Components and Server Actions by default. No React Query, SWR, Redux, or Zustand.
7. **npm + Vercel.** Do not switch package managers or hosts during the event.
8. **TypeScript strict, no `any`.** If `any` is unavoidable, leave a comment explaining why.
9. **Cache Components off.** `cacheComponents` stays out of `next.config.ts`; it forces Suspense boundaries around dynamic Supabase data and slows the event down.
10. **AI is required, Option A.** The app calls OpenAI from server code, with the app hosted on Vercel. Do not host models or run local inference during the event.
11. **AI keys stay server-only.** `OPENAI_API_KEY` and `GROQ_API_KEY` live on the server; only Server Actions and Route Handlers call the providers. Never use a `NEXT_PUBLIC_*` variable for them.
12. **Submission is part of Done.** A public repo, a deployed URL, a complete README, and a 3-5 minute demo video are required, not optional.
13. **Voice is optional.** Speech-to-text uses Groq `whisper-large-v3`; the transcript goes into the editable composer and is never auto-sent. The text input always remains available.

## Motion and 3D

Landing pages may use CSS 3D, Framer Motion (`motion`), and Lenis when the design calls for it. Read `docs/ui/designs/motion-3d.md` first.

- Lenis is allowed on marketing/landing routes only, never the chat or dashboard.
- CSS 3D is the default. React Three Fiber is allowed only for one real product object, with a static fallback.
- Every animation respects `prefers-reduced-motion`.
- Pre-approved for landing motion: `lenis`, `motion`, `gsap`, and `@gsap/react`.
- Pre-approved for one real 3D object: `three`, `@react-three/fiber`, and `@react-three/drei`.
- Any other motion or 3D package requires updating this document and getting approval.

## Banned

- Prisma, Drizzle, or any other ORM
- NextAuth, Clerk, Firebase Auth, or any auth SDK other than Supabase
- Redux, Zustand, React Query, SWR
- CSS-in-JS (styled-components, Emotion)
- Pages Router
- UI kits or component libraries
- Supabase service-role key in any `NEXT_PUBLIC_*` variable or client component
- Editing `auth.users` directly
- Editing the schema in the Supabase dashboard without a matching migration file
- Calling OpenAI or Groq directly from a Client Component
- OpenAI or Groq keys in code, in `NEXT_PUBLIC_*` variables, or committed to the repo
- Local model hosting (Ollama, RunPod, Hugging Face Endpoints) during the event
- A third AI provider; the approved pair is OpenAI for chat and Groq for speech-to-text
- Lenis or WebGL inside the chat or dashboard
- Scroll hijacking, 3D-only content, or animation without a reduced-motion fallback

## Dependencies

Only install what is already in `package.json`. Adding anything else requires:

1. Agreeing as a team.
2. Adding it to this document with one line explaining why.
3. Installing it.

Pre-approved for the chat slice: `openai` (the official SDK). Groq STT uses `fetch`; no Groq SDK is needed.

AI agents must ask before installing anything else.

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
- The AI feature works from the deployed URL, not only locally.
