import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Camera,
  Upload,
} from "lucide-react";

export default function MealDialog({
  open,
  onOpenChange,
}) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Food Scan
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          <Badge>
            AI Food Recognition
          </Badge>

          <div>
            <label className="text-sm font-medium">
              Meal Type
            </label>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <Button variant="outline">
                Breakfast
              </Button>

              <Button variant="ghost">
                Lunch
              </Button>

              <Button variant="ghost">
                Dinner
              </Button>

              <Button variant="outline">
                Snack
              </Button>

              <Button variant="outline">
                Dessert
              </Button>

              <Button variant="outline">
                Other
              </Button>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full justify-start"
          >
            <Camera className="mr-2 h-4 w-4" />
            Take Photo
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Image
          </Button>

          <div className="rounded-xl bg-muted p-4">
            <p className="font-medium">
              How it works
            </p>

            <p className="text-sm text-muted-foreground mt-2">
              Upload a food photo and AI will
              estimate calories, protein,
              carbohydrates and fats before
              saving it to your daily intake.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}