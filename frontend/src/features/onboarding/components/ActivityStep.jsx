import { useNavigate } from "react-router-dom";
import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";

import { useOnboarding } from "../context/OnboardingContext";
import OnboardingLayout from "../layout/OnboardingLayout";

export default function ActivityStep() {
  const navigate = useNavigate();

  const { data, updateData } =
    useOnboarding();

  const activityLevels = [
    {
      title: "Sedentary",
      // icon: "🪑",
      description:
        "Desk job with little exercise",
    },

    {
      title: "Lightly Active",
      // icon: "🚶",
      description:
        "Walking regularly, exercise 1-2 times/week",
    },

    {
      title: "Moderately Active",
      // icon: "🏃",
      description:
        "Exercise 3-5 times/week",
    },

    {
      title: "Highly Active",
      // icon: "🏋️",
      description:
        "Training most days or physical work",
    },
  ];

  return (
    <OnboardingLayout
      step={3}
      totalSteps={9}
      title="How active are you?"
      subtitle="Choose the option that best matches your lifestyle."
    >
      <div className="space-y-3">
        {activityLevels.map(
          (activity) => {
            const selected =
              data.activity ===
              activity.title;

            return (
              <Card
                key={activity.title}
                onClick={() =>
                  updateData(
                    "activity",
                    activity.title
                  )
                }
                className={`cursor-pointer rounded-3xl p-5 transition-all duration-200 ${selected
                  ? "border-2 border-primary bg-primary/10 shadow-md scale-[1.02]"
                  : "border hover:border-primary/40 hover:bg-muted/50"
                  }`}
              >
                <div className="flex items-center gap-4">
                  {/* <div className="text-3xl">
                    {activity.icon}
                  </div> */}

                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {activity.title}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {
                        activity.description
                      }
                    </p>
                  </div>
                </div>
              </Card>
            );
          }
        )}
      </div>

      <Button
        className="mt-8 h-14 w-full rounded-2xl"
        disabled={!data.activity}
        onClick={() =>
          navigate("/onboarding/food")
        }
      >
        Continue
      </Button>
    </OnboardingLayout>
  );
}