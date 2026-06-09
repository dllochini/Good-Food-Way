import BottomNav from "../../components/BottomNav";

import ProgressHero from "./ProgressHero";
import DailyGoalsCard from "./DailyGoalsCard";
import NutritionBreakdownCard from "./NutritionBreakdownCard";
import MealAdherenceCard from "./MealAdherenceCard";
import WeightTrendCard from "./WeightTrendCard";
import ActivityTrendCard from "./ActivityTrendCard";
import InsightsCard from "./InsightsCard";

export default function TrackPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">

        <ProgressHero />

        <DailyGoalsCard />

        <div className="grid gap-6 lg:grid-cols-2">
          <NutritionBreakdownCard />
          <MealAdherenceCard />
        </div>

        <WeightTrendCard />

        <ActivityTrendCard />

        <InsightsCard />

      </div>

      <BottomNav />
    </main>
  );
}