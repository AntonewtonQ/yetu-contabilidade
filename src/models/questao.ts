export type Nivel = "fácil" | "intermediário" | "difícil";

export type Questao = {
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
  nivel: Nivel;
};
