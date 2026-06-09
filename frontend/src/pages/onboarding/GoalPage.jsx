import {
  HeartPulse,
  Dumbbell,
  Sparkles,
  Salad,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import OptionCard from "@/components/onboarding/OptionCard";

export default function GoalPage() {
  const navigate = useNavigate();
  const [goal, setGoal] = useState("");

  const goals = [
    {
      value: "healthy-habits",
      title: "Build healthy habits",
      description: "Small changes that feel realistic and sustainable.",
      icon: Sparkles,
    },
    {
      value: "better-energy",
      title: "Feel more energetic",
      description: "Choose meals that help you stay steady through the day.",
      icon: HeartPulse,
    },
    {
      value: "maintain",
      title: "Maintain my weight",
      description: "Stay balanced without strict or overwhelming rules.",
      icon: ShieldCheck,
    },
    {
      value: "strength",
      title: "Build strength",
      description: "Support training and an active routine.",
      icon: Dumbbell,
    },
    {
      value: "nutrition",
      title: "Improve my nutrition",
      description: "Learn what works best for your body over time.",
      icon: Salad,
    },
  ];

  return (
    <OnboardingLayout
      step={2}
      total={5}
      title="What would you like support with?"
      subtitle="Choose the goal that feels most relevant right now. You can update it anytime."
      onBack={() => navigate("/register")}
    >
      <div className="space-y-3">
        {goals.map((item) => (
          <OptionCard
            key={item.value}
            icon={item.icon}
            title={item.title}
            description={item.description}
            selected={goal === item.value}
            onClick={() => setGoal(item.value)}
          />
        ))}
      </div>

      <Card className="mt-5 border-border/60 bg-muted/30 p-4 text-sm text-muted-foreground">
        Pick one and we will shape the rest around it. You can always change this later.
      </Card>

      <div className="mt-6 flex gap-3">
        <Button
          variant="outline"
          className="h-12 flex-1 rounded-lg"
          onClick={() => navigate("/register")}
        >
          Back
        </Button>

        <Button
          className="h-12 flex-1 rounded-lg"
          disabled={!goal}
          onClick={() => navigate("/onboarding/about")}
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </OnboardingLayout>
  );
}
