import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

/** Admissions strip — same visual language as the homepage CTA. */
export function SiteCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-navy-cinematic text-white p-10 md:p-16 ring-1 ring-white/10 shadow-glow">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-white/60">Admissions 2026 – 27</div>
                <h3 className="mt-3 font-display text-4xl md:text-5xl text-balance">Begin your child's journey at SJS Charkapathar.</h3>
                <p className="mt-4 text-white/70 max-w-xl">Limited seats. Apply today and join a community of curious minds and confident hearts.</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90 shadow-gold">
                  <Link to="/admissions">
                    Apply now <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                  <Link to="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
