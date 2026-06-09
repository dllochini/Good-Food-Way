import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, BadgeCheck, CreditCard, LockKeyhole } from "lucide-react";

const PaymentPortal = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState("card");

  return (
    <main className="min-h-screen bg-background px-4 py-6 text-foreground sm:py-10">
      <section className="mx-auto w-full max-w-5xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex h-9 items-center gap-2 rounded-lg px-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back
        </button>

        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            Checkout
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Secure payment
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Confirm your monthly meal subscription and preferred payment method.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
          <Card className="rounded-lg border-border bg-card">
            <CardContent className="p-5 sm:p-7">
              <h2 className="text-xl font-bold">Payment method</h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ["card", CreditCard, "Card payment"],
                  ["bank", LockKeyhole, "Bank transfer"],
                ].map(([id, Icon, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setMethod(id)}
                    className={`flex h-14 items-center gap-3 rounded-lg border px-4 text-left text-sm font-semibold transition ${
                      method === id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-muted text-muted-foreground hover:border-primary hover:text-foreground"
                    }`}
                  >
                    <Icon className="size-5" />
                    {label}
                  </button>
                ))}
              </div>

              <div className="mt-6 grid gap-4">
                <Input
                  placeholder="Name on card"
                  className="h-12 rounded-lg px-4"
                />
                <Input
                  placeholder="Card number"
                  className="h-12 rounded-lg px-4"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    placeholder="MM / YY"
                    className="h-12 rounded-lg px-4"
                  />
                  <Input
                    placeholder="CVC"
                    className="h-12 rounded-lg px-4"
                  />
                </div>
              </div>

              <Button className="mt-7 h-12 w-full rounded-lg" variant="primary">
                Pay and activate plan
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-0 bg-foreground text-background">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                <BadgeCheck className="size-4" />
                Order summary
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between gap-4">
                  <span className="text-white/75">Plan A</span>
                  <span className="font-semibold">Rs 15,000</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-white/75">Early access discount</span>
                  <span className="font-semibold text-accent">-15%</span>
                </div>
                <div className="border-t border-white/15 pt-4">
                  <div className="flex justify-between gap-4">
                    <span className="text-white/75">Due today</span>
                    <span className="text-2xl font-bold">Rs 12,750</span>
                  </div>
                  <p className="mt-2 text-xs text-white/60">
                    Monthly billing starts when your first delivery window is
                    confirmed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default PaymentPortal;
