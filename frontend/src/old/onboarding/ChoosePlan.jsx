import { ArrowRight, Check, Crown, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "@/old/OnboardingLayout";
import { Button } from "@/components/ui/button";

export default function ChoosePlan() {
  const navigate = useNavigate();

  const [selectedPlan, setSelectedPlan] = useState("Plan A");

  const plans = [
    {
      title: "Free Plan",
      description: "A simple way to start building healthier habits.",
      price: "Free",
      icon: Sparkles,
      features: [
        "Basic nutrition targets",
        "Water tracking",
        "Habit tracking",
      ],
    },

    {
      title: "Plan A",
      description: "Lunch OR Dinner",
      price: "Rs. XXXX / month",
      icon: Check,
      recommended: true,
      features: [
        "1 personalized meal daily",
        "Flexible meal schedule",
        "Nutrition guidance",
        "Progress tracking",
      ],
    },

    {
      title: "Plan B",
      description: "Lunch + Dinner",
      price: "Rs. YYYY / month",
      icon: Crown,
      features: [
        "2 personalized meals daily",
        "More complete nutrition support",
        "Faster progress",
        "Advanced recommendations",
      ],
    },
  ];

  const handleContinue = () => {
    if (selectedPlan === "Free Plan") {
      navigate("/dashboard");
      return;
    }

    navigate("/paymentportal");
  };

  return (
    <OnboardingLayout
      hideProgress
      title="Choose Your Nutrition Plan"
      subtitle="Pick the level of support that best fits your lifestyle."
    >
      <div className="space-y-4">
        {plans.map((plan) => {
          const selected = selectedPlan === plan.title;
          const Icon = plan.icon;

          return (
            <button
              key={plan.title}
              type="button"
              onClick={() => setSelectedPlan(plan.title)}
              className={`relative w-full rounded-3xl border p-5 text-left transition-all duration-200 ${
                selected
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card"
              }`}
            >
              {plan.recommended && (
                <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Recommended
                </div>
              )}

              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    selected
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-bold">
                    {plan.title}
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>

                  <p className="mt-3 text-2xl font-bold">
                    {plan.price}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {selected && (
                <div className="mt-5 rounded-2xl bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground">
                  Selected
                </div>
              )}
            </button>
          );
        })}

        <div className="pt-3">
          <Button
            className="h-14 w-full rounded-2xl text-base"
            onClick={handleContinue}
          >
            Start My Journey
            <ArrowRight className="h-4 w-4" />
          </Button>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            You can change your plan anytime later.
          </p>
        </div>
      </div>
    </OnboardingLayout>
  );
}