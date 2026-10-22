import { redirect } from "next/navigation";
import { AuthForm } from "@/components/auth-form";
import { createClient } from "@/lib/supabase/server";

export default async function LoginPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  if (data?.claims) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      <section className="flex min-h-[48vh] flex-col bg-soot px-6 py-8 text-paper lg:min-h-screen lg:w-[42%] lg:px-12 lg:py-10">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 bg-lime" />
            <span className="font-display text-lg tracking-tight">
              Denning Hackathon
            </span>
          </div>
          <span className="text-sm text-paper/55">23 Oct 2026</span>
        </div>

        <div className="mt-auto pt-24 lg:max-w-lg lg:pt-32">
          <h1 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.035em] text-paper">
            Five hours. One working{" "}
            <span className="text-lime">demo.</span>
          </h1>
          <p className="mt-6 max-w-[32ch] text-lg leading-7 text-paper/65">
            Sign in to the Denning Hackathon workspace and start building.
          </p>
        </div>

        <p className="mt-12 text-sm text-paper/50">
          DITE, Hyderabad. A five-hour sprint for AI-powered web apps.
        </p>
      </section>

      <section className="flex flex-1 items-center justify-center bg-paper px-6 py-14 lg:px-12">
        <div className="w-full max-w-md">
          <AuthForm />
        </div>
      </section>
    </main>
  );
}
