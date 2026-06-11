import {
  UserRound,
  Mail,
  Phone,
  Calendar,
  Ruler,
  Weight,
  Target,
  HeartPulse,
  ShieldCheck,
  Leaf,
  Utensils,
  AlertCircle,
  FileText,
  Edit,
  Settings,
  Bell,
  Lock,
  LogOut,
  ChevronRight,
} from "lucide-react";

import SectionTitle from "../../components/common/SectionTitle";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/common/PageHeader";

export default function ProfilePage() {
  const profileCompletion = 92;
  const navigate = useNavigate();

  const reportsSummary = {
    reports: 4,
    latestReport: "Jun 7, 2026",
  };

  return (
    <>

      <PageHeader
        title="Profile"
        subtitle="Manage your account and preferences."
        showBack={false}
      />
      {/* ================= PROFILE HEADER ================= */}

      <Card className="p-6">
  <div className="flex flex-col items-center text-center">
    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-primary">
      <UserRound className="h-12 w-12" />
    </div>

    <h2 className="mt-4 text-2xl font-bold">
      Lochini Perera
    </h2>

    <p className="text-sm text-muted-foreground">
      Wellness Program Member
    </p>

    <Badge
      variant="secondary"
      className="mt-3"
    >
      {profileCompletion}% Complete
    </Badge>

    <div className="w-full mt-5">
      <Progress value={profileCompletion} />

      <p className="text-xs text-muted-foreground mt-2">
        Add emergency contact to complete profile
      </p>
    </div>

    <Button
      className="w-full mt-5"
      onClick={() => navigate("/profile/edit")}
    >
      <Edit className="h-4 w-4 mr-2" />
      Edit Profile
    </Button>
  </div>
</Card>

      {/* ================= PERSONAL INFORMATION ================= */}

      <Card className="p-5">
        <SectionTitle title="Personal Information" />

        <div className="divide-y">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Email</span>
            </div>

            <span className="font-medium">
              lochini@example.com
            </span>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Phone</span>
            </div>

            <span className="font-medium">
              +94 71 234 5678
            </span>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <UserRound className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Gender</span>
            </div>

            <span className="font-medium">
              Female
            </span>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Date of Birth</span>
            </div>

            <span className="font-medium">
              12 August 1998
            </span>
          </div>
        </div>
      </Card>

      {/* ================= BODY METRICS ================= */}

      <Card className="p-5">
        <SectionTitle title="Body Metrics" />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
          <div className="rounded-xl bg-muted/40 p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Ruler className="h-4 w-4" />
              <span className="text-xs">Height</span>
            </div>

            <p className="text-xl font-bold mt-2">
              168 cm
            </p>
          </div>

          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Weight className="h-4 w-4" />
              <span className="text-xs">Current Weight</span>
            </div>

            <p className="text-xl font-bold mt-2">
              68.4 kg
            </p>
          </div>

          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Target className="h-4 w-4" />
              <span className="text-xs">Target Weight</span>
            </div>

            <p className="text-xl font-bold mt-2">
              64 kg
            </p>
          </div>

          <div className="rounded-xl bg-muted/40 p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <HeartPulse className="h-4 w-4" />
              <span className="text-xs">BMI</span>
            </div>

            <p className="text-xl font-bold mt-2">
              24.2
            </p>

            <p className="text-xs text-green-600 mt-1">
              Healthy Range
            </p>
          </div>
        </div>
      </Card>

      {/* ================= HEALTH GOALS ================= */}

      <Card className="p-5">
        <SectionTitle title="Health Goals" />

        <div className="space-y-5 mt-4">
          <div>
            <div className="flex justify-between text-sm">
              <span>Weight Goal Progress</span>
              <span>80%</span>
            </div>

            <Progress
              value={80}
              className="mt-2"
            />

            <p className="text-xs text-muted-foreground mt-2">
              4.4 kg remaining to reach your target weight.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4">
              <p className="text-sm text-muted-foreground">
                Goal
              </p>

              <p className="font-semibold mt-1">
                Healthy Habits
              </p>
            </Card>

            <Card className="p-4">
              <p className="text-sm text-muted-foreground">
                Meal Plan
              </p>

              <p className="font-semibold mt-1">
                Lunch + Dinner
              </p>
            </Card>

            <Card className="p-4">
              <p className="text-sm text-muted-foreground">
                Current Streak
              </p>

              <p className="font-semibold mt-1">
                7 Days
              </p>
            </Card>
          </div>
        </div>
      </Card>

      {/* ================= DIETARY PREFERENCES ================= */}

      <section>
        <SectionTitle title="Dietary Preferences" />

        <div className="grid md:grid-cols-3 gap-4 mt-3">
          <Card className="p-5">
            <div className="p-3 rounded-xl bg-primary/10 w-fit text-primary">
              <Leaf className="h-5 w-5" />
            </div>

            <h3 className="font-semibold mt-4">
              Diet Style
            </h3>

            <Badge className="mt-3">
              Balanced High Protein
            </Badge>
          </Card>

          <Card className="p-5">
            <div className="p-3 rounded-xl bg-primary/10 w-fit text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <h3 className="font-semibold mt-4">
              Allergies
            </h3>

            <div className="flex flex-wrap gap-2 mt-3">
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

            <h3 className="font-semibold mt-4">
              Food Dislikes
            </h3>

            <div className="flex flex-wrap gap-2 mt-3">
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

      {/* ================= HEALTH REPORTS SUMMARY ================= */}

      <Card className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <SectionTitle title="Health Reports" />

            <p className="text-sm text-muted-foreground mt-2">
              Latest report uploaded on{" "}
              {reportsSummary.latestReport}.
            </p>

            <p className="text-sm text-muted-foreground">
              Blood work, vitamin panel and thyroid analysis
              available.
            </p>
          </div>

          <FileText className="h-7 w-7 text-primary" />
        </div>

        <div className="flex items-center justify-between mt-5">
          <Badge variant="secondary">
            {reportsSummary.reports} Reports Available
          </Badge>

          <Button variant="outline">
            View Reports
          </Button>
        </div>
      </Card>

      {/* ================= EMERGENCY CONTACT ================= */}

      <Card className="p-5">
        <SectionTitle title="Emergency Information" />

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-xl bg-muted/40 p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <AlertCircle className="h-4 w-4" />
              <span className="text-xs">
                Emergency Contact
              </span>
            </div>

            <p className="font-medium mt-2">
              Not Added
            </p>

            <Button
              variant="outline"
              size="sm"
              className="mt-3"
            >
              Add Contact
            </Button>
          </div>

          <div className="rounded-xl bg-muted/40 p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <HeartPulse className="h-4 w-4" />
              <span className="text-xs">
                Primary Doctor
              </span>
            </div>

            <p className="font-medium mt-2">
              Not Assigned
            </p>

            <Button
              variant="outline"
              size="sm"
              className="mt-3"
            >
              Add Doctor
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-5">
        <SectionTitle title="Account & Settings" />

        <div className="mt-4 space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-between"
            onClick={() => navigate('/settings/notifications')}
          >
            <div className="flex items-center">
              <Bell className="h-4 w-4 mr-3" />
              Notification Preferences
            </div>

            <ChevronRight className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-between"
            onClick={() => navigate('/settings/privacy')}
          >
            <div className="flex items-center">
              <Lock className="h-4 w-4 mr-3" />
              Privacy & Security
            </div>

            <ChevronRight className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-between"
            onClick={() => navigate('/settings/app')}
          >
            <div className="flex items-center">
              <Settings className="h-4 w-4 mr-3" />
              App Settings
            </div>

            <ChevronRight className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-between"
            onClick={() => navigate('/settings/subscription')}
          >
            <div className="flex items-center">
              <ShieldCheck className="h-4 w-4 mr-3" />
              Subscription & Billing
            </div>

            <ChevronRight className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-between text-destructive"
            onClick={() => navigate('/login')}
          >
            <div className="flex items-center">
              <LogOut className="h-4 w-4 mr-3" />
              Logout
            </div>

            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </>
  );
}
