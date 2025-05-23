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
import { Nivel } from "@/models/questao";

const ordemNiveis: Nivel[] = ["fácil", "intermediário", "difícil"];

function embaralharArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function JogoPage() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<number | null>(
    null
  );
  const [acertou, setAcertou] = useState<boolean | null>(null);
  const [tentativas, setTentativas] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarExplicacao, setMostrarExplicacao] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nivelSelecionado, setNivelSelecionado] = useState<Nivel | null>(null);
  const [fimDoJogo, setFimDoJogo] = useState(false);
  const [perguntasAleatorias, setPerguntasAleatorias] = useState<
    typeof perguntas
  >([]);

  const perguntasFiltradas = perguntasAleatorias;
  const perguntaAtual = perguntasFiltradas[indiceAtual] ?? null;

  const responder = (index: number) => {
    if (!perguntaAtual) return;
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
        setTimeout(() => setMostrarModal(true), 500);
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
    setMostrarModal(false);
    setNivelSelecionado(null);
    setFimDoJogo(false);
    setPerguntasAleatorias([]);
  };

  const proximoNivelOuFim = () => {
    const indiceAtualNivel = ordemNiveis.indexOf(nivelSelecionado!);
    const proximoNivel = ordemNiveis[indiceAtualNivel + 1];

    if (proximoNivel) {
      const novasPerguntas = perguntas.filter((p) => p.nivel === proximoNivel);
      setPerguntasAleatorias(embaralharArray(novasPerguntas));
      setNivelSelecionado(proximoNivel);
      setIndiceAtual(0);
      setRespostaSelecionada(null);
      setAcertou(null);
      setTentativas(0);
      setMostrarExplicacao(false);
    } else {
      setFimDoJogo(true);
      setMostrarModal(true);
    }
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

      {!nivelSelecionado ? (
        <div className="flex flex-col items-center justify-center min-h-[65vh] text-center space-y-4 ">
          <h2 className="text-xl font-bold text-gray-800">
            Escolha o nível de dificuldade
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {ordemNiveis.map((nivel) => (
              <Button
                key={nivel}
                onClick={() => {
                  const perguntasDoNivel = perguntas.filter(
                    (p) => p.nivel === nivel
                  );
                  setPerguntasAleatorias(embaralharArray(perguntasDoNivel));
                  setNivelSelecionado(nivel);
                }}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold cursor-pointer transition duration-300 ease-in-out"
              >
                {nivel.charAt(0).toUpperCase() + nivel.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-8 space-y-6 border border-yellow-300">
          <h1 className="text-3xl font-extrabold text-yellow-600">
            Desafio Interactivo
          </h1>

          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-yellow-400 h-full transition-all duration-500"
              style={{
                width: `${
                  ((indiceAtual + 1) / perguntasFiltradas.length) * 100
                }%`,
              }}
            />
          </div>

          <p className="text-sm text-gray-600">
            Pontuação: <span className="font-semibold">{pontuacao}</span> /{" "}
            {perguntasFiltradas.length}
          </p>

          {perguntaAtual && (
            <>
              <div className="bg-yellow-100 rounded-xl p-6 shadow-sm">
                <p className="text-lg text-gray-800 font-medium break-words">
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
                      className={`w-full justify-start py-3 text-left cursor-pointer border rounded-lg transition text-sm sm:text-base
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
                    {mostrarExplicacao
                      ? "Esconder explicação"
                      : "Ver explicação"}
                  </Button>

                  {mostrarExplicacao && (
                    <p className="bg-yellow-50 border border-yellow-200 text-gray-700 text-sm p-4 rounded-md break-words max-h-60 overflow-y-auto text-left">
                      {perguntaAtual.explicacao}
                    </p>
                  )}

                  {acertou && (
                    <>
                      {indiceAtual < perguntasFiltradas.length - 1 ? (
                        <Button
                          onClick={proximaPergunta}
                          className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold"
                        >
                          Próxima pergunta →
                        </Button>
                      ) : (
                        <Button
                          onClick={proximoNivelOuFim}
                          className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold"
                        >
                          {ordemNiveis.indexOf(nivelSelecionado!) <
                          ordemNiveis.length - 1
                            ? "Avançar para o próximo nível →"
                            : "Concluir o jogo"}
                        </Button>
                      )}
                    </>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )}

      {mostrarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-xl max-w-sm text-center space-y-4 shadow-xl">
            <h2 className="text-lg font-bold text-red-600">
              {fimDoJogo ? "🏁 Parabéns!" : "💥 Jogo Reiniciado"}
            </h2>
            <p>
              {fimDoJogo
                ? `Completaste todos os níveis! Pontuação final: ${pontuacao}`
                : "Erraste duas vezes. O jogo será reiniciado."}
            </p>
            <Button
              onClick={() => {
                setMostrarModal(false);
                reiniciarJogo();
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
            >
              {fimDoJogo ? "Jogar Novamente" : "Ok, entendi!"}
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
