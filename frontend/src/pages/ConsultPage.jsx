import { Bot, CalendarClock, MessageCircle, Video } from "lucide-react";

import BottomNav from "../components/BottomNav";
import SectionTitle from "../components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ConsultPage() {
  const options = [
    {
      icon: Bot,
      title: "Dietitian chatbot",
      desc: "Ask about allergies, meal swaps, macros, and daily goals.",
      action: "Start chat",
      primary: true,
    },
    {
      icon: Video,
      title: "30-minute video call",
      desc: "Book a focused session to review goals, reports, and meal fit.",
      action: "View sessions",
    },
    {
      icon: MessageCircle,
      title: "Delivery support",
      desc: "Get help with timing, address changes, and account access.",
      action: "Open support",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pb-24">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div>
          <h1 className="text-3xl font-bold">Consult</h1>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            Get help from nutrition support, book a call, or resolve delivery questions.
          </p>
        </div>

        <Card className="mt-6 p-5 brand-gradient text-primary-foreground">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Badge className="h-7 rounded-lg bg-white/16 px-3 text-white ring-1 ring-white/20">
                <CalendarClock className="h-3.5 w-3.5" />
                Next available today
              </Badge>
              <h2 className="mt-3 text-2xl font-bold">Need a meal decision quickly?</h2>
              <p className="mt-2 max-w-xl text-sm opacity-85">
                Chat support is best for meal swaps and quick delivery questions.
              </p>
            </div>
            <Button className="bg-white text-foreground hover:bg-white/90">Start chat</Button>
          </div>
        </Card>

        <section className="mt-6">
          <SectionTitle title="Support Options" />

          <div className="grid gap-4 md:grid-cols-3">
            {options.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="focus-lift p-5">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary w-fit">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>

                  <Button variant={item.primary ? "default" : "outline"} className="mt-5 w-full">
                    {item.action}
                  </Button>
                </Card>
              );
            })}
          </div>
        </section>
      </div>

      <BottomNav />
    </main>
  );
}
