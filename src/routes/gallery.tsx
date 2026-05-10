import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { galleryItems } from "@/data/mock";
import { X } from "lucide-react";
import { SiteCTA } from "@/components/site/SiteCTA";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({ meta: [
    { title: "Gallery — SJS Charkapathar" },
    { name: "description", content: "Premium photo gallery of campus moments, events, sports and culture." },
  ]}),
});

const cats = ["all", "events", "sports", "culture", "academics", "students", "campus"];

function Gallery() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState<number | null>(null);
  const items = filter === "all" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title={<>A glimpse into life at SJS Charkapathar.</>}
        description="A curated archive of moments — from classrooms and labs to celebrations and championships. Real campus photos coming soon."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm capitalize transition border ${
                  filter === c ? "bg-navy text-white border-navy" : "bg-card border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 [grid-auto-rows:200px]">
            {items.map((g, i) => (
              <Reveal key={g.id} delay={i * 30} className={i % 7 === 0 ? "row-span-2" : i % 5 === 0 ? "col-span-2" : ""}>
                <button
                  onClick={() => setOpen(g.id)}
                  className="group relative h-full w-full rounded-2xl overflow-hidden ring-1 ring-border"
                  style={{ background: g.gradient }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="text-white text-sm font-medium">{g.title}</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/70 px-2 py-0.5 rounded-full bg-white/15 backdrop-blur">{g.category}</div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteCTA />

      {open !== null && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md grid place-items-center p-6 animate-in fade-in">
          <div className="relative max-w-4xl w-full aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/10" style={{ background: galleryItems.find((g) => g.id === open)?.gradient }}>
            <button onClick={() => setOpen(null)} className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-xl glass text-white"><X className="h-5 w-5" /></button>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="font-display text-3xl">{galleryItems.find((g) => g.id === open)?.title}</div>
              <div className="text-sm text-white/70 capitalize">{galleryItems.find((g) => g.id === open)?.category}</div>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
