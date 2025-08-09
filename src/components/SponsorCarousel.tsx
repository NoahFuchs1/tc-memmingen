"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const sponsors = [
  {
    id: 1,
    name: "SportMax Memmingen",
    logo: "/placeholder.svg?height=80&width=160",
    website: "https://sportmax-memmingen.de",
  },
  {
    id: 2,
    name: "Allgäuer Volksbank",
    logo: "/placeholder.svg?height=80&width=160",
    website: "https://allgaeuer-volksbank.de",
  },
  {
    id: 3,
    name: "Hotel Weisses Ross",
    logo: "/placeholder.svg?height=80&width=160",
    website: "https://weisses-ross-memmingen.de",
  },
  {
    id: 4,
    name: "Bäckerei Müller",
    logo: "/placeholder.svg?height=80&width=160",
    website: "https://baeckerei-mueller.de",
  },
  {
    id: 5,
    name: "Autohaus Schmidt",
    logo: "/placeholder.svg?height=80&width=160",
    website: "https://autohaus-schmidt.de",
  },
  {
    id: 6,
    name: "Physiotherapie Aktiv",
    logo: "/placeholder.svg?height=80&width=160",
    website: "https://physio-aktiv-memmingen.de",
  },
  {
    id: 7,
    name: "Stadtwerke Memmingen",
    logo: "/placeholder.svg?height=80&width=160",
    website: "https://stadtwerke-memmingen.de",
  },
  {
    id: 8,
    name: "Restaurant Tennisklause",
    logo: "/placeholder.svg?height=80&width=160",
    website: "https://tennisklause-memmingen.de",
  },
];

export default function SponsorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= sponsors.length - 4 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex >= sponsors.length - 4 ? 0 : prevIndex + 1
    );
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? sponsors.length - 4 : prevIndex - 1
    );
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleSponsorClick = (website: string) => {
    window.open(website, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unsere Partner
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wir danken unseren Sponsoren für ihre Unterstützung und
            Partnerschaft
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {sponsors.map((sponsor) => (
                <div key={sponsor.id} className="flex-shrink-0 w-1/4 px-4">
                  <div
                    className="bg-white border border-gray-200 rounded-lg p-6 h-32 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow group"
                    onClick={() => handleSponsorClick(sponsor.website)}
                  >
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      width={160}
                      height={80}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: sponsors.length - 3 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-green-600" : "bg-gray-300"
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
