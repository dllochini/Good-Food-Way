import { NavLink } from "react-router-dom";

import {
  Home,
  Utensils,
  TrendingUp,
  BarChart3,
  User,
} from "lucide-react";

const linkBase =
  "flex min-w-14 flex-col items-center justify-center gap-1 rounded-xl px-3 py-2 text-[11px] font-medium transition-all";

export default function BottomNav() {
  const activeClass =
    "bg-primary text-primary-foreground shadow-md";

  const inactiveClass =
    "text-muted-foreground hover:bg-muted hover:text-foreground";

  return (
    <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-md -translate-x-1/2 border-t border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-md justify-between px-3 py-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? activeClass
                : inactiveClass
            }`
          }
        >
          <Home size={20} />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/meals"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? activeClass
                : inactiveClass
            }`
          }
        >
          <Utensils size={20} />
          <span>Meals</span>
        </NavLink>

        <NavLink
          to="/track"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? activeClass
                : inactiveClass
            }`
          }
        >
          <TrendingUp size={20} />
          <span>Progress</span>
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? activeClass
                : inactiveClass
            }`
          }
        >
          <BarChart3 size={20} />
          <span>Reports</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? activeClass
                : inactiveClass
            }`
          }
        >
          <User size={20} />
          <span>Profile</span>
        </NavLink>
      </div>
    </nav>
  );
}