import { Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { useAuth } from "@/lib/auth";
import type { Role } from "@/lib/roles";
import logo from "@/assets/sjs-logo.png";
import {
  LayoutDashboard, BookOpen, Calendar, GraduationCap, Bell, User2, LogOut,
  Users, ClipboardCheck, BarChart3, Wallet, Image as ImageIcon, Settings, ShieldCheck, FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Item { label: string; to: string; icon: any; }

const navByRole: Record<Role, Item[]> = {
  student: [
    { label: "Overview", to: "/dashboard/student", icon: LayoutDashboard },
    { label: "Attendance", to: "/dashboard/student", icon: ClipboardCheck },
    { label: "Homework", to: "/dashboard/student", icon: BookOpen },
    { label: "Results", to: "/dashboard/student", icon: GraduationCap },
    { label: "Timetable", to: "/dashboard/student", icon: Calendar },
    { label: "Notices", to: "/dashboard/student", icon: Bell },
    { label: "Profile", to: "/dashboard/student", icon: User2 },
  ],
  parent: [
    { label: "Overview", to: "/dashboard/parent", icon: LayoutDashboard },
    { label: "Performance", to: "/dashboard/parent", icon: BarChart3 },
    { label: "Attendance", to: "/dashboard/parent", icon: ClipboardCheck },
    { label: "Fees", to: "/dashboard/parent", icon: Wallet },
    { label: "Notices", to: "/dashboard/parent", icon: Bell },
    { label: "Profile", to: "/dashboard/parent", icon: User2 },
  ],
  teacher: [
    { label: "Overview", to: "/dashboard/teacher", icon: LayoutDashboard },
    { label: "Attendance", to: "/dashboard/teacher", icon: ClipboardCheck },
    { label: "Homework", to: "/dashboard/teacher", icon: BookOpen },
    { label: "Results", to: "/dashboard/teacher", icon: GraduationCap },
    { label: "Timetable", to: "/dashboard/teacher", icon: Calendar },
    { label: "Notices", to: "/dashboard/teacher", icon: Bell },
  ],
  admin: [
    { label: "Overview", to: "/dashboard/admin", icon: LayoutDashboard },
    { label: "Students", to: "/dashboard/admin", icon: Users },
    { label: "Teachers", to: "/dashboard/admin", icon: GraduationCap },
    { label: "Fees", to: "/dashboard/admin", icon: Wallet },
    { label: "Reports", to: "/dashboard/admin", icon: BarChart3 },
    { label: "Notices", to: "/dashboard/admin", icon: Bell },
    { label: "Gallery", to: "/dashboard/admin", icon: ImageIcon },
    { label: "Roles", to: "/dashboard/admin", icon: ShieldCheck },
    { label: "Reports", to: "/dashboard/admin", icon: FileText },
    { label: "Settings", to: "/dashboard/admin", icon: Settings },
  ],
};

export function DashboardShell({ children, role, title }: { children: ReactNode; role: Role; title: string }) {
  const { user, logout, isReady } = useAuth();
  const navigate = useNavigate();
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!isReady) return;
    if (!user) navigate({ to: "/login" });
    else if (user.role !== role) navigate({ to: `/dashboard/${user.role}` as any });
  }, [user, role, navigate, isReady]);

  if (!isReady) {
    return (
      <div className="min-h-screen bg-secondary/30 flex items-center justify-center">
        <div className="rounded-2xl border border-border bg-card px-8 py-6 text-sm text-muted-foreground">Loading session…</div>
      </div>
    );
  }

  if (!user) return null;
  const items = navByRole[role];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-sidebar text-sidebar-foreground flex flex-col">
        <Link to="/" className="flex items-center gap-3 px-5 h-16 border-b border-white/10">
          <div className="h-9 w-9 rounded-lg bg-white p-1"><img src={logo} alt="" className="h-full w-full object-contain" /></div>
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-white/50">SJS ERP</div>
            <div className="text-sm font-medium">Charkapathar</div>
          </div>
        </Link>
        <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
          <div className="px-3 pb-2 text-[10px] uppercase tracking-[0.2em] text-white/40">{role}</div>
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => navigate({ to: it.to as any })}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                path === it.to ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <it.icon className="h-4 w-4" /> {it.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="h-9 w-9 rounded-full bg-gold text-navy grid place-items-center font-display">{user.name[0]}</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm truncate">{user.name}</div>
              <div className="text-[10px] text-white/50 capitalize">{user.role}</div>
            </div>
            <button
              type="button"
              onClick={() => {
                void (async () => {
                  await logout();
                  navigate({ to: "/login" });
                })();
              }}
              className="text-white/60 hover:text-white"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="pl-64">
        <header className="sticky top-0 z-10 h-16 px-8 flex items-center justify-between bg-background/80 backdrop-blur border-b border-border">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">{role} dashboard</div>
            <div className="font-display text-xl text-foreground">{title}</div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon"><Bell className="h-4 w-4" /></Button>
            <Button asChild variant="outline" size="sm"><Link to="/">View website</Link></Button>
          </div>
        </header>
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}

export function Outl() { return <Outlet />; }
