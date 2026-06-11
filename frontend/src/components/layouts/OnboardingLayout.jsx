import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OnboardingLayout({
  step = 1,
  totalSteps = 4,
  total,
  title,
  subtitle,
  children,
  hideProgress = false,
}) {
  const navigate = useNavigate();
  const resolvedTotal = total ?? totalSteps;
  const progress = Math.round((step / resolvedTotal) * 100);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto min-h-screen max-w-5xl px-4 py-5 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          {!hideProgress ? (
            <div className="text-sm text-muted-foreground">
              Step {step} of {resolvedTotal}
            </div>
          ) : null}
        </div>

        {!hideProgress ? (
          <div className="mb-6">
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          </div>
        ) : null}

        <div className="mx-auto max-w-3xl space-y-6">
          <div>
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
          </div>
        </div>
      </div>
    </main>
  );
}
