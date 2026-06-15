import { useNavigate } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useOnboarding } from "../context/OnboardingContext";
import OnboardingLayout from "../layout/OnboardingLayout";

export default function PreferencesStep() {
  const navigate = useNavigate();

  const { data, updateData } =
    useOnboarding();

  const handleContinue = () => {
    navigate("/onboarding/generating");
  };

  const handleSkip = () => {
    updateData("allergies", "");
    updateData("dislikes", "");

    navigate("/onboarding/generating");
  };

  return (
    <OnboardingLayout
      step={5}
      totalSteps={8}
      title="Additional preferences"
      subtitle="Optional information to improve recommendations."
    >
      <div className="space-y-4">
        <Card className="rounded-3xl p-5">
          <label className="mb-3 block font-medium">
            Any allergies?
          </label>

          <Input
            placeholder="Peanuts, dairy, shellfish..."
            value={data.allergies}
            onChange={(e) =>
              updateData(
                "allergies",
                e.target.value
              )
            }
          />

          <p className="mt-2 text-xs text-muted-foreground">
            Optional
          </p>
        </Card>

        <Card className="rounded-3xl p-5">
          <label className="mb-3 block font-medium">
            Foods you'd like to avoid
          </label>

          <Input
            placeholder="Mushrooms, olives..."
            value={data.dislikes}
            onChange={(e) =>
              updateData(
                "dislikes",
                e.target.value
              )
            }
          />

          <p className="mt-2 text-xs text-muted-foreground">
            Optional
          </p>
        </Card>

        <Button
          variant="ghost"
          className="w-full rounded-2xl"
          onClick={handleSkip}
        >
          Skip for now
        </Button>
      </div>

      <Button
        className="mt-4 h-14 w-full rounded-2xl"
        onClick={handleContinue}
      >
        Generate My Plan
      </Button>
    </OnboardingLayout>
  );
}