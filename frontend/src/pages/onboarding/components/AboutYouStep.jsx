import { useNavigate } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import OnboardingLayout from "../layout/OnboardingLayout";
import { useOnboarding } from "../context/OnboardingContext";

export default function AboutYouStep() {
  const navigate = useNavigate();

  const { data, updateData } =
    useOnboarding();

  const canContinue =
    data.gender &&
    Number(data.age) > 0 &&
    Number(data.height) > 0 &&
    Number(data.weight) > 0;

  return (
    <OnboardingLayout
      step={2}
      totalSteps={8}
      title="Tell us about yourself"
      subtitle="Help us personalize your nutrition recommendations."
    >
      <div className="space-y-4">
        <Card className="rounded-3xl p-5">
          <p className="mb-3 font-medium">
            Gender
          </p>

          <div className="grid grid-cols-3 gap-3">
            {[
              "Male",
              "Female",
              "Other",
            ].map((gender) => {
              const selected =
                data.gender === gender;

              return (
                <button
                  key={gender}
                  onClick={() =>
                    updateData(
                      "gender",
                      gender
                    )
                  }
                  className={`rounded-2xl border p-4 text-sm font-medium transition-all ${
                    selected
                      ? "border-primary bg-primary/5"
                      : "hover:border-primary/40"
                  }`}
                >
                  {gender}
                </button>
              );
            })}
          </div>
        </Card>

        <Card className="rounded-3xl p-5">
          <p className="mb-3 font-medium">
            Age
          </p>

          <Input
            type="number"
            placeholder="25"
            value={data.age}
            onChange={(e) =>
              updateData(
                "age",
                e.target.value
              )
            }
          />
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card className="rounded-3xl p-5">
            <p className="mb-3 font-medium">
              Height
            </p>

            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="170"
                value={data.height}
                onChange={(e) =>
                  updateData(
                    "height",
                    e.target.value
                  )
                }
              />

              <span className="text-sm text-muted-foreground">
                cm
              </span>
            </div>
          </Card>

          <Card className="rounded-3xl p-5">
            <p className="mb-3 font-medium">
              Weight
            </p>

            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="65"
                value={data.weight}
                onChange={(e) =>
                  updateData(
                    "weight",
                    e.target.value
                  )
                }
              />

              <span className="text-sm text-muted-foreground">
                kg
              </span>
            </div>
          </Card>
        </div>
      </div>

      <Button
        className="mt-8 h-14 w-full rounded-2xl"
        disabled={!canContinue}
        onClick={() =>
          navigate(
            "/onboarding/activity"
          )
        }
      >
        Continue
      </Button>
    </OnboardingLayout>
  );
}