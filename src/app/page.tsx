"use client";

import AboutSection from "@/components/about";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import HowItWorksSection from "@/components/how";
import ProductsSection from "@/components/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeroSection />

      <AboutSection />
      <ProductsSection />

      <HowItWorksSection />
      <Footer />
    </div>
  );
}
