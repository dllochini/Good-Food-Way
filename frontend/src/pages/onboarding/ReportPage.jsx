import { ArrowRight, Check, Droplets, Flame, Footprints, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "@/components/layouts/OnboardingLayout";
import { Button } from "@/components/ui/button";

export default function ReportPage() {
  const navigate = useNavigate();

  const profile = [
    ["Weight:", "62kg"],
    ["Height:", "173cm"],
    ["Goal:", "Weight loss"],
    ["Activity:", "Moderately active"],
    ["Diet:", "Non-Veg"],
  ];

  const targets = [
    { label: "Calories", value: "~1900 kcal", icon: Flame },
    { label: "Water", value: "~2.5 L", icon: Droplets },
    { label: "Steps", value: "~8000/day", icon: Footprints },
  ];

  return (
    <OnboardingLayout
      step={6}
      total={6}
      title="Great work!"
      subtitle="I've built your initial health profile."
    >
      <div className="space-y-6">
        <section className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border bg-background p-5">
            <h2 className="font-semibold">Your Health Snapshot</h2>

            <div className="mt-4 rounded-lg bg-primary p-5 text-primary-foreground">
              <p className="text-sm opacity-85">BMI</p>
              <p className="mt-1 text-4xl font-bold">21.2</p>
              <p className="mt-1 text-sm font-semibold">Medium</p>
            </div>

            <dl className="mt-4 space-y-3">
              {profile.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 text-sm">
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd className="font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-lg border bg-background p-5">
            <h2 className="font-semibold">Your Personalized Health Summary</h2>

            <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                Based on your profile, your current lifestyle and goals suggest
                a strong opportunity for steady progress through consistent
                nutrition and activity habits.
              </p>
              <p>
                For your personalized recommendations, we estimate a daily
                calorie target of approximately 1900 kcal, a hydration goal of
                around 2.5 liters of water per day, and a daily activity target
                of 8000 steps.
              </p>
              <p>
                During your first week, focus on creating healthy habits rather
                than perfect results. Small consistent actions often lead to
                long-term progress.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border bg-background p-5">
            <div className="flex items-center gap-2 font-semibold">
              <Target className="h-5 w-5 text-primary" />
              Daily Targets
            </div>

            <div className="mt-4 grid gap-3">
              {targets.map((target) => {
                const Icon = target.icon;

                return (
                  <div
                    key={target.label}
                    className="flex items-center justify-between rounded-lg bg-card p-3"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {target.label}
                      </span>
                    </div>
                    <span className="font-semibold">{target.value}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border bg-background p-5">
            <div className="flex items-center gap-2 font-semibold">
              <Target className="h-5 w-5 text-primary" />
              Week One Focus
            </div>

            <div className="mt-4 space-y-3 text-sm">
              {["Track meals daily", "Reach activity goal", "Stay hydrated"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <Button
          className="min-h-12 w-full whitespace-normal py-3 text-center"
          onClick={() => navigate("/chooseplan")}
        >
          Here's what I recommend for your journey
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </OnboardingLayout>
  );
}
