import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { careers } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin } from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: Careers,
  head: () => ({ meta: [
    { title: "Careers — SJS Charkapathar" },
    { name: "description", content: "Join the SJS Charkapathar teaching family. Current openings." },
  ]}),
});

function Careers() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Careers" title={<>Teach where it matters.</>} description="Join a school where educators are valued, supported and given the freedom to teach beautifully." />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 space-y-3">
          {careers.map((c, i) => (
            <Reveal key={c.role} delay={i * 60}>
              <div className="rounded-2xl border border-border bg-card p-6 flex items-center gap-5">
                <div className="h-12 w-12 rounded-xl bg-navy text-white grid place-items-center"><Briefcase className="h-5 w-5" /></div>
                <div className="flex-1">
                  <div className="font-display text-lg">{c.role}</div>
                  <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground"><span>{c.type}</span> · <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {c.location}</span></div>
                </div>
                <Button asChild variant="outline"><Link to="/contact">Apply</Link></Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
