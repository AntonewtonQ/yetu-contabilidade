"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Texto */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            A Contabilidade ao Alcance de Todos
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            A <strong>Yetu Contabilidade</strong> é uma plataforma académica
            angolana dedicada à criação e disseminação de conteúdos contábeis
            adaptados ao nosso contexto nacional. Nossa missão é{" "}
            <em>democratizar o conhecimento contabilístico</em> com recursos
            modernos e metodologias práticas.
          </p>
          <p className="text-gray-700">
            Oferecemos formação contínua e acessível para estudantes,
            empreendedores e profissionais, com trilhas organizadas por níveis:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              <strong>Básico</strong>: Primeiros passos na contabilidade.
            </li>
            <li>
              <strong>Intermédio</strong>: Consolidação de competências.
            </li>
            <li>
              <strong>Avançado</strong>: Preparação para liderança e gestão
              financeira.
            </li>
          </ul>
          <p className="text-gray-700">
            Combinamos tecnologia, pedagogia ativa e um olhar atento à
            legislação e práticas locais.
          </p>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/logo-yetu.jpeg" // substitua pela imagem certa no /public
            alt="Estudante angolano assistindo aula"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
