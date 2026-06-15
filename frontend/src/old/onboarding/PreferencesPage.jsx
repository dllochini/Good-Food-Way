import { useNavigate } from "react-router-dom";

import OnboardingLayout from "@/old/OnboardingLayout";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useOnboarding } from "@/old/context/OnboardingContext";

export default function PreferencesPage() {
  const navigate = useNavigate();

  const { data, updateData } =
    useOnboarding();

  return (
    <OnboardingLayout
      step={5}
      total={5}
      title="Food preferences"
    >
      <div className="space-y-6">

        <div className="grid grid-cols-2 gap-3">

          {[
            "Vegetarian",
            "Non Vegetarian",
          ].map((option) => (
            <button
              key={option}
              onClick={() =>
                updateData(
                  "foodType",
                  option
                )
              }
              className={`
                rounded-2xl
                border
                p-4

                ${
                  data.foodType === option
                    ? "border-primary bg-primary/5"
                    : ""
                }
              `}
            >
              {option}
            </button>
          ))}

        </div>

        <Input
          value={data.allergies}
          placeholder="Allergies (optional)"
          onChange={(e) =>
            updateData(
              "allergies",
              e.target.value
            )
          }
        />

        <Button
          size="lg"
          className="w-full"
          onClick={() =>
            navigate(
              "/onboarding/generating"
            )
          }
        >
          Create My Plan
        </Button>

      </div>
    </OnboardingLayout>
  );
}