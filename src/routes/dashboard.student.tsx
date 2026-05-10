import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Stat, Panel, Bar } from "@/components/dashboard/Bits";
import { studentAttendance, subjects, homework, timetable } from "@/data/mock";
import { CheckCircle2, Clock, BookOpen, Sparkles } from "lucide-react";
import { ensureDashboardRole } from "@/lib/auth-guards";

export const Route = createFileRoute("/dashboard/student")({
  beforeLoad: async () => {
    await ensureDashboardRole("student");
  },
  component: Page,
  head: () => ({ meta: [{ title: "Student Dashboard — SJS ERP" }] }),
});

function Page() {
  const total = studentAttendance.reduce((a, b) => a + b.total, 0);
  const present = studentAttendance.reduce((a, b) => a + b.present, 0);
  const pct = Math.round((present / total) * 100);
  const avg = Math.round(subjects.reduce((a, b) => a + b.marks, 0) / subjects.length);

  return (
    <DashboardShell role="student" title="Welcome back, Aarav 👋">
      <div className="grid md:grid-cols-4 gap-4">
        <Stat accent label="Attendance" value={`${pct}%`} hint="This term" />
        <Stat label="Average" value={`${avg}%`} hint="Across 6 subjects" />
        <Stat label="Pending HW" value={homework.filter((h) => h.status === "pending").length} hint="Due this week" />
        <Stat label="Class Rank" value="#3" hint="of 42 students" />
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-5">
        <Panel title="Subject performance" action={<span className="text-xs text-muted-foreground">Term 2</span>}>
          <div className="space-y-4">
            {subjects.map((s) => (
              <div key={s.name}>
                <div className="flex items-center justify-between text-sm">
                  <div>{s.name}</div>
                  <div className="text-muted-foreground">{s.marks} · <span className="text-gold">{s.grade}</span></div>
                </div>
                <div className="mt-1.5"><Bar value={s.marks} /></div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Homework">
          <div className="space-y-3">
            {homework.map((h, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-border p-3">
                <div className={`h-9 w-9 rounded-lg grid place-items-center ${h.status === "done" ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"}`}>
                  {h.status === "done" ? <CheckCircle2 className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{h.title}</div>
                  <div className="text-xs text-muted-foreground">{h.subject} · {h.due}</div>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Today">
          <div className="space-y-3">
            {[
              { t: "08:00", s: "Mathematics", r: "Mr. Mahato · Room 204" },
              { t: "08:50", s: "English", r: "Ms. Soren · Room 201" },
              { t: "09:40", s: "Science", r: "Mr. Besra · Lab 1" },
              { t: "10:50", s: "Computer", r: "Ms. Hembrom · CS Lab" },
            ].map((c) => (
              <div key={c.t} className="flex items-start gap-3 rounded-xl border border-border p-3">
                <div className="text-xs font-medium w-12 text-navy">{c.t}</div>
                <div>
                  <div className="text-sm font-medium">{c.s}</div>
                  <div className="text-xs text-muted-foreground">{c.r}</div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Panel title="Weekly timetable">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="text-left text-xs uppercase tracking-widest text-muted-foreground">
                  <th className="py-2">Time</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
                </tr></thead>
                <tbody>
                  {timetable.map((row) => (
                    <tr key={row.time} className="border-t border-border">
                      <td className="py-2 font-medium text-navy">{row.time}</td>
                      <td>{row.mon}</td><td>{row.tue}</td><td>{row.wed}</td><td>{row.thu}</td><td>{row.fri}</td><td>{row.sat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>
        <Panel title="Notices">
          <ul className="space-y-3 text-sm">
            {["Reopening of school after summer", "Unit Test 1 schedule", "PTM on April 21", "Sports day registration"].map((n) => (
              <li key={n} className="flex items-start gap-3"><Sparkles className="h-4 w-4 text-gold mt-0.5" /><span>{n}</span></li>
            ))}
          </ul>
        </Panel>
      </div>
    </DashboardShell>
  );
}
