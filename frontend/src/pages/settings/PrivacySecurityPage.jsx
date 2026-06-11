import SettingsPageLayout from "../../components/layouts/SettingsPageLayout";

import {
  ShieldCheck,
  KeyRound,
  Smartphone,
  Trash2,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PrivacySecurityPage() {
  return (
    <SettingsPageLayout
      title="Privacy & Security"
      description="Manage your account security and privacy settings."
    >
      <Card className="p-5">
        <div className="flex items-center gap-2 mb-5">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <h2 className="font-semibold">
            Security
          </h2>
        </div>

        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full justify-start"
          >
            <KeyRound className="h-4 w-4 mr-2" />
            Change Password
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start"
          >
            <Smartphone className="h-4 w-4 mr-2" />
            Two-Factor Authentication
          </Button>
        </div>
      </Card>

      <Card className="p-5 border-destructive/20">
        <h2 className="font-semibold text-destructive">
          Danger Zone
        </h2>

        <p className="text-sm text-muted-foreground mt-2">
          Permanently delete your account and data.
        </p>

        <Button
          variant="destructive"
          className="mt-4"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete Account
        </Button>
      </Card>
    </SettingsPageLayout>
  );
}