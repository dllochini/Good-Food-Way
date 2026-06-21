import { useNavigate } from "react-router-dom";

import PageHeader from "@/shared/components/PageHeader";

import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

import {
  CalendarDays,
  Send,
  Video,
  UserRound,
} from "lucide-react";

export default function DietitianChatPage() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        title="Dietitian Chat"
        subtitle="Connect with your assigned dietitian"
      />

      {/* Dietitian Info */}
      <Card className="p-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <UserRound className="h-6 w-6 text-primary" />
          </div>

          <div>
            <h3 className="font-semibold">
              Dr. Sarah Perera
            </h3>

            <p className="text-sm text-muted-foreground">
              Registered Dietitian
            </p>
          </div>
        </div>
      </Card>

      {/* Consultation Card */}
      <Card className="p-5 border-primary/20 bg-primary/5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              Your Next Consultation
            </p>

            <h3 className="font-semibold mt-1">
              Friday • 3:00 PM
            </h3>

            <p className="text-sm text-muted-foreground mt-1">
              30 Minute Video Consultation
            </p>
          </div>

          <CalendarDays className="h-6 w-6 text-primary shrink-0" />
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          The meeting link will become available shortly before the
          session begins.
        </p>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <Button disabled>
            <Video className="h-4 w-4 mr-2" />
            Join Call
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              navigate("/appointments")
            }
          >
            Reschedule
          </Button>
        </div>
      </Card>

      {/* Chat */}
      <Card className="p-5 h-[60vh] flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4">
          <div className="bg-muted rounded-2xl p-3 max-w-[80%]">
            Hello 👋
            <p className="mt-2">
              How are you feeling after today's lunch?
            </p>
          </div>

          <div className="ml-auto bg-primary text-primary-foreground rounded-2xl p-3 max-w-[80%]">
            I felt quite full and satisfied.
          </div>

          <div className="bg-muted rounded-2xl p-3 max-w-[80%]">
            That's great. Remember to stay hydrated throughout
            the afternoon.
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Input placeholder="Message your dietitian..." />

          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </>
  );
}