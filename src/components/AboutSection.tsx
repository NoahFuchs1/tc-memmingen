import { Button } from "@/components/ui/button";
import Image from "next/image";
import SanityText from "./ui/SanityText";

export default function AboutSection({ introductionSection }: any) {
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
            <p className="text-gray-600 text-lg mb-6">
              Seit über 50 Jahren ist der TC Memmingen eine feste Größe im
              regionalen Tennis. Unser Verein steht für Tradition, Gemeinschaft
              und die Förderung des Tennissports für alle Altersgruppen.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Mit modernen Anlagen, qualifizierten Trainern und einem lebendigen
              Vereinsleben bieten wir optimale Bedingungen für Anfänger und
              Profis gleichermaßen.
            </p>
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
