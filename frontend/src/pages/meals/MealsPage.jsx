import { CalendarDays, CheckCircle2, Clock3, Moon, Sun, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

import BottomNav from "../../components/BottomNav";
import SectionTitle from "../../components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MealsPage() {
  const navigate = useNavigate();

  const meals = [
    { name: "Breakfast", time: "7:30 AM", status: "Completed", icon: Sun, statusType: "done" },
    { name: "Lunch", time: "12:30 PM", status: "Out for delivery", icon: Truck, statusType: "delivery" },
    { name: "Dinner", time: "7:00 PM", status: "Scheduled", icon: Moon, statusType: "pending" },
  ];

  const statusStyles = {
    done: "text-success bg-success/10",
    delivery: "text-info bg-info/10",
    pending: "text-muted-foreground bg-muted",
  };

  return (
    <main className="min-h-screen bg-background text-foreground pb-24">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Meals</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Track your daily meals, nutrition timing, and delivery status.
            </p>
          </div>
          <Button variant="secondary" className="shrink-0">
            <CalendarDays className="h-4 w-4" />
            Today
          </Button>
        </div>

        <Card className="mt-6 p-5 brand-gradient text-primary-foreground">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] opacity-80">Next meal</p>
              <h2 className="mt-2 text-2xl font-bold">Lunch - Grilled Chicken Bowl</h2>
              <div className="mt-2 flex items-center gap-2 text-sm opacity-85">
                <Truck size={16} />
                <span>Arriving at 12:30 PM</span>
              </div>
            </div>

            <Button className="bg-white text-foreground hover:bg-white/90" onClick={() => navigate("/mealtrack")}>
              Track delivery
            </Button>
          </div>
        </Card>

        <section className="mt-6">
          <SectionTitle title="Today's Meals" />

          <div className="space-y-3">
            {meals.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.name} className="focus-lift p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.time}</p>
                      </div>
                    </div>

                    <Badge className={`h-7 rounded-lg px-3 ${statusStyles[item.statusType]}`}>
                      {item.statusType === "done" && <CheckCircle2 size={14} />}
                      {item.statusType === "delivery" && <Truck size={14} />}
                      {item.statusType === "pending" && <Clock3 size={14} />}
                      <span>{item.status}</span>
                    </Badge>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mt-6">
          <SectionTitle title="Weekly Meal Plan" />

          <div className="grid gap-3 md:grid-cols-3">
            {["Monday", "Tuesday", "Wednesday"].map((day) => (
              <Card key={day} className="focus-lift p-4">
                <p className="font-semibold">{day}</p>

                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <p>Breakfast: Oats and fruit</p>
                  <p>Lunch: Rice bowl</p>
                  <p>Dinner: Light soup</p>
                </div>

                <button className="mt-4 text-sm font-semibold text-primary hover:underline" type="button">
                  View full plan
                </button>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <BottomNav />
    </main>
  );
}
