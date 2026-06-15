import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import {
  Flame,
  Droplets,
  BadgeCheck,
  Target,
  Clock3,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import OnboardingLayout from "../layout/OnboardingLayout";

import { useOnboarding } from "../context/OnboardingContext";

export default function SuccessPlan() {
  const navigate = useNavigate();

  const { data } = useOnboarding();

  const activityFactor = useMemo(() => {
    switch (data.activity) {
      case "Sedentary":
        return 1.2;

      case "Lightly Active":
        return 1.375;

      case "Moderately Active":
        return 1.55;

      case "Highly Active":
        return 1.725;

      default:
        return 1.35;
    }
  }, [data.activity]);

  const estimatedCalories = useMemo(() => {
    const weight = Number(data.weight || 0);
    const height = Number(data.height || 0);
    const age = Number(data.age || 25);

    const genderFactor =
      data.gender === "Male"
        ? 5
        : data.gender === "Female"
        ? -161
        : -78;

    const bmr =
      10 * weight +
      6.25 * height -
      5 * age +
      genderFactor;

    const tdee = Math.round(
      bmr * activityFactor
    );

    if (
      data.goals.includes(
        "Lose Weight"
      )
    ) {
      return Math.max(
        1200,
        tdee - 350
      );
    }

    if (
      data.goals.includes(
        "Build Muscle"
      )
    ) {
      return tdee + 250;
    }

    return tdee;
  }, [
    data.weight,
    data.height,
    data.gender,
    data.age,
    data.goals,
    activityFactor,
  ]);

  const proteinTarget = useMemo(() => {
    const weight = Number(
      data.weight || 0
    );

    if (
      data.goals.includes(
        "Build Muscle"
      )
    ) {
      return Math.round(
        weight * 1.8
      );
    }

    if (
      data.goals.includes(
        "Lose Weight"
      )
    ) {
      return Math.round(
        weight * 1.6
      );
    }

    return Math.round(
      weight * 1.4
    );
  }, [
    data.weight,
    data.goals,
  ]);

  const waterTarget = useMemo(() => {
    const weight = Number(
      data.weight || 0
    );

    return Math.max(
      2,
      (
        weight * 0.035
      ).toFixed(1)
    );
  }, [data.weight]);

  const expectedTimeline =
    useMemo(() => {
      if (
        data.goals.includes(
          "Lose Weight"
        )
      ) {
        return "8 - 12 weeks";
      }

      if (
        data.goals.includes(
          "Build Muscle"
        )
      ) {
        return "12 - 16 weeks";
      }

      if (
        data.goals.includes(
          "Improve Health"
        )
      ) {
        return "4 - 8 weeks";
      }

      return "Ongoing";
    }, [data.goals]);

  return (
    <OnboardingLayout
      step={6}
      totalSteps={8}
      title="Your Success Plan"
      subtitle="Based on your goals and lifestyle."
      showBack={false}
    >
      <div className="space-y-5">
        <Card className="rounded-3xl border-primary bg-primary/5 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Flame className="h-5 w-5 text-primary" />
            </div>

            <div>
              <p className="font-semibold">
                Daily Calories
              </p>

              <p className="text-sm text-muted-foreground">
                Recommended target
              </p>
            </div>
          </div>

          <div className="mt-5 text-4xl font-bold">
            {estimatedCalories} kcal
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card className="rounded-3xl p-4">
            <BadgeCheck className="mb-2 h-5 w-5 text-primary" />

            <p className="text-xs text-muted-foreground">
              Protein
            </p>

            <p className="font-semibold">
              {proteinTarget}g/day
            </p>
          </Card>

          <Card className="rounded-3xl p-4">
            <Droplets className="mb-2 h-5 w-5 text-primary" />

            <p className="text-xs text-muted-foreground">
              Water
            </p>

            <p className="font-semibold">
              {waterTarget}L/day
            </p>
          </Card>
        </div>

        <Card className="rounded-3xl p-5">
          <Clock3 className="mb-3 h-5 w-5 text-primary" />

          <p className="text-sm text-muted-foreground">
            Expected Timeline
          </p>

          <p className="mt-1 font-semibold">
            {expectedTimeline}
          </p>
        </Card>

        <Card className="rounded-3xl p-5">
          <Target className="mb-3 h-5 w-5 text-primary" />

          <p className="text-sm text-muted-foreground">
            Your Goals
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {data.goals.map(
              (goal) => (
                <span
                  key={goal}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm"
                >
                  {goal}
                </span>
              )
            )}
          </div>
        </Card>

        <Card className="rounded-3xl border-primary bg-primary/5 p-5">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-1 h-5 w-5 text-primary" />

            <div>
              <h3 className="font-semibold">
                What happens next?
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                We'll help you stay
                consistent with meal
                recommendations,
                nutrition targets and
                progress tracking.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Button
        className="mt-8 h-14 w-full rounded-2xl"
        onClick={() =>
          navigate(
            "/onboarding/plans"
          )
        }
      >
        Continue

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </OnboardingLayout>
  );
}