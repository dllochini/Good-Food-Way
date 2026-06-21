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

import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";

import OnboardingLayout from "../layout/OnboardingLayout";
import { useOnboarding } from "../context/OnboardingContext";

export default function SuccessPlan() {
  const navigate = useNavigate();
  const { data } = useOnboarding();

  const selectedGoals = useMemo(
    () => data.goals?.map((g) => g.name) || [],
    [data.goals]
  );

  const activityFactor = useMemo(() => {
    const levels = {
      Sedentary: 1.2,
      "Lightly Active": 1.375,
      "Moderately Active": 1.55,
      "Highly Active": 1.725,
    };
    return levels[data.activity] || 1.35;
  }, [data.activity]);

  const estimatedCalories = useMemo(() => {
    const weight = Number(data.weight || 0);
    const age = Number(data.age || 25);
    const height = Number(data.height || 0);

    const genderFactor =
      data.gender === "Male" ? 5 : data.gender === "Female" ? -161 : -78;

    const bmr = 10 * weight + 6.25 * height - 5 * age + genderFactor;
    const tdee = Math.round(bmr * activityFactor);

    if (selectedGoals.includes("Lose Weight")) return Math.max(1200, tdee - 350);
    if (selectedGoals.includes("Build Muscle")) return tdee + 250;

    return tdee;
  }, [data, activityFactor, selectedGoals]);

  const bmi = useMemo(() => {
    const weight = Number(data.weight || 0);
    const heightM = Number(data.height || 0) / 100;
    if (!weight || !heightM) return 0;

    return Number((weight / (heightM * heightM)).toFixed(1));
  }, [data.weight, data.height]);

  const bmiStatus = useMemo(() => {
    if (bmi < 18.5)
      return {
        label: "Underweight",
        badge: "bg-amber-500/10 text-amber-600",
        insight: "You may benefit from gradual weight gain and strength training.",
      };

    if (bmi < 25)
      return {
        label: "Healthy",
        badge: "bg-green-500/10 text-green-600",
        insight: "You are within a healthy range. Focus on consistency.",
      };

    if (bmi < 30)
      return {
        label: "Overweight",
        badge: "bg-orange-500/10 text-orange-600",
        insight: "Small daily improvements can make a big difference over time.",
      };

    return {
      label: "High",
      badge: "bg-red-500/10 text-red-600",
      insight: "A gradual, sustainable approach is recommended.",
    };
  }, [bmi]);

  const proteinTarget = useMemo(() => {
    const weight = Number(data.weight || 0);

    if (selectedGoals.includes("Build Muscle")) return Math.round(weight * 1.8);
    if (selectedGoals.includes("Lose Weight")) return Math.round(weight * 1.6);

    return Math.round(weight * 1.4);
  }, [data.weight, selectedGoals]);

  const waterTarget = useMemo(() => {
    const weight = Number(data.weight || 0);
    return Math.max(2, Number((weight * 0.035).toFixed(1)));
  }, [data.weight]);

  const expectedTimeline = useMemo(() => {
    if (selectedGoals.includes("Lose Weight")) return "8–12 weeks";
    if (selectedGoals.includes("Build Muscle")) return "12–16 weeks";
    if (selectedGoals.includes("Improve Health")) return "4–8 weeks";
    return "Ongoing";
  }, [selectedGoals]);

  const insight = useMemo(() => {
    if (bmi > 25 && selectedGoals.includes("Lose Weight")) {
      return "A steady, moderate calorie deficit is recommended for sustainable fat loss.";
    }

    if (bmi < 18.5 && selectedGoals.includes("Build Muscle")) {
      return "A slight calorie surplus combined with strength training will support muscle growth.";
    }

    return "Your targets are balanced for long-term consistency and healthy progress.";
  }, [bmi, selectedGoals]);

  const confidenceLevel = useMemo(() => {
    let score = 0;

    if (data.weight) score += 25;
    if (data.height) score += 25;
    if (data.age) score += 15;
    if (data.gender) score += 15;
    if (data.activity) score += 10;
    if (data.goals?.length) score += 10;

    if (score >= 85) return { label: "High", color: "text-green-600", bar: 100 };
    if (score >= 60) return { label: "Good", color: "text-emerald-600", bar: 75 };
    if (score >= 40) return { label: "Moderate", color: "text-amber-600", bar: 55 };

    return { label: "Basic", color: "text-orange-600", bar: 35 };
  }, [data]);

  return (
    <OnboardingLayout
      step={6}
      totalSteps={9}
      title="Your Success Plan"
      subtitle="Your personalized starting point"
      showBack={false}
    >
      <div className="space-y-4">

        {/* DAILY TARGETS (MAIN CARD) */}
        <Card className="rounded-3xl border-primary/20 bg-primary/5 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Personalized Targets
              </p>
              <h2 className="mt-1 text-lg font-bold">
                Daily Nutrition Goals
              </h2>
            </div>
            <Sparkles className="h-5 w-5 text-primary" />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-background p-4 text-center">
              <Flame className="mx-auto h-5 w-5 text-primary" />
              <p className="mt-2 text-xs text-muted-foreground">Calories</p>
              <p className="text-2xl font-bold">{estimatedCalories}</p>
              <p className="text-[10px] text-muted-foreground">kcal</p>
            </div>

            <div className="rounded-2xl bg-background p-4 text-center">
              <BadgeCheck className="mx-auto h-5 w-5 text-primary" />
              <p className="mt-2 text-xs text-muted-foreground">Protein</p>
              <p className="text-2xl font-bold">{proteinTarget}g</p>
              <p className="text-[10px] text-muted-foreground">daily</p>
            </div>

            <div className="rounded-2xl bg-background p-4 text-center">
              <Droplets className="mx-auto h-5 w-5 text-primary" />
              <p className="mt-2 text-xs text-muted-foreground">Water</p>
              <p className="text-2xl font-bold">{waterTarget}L</p>
              <p className="text-[10px] text-muted-foreground">daily</p>
            </div>
          </div>
        </Card>

        <Card className="rounded-3xl p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Plan Confidence
              </p>

              <h3 className="mt-2 text-lg font-bold">
                {confidenceLevel.label} match
              </h3>
            </div>

            <div className={`text-sm font-semibold ${confidenceLevel.color}`}>
              {confidenceLevel.bar}%
            </div>
          </div>

          {/* progress bar */}
          <div className="mt-4 h-2 w-full rounded-full bg-muted">
            <div
              className="h-2 rounded-full bg-primary transition-all"
              style={{ width: `${confidenceLevel.bar}%` }}
            />
          </div>

          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
            This score reflects how complete your profile data is.
            More details help improve the precision of your nutrition targets.
          </p>
        </Card>

        {/* BMI */}
        <Card className="rounded-3xl p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Health Snapshot
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {bmi} BMI
              </h3>

              <p className="text-sm text-muted-foreground">
                {bmiStatus.label}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${bmiStatus.badge}`}
            >
              {bmiStatus.label}
            </span>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            {bmiStatus.insight}
          </p>
        </Card>

        {/* INSIGHT */}
        <Card className="rounded-3xl p-5">
          <div className="flex gap-3">
            <Sparkles className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-semibold">Personalized Insight</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {insight}
              </p>
            </div>
          </div>
        </Card>

        {/* GOALS + TIMELINE */}
        <Card className="rounded-3xl p-5">
          <div className="flex gap-3">
            <Target className="h-5 w-5 text-primary mt-0.5" />

            <div className="flex-1">
              <p className="font-semibold">Your Goals</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {selectedGoals.map((goal, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium"
                  >
                    {goal}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock3 className="h-4 w-4" />
                <span>Expected timeline: {expectedTimeline}</span>
              </div>
            </div>
          </div>
        </Card>

      </div>

      <Button
        className="mt-6 h-12 w-full rounded-2xl"
        onClick={() => navigate("/onboarding/plans")}
      >
        Continue to Plans
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </OnboardingLayout>
  );
}