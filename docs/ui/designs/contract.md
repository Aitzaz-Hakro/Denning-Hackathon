# AI API Contract

Status: draft. Habib provides the OpenAI API key. The Groq key is already in `.env` for speech-to-text. We own the chat UI and the Next.js server routes.

## Architecture

```
Browser -> POST /api/chat (Next.js server) -> OpenAI API
```

The browser never sees `OPENAI_API_KEY`. The Next.js route validates the request, calls OpenAI, and streams the response back.

## Environment

| Variable | Where | Secret |
| --- | --- | --- |
| `OPENAI_API_KEY` | server only | Yes |
| `OPENAI_MODEL` | server only | No |
| `GROQ_API_KEY` | server only | Yes |

Never use a `NEXT_PUBLIC_*` variable for any of them. Never commit `.env.local`. Habib confirms which model the OpenAI key can access; the Groq key is limited to `whisper-large-v3`.

## Proposed request

```http
POST /api/chat
Content-Type: application/json
```

```json
{
  "conversationId": "uuid-or-null",
  "messages": [
    { "role": "user", "content": "..." },
    { "role": "assistant", "content": "..." }
  ],
  "stream": true
}
```

Rules:

- Validate roles and content length before calling OpenAI.
- Cap message count (for example 40) and message length (for example 8,000 characters).
- Do not log prompts that contain personal data.
- The server adds the API key; the client never sends it.

## OpenAI call

The server uses the official `openai` package or `fetch`. The model comes from `OPENAI_MODEL`.

```ts
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const stream = await client.chat.completions.create({
  model: process.env.OPENAI_MODEL!,
  messages,
  stream: true,
});
```

If Habib's key is restricted to the Responses API, use that instead. The internal contract below stays the same.

## Speech-to-text (Groq)

Voice input uses Groq's OpenAI-compatible audio endpoint with `whisper-large-v3`.

```http
POST https://api.groq.com/openai/v1/audio/transcriptions
Authorization: Bearer $GROQ_API_KEY
Content-Type: multipart/form-data
```

Fields:

- `file`: the recorded audio blob (webm, ogg, mp4, or wav).
- `model`: `whisper-large-v3`.
- `language`: optional BCP-47 code.
- `response_format`: `json`.

Response:

```json
{ "text": "..." }
```

Our app route:

```http
POST /api/transcribe
Content-Type: multipart/form-data
```

The browser sends the audio blob; the Next.js route validates size and type, calls Groq with `GROQ_API_KEY`, and returns `{ text }`. The audio is not stored.

Rules:

- Max clip length: about 60 seconds for the demo.
- Reject oversized files with a clear message; do not upload them to Groq.
- Do not log audio or transcripts that contain personal data.
- `GROQ_API_KEY` is server-only, never `NEXT_PUBLIC_*`.
- The model is fixed to `whisper-large-v3` for this event.
- If Groq returns 429, show a rate-limit message and keep the text composer usable.

| Status | Code | UI treatment |
| --- | --- | --- |
| 400 | `invalid_audio` | "That recording could not be read. Try again." |
| 401 | `unauthorized` | "Speech-to-text is not configured." |
| 413 | `too_large` | "That clip is too long. Keep it under 60 seconds." |
| 429 | `rate_limit` | "Too many requests. Try again shortly." |
| 500 / 502 | `provider_error` | "Transcription failed. Try again." |

## Response: streaming

`text/event-stream` is preferred. If the OpenAI client returns raw chunks, frame them on the Next.js server as SSE.

```text
event: token
data: {"delta":"Hello"}

event: token
data: {"delta":" there"}

event: done
data: {"messageId":"msg_123","finishReason":"stop"}
```

- `token`: append `delta` to the assistant message.
- `done`: mark the message complete and enable actions.
- Unknown events: ignore them; never crash the UI.
- If the stream closes without `done`, treat it as a stopped response and keep the partial text.

## Response: non-streaming

```json
{
  "message": {
    "id": "msg_123",
    "role": "assistant",
    "content": "..."
  },
  "usage": {
    "inputTokens": 0,
    "outputTokens": 0
  }
}
```

## Errors

| Status | Code | UI treatment |
| --- | --- | --- |
| 400 | `invalid_request` | Explain what is wrong; keep the draft |
| 401 | `unauthorized` | "The OpenAI key is missing or invalid." |
| 429 | `rate_limit` | "Too many requests. Try again shortly." |
| 500 / 502 | `provider_error` | "OpenAI did not respond. Retry." |
| timeout | `timeout` | "That took too long. Retry." |

Error body:

```json
{
  "error": {
    "code": "rate_limit",
    "message": "Try again in a few seconds."
  }
}
```

## UI state mapping

| Event | UI state |
| --- | --- |
| Request sent | `streaming`, Stop button visible |
| `token` | Append text, keep Stop visible |
| `done` | `complete`, actions enabled |
| Stop pressed | `stopped`, keep partial text |
| Error | `error` with Retry |
| 429 | Rate-limit notice with Retry |
| Timeout | Error with Retry |

## Mock mode

`MOCK_AI=1` on the server, or `?mock=1` in development only, returns a deterministic token stream with short delays. The UI must work entirely against this before the real key is wired. Never enable mock mode in production.

## What we need

From Habib:

- The OpenAI API key.
- The model name the key can access.
- The remaining quota and any rate limit.
- Whether the key is personal or project-scoped.

From Groq:

- Confirm `whisper-large-v3` is enabled on the key.
- Confirm the free-tier rate limits.

## Security

- `OPENAI_API_KEY` is server-only. Never expose it through `NEXT_PUBLIC_*`.
- Validate and cap input before spending tokens.
- Sanitize markdown; never inject raw HTML.
- Add a per-session limit if the API is public.
- Do not log secrets or full personal conversations.

## Acceptance tests

- [ ] Mock stream renders progressively.
- [ ] Stop aborts the request and keeps partial text.
- [ ] An error shows Retry without losing the draft.
- [ ] A 429 shows the rate-limit message.
- [ ] A very long message is capped with an explanation.
- [ ] Markdown and code blocks render safely.
- [ ] Mobile keyboard and scroll work at 390px.
- [ ] `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.
- [ ] The design inspector reports 0 FAIL on the chat surfaces.

## Open questions

- Which model should `OPENAI_MODEL` point to?
- Does the key use the Chat Completions API or the Responses API?
- What is the maximum context and the per-user rate limit?
