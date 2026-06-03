import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Leaf,
  Sprout,
  Drumstick,
  WheatOff,
  MilkOff,
  Flame,
  Clock3,
} from "lucide-react";

const DietaryPreferences = () => {
  const navigate = useNavigate();

  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const preferences = [
    {
      id: "vegetarian",
      title: "Vegetarian",
      description: "Plant-based diet with dairy and eggs",
      icon: Leaf,
    },
    {
      id: "vegan",
      title: "Vegan",
      description: "Completely plant-based eating",
      icon: Sprout,
    },
    {
      id: "non-vegetarian",
      title: "Non-Vegetarian",
      description: "Includes meat, fish and poultry",
      icon: Drumstick,
    },
    {
      id: "gluten-free",
      title: "Gluten-Free",
      description: "Avoid foods containing gluten",
      icon: WheatOff,
    },
    {
      id: "dairy-free",
      title: "Dairy-Free",
      description: "Avoid milk and dairy products",
      icon: MilkOff,
    },
    {
      id: "keto",
      title: "Keto",
      description: "Low-carb, high-fat eating style",
      icon: Flame,
    },
    {
      id: "intermittent-fasting",
      title: "Intermittent Fasting",
      description: "Meals aligned with fasting windows",
      icon: Clock3,
    },
  ];

  const togglePreference = (id) => {
    setSelectedPreferences((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] py-10 px-4">

      <div className="max-w-2xl mx-auto">

        <button
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"
        >
          ← Back
        </button>


        {/* Progress */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
            Step 3 of 5
          </p>

          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-3/5 bg-[#203618]" />
          </div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">
            Your Dietary Preferences
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            This helps us suggest meals that work for you.
            Select all that apply.
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">

          {preferences.map((item) => {
            const Icon = item.icon;
            const selected = selectedPreferences.includes(item.id);

            return (
              <Card
                key={item.id}
                onClick={() => togglePreference(item.id)}
                className={`
                  cursor-pointer
                  transition-all
                  border-2
                  ${selected
                    ? "bg-[#203618] border-[#203618] text-white"
                    : "bg-white border-transparent hover:border-[#203618]/20"
                  }
                `}
              >
                <CardContent className="flex items-center gap-4 p-5">

                  <div
                    className={`
                      p-3 rounded-xl
                      ${selected
                        ? "bg-white/15"
                        : "bg-[#F7F6F2]"
                      }
                    `}
                  >
                    <Icon size={20} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-base">
                      {item.title}
                    </h3>

                    <p
                      className={`text-sm ${selected
                          ? "text-white/80"
                          : "text-gray-500"
                        }`}
                    >
                      {item.description}
                    </p>
                  </div>

                </CardContent>
              </Card>
            );
          })}

        </div>

        {/* Continue Button */}
        <Button
          className="w-full mt-8 h-12 rounded-full bg-[#C9750A] hover:bg-[#B76808]"
          onClick={() => navigate("/onboarding/page5")}
        >
          Continue
        </Button>

      </div>

    </div>
  );
};

export default DietaryPreferences;