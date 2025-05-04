"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  XCircle,
  ArrowLeftCircle,
  RotateCcw,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { perguntas } from "@/constants/perguntas";

export default function JogoPage() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<number | null>(
    null
  );
  const [acertou, setAcertou] = useState<boolean | null>(null);
  const [tentativas, setTentativas] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarExplicacao, setMostrarExplicacao] = useState(false);
  // Estado
  const [mostrarModal, setMostrarModal] = useState(false);

  const perguntaAtual = perguntas[indiceAtual];

  const responder = (index: number) => {
    setRespostaSelecionada(index);
    const estaCorreta = index === perguntaAtual.correta;

    const somAcerto = new Audio("/sons/acerto.mp3");
    const somErro = new Audio("/sons/erro.wav");

    if (estaCorreta) {
      somAcerto.play();
      setAcertou(true);
      setPontuacao((prev) => prev + 1);
    } else {
      somErro.play();
      setAcertou(false);
      const novasTentativas = tentativas + 1;
      setTentativas(novasTentativas);

      if (novasTentativas >= 2) {
        // Substitui o alert por:
        setTimeout(() => {
          setMostrarModal(true);
        }, 500);
      }
    }
  };

  const proximaPergunta = () => {
    setIndiceAtual((prev) => prev + 1);
    setRespostaSelecionada(null);
    setAcertou(null);
    setTentativas(0);
    setMostrarExplicacao(false);
  };

  const reiniciarJogo = () => {
    setIndiceAtual(0);
    setRespostaSelecionada(null);
    setAcertou(null);
    setTentativas(0);
    setPontuacao(0);
    setMostrarExplicacao(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-yellow-100 via-yellow-50 to-white px-4 py-10 text-center relative">
      <div className="mb-5">
        <Link href="/">
          <Button
            variant="ghost"
            className="flex cursor-pointer items-center gap-2"
          >
            <ArrowLeftCircle size={20} /> Início
          </Button>
        </Link>
      </div>

      <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-8 space-y-6 border border-yellow-300">
        <h1 className="text-3xl font-extrabold text-yellow-600">
          Desafio Interactivo
        </h1>

        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-yellow-400 h-full transition-all duration-500"
            style={{
              width: `${((indiceAtual + 1) / perguntas.length) * 100}%`,
            }}
          />
        </div>

        <p className="text-sm text-gray-600">
          Pontuação: <span className="font-semibold">{pontuacao}</span> /{" "}
          {perguntas.length}
        </p>

        <div className="bg-yellow-100 rounded-xl p-6 shadow-sm">
          <p className="text-lg text-gray-800 font-medium break-words overflow-wrap">
            {perguntaAtual.pergunta}
          </p>
        </div>

        <div className="grid gap-3">
          {perguntaAtual.opcoes.map((opcao, index) => {
            const isSelected = respostaSelecionada === index;
            const isCorrect = isSelected && acertou;
            const isWrong = isSelected && acertou === false;

            return (
              <Button
                key={index}
                onClick={() => responder(index)}
                disabled={respostaSelecionada !== null && acertou!}
                className={`w-full justify-start py-3 text-left cursor-pointer border rounded-lg transition break-words max-w-full
                  ${
                    isCorrect
                      ? "bg-green-100 border-green-600 text-green-800"
                      : "text-black"
                  }
                  ${isWrong ? "bg-red-100 border-red-600 text-red-800" : ""}
                  ${!isSelected ? "bg-white hover:bg-yellow-50" : ""}`}
              >
                {opcao}
              </Button>
            );
          })}
        </div>

        {respostaSelecionada !== null && (
          <div className="mt-6 space-y-4">
            {acertou ? (
              <p className="text-green-700 font-semibold flex items-center justify-center gap-2">
                <CheckCircle /> Boa! Acertaste!
              </p>
            ) : (
              <p className="text-red-700 font-semibold flex items-center justify-center gap-2">
                <XCircle /> Ops... ({tentativas}/2)
              </p>
            )}

            <Button
              variant="outline"
              onClick={() => setMostrarExplicacao(!mostrarExplicacao)}
              className="flex items-center gap-2"
            >
              <BookOpen size={16} />
              {mostrarExplicacao ? "Esconder explicação" : "Ver explicação"}
            </Button>

            {mostrarExplicacao && (
              <p className="bg-yellow-50 border border-yellow-200 text-gray-700 text-sm p-4 rounded-md break-words max-h-60 overflow-y-auto text-left">
                {perguntaAtual.explicacao}
              </p>
            )}

            {acertou && (
              <>
                {indiceAtual < perguntas.length - 1 ? (
                  <Button
                    onClick={proximaPergunta}
                    className="bg-yellow-400 text-black cursor-pointer hover:bg-yellow-500 font-bold"
                  >
                    Próxima pergunta →
                  </Button>
                ) : (
                  <div className="text-center space-y-3">
                    <p className="text-md text-gray-700">
                      🎉 Fim do jogo! Pontuação final:{" "}
                      <strong>{pontuacao}</strong> / {perguntas.length}
                    </p>
                    <Button
                      onClick={reiniciarJogo}
                      className="flex items-center cursor-pointer gap-2 text-sm bg-red-400 text-white hover:bg-red-500"
                    >
                      <RotateCcw size={16} />
                      Recomeçar Jogo
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
      {/* Modal de fim de jogo */}
      {mostrarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-xl max-w-sm text-center space-y-4 shadow-xl">
            <h2 className="text-lg font-bold text-red-600">
              💥 Jogo Reiniciado
            </h2>
            <p>Erraste duas vezes. O jogo será reiniciado.</p>
            <Button
              onClick={() => {
                setMostrarModal(false);
                reiniciarJogo();
              }}
              className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black font-bold"
            >
              Ok, entendi!
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
