import {
  Truck,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";

import foodImg from "@/assets/grilled-chicken-and-veggie-rice-bowl.jpg";

export default function MealHeroCard() {
  const navigate = useNavigate();

  // Mock data (replace with API data later)
  const meal = {
    type: "Lunch",
    name: "Grilled Chicken Bowl",
    calories: 420,
    eta: "12:30 PM",
    status: "delivery", // preparing | delivery | delivered | completed
    description:
      "Lean protein, vegetables and rice.",
    image: foodImg,
  };

  const getStatusBadge = () => {
    switch (meal.status) {
      case "preparing":
        return (
          <Badge className="bg-yellow-500/20 text-white border-none">
            <Clock3 className="h-3 w-3 mr-1" />
            Preparing
          </Badge>
        );

      case "delivery":
        return (
          <Badge className="bg-orange-500/20 text-white border-none">
            <Truck className="h-3 w-3 mr-1" />
            Out for Delivery
          </Badge>
        );

      case "delivered":
        return (
          <Badge className="bg-green-500/20 text-white border-none">
            Delivered
          </Badge>
        );

      case "completed":
        return (
          <Badge className="bg-green-500/20 text-white border-none">
            Completed
          </Badge>
        );

      default:
        return null;
    }
  };

  return (
    <Card
      onClick={() => navigate("/mealdetail")}
      className="relative overflow-hidden border-none p-0 cursor-pointer min-h-[260px] transition-transform hover:scale-[1.01]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${meal.image})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative flex flex-col justify-between min-h-[260px] p-6 text-white">
        <div>
          <div className="flex flex-wrap gap-2">
            {getStatusBadge()}

            <Badge className="bg-white/20 text-white border-none">
              {meal.calories} kcal
            </Badge>
          </div>

          <p className="mt-5 text-xs uppercase tracking-widest text-white/70">
            Today's {meal.type}
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight">
            {meal.name}
          </h2>

          <p className="mt-2 text-sm text-white/80 max-w-xs">
            {meal.description}
          </p>

          {meal.status === "delivery" && (
            <p className="mt-4 text-sm font-medium">
              Arriving at {meal.eta}
            </p>
          )}

          {meal.status === "delivered" && (
            <p className="mt-4 text-sm font-medium">
              Delivered and ready to enjoy
            </p>
          )}

          {meal.status === "completed" && (
            <p className="mt-4 text-sm font-medium text-green-200">
              ✓ Meal completed • {meal.calories} kcal added
            </p>
          )}
        </div>

        {/* Actions */}
        {meal.status !== "completed" && (
          <div
            className="flex gap-3 mt-6"
            onClick={(e) => e.stopPropagation()}
          >
            {(meal.status === "preparing" ||
              meal.status === "delivery") && (
              <Button
                variant="secondary"
                onClick={() =>
                  navigate("/track")
                }
              >
                <Truck className="h-4 w-4 mr-2" />
                Track Order
              </Button>
            )}

            {meal.status === "delivered" && (
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                I've Had It
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}