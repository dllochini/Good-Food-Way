import { useNavigate } from "react-router-dom";

import OnboardingLayout from "@/components/layouts/OnboardingLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DietaryPage() {
  const navigate = useNavigate();

  return (
    <OnboardingLayout
      step={5}
      total={6}
      title="Let's make sure your meals fit you."
      subtitle="Do you have any allergies?"
    >
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="allergies">Separate multiple items with commas.</Label>
          <Input id="allergies" placeholder="e.g. Peanuts, Dairy" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="avoidFoods">
            Are there foods you'd rather avoid?
          </Label>
          <p className="text-sm text-muted-foreground">
            Everyone has foods they simply don't enjoy.
          </p>
          <Input id="avoidFoods" placeholder="e.g. Peanuts, Dairy" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Button
            variant="outline"
            className="h-12"
            onClick={() => navigate("/onboarding/report")}
          >
            Skip for now
          </Button>
          <Button
            className="h-12"
            onClick={() => navigate("/onboarding/report")}
          >
            Continue
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}
