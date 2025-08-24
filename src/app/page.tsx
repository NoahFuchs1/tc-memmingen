import { client } from "@/sanity/client";
import { Header } from "../components/layout/Header";

import SponsorCarousel from "../components/SponsorCarousel";
import Hero from "../components/HeroSection";
import NewsSection from "../components/NewsSection";
import AboutSection from "../components/AboutSection";
import FacilitiesSection from "../components/FacilitiesSection";
import MembershipCTASection from "../components/MembershipCTASection";
import Footer from "../components/layout/Footer";
import {
  homepageHeroQuery,
  homepageIntroductionQuery,
  homepageNewsQuery,
  sponsorsQurey,
} from "@/sanity/queries";

export default async function Home() {
  const sponsors = await client.fetch(sponsorsQurey);
  const heroSection = await client.fetch(homepageHeroQuery);
  const newsSection = await client.fetch(homepageNewsQuery);
  const introductionSection = await client.fetch(homepageIntroductionQuery);

  return (
    <div className="min-h-screen">
      <Header />

      <Hero heroSection={heroSection} />

      <NewsSection newsSection={newsSection} />

      <AboutSection introductionSection={introductionSection} />

      <FacilitiesSection />

      <MembershipCTASection />

      <SponsorCarousel sponsors={sponsors} />

      <Footer />
    </div>
  );
}
