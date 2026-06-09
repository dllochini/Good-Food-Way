import { Check, Crown, ShieldCheck, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import OnboardingLayout from "@/components/onboarding/OnboardingLayout";

export default function ChoosePlan() {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Basic",
      price: "LKR 0",
      description: "A simple starter plan with essential meal support.",
      icon: ShieldCheck,
      features: ["Daily meal access", "Basic progress view", "Email support"],
    },
    {
      title: "Premium",
      price: "LKR 2,500",
      description: "Best for personalized meal tracking and guidance.",
      icon: Crown,
      featured: true,
      features: ["Personalized plan", "Delivery tracking", "Weekly report", "Priority support"],
    },
    {
      title: "Family",
      price: "LKR 5,000",
      description: "For multiple users in one household.",
      icon: Users,
      features: ["Up to 4 profiles", "Shared delivery view", "Family dashboard"],
    },
  ];

  return (
    <OnboardingLayout
      step={5}
      total={5}
      title="Choose your plan"
      subtitle="Pick the option that fits how much support you want."
      onBack={() => navigate("/onboarding/report")}
    >
      <div className="space-y-4">
        {plans.map((plan) => {
          const Icon = plan.icon;

          return (
            <Card
              key={plan.title}
              className={`overflow-hidden p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                plan.featured ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <div
                    className={`rounded-lg p-3 ${
                      plan.featured ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">{plan.title}</h3>
                      {plan.featured ? (
                        <Badge className="rounded-full px-2.5 py-0.5">Popular</Badge>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <p className="text-lg font-bold">{plan.price}</p>
              </div>

              <div className="mt-5 space-y-2">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button
                className={`mt-5 h-12 w-full rounded-lg ${
                  plan.featured ? "" : "bg-foreground text-background hover:bg-foreground/90"
                }`}
                onClick={() => navigate("/dashboard")}
              >
                {plan.featured ? "Start Premium" : "Select plan"}
              </Button>
            </Card>
          );
        })}
      </div>
    </OnboardingLayout>
  );
}
