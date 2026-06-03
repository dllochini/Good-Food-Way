import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Personal = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        gender: "Male",
        age: "",
        height: "",
        weight: "",
    });

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleBack = () => {
        navigate('/landingpage');
    };

    return (
        <div className="min-h-screen bg-[#F7F6F2] py-10 px-4">

            <div className="max-w-2xl mx-auto">

                <button
                    onClick={handleBack}
                    className="mb-6 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"
                >
                    ← Go Back to Dashboard
                </button>

                {/* Progress */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Step 1 of 5</span>
                        <span>20%</span>
                    </div>

                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-1/5 bg-[#203618]" />
                    </div>
                </div>

                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Tell us about yourself
                    </h1>

                    <p className="text-gray-500 mt-2">
                        We'll use this information to personalize your nutrition plan.
                    </p>
                </div>

                {/* Form Card */}
                <Card className="rounded-3xl border-0 shadow-sm">
                    <CardContent className="p-8 space-y-6">


                        {/* Gender */}
                        <div>
                            <label className="block text-sm font-medium mb-3">
                                Gender
                            </label>

                            <div className="grid grid-cols-3 gap-3">
                                {["Male", "Female", "Other"].map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() =>
                                            setForm((prev) => ({
                                                ...prev,
                                                gender: item,
                                            }))
                                        }
                                        className={`h-12 rounded-xl border transition-all ${form.gender === item
                                                ? "bg-[#203618] text-white border-[#203618]"
                                                : "bg-white text-gray-700 border-gray-200 hover:border-[#203618]"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Age */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Age
                            </label>

                            <Input
                                type="number"
                                name="age"
                                placeholder="e.g. 30"
                                value={form.age}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Height + Weight */}
                        <div className="grid md:grid-cols-2 gap-4">

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Height (cm)
                                </label>

                                <Input
                                    type="number"
                                    name="height"
                                    placeholder="175"
                                    value={form.height}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Weight (kg)
                                </label>

                                <Input
                                    type="number"
                                    name="weight"
                                    placeholder="78"
                                    value={form.weight}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                        {/* Continue */}
                        <Button
                            className="w-full h-12 rounded-full bg-[#C9750A] hover:bg-[#B76808]"
                            onClick={() => navigate("/onboarding/page3")}
                        >
                            Continue
                        </Button>

                    </CardContent>
                </Card>

            </div>

        </div>
    );
};

export default Personal;