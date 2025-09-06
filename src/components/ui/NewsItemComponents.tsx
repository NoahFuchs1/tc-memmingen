import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NewsItem } from "@/src/types/newsSection";
import { Calendar } from "lucide-react";
import SanityText from "./SanityText";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { truncateBlocks } from "@/src/utils/helper";

type props = {
  news: NewsItem[];
};

export default function NewsItemComponents({ news }: props) {
  return (
    <>
      {news.map((item: NewsItem) => {
        const featuredImage = item.gallery?.find((img) => img.featured);

        return (
          <Card
            key={item._id}
            className="hover:shadow-lg transition-shadow flex flex-col lg:flex-row gap-3 p-6"
          >
            {/* Featured Bild nur anzeigen, wenn vorhanden */}
            {featuredImage && (
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <img
                  src={featuredImage.url}
                  alt={featuredImage.alt ?? ""}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}

            {/* Text-Box */}
            <div className={`${featuredImage ? "lg:w-1/2" : "w-full"}`}>
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

              <CardContent className="flex flex-col justify-between">
                <CardDescription className="text-base mb-4">
                  <SanityText blocks={truncateBlocks(item.content)} />
                </CardDescription>
                <Button variant="outline" size="sm">
                  <a href={`/news/${item._id}`}>Weiterlesen</a>
                </Button>
              </CardContent>
            </div>
          </Card>
        );
      })}
    </>
  );
}
