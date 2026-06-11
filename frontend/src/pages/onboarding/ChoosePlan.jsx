import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "@/components/layouts/OnboardingLayout";
import { Button } from "@/components/ui/button";

export default function ChoosePlan() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("Plan A");

  const plans = [
    {
      title: "Plan A",
      description: "Lunch or Dinner",
      features: ["One main meal per day", "Flexible daily choice"],
    },
    {
      title: "Plan B",
      description: "Lunch and Dinner",
      features: ["Two balanced meals per day", "More complete support"],
    },
    {
      title: "Free Plan",
      description: "Starter access",
      features: ["Basic targets", "Habit tracking"],
    },
  ];

  return (
    <OnboardingLayout
      title="Choose how you'd like to continue"
      subtitle="You can change your plan anytime later."
      hideProgress
    >
      <div className="space-y-5">
        <div className="grid gap-3 md:grid-cols-3">
          {plans.map((plan) => {
            const selected = selectedPlan === plan.title;

            return (
              <button
                key={plan.title}
                type="button"
                onClick={() => setSelectedPlan(plan.title)}
                className={`rounded-lg border p-5 text-left transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] ${
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:bg-muted/40"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold">{plan.title}</h2>
                    <p
                      className={`mt-2 text-sm ${
                        selected
                          ? "text-primary-foreground/85"
                          : "text-muted-foreground"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>
                  {selected ? <Check className="h-5 w-5" /> : null}
                </div>

                <div className="mt-5 space-y-2 text-sm">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      {feature}
                    </div>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        <Button className="h-12 w-full" onClick={() => navigate("/dashboard")}>
          Continue
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </OnboardingLayout>
  );
}
