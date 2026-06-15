import { useNavigate } from "react-router-dom";

import OnboardingLayout from "@/old/OnboardingLayout";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

import { useOnboarding } from "@/old/context/OnboardingContext";

export default function MeasurementsPage() {
  const navigate = useNavigate();

  const { data, updateData } =
    useOnboarding();

  return (
    <OnboardingLayout
      step={3}
      total={5}
      title="Your measurements"
    >
      <div className="space-y-8">

        <div>

          <div className="mb-2 text-center">
            <div className="text-5xl font-bold text-primary">
              {data.height}
            </div>

            <p className="text-muted-foreground">
              cm
            </p>
          </div>

          <Slider
            value={[data.height]}
            min={100}
            max={220}
            step={1}
            onValueChange={(value) =>
              updateData(
                "height",
                value[0]
              )
            }
          />

        </div>

        <div>

          <div className="mb-2 text-center">
            <div className="text-5xl font-bold text-primary">
              {data.weight}
            </div>

            <p className="text-muted-foreground">
              kg
            </p>
          </div>

          <Slider
            value={[data.weight]}
            min={20}
            max={200}
            step={1}
            onValueChange={(value) =>
              updateData(
                "weight",
                value[0]
              )
            }
          />

        </div>

        <Button
          size="lg"
          className="w-full"
          onClick={() =>
            navigate(
              "/onboarding/activity"
            )
          }
        >
          Continue
        </Button>

      </div>
    </OnboardingLayout>
  );
}