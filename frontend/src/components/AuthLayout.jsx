import { Leaf, Sparkles, ShieldCheck, HeartPulse } from "lucide-react";

export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left visual panel */}
        <section className="relative hidden overflow-hidden bg-secondary lg:flex lg:flex-col lg:justify-between">
          <div className="relative z-10 p-10">
            <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/80 px-4 py-2 shadow-[var(--shadow-soft)] backdrop-blur">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <Leaf className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Wellness tracking made simple</span>
            </div>

            <div className="mt-10 max-w-xl space-y-4">
              <h1 className="text-5xl font-bold tracking-tight">
                Build healthier habits with a calm, clear interface.
              </h1>
              <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
                Track weight, water, meals, and activity in a space designed to feel
                light, modern, and easy to use every day.
              </p>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-card/80 p-5 shadow-[var(--shadow-soft)] backdrop-blur">
                <div className="rounded-lg bg-primary/10 p-3 text-primary w-fit">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-medium">Health focused</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Daily insights that are easy to understand.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card/80 p-5 shadow-[var(--shadow-soft)] backdrop-blur">
                <div className="rounded-lg bg-primary/10 p-3 text-primary w-fit">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-medium">Safe by design</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Clean auth screens with reassuring structure.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card/80 p-5 shadow-[var(--shadow-soft)] backdrop-blur">
                <div className="rounded-lg bg-primary/10 p-3 text-primary w-fit">
                  <Sparkles className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-medium">Modern feel</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Soft shadows, rounded corners, and subtle color.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 p-10">
            <div className="rounded-lg border border-border bg-card/80 p-6 shadow-[var(--shadow-soft)] backdrop-blur">
              <p className="text-sm text-muted-foreground">A gentle visual system for your app</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-xs text-muted-foreground">Theme</p>
                  <p className="mt-1 font-semibold">Green wellness</p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-xs text-muted-foreground">Layout</p>
                  <p className="mt-1 font-semibold">Mobile first</p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-xs text-muted-foreground">Mood</p>
                  <p className="mt-1 font-semibold">Calm & clean</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right content panel */}
        <section className="flex items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
          <div className="w-full max-w-md">
            <div className="mb-6 flex items-center gap-2 lg:hidden">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-semibold">Wellness App</span>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <div className="mb-6 space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {subtitle}
                </p>
              </div>

              {children}

              {footer ? <div className="mt-6">{footer}</div> : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
