import { Badge } from "@/components/ui/badge";
import Footer from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
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

      {/* Sektion 1 */}
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
        {/* Text links */}
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl">
            🎾 Unsere Anlage – Sport auf höchstem Niveau
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Zehn gepflegte Sandplätze im Freien und drei moderne Hallenplätze
            bieten ganzjährig optimale Spielbedingungen für Tennisbegeisterte
            aller Spielstärken.
          </p>

          <h3 className="text-xl md:text-2xl">
            👥 Für alle Spielstärken – Von Freizeit bis Wettkampf
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Ob Anfänger oder Mannschaftsspieler – mit qualifiziertem Training
            durch unsere Coaches der Tennis Base Memmingen, spannenden Turnieren
            und Teamwettbewerben ist für alle etwas geboten.
          </p>
        </div>

        {/* Bild rechts */}
        <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/Tennisplätze-seitlich.webp" // dein Bildpfad
            alt="Tennisanlage"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Sektion 2 */}
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-20">
        {/* Bild links */}
        <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg order-1 md:order-none">
          <Image
            src="/images/TC-Memmingen-überuns.webp" // dein Bildpfad
            alt="Vereinsleben"
            fill
            className="object-cover"
          />
        </div>

        {/* Text rechts */}
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl">
            ❤️ Vereinsleben – Mehr als nur Tennis
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Der TCM ist ein Ort der Begegnung. Sommerfeste, Jugendcamps und
            Clubabende schaffen ein starkes Miteinander – sportlich, familiär
            und engagiert.
          </p>

          <h3 className="text-xl md:text-2xl">
            🌱 Zukunft gestalten – mit klaren Werten
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Mit rund 370 Mitgliedern, einem engagierten Vorstand, digitalen
            Tools und einer klaren Vereinsstruktur blicken wir gemeinsam in die
            Zukunft – sportlich, offen und fair.
          </p>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
