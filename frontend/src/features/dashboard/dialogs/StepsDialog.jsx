import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Progress } from "@/shared/ui/progress";

import {
  Footprints,
  Smartphone,
} from "lucide-react";

export default function StepsDialog({
  open,
  onOpenChange,
  steps,
  goal = 10000,
  onAddSteps,
}) {
  const [customSteps, setCustomSteps] =
    useState("");

  const remaining = Math.max(
    goal - steps,
    0
  );

  const handleCustomAdd = () => {
    const value = Number(customSteps);

    if (!value || value <= 0) return;

    onAddSteps(value);
    setCustomSteps("");
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Activity Tracking
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          <div className="text-center">
            <Footprints className="h-10 w-10 mx-auto text-green-500 mb-2" />

            <h3 className="text-3xl font-bold">
              {steps.toLocaleString()}
            </h3>

            <p className="text-muted-foreground">
              steps today
            </p>
          </div>

          <Progress
            value={(steps / goal) * 100}
          />

          <div className="rounded-xl border p-4">
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />

              <span className="font-medium">
                Smartwatch Integration
              </span>
            </div>

            <p className="text-sm text-muted-foreground mt-2">
              Connected • Last synced 10:25 AM
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Button
              variant="outline"
              onClick={() => onAddSteps(500)}
            >
              +500
            </Button>

            <Button
              variant="outline"
              onClick={() => onAddSteps(1000)}
            >
              +1000
            </Button>

            <Button
              variant="outline"
              onClick={() => onAddSteps(2000)}
            >
              +2000
            </Button>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium">
              Add Custom Steps
            </label>

            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Enter steps"
                value={customSteps}
                onChange={(e) =>
                  setCustomSteps(e.target.value)
                }
              />

              <Button
                onClick={handleCustomAdd}
              >
                Add
              </Button>
            </div>
          </div>

          <div className="rounded-xl bg-muted p-4">
            <p className="text-sm text-muted-foreground">
              Remaining to Goal
            </p>

            <p className="text-2xl font-bold">
              {remaining.toLocaleString()}
            </p>

            <p className="text-xs text-muted-foreground mt-1">
              out of {goal.toLocaleString()} steps
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}