import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import SupportFab from "@/components/common/SupportFab";

export default function AppLayout() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-28">
      <div className="max-w-4xl mx-auto px-4 py-4 space-y-6">
        <Outlet />
      </div>
      <SupportFab/>

      <BottomNav />

    </main>
  );
}