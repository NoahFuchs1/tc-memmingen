import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, User, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";

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

Ein herzlicher Dank geht an alle Helfer und Sponsoren, die dieses wunderbare Fest möglich gemacht haben. Bereits jetzt freuen wir uns auf das Sommerfest 2025!`,
    date: "15. Juli 2024",
    author: "Hans Müller",
    category: "Veranstaltung",
    readTime: "3 min",
    image: "/placeholder.svg?height=400&width=800&text=Sommerfest+2024",
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

Bitte beachtet die neuen Zeiten bei eurer Trainingsplanung. Bei Fragen wendet euch gerne an unser Trainerteam.`,
    date: "28. Juli 2024",
    author: "Maria Schmidt",
    category: "Training",
    readTime: "2 min",
    image: "/placeholder.svg?height=400&width=800&text=Trainingszeiten",
    featured: false,
  },
  {
    id: 3,
    title: "Jugendmeisterschaft: Tolle Erfolge",
    excerpt:
      "Unsere Nachwuchstalente haben bei der regionalen Jugendmeisterschaft hervorragend abgeschnitten.",
    content: `Bei der diesjährigen regionalen Jugendmeisterschaft in Augsburg haben unsere Nachwuchstalente hervorragende Leistungen gezeigt und mehrere Titel nach Memmingen geholt.

**Unsere Erfolge im Überblick:**

**U12 Jungen:**
- 1. Platz: Tim Weber
- 3. Platz: Max Huber

**U14 Mädchen:**
- 2. Platz: Lisa Maier
- 3. Platz: Anna Bauer

**U16 Jungen:**
- 1. Platz: Felix Schneider
- 2. Platz: Jonas Klein

**U18 Mixed Doppel:**
- 1. Platz: Sarah Müller / David Wagner

Besonders hervorzuheben ist die Leistung von Tim Weber, der sich souverän den Titel in der U12 sicherte und dabei keinen einzigen Satz abgab. Auch Felix Schneider zeigte eine beeindruckende Leistung und gewann das Finale der U16 in drei spannenden Sätzen.

Unser Jugendwart Peter Hoffmann ist stolz auf alle Teilnehmer: "Die Kinder haben nicht nur sportlich überzeugt, sondern auch durch ihr faires Verhalten und ihren Teamgeist geglänzt."

Herzlichen Glückwunsch an alle Teilnehmer!`,
    date: "22. Juli 2024",
    author: "Peter Hoffmann",
    category: "Turnier",
    readTime: "4 min",
    image:
      "/placeholder.svg?height=400&width=800&text=Jugendmeisterschaft+Sieger",
    featured: false,
  },
  {
    id: 4,
    title: "Platzpflege: Neue Sandschicht aufgetragen",
    excerpt:
      "Unsere Sandplätze wurden mit einer neuen Schicht hochwertigen Ziegelmehls versehen.",
    content: `In den vergangenen Wochen wurden alle sechs Sandplätze unserer Anlage mit einer neuen Schicht hochwertigen Ziegelmehls versehen. Diese Maßnahme war notwendig geworden, um die optimale Spielqualität unserer Plätze zu gewährleisten.

**Details zur Platzpflege:**

Die Arbeiten wurden von der renommierten Firma "Tennisplatz-Service Bayern" durchgeführt, die bereits seit Jahren unser Partner in Sachen Platzpflege ist. Verwendet wurde hochwertiges Ziegelmehl aus der Region, das für seine ausgezeichneten Spieleigenschaften bekannt ist.

**Vorteile der neuen Schicht:**
- Bessere Ballsprungqualität
- Optimale Rutschfestigkeit
- Verbesserte Drainage bei Regen
- Längere Haltbarkeit

Die Plätze 1-3 sind bereits wieder vollständig bespielbar. Die Plätze 4-6 werden voraussichtlich ab dem 5. August wieder freigegeben.

Wir bitten um Verständnis für die temporären Einschränkungen und freuen uns, euch bald wieder optimale Spielbedingungen bieten zu können.`,
    date: "30. Juli 2024",
    author: "Klaus Weber",
    category: "Anlage",
    readTime: "2 min",
    image: "/placeholder.svg?height=400&width=800&text=Platzpflege+Sandplätze",
    featured: false,
  },
  {
    id: 5,
    title: "Mitgliederversammlung: Wichtige Beschlüsse",
    excerpt:
      "Bei der Jahreshauptversammlung wurden wichtige Weichen für die Zukunft des Vereins gestellt.",
    content: `Am 10. Juli 2024 fand unsere jährliche Mitgliederversammlung im Vereinsheim statt. Mit 87 anwesenden Mitgliedern war die Versammlung sehr gut besucht.

**Wichtige Beschlüsse:**

**1. Beitragsstabilität:**
Die Mitgliedsbeiträge bleiben auch für 2025 unverändert. Dies ist möglich durch die solide Finanzlage des Vereins und die Unterstützung unserer treuen Sponsoren.

**2. Platzmodernisierung:**
Für 2025 ist eine umfassende Modernisierung der Plätze 5 und 6 geplant. Hierfür wurde ein Budget von 25.000 Euro bewilligt.

**3. Neue Vereinssatzung:**
Die überarbeitete Vereinssatzung wurde einstimmig angenommen. Die wichtigsten Änderungen betreffen die Digitalisierung von Vereinsprozessen.

**4. Vorstandswahlen:**
- Vorsitzender: Hans Müller (wiedergewählt)
- Stellvertreterin: Maria Schmidt (neu)
- Kassenwart: Thomas Bauer (wiedergewählt)
- Jugendwart: Peter Hoffmann (wiedergewählt)

**Ausblick 2025:**
Für das kommende Jahr sind bereits viele spannende Projekte geplant, darunter ein neues Jugendförderungsprogramm und die Ausrichtung der regionalen Seniorenmeisterschaft.

Vielen Dank an alle Mitglieder für ihr Engagement und Vertrauen!`,
    date: "11. Juli 2024",
    author: "Hans Müller",
    category: "Verein",
    readTime: "5 min",
    image: null,
    featured: false,
  },
];

export default function NewsPage() {
  const featuredArticle = newsArticles.find((article) => article.featured);
  const regularArticles = newsArticles.filter((article) => !article.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Vereinsnachrichten
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Alle aktuellen Neuigkeiten, Ereignisse und Entwicklungen aus dem TC
            Memmingen
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-12">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700">Featured</Badge>
            <Card className="overflow-hidden">
              {featuredArticle.image && (
                <div className="relative h-64 md:h-80">
                  <Image
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <Badge variant="secondary">{featuredArticle.category}</Badge>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {featuredArticle.author}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <CardTitle className="text-2xl md:text-3xl mb-4">
                  {featuredArticle.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {featuredArticle.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none text-gray-700 whitespace-pre-line mb-6">
                  {featuredArticle.content}
                </div>
                <Link href={`/news/${featuredArticle.id}`}>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Vollständigen Artikel lesen
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <Card
              key={article.id}
              className="hover:shadow-lg transition-shadow overflow-hidden"
            >
              {article.image && (
                <div className="relative h-48">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="text-lg line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.date}
                  </span>
                  <span className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {article.author}
                  </span>
                </div>
                <CardDescription className="text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </CardDescription>
                <Link href={`/news/${article.id}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    Artikel lesen
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 bg-transparent">
            Weitere Artikel laden
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
