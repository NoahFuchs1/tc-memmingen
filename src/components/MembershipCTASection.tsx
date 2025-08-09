import { Button } from "@/components/ui/button";

export default function MembershipCTASection() {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Werden Sie Teil unserer Tennis-Familie
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Entdecken Sie die Freude am Tennis in unserem traditionsreichen
          Verein. Für Anfänger und Fortgeschrittene jeden Alters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Mitgliedschaft anfragen
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
    </section>
  );
}
