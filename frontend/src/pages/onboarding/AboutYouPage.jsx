import { useState } from "react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "@/components/layouts/OnboardingLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

import { Mars, Venus, User } from "lucide-react";

export default function AboutYouPage() {
  const navigate = useNavigate();

  const [gender, setGender] = useState("Female");
  const [age, setAge] = useState([26]);
  const [height, setHeight] = useState([170]);
  const [weight, setWeight] = useState([60]);

  const genders = [
    {
      label: "Male",
      icon: Mars,
    },
    {
      label: "Female",
      icon: Venus,
    },
    {
      label: "Other",
      icon: User,
    },
  ];

  return (
    <OnboardingLayout
      step={2}
      total={6}
      title="Tell me a bit about yourself"
      subtitle="This helps me personalize your recommendations."
    >
      <div className="space-y-6">
        {/* Gender */}
        <div className="space-y-3">
          <Label>Gender</Label>

          <div className="grid grid-cols-3 gap-3">
            {genders.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                onClick={() => setGender(label)}
                className={`flex h-20 flex-col items-center justify-center rounded-xl border transition-all duration-200 ${
                  gender === label
                    ? "border-primary bg-primary text-primary-foreground shadow-md scale-[1.02]"
                    : "border-border bg-background hover:bg-muted/40"
                }`}
              >
                <Icon className="mb-2 h-5 w-5" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Age */}
        <div className="rounded-xl border bg-card p-4 space-y-4">
          <div className="flex items-center justify-between">
            <Label>Age</Label>

            <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              {age[0]} years
            </div>
          </div>

          <Slider
            value={age}
            onValueChange={setAge}
            min={10}
            max={100}
            step={1}
          />

          <div className="flex justify-between text-xs text-muted-foreground">
            <span>10</span>
            <span>100</span>
          </div>
        </div>

        {/* Height */}
        <div className="rounded-xl border bg-card p-4 space-y-4">
          <div className="flex items-center justify-between">
            <Label>Height</Label>

            <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              {height[0]} cm
            </div>
          </div>

          <Slider
            value={height}
            onValueChange={setHeight}
            min={100}
            max={220}
            step={1}
          />

          <div className="flex justify-between text-xs text-muted-foreground">
            <span>100 cm</span>
            <span>220 cm</span>
          </div>
        </div>

        {/* Weight */}
        <div className="rounded-xl border bg-card p-4 space-y-4">
          <div className="flex items-center justify-between">
            <Label>Weight</Label>

            <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              {weight[0]} kg
            </div>
          </div>

          <Slider
            value={weight}
            onValueChange={setWeight}
            min={20}
            max={200}
            step={1}
          />

          <div className="flex justify-between text-xs text-muted-foreground">
            <span>20 kg</span>
            <span>200 kg</span>
          </div>
        </div>

        <Button
          className="h-12 w-full rounded-xl"
          onClick={() => navigate("/onboarding/activity")}
        >
          Continue
        </Button>
      </div>
    </OnboardingLayout>
  );
}