"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const backgrounds = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

export default function HeroWithHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel de fundo */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="absolute inset-0 z-0"
      >
        <CarouselContent>
          {backgrounds.map((src, idx) => (
            <CarouselItem key={idx} className="h-screen w-full relative">
              <Image
                src={src}
                alt={`Fundo ${idx + 1}`}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-60" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Yetu<span className="text-yellow-400">.</span>Contabilidade
          </Link>

          <nav className="hidden md:flex space-x-8 text-white font-medium">
            <Link href="#" className="hover:text-yellow-300 transition">
              Sobre
            </Link>
            <Link href="#" className="hover:text-yellow-300 transition">
              Serviços
            </Link>
            <Link href="/jogo" className="hover:text-yellow-300 transition">
              Quiz
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/login">
              <Button className="hover:bg-yellow-400 hover:text-black">
                Entrar
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Menu className="text-white" onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-yellow-300 px-6 py-4 space-y-4">
            <Link href="#sobre" className="block text-black">
              Sobre
            </Link>
            <Link href="#servicos" className="block text-black">
              Serviços
            </Link>

            <Link href="/jogo" className="hover:text-yellow-300 transition">
              Quiz
            </Link>
            <Link href="/login" className="block text-black">
              Entrar
            </Link>
          </div>
        )}
      </header>

      {/* Hero Text */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Contabilidade feita <br className="hidden md:block" /> para Angola
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8">
          Aprende do básico ao avançado com conteúdo 100% adaptado à realidade
          contábil angolana.
        </p>
        <div className="flex gap-4">
          <Button
            asChild
            className="bg-yellow-400 text-black font-semibold hover:bg-yellow-300 px-6 py-4 text-lg"
          >
            <Link href="#sobre">Saiba Mais</Link>
          </Button>
          <Button asChild variant="outline" className="px-6 py-4 text-lg">
            <Link href="#cursos">Explorar Cursos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
