import { useNavigate } from "react-router-dom";

import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

import { ShieldAlert, Ban } from "lucide-react";

import { useOnboarding } from "../context/OnboardingContext";
import OnboardingLayout from "../layout/OnboardingLayout";


export default function PreferencesStep() {
  const navigate = useNavigate();

  const { data, updateData } =
    useOnboarding();


  const handleContinue = () => {
    navigate("/onboarding/generating");
  };


  const handleSkip = () => {
    updateData("allergies", "");
    updateData("dislikes", "");

    navigate("/onboarding/generating");
  };


  return (
    <OnboardingLayout
      step={5}
      totalSteps={9}
      title="Any final details?"
      subtitle="This helps us personalize your meal plan."
    >

      <div className="space-y-4">


        <Card className="rounded-3xl p-5">
          <div className="mb-4 flex items-center gap-3">

            <div className="rounded-2xl bg-primary/10 p-3">
              <ShieldAlert className="h-5 w-5 text-primary" />
            </div>

            <div>
              <h3 className="font-semibold">
                Allergies
              </h3>

              <p className="text-sm text-muted-foreground">
                Anything we should avoid?
              </p>
            </div>

          </div>


          <Input
            placeholder="e.g. peanuts, dairy"
            value={data.allergies}
            onChange={(e) =>
              updateData(
                "allergies",
                e.target.value
              )
            }
            className="h-12 rounded-xl"
          />

        </Card>

        <Card className="rounded-3xl p-5">

          <div className="mb-4 flex items-center gap-3">

            <div className="rounded-2xl bg-primary/10 p-3">
              <Ban className="h-5 w-5 text-primary" />
            </div>


            <div>
              <h3 className="font-semibold">
                Foods to avoid
              </h3>

              <p className="text-sm text-muted-foreground">
                Things you don't like eating?
              </p>
            </div>

          </div>


          <Input
            placeholder="e.g. mushrooms, olives"
            value={data.dislikes}
            onChange={(e) =>
              updateData(
                "dislikes",
                e.target.value
              )
            }
            className="h-12 rounded-xl"
          />

        </Card>

        <Button
          variant="ghost"
          className="w-full rounded-2xl"
          onClick={handleSkip}
        >
          Skip for now
        </Button>


      </div>

      <Button
        className="mt-4 h-14 w-full rounded-2xl"
        onClick={handleContinue}
      >
        Create My Plan
      </Button>

    </OnboardingLayout>
  );
}