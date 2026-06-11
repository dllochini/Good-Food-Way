import SettingsPageLayout from "../../components/layouts/SettingsPageLayout";

import {
  HelpCircle,
  MessageSquare,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HelpSupportPage() {
  return (
    <SettingsPageLayout
      title="Help & Support"
      description="Get help and find answers."
    >
      <Card className="p-5">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-primary" />
          <h2 className="font-semibold">
            Frequently Asked Questions
          </h2>
        </div>

        <Button
          variant="outline"
          className="mt-5"
        >
          View FAQs
        </Button>
      </Card>

      <Card className="p-5">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h2 className="font-semibold">
            Contact Support
          </h2>
        </div>

        <p className="text-sm text-muted-foreground mt-2">
          support@yourapp.com
        </p>

        <Button className="mt-5">
          Contact Support
        </Button>
      </Card>
    </SettingsPageLayout>
  );
}