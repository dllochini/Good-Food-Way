import { Drumstick, Leaf } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "@/components/layouts/OnboardingLayout";
import { Button } from "@/components/ui/button";

export default function FoodPage() {
  const navigate = useNavigate();
  const [diet, setDiet] = useState("Non-Vegetarian");

  const options = [
    { label: "Vegetarian", icon: Leaf },
    { label: "Non-Vegetarian", icon: Drumstick },
  ];

  return (
    <OnboardingLayout
      step={4}
      total={6}
      title="Now let's talk about food."
      subtitle="What type of meals fit your lifestyle?"
    >
      <div className="space-y-5">
        <div className="grid gap-3 sm:grid-cols-2">
          {options.map((option) => {
            const Icon = option.icon;
            const selected = diet === option.label;

            return (
              <button
                key={option.label}
                type="button"
                onClick={() => setDiet(option.label)}
                className={`min-h-32 rounded-lg border p-5 text-left transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] ${
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:bg-muted/40"
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="mt-5 block text-lg font-semibold">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Button
            variant="outline"
            className="h-12"
            onClick={() => navigate("/onboarding/dietary")}
          >
            Skip for now
          </Button>
          <Button
            className="h-12"
            onClick={() => navigate("/onboarding/dietary")}
          >
            Continue
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}
