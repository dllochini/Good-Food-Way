import { ArrowRight, CalendarDays, Minus, Plus, Ruler, Weight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";

export default function AboutYouPage() {
  const navigate = useNavigate();

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState(168);
  const [weight, setWeight] = useState(68);

  const handleHeightChange = (value) => {
    const next = Number(value);
    if (!Number.isNaN(next)) setHeight(next);
  };

  const handleWeightChange = (value) => {
    const next = Number(value);
    if (!Number.isNaN(next)) setWeight(next);
  };

  return (
    <OnboardingLayout
      step={3}
      total={5}
      title="Let's personalize your plan"
      subtitle="A few quick details help us create nutrition targets that fit you."
      onBack={() => navigate("/onboarding/goal")}
    >
      <div className="space-y-5">
        <Card className="border-border/60 bg-muted/30 p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <CalendarDays className="h-5 w-5" />
              </div>

              <div>
                <p className="font-medium">Age</p>
                <p className="text-xs text-muted-foreground">
                  Used to estimate your nutrition needs
                </p>
              </div>
            </div>

            <Input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="h-11 w-24 text-center"
            />
          </div>
        </Card>

        <Card className="border-border/60 bg-muted/30 p-4">
          <div className="space-y-3">
            <div>
              <p className="font-medium">Gender</p>
              <p className="text-xs text-muted-foreground">Optional</p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { value: "female", label: "Female" },
                { value: "male", label: "Male" },
                { value: "prefer-not-to-say", label: "Prefer not to say" },
              ].map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setGender(item.value)}
                  className={`h-12 rounded-lg border px-2 text-sm font-medium transition-all ${
                    gender === item.value
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-background hover:bg-muted"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              label: "Height",
              note: "Current height",
              value: height,
              unit: "cm",
              min: 120,
              max: 220,
              icon: Ruler,
              onChange: handleHeightChange,
              setValue: setHeight,
            },
            {
              label: "Weight",
              note: "Current weight",
              value: weight,
              unit: "kg",
              min: 30,
              max: 150,
              icon: Weight,
              onChange: handleWeightChange,
              setValue: setWeight,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.label} className="border-border/60 bg-muted/30 p-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.note}</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-4xl font-bold">
                      {item.value}
                      <span className="ml-1 text-lg font-medium text-muted-foreground">
                        {item.unit}
                      </span>
                    </p>
                  </div>

                  <input
                    type="range"
                    min={item.min}
                    max={item.max}
                    value={item.value}
                    onChange={(e) => item.onChange(e.target.value)}
                    className="w-full accent-primary"
                  />

                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => item.setValue((prev) => Math.max(item.min, prev - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>

                    <Input
                      type="number"
                      value={item.value}
                      onChange={(e) => item.onChange(e.target.value)}
                      className="w-24 text-center"
                    />

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => item.setValue((prev) => Math.min(item.max, prev + 1))}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="border-primary/20 bg-primary/5 p-4">
          <p className="text-sm">
            Great start. We now have enough information to build nutrition targets tailored to your goals.
          </p>
        </Card>

        <div className="flex gap-3">
          <Button variant="outline" className="h-12 flex-1" onClick={() => navigate("/onboarding/goal")}>
            Back
          </Button>

          <Button disabled={!age} className="h-12 flex-1" onClick={() => navigate("/onboarding/dietary")}>
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}
