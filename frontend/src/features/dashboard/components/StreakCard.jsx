import { Award, Flame } from "lucide-react";

import { Card } from "@/shared/ui/card";
import { Progress } from "@/shared/ui/progress";

export default function StreakCard() {
  return (
    <Card className="p-5">
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            Current Streak
          </p>

          <div className="flex items-center gap-2 mt-2">
            <Flame className="h-5 w-5 text-orange-500" />

            <h2 className="text-2xl font-bold">
              7 Days
            </h2>
          </div>
        </div>

        <Award className="h-8 w-8 text-primary" />
      </div>

      <div className="mt-5">
        <div className="flex justify-between text-sm mb-2">
          <span>Next Badge</span>
          <span>12 Day Warrior</span>
        </div>

        <Progress value={58} />
      </div>
    </Card>
  );
}