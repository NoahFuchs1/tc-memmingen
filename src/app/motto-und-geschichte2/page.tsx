import Footer from "@/src/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 font-sans">
      {/* SEKTION 1: INTRO & VEREINSLEBEN */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                👥 Für alle Spielstärken – Von Freizeit bis Wettkampf
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ob Anfänger oder Mannschaftsspieler – mit qualifiziertem
                Training durch unsere Coaches der Tennis Base Memmingen,
                spannenden Turnieren und Teamwettbewerben ist für alle etwas
                geboten.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                ❤️ Vereinsleben – Mehr als nur Tennis
              </h2>
              <p className="text-lg text-gray-600">
                Der TCM ist ein Ort der Begegnung. Sommerfeste, Jugendcamps und
                Clubabende schaffen ein starkes Miteinander – sportlich,
                familiär und engagiert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTALE TRENNLINIE */}
      <div className="container mx-auto px-6">
        <hr className="border-t border-gray-200" />
      </div>

      {/* SEKTION 2: ANLAGE MIT BILDERN */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🎾 Unsere Anlage – Sport auf höchstem Niveau
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Zehn gepflegte Sandplätze im Freien und drei moderne Hallenplätze
              bieten ganzjährig optimale Spielbedingungen für Tennisbegeisterte
              aller Spielstärken.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              {/* Ersetze 'src' mit deinem Bildpfad in /public */}
              <Image
                src="/tc-memmingen-oben.jpg"
                alt="TC-Memmingen von oben"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              {/* Ersetze 'src' mit deinem Bildpfad in /public */}
              <Image
                src="/tennisplaetze-seite.jpg"
                alt="Tennisplätze von der Seite mit Fußballfeld im Hintergrund"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTALE TRENNLINIE */}
      <div className="container mx-auto px-6">
        <hr className="border-t border-gray-200" />
      </div>

      {/* SEKTION 3: ZUKUNFT & CALL TO ACTION */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            🌱 Zukunft gestalten – mit klaren Werten
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Mit rund 350 Mitgliedern, einem engagierten Vorstand, digitalen
            Tools und einer klaren Vereinsstruktur blicken wir gemeinsam in die
            Zukunft – sportlich, offen und fair.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Werde jetzt Mitglied!
          </h3>
          <Link href="/mitglied-werden" legacyBehavior>
            <a className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
              Mitglied werden
            </a>
          </Link>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
