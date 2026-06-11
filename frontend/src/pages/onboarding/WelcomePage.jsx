import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "@/components/layouts/OnboardingLayout";
import { Button } from "@/components/ui/button";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <OnboardingLayout
      title="Hi, Luhara!"
      subtitle="Let's create your personalized health journey"
      hideProgress
    >
      <div className="space-y-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Sparkles className="h-8 w-8" />
        </div>

        <p className="mx-auto max-w-md leading-relaxed text-muted-foreground">
          I'll ask a few quick questions to understand your lifestyle, goals,
          and food preferences.
        </p>

        <p className="text-sm font-semibold text-foreground">
          This takes less than 2 minutes.
        </p>

        <Button
          className="h-12 w-full sm:w-auto"
          onClick={() => navigate("/onboarding/goal")}
        >
          Start
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </OnboardingLayout>
  );
}
