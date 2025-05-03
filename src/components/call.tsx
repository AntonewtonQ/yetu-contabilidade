"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const imagens = [
  "/images/galeria1.jpg",
  "/images/galeria2.jpg",
  "/images/galeria3.jpg",
  "/images/galeria4.jpg",
];

export default function CallToActionSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-5 items-center">
        {/* Galeria 4 imagens (2x2) */}
        <div className="grid grid-cols-2 gap-4 col-span-3">
          {imagens.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md">
              <Image
                src={src}
                alt={`Imagem ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Bloco de texto CTA */}
        <div className="col-span-2">
          <span className="text-sm uppercase tracking-wide text-gray-500 mb-2 block">
            Plataforma Acadêmica
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Aprende Contabilidade com{" "}
            <span className="text-yellow-500">Contexto</span> e Clareza
          </h2>
          <p className="text-gray-600 mb-6 text-base">
            A Yetu Contabilidade é feita para ti. Explora conteúdos didáticos,
            sessões interativas e quizzes que respeitam a realidade angolana.
          </p>
          <Button
            asChild
            className="bg-yellow-400 text-black hover:bg-yellow-500 text-md px-6 py-4"
          >
            <Link href="#cursos">Explorar Agora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
