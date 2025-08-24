// components/SponsorSlider.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Wenn du den Typ schon global hast, kannst du die nächste Zeile löschen
export interface Sponsor {
  _id: string;
  name: string;
  url: string;
  imageUrl: string;
}

interface SponsorSliderProps {
  sponsors: Sponsor[];
}

export default function SponsorSlider({ sponsors }: SponsorSliderProps) {
  // Responsive Anzahl sichtbarer Items (Apple-clean: viel White Space, ruhig)
  const getVisible = () => {
    if (typeof window === "undefined") return 5; // SSR fallback
    if (window.matchMedia("(min-width: 1024px)").matches) return 5; // lg+
    if (window.matchMedia("(min-width: 640px)").matches) return 3; // sm–lg
    return 2; // xs
  };

  const [visibleItems, setVisibleItems] = useState<number>(getVisible());
  const [currentIndex, setCurrentIndex] = useState(0);

  // Maximaler Startindex, damit nie „leerer Raum“ rechts sichtbar wird
  const maxIndex = useMemo(
    () => Math.max(0, (sponsors?.length || 0) - visibleItems),
    [sponsors?.length, visibleItems]
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-Slide alle 3s
  useEffect(() => {
    if (!sponsors || sponsors.length === 0) return;
    const id = setInterval(nextSlide, 3000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex, sponsors?.length, visibleItems]);

  // Reagiere auf Resize/Breakpoint-Changes
  useEffect(() => {
    const onResize = () => setVisibleItems(getVisible());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!sponsors || sponsors.length === 0) {
    return null;
  }

  const itemBasis = `${100 / visibleItems}%`;
  const translateX = `-${(currentIndex * 100) / visibleItems}%`;

  const showArrows = sponsors.length > visibleItems;

  return (
    <section
      className="container mx-auto py-10"
      role="region"
      aria-label="Sponsoren-Slider"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white">
        {/* Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out will-change-transform"
          style={{ transform: `translateX(${translateX})` }}
        >
          {sponsors.map((sponsor) => (
            <div
              key={sponsor._id}
              className="flex-shrink-0 p-6"
              style={{ flexBasis: itemBasis }}
            >
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full h-20 md:h-24 lg:h-28 relative rounded-xl ring-1 ring-black/5 hover:ring-black/10 transition"
                aria-label={`Zu ${sponsor.name} wechseln (neuer Tab)`}
              >
                <Image
                  src={sponsor.imageUrl}
                  alt={sponsor.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition"
                  priority={false}
                />
              </a>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {showArrows && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Vorherige Sponsoren"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur px-2.5 py-2 shadow-sm ring-1 ring-black/5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Nächste Sponsoren"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur px-2.5 py-2 shadow-sm ring-1 ring-black/5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
