import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  Trophy,
  Heart,
  Sprout,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/src/components/layout/Header";

export default function MottoGeschichtePage() {
  const facilities = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "10 Sandplätze",
      description:
        "Gepflegte Sandplätze im Freien für optimale Spielbedingungen",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "3 Hallenplätze",
      description: "Moderne Hallenplätze für ganzjähriges Training",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Tennis Base",
      description: "Qualifiziertes Training durch professionelle Coaches",
    },
  ];

  const values = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Sportlich",
      description: "Höchste Qualität in Training und Wettkampf",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Offen",
      description: "Willkommen für alle Spielstärken und Altersgruppen",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Fair",
      description: "Respektvoller Umgang und sportliche Fairness",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header></Header>

      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/TC-Memmingen-Heim.webp"
          alt="TC Memmingen Tennisanlage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <Badge className="mb-4 bg-red-600 hover:bg-red-700 text-white">
            Seit 1928
          </Badge>
          <h1 className="text-2xl md:text-4xl font-medium mb-6">
            🏆 Über uns – Der TC Memmingen e.V.
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Tradition trifft Moderne – seit 1928
            <br /> Der Tennisclub Memmingen e.V. ist der älteste und größte
            Tennisverein der Stadt. Mit einer beinahe 100-jährigen Geschichte
            steht der TCM für eine lebendige Tennis-Tradition und modernes
            Clubleben auf höchstem Niveau.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Trophy className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Über uns – Der TC Memmingen e.V.
                </h2>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Der Tennisclub Memmingen e.V. ist der älteste und größte
                Tennisverein der Stadt. Mit einer beinahe 100-jährigen
                Geschichte steht der TCM für eine lebendige Tennis-Tradition und
                modernes Clubleben auf höchstem Niveau.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Seit unserer Gründung im Jahr 1928 haben wir uns kontinuierlich
                weiterentwickelt und sind heute ein moderner Verein mit rund 350
                Mitgliedern, der Tradition und Innovation perfekt miteinander
                verbindet.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">1928</div>
                  <div className="text-sm text-gray-500">Gegründet</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">350+</div>
                  <div className="text-sm text-gray-500">Mitglieder</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">96</div>
                  <div className="text-sm text-gray-500">Jahre Tradition</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Historisches+Clubhaus+TC+Memmingen"
                alt="Historisches Clubhaus TC Memmingen"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Unsere Anlage – Sport auf höchstem Niveau
              </h2>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Zehn gepflegte Sandplätze im Freien und drei moderne Hallenplätze
              bieten ganzjährig optimale Spielbedingungen für Tennisbegeisterte
              aller Spielstärken.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-4 mx-auto">
                    {facility.icon}
                  </div>
                  <CardTitle className="text-xl">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {facility.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=TC+Memmingen+von+oben"
                alt="TC Memmingen Tennisanlage von oben"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Tennisplätze+von+der+Seite+mit+Fußballfeld"
                alt="Tennisplätze von der Seite mit Fußballfeld im Hintergrund"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For All Skill Levels Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Training+Tennis+Base+Memmingen"
                alt="Training bei der Tennis Base Memmingen"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Für alle Spielstärken
                </h2>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">
                Von Freizeit bis Wettkampf
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Ob Anfänger oder Mannschaftsspieler – mit qualifiziertem
                Training durch unsere Coaches der Tennis Base Memmingen,
                spannenden Turnieren und Teamwettbewerben ist für alle etwas
                geboten.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Qualifiziertes Training</h4>
                    <p className="text-gray-600">
                      Professionelle Coaches der Tennis Base Memmingen
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Spannende Turniere</h4>
                    <p className="text-gray-600">
                      Regelmäßige Vereinsturniere für alle Altersklassen
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Teamwettbewerbe</h4>
                    <p className="text-gray-600">
                      Mannschaftsspiele in verschiedenen Leistungsklassen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Club Life Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Vereinsleben – Mehr als nur Tennis
              </h2>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Der TCM ist ein Ort der Begegnung. Sommerfeste, Jugendcamps und
              Clubabende schaffen ein starkes Miteinander – sportlich, familiär
              und engagiert.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 text-red-600 mr-2" />
                  Sommerfeste
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Jährliche Höhepunkte mit der ganzen Vereinsfamilie bei Musik,
                  Essen und guter Stimmung.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 text-red-600 mr-2" />
                  Jugendcamps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Intensive Trainingscamps für unsere Nachwuchstalente mit Spaß
                  und sportlicher Förderung.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 text-red-600 mr-2" />
                  Clubabende
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Gesellige Abende im Vereinsheim für Austausch, Planung und
                  Gemeinschaftsgefühl.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Sprout className="h-8 w-8 text-white mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Zukunft gestalten – mit klaren Werten
              </h2>
            </div>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Mit rund 350 Mitgliedern, einem engagierten Vorstand, digitalen
              Tools und einer klaren Vereinsstruktur blicken wir gemeinsam in
              die Zukunft.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="opacity-90">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Werde jetzt Mitglied!</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Mitglied werden
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 bg-transparent"
              >
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">TC</span>
                </div>
                <span className="font-bold text-lg">TC Memmingen</span>
              </div>
              <p className="text-gray-400">
                Tradition trifft Moderne – seit 1928
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
              <div className="space-y-2 text-gray-400">
                <p>Tennisstraße 123</p>
                <p>87700 Memmingen</p>
                <p>Tel: 08331 / 12345</p>
                <p>info@tc-memmingen.de</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Schnelllinks</h3>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Trainingszeiten
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Platzreservierung
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Mitgliedschaft
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Turniere
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Öffnungszeiten</h3>
              <div className="space-y-2 text-gray-400">
                <p>Mo-Fr: 8:00 - 22:00</p>
                <p>Sa-So: 8:00 - 20:00</p>
                <p>Vereinsheim:</p>
                <p>täglich ab 17:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TC Memmingen. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
