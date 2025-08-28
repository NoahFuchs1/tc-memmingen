"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";

const sponsors = [
  {
    id: 1,
    name: "SportMax Memmingen",
    logo: "/placeholder.svg?height=120&width=240&text=SportMax+Memmingen",
    website: "https://sportmax-memmingen.de",
  },
  {
    id: 2,
    name: "Allgäuer Volksbank",
    logo: "/placeholder.svg?height=120&width=240&text=Allgäuer+Volksbank",
    website: "https://allgaeuer-volksbank.de",
  },
  {
    id: 3,
    name: "Hotel Weisses Ross",
    logo: "/placeholder.svg?height=120&width=240&text=Hotel+Weisses+Ross",
    website: "https://weisses-ross-memmingen.de",
  },
  {
    id: 4,
    name: "Bäckerei Müller",
    logo: "/placeholder.svg?height=120&width=240&text=Bäckerei+Müller",
    website: "https://baeckerei-mueller.de",
  },
  {
    id: 5,
    name: "Autohaus Schmidt",
    logo: "/placeholder.svg?height=120&width=240&text=Autohaus+Schmidt",
    website: "https://autohaus-schmidt.de",
  },
  {
    id: 6,
    name: "Physiotherapie Aktiv",
    logo: "/placeholder.svg?height=120&width=240&text=Physiotherapie+Aktiv",
    website: "https://physio-aktiv-memmingen.de",
  },
  {
    id: 7,
    name: "Stadtwerke Memmingen",
    logo: "/placeholder.svg?height=120&width=240&text=Stadtwerke+Memmingen",
    website: "https://stadtwerke-memmingen.de",
  },
  {
    id: 8,
    name: "Restaurant Tennisklause",
    logo: "/placeholder.svg?height=120&width=240&text=Restaurant+Tennisklause",
    website: "https://tennisklause-memmingen.de",
  },
  {
    id: 9,
    name: "Memminger Brauerei",
    logo: "/placeholder.svg?height=120&width=240&text=Memminger+Brauerei",
    website: "https://memminger-brauerei.de",
  },
  {
    id: 10,
    name: "Sparkasse Memmingen",
    logo: "/placeholder.svg?height=120&width=240&text=Sparkasse+Memmingen",
    website: "https://sparkasse-memmingen.de",
  },
  {
    id: 11,
    name: "Elektro Wagner",
    logo: "/placeholder.svg?height=120&width=240&text=Elektro+Wagner",
    website: "https://elektro-wagner.de",
  },
  {
    id: 12,
    name: "Zahnarztpraxis Dr. Klein",
    logo: "/placeholder.svg?height=120&width=240&text=Dr.+Klein+Zahnarzt",
    website: "https://zahnarzt-klein-memmingen.de",
  },
];

const handleSponsorClick = (website: string) => {
  window.open(website, "_blank", "noopener,noreferrer");
};

export default function SponsorenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header></Header>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Unsere Sponsoren
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Wir danken unseren wertvollen Partnern für ihre Unterstützung
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="group cursor-pointer"
                onClick={() => handleSponsorClick(sponsor.website)}
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8 h-32 flex items-center justify-center group-hover:scale-105 border border-gray-100">
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={240}
                    height={120}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Werden Sie unser Partner
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Interessiert an einer Partnerschaft mit dem TC Memmingen?
            Kontaktieren Sie uns für individuelle Sponsoring-Möglichkeiten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors">
              Partnerschaft anfragen
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-md font-semibold transition-colors bg-transparent">
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}
