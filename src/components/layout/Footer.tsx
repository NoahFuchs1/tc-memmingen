import { Link } from "lucide-react";

export default function Footer() {
  return (
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
              Ihr traditionsreicher Tennisverein im Herzen von Memmingen.
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
  );
}
