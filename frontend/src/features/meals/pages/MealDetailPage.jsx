import {
  Beef,
  CheckCircle2,
  Clock3,
  Droplets,
  Flame,
  Truck,
  TruckIcon,
  Wheat,
} from "lucide-react";

import PageHeader from "@/shared/components/PageHeader";
import { Badge } from "@/shared/ui/badge";
import { Card } from "@/shared/ui/card";
import { Progress } from "@/shared/ui/progress";

import foodImg from "@/shared/assets/grilled-chicken-and-veggie-rice-bowl.jpg";
import { Button } from "@/shared/ui/button";
import { useNavigate } from "react-router-dom";

const meal = {
  title: "Grilled Chicken & Rice Bowl",
  pageTitle: "Today's Lunch",
  description: "Balanced meal with protein, carbs and fresh vegetables.",
  status: "Out for delivery",
  arrivalTime: "12:30 PM",
  deliveryStatus: "On the way",
  deliveryProgress: 70,
  deliveryNote: "Your meal is being prepared and is on its way to your location.",
  deliveryFee: "Free delivery",
};

const nutritionItems = [
  {
    icon: Flame,
    value: "420",
    label: "Calories",
    tone: "bg-accent/10 text-accent",
  },
  {
    icon: Beef,
    value: "32g",
    label: "Protein",
    tone: "bg-primary/10 text-primary",
  },
  {
    icon: Wheat,
    value: "45g",
    label: "Carbs",
    tone: "bg-warning/10 text-warning",
  },
  {
    icon: Droplets,
    value: "8g",
    label: "Fat",
    tone: "bg-info/10 text-info",
  },
];

const ingredients = [
  "Grilled chicken breast",
  "Steamed basmati rice",
  "Mixed vegetables",
  "Light herb seasoning",
  "Olive oil dressing",
];


const deliveryDetails = [
  ["Status", meal.deliveryStatus],
  ["ETA", meal.arrivalTime],
  ["Fee", meal.deliveryFee],
];

export default function MealDetailPage() {

  const navigate = useNavigate();
  return (
    <>
      <PageHeader title={meal.pageTitle} subtitle="Track your meal delivery" />

      <Card className="mt-5 p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">

          {/* IMAGE */}
          <div className="relative h-28 w-full overflow-hidden rounded-lg md:w-40 md:h-28">
            <img
              src={foodImg}
              alt={meal.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* MAIN INFO */}
          <div className="flex-1">
            <Badge className="border-none bg-primary/10 text-primary">
              {meal.status}
            </Badge>

            <h2 className="mt-2 text-xl font-bold">{meal.title}</h2>

            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
              <Truck className="h-4 w-4" />
              <span>Arriving {meal.arrivalTime}</span>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              {meal.description}
            </p>
          </div>

          {/* NUTRITION (compact 2x2 grid) */}
          <div className="grid grid-cols-2 gap-2 md:w-[220px]">

            {nutritionItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-md border px-2 py-2"
                >
                  <div className={`rounded-md p-1 ${item.tone}`}>
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="leading-tight">
                    <p className="text-sm font-semibold">{item.value}</p>
                    <p className="text-[10px] text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </Card>

      <section className="mt-6">
        <h3 className="mb-3 font-semibold">Ingredients</h3>

        <Card className="p-4">
          <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {ingredients.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <Card className="mt-5 p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Clock3 className="h-5 w-5 text-primary" />
            <span className="font-semibold">Delivery Progress</span>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-success">
            <CheckCircle2 className="h-4 w-4" />
            {meal.deliveryStatus}
          </div>
        </div>




        <Progress value={meal.deliveryProgress} className="mt-4 h-2.5" />
        <div className="flex justify-between">

          <p className="mt-2 text-sm text-muted-foreground">
            {meal.deliveryNote}
          </p>
          <Button

            onClick={(e) => {
              e.stopPropagation();
              navigate("/mealtrack");
            }}
          >
            <Truck className="h-4 w-4 mr-2" />
            Track
          </Button>
        </div>


      </Card>

    </>
  );
}
