"use client";

import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Footer from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";

const teams = [
  {
    id: 1,
    name: "Herren 1",
    image: "/images/mannschaften/Herren1.webp",
  },
  {
    id: 2,
    name: "Herren 2",
    image: "/images/mannschaften/herrren2.webp",
  },
  {
    id: 3,
    name: "Herren 40",
    image: "/images/mannschaften/Herren40.webp",
  },
  {
    id: 4,
    name: "Damen 50",
    image: "/images/mannschaften/Damen50.webp",
  },
  {
    id: 5,
    name: "Junioren U15",
    image: "/images/mannschaften/Knaben15.webp",
  },
  {
    id: 6,
    name: "Junioren U18",
    image: "/images/mannschaften/U-18-1Reihe.webp",
  },
  {
    id: 7,
    name: "Bambina U12",
    image: "/images/mannschaften/U12-Bambina.webp",
  },
];

export default function TeamsPage() {
  const [selectedTeam, setSelectedTeam] = useState<(typeof teams)[0] | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (team: (typeof teams)[0]) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTeam(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header></Header>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Unsere Mannschaften
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Lernen Sie unsere Mannschaften kennen
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teams.map((team) => (
              <div
                key={team.id}
                className="group cursor-pointer"
                onClick={() => openModal(team)}
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={team.image || "/placeholder.svg"}
                      alt={`${team.name} Team`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {team.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-7xl w-full h-full max-h-[90vh] p-0 bg-black/95">
          <DialogTitle className="sr-only">
            {selectedTeam ? `${selectedTeam.name} Team` : "Team Foto"}
          </DialogTitle>

          {selectedTeam && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Main Image */}
              <div className="relative w-full h-full flex items-center justify-center p-8">
                <div className="relative max-w-full max-h-full">
                  <Image
                    src={selectedTeam.image || "/placeholder.svg"}
                    alt={`${selectedTeam.name} Team`}
                    width={1200}
                    height={900}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Team Name */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-center">
                  <h2 className="text-white text-2xl font-bold">
                    {selectedTeam.name}
                  </h2>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer></Footer>
    </div>
  );
}
