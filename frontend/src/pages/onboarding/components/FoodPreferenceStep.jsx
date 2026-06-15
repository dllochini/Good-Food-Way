import { useNavigate } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import OnboardingLayout from "../layout/OnboardingLayout";
import { useOnboarding } from "../context/OnboardingContext";

export default function FoodPreferenceStep() {
  const navigate = useNavigate();

  const { data, updateData } =
    useOnboarding();

  const foodOptions = [
    {
      title: "Vegetarian",
      emoji: "🥦",
    },

    {
      title: "Non Vegetarian",
      emoji: "🍗",
    },

    {
      title: "No Preference",
      emoji: "🌎",
    },
  ];

  const handleSkip = () => {
    updateData(
      "foodType",
      "No Preference"
    );

    navigate(
      "/onboarding/preferences"
    );
  };

  return (
    <OnboardingLayout
      step={4}
      totalSteps={8}
      title="Food preferences"
      subtitle="Let's tailor meals to your preferences."
    >
      <div className="space-y-4">
        {foodOptions.map((food) => {
          const selected =
            data.foodType ===
            food.title;

          return (
            <Card
              key={food.title}
              onClick={() =>
                updateData(
                  "foodType",
                  food.title
                )
              }
              className={`cursor-pointer rounded-3xl p-5 transition-all ${
                selected
                  ? "border-primary bg-primary/5"
                  : "hover:border-primary/40 hover:bg-primary/5"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">
                  {food.emoji}
                </span>

                <div className="flex-1">
                  <h3 className="font-semibold">
                    {food.title}
                  </h3>
                </div>

                {selected ? (
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                ) : (
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </Card>
          );
        })}

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
        disabled={!data.foodType}
        onClick={() =>
          navigate(
            "/onboarding/preferences"
          )
        }
      >
        Continue
      </Button>
    </OnboardingLayout>
  );
}