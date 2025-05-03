"use client";

import AboutSection from "@/components/about";
import Footer from "@/components/footer";

import HeroWithHeader from "@/components/hero";
import HowItWorksSection from "@/components/faqs";
import ServicesSection from "@/components/services";
import FAQSection from "@/components/faqs";
import CallToActionSection from "@/components/call";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeroWithHeader />

      <ServicesSection />
      <AboutSection />

      <CallToActionSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
