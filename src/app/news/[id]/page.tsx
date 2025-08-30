import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, User, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ImageGallery from "@/src/components/ui/IamgeGallery";
import { getNewsItemWithId } from "@/sanity/queries";
import { client } from "@/sanity/client";
import Footer from "@/src/components/layout/Footer";
import SanityText from "@/src/components/ui/SanityText";
import { Header } from "@/src/components/layout/Header";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  //const article = newsArticles.find((a) => a.id === Number(id));
  const article = await client.fetch(getNewsItemWithId, { id: id });

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header></Header>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <Badge variant="secondary">{article.category.category}</Badge>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {article.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6">{article.excerpt}</p>

          <div className="flex items-center justify-between border-b pb-6"></div>
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
            <SanityText blocks={article.content}></SanityText>
          </div>
        </div>
      </article>

      <Footer></Footer>
    </div>
  );
}
