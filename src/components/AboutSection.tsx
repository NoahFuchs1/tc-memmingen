import { Button } from "@/components/ui/button";
import Image from "next/image";
import SanityText from "./ui/SanityText";
import { introductionSection } from "../types/introductionSection";

export default function AboutSection(introductionSection: introductionSection) {
  const { h1IntroductionSection, image, textIntroductionSection } =
    introductionSection;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {h1IntroductionSection}
            </h2>
            <SanityText blocks={textIntroductionSection} />
            <Button className="bg-red-600 hover:bg-red-700">
              Mitglied werden
            </Button>
          </div>
          <div className="relative w-full h-96">
            <Image
              src={image}
              alt="TC Memmingen Tennisplätze"
              fill
              className="rounded-lg shadow-lg bg-red object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
