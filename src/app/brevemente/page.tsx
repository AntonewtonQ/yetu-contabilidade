"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Brevemente() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-yellow-600 mb-4">
          🚧 Em Breve!
        </h1>
        <p className="text-gray-700 mb-6">
          Este serviço ainda está em desenvolvimento. Em breve, vais poder
          aproveitar mais esta funcionalidade!
        </p>
        <Button
          onClick={() => router.back()}
          className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-white font-medium"
        >
          ← Voltar à página anterior
        </Button>
      </div>
    </div>
  );
}
