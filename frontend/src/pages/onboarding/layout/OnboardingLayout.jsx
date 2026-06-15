import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OnboardingLayout({
  step,
  totalSteps = 8,
  title,
  subtitle,
  children,
  showBack = true,
}) {
  const navigate = useNavigate();

  const progress =
    ((step - 1) / totalSteps) * 100;

  return (
    <main className="min-h-screen bg-background">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto min-h-screen max-w-md px-5 py-6 sm:px-6">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className="mb-5 flex items-center gap-2 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        )}

        <div className="mb-6">
          <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Step {step} of {totalSteps}
            </span>

            <span>
              {Math.round(progress)}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl font-bold leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-2 text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>
    </main>
  );
}