import { Mail, Lock, UserRound, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";

export default function SignupPage() {
  const navigate = useNavigate();

  const benefits = [
    "Save your progress",
    "Get a personalized plan",
    "Track meals and goals later",
  ];

  return (
    <OnboardingLayout
      step={1}
      total={5}
      title="Welcome to Good Food Way"
      subtitle="Let's create your profile and build a meal plan that fits your lifestyle."
    >
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative">
            <UserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="h-12 rounded-lg pl-10" placeholder="First name" />
          </div>

          <div className="relative">
            <UserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="h-12 rounded-lg pl-10" placeholder="Last name" />
          </div>
        </div>

        <div className="relative">
          <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="h-12 rounded-lg pl-10" placeholder="Email address" type="email" />
        </div>

        <div className="relative">
          <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="h-12 rounded-lg pl-10" placeholder="Create password" type="password" />
        </div>
      </div>

      <Card className="mt-5 border-border/60 bg-muted/30 p-4">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-primary/10 p-3 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Quick and secure</p>
            <p className="text-sm text-muted-foreground">
              This only takes about a minute, and you can update your details later.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm"
            >
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button
          className="h-12 flex-1 rounded-lg"
          onClick={() => navigate("/onboarding/goal")}
        >
          Build my plan <Sparkles className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </OnboardingLayout>
  );
}
