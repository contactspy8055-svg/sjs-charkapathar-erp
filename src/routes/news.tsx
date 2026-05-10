import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { news, upcomingEvents, notices } from "@/data/mock";
import { ArrowRight, CalendarDays, Megaphone } from "lucide-react";
import { SiteCTA } from "@/components/site/SiteCTA";

export const Route = createFileRoute("/news")({
  component: News,
  head: () => ({
    meta: [
      { title: "News & Events — SJS Charkapathar" },
      { name: "description", content: "Latest news, events and announcements from SJS Charkapathar." },
    ],
  }),
});

function News() {
  const [featured, ...rest] = news;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="News & Events"
        title={<>Stories, achievements and moments from campus.</>}
        description="Stay updated with celebrations, academic milestones, sports victories and official announcements — all in one place."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Featured</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-gradient-navy text-balance">Latest spotlight</h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            <Reveal className="lg:col-span-2">
              <article className="group h-full rounded-2xl border border-border bg-card p-8 md:p-10 hover:shadow-elevated transition hover:-translate-y-1">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-muted-foreground">{featured.date}</span>
                  <span className="px-2 py-0.5 rounded-full bg-navy/5 text-navy text-[10px] uppercase tracking-widest">{featured.tag}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl md:text-3xl leading-snug text-balance">{featured.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{featured.excerpt}</p>
                <div className="mt-8 inline-flex items-center text-sm text-navy gap-1.5 group-hover:gap-2 transition-all">
                  Read full story <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 flex flex-col">
                <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                  <Megaphone className="h-4 w-4 text-gold" /> Quick reads
                </div>
                <ul className="mt-6 space-y-4 flex-1">
                  {rest.slice(0, 3).map((n) => (
                    <li key={n.title} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <div className="text-xs text-muted-foreground">{n.date}</div>
                      <div className="mt-1 font-medium leading-snug">{n.title}</div>
                    </li>
                  ))}
                </ul>
                <Link to="/notices" className="mt-6 text-sm text-navy inline-flex items-center gap-1 hover:gap-2 transition-all">
                  All notices <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((n, i) => (
              <Reveal key={n.title} delay={i * 50}>
                <article className="group h-full rounded-2xl border border-border bg-card p-6 hover:shadow-elevated hover:-translate-y-1 transition">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{n.date}</span>
                    <span className="px-2 py-0.5 rounded-full bg-navy/5 text-navy text-[10px] uppercase tracking-widest">{n.tag}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl leading-snug">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{n.excerpt}</p>
                  <div className="mt-5 inline-flex items-center text-sm text-navy gap-1.5 group-hover:gap-2 transition-all">
                    Read story <ArrowRight className="h-4 w-4" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Calendar</div>
                <h2 className="mt-3 font-display text-3xl md:text-4xl text-gradient-navy text-balance">Upcoming events</h2>
              </div>
              <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                Mark your calendar — programme details are shared closer to each date via notices and the school ERP.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {upcomingEvents.map((ev, i) => (
              <Reveal key={ev.title} delay={i * 60}>
                <div className="flex gap-4 rounded-2xl border border-border bg-card p-6 hover:shadow-elevated transition">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-navy text-white grid place-items-center">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-muted-foreground">{ev.date}</span>
                      <span className="px-2 py-0.5 rounded-full bg-navy/5 text-navy text-[10px] uppercase tracking-widest">{ev.tag}</span>
                    </div>
                    <div className="mt-2 font-display text-lg leading-snug">{ev.title}</div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {ev.time} · {ev.location}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Official notices</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-gradient-navy text-balance">Recent circulars</h2>
          </Reveal>
          <div className="mt-10 rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
            {notices.map((n, i) => (
              <Reveal key={n.title} delay={i * 40}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 py-5 hover:bg-secondary/30 transition">
                  <div className="font-medium">{n.title}</div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span>{n.date}</span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary text-xs uppercase tracking-wider">{n.category}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteCTA />
    </SiteLayout>
  );
}
