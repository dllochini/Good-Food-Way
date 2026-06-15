import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OnboardingLayout({
  step = 1,
  total = 6,
  title,
  subtitle,
  children,
  hideProgress = false,
}) {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-neutral-200 flex justify-center">
      <div className="w-full max-w-md min-h-screen bg-background border-x border-border shadow-xl">
        <div className="flex min-h-screen flex-col px-5 py-5">

          {/* Header */}

          <div className="mb-6 flex items-center justify-between">

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border bg-card transition-colors hover:bg-muted"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            {!hideProgress && (
              <div className="flex items-center gap-1.5">
                {Array.from({ length: total }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${index < step
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted"
                      }`}
                  />
                ))}
              </div>
            )}

            <div className="w-10" />
          </div>

          {/* Coach Header */}

          {(title || subtitle) && (
            <div className="mb-8">

              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>

              <p className="text-sm font-medium text-primary">
                Good Food Way Coach
              </p>

              {title && (
                <h1 className="mt-2 text-3xl font-bold leading-tight">
                  {title}
                </h1>
              )}

              {subtitle && (
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Main Content */}

          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
