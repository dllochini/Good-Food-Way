import SettingsPageLayout from "../../../app/layouts/SettingsPageLayout";

import { Bell } from "lucide-react";

import { Card } from "@/shared/ui/card";
import { Switch } from "@/shared/ui/switch";

export default function NotificationsPage() {
  return (
    <SettingsPageLayout
      title="Notification Preferences"
      description="Control how and when you receive updates."
    >
      <Card className="p-5">
        <div className="flex items-center gap-2 mb-5">
          <Bell className="h-5 w-5 text-primary" />
          <h2 className="font-semibold">
            Push Notifications
          </h2>
        </div>

        <div className="space-y-6">
          <SettingRow
            title="Meal Reminders"
            description="Receive reminders before scheduled meals."
          />

          <SettingRow
            title="Health Report Alerts"
            description="Get notified when reports are processed."
          />

          <SettingRow
            title="Weekly Progress Updates"
            description="Receive weekly summaries."
          />

          <SettingRow
            title="Promotional Updates"
            description="News and feature announcements."
          />
        </div>
      </Card>
    </SettingsPageLayout>
  );
}

function SettingRow({
  title,
  description,
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium">
          {title}
        </p>

        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>

      <Switch defaultChecked />
    </div>
  );
}