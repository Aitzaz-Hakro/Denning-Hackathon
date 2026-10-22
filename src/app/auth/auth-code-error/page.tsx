import Link from "next/link";

export default function AuthCodeErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper-muted px-6 py-12">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-2.5 w-2.5 bg-lime" />
          <span className="font-display text-lg tracking-tight text-ink">
            Denning Hackathon
          </span>
        </div>

        <h1 className="mt-12 font-display text-3xl tracking-[-0.02em] text-ink">
          Sign-in link failed
        </h1>
        <p className="mt-3 text-base leading-7 text-muted">
          The link is invalid or has expired. Try signing in again.
        </p>
        <Link
          href="/login"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-none bg-soot px-5 text-sm font-medium text-paper transition-colors hover:bg-soot-raised focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soot"
        >
          Back to sign in
        </Link>
      </div>
    </main>
  );
}
