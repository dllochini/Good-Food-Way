import { ArrowLeft, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AuthLayout({
  title,
  subtitle,
  children,
  footer,
  showBack = true,
}) {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate("/landingpage")}
            className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.16em] text-primary"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            GOOD FOOD WAY
          </button>

          {showBack ? (
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          ) : null}
        </div>

        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="hidden space-y-6 lg:block">
            <div className="max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Eat balanced . Live well
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight">
                Simple nutrition support for real daily routines.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Build a meal and fitness plan around your body, goals,
                preferences, and pace.
              </p>
            </div>

            <div className="grid max-w-lg grid-cols-2 gap-3">
              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <p className="text-xs text-muted-foreground">Meals</p>
                <p className="mt-1 font-semibold">Balanced plans</p>
              </div>
              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <p className="text-xs text-muted-foreground">Fitness</p>
                <p className="mt-1 font-semibold">Daily activity</p>
              </div>
              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <p className="text-xs text-muted-foreground">Goals</p>
                <p className="mt-1 font-semibold">Healthy habits</p>
              </div>
              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <p className="text-xs text-muted-foreground">Progress</p>
                <p className="mt-1 font-semibold">Clear insights</p>
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-md lg:justify-self-end">
            <div className="mb-6">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                {title}
              </h1>
              {subtitle ? (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {subtitle}
                </p>
              ) : null}
            </div>

            <div className="rounded-lg border bg-card p-5 shadow-[var(--shadow-soft)] sm:p-6">
              {children}
              {footer ? <div className="mt-5">{footer}</div> : null}
            </div>
          </section>
        </div>

        <p className="py-5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Eat balanced . Live well
        </p>
      </div>
    </main>
  );
}
