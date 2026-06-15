import { useNavigate } from "react-router-dom";

import {
  Check,
  Crown,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import OnboardingLayout from "../layout/OnboardingLayout";

import { useOnboarding } from "../context/OnboardingContext";

export default function PlanSelection() {
  const navigate = useNavigate();

  const { data, updateData } =
    useOnboarding();

  const plans = [
    {
      title: "Free Plan",
      icon: Sparkles,
      price: "Free",
      description:
        "Start your nutrition journey",

      features: [
        "Nutrition targets",
        "Water tracking",
        "Progress monitoring",
      ],
    },

    {
      title: "Plan A",
      icon: CheckCircle2,
      price: "Rs. XXXX/month",

      description:
        "Personalized daily guidance",

      recommended: true,

      features: [
        "1 personalized meal daily",
        "Dietitian support",
        "Progress tracking",
        "Smart recommendations",
      ],
    },

    {
      title: "Plan B",
      icon: Crown,
      price: "Rs. YYYY/month",

      description:
        "Complete nutrition support",

      features: [
        "2 personalized meals daily",
        "Advanced AI guidance",
        "Priority support",
        "Premium recommendations",
      ],
    },
  ];

  return (
    <OnboardingLayout
      step={7}
      totalSteps={8}
      title="Choose your plan"
      subtitle="Upgrade anytime as your goals evolve."
    >
      <Card className="mb-5 rounded-3xl border-primary bg-primary/5 p-5">
        <div className="flex gap-3">
          <Crown className="h-5 w-5 text-primary" />

          <div>
            <h3 className="font-semibold">
              Most users choose Plan A
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Personalized meals and
              dietitian support help
              people stay consistent
              longer.
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        {plans.map((plan) => {
          const Icon = plan.icon;

          const selected =
            data.selectedPlan ===
            plan.title;

          return (
            <Card
              key={plan.title}
              onClick={() =>
                updateData(
                  "selectedPlan",
                  plan.title
                )
              }
              className={`cursor-pointer rounded-3xl p-5 transition-all ${
                selected
                  ? "border-primary bg-primary/5 shadow-md"
                  : "hover:border-primary/40 hover:bg-primary/5"
              }`}
            >
              <div className="flex justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />

                    <h3 className="font-bold">
                      {plan.title}
                    </h3>

                    {plan.recommended && (
                      <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                        Recommended
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <p className="font-bold whitespace-nowrap">
                  {plan.price}
                </p>
              </div>

              <div className="mt-4 space-y-2">
                {plan.features.map(
                  (feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </div>
                  )
                )}
              </div>
            </Card>
          );
        })}
      </div>

      <Button
        className="mt-8 h-14 w-full rounded-2xl"
        disabled={
          !data.selectedPlan
        }
        onClick={() =>
          navigate(
            "/onboarding/completed"
          )
        }
      >
        Continue
      </Button>
    </OnboardingLayout>
  );
}