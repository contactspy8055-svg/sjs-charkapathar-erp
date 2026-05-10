import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { achievements } from "@/data/mock";
import { Trophy } from "lucide-react";

export const Route = createFileRoute("/achievements")({
  component: Achievements,
  head: () => ({ meta: [
    { title: "Achievements — SJS Charkapathar" },
    { name: "description", content: "A proud history of academic, sporting and cultural achievements." },
  ]}),
});

function Achievements() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Achievements" title={<>Excellence, year after year.</>} />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-10">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <div className={`relative md:grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
                    <div className="text-gold font-display text-2xl">{a.year}</div>
                    <div className="mt-1 font-display text-xl">{a.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 h-8 w-8 rounded-full bg-navy grid place-items-center text-white ring-4 ring-background">
                    <Trophy className="h-4 w-4" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
