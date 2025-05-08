"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
        {/* Logo e Descrição */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Yetu<span className="text-yellow-400">.</span>Contabilidade
          </h3>
          <p className="text-sm">
            Educação contábil para a realidade angolana. Aprende, evolui e
            prepara-te para transformar o teu futuro financeiro.
          </p>
        </div>

        {/* Navegação Rápida */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#sobre" className="hover:text-yellow-400 transition">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                href="#servicos"
                className="hover:text-yellow-400 transition"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/jogo" className="hover:text-yellow-400 transition">
                Quiz
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-yellow-400 transition">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contactos */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contactos</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +244 999 000 000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> contacto@yetu.co.ao
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Luanda, Angola
            </li>
          </ul>
        </div>
      </div>

      {/* Linha final */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Yetu Contabilidade. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
