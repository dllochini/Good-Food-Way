import { useState } from "react";

import {
  Target,
  Trophy,
} from "lucide-react";

import CircularProgress from "../../../shared/components/CircularProgress";
import PageHeader from "@/shared/components/PageHeader";

import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";

export default function TrackPage() {
  const [period, setPeriod] = useState("daily");

  const stats = {
    daily: {
      calories: { value: 67, amount: "1200 / 1800 kcal" },
      protein: { value: 58, amount: "70 / 120g" },
      water: { value: 75, amount: "1.5 / 2L" },
      steps: { value: 62, amount: "6200 / 10000" },
    },

    weekly: {
      calories: { value: 81, amount: "1750 avg" },
      protein: { value: 85, amount: "102g avg" },
      water: { value: 95, amount: "1.9L avg" },
      steps: { value: 84, amount: "8400 avg" },
    },

    monthly: {
      calories: { value: 84, amount: "1680 avg" },
      protein: { value: 92, amount: "110g avg" },
      water: { value: 100, amount: "2.1L avg" },
      steps: { value: 91, amount: "9100 avg" },
    },
  };

  const current = stats[period];

  return (
    <>
      <PageHeader
        title="Progress Tracking"
        subtitle="Monitor your nutrition and wellness goals."
        showBack={false}
      />

      <Card className="p-5">
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant={period === "daily" ? "default" : "outline"}
            onClick={() => setPeriod("daily")}
          >
            Daily
          </Button>

          <Button
            size="sm"
            variant={period === "weekly" ? "default" : "outline"}
            onClick={() => setPeriod("weekly")}
          >
            Weekly
          </Button>

          <Button
            size="sm"
            variant={period === "monthly" ? "default" : "outline"}
            onClick={() => setPeriod("monthly")}
          >
            Monthly
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold text-lg mb-6">
          Progress Overview
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <CircularProgress
            value={current.calories.value}
            label="Calories"
            amount={current.calories.amount}
          />

          <CircularProgress
            value={current.protein.value}
            label="Protein"
            amount={current.protein.amount}
          />

          <CircularProgress
            value={current.water.value}
            label="Water"
            amount={current.water.amount}
          />

          <CircularProgress
            value={current.steps.value}
            label="Steps"
            amount={current.steps.amount}
          />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-5">
          <Trophy className="h-5 w-5 text-primary" />

          <h2 className="font-semibold text-lg">
            Achievements
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl border p-4">
            <p className="text-xs text-muted-foreground">
              Weight Lost
            </p>

            <p className="text-2xl font-bold mt-2">
              -3.6kg
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-xs text-muted-foreground">
              Best Streak
            </p>

            <p className="text-2xl font-bold mt-2">
              12 Days
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-xs text-muted-foreground">
              Goal Completion
            </p>

            <p className="text-2xl font-bold mt-2">
              84%
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-xs text-muted-foreground">
              Protein Gain
            </p>

            <p className="text-2xl font-bold mt-2">
              +15%
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-start gap-3">
          <Target className="h-5 w-5 text-primary mt-0.5" />

          <div>
            <h3 className="font-medium">
              Progress Insight
            </h3>

            <p className="text-sm text-muted-foreground mt-2">
              Great progress this month. You've maintained a
              12-day streak, improved hydration consistency,
              and are steadily moving toward your wellness goals.
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}
