import { useNavigate } from "react-router-dom";

import OnboardingLayout from "@/old/OnboardingLayout";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

import { useOnboarding } from "@/old/context/OnboardingContext";

export default function GenderAge() {
  const navigate = useNavigate();

  const { data, updateData } =
    useOnboarding();

  return (
    <OnboardingLayout
      step={2}
      total={5}
      title="Tell us about yourself"
    >
      <div className="space-y-8">

        <div>

          <p className="mb-3 text-sm text-muted-foreground">
            Gender
          </p>

          <div className="grid grid-cols-3 gap-3">

            {[
              "Male",
              "Female",
              "Other",
            ].map((gender) => (
              <button
                key={gender}
                onClick={() =>
                  updateData(
                    "gender",
                    gender
                  )
                }
                className={`
                  rounded-2xl
                  border
                  p-4

                  ${
                    data.gender === gender
                      ? "border-primary bg-primary/5"
                      : ""
                  }
                `}
              >
                {gender}
              </button>
            ))}

          </div>

        </div>

        <div>

          <div className="text-center">

            <div className="text-6xl font-bold text-primary">
              {data.age}
            </div>

            <p className="text-muted-foreground">
              years old
            </p>

          </div>

          <Slider
            value={[data.age]}
            min={10}
            max={100}
            step={1}
            onValueChange={(value) =>
              updateData(
                "age",
                value[0]
              )
            }
          />

        </div>

        <Button
          className="w-full"
          size="lg"
          onClick={() =>
            navigate(
              "/onboarding/measurements"
            )
          }
        >
          Continue
        </Button>

      </div>
    </OnboardingLayout>
  );
}