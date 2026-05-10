import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ShieldCheck, Sparkles, Heart, BookOpen } from "lucide-react";
import { stats } from "@/data/mock";
import { SiteCTA } from "@/components/site/SiteCTA";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({ meta: [
    { title: "About — St. Joseph's School, Charkapathar" },
    { name: "description", content: "Learn about SJS Charkapathar — a Christian Minority English Medium school administered by the Catholic Diocese of Bhagalpur." },
  ]}),
});

const values = [
  { icon: ShieldCheck, title: "Discipline", desc: "A culture of respect, responsibility and integrity." },
  { icon: Sparkles, title: "Excellence", desc: "Pursuit of mastery in academics, arts and sport." },
  { icon: Heart, title: "Compassion", desc: "Christ-inspired care for every student and family." },
  { icon: BookOpen, title: "Curiosity", desc: "A lifelong love of learning, questioning and discovery." },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About SJS Charkapathar"
        title={<>A Christian Minority English Medium school nurturing future leaders.</>}
        description="St. Joseph's School, Charkapathar is established and administered by the Catholic Diocese of Bhagalpur for the education of boys and girls. It conducts classes from Nursery to Class X and intends to extend up to Class XII."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="text-[11px] tracking-[0.2em] uppercase text-gold">Our Vision</div>
              <p className="mt-4 text-lg leading-relaxed text-foreground">
                With a firm belief in the potential of every child to a successful life, we aim to develop them into well-informed, confident and responsible citizens by providing a welcoming, happy, safe and supportive learning environment where everyone is equal and all achievements are celebrated.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="text-[11px] tracking-[0.2em] uppercase text-gold">Our Mission</div>
              <p className="mt-4 text-lg leading-relaxed text-foreground">
                To provide a nurturing and inclusive environment where every student can thrive academically and personally — fostering curiosity, character, and creativity through a well-rounded education.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground text-center">At a glance</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-gradient-navy text-balance text-center max-w-2xl mx-auto">Numbers that reflect decades of trust.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl text-gradient-navy">{s.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl text-gradient-navy text-balance max-w-2xl">Our core values shape everything we do.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 hover:shadow-elevated transition hover:-translate-y-1">
                  <div className="h-11 w-11 rounded-xl bg-navy text-white grid place-items-center"><v.icon className="h-5 w-5" /></div>
                  <div className="mt-5 font-medium">{v.title}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl text-gradient-navy">A message from the Principal</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              "At St. Joseph's, we believe every child holds the potential to achieve greatness through dedicated learning, guided values, and an environment that nurtures growth every single day. Together with our committed faculty and parents, we are shaping not just students — but the leaders of tomorrow."
            </p>
            <div className="mt-6 text-sm">
              <div className="font-medium">Fr. Joseph Tirkey</div>
              <div className="text-muted-foreground">Principal, St. Joseph's School, Charkapathar</div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteCTA />
    </SiteLayout>
  );
}
