# Chat UI

Status: preparation. Chat is **not** confirmed as the primary interface. Build this when the problem fits a conversational flow; otherwise use AI inside the product screen.

## The principle

The conversation is the control surface. The artifact is the proof. Do not build a ChatGPT clone with our colors.

## Layout

Desktop (1024px and up):

```
+--------------------------------------------------------------------------+
| wordmark   model status                          New chat   History       |
+----------------+---------------------------------------+-----------------+
| history rail   | thread (max 720px)                    | artifact pane   |
| 240-260px      | messages                              | live result     |
|                |                                       | 360-420px       |
|                | composer                              |                 |
+----------------+---------------------------------------+-----------------+
```

- **History rail:** collapsible, quiet, 240-260px. New chat, conversation list, account at the bottom.
- **Thread:** centered column, max 720px, 16-24px gutters. User messages compact; assistant messages full width. Do not put every message in a bubble.
- **Artifact pane:** 360-420px, separated by a 1px line. Title, version, copy/download, and the live result. The result is the product's object: a document, plan, table, code, map, or record.
- **Tablet:** history becomes a drawer; the artifact becomes a tab.
- **Mobile:** thread full-screen; header with menu and artifact tab; composer pinned above the keyboard; artifact opens as a full-screen sheet.

## Visual system

Follow `.commandcode/design/brief.md`: Erode for display, Geist for UI, soot/paper/lime, square forms, 1px lines, no shadows at rest, no gradients, glass, or purple.

- Page: `--paper-muted`; thread on `--paper`.
- Assistant text: `--ink`; secondary: `--muted`.
- Accent: lime only on the send button and one active state.
- Controls: square, 44px tall, visible focus ring.
- Code: mono, 13-14px, bordered block, copy button.
- Citations: small superscript numbers with a source list under the message. Never invent sources.

## Components and states

### Header

- Wordmark, model status (Ready, Thinking, Offline), New chat, History toggle.
- States: default, streaming, error, offline.

### History rail

- New chat button; conversation list with title and relative time; active neutral fill.
- Empty: "No conversations yet" plus New chat.
- Overflow: scroll inside the rail, not the page.
- Mobile: drawer with focus trap, Esc closes, focus returns to the trigger.

### Thread

- Empty state: one sentence plus three prompts written for the actual problem. No generic "How can I help you today?".
- User messages: compact, labeled, editable only if the feature exists.
- Assistant messages: full width, markdown, code blocks, tables, citations.
- Streaming: append tokens; show a real Stop button; do not rely on three typing dots as the only state.
- Message actions: copy, regenerate, and feedback only if it is wired. Do not show dead buttons.
- Long content: code and tables scroll inside their own frame; the page never scrolls sideways.
- Error: inline under the last message, keep the partial answer, offer Retry.
- Scroll: follow new tokens only when the user is already at the bottom; otherwise show "Jump to latest".

### Composer

- Auto-growing textarea, 1-6 lines, placeholder tied to the problem.
- Send button (lime) disabled when empty or streaming; Stop button while streaming.
- Enter sends; Shift+Enter adds a newline; Esc stops or closes a sheet.
- Attachments only if the API supports them. Do not show an icon that does nothing.
- Character count only near the limit; explain the limit in words.
- Mobile: bottom safe-area padding; keyboard avoidance; 44px targets.
- Focus returns to the composer after sending.

### Voice input

Voice is an optional input mode, not a separate page. Keep the text composer available.

- Mic button in the composer, 44px, labeled "Start voice input".
- Click to start and stop; on mobile, hold-to-talk is also acceptable.
- While recording: show elapsed time and a real level meter; provide Stop and Cancel.
- After stopping: show "Transcribing" with a cancel action; keep Send disabled until the transcript arrives.
- The transcript is inserted into the composer as editable text. Never auto-send it.
- Errors: permission denied, no microphone, no speech detected, clip too long, provider error, rate limit. Each needs a specific message and a retry path.
- Limit clips to about 60 seconds for the demo and explain the limit before recording.
- Privacy: say that audio is sent to Groq for transcription and is not stored by the app. Do not record in the background.
- The text composer always works; voice is never the only input.
- Mobile: request permission on first use, keep the composer above the keyboard, respect safe areas.
- States: idle, requesting permission, recording, transcribing, error, disabled while the assistant is streaming, success.
- Do not autoplay audio or use a fake waveform.

### Artifact pane

- Header: title, version or status, copy/download.
- Body: the real object, not a picture of a dashboard.
- Empty: "The result will appear here" plus one example.
- Loading: skeleton at the final size, no layout shift.
- Updating: a quiet "Updating" label; preserve scroll.
- Error: message plus Retry inside the pane.
- Mobile: full-screen sheet or tab; closing returns to the thread.

### New chat and history

- New chat clears the thread and artifact. Confirm only if there is unsaved work.
- Conversation titles come from the first user message, truncated to about 40 characters.
- History can be capped for the event; do not build pagination for a five-hour demo.

## State checklist

For every interactive surface: default, hover, focus-visible, active, disabled, loading, empty, error, overflow. A component that only works with full data is half built.

## Accessibility

- Stream announcements through a live region, throttled to about once per second, not per token.
- `aria-busy` on the thread while streaming; the Stop button has an accessible name.
- Visible focus ring, 2px, offset, at least 3:1 contrast.
- 44x44px targets; labels above fields; no placeholder-only labels.
- Keyboard path: Tab to the composer, Enter send, Shift+Enter newline, Esc stop or close.
- Reduced motion: no typing animation; respect `prefers-reduced-motion`.
- No color-only state; pair color with text or an icon.

## Performance

- Stream with `ReadableStream`; batch token updates, do not re-render the whole thread per character.
- Memoize message rows; cap visible history or virtualize if the thread grows.
- Do not re-render the artifact on every token; update it on a short interval or on `done`.
- Abort the request on Stop or unmount with `AbortController`.
- Sanitize markdown; never inject raw HTML.

## Copy rules

- Sentence case, no exclamation points, no magic language.
- Empty: "Ask for the first draft." Prompts must name the product's real tasks.
- Loading: name the work: "Thinking", "Writing the draft", "Checking the result".
- Errors: say what failed and what to do: "The model did not respond. Try again."
- No fake progress, no invented sources, no vanity metrics.

## Anti-patterns

- A ChatGPT clone: centered gray bubbles and a generic empty state.
- Gradients, glass, purple, sparkle icons, emoji as controls.
- Typing dots with no Stop button.
- Auto-scroll that fights the reader.
- Full-page spinners; disabled send buttons with no explanation.
- Icon-only controls without names; placeholder-only labels.
- Unbounded markdown or raw HTML.

## Day-of checklist

- [ ] The problem actually fits a conversational surface.
- [ ] The artifact pane is defined and useful.
- [ ] Empty-state prompts are written from the brief.
- [ ] The mock stream works end to end.
- [ ] The real API is wired and tested.
- [ ] Every state above is tested at 390, 768, and 1440px.
- [ ] Keyboard and screen reader paths work.
- [ ] `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.
- [ ] The design inspector reports 0 FAIL.
- [ ] Voice input permission and transcript tested on the demo laptop.
- [ ] Voice can be disabled without breaking the chat.
- [ ] The demo path is rehearsed.

## Open decisions

- Chat as the primary interface or a fallback.
- Artifact type for the chosen problem.
- Conversation memory: client-only or server-side.
- Attachments and voice: only if the API supports them.
