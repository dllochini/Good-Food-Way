import PageHeader from "@/components/common/PageHeader";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Bell,
  Bot,
  Sparkles,
} from "lucide-react";

import ProgressOverview from "./components/ProgressOverview";
import QuickLogCard from "./components/QuickLogCard";
import MealHeroCard from "./components/MealHeroCard";
import DietitianSupportCard from "./components/DietitianSupportCard";
import StreakCard from "./components/StreakCard";
import SupportFab from "../../components/common/SupportFab";

export default function Dashboard() {

  return (
    <>
      <section className="flex items-start justify-between">
        <div>
          <Badge
            variant="secondary"
            className="mb-2"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            Wellness Dashboard
          </Badge>

          <PageHeader
            title="Good Morning, Lochini 👋"
            subtitle="Your health summary for today"
            showBack={false}
          />
        </div>

        <Button
          size="icon"
          variant="secondary"
        >
          <Bell size={18} />
        </Button>
      </section>

      <MealHeroCard />

      <ProgressOverview />

      <QuickLogCard />

      <DietitianSupportCard />

      <StreakCard />
    </>
  );
}