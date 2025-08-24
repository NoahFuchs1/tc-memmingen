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
import SanityText from "./ui/SanityText";

export default function NewsSection({ newsSection }: any) {
  const { h1NewsSection, subHeadlineNewsSection, newsNewsSection } =
    newsSection;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {h1NewsSection}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subHeadlineNewsSection}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsNewsSection.map((item: any) => (
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
                  Weiterlesen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  function truncateBlocks(blocks: any, maxWords = 20) {
    let wordCount = 0;
    const truncated = [];

    for (const block of blocks) {
      if (block._type !== "block") continue;
      const newChildren = [];

      for (const child of block.children) {
        const words = child.text.split(/\s+/);
        if (wordCount + words.length <= maxWords) {
          newChildren.push(child);
          wordCount += words.length;
        } else {
          const remaining = maxWords - wordCount;
          if (remaining > 0) {
            newChildren.push({
              ...child,
              text: words.slice(0, remaining).join(" ") + " ...",
            });
          }
          wordCount = maxWords;
          break;
        }
      }

      truncated.push({ ...block, children: newChildren });
      if (wordCount >= maxWords) break;
    }

    return truncated;
  }
}
