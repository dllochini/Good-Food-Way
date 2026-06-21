import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/shared/ui/button";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 py-6">

        <div className="flex flex-1 flex-col items-center justify-center text-center">

          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10">
            <Sparkles className="h-12 w-12 text-primary" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            GOOD FOOD WAY
          </h1>

          <p className="mt-4 max-w-sm text-muted-foreground">
            Personalized nutrition and fitness guidance
            built around your lifestyle.
          </p>

          <p className="mt-3 text-sm text-muted-foreground">
            Build your plan in less than a minute.
          </p>
        </div>

        <div className="pb-6">

          <Button
            onClick={() => navigate("/login")}
            className="h-14 w-full rounded-2xl"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

        </div>

      </div>
    </main>
  );
}