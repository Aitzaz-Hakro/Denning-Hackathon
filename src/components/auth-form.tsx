"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Mode = "signin" | "signup";

const inputClass =
  "mt-2 h-11 w-full rounded-none border border-line bg-paper px-3 text-base text-ink outline-none transition-colors placeholder:text-muted focus:border-soot focus:ring-1 focus:ring-soot";

const primaryButtonClass =
  "inline-flex h-11 w-full items-center justify-center rounded-none bg-lime px-5 text-sm font-medium text-soot transition-colors hover:bg-lime-strong disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soot";

const secondaryButtonClass =
  "inline-flex h-11 w-full items-center justify-center gap-2 rounded-none border border-line bg-paper px-5 text-sm font-medium text-ink transition-colors hover:bg-paper-muted disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soot";

export function AuthForm() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function handleEmailAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setNotice(null);

    const { data, error } =
      mode === "signin"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email,
            password,
            options: {
              emailRedirectTo: `${window.location.origin}/auth/confirm`,
            },
          });

    if (error) {
      setError(error.message);
      setIsLoading(false);
      return;
    }

    if (mode === "signup" && !data.session) {
      setNotice("Check your email to confirm your account, then sign in.");
      setIsLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  async function handleGoogleSignIn() {
    setIsLoading(true);
    setError(null);
    setNotice(null);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }

  function switchMode(next: Mode) {
    setMode(next);
    setError(null);
    setNotice(null);
  }

  return (
    <div className="w-full">
      <h2 className="font-display text-3xl tracking-[-0.02em] text-ink">
        {mode === "signin" ? "Sign in" : "Create an account"}
      </h2>
      <p className="mt-2 text-base leading-7 text-muted">
        {mode === "signin"
          ? "Use Google or your email to enter the workspace."
          : "Use Google or a new email address."}
      </p>

      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className={`mt-8 ${secondaryButtonClass}`}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
          <path
            fill="#4285F4"
            d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9Z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24Z"
          />
          <path
            fill="#FBBC05"
            d="M5.4 14.4a7.2 7.2 0 0 1 0-4.8V6.5H1.4a12 12 0 0 0 0 11l4-3.1Z"
          />
          <path
            fill="#EA4335"
            d="M12 4.8c1.8 0 3.3.6 4.5 1.8l3.4-3.4A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.4 6.5l4 3.1C6.3 6.9 8.9 4.8 12 4.8Z"
          />
        </svg>
        Continue with Google
      </button>

      <div className="my-6 flex items-center gap-3 text-sm text-muted">
        <span className="h-px flex-1 bg-line" />
        or
        <span className="h-px flex-1 bg-line" />
      </div>

      <form onSubmit={handleEmailAuth} className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-ink"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-ink"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete={
              mode === "signin" ? "current-password" : "new-password"
            }
            minLength={6}
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={primaryButtonClass}
        >
          {isLoading
            ? "Working..."
            : mode === "signin"
              ? "Sign in"
              : "Create account"}
        </button>
      </form>

      {error ? (
        <p role="alert" className="mt-5 text-sm text-negative">
          {error}
        </p>
      ) : null}

      {notice ? (
        <p role="status" className="mt-5 text-sm text-muted">
          {notice}
        </p>
      ) : null}

      <p className="mt-6 text-sm text-muted">
        {mode === "signin" ? "New here?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => switchMode(mode === "signin" ? "signup" : "signin")}
          className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soot"
        >
          {mode === "signin" ? "Create an account" : "Sign in"}
        </button>
      </p>
    </div>
  );
}
