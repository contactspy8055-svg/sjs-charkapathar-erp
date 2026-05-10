import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { facilities } from "@/data/mock";
import * as Icons from "lucide-react";
import { Sparkles, Shield, Cpu } from "lucide-react";
import { SiteCTA } from "@/components/site/SiteCTA";

export const Route = createFileRoute("/facilities")({
  component: Facilities,
  head: () => ({ meta: [
    { title: "Facilities — SJS Charkapathar" },
    { name: "description", content: "Smart classrooms, science & computer labs, library, sports complex, transport and more." },
  ]}),
});

function Facilities() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Campus & Facilities"
        title={<>A campus designed for curiosity, character and growth.</>}
        description="Modern infrastructure that supports academics, arts, sport and personal development — all on a safe, green campus."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Safety & wellbeing</div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-gradient-navy text-balance">Every facility is built around student safety first.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              CCTV-monitored corridors, trained staff on duty, fire-safe exits and hygienic dining — our campus is designed so parents can trust the environment their children learn in every single day.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-navy text-white grid place-items-center"><Shield className="h-5 w-5" /></div>
                <div>
                  <div className="font-medium">Secure campus perimeter</div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">Controlled entry, visitor logs and staff presence during school hours.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-navy text-white grid place-items-center"><Cpu className="h-5 w-5" /></div>
                <div>
                  <div className="font-medium">Smart infrastructure</div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">Digitally equipped classrooms and labs that keep pace with CBSE outcomes.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilities.map((f, i) => {
            const Icon = (Icons as any)[f.icon] ?? Sparkles;
            return (
              <Reveal key={f.title} delay={i * 50}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 hover:shadow-elevated transition hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-xl bg-navy text-white grid place-items-center group-hover:bg-gold group-hover:text-navy transition"><Icon className="h-5 w-5" /></div>
                  <div className="mt-5 font-display text-xl">{f.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <SiteCTA />
    </SiteLayout>
  );
}
