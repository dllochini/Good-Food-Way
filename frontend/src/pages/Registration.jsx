import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { ChevronDown } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

import logo from "../assets/logo.png";
import { useUserRegister } from "../hooks/auth.hook";

const Registration = () => {
    const navigate = useNavigate();

    const { mutate, isPending, error } = useUserRegister();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        referralCode: "",
    });

    // input handler
    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // submit handler

    const handleSubmit = (e) => {
        e.preventDefault();

        mutate(form, {
            onSuccess: () => {
                navigate("/onboarding/page1");
            },
        });
    };

    return (
        <div className="min-h-screen flex bg-primary text-primary-foreground">

            {/* LEFT SIDE */}
            <div className="hidden md:flex flex-1 items-center justify-center px-12">
                <div className="text-center space-y-4">
                    <img src={logo} alt="logo" className="w-40 h-40 mx-auto" />

                    <h1 className="text-4xl font-bold">Good Food Way</h1>

                    <p className="tracking-[0.2em] uppercase text-xs">
                        Eat Balanced · Live Well
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 flex items-center justify-center p-6">

                <div className="w-[70%]">

                    <Card className="bg-white shadow-2xl border-0 rounded-2xl p-8">

                        <CardHeader className="text-center">
                            <CardTitle className='text-2xl font-bold' >Create your Account</CardTitle>
                            <CardDescription>
                                Start tracking your nutrition in seconds
                            </CardDescription>
                        </CardHeader>

                        {/* 🔥 FORM WRAPPED HERE */}
                        <form onSubmit={handleSubmit}>

                            <CardContent className="space-y-4">

                                {/* NAME */}
                                <div className="grid grid-cols-2 gap-3">
                                    <Input
                                        name="firstName"
                                        placeholder="First name"
                                        onChange={handleChange}
                                    />

                                    <Input
                                        name="lastName"
                                        placeholder="Last name"
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* EMAIL */}
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />

                                {/* PASSWORD */}
                                <Input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />

                                <p className="text-xs text-muted-foreground">
                                    At least 8 characters
                                </p>

                                {/* REFERRAL */}
                                <Collapsible>
                                    <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium">
                                        <ChevronDown className="h-4 w-4" />
                                        Have a referral code?
                                    </CollapsibleTrigger>

                                    <CollapsibleContent className="pt-3">
                                        <Input
                                            name="referralCode"
                                            placeholder="Referral code"
                                            onChange={handleChange}
                                        />
                                    </CollapsibleContent>
                                </Collapsible>

                                {/* BUTTON */}
                                <Button
                                    type="submit"
                                    className="w-full mt-2 rounded-full"
                                    size="lg"
                                    variant="primary"
                                    disabled={isPending}
                                >
                                    {isPending
                                        ? "Creating account..."
                                        : "Start my Healthy Journey"}
                                </Button>
                                {error && (
                                    <p className="text-sm text-red-500">
                                        {error.response?.data?.message || "Registration failed"}
                                    </p>
                                )}

                            </CardContent>

                        </form>

                        {/* footer */}
                        <div className="text-center">
                            <p className="text-sm">
                                Already have an account?{" "}
                                <button
                                    className="font-semibold hover:text-muted-foreground"
                                    onClick={() => navigate('/login')}
                                >
                                    Sign In
                                </button>
                            </p>

                            <p className="text-xs mt-3">
                                By continuing you agree to Terms & Privacy Policy
                            </p>
                        </div>

                    </Card>

                </div>

            </div>
        </div>
    );
};

export default Registration;