import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Moon,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import SectionTitle from "../../components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageHeader from "@/components/common/PageHeader";
import foodImg from "../../assets/grilled-chicken-and-veggie-rice-bowl.jpg";

export default function MealsPage() {
  const navigate = useNavigate();

  const meals = [
    {
      mealType: "Lunch",
      foodName: "Grilled Chicken Rice Bowl",
      time: "12:30 PM",
      status: "In Progress",
      statusType: "inProgress",
    },
    {
      mealType: "Dinner",
      foodName: "Creamy Pumpkin Soup",
      time: "7:00 PM",
      status: "Scheduled",
      statusType: "scheduled",
    },
    {
      mealType: "Snack",
      foodName: "Greek Yogurt Berry Cup",
      time: "4:30 PM",
      status: "Completed",
      statusType: "completed",
    },
  ];

  const statusStyles = {
    completed: "text-success bg-success/10",
    inProgress: "text-info bg-info/10",
    scheduled: "text-muted-foreground bg-muted",
  };

  const statusIcons = {
    completed: CheckCircle2,
    inProgress: Truck,
    scheduled: Clock3,
  };

  const nextMeal = meals.find((m) => m.statusType === "inProgress") || meals[0];

 const weeklyPlan = [
  {
    day: "Monday",
    meals: {
      lunch: "Teriyaki Chicken Rice Bowl",
      dinner: "Lentil Vegetable Soup",
    },
  },
  {
    day: "Tuesday",
    meals: {
      lunch: "Quinoa Chickpea Salad",
      dinner: "Grilled Fish with Steamed Broccoli",
    },
  },
  {
    day: "Wednesday",
    meals: {
      lunch: "Chicken Wrap with Yogurt Sauce",
      dinner: "Pumpkin Soup with Toast",
    },
  },
  {
    day: "Thursday",
    meals: {
      lunch: "Beef Stir Fry with Rice",
      dinner: "Vegetable Pasta Bowl",
    },
  },
  {
    day: "Friday",
    meals: {
      lunch: "Grilled Chicken Burrito Bowl",
      dinner: "Sweet Potato & Spinach Curry",
    },
  },
  {
    day: "Saturday",
    meals: {
      lunch: "Salmon Rice Bowl",
      dinner: "Light Chicken Noodle Soup",
    },
  },
];

  return (
    <>
      {/* HEADER */}
      <div className="flex items-start justify-between gap-4">
        <PageHeader
          title="Meals"
          subtitle="Track your daily meals, nutrition timing, and delivery status."
          showBack={false}
        />

        <Button variant="secondary" className="shrink-0">
          <CalendarDays className="h-4 w-4" />
          Today
        </Button>
      </div>

      {/* NEXT MEAL */}
      <Card
        onClick={() => navigate("/mealdetail")}
        className="relative mt-6 cursor-pointer overflow-hidden border-none p-0 transition-transform hover:scale-[1.01] active:scale-[0.99]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${foodImg})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative p-5 text-white">
          <p className="text-xs uppercase tracking-[0.22em] opacity-80">
            Next meal
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {nextMeal.mealType} - {nextMeal.foodName}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-sm opacity-85">
            <Truck size={16} />
            <span>Arriving at {nextMeal.time}</span>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <Button
              className="bg-white text-foreground hover:bg-white/90"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/mealtrack");
              }}
            >
              Track delivery
            </Button>

            <ChevronRight className="h-6 w-6 opacity-80" />
          </div>
        </div>
      </Card>

      {/* TODAY'S MEALS */}
      <section className="mt-6">
        <SectionTitle title="Today's Meals" />

        <div className="space-y-3">
          {meals.map((item) => {
            const StatusIcon = statusIcons[item.statusType];

            return (
              <Card key={item.foodName} className="focus-lift p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <StatusIcon className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <p className="font-semibold">{item.foodName}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.mealType} · {item.time}
                      </p>
                    </div>
                  </div>

                  <Badge
                    className={`h-7 rounded-lg px-3 ${
                      statusStyles[item.statusType]
                    }`}
                  >
                    <span>{item.status}</span>
                  </Badge>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* WEEKLY PLAN */}
      <section className="mt-6">
        <SectionTitle title="Weekly Meal Plan" />

        <div className="grid gap-3 md:grid-cols-3">
          {weeklyPlan.map((dayPlan) => (
  <Card key={dayPlan.day} className="focus-lift p-4">
    <p className="font-semibold">{dayPlan.day}</p>

    <div className="mt-3 space-y-2 text-sm text-muted-foreground">
      <p>Lunch: {dayPlan.meals.lunch}</p>
      <p>Dinner: {dayPlan.meals.dinner}</p>
    </div>

    <button
      className="mt-4 text-sm font-semibold text-primary hover:underline"
      type="button"
    >
      View full plan
    </button>
  </Card>
))}
        </div>
      </section>
    </>
  );
}