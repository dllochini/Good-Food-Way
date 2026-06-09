import {
  Activity,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  HeartPulse,
  Pill,
  TriangleAlert,
  Upload,
} from "lucide-react";

import BottomNav from "../components/BottomNav";
import SectionTitle from "../components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ReportsPage() {
  const reports = [
    { name: "Blood Work", date: "2 days ago", status: "Analyzed", icon: FlaskConical },
    { name: "Lipid Panel", date: "1 week ago", status: "Analyzed", icon: HeartPulse },
    { name: "Vitamin Panel", date: "1 week ago", status: "Analyzed", icon: Pill },
    { name: "Thyroid Panel", date: "Pending", status: "Processing", icon: Activity },
  ];

  const actions = [
    "Increase Vitamin D through sunlight exposure and food sources.",
    "Include more fiber-rich foods such as fruits and vegetables.",
    "Continue regular physical activity.",
    "Schedule a follow-up lipid panel in 3 months.",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pb-24">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Health Reports</h1>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              Upload reports and turn medical data into practical nutrition and fitness actions.
            </p>
          </div>
          <Button>
            <Upload className="h-4 w-4" />
            Upload report
          </Button>
        </div>

        <section className="mt-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="p-5 brand-gradient text-primary-foreground">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-85">Overall health score</p>
                <h2 className="mt-2 text-5xl font-bold">82</h2>
                <p className="mt-1 text-sm opacity-85">out of 100</p>
              </div>
              <HeartPulse size={52} />
            </div>

            <p className="mt-5 text-sm leading-relaxed opacity-90">
              Your reports indicate good overall health with a few nutrition areas worth improving.
            </p>
          </Card>

          <Card className="p-5">
            <SectionTitle title="Key Findings" />
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: CheckCircle2, title: "Blood sugar healthy", desc: "Within the expected range.", tone: "text-success bg-success/10" },
                { icon: TriangleAlert, title: "Vitamin D low", desc: "Needs attention this month.", tone: "text-warning bg-warning/10" },
                { icon: TriangleAlert, title: "LDL elevated", desc: "Reduce highly processed foods.", tone: "text-accent bg-accent/10" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-lg border bg-background/70 p-4">
                    <div className={`mb-3 inline-flex rounded-lg p-2 ${item.tone}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </Card>
        </section>

        <section className="mt-6">
          <SectionTitle title="Recommended Actions" />

          <Card className="p-5">
            <div className="grid gap-3 md:grid-cols-2">
              {actions.map((action) => (
                <div key={action} className="flex items-start gap-3 rounded-lg bg-muted/45 p-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{action}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="mt-6">
          <SectionTitle title="Recent Reports" />

          <div className="space-y-3">
            {reports.map((report) => {
              const Icon = report.icon;

              return (
                <button
                  key={report.name}
                  className="focus-lift w-full rounded-lg border border-border bg-card p-4 text-left shadow-[var(--shadow-soft)]"
                  type="button"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold">{report.name}</h3>
                      <p className="text-sm text-muted-foreground">Uploaded {report.date}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="h-7 rounded-lg px-3">
                        {report.status}
                      </Badge>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <BottomNav />
    </main>
  );
}
