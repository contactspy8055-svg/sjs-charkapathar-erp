import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, GraduationCap, Trophy, Users, BookOpen, Quote, ChevronRight, Play } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SiteCTA } from "@/components/site/SiteCTA";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import logo from "@/assets/sjs-logo.png";
import { stats, facilities, news, testimonials, galleryItems, academics } from "@/data/mock";
import * as Icons from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "St. Joseph's School, Charkapathar — Future Leaders Begin Here" },
      { name: "description", content: "Premium English Medium school nurturing future leaders through excellence, discipline & innovation. Admissions open." },
    ],
  }),
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Marquee />
      <About />
      <Facilities />
      <Academics />
      <DashboardPreview />
      <Gallery />
      <News />
      <Testimonials />
      <SiteCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative -mt-24 min-h-[100svh] flex items-center overflow-hidden bg-navy-cinematic text-white">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-gold/20 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl animate-float" style={{ animationDelay: "1.2s" }} />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] tracking-[0.2em] uppercase glass text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                Admissions Open · 2026 – 27
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold tracking-tight text-balance leading-[1.02]">
                Building Future Leaders with{" "}
                <span className="text-gradient-gold">Excellence,</span>{" "}
                Discipline &amp; Innovation.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg text-white/70 leading-relaxed">
                A Christian Minority English Medium school administered by the Catholic Diocese of Bhagalpur — where every child's potential meets a world-class learning experience.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90 shadow-gold animate-glow">
                  <Link to="/admissions">Admissions Open <ArrowRight className="h-4 w-4 ml-1" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                  <Link to="/about">Explore Campus</Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/5">
                  <Link to="/login"><Play className="h-4 w-4 mr-1.5" /> Student Portal</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl glass p-5">
                    <div className="font-display text-3xl text-gradient-gold">{s.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Floating glass cards */}
          <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
            <div className="absolute inset-0 rounded-[32px] glass overflow-hidden ring-1 ring-white/10 shadow-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="absolute inset-x-6 top-6 flex items-center justify-between text-xs text-white/60">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-gold" /> Today</div>
                <div>Class VI – A</div>
              </div>
              <div className="absolute inset-x-6 top-16 grid grid-cols-2 gap-3">
                <div className="rounded-2xl glass p-4">
                  <div className="text-[11px] uppercase tracking-wider text-white/50">Attendance</div>
                  <div className="mt-2 font-display text-3xl text-white">96.4%</div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[96%] bg-gradient-to-r from-gold to-yellow-300" />
                  </div>
                </div>
                <div className="rounded-2xl glass p-4">
                  <div className="text-[11px] uppercase tracking-wider text-white/50">Average</div>
                  <div className="mt-2 font-display text-3xl text-white">A+</div>
                  <div className="mt-2 text-xs text-white/60">Top 10% of class</div>
                </div>
              </div>
              <div className="absolute inset-x-6 top-[200px] rounded-2xl glass p-4">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] uppercase tracking-wider text-white/50">Today's Schedule</div>
                  <ChevronRight className="h-4 w-4 text-white/50" />
                </div>
                <div className="mt-3 space-y-2.5">
                  {["Mathematics", "English", "Science", "Computer"].map((s, i) => (
                    <div key={s} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        <span className="text-white/85">{s}</span>
                      </div>
                      <span className="text-white/50 text-xs">{["08:00", "08:50", "09:40", "10:50"][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-x-6 bottom-6 rounded-2xl glass p-4 flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-white p-1.5"><img src={logo} alt="" className="h-full w-full object-contain" /></div>
                <div>
                  <div className="text-sm font-medium text-white">SJS Student ERP</div>
                  <div className="text-[11px] text-white/50">v2.0 · Premium experience</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl bg-gold/20 blur-2xl" />
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-white/40">
          <div className="flex flex-col items-center gap-2">
            Scroll
            <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["CBSE Affiliated", "Catholic Diocese of Bhagalpur", "Established 2000", "Smart Classrooms", "GPS Bus Fleet", "100% Board Results", "Award-Winning Faculty"];
  return (
    <div className="border-y border-border bg-secondary/40 overflow-hidden">
      <div className="flex gap-12 py-4 whitespace-nowrap animate-marquee">
        {[...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {t}
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-center">
        <Reveal className="lg:col-span-5">
          <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">About SJS</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance text-gradient-navy">
            A school built on faith, discipline & a deep belief in every child.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            St. Joseph's School, Charkapathar is a Christian Minority English Medium school established and administered by the Catholic Diocese of Bhagalpur. We educate boys and girls from Nursery to Class X — soon expanding to Class XII.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Pillar icon={ShieldCheck} title="Our Vision" text="Develop well-informed, confident and responsible citizens." />
            <Pillar icon={Sparkles} title="Our Mission" text="A nurturing, inclusive environment where every student thrives." />
          </div>
          <div className="mt-8">
            <Button asChild variant="outline"><Link to="/about">Read more about us <ArrowRight className="h-4 w-4 ml-1" /></Link></Button>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <div className="relative">
            <div className="aspect-[4/3] rounded-[28px] overflow-hidden ring-1 ring-border shadow-elevated bg-navy-cinematic relative">
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="absolute inset-0 grid place-items-center">
                <img src={logo} alt="SJS" className="h-44 w-44 opacity-90 drop-shadow-2xl animate-float" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between glass rounded-2xl p-4 text-white">
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-white/60">Catholic Diocese of Bhagalpur</div>
                  <div className="font-display text-lg">St. Joseph's School, Charkapathar</div>
                </div>
                <div className="text-gold text-2xl font-display">Est. 2000</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 rounded-2xl glass-light p-5 shadow-elevated hidden md:block">
              <div className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-gold" />
                <div>
                  <div className="text-xs text-muted-foreground">Best Catholic School</div>
                  <div className="text-sm font-medium">Diocesan Award 2024</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pillar({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border p-5 bg-card hover:shadow-elevated transition">
      <Icon className="h-5 w-5 text-navy" />
      <div className="mt-3 text-sm font-semibold">{title}</div>
      <p className="mt-1 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function Facilities() {
  return (
    <section className="relative py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <Reveal>
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Campus & Facilities</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-gradient-navy max-w-2xl text-balance">A campus designed for curiosity, character and growth.</h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Button asChild variant="ghost" className="text-navy"><Link to="/facilities">View all <ArrowRight className="h-4 w-4 ml-1" /></Link></Button>
          </Reveal>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map((f, i) => {
            const Icon = (Icons as any)[f.icon] ?? Sparkles;
            return (
              <Reveal key={f.title} delay={i * 50}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:shadow-elevated transition-all hover:-translate-y-1">
                  <div className="h-11 w-11 rounded-xl bg-navy text-white grid place-items-center group-hover:bg-gold group-hover:text-navy transition">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-medium">{f.title}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Academics() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Academics</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-gradient-navy max-w-3xl text-balance">A holistic curriculum that grows with every child.</h2>
        </Reveal>
        <div className="mt-14 relative">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-border hidden md:block" />
          <div className="grid md:grid-cols-4 gap-6 relative">
            {academics.map((a, i) => (
              <Reveal key={a.stage} delay={i * 80}>
                <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-elevated transition relative">
                  <div className="text-xs tracking-widest uppercase text-gold">Stage {i + 1}</div>
                  <div className="mt-2 font-display text-2xl">{a.stage}</div>
                  <div className="text-sm text-muted-foreground mt-1">{a.grades}</div>
                  <p className="mt-4 text-sm text-muted-foreground">{a.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <section className="relative py-28 overflow-hidden bg-navy-cinematic text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="text-[11px] tracking-[0.2em] uppercase text-white/60">SJS ERP · Powered by Premium UX</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">An ERP that students, parents, teachers & admin actually love.</h2>
          <p className="mt-6 text-white/70 max-w-xl">Attendance, homework, results, fees, notices and analytics — unified into a beautiful, role-based experience built for India's modern schools.</p>
          <div className="mt-8 grid grid-cols-2 max-w-md gap-3">
            {[
              { icon: Users, label: "4 Role Dashboards" },
              { icon: BookOpen, label: "Homework Portal" },
              { icon: GraduationCap, label: "Result Management" },
              { icon: ShieldCheck, label: "Secure Access" },
            ].map((f) => (
              <div key={f.label} className="rounded-xl glass p-3 flex items-center gap-3 text-sm">
                <f.icon className="h-4 w-4 text-gold" /> {f.label}
              </div>
            ))}
          </div>
          <div className="mt-8"><Button asChild className="bg-gold text-navy hover:bg-gold/90"><Link to="/login">Open ERP <ArrowRight className="h-4 w-4 ml-1" /></Link></Button></div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div className="rounded-[24px] glass overflow-hidden ring-1 ring-white/10 shadow-glow">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <div className="ml-3 text-xs text-white/60">erp.sjscharkapathar.com</div>
              </div>
              <div className="p-5 grid grid-cols-3 gap-4">
                {[
                  { v: "1,243", l: "Students" },
                  { v: "62", l: "Teachers" },
                  { v: "₹ 18.4L", l: "Fees this term" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl glass p-4">
                    <div className="text-[11px] uppercase tracking-wider text-white/60">{s.l}</div>
                    <div className="font-display text-2xl mt-1 text-white">{s.v}</div>
                  </div>
                ))}
                <div className="col-span-3 rounded-xl glass p-4">
                  <div className="text-[11px] uppercase tracking-wider text-white/60">Attendance trend</div>
                  <div className="mt-3 flex items-end gap-2 h-24">
                    {[60, 72, 80, 68, 90, 85, 92, 88, 95, 78, 86, 94].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-gold/40 to-gold" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                {homeworkPreview.map((h) => (
                  <div key={h.t} className="col-span-3 rounded-xl glass p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-white/10 grid place-items-center text-xs">{h.s}</div>
                      <div className="text-sm text-white/85">{h.t}</div>
                    </div>
                    <div className="text-xs text-white/50">{h.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const homeworkPreview = [
  { s: "M", t: "Mathematics — Chapter 4 worksheet", d: "Due tomorrow" },
  { s: "S", t: "Science — Lab report on photosynthesis", d: "In 3 days" },
];

function Gallery() {
  const sample = galleryItems.slice(0, 6);
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <Reveal>
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Gallery</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-gradient-navy text-balance">Moments that define our campus.</h2>
            </div>
          </Reveal>
          <Reveal delay={60}><Button asChild variant="ghost" className="text-navy"><Link to="/gallery">Open gallery <ArrowRight className="h-4 w-4 ml-1" /></Link></Button></Reveal>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 [grid-auto-rows:180px]">
          {sample.map((g, i) => (
            <Reveal key={g.id} delay={i * 50} className={i % 5 === 0 ? "row-span-2" : ""}>
              <div className="group relative h-full rounded-2xl overflow-hidden ring-1 ring-border" style={{ background: g.gradient }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-90" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="text-white/90 text-sm font-medium">{g.title}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/70 px-2 py-0.5 rounded-full bg-white/10 backdrop-blur">{g.category}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section className="py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">News & Events</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-gradient-navy text-balance">What's happening at SJS.</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {news.map((n, i) => (
            <Reveal key={n.title} delay={i * 60}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 hover:shadow-elevated transition hover:-translate-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{n.date}</span>
                  <span className="px-2 py-0.5 rounded-full bg-navy/5 text-navy text-[10px] uppercase tracking-widest">{n.tag}</span>
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
                <div className="mt-5 inline-flex items-center text-sm text-navy group-hover:gap-2 transition-all gap-1.5">Read story <ArrowRight className="h-4 w-4" /></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">In their words</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-gradient-navy max-w-3xl text-balance">Trusted by parents, loved by students.</h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 hover:shadow-elevated transition">
                <Quote className="h-6 w-6 text-gold" />
                <p className="mt-4 text-foreground leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-navy text-white grid place-items-center font-display">{t.name[0]}</div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

