import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Sparkles,
  Check,
} from "lucide-react";

export default function GeneratingPlan() {
  const navigate = useNavigate();

  const [generationStep, setGenerationStep] =
    useState(0);

  const generationTasks = [
    "Analyzing your lifestyle",
    "Calculating calorie targets",
    "Building nutrition profile",
    "Generating recommendations",
    "Finalizing success plan",
  ];

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      setGenerationStep(current);

      if (
        current >= generationTasks.length
      ) {
        clearInterval(interval);

        setTimeout(() => {
          navigate(
            "/onboarding/success-plan"
          );
        }, 800);
      }
    }, 900);

    return () =>
      clearInterval(interval);
  }, [navigate]);

  const progress =
    (generationStep /
      generationTasks.length) *
    100;

  return (
    <main className="min-h-screen bg-background">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-5 py-6 sm:px-6">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-12 w-12 animate-pulse text-primary" />
          </div>

          <h1 className="text-3xl font-bold">
            Creating your plan
          </h1>

          <p className="mt-3 text-muted-foreground">
            Building personalized nutrition
            recommendations for you.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {generationTasks.map(
            (task, index) => (
              <div
                key={task}
                className="flex items-center gap-3"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    generationStep >
                    index
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {generationStep >
                  index ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    index + 1
                  )}
                </div>

                <span>{task}</span>
              </div>
            )
          )}
        </div>

        <div className="mt-10">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span>
              Preparing Your Plan
            </span>

            <span>
              {Math.round(progress)}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}