import { useNavigate } from "react-router-dom";

import {
  Scale,
  Dumbbell,
  Target,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import OnboardingLayout from "../layout/OnboardingLayout";
import { useOnboarding } from "../context/OnboardingContext";

export default function GoalStep() {
  const navigate = useNavigate();

  const {
    data,
    toggleGoal,
  } = useOnboarding();

  const goals = [
    {
      title: "Lose Weight",
      icon: Scale,
      description:
        "Reduce body fat and improve fitness",
    },

    {
      title: "Build Muscle",
      icon: Dumbbell,
      description:
        "Gain strength and muscle mass",
    },

    {
      title: "Maintain Weight",
      icon: Target,
      description:
        "Stay consistent and healthy",
    },

    {
      title: "Improve Health",
      icon: Heart,
      description:
        "Build better habits and nutrition",
    },
  ];

  return (
    <OnboardingLayout
      step={1}
      totalSteps={8}
      title="What are your goals?"
      subtitle="Choose all that apply."
      showBack={false}
    >
      <div className="space-y-3">
        {goals.map((goal) => {
          const Icon = goal.icon;

          const selected =
            data.goals.includes(
              goal.title
            );

          return (
            <Card
              key={goal.title}
              onClick={() =>
                toggleGoal(goal.title)
              }
              className={`cursor-pointer rounded-3xl p-5 transition-all ${
                selected
                  ? "border-primary bg-primary/5"
                  : "hover:border-primary/40 hover:bg-primary/5"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold">
                    {goal.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {goal.description}
                  </p>
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
      </div>

      <Button
        className="mt-8 h-14 w-full rounded-2xl"
        disabled={
          data.goals.length === 0
        }
        onClick={() =>
          navigate("/onboarding/about")
        }
      >
        Continue
      </Button>
    </OnboardingLayout>
  );
}