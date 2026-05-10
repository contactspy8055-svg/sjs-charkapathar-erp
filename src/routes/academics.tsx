import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { academics } from "@/data/mock";

export const Route = createFileRoute("/academics")({
  component: Academics,
  head: () => ({ meta: [
    { title: "Academics — SJS Charkapathar" },
    { name: "description", content: "A holistic CBSE-aligned curriculum from Nursery to Class X — designed to nurture curious, confident and capable learners." },
  ]}),
});

const subjects = ["English", "Hindi", "Mathematics", "Science", "Social Studies", "Computer Science", "Moral Science", "Art & Craft", "Physical Education", "Music"];

function Academics() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Academics"
        title={<>A curriculum built around the curious mind.</>}
        description="From early learners to senior school, our academic framework blends CBSE rigour with character formation, creativity and confidence-building."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {academics.map((a, i) => (
            <Reveal key={a.stage} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <div className="text-xs uppercase tracking-widest text-gold">Stage {i + 1}</div>
                <div className="mt-2 font-display text-2xl">{a.stage}</div>
                <div className="text-sm text-muted-foreground">{a.grades}</div>
                <p className="mt-4 text-sm text-muted-foreground">{a.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal><h2 className="font-display text-4xl text-gradient-navy">Subjects we teach</h2></Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {subjects.map((s) => (
              <span key={s} className="px-4 py-2 rounded-full border border-border bg-card text-sm">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-5">
          {[
            { t: "Beyond Textbooks", d: "Project-based learning, debates and Olympiad coaching." },
            { t: "Sports & Wellness", d: "Athletics, football, cricket, basketball, yoga and dance." },
            { t: "Arts & Culture", d: "Music, theatre, painting, public speaking and cultural festivals." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <div className="font-display text-2xl">{c.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
