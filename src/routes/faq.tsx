import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/mock";

export const Route = createFileRoute("/faq")({
  component: FAQ,
  head: () => ({ meta: [
    { title: "FAQs — SJS Charkapathar" },
    { name: "description", content: "Frequently asked questions about admissions, fees, and academics at SJS Charkapathar." },
  ]}),
});

function FAQ() {
  return (
    <SiteLayout>
      <PageHero eyebrow="FAQs" title={<>Quick answers to common questions.</>} />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card divide-y divide-border">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`q-${i}`} className="px-5">
                  <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
