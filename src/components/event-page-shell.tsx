import type { ReactNode } from "react";
import { EventCarousel, type EventCarouselSlide } from "@/components/event-carousel";

interface EventPageShellProps {
  title: string;
  intro: ReactNode;
  slides: EventCarouselSlide[];
  children?: ReactNode;
}

export function EventPageShell({ title, intro, slides, children }: EventPageShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <article className="mx-auto max-w-5xl space-y-10">
          <header className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-muted-foreground">
              {title}
            </h1>
            <div className="space-y-4 text-lg leading-8 text-muted-foreground">{intro}</div>
          </header>

          <EventCarousel slides={slides} />

          {children && <section className="space-y-6 text-lg leading-8 text-muted-foreground">{children}</section>}
        </article>
      </div>
    </div>
  );
}