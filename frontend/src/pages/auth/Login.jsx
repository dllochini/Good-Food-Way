import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) return;

    // TODO: Call backend login API

    navigate("/dashboard");
  };

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
              Welcome Back
            </h1>

            <p className="mt-2 text-muted-foreground">
              Sign in to continue your nutrition journey.
            </p>
          </div>

          <Card className="rounded-3xl p-6">
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email address"
                className="h-14 rounded-2xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                type="password"
                placeholder="Password"
                className="h-14 rounded-2xl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                onClick={handleLogin}
                disabled={!email || !password}
                className="h-14 w-full rounded-2xl"
              >
                Sign In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="pt-2 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <button
                  onClick={() => navigate("/signup")}
                  className="font-medium text-primary"
                >
                  Create one
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}