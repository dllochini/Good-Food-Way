import { ArrowLeft, Beef, CheckCircle2, Clock3, Droplets, Flame, Truck, Wheat } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

import foodImg from "../../assets/grilled-chicken-and-veggie-rice-bowl.jpg";

export default function MealDetailPage() {
  const navigate = useNavigate();

  const nutrition = [
    { icon: Flame, value: "420", label: "kcal", tone: "text-accent bg-accent/10" },
    { icon: Beef, value: "32g", label: "protein", tone: "text-primary bg-primary/10" },
    { icon: Wheat, value: "45g", label: "carbs", tone: "text-warning bg-warning/10" },
    { icon: Droplets, value: "8g", label: "fat", tone: "text-info bg-info/10" },
  ];

  const ingredients = [
    "Grilled chicken breast",
    "Steamed basmati rice",
    "Mixed vegetables",
    "Light herb seasoning",
    "Olive oil dressing",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pb-24">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="icon" onClick={() => navigate(-1)} aria-label="Go back">
            <ArrowLeft size={18} />
          </Button>

          <div>
            <h1 className="text-xl font-bold">Meal Details</h1>
            <p className="text-sm text-muted-foreground">Lunch delivery information</p>
          </div>
        </div>

        <Card className="mt-5 overflow-hidden border-none p-0">
          <div className="relative h-[280px] w-full">
            <img src={foodImg} alt="Grilled chicken and rice bowl" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/16 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <Badge className="h-7 rounded-lg bg-white/18 px-3 text-white ring-1 ring-white/20 backdrop-blur">
                Out for delivery
              </Badge>
              <h2 className="mt-3 text-3xl font-bold">Grilled Chicken and Rice Bowl</h2>
              <div className="mt-2 flex items-center gap-2 text-sm text-white/85">
                <Truck size={16} />
                <span>Arriving at 12:30 PM</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="mt-5 p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Clock3 className="text-primary" />
              <span className="font-semibold">Live status</span>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-info">
              <CheckCircle2 size={16} />
              On the way
            </div>
          </div>

          <Progress value={70} className="mt-4 h-2.5" />

          <p className="mt-2 text-sm text-muted-foreground">
            Your meal is being delivered to your saved location.
          </p>
        </Card>

        <section className="mt-6">
          <h3 className="mb-3 font-semibold">Nutrition Info</h3>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {nutrition.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="p-4 text-center">
                  <div className={`mx-auto inline-flex rounded-lg p-2 ${item.tone}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-2 font-bold">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mt-6">
          <h3 className="mb-3 font-semibold">What's Inside</h3>

          <Card className="p-4">
            <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {ingredients.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="mt-6">
          <h3 className="mb-3 font-semibold">Delivery Info</h3>

          <Card className="p-4 text-sm">
            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <p className="text-muted-foreground">Status</p>
                <p className="mt-1 font-semibold">Out for delivery</p>
              </div>
              <div>
                <p className="text-muted-foreground">ETA</p>
                <p className="mt-1 font-semibold">12:30 PM</p>
              </div>
              <div>
                <p className="text-muted-foreground">Delivery fee</p>
                <p className="mt-1 font-semibold">Free</p>
              </div>
            </div>
          </Card>
        </section>

        <div className="mt-6">
          <Button className="w-full" onClick={() => navigate("/mealtrack")}>
            <Truck className="h-4 w-4" />
            Track delivery
          </Button>
        </div>
      </div>
    </main>
  );
}
