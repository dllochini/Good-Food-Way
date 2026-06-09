import {
  Bell,
  Bot,
  CheckCircle2,
  Droplets,
  Dumbbell,
  Flame,
  Footprints,
  Scale,
  Sparkles,
  Target,
  Truck,
  Utensils,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import foodImg from "../assets/grilled-chicken-and-veggie-rice-bowl.jpg";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar } from "@/components/ui/avatar";

import BottomNav from "../components/BottomNav";

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    { icon: Scale, label: "Weight", value: "68.4kg" },
    { icon: Dumbbell, label: "Protein", value: "82g" },
    { icon: Footprints, label: "Steps", value: "6200" },
    { icon: Droplets, label: "Water", value: "1.5L" },
  ];

  const missions = [
    { label: "Drink 500ml water", done: true },
    { label: "Walk 3,800 steps", done: false },
    { label: "Log dinner after delivery", done: false },
  ];

  const progress = [
    { label: "Calories", value: 67, text: "1200 / 1800" },
    { label: "Water", value: 75, text: "1.5 / 2L" },
    { label: "Steps", value: 62, text: "6200 / 10000" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pb-28">

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">

        {/* HEADER */}
        <section className="flex items-start justify-between">
          <div>
            <Badge variant="secondary" className="mb-2">
              <Sparkles className="w-3 h-3 mr-1" />
              Wellness Dashboard
            </Badge>

            <h1 className="text-2xl md:text-3xl font-bold">
              Good Morning, Lochini 👋
            </h1>

            <p className="text-sm text-muted-foreground mt-1">
              Your health summary for today
            </p>
          </div>

          <div className="flex gap-2">
            <Button size="icon" variant="secondary">
              <Bell size={18} />
            </Button>

            <Avatar className="bg-secondary h-10 w-10" />
          </div>
        </section>

        {/* MEAL HERO */}

        <Card className="relative overflow-hidden border-none p-0">

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${foodImg})`,
            }}
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="relative min-h-[190px] p-5 text-white flex flex-col justify-between">

            <div className="flex gap-2 flex-wrap">

              <Badge className="bg-white/20 backdrop-blur border-none text-white">

                <Truck className="w-3 h-3 mr-1" />

                Arriving 12:30 PM

              </Badge>

              <Badge className="bg-white/20 backdrop-blur border-none text-white">
                420 kcal
              </Badge>

            </div>

            <div>

              <p className="text-xs uppercase tracking-widest text-white/70">
                Next Meal
              </p>

              <h2 className="text-2xl font-bold mt-2">
                Grilled Chicken Bowl
              </h2>

              <p className="text-sm mt-2 text-white/80">
                Lean protein, vegetables and rice for steady energy.
              </p>

              <div className="flex gap-2 mt-4">

                <Button
                  variant="secondary"
                  onClick={() => navigate("/mealdetail")}
                >
                  <Utensils className="h-4 w-4 mr-2" />
                  View Meal
                </Button>

                <Button
                  variant="outline"
                  className="bg-white text-black hover:bg-white/90"
                  onClick={() => navigate("/mealtrack")}
                >
                  Track
                </Button>

              </div>

            </div>

          </div>

        </Card>

        {/* STATS */}
        <section>

          <h2 className="font-semibold mb-3">
            Daily Snapshot
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.label}
                  className="p-4 flex items-center gap-3 hover:shadow-md transition"
                >
                  <div className="p-2 rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>

                    <p className="font-bold">
                      {item.value}
                    </p>
                  </div>
                </Card>
              );
            })}

          </div>
        </section>

        {/* STREAK */}

        <Card className="relative overflow-hidden p-5">

          <div className="absolute top-0 right-0 opacity-10">
            <Flame size={100} />
          </div>

          <p className="text-sm text-muted-foreground">
            Current Streak
          </p>

          <div className="flex items-center gap-2 mt-2">

            <Flame className="h-6 w-6 text-orange-500" />

            <h2 className="text-3xl font-bold">
              7 Days
            </h2>

          </div>

          <p className="text-sm text-muted-foreground mt-2">
            You're building consistency 🔥
          </p>

        </Card>

        {/* PROGRESS */}

        <Card className="p-5">

          <div className="mb-5">

            <h3 className="font-semibold text-lg">
              Today's Progress
            </h3>

            <p className="text-sm text-muted-foreground">
              Keep going, you're doing well.
            </p>

          </div>

          <div className="space-y-5">

            {progress.map((item) => (

              <div key={item.label}>

                <div className="flex justify-between mb-2 text-sm">

                  <span>{item.label}</span>

                  <span className="text-muted-foreground">
                    {item.text}
                  </span>

                </div>

                <Progress value={item.value} />

              </div>

            ))}


          </div>

        </Card>

        {/* TASKS */}

        <Card className="p-5">

          <div className="flex justify-between mb-4">

            <h3 className="font-semibold">
              Today's Tasks
            </h3>

            <Target className="h-5 w-5 text-primary" />

          </div>

          <div className="space-y-3">

            {missions.map((m) => (

              <Button
                key={m.label}
                variant={m.done ? "secondary" : "outline"}
                className="w-full justify-start h-auto py-3"
              >
                {m.done ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                ) : (
                  <div className="h-5 w-5 rounded-full border mr-3" />
                )}

                <span
                  className={
                    m.done
                      ? "line-through text-muted-foreground"
                      : ""
                  }
                >
                  {m.label}
                </span>

              </Button>

            ))}

          </div>

        </Card>

        {/* AI COACH */}

        <Card className="p-5 bg-primary/5 border-primary/20">

          <div className="flex gap-4">

            <div className="p-3 rounded-xl bg-primary/10">
              <Bot className="h-5 w-5 text-primary" />
            </div>

            <div>

              <h3 className="font-semibold">
                AI Coach
              </h3>

              <p className="text-sm text-muted-foreground mt-1">
                "You're slightly below your water goal today.
                Drink 500ml before lunch."
              </p>

            </div>

          </div>

          <Button className="w-full mt-5">
            Open Chat
          </Button>

        </Card>

      </div>

      <BottomNav />

    </main>
  );
}