const data = [
  {
    titulo:
      'Questão 01. (Misturas / Suco de Uva) Na produção de suco de uva integral, um fenômeno comum é a precipitação de bitartarato de potássio (KHC4H4O6) quando o suco é resfriado. Esse sal possui uma curva de solubilidade fortemente dependente da temperatura. Para evitar que o consumidor encontre "cristais" no fundo da garrafa, as indústrias realizam a "estabilização tartárica". Considerando que o suco é uma mistura complexa, analise as afirmações:\nI. A formação dos cristais de bitartarato sob resfriamento caracteriza um processo de cristalização fracionada natural.\nII. A remoção desses cristais por decantação seguida de filtração é um método físico que altera a classificação da mistura de homogênea para heterogênea durante o processo.\nIII. O uso de tanques encamisados para resfriamento segue o princípio da Química Verde de "Eficiência Energética", caso o calor retirado seja reaproveitado.\nEstá(ão) correta(s):',
    alternativas: [
      { texto: "Apenas I.", marked: null, correct: false },
      { texto: "I e II.", marked: null, correct: false },
      { texto: "I e III.", marked: null, correct: true },
      { texto: "II e III.", marked: null, correct: false },
      { texto: "I, II e III.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "I está correta (precipitação por solubilidade). II está incorreta pois a decantação visa manter a fase líquida límpida (homogênea visualmente). III está correta, pois reaproveitar energia térmica é um pilar da eficiência energética.",
  },
  {
    titulo:
      "Questão 02. (Modelos Atômicos) O modelo de Bohr foi um marco ao introduzir a quantização da energia. Imagine um átomo hipotético onde um elétron salta do nível n=4 para o nível n=2, liberando um fóton de luz visível. Se esse mesmo átomo recebesse exatamente a mesma quantidade de energia enquanto o elétron estivesse no nível n=2, mas agora na forma de calor, poderíamos afirmar, segundo a lógica de Bohr, que:",
    alternativas: [
      {
        texto:
          "O elétron obrigatoriamente saltaria para o nível n=4, pois a energia é quantizada e independente da forma (luz ou calor).",
        marked: null,
        correct: true,
      },
      {
        texto:
          "O elétron seria arrancado do átomo, transformando-o em um cátion.",
        marked: null,
        correct: false,
      },
      {
        texto: "O átomo sofreria uma transmutação nuclear.",
        marked: null,
        correct: false,
      },
      {
        texto: "O modelo de Bohr não prevê absorção de calor.",
        marked: null,
        correct: false,
      },
      {
        texto: 'O elétron entraria em um estado de "colapso orbital".',
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A quantização de Bohr estabelece que o elétron muda de órbita ao absorver a diferença exata de energia (quanta) entre os níveis, independente da fonte térmica ou luminosa.",
  },
  {
    titulo:
      'Questão 03. (Distribuição Eletrônica) Um elemento químico "X" apresenta o último elétron com a configuração 4p3. Sobre este elemento, analise as proposições:\nI. Pertence ao grupo 15 e ao 4º período.\nII. Seu cátion bivalente (X2+) apresenta 31 elétrons se ele for o Arsênio.\nIII. Segundo o princípio de Aufbau, sua camada de valência possui 5 elétrons.\nIV. Ele é um metal de transição externa.\nEstão corretas apenas:',
    alternativas: [
      { texto: "I e III.", marked: null, correct: true },
      { texto: "II e IV.", marked: null, correct: false },
      { texto: "I, II e III.", marked: null, correct: false },
      { texto: "I, III e IV.", marked: null, correct: false },
      { texto: "Todas as anteriores.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "4p3 indica o 4º período e grupo 15 (s2 p3). A camada de valência é a 4, com 5 elétrons. Não é metal de transição, pois termina em p (representativo).",
  },
  {
    titulo:
      "Questão 04. (Funções Inorgânicas) O suco de uva possui pH ácido devido aos ácidos tartárico e málico. Ao neutralizar o suco com hidróxido de cálcio (Ca(OH)2), o sal formado na reação com o ácido tartárico (H2C4H4O6) seria:",
    alternativas: [
      {
        texto: "Tartarato de cálcio; solução ácida.",
        marked: null,
        correct: false,
      },
      {
        texto: "Sulfato de cálcio; solução neutra.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "Tartarato de cálcio; reação de neutralização total produzindo sal e água.",
        marked: null,
        correct: true,
      },
      {
        texto: "Óxido de cálcio; solução básica.",
        marked: null,
        correct: false,
      },
      {
        texto: "Hidreto de cálcio; reação violenta.",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Ácido + Base -> Sal + Água. A reação produz o sal tartarato de cálcio e água.",
  },
  {
    titulo:
      "Questão 05. (Ligações Químicas) Analise a estrutura de Lewis da molécula de CO2. Sobre as ligações nesta molécula, é correto afirmar:",
    alternativas: [
      {
        texto: "Ocorrem ligações iônicas entre C e O.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "Existem duas ligações simples e o oxigênio não atinge o octeto.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "O carbono realiza duas ligações duplas, compartilhando todos os seus elétrons de valência.",
        marked: null,
        correct: true,
      },
      { texto: "A molécula é polar.", marked: null, correct: false },
      {
        texto: "O carbono apresenta pares de elétrons não ligantes.",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "O carbono (família 14) faz duas duplas ligações com os oxigênios para completar o octeto (O=C=O). A molécula é linear e apolar.",
  },
  {
    titulo:
      'Questão 06. (Química Verde) O princípio da "Economia de Átomos" na síntese de um sal é melhor atendido quando:',
    alternativas: [
      {
        texto: "Utiliza solventes orgânicos inflamáveis.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "Minimiza o desperdício, incorporando os reagentes no produto final.",
        marked: null,
        correct: true,
      },
      {
        texto: "Ocorre em temperaturas altíssimas.",
        marked: null,
        correct: false,
      },
      {
        texto: "Utiliza reagentes desbalanceados.",
        marked: null,
        correct: false,
      },
      {
        texto: "Depende de fontes não renováveis.",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A economia de átomos visa desenhar rotas sintéticas onde o maior número possível de átomos dos reagentes esteja presente no produto final, reduzindo subprodutos (lixo).",
  },
  {
    titulo:
      "Questão 07. (Tabela Periódica) Henry Moseley demonstrou que a identidade de um elemento é definida pelo:",
    alternativas: [
      { texto: "Número de massa (A).", marked: null, correct: false },
      { texto: "Volume atômico.", marked: null, correct: false },
      {
        texto: "Número atômico (Z), que representa a carga nuclear.",
        marked: null,
        correct: true,
      },
      { texto: "Número de nêutrons.", marked: null, correct: false },
      { texto: "Ponto de fusão.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Moseley provou que a carga nuclear (número de prótons ou Z) é a base da periodicidade química, corrigindo a organização anterior por massa.",
  },
  {
    titulo:
      "Questão 08. (Separação de Misturas) O método físico mais rápido para separar partículas aglomeradas de um líquido, usando força centrípeta, é a:",
    alternativas: [
      { texto: "Destilação fracionada.", marked: null, correct: false },
      { texto: "Centrifugação.", marked: null, correct: true },
      { texto: "Levigação.", marked: null, correct: false },
      { texto: "Sublimação.", marked: null, correct: false },
      { texto: "Imantação.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A centrifugação acelera a sedimentação de sólidos baseada na diferença de densidade através da rotação em alta velocidade.",
  },
  {
    titulo:
      "Questão 09. (Íons e Radioatividade) Átomos com o mesmo número de massa (A), mas números atômicos (Z) diferentes, são classificados como:",
    alternativas: [
      { texto: "Isótopos.", marked: null, correct: false },
      { texto: "Isótonos.", marked: null, correct: false },
      { texto: "Isóbaros.", marked: null, correct: true },
      { texto: "Isoeletrônicos.", marked: null, correct: false },
      { texto: "Alótropos.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Isóbaros possuem o mesmo número de massa. Exemplo clássico citado na questão: K-40 e Ar-40.",
  },
  {
    titulo:
      "Questão 10. (Ligas Metálicas) Sobre o aço inoxidável (Fe, C, Cr), é correto afirmar:",
    alternativas: [
      {
        texto: "É composto por ligações iônicas.",
        marked: null,
        correct: false,
      },
      {
        texto: "O carbono ocupa espaços intersticiais, aumentando a dureza.",
        marked: null,
        correct: true,
      },
      {
        texto: "Conduz corrente apenas fundido.",
        marked: null,
        correct: false,
      },
      {
        texto: "É uma mistura heterogênea visual.",
        marked: null,
        correct: false,
      },
      { texto: "O cromo apenas aumenta o peso.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "O carbono em ligas de ferro se aloja nos espaços entre os átomos de ferro (interstícios), impedindo deformações e aumentando a resistência.",
  },
  {
    titulo:
      "Questão 11. (Rutherford) A observação de que a maioria das partículas alfa atravessava a folha de ouro permitiu concluir que:",
    alternativas: [
      { texto: "O átomo é maciço.", marked: null, correct: false },
      {
        texto: "A carga positiva está espalhada uniformemente.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "O átomo possui grandes espaços vazios e um núcleo pequeno e denso.",
        marked: null,
        correct: true,
      },
      {
        texto: "Os elétrons giram em órbitas fixas.",
        marked: null,
        correct: false,
      },
      {
        texto: "O núcleo é feito apenas de nêutrons.",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "O experimento de Rutherford provou o modelo nuclear, onde a massa e a carga positiva estão concentradas em um centro minúsculo (núcleo).",
  },
  {
    titulo:
      "Questão 12. (Distribuição de Íons) A distribuição eletrônica correta do íon Fe3+ (Z=26) é:",
    alternativas: [
      { texto: "[Ar] 4s2 3d3", marked: null, correct: false },
      { texto: "1s2 2s2 2p6 3s2 3p6 3d5", marked: null, correct: true },
      { texto: "[Ar] 4s2 3d6", marked: null, correct: false },
      { texto: "[Ar] 4s1 3d4", marked: null, correct: false },
      { texto: "[Ar] 3d6", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Ao formar Fe3+, perdem-se os elétrons da camada de valência (4s2) e depois um do subnível mais energético (3d6 -> 3d5).",
  },
  {
    titulo:
      "Questão 13. (Óxidos) O dióxido de enxofre (SO2) ao reagir com a água forma solução ácida. Ele é um:",
    alternativas: [
      { texto: "Óxido básico.", marked: null, correct: false },
      { texto: "Óxido anfótero.", marked: null, correct: false },
      { texto: "Óxido ácido (anidrido).", marked: null, correct: true },
      { texto: "Óxido neutro.", marked: null, correct: false },
      { texto: "Peróxido.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Óxidos de ametais que geram ácidos em água (SO2 + H2O -> H2SO3) são anidridos ou óxidos ácidos.",
  },
  {
    titulo:
      "Questão 14. (Propriedades Periódicas) Comparando Cálcio (Z=20) e Magnésio (Z=12), afirma-se:",
    alternativas: [
      { texto: "O Mg tem maior raio que o Ca.", marked: null, correct: false },
      {
        texto: "O Ca tem maior energia de ionização.",
        marked: null,
        correct: false,
      },
      { texto: "O Mg é mais eletropositivo.", marked: null, correct: false },
      {
        texto:
          "O Ca tem maior raio atômico que o Mg devido a ter mais camadas.",
        marked: null,
        correct: true,
      },
      {
        texto: "São metais alcalinos (Grupo 1).",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "No mesmo grupo, o raio atômico aumenta de cima para baixo conforme novos níveis de energia (camadas) são adicionados.",
  },
  {
    titulo:
      "Questão 15. (Polaridade) Sobre a molécula de água (H2O), assinale a correta:",
    alternativas: [
      { texto: "Geometria linear e apolar.", marked: null, correct: false },
      {
        texto: "Geometria angular e polar, com elétrons não ligantes no O.",
        marked: null,
        correct: true,
      },
      { texto: "Geometria trigonal plana.", marked: null, correct: false },
      { texto: "Ligações iônicas.", marked: null, correct: false },
      { texto: "Molécula simétrica.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A repulsão dos pares eletrônicos isolados no oxigênio força os hidrogênios para baixo, criando o formato angular e a polaridade.",
  },
  {
    titulo:
      "Questão 16. (Misturas) Antocianinas do suco de uva mudam de cor conforme o pH. Essa mudança indica:",
    alternativas: [
      {
        texto: "Uma reação química que altera a estrutura do pigmento.",
        marked: null,
        correct: true,
      },
      { texto: "Decantação física.", marked: null, correct: false },
      {
        texto: "Que o suco é substância simples.",
        marked: null,
        correct: false,
      },
      { texto: "Aumento de prótons livres.", marked: null, correct: false },
      { texto: "Que são isótopos de carbono.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Indicadores de pH são moléculas que sofrem rearranjo estrutural químico ao reagir em meios ácidos ou básicos, alterando sua cor.",
  },
  {
    titulo:
      "Questão 17. (Distribuição Eletrônica) A configuração do Estrôncio (Z=38) e sua posição são:",
    alternativas: [
      { texto: "[Kr] 5s2; 5º período, Grupo 2.", marked: null, correct: true },
      { texto: "[Ar] 4s2 3d10; Grupo 18.", marked: null, correct: false },
      { texto: "[Kr] 4d2; Grupo 4.", marked: null, correct: false },
      { texto: "[Xe] 6s2; Grupo 2.", marked: null, correct: false },
      { texto: "[Kr] 5s1; Grupo 1.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A distribuição termina em 5s2. Pertence ao 5º período e à família dos metais alcalinoterrosos (Grupo 2).",
  },
  {
    titulo: "Questão 18. (Ligações) Na molécula de N2, os átomos se unem por:",
    alternativas: [
      { texto: "Ligação iônica.", marked: null, correct: false },
      { texto: "Ligação simples.", marked: null, correct: false },
      { texto: "Ligação covalente tripla.", marked: null, correct: true },
      { texto: "Ligação metálica.", marked: null, correct: false },
      { texto: "Ligação dativa.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Cada nitrogênio tem 5 elétrons na valência e compartilha 3 com o outro para atingir o octeto (N≡N).",
  },
  {
    titulo:
      "Questão 19. (Funções) Ao reagir cal viva (CaO) com água, obtém-se:",
    alternativas: [
      { texto: "Ácido cálcico.", marked: null, correct: false },
      { texto: "Hidróxido de cálcio (base).", marked: null, correct: true },
      { texto: "Óxido neutro.", marked: null, correct: false },
      { texto: "Água oxigenada.", marked: null, correct: false },
      { texto: "Sal cloreto.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "CaO é um óxido básico. Sua reação com água produz uma base: CaO + H2O -> Ca(OH)2.",
  },
  {
    titulo:
      "Questão 20. (Química Verde) O uso de catalisadores justifica-se pelo princípio de:",
    alternativas: [
      { texto: "Fontes Renováveis.", marked: null, correct: false },
      { texto: "Prevenção de Resíduos.", marked: null, correct: false },
      {
        texto: "Catálise (uso de reagentes seletivos).",
        marked: null,
        correct: true,
      },
      { texto: "Desenho para Degradação.", marked: null, correct: false },
      { texto: "Segurança Intrínseca.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Catalisadores aumentam a velocidade e seletividade da reação sem serem consumidos, gerando menos rejeitos.",
  },
  {
    titulo:
      "Questão 21. (Partículas) Um átomo neutro com 15 prótons e 16 nêutrons que ganha 3 elétrons torna-se:",
    alternativas: [
      { texto: "Isótopo de enxofre.", marked: null, correct: false },
      { texto: "Cátion de fósforo.", marked: null, correct: false },
      {
        texto: "Ânion P3- isoeletrônico do Argônio.",
        marked: null,
        correct: true,
      },
      { texto: "Átomo neutro de massa 31.", marked: null, correct: false },
      { texto: "Isóbaro de silício.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Z=15 é o fósforo. Ganhando 3 elétrons (15+3=18), fica com a mesma quantidade de elétrons do Argônio (Z=18).",
  },
  {
    titulo:
      'Questão 22. (Thomson) O modelo do "pudim de passas" introduziu a ideia de:',
    alternativas: [
      { texto: "Núcleo denso.", marked: null, correct: false },
      {
        texto: "Divisibilidade do átomo e existência do elétron.",
        marked: null,
        correct: true,
      },
      { texto: "Energia quantizada.", marked: null, correct: false },
      { texto: "Orbitais elípticos.", marked: null, correct: false },
      { texto: "Espaço vazio.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A descoberta do elétron por Thomson quebrou a ideia de Dalton de que o átomo era a menor parte indivisível da matéria.",
  },
  {
    titulo: "Questão 23. (Sais) O NaCl é formado pela reação entre:",
    alternativas: [
      { texto: "HCl e NaOH.", marked: null, correct: true },
      { texto: "Cl2 e Na puro.", marked: null, correct: false },
      { texto: "H2SO4 e Na2CO3.", marked: null, correct: false },
      { texto: "Metano e soda cáustica.", marked: null, correct: false },
      { texto: "Oxigênio e sódio.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A neutralização clássica entre o ácido clorídrico e a base hidróxido de sódio gera sal de cozinha e água.",
  },
  {
    titulo:
      "Questão 24. (Tabela) Eka-alumínio e Eka-silício de Mendeleev são hoje:",
    alternativas: [
      { texto: "Boro e Carbono.", marked: null, correct: false },
      { texto: "Gálio e Germânio.", marked: null, correct: true },
      { texto: "Escândio e Titânio.", marked: null, correct: false },
      { texto: "Sódio e Magnésio.", marked: null, correct: false },
      { texto: "Cobre e Zinco.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A descoberta do Gálio e Germânio com as massas previstas por Mendeleev foi a maior prova de validade de sua tabela.",
  },
  {
    titulo:
      "Questão 25. (Iônica) Compostos iônicos (ex: MgSO4) possuem como característica:",
    alternativas: [
      { texto: "Baixo ponto de fusão.", marked: null, correct: false },
      { texto: "Condução sólida.", marked: null, correct: false },
      {
        texto: "Redes cristalinas rígidas e quebradiças.",
        marked: null,
        correct: true,
      },
      { texto: "Baixa solubilidade geral.", marked: null, correct: false },
      { texto: "Geometria angular.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A forte atração entre cátions e ânions forma retículos organizados que são sólidos duros e quebradiços em temperatura ambiente.",
  },
  {
    titulo:
      "Questão 26. (Separação) Para separar componentes voláteis de aroma do suco, usa-se:",
    alternativas: [
      { texto: "Filtração.", marked: null, correct: false },
      {
        texto: "Cromatografia ou Destilação Fracionada.",
        marked: null,
        correct: true,
      },
      { texto: "Decantação.", marked: null, correct: false },
      { texto: "Flotação.", marked: null, correct: false },
      { texto: "Peneiração.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Componentes voláteis possuem pontos de ebulição diferentes, permitindo a separação por destilação fracionada com coluna.",
  },
  {
    titulo: "Questão 27. (Bohr) A cor verde na chama com cobre deve-se a:",
    alternativas: [
      { texto: "Emissão nuclear.", marked: null, correct: false },
      {
        texto:
          "Elétrons excitados retornando a níveis baixos, emitindo fótons.",
        marked: null,
        correct: true,
      },
      { texto: "Ganho de prótons.", marked: null, correct: false },
      { texto: "Calor virando ametal.", marked: null, correct: false },
      { texto: "Mudança para iônico.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "O teste de chama baseia-se no salto quântico de Bohr: absorção de energia seguida de emissão de luz colorida no retorno.",
  },
  {
    titulo: "Questão 28. (Ácidos) Sobre o ácido sulfúrico (H2SO4), é correto:",
    alternativas: [
      { texto: "Hidrácido forte.", marked: null, correct: false },
      { texto: "Oxiácido forte e diprótico.", marked: null, correct: true },
      { texto: "Monoácido fraco.", marked: null, correct: false },
      { texto: "Óxido ácido sólido.", marked: null, correct: false },
      { texto: "Sal hidratado.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Possui oxigênio (oxiácido), libera dois prótons (diprótico) e é um dos ácidos mais fortes conhecidos.",
  },
  {
    titulo:
      "Questão 29. (Eletronegatividade) O Flúor (Z=9) é o mais eletronegativo porque:",
    alternativas: [
      { texto: "Maior raio atômico.", marked: null, correct: false },
      {
        texto: "Poucas camadas e alta carga nuclear efetiva.",
        marked: null,
        correct: true,
      },
      { texto: "É gás nobre.", marked: null, correct: false },
      { texto: "Maior massa entre halogênios.", marked: null, correct: false },
      { texto: "8 elétrons na valência.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "O pequeno tamanho do átomo de flúor permite que seu núcleo atraia elétrons de outros átomos com força máxima.",
  },
  {
    titulo: "Questão 30. (Metálica) O bronze conduz eletricidade devido ao:",
    alternativas: [
      { texto: "Ligação iônica forte.", marked: null, correct: false },
      { texto: "Orbitais sp3.", marked: null, correct: false },
      { texto: "Mar de elétrons deslocalizados.", marked: null, correct: true },
      { texto: "Baixa densidade.", marked: null, correct: false },
      { texto: "Compartilhamento localizado.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A mobilidade dos elétrons livres na estrutura metálica é o que permite o fluxo de corrente elétrica e calor.",
  },
  {
    titulo:
      'Questão 31. (Misturas / Densidade) Na indústria de suco de uva, utiliza-se a "escala Brix" para medir a concentração de açúcares ("sólidos solúveis"). Um suco com alto teor de açúcar é mais denso que a água pura. Se um lote de suco apresenta densidade de 1,08 g/cm³, e um técnico precisa separar por sedimentação impurezas sólidas com densidade de 1,05 g/cm³, o processo será eficiente?',
    alternativas: [
      {
        texto: "Sim, pois as impurezas são mais leves e afundarão rapidamente.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "Não por sedimentação comum, pois as impurezas são menos densas que o líquido e tenderão a flutuar (flotação).",
        marked: null,
        correct: true,
      },
      {
        texto:
          "Sim, a decantação depende apenas do tamanho da partícula, não da densidade.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "Não, pois misturas de líquidos e sólidos sempre formam soluções homogêneas em 1,08 g/cm³.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "Sim, bastaria aquecer o suco para que a densidade do líquido diminuísse e as partículas afundassem.",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Para que ocorra a sedimentação (decantação), o sólido deve ser mais denso que o líquido. Como as impurezas (1,05) são menos densas que o suco (1,08), elas flutuarão.",
  },
  {
    titulo:
      'Questão 32. (Modelos Atômicos / Bohr) O espectro de absorção de uma substância é como uma "impressão digital". No suco de uva, pigmentos absorvem luz em comprimentos de onda específicos. De acordo com o modelo de Bohr, essa absorção ocorre quando:',
    alternativas: [
      {
        texto:
          "Um elétron emite um fóton ao cair para uma camada mais interna.",
        marked: null,
        correct: false,
      },
      {
        texto: "O núcleo atômico absorve nêutrons da radiação ultravioleta.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "Um elétron absorve um fóton de energia exata e salta para uma órbita mais externa (estado excitado).",
        marked: null,
        correct: true,
      },
      {
        texto:
          "O átomo perde todos os seus elétrons de valência por efeito térmico.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "As ligações covalentes se rompem, transformando a molécula em íons gasosos.",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      'A absorção de luz (energia) faz com que o elétron realize um "salto quântico" para um nível de energia superior, desde que a energia do fóton corresponda à diferença entre os níveis.',
  },
  {
    titulo:
      "Questão 33. (Isótopos / Radioatividade) O Carbono-14 (14C) é um isótopo radioativo usado para datar amostras orgânicas. Ele se diferencia do Carbono-12 (isótopo estável mais comum) por apresentar:",
    alternativas: [
      { texto: "Dois prótons a mais no núcleo.", marked: null, correct: false },
      {
        texto: "Dois elétrons a mais na camada de valência.",
        marked: null,
        correct: false,
      },
      {
        texto: "O mesmo número atômico, mas dois nêutrons a mais.",
        marked: null,
        correct: true,
      },
      {
        texto:
          "Propriedades químicas completamente diferentes, pois é um metal.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "Um raio atômico significativamente maior devido à repulsão nuclear.",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Isótopos são átomos do mesmo elemento (mesmo Z) com diferentes números de massa (A) devido à diferença no número de nêutrons (N).",
  },
  {
    titulo:
      "Questão 34. (Tabela Periódica / Propriedades) A Energia de Ionização é a energia necessária para remover um elétron de um átomo isolado no estado gasoso. Entre os elementos abaixo, qual exigiria a maior energia para a remoção do primeiro elétron?",
    alternativas: [
      { texto: "Sódio (Z=11).", marked: null, correct: false },
      { texto: "Potássio (Z=19).", marked: null, correct: false },
      { texto: "Cloro (Z=17).", marked: null, correct: false },
      { texto: "Hélio (Z=2).", marked: null, correct: true },
      { texto: "Cálcio (Z=20).", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "O Hélio é um gás nobre com o menor raio atômico e uma configuração estável, possuindo a maior primeira energia de ionização.",
  },
  {
    titulo:
      "Questão 35. (Ligações Químicas / Lewis) O ácido málico, presente na uva, possui ligações covalentes entre átomos de Carbono, Hidrogênio e Oxigênio. Em uma ligação covalente entre C e O, o par de elétrons:",
    alternativas: [
      {
        texto: "É transferido definitivamente do Carbono para o Oxigênio.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "É compartilhado, mas fica mais próximo do Oxigênio devido à sua maior eletronegatividade.",
        marked: null,
        correct: true,
      },
      {
        texto:
          "Cria uma nuvem de elétrons livres que percorre toda a molécula.",
        marked: null,
        correct: false,
      },
      {
        texto: "É repelido por ambos os núcleos, mantendo os átomos afastados.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "Fica localizado exatamente no ponto médio entre os dois núcleos, pois a ligação é apolar.",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "O Oxigênio é mais eletronegativo que o Carbono, atraindo o par compartilhado com mais força, gerando uma ligação covalente polar.",
  },
  {
    titulo:
      "Questão 36. (Funções Inorgânicas / Sais) O sulfite de sódio (Na2SO3) é usado para prevenir a oxidação do suco. Esse sal pode ser obtido pela reação entre o ácido sulfuroso (H2SO3) e o hidróxido de sódio (NaOH). Qual a proporção estequiométrica correta de base para ácido para uma neutralização total?",
    alternativas: [
      {
        texto: "1 mol de base para 1 mol de ácido.",
        marked: null,
        correct: false,
      },
      {
        texto: "2 mols de base para 1 mol de ácido.",
        marked: null,
        correct: true,
      },
      {
        texto: "1 mol de base para 2 mols de ácido.",
        marked: null,
        correct: false,
      },
      {
        texto: "3 mols de base para 1 mol de ácido.",
        marked: null,
        correct: false,
      },
      {
        texto: "Não há reação entre essas substâncias.",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "O H2SO3 é um diácido e o NaOH é uma monobase. São necessários 2 OH- para neutralizar os 2 H+ do ácido.",
  },
  {
    titulo:
      'Questão 37. (Química Verde / Solventes) Um químico deseja extrair corantes da casca da uva. Seguindo os princípios da Química Verde (Princípio 5: "Solventes e Auxiliares mais Seguros"), qual seria a melhor escolha de solvente?',
    alternativas: [
      {
        texto:
          "Benzeno, por ser altamente eficiente na dissolução de orgânicos.",
        marked: null,
        correct: false,
      },
      {
        texto: "Tetracloreto de carbono, para evitar riscos de incêndio.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "Água ou etanol de fonte renovável, por serem menos tóxicos e biodegradáveis.",
        marked: null,
        correct: true,
      },
      {
        texto:
          "Nenhum solvente deve ser usado, pois toda extração agride o meio ambiente.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "Éter etílico, devido ao seu baixo ponto de ebulição que economiza energia.",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      'A Química Verde recomenda a substituição de solventes tóxicos por solventes "verdes" como água ou álcoois de biomassa.',
  },
  {
    titulo:
      "Questão 38. (Distribuição Eletrônica / Subníveis) Um elemento químico metálico usado em ligas de alta resistência possui a configuração eletrônica terminando em 3d10 4s1. Qual é esse elemento e qual seu grupo na Tabela Periódica?",
    alternativas: [
      { texto: "Zinco (Z=30), Grupo 12.", marked: null, correct: false },
      { texto: "Cobre (Z=29), Grupo 11.", marked: null, correct: true },
      { texto: "Gálio (Z=31), Grupo 13.", marked: null, correct: false },
      { texto: "Potássio (Z=19), Grupo 1.", marked: null, correct: false },
      { texto: "Prata (Z=47), Grupo 11.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "O Cobre (Z=29) apresenta a exceção 3d10 4s1 para ganhar estabilidade. Ele pertence ao Grupo 11.",
  },
  {
    titulo:
      'Questão 39. (Misturas / Purificação) No processo de produção de suco, o termo "clarificação" refere-se à remoção de coloides. Se um técnico utiliza uma membrana porosa que permite a passagem de moléculas de água e açúcares, mas retém proteínas, o processo é chamado de:',
    alternativas: [
      { texto: "Destilação a vácuo.", marked: null, correct: false },
      {
        texto: "Ultrafiltração ou Nanofiltração.",
        marked: null,
        correct: true,
      },
      { texto: "Decantação acelerada.", marked: null, correct: false },
      { texto: "Sublimação fracionada.", marked: null, correct: false },
      { texto: "Levigação industrial.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A filtração por membranas separa partículas coloidais baseando-se no tamanho reduzido dos poros da membrana.",
  },
  {
    titulo:
      "Questão 40. (Funções Inorgânicas / Óxidos) O monóxido de carbono (CO) é um gás extremamente tóxico que pode ser gerado em caldeiras industriais. Quimicamente, o CO é classificado como um:",
    alternativas: [
      { texto: "Óxido ácido.", marked: null, correct: false },
      { texto: "Óxido básico.", marked: null, correct: false },
      { texto: "Óxido neutro (ou indiferente).", marked: null, correct: true },
      { texto: "Óxido anfótero.", marked: null, correct: false },
      { texto: "Sal anidro.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Óxidos neutros como o CO não reagem com água, ácidos ou bases em condições normais.",
  },
  {
    titulo:
      'Questão 41. (Modelos Atômicos / Dalton) Dalton postulou que átomos de um mesmo elemento são idênticos em todas as suas propriedades, inclusive na massa". Qual conceito moderno desmente esse postulado?',
    alternativas: [
      { texto: "A existência de elétrons.", marked: null, correct: false },
      { texto: "A existência de isótopos.", marked: null, correct: true },
      { texto: "A quantização da energia.", marked: null, correct: false },
      { texto: "A radioatividade alfa.", marked: null, correct: false },
      {
        texto: "A ligação covalente coordenada.",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Isótopos são átomos do mesmo elemento com massas diferentes devido ao número de nêutrons.",
  },
  {
    titulo:
      "Questão 42. (Ligações Químicas / Geometria) A amônia (NH3) é usada em sistemas de refrigeração industrial. Sua geometria molecular e o tipo de força intermolecular predominante são:",
    alternativas: [
      { texto: "Trigonal plana; Dipolo-dipolo.", marked: null, correct: false },
      {
        texto: "Pirâmide trigonal; Ligações de Hidrogênio.",
        marked: null,
        correct: true,
      },
      { texto: "Tetraédrica; Forças de London.", marked: null, correct: false },
      {
        texto: "Linear; Ligação covalente polar.",
        marked: null,
        correct: false,
      },
      { texto: "Angular; Íon-dipolo.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "O par isolado do nitrogênio gera a geometria piramidal e a presença de H ligado a N permite as ligações de hidrogênio.",
  },
  {
    titulo:
      'Questão 43. (Tabela Periódica / Famílias) Um elemento químico "Y" reage violentamente com a água, produzindo gás hidrogênio e uma solução básica. Esse elemento pertence à família dos:',
    alternativas: [
      { texto: "Halogênios (Grupo 17).", marked: null, correct: false },
      { texto: "Metais Alcalinos (Grupo 1).", marked: null, correct: true },
      { texto: "Gases Nobres (Grupo 18).", marked: null, correct: false },
      { texto: "Calcogênios (Grupo 16).", marked: null, correct: false },
      {
        texto: "Metais de Transição (Grupo 3 ao 12).",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Os metais alcalinos são altamente reativos com água, formando bases fortes (hidróxidos) e H2.",
  },
  {
    titulo:
      "Questão 44. (Íons e Cargas) O ânion fosfato, essencial em fertilizantes, possui a fórmula PO4(3-). Quantos elétrons a mais este grupo possui em relação ao seu estado neutro?",
    alternativas: [
      { texto: "1 elétron.", marked: null, correct: false },
      { texto: "2 elétrons.", marked: null, correct: false },
      { texto: "3 elétrons.", marked: null, correct: true },
      { texto: "4 elétrons.", marked: null, correct: false },
      { texto: "5 elétrons.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "A carga 3- indica o ganho de 3 elétrons extras no conjunto de átomos.",
  },
  {
    titulo:
      'Questão 45. (Química Verde / Design) O princípio "Design para a Degradação" orienta que produtos químicos devem se transformar em produtos inócuos após sua função. Um exemplo é:',
    alternativas: [
      {
        texto: "Uso de plásticos derivados de petróleo para cobrir o solo.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "Uso de defensivos agrícolas persistentes que ficam no solo por décadas.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "Uso de embalagens de bioplásticos compostáveis feitas de amido de milho.",
        marked: null,
        correct: true,
      },
      {
        texto:
          "Uso de metais pesados para fortalecer o crescimento das plantas.",
        marked: null,
        correct: false,
      },
      {
        texto: "Incineração de todos os resíduos orgânicos para gerar cinzas.",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Bioplásticos compostáveis se degradam em substâncias naturais, cumprindo o 10º princípio da Química Verde.",
  },
  {
    titulo:
      "Questão 46. (Ligações Metálicas) O alumínio é maleável. Essa capacidade de ser transformado em lâminas é explicada por:",
    alternativas: [
      {
        texto: "Sua rede de íons fixos que impede movimento atômico.",
        marked: null,
        correct: false,
      },
      {
        texto:
          'Pares de elétrons localizados que funcionam como "colas" rígidas.',
        marked: null,
        correct: false,
      },
      {
        texto:
          'O "mar de elétrons" deslocalizados que permite o deslizamento de camadas atômicas.',
        marked: null,
        correct: true,
      },
      {
        texto: "A presença de ligações iônicas entre os átomos.",
        marked: null,
        correct: false,
      },
      {
        texto: "Sua baixa eletronegatividade que faz os átomos se repelirem.",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "O mar de elétrons permite que o retículo se deforme sem se quebrar, conferindo maleabilidade.",
  },
  {
    titulo:
      'Questão 47. (Funções Inorgânicas / Indicadores) Se um suco de uva é vermelho e se torna verde-azulado ao adicionarmos "cal" (base), o que podemos afirmar sobre o pH?',
    alternativas: [
      { texto: "Inicial básico, Final ácido.", marked: null, correct: false },
      { texto: "Inicial ácido, Final básico.", marked: null, correct: true },
      { texto: "Ambos são neutros.", marked: null, correct: false },
      { texto: "O pH não mudou.", marked: null, correct: false },
      {
        texto: "Inicial ácido, Final ainda mais ácido.",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Antocianinas são vermelhas em pH baixo (ácido) e mudam de cor ao atingir faixas básicas.",
  },
  {
    titulo:
      "Questão 48. (Partículas e Massa) Um cátion bivalente possui 18 elétrons e 20 nêutrons. Qual é o seu número de massa (A)?",
    alternativas: [
      { texto: "38.", marked: null, correct: false },
      { texto: "40.", marked: null, correct: true },
      { texto: "18.", marked: null, correct: false },
      { texto: "20.", marked: null, correct: false },
      { texto: "42.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Cátion 2+ com 18 elétrons tem 20 prótons. Massa A = 20 prótons + 20 nêutrons = 40.",
  },
  {
    titulo:
      "Questão 49. (Distribuição Eletrônica / Valência) O elemento Magnésio (Z=12) é central na clorofila. Sua camada de valência e o número de elétrons nela são:",
    alternativas: [
      { texto: "Camada M (3); 2 elétrons.", marked: null, correct: true },
      { texto: "Camada L (2); 8 elétrons.", marked: null, correct: false },
      { texto: "Camada N (4); 2 elétrons.", marked: null, correct: false },
      { texto: "Subnível 2p; 6 elétrons.", marked: null, correct: false },
      { texto: "Camada K (1); 2 elétrons.", marked: null, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Distribuição 1s2 2s2 2p6 3s2. Camada 3 (M) é a de valência com 2 elétrons.",
  },
  {
    titulo:
      'Questão 50. (Contexto Geral / Olimpíada) Qual ação industrial exemplifica melhor o primeiro princípio da Química Verde ("Prevenção")?',
    alternativas: [
      {
        texto: "Instalar filtros nas chaminés para capturar poluentes gerados.",
        marked: null,
        correct: false,
      },
      {
        texto:
          "Otimizar o processo para que não haja geração de resíduos tóxicos.",
        marked: null,
        correct: true,
      },
      {
        texto: "Enterrar lodo químico em aterros sanitários.",
        marked: null,
        correct: false,
      },
      {
        texto: "Diluir esgoto industrial antes de descartar no rio.",
        marked: null,
        correct: false,
      },
      {
        texto: "Aumentar a temperatura para incinerar resíduos.",
        marked: null,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao:
      "Prevenir a criação do resíduo é o pilar fundamental e mais eficiente da Química Verde.",
  },
];

export default data;
