import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MessageCircleHeart,
  Bot,
  Stethoscope,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function SupportFab() {
  const [open, setOpen] =
    useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Button
        size="icon"
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-5 z-50 h-14 w-14 rounded-full shadow-xl"
      >
        <MessageCircleHeart className="h-6 w-6" />
      </Button>

      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Support Center
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <button
              onClick={() => {
                navigate("/aicoach");
                setOpen(false);
              }}
              className="w-full rounded-xl border p-4 text-left hover:bg-muted"
            >
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <Bot className="h-5 w-5 text-primary" />

                  <div>
                    <p className="font-medium">
                      AI Coach
                    </p>

                    <p className="text-sm text-muted-foreground">
                      Get instant nutrition guidance
                    </p>
                  </div>
                </div>

                <ChevronRight className="h-4 w-4" />
              </div>
            </button>

            <button
              onClick={() => {
                navigate("/dietitianchat");
                setOpen(false);
              }}
              className="w-full rounded-xl border p-4 text-left hover:bg-muted"
            >
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <Stethoscope className="h-5 w-5 text-primary" />

                  <div>
                    <p className="font-medium">
                      Dietitian
                    </p>

                    <p className="text-sm text-muted-foreground">
                      Message your assigned dietitian
                    </p>
                  </div>
                </div>

                <ChevronRight className="h-4 w-4" />
              </div>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}