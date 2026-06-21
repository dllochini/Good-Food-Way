import { useNavigate } from "react-router-dom";

import {
  CalendarDays,
  Video,
  UserRound,
} from "lucide-react";

import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";

export default function DietitianSupportCard() {
  const navigate = useNavigate();

  return (
    <Card className="p-5">
      <div className="flex gap-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <UserRound className="h-6 w-6 text-primary" />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold">
            Your Dietitian
          </h3>

          <p className="text-sm text-muted-foreground">
            Dr. Sarah Perera
          </p>

          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            Friday • 3:00 PM
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-5">
  <Button
    variant="outline"
    onClick={() =>
      navigate("/dietitian-chat")
    }
  >
    Message
  </Button>

  <Button
    onClick={() =>
      navigate("/appointments")
    }
  >
    Book Call
  </Button>
</div>
    </Card>
  );
}