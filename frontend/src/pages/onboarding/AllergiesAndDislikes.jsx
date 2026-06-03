import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AllergiesAndDislikes = () => {
    const navigate = useNavigate();

    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const [otherAllergy, setOtherAllergy] = useState("");
    const [dislikes, setDislikes] = useState("");

    const allergies = [
        "Nuts",
        "Peanuts",
        "Dairy",
        "Eggs",
        "Soy",
        "Shellfish",
        "Fish",
        "Gluten",
        "Sesame",
        "None",
    ];

    const toggleAllergy = (allergy) => {
        if (allergy === "None") {
            setSelectedAllergies(["None"]);
            return;
        }

        setSelectedAllergies((prev) => {
            const withoutNone = prev.filter((item) => item !== "None");

            return withoutNone.includes(allergy)
                ? withoutNone.filter((item) => item !== allergy)
                : [...withoutNone, allergy];
        });
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
                        Step 4 of 5
                    </p>

                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-[#203618]" />
                    </div>
                </div>

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold text-gray-900">
                        Allergies & Dislikes
                    </h1>

                    <p className="text-sm text-gray-500 mt-2">
                        Help us avoid ingredients that don't work for you.
                    </p>
                </div>

                <Card className="border-0 shadow-sm rounded-3xl">
                    <CardContent className="p-8">

                        {/* Allergies */}
                        <div>
                            <h2 className="text-lg font-medium text-gray-900 mb-2">
                                Food Allergies & Intolerances
                            </h2>

                            <p className="text-sm text-gray-500 mb-5">
                                Select all that apply.
                            </p>

                            <div className="flex flex-wrap gap-3">

                                {allergies.map((allergy) => {
                                    const selected =
                                        selectedAllergies.includes(allergy);

                                    return (
                                        <button
                                            key={allergy}
                                            type="button"
                                            onClick={() => toggleAllergy(allergy)}
                                            className={`
                        px-4 py-2 rounded-full border text-sm transition-all
                        ${selected
                                                    ? "bg-[#203618] text-white border-[#203618]"
                                                    : "bg-white border-gray-300 text-gray-700 hover:border-[#203618]"
                                                }
                      `}
                                        >
                                            {allergy}
                                        </button>
                                    );
                                })}



                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Other allergy or intolerance?
                                </label>

                                <Input
                                    placeholder="e.g. Mustard, Sulphites, Coconut"
                                    value={otherAllergy}
                                    onChange={(e) => setOtherAllergy(e.target.value)}
                                />

                                <p className="text-xs text-gray-500 mt-2">
                                    Leave blank if none.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="my-8 border-t" />

                        {/* Dislikes */}
                        <div>
                            <h2 className="text-lg font-medium text-gray-900 mb-2">
                                Foods You Dislike
                            </h2>

                            <p className="text-sm text-gray-500 mb-4">
                                Separate multiple items with commas.
                            </p>

                            <Textarea
                                rows={4}
                                placeholder="e.g. Mushrooms, Olives, Beetroot, Very spicy food"
                                value={dislikes}
                                onChange={(e) => setDislikes(e.target.value)}
                                className="resize-none"
                            />
                        </div>

                        {/* Continue */}
                        <Button
                            className="w-full mt-8 h-12 rounded-full bg-[#C9750A] hover:bg-[#B76808]"
                            onClick={() => navigate("/onboarding/page6")}
                        >
                            Continue
                        </Button>

                    </CardContent>
                </Card>

            </div>

        </div>
    );
};

export default AllergiesAndDislikes;