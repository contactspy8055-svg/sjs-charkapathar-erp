import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-aurora">
      <div className="absolute inset-0 grid-pattern opacity-[0.35] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        {eyebrow && (
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] tracking-[0.2em] uppercase glass-light text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {eyebrow}
            </div>
          </Reveal>
        )}
        <Reveal delay={80}>
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-semibold text-balance text-gradient-navy max-w-4xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{description}</p>
          </Reveal>
        )}
        {children && <Reveal delay={200}><div className="mt-8">{children}</div></Reveal>}
      </div>
    </section>
  );
}
