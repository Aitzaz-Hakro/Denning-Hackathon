import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "./actions";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;

  if (!claims) {
    redirect("/login");
  }

  const email =
    typeof claims.email === "string" ? claims.email : "your account";
  const userId = typeof claims.sub === "string" ? claims.sub : "";

  return (
    <div className="flex min-h-screen flex-col bg-paper-muted">
      <header className="bg-soot text-paper">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 bg-lime" />
            <span className="font-display text-lg tracking-tight">
              Denning Hackathon
            </span>
          </div>
          <form action={signOut}>
            <button
              type="submit"
              className="text-sm text-paper/70 transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
        <p className="text-sm text-muted">Workspace</p>
        <h1 className="mt-2 font-display text-3xl tracking-[-0.02em] text-ink">
          Dashboard
        </h1>
        <p className="mt-3 max-w-xl text-base leading-7 text-muted">
          Signed in as {email}.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <section className="border border-line bg-paper p-6">
            <h2 className="font-display text-2xl tracking-[-0.01em] text-ink">
              Start building
            </h2>
            <p className="mt-2 max-w-prose text-base leading-7 text-muted">
              This page is protected. Replace this panel with the first feature
              of the project.
            </p>
          </section>

          <section className="border border-line bg-paper p-6">
            <h2 className="text-sm font-medium text-ink">Account</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-start justify-between gap-6 border-b border-line pb-3">
                <dt className="text-muted">Email</dt>
                <dd className="max-w-[24ch] truncate text-right text-ink">
                  {email}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-6">
                <dt className="text-muted">User ID</dt>
                <dd
                  className="max-w-[18ch] truncate text-right font-mono text-xs text-ink"
                  title={userId}
                >
                  {userId || "Not available"}
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </main>
    </div>
  );
}
