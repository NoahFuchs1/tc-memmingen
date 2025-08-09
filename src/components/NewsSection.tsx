import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "Sommerfest 2024 - Ein voller Erfolg!",
      excerpt:
        "Unser jährliches Sommerfest war wieder ein Highlight der Saison mit über 200 Gästen.",
      date: "15. Juli 2024",
      category: "Veranstaltung",
    },
    {
      id: 2,
      title: "Neue Trainingszeiten ab August",
      excerpt:
        "Ab dem 1. August gelten neue Trainingszeiten für alle Altersgruppen. Hier alle Details.",
      date: "28. Juli 2024",
      category: "Training",
    },
    {
      id: 3,
      title: "Jugendmeisterschaft: Tolle Erfolge",
      excerpt:
        "Unsere Nachwuchstalente haben bei der regionalen Jugendmeisterschaft hervorragend abgeschnitten.",
      date: "22. Juli 2024",
      category: "Turnier",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Aktuelle Neuigkeiten
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bleiben Sie auf dem Laufenden über alle Ereignisse und Entwicklungen
            in unserem Verein
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{item.category}</Badge>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </span>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {item.excerpt}
                </CardDescription>
                <Button variant="outline" size="sm">
                  Weiterlesen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
