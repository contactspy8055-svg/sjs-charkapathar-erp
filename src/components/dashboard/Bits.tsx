import type { ReactNode } from "react";

export function Stat({ label, value, hint, accent }: { label: string; value: ReactNode; hint?: string; accent?: boolean }) {
  return (
    <div className={`rounded-2xl border p-5 ${accent ? "bg-navy text-white border-navy shadow-elevated" : "border-border bg-card"}`}>
      <div className={`text-[11px] uppercase tracking-widest ${accent ? "text-white/60" : "text-muted-foreground"}`}>{label}</div>
      <div className="mt-2 font-display text-3xl">{value}</div>
      {hint && <div className={`mt-1 text-xs ${accent ? "text-white/60" : "text-muted-foreground"}`}>{hint}</div>}
    </div>
  );
}

export function Panel({ title, children, action }: { title: string; children: ReactNode; action?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="font-display text-lg">{title}</div>
        {action}
      </div>
      {children}
    </div>
  );
}

export function Bar({ value, max = 100 }: { value: number; max?: number }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
      <div className="h-full bg-gradient-to-r from-navy to-gold" style={{ width: `${pct}%` }} />
    </div>
  );
}
