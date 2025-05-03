"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          Yetu<span className="text-white">.</span>Contabilidade
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 text-black font-medium">
          <Link href="#sobre" className="hover:text-white transition">
            Sobre
          </Link>
          <Link href="#servicos" className="hover:text-white transition">
            Serviços
          </Link>
          <Link href="#cursos" className="hover:text-white transition">
            Cursos
          </Link>
          <Link href="#contato" className="hover:text-white transition">
            Contato
          </Link>
        </nav>

        {/* Botão de Acesso */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white"
          >
            <Link href="/login">Entrar</Link>
          </Button>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <Menu className="text-black" onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden bg-yellow-300 px-6 py-4 space-y-4">
          <Link href="#sobre" className="block text-black">
            Sobre
          </Link>
          <Link href="#servicos" className="block text-black">
            Serviços
          </Link>
          <Link href="#cursos" className="block text-black">
            Cursos
          </Link>
          <Link href="#contato" className="block text-black">
            Contato
          </Link>
          <Link href="/login" className="block text-black">
            Entrar
          </Link>
        </div>
      )}
    </header>
  );
}
