import { Armchair, Bike, Footprints, PersonStanding } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "@/components/layouts/OnboardingLayout";
import { Button } from "@/components/ui/button";

export default function ActivityPage() {
  const navigate = useNavigate();
  const [activity, setActivity] = useState("Moderately active");

  const options = [
    { label: "Mostly sitting", icon: Armchair },
    { label: "Light activity", icon: Footprints },
    { label: "Moderately active", icon: PersonStanding },
    { label: "Very active", icon: Bike },
  ];

  return (
    <OnboardingLayout
      step={3}
      total={6}
      title="How active are you during a typical week?"
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {options.map((option) => {
            const Icon = option.icon;
            const selected = activity === option.label;

            return (
              <button
                key={option.label}
                type="button"
                onClick={() => setActivity(option.label)}
                className={`min-h-28 rounded-lg border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] ${
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:bg-muted/40"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="mt-4 block text-sm font-semibold leading-tight">
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
            onClick={() => navigate("/onboarding/food")}
          >
            Skip for now
          </Button>
          <Button
            className="h-12"
            onClick={() => navigate("/onboarding/food")}
          >
            Continue
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}
