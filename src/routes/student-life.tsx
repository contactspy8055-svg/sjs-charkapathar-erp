import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/student-life")({
  component: StudentLife,
  head: () => ({ meta: [
    { title: "Student Life — SJS Charkapathar" },
    { name: "description", content: "Clubs, sports, arts, leadership — life at SJS Charkapathar." },
  ]}),
});

const clubs = [
  { t: "Literary Club", d: "Debates, MUNs, creative writing and elocution." },
  { t: "Science Club", d: "Olympiads, science fairs, hands-on experiments." },
  { t: "Music & Dance", d: "Choir, orchestra, classical and folk dance." },
  { t: "Eco Club", d: "Tree-planting, recycling drives, awareness programs." },
  { t: "Sports", d: "Football, cricket, basketball, athletics & yoga." },
  { t: "Leadership", d: "House captains, prefects and student council." },
];

function StudentLife() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Student Life"
        title={<>Life beyond the classroom.</>}
        description="A vibrant ecosystem of clubs, sports, arts and leadership opportunities — designed to grow well-rounded young adults."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {clubs.map((c, i) => (
            <Reveal key={c.t} delay={i * 50}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 hover:shadow-elevated transition">
                <div className="font-display text-xl">{c.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
