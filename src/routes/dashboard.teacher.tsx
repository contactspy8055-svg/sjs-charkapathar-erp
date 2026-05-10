import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Stat, Panel, Bar } from "@/components/dashboard/Bits";
import { Button } from "@/components/ui/button";
import { Plus, Users, FileUp } from "lucide-react";
import { ensureDashboardRole } from "@/lib/auth-guards";

export const Route = createFileRoute("/dashboard/teacher")({
  beforeLoad: async () => {
    await ensureDashboardRole("teacher");
  },
  component: Page,
  head: () => ({ meta: [{ title: "Teacher Dashboard — SJS ERP" }] }),
});

const classes = [
  { c: "VI – A", s: "42", a: 95 },
  { c: "VII – B", s: "38", a: 92 },
  { c: "VIII – A", s: "40", a: 88 },
];

const students = [
  { n: "Aarav Kumar", r: "01", a: "Present" },
  { n: "Diya Soren", r: "02", a: "Present" },
  { n: "Rohit Hembrom", r: "03", a: "Absent" },
  { n: "Priya Murmu", r: "04", a: "Present" },
  { n: "Karan Besra", r: "05", a: "Present" },
];

function Page() {
  return (
    <DashboardShell role="teacher" title="Good morning, Sr. Anita">
      <div className="grid md:grid-cols-4 gap-4">
        <Stat accent label="My Classes" value="3" hint="VI–A, VII–B, VIII–A" />
        <Stat label="Students" value="120" hint="Total under you" />
        <Stat label="Avg Attendance" value="92%" />
        <Stat label="HW to grade" value="14" hint="Submitted today" />
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-5">
        <Panel title="Class attendance" action={<Button size="sm" className="bg-navy text-white"><Plus className="h-4 w-4 mr-1" /> Mark</Button>}>
          <div className="space-y-4">
            {classes.map((c) => (
              <div key={c.c}>
                <div className="flex justify-between text-sm"><span>Class {c.c}</span><span className="text-muted-foreground">{c.s} students · {c.a}%</span></div>
                <div className="mt-1.5"><Bar value={c.a} /></div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Today · Class VI – A" action={<Button size="sm" variant="outline">Save</Button>}>
          <div className="divide-y divide-border">
            {students.map((s) => (
              <div key={s.r} className="flex items-center justify-between py-2.5 text-sm">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-secondary grid place-items-center text-xs">{s.r}</div>
                  <div>{s.n}</div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${s.a === "Present" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>{s.a}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Quick actions">
          <div className="grid grid-cols-2 gap-3">
            {[
              { i: FileUp, t: "Upload HW" },
              { i: Plus, t: "Add Notice" },
              { i: Users, t: "Mark Attendance" },
              { i: FileUp, t: "Upload Result" },
            ].map((q) => (
              <button key={q.t} className="rounded-xl border border-border p-4 text-left hover:bg-secondary transition">
                <q.i className="h-4 w-4 text-navy" />
                <div className="mt-3 text-sm font-medium">{q.t}</div>
              </button>
            ))}
          </div>
        </Panel>
      </div>
    </DashboardShell>
  );
}
