import { CheckCircle2, Clock3, CookingPot, MapPin, Phone, Truck, UserRound } from "lucide-react";

import BottomNav from "../../components/BottomNav";
import SectionTitle from "../../components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import mapPreview from "../../assets/map-preview.jpg";

export default function MealTrackPage() {
  const steps = [
    { label: "Order placed", time: "11:45 AM", icon: CheckCircle2, done: true },
    { label: "Preparing meal", time: "11:50 AM", icon: CookingPot, done: true },
    { label: "Out for delivery", time: "12:20 PM", icon: Truck, done: true, active: true },
    { label: "Delivered", time: "12:30 PM", icon: CheckCircle2, done: false },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pb-24">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div>
          <h1 className="text-3xl font-bold">Delivery Tracking</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Your lunch is on the way and should arrive soon.
          </p>
        </div>

        <section className="mt-6 overflow-hidden rounded-lg border border-border shadow-[var(--shadow-soft)]">
          <div className="relative h-[240px] w-full">
            <img src={mapPreview} alt="Delivery map" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/18" />

            <div className="absolute left-[58%] top-[45%]">
              <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-foreground shadow-md">
                <Truck className="h-3.5 w-3.5 text-info" />
                Rider
              </div>
            </div>

            <div className="absolute left-[74%] top-[30%]">
              <div className="flex items-center gap-2 rounded-lg bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                <MapPin className="h-3.5 w-3.5" />
                You
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-card p-4">
            <div>
              <p className="text-sm font-semibold">2.4 km away</p>
              <p className="text-xs text-muted-foreground">Estimated arrival: 12:30 PM</p>
            </div>

            <Badge className="h-7 rounded-lg bg-info/10 px-3 text-info">Live tracking</Badge>
          </div>
        </section>

        <Card className="mt-6 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Current status
              </p>
              <h2 className="mt-1 text-lg font-semibold">Out for delivery</h2>

              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock3 size={16} />
                <span>Estimated arrival: 12:30 PM</span>
              </div>
            </div>
            <Badge className="h-7 rounded-lg bg-info/10 px-3 text-info">On time</Badge>
          </div>
        </Card>

        <section className="mt-6">
          <SectionTitle title="Order Progress" />

          <div className="space-y-3">
            {steps.map((step) => {
              const Icon = step.icon;
              const stateClass = step.active
                ? "border-info/30 bg-info/5"
                : step.done
                  ? "border-success/30 bg-success/5"
                  : "border-border bg-card";
              const iconClass = step.active
                ? "bg-info/10 text-info"
                : step.done
                  ? "bg-success/10 text-success"
                  : "bg-muted text-muted-foreground";

              return (
                <div
                  key={step.label}
                  className={`flex items-center justify-between rounded-lg border p-4 shadow-[var(--shadow-soft)] ${stateClass}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`rounded-lg p-3 ${iconClass}`}>
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-semibold">{step.label}</p>
                      <p className="text-sm text-muted-foreground">{step.time}</p>
                    </div>
                  </div>

                  {step.active && <span className="text-xs font-semibold text-info">Live</span>}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-6">
          <SectionTitle title="Delivery Partner" />

          <Card className="p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <UserRound className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold">Kamal Perera</p>
                  <p className="text-sm text-muted-foreground">Delivery partner</p>
                </div>
              </div>

              <Button>
                <Phone className="h-4 w-4" />
                Call
              </Button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} />
              <span>Moving toward your location</span>
            </div>
          </Card>
        </section>
      </div>

      <BottomNav />
    </main>
  );
}
