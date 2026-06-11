import { useState } from "react";

import PageHeader from "@/components/common/PageHeader";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Bot,
  Send,
  UserRound,
  Stethoscope,
} from "lucide-react";

export default function ChatPage() {
  const [tab, setTab] = useState("ai");

  return (
    <>
      <PageHeader
        title="Support"
        subtitle="Chat with AI Coach or your Dietitian"
      />

      <Card className="p-2 flex gap-2">
        <Button
          className="flex-1"
          variant={
            tab === "ai"
              ? "default"
              : "outline"
          }
          onClick={() => setTab("ai")}
        >
          <Bot className="h-4 w-4 mr-2" />
          AI Coach
        </Button>

        <Button
          className="flex-1"
          variant={
            tab === "dietitian"
              ? "default"
              : "outline"
          }
          onClick={() =>
            setTab("dietitian")
          }
        >
          <Stethoscope className="h-4 w-4 mr-2" />
          Dietitian
        </Button>
      </Card>

      <Card className="p-5 h-[500px] flex flex-col">
        <div className="flex-1 space-y-4 overflow-auto">
          {tab === "ai" ? (
            <>
              <div className="flex gap-3">
                <Bot className="h-8 w-8 text-primary" />

                <div className="rounded-2xl bg-muted p-3 max-w-[80%]">
                  You're doing well today.
                  Try to drink another
                  500ml of water before
                  dinner.
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-3">
                <Stethoscope className="h-8 w-8 text-primary" />

                <div className="rounded-2xl bg-muted p-3 max-w-[80%]">
                  How are you feeling
                  after today's lunch?
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex gap-2 mt-4">
          <Input placeholder="Type a message..." />

          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </>
  );
}