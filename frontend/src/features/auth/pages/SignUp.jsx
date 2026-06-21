import { ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

import { useUserSignup } from "@/features/auth/hooks/useAuth";
import { signupSchema } from "@/features/auth/validation/authSchema";

export default function Signup() {
    const navigate = useNavigate();
    const signupMutation = useUserSignup();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const updateField = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        const validation = signupSchema.safeParse(form);

        if (!validation.success) {
            setError(validation.error.issues[0].message);
            return;
        }

        try {
            const response = await signupMutation.mutateAsync(form);

            if (response.token) {
                localStorage.setItem("token", response.token);
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.user)
                );
            }

            navigate("/onboarding/goals");
        } catch (err) {
            setError(
                err?.response?.data?.message ||
                "Account creation failed. Try again."
            );
        }
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
                            Create your account and start your personalized nutrition journey.
                        </p>
                    </div>

                    <Card className="rounded-3xl p-6 shadow-lg">
                        <form onSubmit={handleSignup} className="space-y-4">

                            {error && (
                                <div className="flex items-center gap-2 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    {error}
                                </div>
                            )}

                            <Input
                                placeholder="First Name"
                                className="h-14 rounded-2xl"
                                value={form.firstName}
                                onChange={(e) => updateField("firstName", e.target.value)}
                            />

                            <Input
                                placeholder="Last Name"
                                className="h-14 rounded-2xl"
                                value={form.lastName}
                                onChange={(e) => updateField("lastName", e.target.value)}
                            />

                            <Input
                                type="email"
                                placeholder="Email Address"
                                className="h-14 rounded-2xl"
                                value={form.email}
                                onChange={(e) => updateField("email", e.target.value)}
                            />

                            <Input
                                type="password"
                                placeholder="Password"
                                className="h-14 rounded-2xl"
                                value={form.password}
                                onChange={(e) => updateField("password", e.target.value)}
                            />

                            <Button
                                type="submit"
                                disabled={!isValid || signupMutation.isPending}
                                className="h-14 w-full rounded-2xl"
                            >
                                {signupMutation.isPending ? (
                                    "Creating Account..."
                                ) : (
                                    <>
                                        Create Account
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>

                            <div className="pt-2 text-center text-sm text-muted-foreground">
                                Already have an account?{" "}
                                <button
                                    type="button"
                                    onClick={() => navigate("/login")}
                                    className="font-medium text-primary hover:underline"
                                >
                                    Sign In
                                </button>
                            </div>

                        </form>
                    </Card>

                </div>
            </div>

        </main>
    );
}