# Workflow

## Before the event

Work through the checklist in `docs/SUBMISSION.md`:

- GitHub account for every member, Vercel account, Google Drive space.
- OpenAI API key with the free quota checked.
- Git, VS Code, Node.js, and project dependencies installed.
- One practice run: a tiny AI app deployed, pushed, and recorded.
- Roles agreed: AI lead, app lead, ship lead.
- Repository confirmed public.

## Day-of sequence

### 1. Scope lock

- Fill in `docs/HACKATHON-BRIEF.md`, including the AI use.
- Pick at most three MVP features.
- Write the demo path: the exact clicks the judges will see.

Exit: the brief has a problem statement, three features, AI use, non-goals, and a demo script.

### 2. Schema first

- Add only the tables those features need.
- Write a date-stamped migration with RLS and policies in the same file.
- Push it to Supabase and regenerate types.

Exit: every table has RLS, every policy is tested with two accounts, and types are generated.

### 3. Auth vertical slice

- Email/password and Google signup, login, logout, and one protected page.
- Follow `docs/AUTH-SETUP.md` for the Google redirect settings.

Exit: a new account can sign up with either method, land on the protected page, log out, and log back in.

### 4. AI vertical slice

- One Route Handler or Server Action calls OpenAI.
- Read the key from `OPENAI_API_KEY`; it works locally.
- Add one visible UI that shows the AI result.
- Handle loading, timeout, and provider errors.

Exit: a real prompt returns a real answer in the browser.

### 5. Feature slices

Build one feature end-to-end before starting the next:

1. Database table + RLS
2. Server Action or query
3. UI with loading, error, and empty states
4. Manual test with two accounts

Exit: the feature works in the browser and the build passes.

### 6. Polish, deploy, submit

- Fix mobile layout.
- Add empty states and seed data.
- Deploy to Vercel with production env vars.
- Rehearse the demo path and create two accounts with realistic data.
- Record the 3-5 minute demo video, upload it to Google Drive, and set "Anyone with the link".
- Complete the README with the title, description, live URL, and demo video.
- Submit the Google Form and keep the confirmation.

Exit: the live URL and video link work in incognito, and the form is submitted.

### 7. Freeze

- No pushes after the organizer's deadline.
- Keep the submission confirmation.

## AI collaboration protocol

Before editing code, an AI agent must read:

1. `docs/FOUNDATION.md`
2. `docs/ARCHITECTURE.md`
3. `docs/DATABASE.md`
4. `docs/AUTH-SETUP.md` when touching auth
5. `docs/HACKATHON-BRIEF.md`

Rules:

- Plan before touching more than one file.
- No new dependencies without approval and a FOUNDATION update.
- No stack substitutions.
- Never rewrite auth, `src/proxy.ts`, or an applied migration without asking.
- Never disable RLS or use the service-role key to make something work.
- Never call OpenAI from client code or expose `OPENAI_API_KEY`.
- Keep diffs small and related to the task.
- Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` after changes.

If a request conflicts with a locked decision, stop and ask. Do not silently comply and do not silently substitute.

## Definition of Done

- Works in the browser, not just in theory.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.
- RLS checked with two accounts.
- Every schema change has a date-stamped migration, and it is applied to Supabase.
- Loading, error, and empty states exist.
- Mobile layout checked.
- The AI feature works from the deployed URL.
- The live URL works in an incognito window.
- The README has the title, description, live link, and demo video.
- The demo video is 3-5 minutes and shared with "Anyone with the link".
- The repository is public.
- No API keys in code.
- No new dependency, unless approved and documented.
- The change is committed.

## Git

- Work on `main`.
- Conventional commits: `feat:`, `fix:`, `docs:`, `chore:`.
- Commit after each working slice, not after a pile of unrelated edits.
- Never commit `.env.local` or any API key.
- No pushes to GitHub after the organizer's deadline.

## Scope control

- Three features, not ten.
- One vertical slice at a time.
- If something is stuck, simplify or revert instead of fighting it.
- No visual polish until the core flow works.
- When in doubt, cut scope. A working demo beats a bigger broken app.
