import { MapPin, Trophy, Users } from "lucide-react";

export default function FacilitiesSection() {
  const facilities = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "6 Sandplätze",
      description:
        "Professionell gepflegte Sandplätze für optimales Spielerlebnis",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Vereinsheim",
      description: "Gemütliches Clubhaus mit Terrasse und Bewirtung",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Zentrale Lage",
      description:
        "Mitten in Memmingen, gut erreichbar mit öffentlichen Verkehrsmitteln",
    },
  ];

  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unsere Anlagen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Moderne Ausstattung und gepflegte Anlagen für das beste
            Tenniserlebnis
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                {facility.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
