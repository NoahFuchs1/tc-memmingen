import { NewsSectionType } from "../types/newsSection";
import NewsItemComponents from "./ui/NewsItemComponents";

export default function NewsSection(newsSection: NewsSectionType) {
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

        <div className="grid sm:w-[80%] md:w-full grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          <NewsItemComponents news={newsNewsSection} />
        </div>
      </div>
    </section>
  );
}
