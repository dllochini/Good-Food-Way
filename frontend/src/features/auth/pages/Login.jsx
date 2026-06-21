import { ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

import { useUserLogin } from "@/features/auth/hooks/useAuth";
import { loginSchema } from "@/features/auth/validation/authSchema";

export default function Login() {
  const navigate = useNavigate();

  const loginMutation = useUserLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    const validation = loginSchema.safeParse({
      email,
      password,
    });

    if (!validation.success) {
      setError(validation.error.issues[0].message);
      return;
    }

    try {
      const response = await loginMutation.mutateAsync({
        email,
        password,
      });

      localStorage.setItem(
        "token",
        response.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      navigate("/dashboard");

    } catch (err) {
      setError(
        err?.response?.data?.message ||
        "Invalid email or password. Please try again."
      );
    }
  };


  return (
    <main className="min-h-screen bg-background">

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>


      <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 py-6">

        <div className="flex flex-1 flex-col justify-center">


          <div className="mb-8 text-center">

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10">
              <Sparkles className="h-10 w-10 text-primary" />
            </div>


            <h1 className="text-3xl font-bold">
              Welcome Back
            </h1>

            <p className="mt-2 text-muted-foreground">
              Sign in to continue your nutrition journey.
            </p>

          </div>


          <Card className="rounded-3xl p-6 shadow-lg">

            <form
              onSubmit={handleLogin}
              className="space-y-4"
            >


              <Input
                type="email"
                placeholder="Email address"
                className="h-14 rounded-2xl"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />


              <Input
                type="password"
                placeholder="Password"
                className="h-14 rounded-2xl"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />


              {error && (
                <div className="flex items-center gap-2 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">

                  <AlertCircle className="h-4 w-4" />

                  <span>
                    {error}
                  </span>

                </div>
              )}


              <Button
                type="submit"
                disabled={
                  !email ||
                  !password ||
                  loginMutation.isPending
                }
                className="h-14 w-full rounded-2xl"
              >

                {loginMutation.isPending ? (
                  "Signing In..."
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}

              </Button>


              <div className="pt-2 text-center text-sm text-muted-foreground">

                Don't have an account?{" "}

                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="font-medium text-primary hover:underline"
                >
                  Create one
                </button>

              </div>


            </form>

          </Card>


        </div>

      </div>

    </main>
  );
}