import { Header } from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import { client } from "@/sanity/client";
import { sponsorsQurey } from "@/sanity/queries";
import SponsorsGrid from "@/src/components/SponsorsGrid";

const sponsors = await client.fetch(sponsorsQurey);

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

      <SponsorsGrid sponsors={sponsors}></SponsorsGrid>

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
              <a href="/kontakt">Kontakt aufnehmen</a>
            </button>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}
