import { client } from "@/sanity/client";
import { heroQuery } from "@/sanity/queries";
import { Header } from "../components/layout/Header";

import SponsorCarousel from "../components/SponsorCarousel";
import Hero from "../components/HeroSection";
import NewsSection from "../components/NewsSection";
import AboutSection from "../components/AboutSection";
import FacilitiesSection from "../components/FacilitiesSection";
import MembershipCTASection from "../components/MembershipCTASection";
import Footer from "../components/layout/Footer";

export default async function Home() {
  const hero = await client.fetch(heroQuery);

  return (
    <div className="min-h-screen">
      <Header />

      <Hero />

      <NewsSection />

      <AboutSection />

      <FacilitiesSection />

      <MembershipCTASection />

      <SponsorCarousel />

      <Footer />
    </div>
  );
}
