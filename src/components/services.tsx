"use client";

import { Brain, PlayCircle, Users, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: Brain,
    title: "Quiz Interativo",
    description:
      "Responde questões contextualizadas e testa os teus conhecimentos em tempo real com feedback imediato.",
    link: "/quiz", // já funcional
  },
  {
    icon: PlayCircle,
    title: "Vídeo Aulas",
    description:
      "Aulas gravadas com especialistas angolanos, disponíveis a qualquer hora, para todos os níveis.",
    link: "/brevemente",
  },
  {
    icon: Users,
    title: "Aulas com Formadores",
    description:
      "Sessões ao vivo com formadores experientes, para esclarecer dúvidas e aprofundar os conteúdos.",
    link: "/brevemente",
  },
  {
    icon: Map,
    title: "Mapas Mentais",
    description:
      "Resumos visuais interativos para facilitar a memorização dos principais conceitos e temas.",
    link: "/brevemente",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nossos Serviços Acadêmicos
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Soluções pensadas para simplificar e fortalecer o teu aprendizado em
          contabilidade, com foco na realidade de Angola.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <Link key={index} href={service.link} passHref>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
            >
              <div className="mb-4 text-yellow-500">
                <service.icon size={42} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link href={service.link} passHref>
                <Button
                  variant="link"
                  className="text-yellow-500 hover:underline p-0 text-sm"
                  aria-label={`Mais informações sobre ${service.title}`}
                >
                  Saber mais →
                </Button>
              </Link>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
