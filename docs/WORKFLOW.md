# Workflow

This is the starting point for every new session and every new project description.
Read it before touching code. If a step is skipped, say so and why.

## New-session intake

When a project description arrives:

1. Read the description, `docs/FOUNDATION.md`, `AGENTS.md`, and `docs/SUBMISSION.md`.
2. If the description is thin, do not guess. Propose two or three solution directions
   with one clear recommendation, then fill `docs/HACKATHON-BRIEF.md` as a **Draft**:
   problem, users, one core job, at most three MVP features, AI use, demo path,
   non-goals, risks, cut line, and open questions. Ask for sign-off.
3. If the description is detailed, still fill the brief to lock scope and get sign-off.
4. Read the rest of the docs: `ARCHITECTURE.md`, `DATABASE.md`, `AUTH-SETUP.md`,
   `.commandcode/design/brief.md`, and the relevant files in `docs/ui/designs/`.
5. Produce a scope table (Must / Should / Could / Won't) and a cut line.
   Three features maximum, one core flow.
6. Offer two to four integration options, ranked by demo value vs setup risk.
   Only one is built for the demo; the rest are roadmap. Every integration needs
   a mock or fallback so the demo still works offline.
7. Write the technical plan: routes, tables, data flow, auth, loading/error/empty
   states, seed data, demo account, AI fallback, and deployment. Get approval
   before building.
8. Build in vertical slices, deploy a working skeleton early, and verify each slice.
9. Run the verification gate.
10. Create the demo-video script prompt, record the demo, complete the README, and
    finish the submission checklist.

**Rule:** no code until the brief and scope are signed off. A fast wrong build is
more expensive than a short intake.

## Before the event

Work through the checklist in `docs/SUBMISSION.md`:

- GitHub account for every member, Vercel account, Google Drive space.
- OpenAI API key with the free quota checked.
- Git, VS Code, Node.js, and project dependencies installed.
- One practice run: a tiny AI app deployed, pushed, and recorded.
- Roles agreed: AI lead, app lead, ship lead.
- Repository confirmed public.

## Day-of sequence

### 1. Intake and scope lock

- Fill in `docs/HACKATHON-BRIEF.md`; mark it **Draft** until the team confirms it.
- Name the primary user and the one job they hire the product to do.
- Pick at most three MVP features.
- Write the demo path: the exact clicks the judges will see.
- Write the non-goals and the cut line before building.
- List candidate integrations and mark exactly one as **core** for the demo.
  Everything else goes under **Future plan**.

Exit: the brief has a problem statement, one core flow, three features, AI use,
non-goals, a demo path, integration choices, and a cut line. The team has signed off.

### 2. Schema first

- Add only the tables those features need.
- Write a date-stamped migration with RLS and policies in the same file.
- Push it to Supabase and regenerate types.

Exit: every table has RLS, every policy is tested with two accounts, and types are generated.

### 3. Auth vertical slice

- Email/password and Google signup, login, logout, and one protected page.
- Follow `docs/AUTH-SETUP.md` for the Google redirect settings.

Exit: a new account can sign up with either method, land on the protected page,
log out, and log back in.

### 4. AI vertical slice

- One Route Handler or Server Action calls OpenAI.
- Read the key from `OPENAI_API_KEY`; it works locally.
- Add one visible UI that shows the AI result.
- Handle loading, timeout, provider errors, and the mock/fallback path.

Exit: a real prompt returns a real answer in the browser, and the mock mode works.

### 5. Feature slices

Build one feature end-to-end before starting the next:

1. Database table + RLS
2. Server Action or query
3. UI with loading, error, and empty states
4. Manual test with two accounts

Exit: the feature works in the browser and the build passes.

### 6. Polish, deploy, and verify

- Fix mobile layout.
- Add empty states and seed data.
- Deploy to Vercel with production env vars.
- Rehearse the demo path and create two accounts with realistic data.
- Run the verification gate below.
- Test on the actual demo laptop, not only the development machine.

Exit: the live URL works in an incognito window, and the demo path runs end to end.

### 7. Video, README, and submit

- Write the demo-video prompt (see below), record the 3–5 minute walkthrough, upload
  it to Google Drive, and set "Anyone with the link".
- Rewrite the README as the judge-facing introduction and guide.
- Fill the submission form and keep the confirmation.

Exit: the live URL and video link work in incognito, the README is complete, and the
form is submitted.

### 8. Freeze

- No pushes after the organizer's deadline.
- Keep the submission confirmation.

## Conflict and scope protocol

When something conflicts with the locked stack, the brief, or the plan:

1. Stop. Do not silently choose.
2. State the conflict in one sentence.
3. Give two or three options.
4. Recommend one option and explain the tradeoff.
5. Ask for a decision, then record it in the **Decisions log** in
   `docs/HACKATHON-BRIEF.md`.

If the description contains something outside the agreed scope:

- Flag it explicitly.
- Recommend **include**, **defer**, or **cut**.
- Default to defer; add it to the brief's **Non-goals** or the README roadmap.
- Never build extra scope silently.

## Integration policy

Give options, not a wish list. For each integration show:

| Field | What to state |
| --- | --- |
| Name | The product or platform |
| User value | What it lets the primary user do |
| Demo value | What the judges would see in 20 seconds |
| Setup risk | OAuth review, paid tier, API limits, data access |
| Auth needed | None, API key, or OAuth |
| Recommendation | Core demo or future plan |

Rules:

- At most one integration is built for the live demo.
- Prefer free tiers, no approval queues, and read-only access.
- Every integration needs a mock or fixture fallback.
- Put the rest in the README roadmap as future plans.

## Verification gate

Run this before calling any feature or the project done:

- [ ] `npm run lint`
- [ ] `npx tsc --noEmit`
- [ ] `npm run build`
- [ ] Responsive at 320, 390, 768, 1024, and 1440px.
- [ ] No horizontal overflow, clipped focus rings, or hidden content.
- [ ] Keyboard path works; focus is visible; labels are present.
- [ ] `prefers-reduced-motion` keeps all content visible.
- [ ] Loading, empty, error, and success states exist.
- [ ] AI and integration fallback works with the provider disabled.
- [ ] The deployed URL works in an incognito window.
- [ ] The seed data and demo account produce a complete demo path.
- [ ] No API keys, service-role keys, or `.env.local` in the repo.
- [ ] README, live URL, and demo video are complete.

## README structure

The README is an introduction, a setup guide, and the judge's first look. Keep it
scannable and interactive.

Recommended order:

1. Title, one-line description, live URL, demo video, team.
2. "What it does" — the problem and the one core flow.
3. "Demo in 60 seconds" — the exact path a judge should try.
4. 2–4 screenshots or one short GIF of the real app.
5. Features (the three MVP features only).
6. AI usage — provider, model, what it does, and the fallback.
7. Stack and architecture — short, with the folder map.
8. Setup — install, env vars, Supabase, OAuth.
9. Roadmap — the integrations and features that were deliberately deferred.
10. Docs links and submission checklist.

"Interactive" means easy to scan: badges, a table of contents, collapsible
`<details>` sections, working links, and real screenshots. Not gimmicks.

## Demo video prompt

The video prompt should produce a **screen-recorded walkthrough**, not an invented
UI. Do not generate fake product footage for the required demo video.

The prompt must include:

- Project name, problem, primary user, and the one core flow.
- Live URL and test account credentials.
- The exact 3–5 minute demo path, click by click.
- The AI moment and what it proves.
- The stack, stated briefly.
- A hard rule: only show features that actually work and are deployed.
- A shot list with approximate timestamps.
- Voiceover script and on-screen captions.
- Recording notes: 1440p or 1080p, clean browser, no dev tools, no console errors,
  readable zoom, and a final incognito check.

If an AI-generated teaser is wanted separately, write a second prompt for that.
It is promotional and never replaces the real screen recording.

## Prototype routes

`/inspiration1`, `/inspiration2`, and `/inspiration3` are disposable design studies.
Do not import their components into the real product. Reuse the ideas, not the files.

## AI collaboration protocol

Before editing code, an AI agent must read:

1. `docs/FOUNDATION.md`
2. `docs/ARCHITECTURE.md`
3. `docs/DATABASE.md`
4. `docs/AUTH-SETUP.md` when touching auth
5. `docs/HACKATHON-BRIEF.md`
6. `docs/ui/designs/` and `.commandcode/design/brief.md` for UI work

Rules:

- Plan before touching more than one file.
- No new dependencies without approval and a FOUNDATION update.
- No stack substitutions.
- Never rewrite auth, `src/proxy.ts`, or an applied migration without asking.
- Never disable RLS or use the service-role key to make something work.
- Never call OpenAI from client code or expose `OPENAI_API_KEY`.
- Keep diffs small and related to the task.
- Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` after changes.
- Do not push to the remote unless the user explicitly asks.

If a request conflicts with a locked decision, stop and ask. Do not silently comply
and do not silently substitute.

## Definition of Done

- Works in the browser, not just in theory.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.
- RLS checked with two accounts.
- Every schema change has a date-stamped migration, and it is applied to Supabase.
- Loading, error, and empty states exist.
- Mobile layout checked at 320, 390, 768, 1024, and 1440px.
- The AI feature works from the deployed URL, with a visible fallback.
- The live URL works in an incognito window.
- The demo account and seed data are ready.
- The README has the title, description, live link, and demo video.
- The demo video is 3–5 minutes and shared with "Anyone with the link".
- The repository is public.
- No API keys in code.
- No new dependency, unless approved and documented.
- The change is committed in a logical slice.

## Git

- Work on `main`.
- Conventional commits: `feat:`, `fix:`, `docs:`, `chore:`.
- Commit after each working slice, not after a pile of unrelated edits.
- Never commit `.env.local` or any API key.
- Push only when the user explicitly says so.
- No pushes to GitHub after the organizer's deadline.

## Scope control

- Three features, not ten.
- One vertical slice at a time.
- If something is stuck, simplify or revert instead of fighting it.
- No visual polish until the core flow works.
- When in doubt, cut scope. A working demo beats a bigger broken app.
