"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface EventCarouselSlide {
  src: string;
  alt: string;
}

interface EventCarouselProps {
  slides: EventCarouselSlide[];
}

export function EventCarousel({ slides }: EventCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (slides.length === 0) {
    return null;
  }

  const currentSlide = slides[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/20 shadow-sm">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={currentSlide.src}
            alt={currentSlide.alt}
            fill
            className="object-cover"
            priority={activeIndex === 0}
          />
        </div>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-background/90 p-2 text-foreground shadow-sm transition-colors hover:bg-background"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-background/90 p-2 text-foreground shadow-sm transition-colors hover:bg-background"
              aria-label="Next photo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {slides.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={`${slide.src}-${slide.alt}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-[#00827e]" : "w-2.5 bg-muted-foreground/35"
              }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}