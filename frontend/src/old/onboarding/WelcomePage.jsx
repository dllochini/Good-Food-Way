import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">

        <div className="text-center">

          <div className="mb-6 text-6xl">
            🥗
          </div>

          <h1 className="text-4xl font-bold">
            Good Food Way
          </h1>

          <p className="mt-4 text-muted-foreground">
            We'll build a plan that fits your goals,
            lifestyle and preferences.
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            Takes about 60 seconds.
          </p>

        </div>

        <Button
          size="lg"
          className="mt-12 w-full rounded-2xl"
          onClick={() => navigate("/onboarding/goal")}
        >
          Let's Begin
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

      </div>
    </main>
  );
}