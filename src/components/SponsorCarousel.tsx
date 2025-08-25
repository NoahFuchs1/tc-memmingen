"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { Sponsor, Sponsors } from "../types/sponsors";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SponsorCarousel({ sponsors }: Sponsors) {
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
          {/* Custom Navigation Buttons */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 swiper-button-prev-custom">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 swiper-button-next-custom">
            <ChevronRight className="h-5 w-5" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={2}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="!pb-12"
          >
            {sponsors.map((sponsor: Sponsor) => (
              <SwiperSlide key={sponsor._id}>
                <div
                  className="bg-white border border-gray-200 rounded-lg p-6 h-32 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow group"
                  onClick={() =>
                    window.open(sponsor.url, "_blank", "noopener,noreferrer")
                  }
                >
                  <Image
                    src={sponsor.imageUrl}
                    alt={sponsor.name}
                    width={160}
                    height={80}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
