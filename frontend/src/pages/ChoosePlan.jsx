import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Check, Star } from "lucide-react";

const ChoosePlan = () => {
  const navigate = useNavigate();

  const [selectedPlan, setSelectedPlan] =
    useState("planA");

const handleBack = () => {
  navigate(-1); // goes to previous page in history
};

  const plans = [
    {
      id: "planA",
      title: "Plan A — Lunch & Dinner",
      price: "₹15,000",
      duration: "/month",
      popular: true,
      description: "Save ₹3,000 total",
      features: [
        "Lunch + Dinner delivered daily",
        "Portion-controlled whole food meals",
        "Nutritionist consultation included",
        "Weekly progress tracking",
        "Gut-friendly, high-protein recipes",
        "15% early-bird — first 50 subscribers",
      ],
      navigate: "/paymentportal",
    },
    {
      id: "planB",
      title: "Plan B — Lunch OR Dinner",
      price: "₹8,000",
      duration: "/month",
      description: "One meal delivered daily",
      features: [
        "Lunch OR Dinner delivered daily",
        "Portion-controlled whole food meals",
        "Nutritionist consultation included",
        "Weekly progress tracking",
        "Gut-friendly, high-protein recipes",
      ],
      navigate: "/paymentportal",
    },
    {
      id: "free",
      title: "Free Plan",
      price: "₹0",
      duration: "/month",
      description: "What's included",
      features: [
        "Food logging (email entry)",
        "Calorie & macro tracking",
        "Progress charts",
        "Meal delivery & weekly menu",
        "AI meal guidance & recipes",
        "Dietitian chat & appointments",
      ],
      navigate: "/landingpage",
    },
  ];

  const selectedPlanData = plans.find(
    (plan) => plan.id === selectedPlan
  );

  return (
    <div className="min-h-screen bg-[#F7F6F2] py-10 px-4">


      <div className="max-w-4xl mx-auto">

          {/* Back Button */}
  <button
    onClick={handleBack}
    className="mb-6 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"
  >
    ← Back
  </button>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-900">
            Choose Your Plan
          </h1>

          <p className="text-gray-500 mt-2">
            Healthy eating made simple. Select the plan
            that fits your lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">

          {plans.map((plan) => {
            const selected =
              selectedPlan === plan.id;

            return (
              <Card
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`
                  cursor-pointer
                  transition-all
                  border-2
                  relative
                  ${selected
                    ? "border-[#203618] bg-[#203618] text-white"
                    : "bg-white border-transparent"
                  }
                `}
              >
                <CardContent className="p-6">

                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <Star
                        size={18}
                        className="text-yellow-500 fill-yellow-500"
                      />
                    </div>
                  )}

                  <h3 className="font-semibold text-xl">
                    {plan.title}
                  </h3>

                  <p
                    className={`text-sm mt-1 ${selected
                      ? "text-white/80"
                      : "text-gray-500"
                      }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mt-5">
                    <span className="text-3xl font-bold">
                      {plan.price}
                    </span>

                    <span
                      className={`text-sm ${selected
                        ? "text-white/70"
                        : "text-gray-500"
                        }`}
                    >
                      {plan.duration}
                    </span>
                  </div>

                  <div className="mt-6 space-y-3">

                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2"
                      >
                        <Check size={16} />

                        <span className="text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>

                </CardContent>
              </Card>
            );
          })}

        </div>

        <Button
          className="w-full md:w-auto mt-8 h-12 px-10 rounded-full bg-[#C9750A] hover:bg-[#B76808] block mx-auto"
          onClick={() => navigate(selectedPlanData.navigate)}
        >
          Continue to Payment
        </Button>

      </div>

    </div>
  );
};

export default ChoosePlan;