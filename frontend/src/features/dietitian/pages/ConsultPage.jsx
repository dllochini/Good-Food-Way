import { useState } from "react";

import PageHeader from "@/shared/components/PageHeader";

import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";

import {
  CalendarDays,
  Clock3,
  Video,
  UserRound,
  CheckCircle2,
} from "lucide-react";

export default function ConsultPage() {
  const [selectedType, setSelectedType] =
    useState("followup");

  const [selectedTime, setSelectedTime] =
    useState("03:00 PM");

  const slots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "03:00 PM",
    "05:00 PM",
  ];

  return (
    <>
      <PageHeader
        title="Book Consultation"
        subtitle="Schedule a session with your dietitian"
      />

      {/* Dietitian */}
      <Card className="p-5">
        <div className="flex gap-4">
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
            <UserRound className="h-7 w-7 text-primary" />
          </div>

          <div>
            <h3 className="font-semibold">
              Dr. Sarah Perera
            </h3>

            <p className="text-sm text-muted-foreground">
              Registered Dietitian
            </p>

            <Badge className="mt-2">
              Available This Week
            </Badge>
          </div>
        </div>
      </Card>

      {/* Consultation Type */}
      <Card className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <Video className="h-5 w-5 text-primary" />

          <h2 className="font-semibold">
            Consultation Type
          </h2>
        </div>

        <div className="space-y-3">
          <button
            onClick={() =>
              setSelectedType("followup")
            }
            className={`w-full rounded-xl border p-4 text-left transition ${
              selectedType === "followup"
                ? "border-primary bg-primary/5"
                : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">
                  Follow-up Session
                </p>

                <p className="text-sm text-muted-foreground">
                  Review your progress and update your plan.
                </p>
              </div>

              {selectedType ===
                "followup" && (
                <CheckCircle2 className="h-5 w-5 text-primary" />
              )}
            </div>
          </button>

          <button
            onClick={() =>
              setSelectedType("consultation")
            }
            className={`w-full rounded-xl border p-4 text-left transition ${
              selectedType ===
              "consultation"
                ? "border-primary bg-primary/5"
                : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">
                  Nutrition Consultation
                </p>

                <p className="text-sm text-muted-foreground">
                  Discuss goals, challenges and dietary habits.
                </p>
              </div>

              {selectedType ===
                "consultation" && (
                <CheckCircle2 className="h-5 w-5 text-primary" />
              )}
            </div>
          </button>
        </div>
      </Card>

      {/* Date */}
      <Card className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <CalendarDays className="h-5 w-5 text-primary" />

          <h2 className="font-semibold">
            Date
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <Button variant="outline">
            Mon 15
          </Button>

          <Button variant="outline">
            Tue 16
          </Button>

          <Button variant="default">
            Wed 17
          </Button>

          <Button variant="outline">
            Thu 18
          </Button>
        </div>
      </Card>

      {/* Time */}
      <Card className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <Clock3 className="h-5 w-5 text-primary" />

          <h2 className="font-semibold">
            Available Time Slots
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {slots.map((slot) => (
            <Button
              key={slot}
              variant={
                selectedTime === slot
                  ? "default"
                  : "outline"
              }
              onClick={() =>
                setSelectedTime(slot)
              }
            >
              {slot}
            </Button>
          ))}
        </div>
      </Card>

      {/* Summary */}
      <Card className="p-5 bg-primary/5 border-primary/20">
        <h3 className="font-semibold mb-3">
          Booking Summary
        </h3>

        <div className="space-y-2 text-sm">
          <p>
            <strong>Dietitian:</strong>{" "}
            Dr. Sarah Perera
          </p>

          <p>
            <strong>Session:</strong>{" "}
            {selectedType ===
            "followup"
              ? "Follow-up Session"
              : "Nutrition Consultation"}
          </p>

          <p>
            <strong>Duration:</strong> 30
            Minutes
          </p>

          <p>
            <strong>Time:</strong>{" "}
            {selectedTime}
          </p>
        </div>
      </Card>

      <Button
        size="lg"
        className="w-full"
      >
        Confirm Appointment
      </Button>
    </>
  );
}