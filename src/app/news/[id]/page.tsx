import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, User, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ImageGallery from "@/src/components/ui/IamgeGallery";

const newsArticles = [
  {
    id: 1,
    title: "Sommerfest 2024 - Ein voller Erfolg!",
    excerpt:
      "Unser jährliches Sommerfest war wieder ein Highlight der Saison mit über 200 Gästen.",
    content: `Das diesjährige Sommerfest des TC Memmingen war ein voller Erfolg! Bei strahlendem Sonnenschein kamen über 200 Mitglieder, Freunde und Gäste zusammen, um gemeinsam zu feiern und die Gemeinschaft zu stärken.

Das Fest begann um 14:00 Uhr mit einem Begrüßungscocktail auf der Clubterrasse. Unser Vereinsvorsitzender Hans Müller begrüßte alle Anwesenden herzlich und blickte auf ein erfolgreiches Tennisjahr zurück.

Besondere Highlights waren:
- Das Showmatch zwischen unseren Vereinsmeistern
- Die Tombola mit fantastischen Preisen
- Live-Musik der Band "Tennisklänge"
- Köstliche Grillspezialitäten vom Vereinsgrill

Ein herzlicher Dank geht an alle Helfer und Sponsoren, die dieses wunderbare Fest möglich gemacht haben. Bereits jetzt freuen wir uns auf das Sommerfest 2025!

Die Stimmung war den ganzen Tag über ausgelassen und fröhlich. Besonders die Kinder hatten ihren Spaß bei den organisierten Spielen und dem Kinderschminken. Auch das Showmatch zwischen unserem Vereinsmeister Michael Weber und der ehemaligen Bundesligaspielerin Sandra Hoffmann war ein echter Höhepunkt.

Die Tombola, gesponsert von unseren lokalen Partnern, bot wieder fantastische Preise. Der Hauptgewinn - ein Wochenende in einem Wellness-Hotel - ging an unser langjähriges Mitglied Ingrid Maier.

Kulinarisch wurden alle Wünsche erfüllt: Von klassischen Bratwürsten über vegetarische Alternativen bis hin zu selbstgemachten Kuchen war für jeden Geschmack etwas dabei. Besonders beliebt war wieder der traditionelle Tennisball-Kuchen unserer Konditorin Maria Schmidt.`,
    date: "15. Juli 2024",
    author: "Hans Müller",
    category: "Veranstaltung",
    readTime: "3 min",
    image:
      "/placeholder.svg?height=400&width=800&text=Sommerfest+2024+Hauptbild",
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800&text=Begrüßungscocktail+auf+der+Terrasse",
        alt: "Begrüßungscocktail auf der Clubterrasse",
        caption: "Begrüßungscocktail auf der sonnigen Clubterrasse",
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Showmatch+Weber+vs+Hoffmann",
        alt: "Showmatch zwischen Michael Weber und Sandra Hoffmann",
        caption:
          "Spannendes Showmatch zwischen Michael Weber und Sandra Hoffmann",
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Kinderprogramm+und+Spiele",
        alt: "Kinder beim Spielen und Kinderschminken",
        caption: "Die kleinen Gäste hatten großen Spaß beim Kinderprogramm",
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Live+Band+Tennisklänge",
        alt: "Live-Musik der Band Tennisklänge",
        caption: "Die Band 'Tennisklänge' sorgte für die perfekte Stimmung",
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Grillstation+und+Buffet",
        alt: "Grillstation mit köstlichen Spezialitäten",
        caption: "Köstliche Grillspezialitäten und selbstgemachte Kuchen",
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Tombola+Gewinnübergabe",
        alt: "Tombola Gewinnübergabe an Ingrid Maier",
        caption: "Ingrid Maier freut sich über den Hauptgewinn der Tombola",
      },
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Neue Trainingszeiten ab August",
    excerpt:
      "Ab dem 1. August gelten neue Trainingszeiten für alle Altersgruppen. Hier alle Details.",
    content: `Liebe Mitglieder,

ab dem 1. August 2024 treten neue Trainingszeiten in Kraft. Diese Änderungen wurden notwendig, um allen Altersgruppen optimale Trainingsmöglichkeiten zu bieten.

**Neue Trainingszeiten:**

**Kinder (6-10 Jahre):**
- Montag: 16:00 - 17:00 Uhr
- Mittwoch: 16:00 - 17:00 Uhr
- Freitag: 16:00 - 17:00 Uhr

**Jugend (11-17 Jahre):**
- Dienstag: 17:00 - 18:30 Uhr
- Donnerstag: 17:00 - 18:30 Uhr
- Samstag: 10:00 - 11:30 Uhr

**Erwachsene:**
- Montag: 19:00 - 20:30 Uhr
- Mittwoch: 19:00 - 20:30 Uhr
- Sonntag: 9:00 - 10:30 Uhr

**Senioren (55+):**
- Dienstag: 10:00 - 11:30 Uhr
- Donnerstag: 10:00 - 11:30 Uhr

Bitte beachtet die neuen Zeiten bei eurer Trainingsplanung. Bei Fragen wendet euch gerne an unser Trainerteam.

Die Änderungen wurden nach ausführlichen Gesprächen mit Trainern, Mitgliedern und dem Vorstand beschlossen. Ziel ist es, jedem Mitglied optimale Trainingsmöglichkeiten zu bieten und Wartezeiten zu minimieren.

Besonders freuen wir uns, dass wir für die Senioren zusätzliche Trainingszeiten anbieten können. Das neue Programm "Tennis 55+" wird von unserem erfahrenen Trainer Klaus Weber geleitet.`,
    date: "28. Juli 2024",
    author: "Maria Schmidt",
    category: "Training",
    readTime: "2 min",
    image: "/placeholder.svg?height=400&width=800&text=Trainingszeiten",
    featured: false,
  },
  // Add other articles here...
];

interface PageProps {
  params: {
    id: string;
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = newsArticles.find((a) => a.id === Number.parseInt(params.id));

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/news"
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Zurück zu den Nachrichten</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">TC</span>
              </div>
              <span className="font-bold text-lg">TC Memmingen</span>
            </div>
          </nav>
        </div>
      </header>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <Badge variant="secondary">{article.category}</Badge>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {article.date}
            </span>
            <span className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {article.author}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6">{article.excerpt}</p>

          <div className="flex items-center justify-between border-b pb-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <p className="font-semibold">{article.author}</p>
                <p className="text-sm text-gray-500">Autor</p>
              </div>
            </div>

            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Teilen
            </Button>
          </div>
        </div>

        {/* Article Image */}
        {article.image && (
          <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Image Gallery */}
        {article.gallery && article.gallery.length > 0 && (
          <ImageGallery
            images={article.gallery}
            title="Impressionen vom Sommerfest"
          />
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
        </div>

        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Artikel teilen:</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  WhatsApp
                </Button>
              </div>
            </div>

            <Link href="/news">
              <Button variant="outline">Weitere Artikel</Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Weitere Artikel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {newsArticles
              .filter((a) => a.id !== article.id)
              .slice(0, 2)
              .map((relatedArticle) => (
                <div
                  key={relatedArticle.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <Badge variant="secondary" className="mb-2">
                    {relatedArticle.category}
                  </Badge>
                  <h3 className="font-semibold mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {relatedArticle.date}
                    </span>
                    <Link href={`/news/${relatedArticle.id}`}>
                      <Button variant="outline" size="sm">
                        Lesen
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">TC</span>
            </div>
            <span className="font-bold">TC Memmingen</span>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2024 TC Memmingen. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}
