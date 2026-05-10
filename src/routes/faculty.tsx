import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { faculty } from "@/data/mock";
import { Quote } from "lucide-react";
import { SiteCTA } from "@/components/site/SiteCTA";

export const Route = createFileRoute("/faculty")({
  component: Faculty,
  head: () => ({
    meta: [
      { title: "Faculty — SJS Charkapathar" },
      { name: "description", content: "Meet the dedicated educators of St. Joseph's School, Charkapathar." },
    ],
  }),
});

function Faculty() {
  const leadership = faculty.slice(0, 2);
  const team = faculty.slice(2);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Faculty"
        title={<>Educators who teach minds and shape character.</>}
        description="Experienced, qualified and deeply committed — our teachers are the heart of the SJS experience."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Leadership</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-gradient-navy text-balance">Guiding our school community</h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {leadership.map((f, i) => (
              <Reveal key={f.name} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left hover:shadow-elevated transition hover:-translate-y-1">
                  <div
                    className="mx-auto sm:mx-0 h-28 w-28 shrink-0 rounded-full grid place-items-center font-display text-3xl text-white shadow-elevated"
                    style={{ background: "linear-gradient(135deg, oklch(0.24 0.07 265), oklch(0.45 0.15 265))" }}
                  >
                    {f.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-2xl md:text-3xl">{f.name}</div>
                    <div className="mt-2 text-gold text-sm font-medium uppercase tracking-widest">{f.role}</div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      Committed to academic rigour, pastoral care and the holistic formation of every student entrusted to our school.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Academic team</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-gradient-navy text-balance">Subject specialists & mentors</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
              Our faculty blend CBSE expertise with mentorship — supporting learners in the classroom, laboratory, sports field and beyond.
            </p>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {team.map((f, i) => (
              <Reveal key={f.name} delay={i * 55}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 text-center hover:shadow-elevated transition hover:-translate-y-1">
                  <div
                    className="mx-auto h-24 w-24 rounded-full grid place-items-center font-display text-2xl text-white"
                    style={{ background: "linear-gradient(135deg, oklch(0.24 0.07 265), oklch(0.45 0.15 265))" }}
                  >
                    {f.initials}
                  </div>
                  <div className="mt-5 font-medium">{f.name}</div>
                  <div className="text-sm text-muted-foreground">{f.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 relative overflow-hidden">
              <Quote className="h-8 w-8 text-gold opacity-80" />
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                "Teaching at SJS means walking alongside families — celebrating growth, guiding through challenges, and inspiring children to lead with faith and confidence."
              </p>
              <div className="mt-8 text-sm">
                <div className="font-medium">Sr. Anita D'Souza</div>
                <div className="text-muted-foreground">Vice Principal · Academic Leadership</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteCTA />
    </SiteLayout>
  );
}
