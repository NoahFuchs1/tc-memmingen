import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/Logo.webp"
                alt="Logo TCM"
                width={40}
                height={40}
              />

              <span className="font-bold text-lg">TC Memmingen</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-gray-400">
              <p>Am Stadion 3</p>
              <p>87700 Memmingen</p>
              <p>Tel: +49 160 92296084</p>
              <p>info@tc-memmingen.de</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Schnelllinks</h3>
            <div className="space-y-2">
              <Link
                href="http://tc-memmingen.tennisplatz.info/reservierung"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Platz buchen
              </Link>
              <Link
                href="/https://www.atg-mm.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                ATG Tennis
              </Link>
              <Link
                href="https://www.btv.de/de/mein-verein/vereinsseite/tc-memmingen.html#Mannschaften"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                BTV Tennis
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <div className="space-y-2">
              <Link
                href="/impressum"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TC Memmingen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
