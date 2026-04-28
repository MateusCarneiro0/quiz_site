const data = [
  {
    titulo: "O Estopim da Guerra",
    alternativas: [
      {
        texto: "O assassinato do Arquiduque Francisco Ferdinando",
        correct: true,
        marked: false,
      },
      {
        texto: "A invasão da Polônia pela Alemanha",
        correct: false,
        marked: false,
      },
      {
        texto: "A queda do Muro de Berlim",
        marked: false,
        correct: false,
      },
      {
        texto: "O bombardeio de Pearl Harbor",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "O assassinato do herdeiro do trono austro-húngaro em Sarajevo, em 1914, ativou o sistema de alianças que deu início ao conflito.",
  },
  {
    titulo: "Tríplice Entente",
    alternativas: [
      {
        texto: "Alemanha, Áustria-Hungria e Itália",
        correct: false,
        marked: false,
      },
      {
        texto: "França, Reino Unido e Rússia",
        correct: true,
        marked: false,
      },
      {
        texto: "EUA, Japão e China",
        correct: false,
        marked: false,
      },
      {
        texto: "Brasil, Argentina e Uruguai",
        correct: false,
        marked: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A Tríplice Entente era formada por França, Reino Unido e o Império Russo, unindo-se contra o expansionismo germânico.",
  },
  {
    titulo: "Guerra de Trincheiras",
    alternativas: [
      {
        texto: "Caracterizou-se pela rápida movimentação de tropas",
        marked: false,
        correct: false,
      },
      {
        texto: "Foi marcada pelo imobilismo e alto número de mortes",
        correct: true,
        marked: false,
      },
      {
        texto: "Ocorreu exclusivamente no oceano",
        marked: false,
        correct: false,
      },
      {
        texto: "Não utilizou armas químicas",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A fase das trincheiras foi o período mais longo da guerra, onde os exércitos mantinham posições fixas com avanços mínimos e condições insalubres.",
  },
  {
    titulo: "Novas Tecnologias",
    alternativas: [
      {
        texto: "Drones e mísseis guiados",
        marked: false,
        correct: false,
      },
      {
        texto: "Cavalaria pesada com armaduras",
        marked: false,
        correct: false,
      },
      {
        texto: "Tanques, aviões e gases asfixiantes",
        correct: true,
        marked: false,
      },
      {
        texto: "Bombas atômicas",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A Primeira Guerra foi o primeiro grande conflito industrializado, introduzindo armas químicas e o uso militar de tanques e aviões.",
  },
  {
    titulo: "O Plano Schlieffen",
    alternativas: [
      {
        texto: "Estratégia alemã para derrotar a França via Bélgica",
        correct: true,
        marked: false,
      },
      {
        texto: "Plano russo para invadir a Sibéria",
        marked: false,
        correct: false,
      },
      {
        texto: "Acordo de paz entre Itália e Áustria",
        marked: false,
        correct: false,
      },
      {
        texto: "Estratégia britânica de bloqueio naval",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A Alemanha pretendia evitar uma guerra em duas frentes derrotando a França rapidamente antes de se virar contra a Rússia.",
  },
  {
    titulo: "A Saída da Rússia",
    alternativas: [
      {
        texto: "A Rússia lutou até o último dia da guerra",
        marked: false,
        correct: false,
      },
      {
        texto: "Saiu em 1917 devido à Revolução Bolchevique",
        correct: true,
        marked: false,
      },
      {
        texto: "Foi expulsa pela França",
        marked: false,
        correct: false,
      },
      {
        texto: "Mudou de lado e apoiou a Alemanha",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Com a Revolução Russa, o novo governo de Lenin assinou o Tratado de Brest-Litovsk com a Alemanha para focar nos problemas internos.",
  },
  {
    titulo: "Entrada dos Estados Unidos",
    alternativas: [
      {
        texto: "Guerra submarina alemã e o Telegrama Zimmermann",
        correct: true,
        marked: false,
      },
      {
        texto: "Ataque a bases aéreas em Nova York",
        marked: false,
        correct: false,
      },
      {
        texto: "Pedido de ajuda da Rússia",
        marked: false,
        correct: false,
      },
      {
        texto: "Invasão do Canadá",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Os EUA entraram em 1917 após ataques a seus navios mercantes e a descoberta de uma proposta alemã de aliança com o México contra eles.",
  },
  {
    titulo: "Papel das Mulheres",
    alternativas: [
      {
        texto: "Foram proibidas de sair de casa",
        marked: false,
        correct: false,
      },
      {
        texto: "Assumiram postos nas fábricas e serviços públicos",
        correct: true,
        marked: false,
      },
      {
        texto: "Lutaram na linha de frente em todos os exércitos",
        marked: false,
        correct: false,
      },
      {
        texto: "Não tiveram relevância no esforço de guerra",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Com a mobilização masculina, as mulheres foram essenciais na economia de guerra, o que impulsionou movimentos pelo voto feminino no pós-guerra.",
  },
  {
    titulo: "Tratado de Versalhes",
    alternativas: [
      {
        texto: "Um acordo que beneficiou a economia alemã",
        marked: false,
        correct: false,
      },
      {
        texto: "Puniu severamente a Alemanha como culpada",
        correct: true,
        marked: false,
      },
      {
        texto: "Dividiu os EUA entre norte e sul",
        marked: false,
        correct: false,
      },
      {
        texto: "Foi assinado em 1914",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A Alemanha foi obrigada a pagar reparações bilionárias, perdeu territórios e teve seu exército limitado, gerando ressentimento.",
  },
  {
    titulo: "Liga das Nações",
    alternativas: [
      {
        texto: "Antecessora da ONU, criada para manter a paz",
        correct: true,
        marked: false,
      },
      {
        texto: "Aliança militar liderada pela Alemanha",
        marked: false,
        correct: false,
      },
      {
        texto: "Grupo de países que defendiam o comunismo",
        marked: false,
        correct: false,
      },
      {
        texto: "Acordo comercial entre as Américas",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Proposta pelo presidente Woodrow Wilson, a Liga visava resolver conflitos diplomaticamente, embora tenha tido sucesso limitado.",
  },
  {
    titulo: "Batalha do Somme",
    alternativas: [
      {
        texto: "Uma das batalhas mais sangrentas da guerra",
        correct: true,
        marked: false,
      },
      {
        texto: "A última batalha da guerra",
        marked: false,
        correct: false,
      },
      {
        texto: "Uma vitória rápida dos Impérios Centrais",
        marked: false,
        correct: false,
      },
      {
        texto: "Ocorreu inteiramente na África",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A Batalha do Somme resultou em mais de um milhão de baixas e simbolizou o horror e o desgaste da guerra de atrito.",
  },
  {
    titulo: "O Brasil na Guerra",
    alternativas: [
      {
        texto: "Enviou milhares de tanques para a França",
        marked: false,
        correct: false,
      },
      {
        texto: "Enviou missão médica e patrulhamento naval",
        correct: true,
        marked: false,
      },
      {
        texto: "Permaneceu totalmente neutro até o fim",
        marked: false,
        correct: false,
      },
      {
        texto: "Lutou ao lado da Alemanha",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "O Brasil participou através da DNOG (Divisão Naval em Operações de Guerra) e de uma missão médica enviada à Europa.",
  },
  {
    titulo: "Império Otomano",
    alternativas: [
      {
        texto: "Fortaleceu-se e expandiu suas fronteiras",
        marked: false,
        correct: false,
      },
      {
        texto: "Desintegrou-se após a derrota na guerra",
        correct: true,
        marked: false,
      },
      {
        texto: "Não participou do conflito",
        marked: false,
        correct: false,
      },
      {
        texto: "Foi o grande vencedor da guerra",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "O fim da guerra marcou a queda do Império Otomano e a reconfiguração do Oriente Médio sob mandatos britânicos e franceses.",
  },
  {
    titulo: "Fim dos Combates",
    alternativas: [
      {
        texto: "11 de novembro de 1918 (Armistício)",
        correct: true,
        marked: false,
      },
      {
        texto: "04 de julho de 1917",
        marked: false,
        correct: false,
      },
      {
        texto: "25 de dezembro de 1918",
        marked: false,
        correct: false,
      },
      {
        texto: "01 de janeiro de 1920",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "O armistício foi assinado em um vagão de trem na França, encerrando as hostilidades na Frente Ocidental às 11 horas do dia 11/11.",
  },
  {
    titulo: "Consequências Geopolíticas",
    alternativas: [
      {
        texto: "Surgimento da ONU",
        marked: false,
        correct: false,
      },
      {
        texto: "Queda de quatro grandes impérios",
        correct: true,
        marked: false,
      },
      {
        texto: "A Alemanha conquistou a Europa",
        marked: false,
        correct: false,
      },
      {
        texto: "A Inglaterra tornou-se uma colônia americana",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A guerra causou o colapso dos impérios Alemão, Austro-Húngaro, Russo e Otomano, redesenhando o mapa mundial.",
  },
];

export default data;
