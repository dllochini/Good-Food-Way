import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GeneratingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding/report");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-background">

      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 text-center">

        <div className="mb-8 h-14 w-14 animate-spin rounded-full border-4 border-primary border-t-transparent" />

        <h1 className="text-3xl font-bold">
          Building your plan
        </h1>

        <p className="mt-3 text-muted-foreground">
          Personalizing calories, hydration
          and recommendations for you.
        </p>

      </div>

    </main>
  );
}