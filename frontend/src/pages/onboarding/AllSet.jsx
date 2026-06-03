import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  CircleCheckBig,
  Target,
  Utensils,
  ShieldCheck,
} from "lucide-react";

const AllSet = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] px-4 py-10">

      <div className="max-w-xl mx-auto">

        {/* Back Button (outside card, proper placement) */}
        <button
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"
        >
          ← Back
        </button>

        <Card className="border-0 shadow-sm rounded-3xl">
          <CardContent className="p-10 text-center">

            <div className="flex justify-center mb-6">
              <CircleCheckBig size={72} className="text-green-600" />
            </div>

            <h1 className="text-3xl font-semibold text-gray-900">
              You're all set!
            </h1>

            <p className="text-gray-500 mt-3 max-w-md mx-auto">
              We've personalized your nutrition profile and are
              ready to recommend meals tailored to your goals.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 bg-[#F7F6F2] p-4 rounded-xl">
                <Target size={18} className="text-[#203618]" />
                <span className="text-sm">Health goals selected</span>
              </div>

              <div className="flex items-center gap-3 bg-[#F7F6F2] p-4 rounded-xl">
                <Utensils size={18} className="text-[#203618]" />
                <span className="text-sm">Dietary preferences saved</span>
              </div>

              <div className="flex items-center gap-3 bg-[#F7F6F2] p-4 rounded-xl">
                <ShieldCheck size={18} className="text-[#203618]" />
                <span className="text-sm">Allergies & dislikes recorded</span>
              </div>

            </div>

            <Button
              className="w-full mt-8 h-12 rounded-full bg-[#C9750A] hover:bg-[#B76808]"
              onClick={() => navigate("/chooseplan")}
            >
              Continue
            </Button>

          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default AllSet;