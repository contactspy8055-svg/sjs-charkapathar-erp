import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { notices } from "@/data/mock";
import { Bell, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/notices")({
  component: Notices,
  head: () => ({ meta: [
    { title: "Notices — SJS Charkapathar" },
    { name: "description", content: "Official notices and circulars from SJS Charkapathar." },
  ]}),
});

function Notices() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Notices" title={<>Official notices & circulars.</>} />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 space-y-3">
          {notices.map((n, i) => (
            <Reveal key={n.title} delay={i * 50}>
              <div className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 hover:shadow-elevated transition">
                <div className="h-11 w-11 rounded-xl bg-navy text-white grid place-items-center"><Bell className="h-4 w-4" /></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground"><span>{n.date}</span> · <span className="px-2 py-0.5 rounded-full bg-secondary text-[10px] uppercase tracking-widest">{n.category}</span></div>
                  <div className="mt-1 font-medium">{n.title}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
