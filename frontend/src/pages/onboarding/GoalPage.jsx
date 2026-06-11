import { Dumbbell, HeartPulse, Leaf, Scale, Sparkles, Zap } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "@/components/layouts/OnboardingLayout";
import { Button } from "@/components/ui/button";

export default function GoalPage() {
  const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState(["Lose weight"]);

  const goals = [
    { label: "Lose weight", icon: Scale },
    { label: "Gain muscle", icon: Dumbbell },
    { label: "Maintain weight", icon: HeartPulse },
    { label: "Improve fitness", icon: Zap },
    { label: "Eat healthier", icon: Leaf },
    { label: "Increase energy", icon: Sparkles },
    { label: "Build healthier habits", icon: HeartPulse },
  ];

  const toggleGoal = (goal) => {
    setSelectedGoals((current) =>
      current.includes(goal)
        ? current.filter((item) => item !== goal)
        : [...current, goal]
    );
  };

  return (
    <OnboardingLayout
      step={1}
      total={6}
      title="What would you like to achieve?"
      subtitle="Choose one or more goals you want to focus on."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {goals.map((goal) => {
          const Icon = goal.icon;
          const selected = selectedGoals.includes(goal.label);

          return (
            <button
              key={goal.label}
              type="button"
              onClick={() => toggleGoal(goal.label)}
              className={`min-h-28 rounded-lg border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] ${
                selected
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background hover:bg-muted/40"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="mt-4 block text-base font-semibold leading-tight">
                {goal.label}
              </span>
            </button>
          );
        })}
      </div>

      <Button
        className="mt-6 h-12 w-full"
        onClick={() => navigate("/onboarding/about")}
      >
        Continue
      </Button>
    </OnboardingLayout>
  );
}
