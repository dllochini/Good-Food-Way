import SettingsPageLayout from "@/app/layouts/SettingsPageLayout";

import {
  Moon,
  Languages,
} from "lucide-react";

import { Card } from "@/shared/ui/card";

export default function AppSettingsPage() {
  return (
    <SettingsPageLayout
      title="App Settings"
      description="Customize your application experience."
    >
      <Card className="p-5 space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <Moon className="h-5 w-5 text-primary" />

            <h2 className="font-semibold">
              Theme
            </h2>
          </div>

          <p className="text-sm text-muted-foreground mt-2">
            System Default
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <Languages className="h-5 w-5 text-primary" />

            <h2 className="font-semibold">
              Language
            </h2>
          </div>

          <p className="text-sm text-muted-foreground mt-2">
            English
          </p>
        </div>
      </Card>
    </SettingsPageLayout>
  );
}