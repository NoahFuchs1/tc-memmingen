"using client";

import Image from "next/image";
import { Sponsor, Sponsors } from "../types/sponsors";

export default function SponsorsGrid({ sponsors }: Sponsors) {
  const handleSponsorClick = (website: string) => {
    window.open(website, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor: Sponsor) => (
            <a
              key={sponsor._id}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 h-38 flex items-center justify-center group-hover:scale-105 border border-gray-100">
                <Image
                  src={sponsor.imageUrl || "/images/sponsor-placeholder.svg"}
                  alt={sponsor.name}
                  width={440}
                  height={220}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
