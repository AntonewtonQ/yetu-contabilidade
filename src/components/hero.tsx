"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const HeroSection = () => {
  const slides = [
    {
      title: "Aprender é crescer",
      subtitle: "Domine a contabilidade com o Yetu!",
      image: "/images/slide1.jpg",
    },
    {
      title: "Seu futuro financeiro começa hoje",
      subtitle: "Com Yetu Contabilidade você vai mais longe!",
      image: "/images/slide2.jpg",
    },
    {
      title: "Quiz, vídeos e aulas interativas",
      subtitle: "Tudo o que você precisa em um só lugar!",
      image: "/images/slide3.jpg",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-yellow-400 text-black">
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        className="w-full max-w-6xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px] flex flex-col items-center justify-center text-center">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover opacity-60"
              />
              <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-4 text-black">
                  {slide.title}
                </h1>
                <p className="text-lg mb-6 text-black">{slide.subtitle}</p>
                <div className="flex gap-4 justify-center">
                  <Link href="/cadastro">
                    <Button className="bg-black text-yellow-400 hover:bg-gray-800">
                      Cadastre-se
                    </Button>
                  </Link>
                  <Link href="#produtos">
                    <Button
                      variant="outline"
                      className="border-black text-black"
                    >
                      Conheça mais
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
