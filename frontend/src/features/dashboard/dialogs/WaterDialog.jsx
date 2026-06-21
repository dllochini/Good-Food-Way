import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Progress } from "@/shared/ui/progress";

import { Droplets } from "lucide-react";
import { useState } from "react";

export default function WaterDialog({
  open,
  onOpenChange,
  water,
  goal = 2,
  onAddWater,
}) {
  const [customAmount, setCustomAmount] = useState("");

  const progress = (water / goal) * 100;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Log Water Intake
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          <div className="text-center">
            <Droplets className="h-10 w-10 mx-auto text-blue-500 mb-2" />

            <h3 className="text-2xl font-bold">
              {water.toFixed(1)}L
            </h3>

            <p className="text-sm text-muted-foreground">
              Goal: {goal}L
            </p>
          </div>

          <Progress value={progress} />

          <div className="grid grid-cols-2 gap-3">
            {[250, 500, 750, 1000].map((amount) => (
              <Button
                key={amount}
                variant="outline"
                onClick={() => {
                  onAddWater(amount / 1000);
                  onOpenChange(false);
                }}
              >
                +{amount}ml
              </Button>
            ))}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Custom Amount (ml)
            </label>

            <Input
              type="number"
              placeholder="e.g. 350"
              value={customAmount}
              onChange={(e) =>
                setCustomAmount(e.target.value)
              }
            />

            <Button
              className="w-full"
              onClick={() => {
                if (!customAmount) return;

                onAddWater(
                  Number(customAmount) / 1000
                );

                setCustomAmount("");
                onOpenChange(false);
              }}
            >
              Add Water
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}