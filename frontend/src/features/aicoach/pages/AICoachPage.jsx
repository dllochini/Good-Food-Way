import PageHeader from "@/shared/components/PageHeader";

import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

import { Bot, Send } from "lucide-react";

export default function AICoachPage() {
  return (
    <>
      <PageHeader
        title="AI Coach"
        subtitle="Ask anything about your nutrition plan"
      />

      <Card className="p-5 h-[600px] flex flex-col">
        <div className="flex-1 space-y-4 overflow-auto">
          <div className="bg-muted rounded-2xl p-3 w-fit max-w-[80%]">
            You're 600ml away from your water goal today.
          </div>

          <div className="bg-muted rounded-2xl p-3 w-fit max-w-[80%]">
            Your lunch contributed approximately 420 kcal.
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Input placeholder="Ask your AI coach..." />

          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </>
  );
}