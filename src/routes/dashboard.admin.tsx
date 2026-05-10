import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Stat, Panel } from "@/components/dashboard/Bits";
import { Button } from "@/components/ui/button";
import { Upload, Users, GraduationCap, Wallet, Image as ImageIcon } from "lucide-react";
import { ensureDashboardRole } from "@/lib/auth-guards";

export const Route = createFileRoute("/dashboard/admin")({
  beforeLoad: async () => {
    await ensureDashboardRole("admin");
  },
  component: Page,
  head: () => ({ meta: [{ title: "Admin Dashboard — SJS ERP" }] }),
});

const recent = [
  { n: "Aarav Kumar", c: "VI–A", a: "Admission approved", t: "2h" },
  { n: "Diya Soren", c: "VII–B", a: "Fee paid · ₹ 9,500", t: "3h" },
  { n: "Rohit Hembrom", c: "VIII–A", a: "Profile updated", t: "5h" },
  { n: "Karan Besra", c: "V–B", a: "New admission applied", t: "1d" },
];

function Page() {
  return (
    <DashboardShell role="admin" title="School ERP · Operations overview">
      <div className="grid md:grid-cols-4 gap-4">
        <Stat accent label="Students" value="1,243" hint="+24 this month" />
        <Stat label="Teachers" value="62" />
        <Stat label="Fees collected" value="₹ 18.4L" hint="This term" />
        <Stat label="Active classes" value="32" />
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-5">
        <Panel title="Attendance trend (last 30 days)">
          <div className="flex items-end gap-1.5 h-40">
            {[60, 72, 80, 68, 90, 85, 92, 88, 95, 78, 86, 94, 82, 90, 88, 76, 84, 92, 89, 91, 78, 88, 93, 90, 86, 88, 92, 95, 91, 94].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-navy/30 to-navy" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-2 text-xs text-muted-foreground flex justify-between"><span>30 days ago</span><span>Today</span></div>
        </Panel>

        <Panel title="Fee collection" action={<span className="text-xs text-muted-foreground">This quarter</span>}>
          <div className="space-y-4">
            {[
              { l: "Tuition", v: 78 },
              { l: "Transport", v: 64 },
              { l: "Activity", v: 92 },
              { l: "Exam", v: 81 },
            ].map((f) => (
              <div key={f.l}>
                <div className="flex justify-between text-sm"><span>{f.l}</span><span className="text-muted-foreground">{f.v}%</span></div>
                <div className="mt-1.5 h-2 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-gradient-to-r from-gold to-yellow-400" style={{ width: `${f.v}%` }} /></div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Quick actions">
          <div className="grid grid-cols-2 gap-3">
            {[
              { i: Users, t: "Add Student" },
              { i: GraduationCap, t: "Add Teacher" },
              { i: Wallet, t: "Record Fee" },
              { i: Upload, t: "Upload Result" },
              { i: ImageIcon, t: "Upload Gallery" },
              { i: Upload, t: "New Notice" },
            ].map((q) => (
              <button key={q.t} className="rounded-xl border border-border p-4 text-left hover:bg-secondary transition">
                <q.i className="h-4 w-4 text-navy" />
                <div className="mt-3 text-sm font-medium">{q.t}</div>
              </button>
            ))}
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Panel title="Recent activity" action={<Button size="sm" variant="outline">View all</Button>}>
            <div className="divide-y divide-border">
              {recent.map((r, i) => (
                <div key={i} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-navy text-white grid place-items-center text-xs font-medium">{r.n[0]}</div>
                    <div>
                      <div className="text-sm font-medium">{r.n} · <span className="text-muted-foreground">{r.c}</span></div>
                      <div className="text-xs text-muted-foreground">{r.a}</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{r.t}</div>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <Panel title="System health">
          <div className="space-y-3 text-sm">
            {[
              { l: "Server", v: "Operational", g: true },
              { l: "Database", v: "Operational", g: true },
              { l: "Notifications", v: "Operational", g: true },
              { l: "Backups", v: "Last 02:00 AM", g: true },
            ].map((s) => (
              <div key={s.l} className="flex items-center justify-between rounded-xl border border-border p-3">
                <div className="flex items-center gap-3"><span className={`h-2 w-2 rounded-full ${s.g ? "bg-green-500" : "bg-amber-500"}`} />{s.l}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </DashboardShell>
  );
}
