import { useState } from "react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Droplets,
  UtensilsCrossed,
  Footprints,
} from "lucide-react";

import WaterDialog from "../dialogs/WaterDialog";
import StepsDialog from "../dialogs/StepsDialog";
import MealDialog from "../dialogs/MealDialog";

export default function QuickLogCard() {
  const [waterOpen, setWaterOpen] = useState(false);
  const [stepsOpen, setStepsOpen] = useState(false);
  const [mealOpen, setMealOpen] = useState(false);

  const [water, setWater] = useState(1.5);
  const [steps, setSteps] = useState(6200);

  return (
    <>
      <Card className="p-5">
        <h3 className="font-semibold text-lg mb-4">
          Quick Log
        </h3>

        <div className="grid grid-cols-3 gap-3">
          <Button
            variant="outline"
            className="h-20 flex-col"
            onClick={() => setWaterOpen(true)}
          >
            <Droplets className="h-5 w-5 mb-2" />
            Water
          </Button>

          <Button
            variant="outline"
            className="h-20 flex-col"
            onClick={() => setMealOpen(true)}
          >
            <UtensilsCrossed className="h-5 w-5 mb-2" />
            Food Scan
          </Button>

          <Button
            variant="outline"
            className="h-20 flex-col"
            onClick={() => setStepsOpen(true)}
          >
            <Footprints className="h-5 w-5 mb-2" />
            Activity
          </Button>
        </div>
      </Card>

      <WaterDialog
        open={waterOpen}
        onOpenChange={setWaterOpen}
        water={water}
        onAddWater={(amount) =>
          setWater((prev) => prev + amount)
        }
      />

      <StepsDialog
        open={stepsOpen}
        onOpenChange={setStepsOpen}
        steps={steps}
        onAddSteps={(amount) =>
          setSteps((prev) => prev + amount)
        }
      />

      <MealDialog
        open={mealOpen}
        onOpenChange={setMealOpen}
      />
    </>
  );
}