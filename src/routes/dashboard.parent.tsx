import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Stat, Panel, Bar } from "@/components/dashboard/Bits";
import { subjects, studentAttendance } from "@/data/mock";
import { Wallet, MessageSquare, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ensureDashboardRole } from "@/lib/auth-guards";

export const Route = createFileRoute("/dashboard/parent")({
  beforeLoad: async () => {
    await ensureDashboardRole("parent");
  },
  component: Page,
  head: () => ({ meta: [{ title: "Parent Dashboard — SJS ERP" }] }),
});

function Page() {
  const total = studentAttendance.reduce((a, b) => a + b.total, 0);
  const present = studentAttendance.reduce((a, b) => a + b.present, 0);
  return (
    <DashboardShell role="parent" title="Aarav's progress at a glance">
      <div className="grid md:grid-cols-4 gap-4">
        <Stat accent label="Attendance" value={`${Math.round((present / total) * 100)}%`} hint="This term" />
        <Stat label="Average" value="89%" hint="Strong performance" />
        <Stat label="Fees due" value="₹ 0" hint="All clear · next due July" />
        <Stat label="Class Rank" value="#3" hint="of 42 students" />
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-5">
        <Panel title="Performance by subject">
          <div className="space-y-4">
            {subjects.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm"><span>{s.name}</span><span className="text-muted-foreground">{s.marks}%</span></div>
                <div className="mt-1.5"><Bar value={s.marks} /></div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Fee status" action={<Button size="sm" className="bg-navy text-white">Pay now</Button>}>
          <div className="space-y-3">
            {[
              { t: "Tuition · Q1", a: "₹ 9,500", s: "Paid" },
              { t: "Transport · Q1", a: "₹ 3,200", s: "Paid" },
              { t: "Activity · Q1", a: "₹ 1,800", s: "Paid" },
              { t: "Tuition · Q2", a: "₹ 9,500", s: "Due Jul 5" },
            ].map((f) => (
              <div key={f.t} className="flex items-center justify-between rounded-xl border border-border p-3">
                <div>
                  <div className="text-sm font-medium">{f.t}</div>
                  <div className="text-xs text-muted-foreground">{f.s}</div>
                </div>
                <div className="text-sm font-medium">{f.a}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Communication" action={<Button size="sm" variant="outline"><MessageSquare className="h-4 w-4 mr-1" /> Message</Button>}>
          <div className="space-y-3 text-sm">
            {[
              { f: "Class Teacher", m: "Aarav has shown remarkable progress in Math.", t: "2h" },
              { f: "Principal Office", m: "PTM scheduled on April 21.", t: "1d" },
              { f: "Sports Coach", m: "Football trials this Saturday.", t: "3d" },
            ].map((c) => (
              <div key={c.f} className="flex items-start gap-3 rounded-xl border border-border p-3">
                <Bell className="h-4 w-4 mt-0.5 text-gold" />
                <div className="flex-1">
                  <div className="flex items-center justify-between"><div className="font-medium">{c.f}</div><div className="text-xs text-muted-foreground">{c.t}</div></div>
                  <div className="text-muted-foreground">{c.m}</div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </DashboardShell>
  );
}
