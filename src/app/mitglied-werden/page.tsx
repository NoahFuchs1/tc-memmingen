import { Button } from "@/components/ui/button";
import Footer from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";

export default function MitgliedWerden() {
  return (
    <>
      <Header></Header>
      <div className="container flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl text-center font-medium my-4">
          Mitglied werden
        </h2>
        <p className="mb-4">
          Lade dir einfach den Mitgliedsantrag herunter, drucke ihn aus und
          fülle ihn aus. Anschließend kannst du den ausgefüllten Antrag entweder
          per E-Mail an{" "}
          <a className="text-blue-800" href="mailto:info@tc-memmingen.de">
            info@tc-memmingen.de
          </a>{" "}
          senden oder direkt beim Verein abgeben. Wir freuen uns, dich bald als
          neues Mitglied begrüßen zu dürfen!
        </p>
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
        >
          <a
            href="https://tc-memmingen.vercel.app/Mitgliedsantrag-2.pdf"
            download
          >
            Mitgliedsantrag herunterladen
          </a>
        </Button>
        <iframe
          className="w-[90%] sm:w-full h-[800px] my-8"
          src="/Mitgliedsantrag-2.pdf"
        ></iframe>
      </div>
      <Footer></Footer>
    </>
  );
}
