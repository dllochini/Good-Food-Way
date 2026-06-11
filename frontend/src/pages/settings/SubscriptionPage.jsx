import SettingsPageLayout from "../../components/layouts/SettingsPageLayout";

import {
  CreditCard,
  Crown,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function SubscriptionPage() {
const navigate = useNavigate()

  return (
    <SettingsPageLayout
      title="Subscription & Billing"
      description="Manage your active plan and payment details."
    >
      <Card className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-primary" />

              <h2 className="font-semibold">
                Lunch + Dinner Plan
              </h2>
            </div>

            <p className="text-sm text-muted-foreground mt-2">
              Renews in 14 days
            </p>
          </div>

          <Badge>
            Active
          </Badge>
        </div>

        <Button
          className="mt-5"
          onClick={() => navigate('/chooseplan')}
        >
          Upgrade Plan
        </Button>
        
      </Card>

      <Card className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="h-5 w-5 text-primary" />

          <h2 className="font-semibold">
            Payment Method
          </h2>
        </div>

        <p>
          Visa ending in 4587
        </p>
      </Card>
    </SettingsPageLayout>
  );
}