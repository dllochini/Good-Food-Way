import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";

import OnboardingLayout from "../layout/OnboardingLayout";
import { useOnboarding } from "../context/OnboardingContext";
import { getDietPreferences } from "@/features/onboarding/api/onboarding";

export default function FoodPreferenceStep() {

  const navigate = useNavigate();

  const { data, updateData } = useOnboarding();

  const [foodOptions, setFoodOptions] = useState([]);

  useEffect(() => {

    const loadPreferences = async () => {
      const result = await getDietPreferences();

      setFoodOptions(result);
    };

    loadPreferences();

  }, []);


  const handleSkip = () => {

    updateData(
      "foodType",
      "No Preference"
    );

    navigate(
      "/onboarding/preferences"
    );
  };


  return (
    <OnboardingLayout
      step={4}
      totalSteps={9}
      title="Food preferences"
      subtitle="Let's tailor meals to your preferences."
    >

      <div className="space-y-4">

        {foodOptions.map((food) => {

          const selected =
            data.foodType === food.dietType;


          return (

            <Card
              key={food.id}
              onClick={() =>
                updateData(
                  "foodType",
                  food.dietType
                )
              }

              className={`cursor-pointer rounded-3xl p-5 transition-all duration-200 ${
                selected
                  ? "border-2 border-primary bg-primary/10 shadow-md scale-[1.02]"
                  : "border hover:border-primary/40 hover:bg-muted/50"
              }`}
            >

              <div className="flex items-center gap-4">


                <div className="flex-1">

                  <h3 className="font-semibold">
                    {food.dietType}
                  </h3>

                </div>


              </div>


            </Card>

          );

        })}


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
        disabled={!data.foodType}
        onClick={() =>
          navigate(
            "/onboarding/preferences"
          )
        }
      >
        Continue
      </Button>


    </OnboardingLayout>
  );
}