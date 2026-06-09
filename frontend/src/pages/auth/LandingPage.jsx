import { Activity, ArrowRight, HeartPulse, Salad, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import foodImg from "@/assets/healthy-food.webp";

export default function Landing() {
  const navigate = useNavigate();

  const highlights = [
    { icon: Salad, label: "Personal meals", text: "Plans matched to goals and preferences." },
    { icon: Activity, label: "Daily tracking", text: "Water, steps, calories, and progress streaks." },
    { icon: Truck, label: "Delivery control", text: "See what is coming and when it arrives." },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={foodImg}
          alt="Fresh healthy meal ingredients"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/54 to-black/20" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 text-white">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white/14 p-2 backdrop-blur">
                <HeartPulse className="h-5 w-5" />
              </div>
              <span className="font-semibold tracking-wide">Good Food Way</span>
            </div>
            <Button
              variant="secondary"
              className="bg-white/12 text-white ring-1 ring-white/20 hover:bg-white/20"
              onClick={() => navigate("/login")}
            >
              Sign in
            </Button>
          </header>

          <div className="flex flex-1 items-center py-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/72">
                Nutrition, fitness, and meal delivery
              </p>
              <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
                Good Food Way
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/82 md:text-lg">
                A friendly health companion for personalized meals, progress tracking,
                delivery updates, and daily streaks that keep people coming back.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" onClick={() => navigate("/register")}>
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-white text-foreground hover:bg-white/90"
                  onClick={() => navigate("/dashboard")}
                >
                  Preview app
                </Button>
              </div>
            </div>
          </div>

          <div className="grid gap-3 pb-4 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-lg bg-white/12 p-4 backdrop-blur">
                  <Icon className="h-5 w-5" />
                  <p className="mt-3 font-semibold">{item.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/72">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
