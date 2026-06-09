import {
  ArrowRight,
  CheckCircle2,
  Flame,
  ShieldCheck,
  Sparkles,
  Target,
  Droplets,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function ReportPage() {
  const navigate = useNavigate();

  const reportItems = [
    { label: "Daily energy target", value: "1,700 kcal", icon: Target },
    { label: "Protein target", value: "120 g", icon: Flame },
    { label: "Hydration goal", value: "2.0 L", icon: Droplets },
    { label: "Plan style", value: "Balanced support", icon: ShieldCheck },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-4 py-6 text-foreground">
      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-3xl flex-col justify-center">
        <Card className="overflow-hidden border-border/60 bg-card/95 p-6 shadow-2xl backdrop-blur md:p-8">
          <div className="flex items-center gap-2">
            <Badge className="rounded-full px-3 py-1">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Your starting plan
            </Badge>
          </div>

          <div className="mt-5 space-y-2">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Your nutrition profile is ready
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Based on your answers, here is your starting direction for calories, protein, hydration, and support.
            </p>
          </div>

          <div className="mt-6 rounded-lg brand-gradient p-6 text-primary-foreground shadow-[var(--shadow-lift)]">
            <p className="text-xs uppercase tracking-[0.2em] text-white/80">
              Summary
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {reportItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="rounded-lg bg-white/10 p-4 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-white/15 p-3">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/80">{item.label}</p>
                        <p className="text-lg font-semibold">{item.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card className="border-border/60 p-5 shadow-sm">
              <p className="text-sm text-muted-foreground">Goal progress</p>
              <p className="mt-1 text-2xl font-bold">Good starting point</p>
              <Progress value={68} className="mt-4 h-2.5" />
            </Card>

            <Card className="border-border/60 p-5 shadow-sm">
              <p className="text-sm text-muted-foreground">What you will get</p>
              <p className="mt-1 text-2xl font-bold">Weekly support</p>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Personalized meal plan
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Delivery tracking
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Progress dashboard
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-6 flex gap-3">
            <Button
              variant="outline"
              className="h-12 flex-1 rounded-lg"
              onClick={() => navigate("/onboarding/dietary")}
            >
              Back
            </Button>
            <Button className="h-12 flex-1 rounded-lg" onClick={() => navigate("/chooseplan")}>
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
