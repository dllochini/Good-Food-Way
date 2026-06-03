import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Utensils,
  Heart,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import logo from "../../assets/logo.png";
import heroBg from "../../assets/healthy-food.webp"; // add your bg image

const Welcome = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Utensils size={14} />,
      text: "Portion-controlled, whole-food meals",
    },
    {
      icon: <Heart size={14} />,
      text: "Metabolic balance & gut health",
    },
    {
      icon: <TrendingUp size={14} />,
      text: "Weekly progress tracking",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Navbar */}
      <header className="relative z-10 h-16 bg-[#203618] flex items-center px-6">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-contain"
          />

          <h1 className="text-[#D89A42] font-bold tracking-wide text-sm md:text-base">
            GOOD FOOD WAY
          </h1>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 min-h-[calc(100vh-64px)] flex items-center">
        <div className="container mx-auto px-6 max-w-3/4">

          <div className="grid lg:grid-cols-2 gap-4 items-center ">

            {/* Left Content */}
            <div className="max-w-md text-white ">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Healthy Meals,
                <br />
                Delivered Daily
              </h2>

              <p className="mt-5 text-white/90 leading-relaxed text-sm md:text-base">
                Balanced, portion-controlled meals designed for
                metabolic balance, gut health and sustainable
                weight management.
              </p>
            </div>

            {/* Right Card */}
            <div className="flex justify-center lg:justify-end ">
              <Card className="w-full max-w-md rounded-2xl bg-white/95 backdrop-blur shadow-2xl -0">
                <CardContent className="p-8">

                  <div className="space-y-4">

                    {features.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-[#F7F7F7] rounded-lg px-4 py-3"
                      >
                        <div className="bg-white rounded-md p-2 shadow-sm">
                          {item.icon}
                        </div>

                        <span className="text-sm text-gray-700">
                          {item.text}
                        </span>
                      </div>
                    ))}

                  </div>

                  <Button
                    onClick={() => navigate("/onboarding/page2")}
                    className="w-full mt-6 rounded-full h-11 bg-[#C9750A] hover:bg-[#B86A07]"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <p className="text-center text-xs text-gray-500 mt-4">
                    Already have an account?{" "}
                    <button
                      onClick={() => navigate("/login")}
                      className="font-semibold text-black"
                    >
                      Sign In
                    </button>
                  </p>

                </CardContent>
              </Card>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Welcome;