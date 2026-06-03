import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
    Target,
    Dumbbell,
    Zap,
    HeartPulse,
} from "lucide-react";

const HealthGoals = () => {
    const navigate = useNavigate();

    const [selectedGoals, setSelectedGoals] = useState([]);

    const goals = [
        {
            id: "lose-weight",
            title: "Lose Weight",
            description: "Reduce weight sustainably",
            icon: Target,
        },
        {
            id: "build-muscle",
            title: "Build Muscle",
            description: "Increase lean muscle mass",
            icon: Dumbbell,
        },
        {
            id: "boost-energy",
            title: "Boost Energy",
            description: "Feel more energized daily",
            icon: Zap,
        },
        {
            id: "metabolic-health",
            title: "Metabolic Health",
            description: "Balance blood sugar & hormones",
            icon: HeartPulse,
        },
    ];

    const toggleGoal = (goalId) => {
        setSelectedGoals((prev) =>
            prev.includes(goalId)
                ? prev.filter((id) => id !== goalId)
                : [...prev, goalId]
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
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Step 2 of 5</span>
                        <span>40%</span>
                    </div>

                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-2/5 bg-[#203618]" />
                    </div>
                </div>

                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        What are your health goals?
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Select all that apply.
                    </p>
                </div>

                {/* Goal Cards */}
                <div className="space-y-4">

                    {goals.map((goal) => {
                        const Icon = goal.icon;
                        const selected = selectedGoals.includes(goal.id);

                        return (
                            <Card
                                key={goal.id}
                                onClick={() => toggleGoal(goal.id)}
                                className={`cursor-pointer transition-all border-2 ${selected
                                        ? "bg-[#203618] text-white border-[#203618]"
                                        : "bg-white border-transparent hover:border-[#203618]/30"
                                    }`}
                            >
                                <CardContent className="flex items-center gap-4 p-5">

                                    <div
                                        className={`p-3 rounded-xl ${selected
                                                ? "bg-white/15"
                                                : "bg-[#F7F6F2]"
                                            }`}
                                    >
                                        <Icon size={22} />
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-base">
                                            {goal.title}
                                        </h3>

                                        <p
                                            className={`text-sm ${selected
                                                    ? "text-white/80"
                                                    : "text-gray-500"
                                                }`}
                                        >
                                            {goal.description}
                                        </p>
                                    </div>

                                </CardContent>
                            </Card>
                        );
                    })}

                </div>

                {/* Continue */}
                <Button
                    className="w-full mt-8 h-12 rounded-full bg-[#C9750A] hover:bg-[#B76808]"
                    onClick={() => navigate("/onboarding/page4")}
                >
                    Continue
                </Button>

            </div>
        </div>
    );
};

export default HealthGoals;