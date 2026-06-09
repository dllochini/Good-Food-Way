import { Apple, AlertTriangle, Leaf, MessageSquare, ArrowRight, Plus, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import OptionCard from "@/components/onboarding/OptionCard";

export default function DietaryPage() {
  const navigate = useNavigate();
  const [diet, setDiet] = useState("balanced");
  const [allergies, setAllergies] = useState(["Milk", "Eggs"]);
  const [dislikes, setDislikes] = useState("");

  const allergyOptions = [
    "Milk",
    "Eggs",
    "Peanuts",
    "Tree nuts",
    "Fish",
    "Shellfish",
    "Soy",
    "Wheat",
  ];

  const dietOptions = [
    {
      value: "balanced",
      title: "Balanced",
      description: "A flexible mix of proteins, carbs, and vegetables.",
      icon: Leaf,
    },
    {
      value: "vegetarian",
      title: "Vegetarian",
      description: "Meals without meat or fish.",
      icon: Apple,
    },
    {
      value: "non-vegetarian",
      title: "Non-vegetarian",
      description: "Includes meat, fish, and eggs.",
      icon: MessageSquare,
    },
  ];

  const toggleAllergy = (item) => {
    setAllergies((current) =>
      current.includes(item)
        ? current.filter((x) => x !== item)
        : [...current, item]
    );
  };

  const allergySummary = useMemo(() => {
    if (!allergies.length) return "No allergies selected";
    return allergies.join(", ");
  }, [allergies]);

  return (
    <OnboardingLayout
      step={4}
      total={5}
      title="Food preferences"
      subtitle="Tell us what feels right so your plan is comfortable, personal, and easy to follow."
      onBack={() => navigate("/onboarding/about")}
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-primary" />
            <h3 className="font-semibold">Diet style</h3>
          </div>

          <div className="space-y-3">
            {dietOptions.map((item) => (
              <OptionCard
                key={item.value}
                icon={item.icon}
                title={item.title}
                description={item.description}
                selected={diet === item.value}
                onClick={() => setDiet(item.value)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-primary" />
            <h3 className="font-semibold">Allergies</h3>
          </div>

          <Card className="border-border/60 bg-muted/30 p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Select from common allergies or add your own using the chips below.
                </p>
                <p className="text-sm font-medium leading-relaxed">
                  {allergySummary}
                </p>
              </div>

              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <AlertTriangle className="h-5 w-5" />
              </div>
            </div>
          </Card>

          <div className="flex flex-wrap gap-2">
            {allergyOptions.map((item) => {
              const selected = allergies.includes(item);

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleAllergy(item)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    selected
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-background hover:bg-muted/40"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {selected ? <X className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    {item}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Foods you dislike</label>
          <Input
            className="h-12 rounded-lg"
            placeholder="Example: mushrooms, olives, spicy food"
            value={dislikes}
            onChange={(e) => setDislikes(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Separate items with commas for easy reading.
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="h-12 flex-1 rounded-lg"
            onClick={() => navigate("/onboarding/about")}
          >
            Back
          </Button>
          <Button
            className="h-12 flex-1 rounded-lg"
            onClick={() => navigate("/onboarding/report")}
          >
            Show my plan <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}
