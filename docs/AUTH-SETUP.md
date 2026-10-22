# Google OAuth Setup

We use Supabase Auth with Google. There are two different redirect settings, and mixing them up is the usual cause of `redirect_uri_mismatch`.

## The short answer

In **Google Cloud Console → Authorized redirect URIs**, add:

```
https://wtogbxesdwwqymodtszu.supabase.co/auth/v1/callback
```

Do not put `http://localhost:3000/...` there. Google redirects to Supabase, then Supabase redirects to your app.

## Google Cloud Console

1. Go to the [Google Auth Platform clients page](https://console.cloud.google.com/auth/clients).
2. Create an OAuth client ID and choose **Web application**.
3. Under **Authorized JavaScript origins**, add:
   - `http://localhost:3000`
   - `https://<your-vercel-app>.vercel.app` (add this after the first deploy)
4. Under **Authorized redirect URIs**, add:
   - `https://wtogbxesdwwqymodtszu.supabase.co/auth/v1/callback`
5. Create the client and copy the **Client ID** and **Client Secret**.

If the app is still in testing mode, add every teammate's Google account under **Audience → Test users**.

## Supabase Dashboard

1. Open **Authentication → Providers → Google** and enable the provider.
2. Paste the Client ID and Client Secret from Google.
3. Open **Authentication → URL Configuration**:
   - **Site URL:** `http://localhost:3000` while developing. Change it to the production URL before submitting.
   - **Redirect URLs:**
     - `http://localhost:3000/**`
     - `https://<your-vercel-app>.vercel.app/**`
     - Optional for preview deployments: `https://*-<team-or-account-slug>.vercel.app/**`
4. Save.

## App code

The sign-in button runs in a Client Component:

```ts
await supabase.auth.signInWithOAuth({
  provider: "google",
  options: {
    redirectTo: `${window.location.origin}/auth/callback`,
  },
});
```

The callback route exchanges the code for a session. Create `src/app/auth/callback/route.ts`:

```ts
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const requested = searchParams.get("next") ?? "/";
  const next = requested.startsWith("/") ? requested : "/";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
```

The `redirectTo` URL must match an entry in Supabase's Redirect URLs.

## Email signups

`signUp` sends `emailRedirectTo` to `/auth/confirm`. If **Confirm email** is enabled in Supabase, the user must click the link before signing in. For a faster demo, turn it off under **Authentication → Sign In / Providers → Email**.

## Why this setup is best

- Google only ever talks to Supabase, so your Google Client Secret never goes near the browser.
- One Google redirect URI works for localhost, previews, and production.
- The app chooses where to land with `redirectTo`, which changes per environment.
- Supabase validates the code exchange and writes the session cookies.

## Production checklist

- [ ] Deploy to Vercel.
- [ ] Add the production origin to Google **Authorized JavaScript origins**.
- [ ] Set Supabase **Site URL** to the production URL.
- [ ] Add `https://<your-vercel-app>.vercel.app/**` to Supabase **Redirect URLs**.
- [ ] Sign in with Google in an incognito window.

## Common errors

- `redirect_uri_mismatch`: the Google redirect URI is wrong. It must be exactly the Supabase callback above.
- Login sends you to localhost in production: Supabase **Site URL** still points to localhost.
- `Invalid redirect URL`: the `redirectTo` path is not in Supabase's **Redirect URLs**.
- Login works locally but not on Vercel: the Vercel origin is missing from Google origins or Supabase redirect URLs.
- `localhost` and `127.0.0.1` are different origins. Pick one and stay consistent.
