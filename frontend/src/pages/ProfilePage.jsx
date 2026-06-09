import {
  Bell,
  HeartPulse,
  Leaf,
  ShieldCheck,
  UserRound,
  Utensils,
  Settings,
  Lock,
  LogOut,
} from "lucide-react";

import BottomNav from "../components/BottomNav";
import SectionTitle from "../components/SectionTitle";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProfilePage() {
  const stats = [
    { label: "Goal", value: "Healthy habits" },
    { label: "Plan", value: "Lunch + Dinner" },
    { label: "Streak", value: "7 days" },
  ];

  return (
    <main className="min-h-screen bg-background pb-24">
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* ================= HEADER ================= */}

        <section className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <UserRound className="h-8 w-8" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">
                  Lochini Perera
                </h1>

                <Badge variant="secondary">
                  92% Complete
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground mt-1">
                Personal profile & health preferences
              </p>
            </div>
          </div>

          <Button variant="secondary">
            Edit Profile
          </Button>
        </section>

        {/* ================= USER DETAILS ================= */}

        <Card className="p-5 space-y-4">
          <SectionTitle title="User Details" />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-muted/40 p-4">
              <p className="text-xs text-muted-foreground">
                Age
              </p>
              <p className="font-semibold mt-1">
                28 Years
              </p>
            </div>

            <div className="rounded-xl bg-muted/40 p-4">
              <p className="text-xs text-muted-foreground">
                Height
              </p>
              <p className="font-semibold mt-1">
                168 cm
              </p>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-xs text-muted-foreground">
                Current Weight
              </p>

              <p className="text-2xl font-bold mt-1">
                68.4 kg
              </p>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-xs text-muted-foreground">
                Target Weight
              </p>

              <p className="text-2xl font-bold mt-1">
                64 kg
              </p>

              <p className="text-xs text-muted-foreground mt-1">
                4.4 kg remaining
              </p>
            </div>
          </div>
        </Card>

        {/* ================= QUICK STATS ================= */}

        <section>
          <SectionTitle title="Progress Overview" />

          <div className="grid gap-4 md:grid-cols-3 mt-3">
            {stats.map((item) => (
              <Card
                key={item.label}
                className="p-5"
              >
                <p className="text-sm text-muted-foreground">
                  {item.label}
                </p>

                <p className="text-xl font-bold mt-1">
                  {item.value}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* ================= DIETARY PREFERENCES ================= */}

        <section className="space-y-3">
          <SectionTitle title="Dietary Preferences" />

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-5">
              <div className="p-3 rounded-xl bg-primary/10 w-fit text-primary">
                <Leaf className="h-5 w-5" />
              </div>

              <p className="font-semibold mt-4">
                Diet Style
              </p>

              <Badge className="mt-3">
                Balanced High Protein
              </Badge>
            </Card>

            <Card className="p-5">
              <div className="p-3 rounded-xl bg-primary/10 w-fit text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <p className="font-semibold mt-4">
                Allergies
              </p>

              <div className="flex gap-2 flex-wrap mt-3">
                <Badge variant="secondary">
                  Milk
                </Badge>

                <Badge variant="secondary">
                  Eggs
                </Badge>
              </div>
            </Card>

            <Card className="p-5">
              <div className="p-3 rounded-xl bg-primary/10 w-fit text-primary">
                <Utensils className="h-5 w-5" />
              </div>

              <p className="font-semibold mt-4">
                Dislikes
              </p>

              <div className="flex gap-2 flex-wrap mt-3">
                <Badge variant="secondary">
                  Mushrooms
                </Badge>

                <Badge variant="secondary">
                  Olives
                </Badge>
              </div>
            </Card>
          </div>
        </section>

        {/* ================= HEALTH REPORTS ================= */}

        <Card className="p-5">
          <div className="flex items-start justify-between">
            <div>
              <SectionTitle title="Health Reports" />

              <p className="text-sm text-muted-foreground mt-2">
                Latest report uploaded on March 12, 2026.
              </p>

              <p className="text-sm text-muted-foreground mt-1">
                Blood work, thyroid analysis and vitamin panel.
              </p>
            </div>

            <HeartPulse className="h-7 w-7 text-primary" />
          </div>

          <div className="flex items-center justify-between mt-5">
            <Badge variant="secondary">
              4 Reports Available
            </Badge>

            <Button variant="outline">
              View Reports
            </Button>
          </div>
        </Card>

        {/* ================= SUBSCRIPTION ================= */}

        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-semibold text-lg">
                Active Subscription
              </p>

              <p className="text-sm text-muted-foreground mt-2">
                Lunch + Dinner Plan
              </p>

              <p className="text-sm text-muted-foreground">
                Renews in 14 days
              </p>
            </div>

            <Bell className="h-7 w-7 text-primary" />
          </div>

          <Button className="mt-5">
            Manage Subscription
          </Button>
        </Card>

        {/* ================= ACCOUNT SETTINGS ================= */}

        <Card className="p-5">
          <SectionTitle title="Account Settings" />

          <div className="mt-4 space-y-3">
            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <Bell className="mr-2 h-4 w-4" />
              Notification Preferences
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <Lock className="mr-2 h-4 w-4" />
              Privacy & Security
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <Settings className="mr-2 h-4 w-4" />
              App Settings
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start text-destructive"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </Card>
      </div>

      <BottomNav />
    </main>
  );
}