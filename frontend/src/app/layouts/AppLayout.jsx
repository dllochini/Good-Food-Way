import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import SupportFab from "@/shared/components/SupportFab";

export default function AppLayout() {
  return (
    <main className="min-h-screen text-foreground pb-28">
      <div className="mx-auto max-w-4xl px-5 py-6 md:px-6 md:py-6 space-y-6">
        <Outlet />
      </div>

      <SupportFab />
      <BottomNav />
    </main>
  );
}