import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, ArrowRight, Navigation } from "lucide-react";
import { toast } from "sonner";
import type { FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({ meta: [
    { title: "Contact — SJS Charkapathar" },
    { name: "description", content: "Reach the admissions and administration office of SJS Charkapathar." },
  ]}),
});

function Contact() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Message sent — we'll get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title={<>We'd love to hear from you.</>} description="For admissions, partnerships or general queries — our team is here to help." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2">
            <div className="space-y-5">
              <Info icon={MapPin} k="Address" v="Charkapathar, Dist. Godda, Jharkhand" />
              <Info icon={Phone} k="Phone" v="9155869111" />
              <Info icon={Mail} k="Email" v="sjscpr20@gmail.com" />
            </div>
            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <div className="font-display text-xl">Office hours</div>
              <div className="mt-3 text-sm text-muted-foreground">Mon–Sat · 8:00 AM – 4:00 PM</div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-3" delay={80}>
            <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="name">Full name</Label><Input id="name" required /></div>
                <div><Label htmlFor="email">Email</Label><Input id="email" type="email" required /></div>
              </div>
              <div><Label htmlFor="subject">Subject</Label><Input id="subject" required /></div>
              <div><Label htmlFor="message">Message</Label><Textarea id="message" rows={6} required /></div>
              <Button type="submit" className="bg-navy text-white hover:bg-navy/90">Send message</Button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-secondary/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Visit us</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-gradient-navy text-balance">Campus location</h2>
          </Reveal>
          <div className="mt-10 grid lg:grid-cols-5 gap-8 items-stretch">
            <Reveal className="lg:col-span-3">
              <div className="relative h-full min-h-[280px] rounded-[28px] overflow-hidden ring-1 ring-border shadow-elevated bg-navy-cinematic">
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass-light p-5 flex items-start gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-navy text-white grid place-items-center">
                    <Navigation className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">St. Joseph's School, Charkapathar</div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      Charkapathar, Dist. Godda, Jharkhand — easily reachable by road from Godda town.
                    </p>
                    <p className="mt-3 text-xs text-muted-foreground">Embed Google Maps here when ready — coordinates shared at enquiry desk.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-2" delay={90}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 flex flex-col justify-center">
                <div className="font-display text-xl">Quick links</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Explore admissions, FAQs or sign in to the parent portal.</p>
                <div className="mt-8 flex flex-col gap-3">
                  <Button asChild variant="outline" className="justify-between group">
                    <Link to="/admissions">
                      Admissions overview <ArrowRight className="h-4 w-4 opacity-60 group-hover:translate-x-0.5 transition" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-between group">
                    <Link to="/faq">
                      Frequently asked questions <ArrowRight className="h-4 w-4 opacity-60 group-hover:translate-x-0.5 transition" />
                    </Link>
                  </Button>
                  <Button asChild className="bg-navy text-white hover:bg-navy/90 justify-between group">
                    <Link to="/login">
                      ERP sign in <ArrowRight className="h-4 w-4 opacity-90 group-hover:translate-x-0.5 transition" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Info({ icon: Icon, k, v }: { icon: any; k: string; v: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
      <div className="h-11 w-11 rounded-xl bg-navy text-white grid place-items-center"><Icon className="h-5 w-5" /></div>
      <div><div className="text-xs uppercase tracking-widest text-muted-foreground">{k}</div><div className="mt-0.5 font-medium">{v}</div></div>
    </div>
  );
}
