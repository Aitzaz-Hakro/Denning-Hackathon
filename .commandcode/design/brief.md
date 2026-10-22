# Design Brief

## Register

Product app with a small brand surface. The authenticated app is the instrument; the landing and auth screens introduce it.

## Event context

- 5-hour hackathon, Friday 23 October 2026.
- Product and problem are unknown until the day.
- Must use AI, deploy publicly, and demo live.
- Judges see a short demo, not a long exploration.

## Users

- Primary user: defined in `docs/HACKATHON-BRIEF.md` on the day.
- State: first-time user under time pressure; judges evaluating clarity and craft.
- They need to understand the product in seconds and complete one core flow.

## Purpose

Turn the revealed problem into one clear, fast, AI-assisted flow that feels considered rather than generated.

## Voice

Confident, clear, human. Concrete nouns and verbs. No hype, no exclamation points, no filler.

## Anti-references

- Generic AI SaaS: purple or indigo gradients, glassmorphism, stock hero cards, generic dashboard chrome.
- Enterprise dashboard: gray tables, cramped density, no point of view.
- Decorative animation that delays the task.
- Card grids and centered heroes used as a default rather than a response to the work.

## Design principles

1. Clarity before decoration. The first viewport states what this is and what to do.
2. One distinctive idea. A single type, color, or composition decision carries the identity; everything else stays quiet.
3. The product is the proof. Show real data and the actual artifact, not abstract marketing blocks.
4. Complete states. Loading, empty, error, disabled, success, and overflow are designed, not left to chance.
5. Accessibility is the floor. Keyboard path, focus, labels, contrast, 44px targets, and 200% zoom.
6. Motion earns its place. Short, functional, and reduced-motion safe.
7. Mobile is a composition, not a squeezed desktop.

## Visual foundation

Provisional direction: **The printed annual** (taste skill `editorial-report`, seed 474754287). Chosen because it avoids both anti-references and gives the starter an editorial, print-inspired identity.

- Type: Erode for display and page headings; Geist for app UI. Erode loads from Fontshare.
- Palette: soot `#0f0f0f`, paper `#ffffff`, warm paper `#f5f5f5`, ink `#0f0f0f`, muted `#5f5f5a`, line `#deddd6`, lime `#dafa9c`.
- Accent: lime only on the primary action and at most one headline word.
- Shape: square corners, 1px line borders, no shadows at rest.
- Composition: 42% soot panel on the auth screen; a quiet light app canvas with a soot top bar and a lime square mark.
- Motion: none on the auth surface; a form should not animate. App screens use feedback only. If we build a landing page later, use the masked line reveal.
- Rejected: the UI/UX Pro Max "AI-Native UI" palette (`#7C3AED` / `#A78BFA`) because it is the generic AI SaaS look we banned.

Pending: user reference images may replace this direction. Adapt the palette and composition when they arrive; keep the accessibility and state rules.

## Component rules

- Every interactive component: default, hover, focus-visible, active, disabled, loading.
- Forms: visible labels, inline errors, no placeholder-only labels.
- Same action, same wording, same look across screens.
- Focus ring: 2px, offset, at least 3:1 contrast.
- Touch targets: at least 44x44px.
- Empty states say what belongs here and the next action.

## Accessibility expectations

WCAG 2.1 AA. Keyboard-complete core flow. Visible focus. No color-only state. Responsive at 320, 375, 768, 1024, and 1440px. `prefers-reduced-motion` respected.

## Verification

- `design-taste-frontend` inspector: 0 FAIL on `/login` and `/auth/auth-code-error` at 1440, 768, and 390.
- ESLint: 0 failures. TypeScript and the production build pass.
- Accepted warnings:
  - `unused-canvas`: the auth form is a capped 448px column centered in the right panel.
  - `panel-void`: the left soot panel is the direction's deliberate void.
  - `app-title-size`: the 56px h1 is a brand-surface statement, not an app screen title.
- The dashboard requires a signed-in session, so it is not in the screenshot pass yet.

## Installed skills

- `design-taste-frontend` in `.agents/skills` and `.commandcode/skills`.
- `ui-ux-pro-max` in `.agents/skills` and `.commandcode/skills`.

## Open decisions

- Visual direction: provisional, waiting on reference images.
- Primary product flow and artifact: set in the hackathon brief on the day.
