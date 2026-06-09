import { NavLink } from "react-router-dom";
import { Home, Utensils, Activity, BarChart3, User } from "lucide-react";

const linkBase =
  "flex min-w-14 items-center justify-center gap-1 rounded-lg px-3 py-2 text-xs font-medium transition-all";

export default function BottomNav() {
  const activeClass = "bg-primary text-primary-foreground shadow-[var(--shadow-lift)]";
  const inactiveClass = "text-muted-foreground hover:bg-muted hover:text-foreground";

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/80 bg-card/92 px-3 pb-3 pt-2 shadow-[0_-16px_36px_-28px_rgba(23,33,27,0.45)] backdrop-blur">
      <div className="mx-auto flex max-w-md justify-between gap-1">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <Home size={20} />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/meals"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <Utensils size={20} />
          <span>Meals</span>
        </NavLink>

        <NavLink
          to="/track"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <Activity size={20} />
          <span>Track</span>
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <BarChart3 size={20} />
          <span>Reports</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <User size={20} />
          <span>Profile</span>
        </NavLink>
      </div>
    </nav>
  );
}
