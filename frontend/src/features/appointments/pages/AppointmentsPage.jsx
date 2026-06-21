    import PageHeader from "@/shared/components/PageHeader";

import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";

import {
  CalendarDays,
  Video,
} from "lucide-react";

export default function AppointmentsPage() {
  const slots = [
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "3:00 PM",
    "5:00 PM",
  ];

  return (
    <>
      <PageHeader
        title="Book Consultation"
        subtitle="Schedule a session with your dietitian"
      />

      <Card className="p-5">
        <div className="flex items-center gap-3">
          <Video className="h-8 w-8 text-primary" />

          <div>
            <h3 className="font-semibold">
              30 Minute Video Consultation
            </h3>

            <p className="text-sm text-muted-foreground">
              Discuss your nutrition
              plan and progress.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-center gap-2 mb-5">
          <CalendarDays className="h-5 w-5" />

          <h3 className="font-semibold">
            Available Times
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {slots.map((slot) => (
            <Button
              key={slot}
              variant="outline"
            >
              {slot}
            </Button>
          ))}
        </div>

        <Button className="w-full mt-5">
          Confirm Booking
        </Button>
      </Card>
    </>
  );
}