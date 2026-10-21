# Workflow

## Day-of sequence

### 1. Scope lock

- Fill in `docs/HACKATHON-BRIEF.md`.
- Pick at most three MVP features.
- Write the demo path: the exact clicks the judges will see.

Exit: the brief has a problem statement, three features, non-goals, and a demo script.

### 2. Schema first

- Add only the tables those features need.
- Write the migration with RLS and policies in the same file.
- Apply it and regenerate types.

Exit: every table has RLS, every policy is tested with two accounts, and types are generated.

### 3. Auth vertical slice

- Signup, login, logout, and one protected page.

Exit: a new account can sign up, land on the protected page, log out, and log back in.

### 4. Feature slices

Build one feature end-to-end before starting the next:

1. Database table + RLS
2. Server Action or query
3. UI with loading, error, and empty states
4. Manual test with two accounts

Exit: the feature works in the browser and the build passes.

### 5. Polish and deploy

- Fix mobile layout.
- Add empty states and seed data.
- Deploy to Vercel.

Exit: the deployed URL works with production env vars.

### 6. Demo prep

- Rehearse the demo path.
- Create two accounts with realistic data.
- Take screenshots or a short screen recording as a fallback.

Exit: the demo can run without live coding.

## AI collaboration protocol

Before editing code, an AI agent must read:

1. `docs/FOUNDATION.md`
2. `docs/ARCHITECTURE.md`
3. `docs/DATABASE.md`
4. `docs/HACKATHON-BRIEF.md`

Rules:

- Plan before touching more than one file.
- No new dependencies without approval and a FOUNDATION update.
- No stack substitutions.
- Never rewrite auth, `src/proxy.ts`, or an applied migration without asking.
- Never disable RLS or use the service-role key to make something work.
- Keep diffs small and related to the task.
- Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` after changes.

If a request conflicts with a locked decision, stop and ask. Do not silently comply and do not silently substitute.

## Definition of Done

- Works in the browser, not just in theory.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.
- RLS checked with two accounts.
- Loading, error, and empty states exist.
- Mobile layout checked.
- No new dependency, unless approved and documented.
- The change is committed.

## Git

- Work on `main`.
- Conventional commits: `feat:`, `fix:`, `docs:`, `chore:`.
- Commit after each working slice, not after a pile of unrelated edits.
- Never commit `.env.local`.

## Scope control

- Three features, not ten.
- One vertical slice at a time.
- If something is stuck, simplify or revert instead of fighting it.
- No visual polish until the core flow works.
- When in doubt, cut scope. A working demo beats a bigger broken app.
