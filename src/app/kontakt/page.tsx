import Footer from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";

export default function ContactSection() {
  return (
    <>
      <Header></Header>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl mb-6 text-center">Kontakt</h2>
          <form
            action="https://formsubmit.co/noah.fuchs@icloud.com"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message"
              >
                Nachricht
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="privacy"
                id="privacy"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="ml-2 text-sm">
                Ich habe die{" "}
                <a href="/datenschutz" className="text-blue-600 underline">
                  Datenschutzbestimmungen
                </a>{" "}
                gelesen
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
