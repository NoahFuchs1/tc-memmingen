import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import Footer from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import { newsQuery } from "@/sanity/queries";
import { client } from "@/sanity/client";
import SanityText from "@/src/components/ui/SanityText";
import { NewsItem } from "@/src/types/newsSection";
import { truncateBlocks } from "@/src/utils/helper";

export default async function NewsPage() {
  const news = await client.fetch(newsQuery);

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
            Alle aktuellen Neuigkeiten, Ereignisse und Entwicklungen aus dem
            Verein
          </p>
        </div>

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item: NewsItem) => (
            <Card key={item._id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{item.category.category}</Badge>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </span>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  <SanityText blocks={truncateBlocks(item.content)} />
                </CardDescription>
                <Button variant="outline" size="sm">
                  <a href={`/news/${item._id}`}>Weiterlesen</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
