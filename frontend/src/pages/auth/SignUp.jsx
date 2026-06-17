import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Signup() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const updateField = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSignup = () => {
        const {
            firstName,
            lastName,
            email,
            password,
        } = form;

        if (
            !firstName ||
            !lastName ||
            !email ||
            !password
        )
            return;

        // TODO: Call backend register API

        navigate("/onboarding/goals");
    };

    const isValid =
        form.firstName &&
        form.lastName &&
        form.email &&
        form.password;

    return (
        <main className="min-h-screen bg-background">
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 py-6">
                <div className="flex flex-1 flex-col justify-center">
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10">
                            <Sparkles className="h-10 w-10 text-primary" />
                        </div>

                        <h1 className="text-3xl font-bold">
                            Create Account
                        </h1>

                        <p className="mt-2 text-muted-foreground">
                            Create your account and start building your personalized nutrition plan.
                        </p>
                    </div>

                    <Card className="rounded-3xl p-6">
                        <div className="space-y-4">
                            <Input
                                placeholder="First Name"
                                className="h-14 rounded-2xl"
                                value={form.firstName}
                                onChange={(e) =>
                                    updateField(
                                        "firstName",
                                        e.target.value
                                    )
                                }
                            />

                            <Input
                                placeholder="Last Name"
                                className="h-14 rounded-2xl"
                                value={form.lastName}
                                onChange={(e) =>
                                    updateField(
                                        "lastName",
                                        e.target.value
                                    )
                                }
                            />

                            <Input
                                type="email"
                                placeholder="Email Address"
                                className="h-14 rounded-2xl"
                                value={form.email}
                                onChange={(e) =>
                                    updateField(
                                        "email",
                                        e.target.value
                                    )
                                }
                            />

                            <Input
                                type="password"
                                placeholder="Password"
                                className="h-14 rounded-2xl"
                                value={form.password}
                                onChange={(e) =>
                                    updateField(
                                        "password",
                                        e.target.value
                                    )
                                }
                            />

                            <Button
                                onClick={handleSignup}
                                disabled={!isValid}
                                className="h-14 w-full rounded-2xl"
                            >
                                Create Account
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>

                            <div className="pt-2 text-center text-sm text-muted-foreground">
                                Already have an account?{" "}
                                <button
                                    onClick={() => navigate("/login")}
                                    className="font-medium text-primary"
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </main>
    );
}