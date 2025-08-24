import { Button } from "@/components/ui/button";

export default function Hero({ heroSection }: any) {
  const { h1Hero, videoHero, buttonLinksHero, buttonRechtsHero } =
    heroSection.heroSection;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoHero} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">{h1Hero}</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Tradition trifft Leidenschaft - Ihr Tennisverein im Herzen von
          Memmingen
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
          >
            {buttonLinksHero}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3 bg-transparent"
          >
            {buttonRechtsHero}
          </Button>
        </div>
      </div>
    </section>
  );
}
