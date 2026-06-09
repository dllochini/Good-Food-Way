import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function OnboardingLayout({
  step,
  total,
  title,
  subtitle,
  onBack,
  children,
}) {
  const progressValue = Math.round((step / total) * 100);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-4 py-6 text-foreground pb-20">
      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-2xl flex-col justify-center">
        <div className="mb-4 flex items-center justify-between">
          {onBack ? (
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
          ) : (
            <div className="h-10 w-10" />
          )}

          <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1 text-xs text-muted-foreground shadow-[var(--shadow-soft)]">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Step {step} of {total}
          </div>
        </div>

        <Card className="overflow-hidden border-border/60 bg-card/95 backdrop-blur">
          <div className="h-1 w-full brand-gradient" />

          <div className="p-6 md:p-8">
            <div className="mb-6 space-y-3">
              <Progress value={progressValue} className="h-2.5" />

              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {title}
                </h1>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {subtitle}
                </p>
              </div>
            </div>

            {children}
          </div>
        </Card>
      </div>
    </main>
  );
}
