import { ArrowRight, Leaf, LogIn, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import heroImage from "@/assets/healthy-food.webp";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between">
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

          <Button variant="ghost" onClick={() => navigate("/login")}>
            <LogIn className="h-4 w-4" />
            Sign In
          </Button>
        </header>

        <section className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-12">
          <div className="mx-auto w-full max-w-md text-center lg:mx-0 lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
              <Sparkles className="h-4 w-4" />
              One step at a time
            </div>

            <h1 className="text-4xl font-black leading-[1.05] tracking-normal sm:text-5xl lg:text-6xl">
              GOOD FOOD WAY
            </h1>

            <p className="mt-5 text-xl font-semibold leading-relaxed">
              Your personalized nutrition and fitness companion.
            </p>

            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Build a plan designed around your lifestyle, preferences, and
              goals.
            </p>

            <div className="mt-8 space-y-3">
              <Button
                size="lg"
                className="h-12 w-full sm:w-auto"
                onClick={() => navigate("/register")}
              >
                Create My Plan
                <ArrowRight className="h-4 w-4" />
              </Button>

              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="font-semibold text-primary hover:underline"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-xl">
            <div className="overflow-hidden rounded-lg border bg-card shadow-[var(--shadow-soft)]">
              <img
                src={heroImage}
                alt="Balanced meal bowl"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/3]"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
