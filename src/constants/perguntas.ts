import { Questao } from "@/models/questao";

export const perguntas: Questao[] = [
  {
    pergunta: "Qual é o principal objetivo da contabilidade?",
    opcoes: [
      "Reduzir impostos",
      "Organizar reuniões",
      "Registrar e interpretar fatos financeiros",
      "Emitir cheques",
    ],
    correta: 2,
    explicacao:
      "A contabilidade tem como objetivo principal registrar, organizar e interpretar os fatos contábeis e financeiros para auxiliar na tomada de decisão.",
    nivel: "fácil",
  },
  {
    pergunta: "O ativo é:",
    opcoes: [
      "Tudo que a empresa deve",
      "O capital investido pelos sócios",
      "O conjunto de receitas",
      "Tudo que a empresa possui",
    ],
    correta: 3,
    explicacao:
      "Ativo representa todos os bens e direitos que a empresa possui e que podem ser convertidos em benefícios econômicos futuros.",
    nivel: "fácil",
  },
  {
    pergunta: "O que é passivo?",
    opcoes: [
      "Valores pagos pelos clientes",
      "Bens da empresa",
      "Obrigações e dívidas da empresa",
      "Reservas de lucros",
    ],
    correta: 2,
    explicacao:
      "Passivo representa as obrigações da empresa, como dívidas com fornecedores, empréstimos e outras contas a pagar.",
    nivel: "fácil",
  },
  {
    pergunta: "O patrimônio líquido corresponde a:",
    opcoes: [
      "A soma do ativo com o passivo",
      "O que sobra do ativo após o pagamento das obrigações",
      "Todas as despesas da empresa",
      "Os investimentos de curto prazo",
    ],
    correta: 1,
    explicacao:
      "Patrimônio líquido é a diferença entre o ativo e o passivo da empresa. Representa os recursos próprios dos sócios.",
    nivel: "intermediário",
  },
  {
    pergunta: "Qual das alternativas é uma demonstração contábil obrigatória?",
    opcoes: [
      "Orçamento Anual",
      "Balanço Patrimonial",
      "Plano de Negócios",
      "Demanda de Vendas",
    ],
    correta: 1,
    explicacao:
      "O Balanço Patrimonial é uma demonstração contábil obrigatória que apresenta a posição financeira da empresa em um determinado momento.",
    nivel: "fácil",
  },
  {
    pergunta: "Lançamentos contábeis devem sempre manter:",
    opcoes: [
      "A conta de despesas em saldo positivo",
      "O saldo da conta caixa em zero",
      "O equilíbrio entre débitos e créditos",
      "Lucros maiores que prejuízos",
    ],
    correta: 2,
    explicacao:
      "Todo lançamento contábil deve manter o princípio da partida dobrada: para cada débito há um crédito correspondente, garantindo o equilíbrio.",
    nivel: "intermediário",
  },
  {
    pergunta: "Qual é a finalidade da Demonstração do Resultado do Exercício (DRE)?",
    opcoes: [
      "Apresentar os fluxos de caixa",
      "Registrar as receitas e despesas, apurando o lucro ou prejuízo",
      "Indicar os bens e direitos da empresa",
      "Controlar o estoque",
    ],
    correta: 1,
    explicacao:
      "A DRE apresenta as receitas, custos e despesas da empresa durante um período, permitindo identificar o lucro ou prejuízo do exercício.",
    nivel: "intermediário",
  },
  {
    pergunta: "Despesas são:",
    opcoes: [
      "Bens utilizados pela empresa",
      "Valores pagos a fornecedores",
      "Saídas de recursos que reduzem o patrimônio líquido",
      "Entradas de caixa",
    ],
    correta: 2,
    explicacao:
      "Despesas são gastos com bens e serviços consumidos para a manutenção das atividades da empresa e que reduzem o patrimônio líquido.",
    nivel: "intermediário",
  },
  {
    pergunta: "Qual é o princípio contábil que determina que as receitas e despesas devem ser reconhecidas quando ocorrem, independentemente do recebimento ou pagamento?",
    opcoes: [
      "Princípio da Prudência",
      "Princípio da Entidade",
      "Princípio de Acréscimo e Diferimento",
      "Princípio do Registro pelo Valor Original",
    ],
    correta: 2,
    explicacao:
      "O Princípio da Competência determina que os efeitos das transações sejam reconhecidos no período em que ocorrem, e não quando são recebidos ou pagos.",
    nivel: "difícil",
  },
  {
    pergunta: "A escrituração contábil deve ser feita:",
    opcoes: [
      "Apenas no fim do ano fiscal",
      "Sempre que houver pagamento de salários",
      "De forma contínua, cronológica e sem rasuras",
      "Somente após auditoria externa",
    ],
    correta: 2,
    explicacao:
      "A escrituração contábil deve ser realizada continuamente, em ordem cronológica, com clareza, sem emendas ou rasuras, respeitando os princípios contábeis.",
    nivel: "intermediário",
  },
  {
    pergunta: "Qual dos itens abaixo é considerado um ativo circulante?",
    opcoes: [
      "Veículo da empresa",
      "Móveis e utensílios",
      "Duplicatas a receber em até 12 meses",
      "Empréstimos de longo prazo",
    ],
    correta: 2,
    explicacao:
      "Ativos circulantes são aqueles que se transformarão em dinheiro ou serão utilizados em até 12 meses, como contas a receber e estoque.",
    nivel: "intermediário",
  },
  {
    pergunta: "O que caracteriza um activo fixo tangível segundo o PGC de Angola?",
    opcoes: [
      "Um bem de consumo imediato",
      "Um activo detido para venda no decurso da actividade operacional",
      "Um bem corpóreo usado na produção ou fornecimento de bens ou serviços",
      "Um investimento financeiro de curto prazo",
    ],
    correta: 2,
    explicacao:
      "Um activo fixo tangível é um bem corpóreo detido pela empresa para ser utilizado na produção ou fornecimento de bens e serviços, para arrendamento a terceiros, ou para fins administrativos, e que se espera utilizar durante mais de um período contabilístico.",
    nivel: "difícil",
  },
  {
    pergunta: "Como é contabilizada a depreciação de um activo fixo tangível?",
    opcoes: [
      "Como um acréscimo ao valor do activo",
      "Como uma redução directa do capital próprio",
      "Como um gasto do exercício",
      "Como uma receita financeira",
    ],
    correta: 2,
    explicacao:
      "A depreciação é reconhecida como um gasto do exercício, representando a perda de valor do activo fixo tangível ao longo do tempo devido ao uso, desgaste ou obsolescência.",
    nivel: "difícil",
  },
  {
    pergunta: "O que são inventários segundo o Sistema de Normalização Contabilística em Angola?",
    opcoes: [
      "Reservas de capital",
      "Conjuntos de bens destinados à venda ou ao consumo no ciclo normal de actividade",
      "Obrigações da empresa com fornecedores",
      "Instrumentos financeiros negociáveis",
    ],
    correta: 1,
    explicacao:
      "Os inventários compreendem activos detidos para venda no decurso normal da actividade, em processo de produção para essa venda ou sob a forma de materiais ou consumíveis a serem utilizados nesse processo.",
    nivel: "intermediário",
  },
  {
    pergunta: "O Imposto sobre o Valor Acrescentado (IVA) deve ser reconhecido contabilisticamente como:",
    opcoes: [
      "Uma despesa financeira",
      "Um encargo a ser deduzido ao capital próprio",
      "Um imposto a recuperar ou a entregar ao Estado",
      "Um rendimento extraordinário",
    ],
    correta: 2,
    explicacao:
      "O IVA suportado recuperável é registado como um activo (imposto a recuperar), e o IVA liquidado é reconhecido como um passivo (imposto a entregar ao Estado), de acordo com o regime geral do IVA em Angola.",
    nivel: "difícil",
  },
  {
    pergunta: "Qual das seguintes afirmações está de acordo com o tratamento contabilístico dos inventários?",
    opcoes: [
      "Os inventários devem ser mensurados pelo seu valor de mercado",
      "Os inventários são mensurados ao custo ou ao valor realizável líquido, dos dois o menor",
      "Os inventários são sempre valorizados pelo preço de venda",
      "Os inventários não devem sofrer ajustamentos de valor",
    ],
    correta: 1,
    explicacao:
      "De acordo com o PGC e o SNC-ANG, os inventários devem ser mensurados ao custo ou ao valor realizável líquido, dos dois o menor, sendo este o valor estimado de venda no decurso normal da actividade, deduzido dos custos de venda.",
    nivel: "difícil",
  }
];
