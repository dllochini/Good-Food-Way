import {
  ArrowRight,
  Check,
  Droplets,
  Flame,
  Footprints,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import OnboardingLayout from "@/old/OnboardingLayout";
import { Button } from "@/components/ui/button";

import { useOnboarding } from "@/old/context/OnboardingContext";

export default function ReportPage() {
  const navigate = useNavigate();

  const { data } = useOnboarding();

  const calorieTarget = 1900;
  const waterTarget = "2.5 L";
  const stepTarget = "8000";

  return (
    <OnboardingLayout
      hideProgress
      title="🎉 Your plan is ready!"
      subtitle={`Based on your goal of ${data.goal}, here's where I'd recommend starting.`}
    >
      <div className="space-y-6">
        
        {/* Coach Message */}

        <div className="rounded-3xl bg-primary p-6 text-primary-foreground">
          <h2 className="text-lg font-semibold">
            Great job!
          </h2>

          <p className="mt-2 text-sm leading-relaxed opacity-90">
            Small consistent habits lead to long-term results.
            Let's focus on building a routine you can actually
            maintain.
          </p>
        </div>

        {/* Targets */}

        <div className="space-y-4">

  <div className="rounded-3xl border p-5">
    <p className="text-sm text-muted-foreground">
      Calories
    </p>

    <h2 className="text-3xl font-bold">
      1900 kcal
    </h2>
  </div>

  <div className="rounded-3xl border p-5">
    <p className="text-sm text-muted-foreground">
      Water Goal
    </p>

    <h2 className="text-3xl font-bold">
      2.5 L
    </h2>
  </div>

  <div className="rounded-3xl border p-5">
    <p className="text-sm text-muted-foreground">
      Daily Steps
    </p>

    <h2 className="text-3xl font-bold">
      8000
    </h2>
  </div>

</div>

        {/* Week 1 Mission */}

        <div className="rounded-3xl border bg-card p-5">
          <h3 className="font-semibold text-lg">
            Your Week 1 Mission
          </h3>

          <div className="mt-4 space-y-3">
            {[
              "Log your meals daily",
              "Reach your water goal",
              "Stay active every day",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <div className="rounded-full bg-primary/10 p-1">
                  <Check className="h-4 w-4 text-primary" />
                </div>

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <Button
  size="lg"
  className="mt-8 w-full rounded-2xl"
  onClick={() => navigate("/chooseplan")}
>
  Continue
</Button>
      </div>
    </OnboardingLayout>
  );
}