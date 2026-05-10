import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Baby, GraduationCap } from "lucide-react";
import { SiteCTA } from "@/components/site/SiteCTA";

export const Route = createFileRoute("/admissions")({
  component: Admissions,
  head: () => ({ meta: [
    { title: "Admissions 2026-27 — SJS Charkapathar" },
    { name: "description", content: "Admissions are open for the 2026-27 academic year. Apply online and join SJS Charkapathar." },
  ]}),
});

const steps = [
  { n: "01", t: "Online Registration", d: "Fill the registration form on our portal." },
  { n: "02", t: "Document Submission", d: "Submit required documents at the school office." },
  { n: "03", t: "Interaction", d: "A friendly interaction with parents and child." },
  { n: "04", t: "Confirmation", d: "Pay the admission fee and confirm the seat." },
];

const docs = [
  "Birth certificate",
  "Aadhaar card of student",
  "Previous report card / TC",
  "Two passport-size photographs",
  "Parent ID proof",
  "Caste / minority certificate (if applicable)",
];

function Admissions() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Admissions Open · 2026 – 27"
        title={<>Begin your child's journey at <span className="text-gradient-gold">SJS Charkapathar</span>.</>}
        description="Limited seats across Nursery to Class X. Our admissions are based on a simple, transparent and child-friendly process."
      >
        <div className="flex flex-wrap gap-3">
          <Button size="lg" className="bg-navy text-white hover:bg-navy/90"><Link to="/contact">Start Application <ArrowRight className="h-4 w-4 ml-1" /></Link></Button>
          <Button size="lg" variant="outline"><Link to="/faq">Read FAQs</Link></Button>
        </div>
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal><h2 className="font-display text-4xl text-gradient-navy">Admission process</h2></Reveal>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="font-display text-3xl text-gradient-gold">{s.n}</div>
                  <div className="mt-4 font-medium">{s.t}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-display text-3xl text-gradient-navy">Documents required</h2>
            <ul className="mt-6 space-y-3">
              {docs.map((d) => (
                <li key={d} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-gold mt-0.5" /> {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl">Important dates</h3>
              <div className="mt-6 divide-y divide-border">
                {[
                  ["Registration opens", "Nov 1, 2025"],
                  ["Last date to register", "Feb 28, 2026"],
                  ["Interaction begins", "Mar 5, 2026"],
                  ["Session begins", "Apr 1, 2026"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-3">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="font-medium">{v}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-6 w-full bg-navy text-white"><Link to="/contact">Contact admissions office</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Eligibility</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-gradient-navy text-balance">Age criteria (2026–27)</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
              Age is calculated as of 31 March 2026. Birth certificates are verified at document submission.
            </p>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-8 h-full">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-navy text-white grid place-items-center"><Baby className="h-5 w-5" /></div>
                  <div className="font-display text-xl">Pre–Primary</div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <li className="flex justify-between gap-4"><span>Nursery</span><span className="text-foreground font-medium">3+ years</span></li>
                  <li className="flex justify-between gap-4"><span>LKG / UKG</span><span className="text-foreground font-medium">4+ / 5+ years</span></li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-2xl border border-border bg-card p-8 h-full">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-navy text-white grid place-items-center"><GraduationCap className="h-5 w-5" /></div>
                  <div className="font-display text-xl">Primary to Secondary</div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <li className="flex justify-between gap-4"><span>Class I</span><span className="text-foreground font-medium">6+ years</span></li>
                  <li className="flex justify-between gap-4"><span>Class VI – X</span><span className="text-foreground font-medium">As per CBSE age norms</span></li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl text-gradient-navy text-balance">Indicative fee structure</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
              Final fee schedules are confirmed at admission. Transport and activity fees may apply separately.
            </p>
          </Reveal>
          <div className="mt-10 rounded-2xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-3 gap-px bg-border text-sm">
              <div className="bg-muted/40 px-4 py-3 font-medium text-foreground">Stage</div>
              <div className="bg-muted/40 px-4 py-3 font-medium text-foreground">Tuition (annual)</div>
              <div className="bg-muted/40 px-4 py-3 font-medium text-foreground">Development</div>
              <div className="bg-card px-4 py-4">Pre–Primary</div>
              <div className="bg-card px-4 py-4 text-muted-foreground">Contact office</div>
              <div className="bg-card px-4 py-4 text-muted-foreground">Included overview</div>
              <div className="bg-card px-4 py-4">Primary (I–V)</div>
              <div className="bg-card px-4 py-4 text-muted-foreground">Contact office</div>
              <div className="bg-card px-4 py-4 text-muted-foreground">Lab & library access</div>
              <div className="bg-card px-4 py-4">Middle & Secondary</div>
              <div className="bg-card px-4 py-4 text-muted-foreground">Contact office</div>
              <div className="bg-card px-4 py-4 text-muted-foreground">Examination & sports</div>
            </div>
          </div>
        </div>
      </section>

      <SiteCTA />
    </SiteLayout>
  );
}
