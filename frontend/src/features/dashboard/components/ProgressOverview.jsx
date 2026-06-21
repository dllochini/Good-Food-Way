import CircularProgress from "@/shared/components/CircularProgress";
import { Card } from "@/shared/ui/card";


import {
  Flame,
  Droplets,
  Footprints,
  CheckCircle2,
} from "lucide-react";

export default function ProgressOverview() {
  const caloriesProgress = 67;
  const waterProgress = 75;
  const stepsProgress = 62;

  const overallProgress = Math.round(
    (caloriesProgress +
      waterProgress +
      stepsProgress) /
    3
  );

  const items = [
    {
      icon: Flame,
      label: "Calories",
      value: caloriesProgress,
    },
    {
      icon: Droplets,
      label: "Water",
      value: waterProgress,
    },
    {
      icon: Footprints,
      label: "Steps",
      value: stepsProgress,
    },
  ];

  return (
    <Card className="p-5">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Progress Ring */}

        <div className="flex-shrink-0">
          <CircularProgress
            value={overallProgress}
            size={140}
            strokeWidth={12}
            subLabel="Complete"
          />
        </div>

        {/* Progress Details */}

        <div className="flex-1 w-full">
          <h2 className="text-xl font-bold">
            Today's Progress
          </h2>

          <p className="text-sm text-muted-foreground mt-1">
            You're making great progress
            toward your daily goals.
          </p>

          <div className="mt-5 space-y-4">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>

                    <span className="font-medium">
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-semibold">
                      {item.value}%
                    </span>

                    {item.value >= 70 && (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}