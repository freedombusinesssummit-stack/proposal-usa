"use client";
import Navigation from "@/components/Navigation";
import HeroSlide from "@/components/HeroSlide";
import AboutSlide from "@/components/AboutSlide";
import AudienceSlides from "@/components/AudienceSlides";
import IntelSlides from "@/components/IntelSlides";
import PartnersAndAgenda from "@/components/PartnersAndAgenda";
import PackagesSlides from "@/components/PackagesSlides";
import ContactSlide from "@/components/ContactSlide";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSlide />
      <AboutSlide />
      <AudienceSlides />
      <IntelSlides />
      <PartnersAndAgenda />
      <PackagesSlides />
      <ContactSlide />
    </main>
  );
}
