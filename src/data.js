const data = [
  {
    titulo: "Fatiamento (Slicing)",
    alternativas: [
      {
        texto: "lista[0:2] inclui os índices 0, 1 e 2",
        marked: false,
        correct: false,
      },
      {
        texto: "lista[-1] acessa o último elemento da lista",
        correct: true,
        marked: false,
      },
      {
        texto: "O fatiamento sempre modifica a lista original",
        marked: false,
        correct: false,
      },
      {
        texto: "Não é possível usar fatiamento em Strings",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao: "Em Python, índices negativos são usados para acessar elementos de trás para frente, sendo -1 o último elemento. Já o fatiamento [0:2] é exclusivo no limite superior, retornando apenas os índices 0 e 1."
  },
  {
    titulo: "Métodos de Lista",
    alternativas: [
      { texto: "append() adiciona um elemento ao final da lista", correct: true, marked: false },
      { texto: "add() é o método padrão para inserir itens em listas", correct: false, marked: false },
      { texto: "push() é usado para empilhar valores na lista", correct: false, marked: false },
      { texto: "extend() remove todos os elementos da lista", correct: false, marked: false },
    ],
    marked: null,
    correct: null,
    explicacao: "O método 'append()' é a forma padrão de adicionar um único objeto ao final de uma lista. O método 'add()' é usado em Sets, e 'push()' não existe nativamente para listas em Python (é comum no JavaScript)."
  },
  {
    titulo: "Estruturas de Dados",
    alternativas: [
      { texto: "Tuplas são mutáveis e podem ser alteradas", marked: false, correct: false },
      { texto: "Dicionários são indexados por números sequenciais", marked: false, correct: false },
      { texto: "Listas são mutáveis, permitindo alteração de seus itens", correct: true, marked: false },
      { texto: "Sets (conjuntos) permitem elementos duplicados", marked: false, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao: "Listas são coleções mutáveis, o que significa que você pode alterar, adicionar ou remover itens após a criação. Tuplas, por outro lado, são imutáveis, e Sets não permitem valores duplicados."
  },
  {
    titulo: "Funções Embutidas",
    alternativas: [
      {
        texto: "A função size() retorna o tamanho de uma lista",
        marked: false,
        correct: false,
      },
      { texto: "range(5) gera uma lista de 1 a 5", marked: false, correct: false },
      {
        texto: "len() retorna a quantidade de itens de um objeto",
        correct: true,
        marked: false,
      },
      {
        texto: "type() serve para converter tipos de dados",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
    explicacao: "A função 'len()' (abreviação de length) é a função padrão do Python para obter o número de itens em listas, strings, dicionários e outras coleções."
  },
  {
    titulo: "Condicionais e Identação",
    alternativas: [
      { texto: "Python utiliza chaves {} para definir blocos de código", marked: false, correct: false },
      { texto: "A identação é obrigatória para definir a hierarquia do código", correct: true, marked: false },
      { texto: "O operador '&&' é usado para a lógica 'E'", marked: false, correct: false },
      { texto: "O comando 'else if' é escrito exatamente assim em Python", marked: false, correct: false },
    ],
    marked: null,
    correct: null,
    explicacao: "Diferente de C++ ou Java, Python utiliza a identação (espaços em branco) para determinar o escopo de funções, loops e condicionais. Além disso, usa 'and' em vez de '&&' e 'elif' em vez de 'else if'."
  },
  {
    titulo: "List Comprehensions",
    alternativas: [
      { texto: "[x*2 for x in lista]", correct: true, marked: false },
      { texto: "{x*2 for x in lista}", correct: false, marked: false },
      { texto: "map(x*2, lista)", correct: false, marked: false },
      { texto: "lista.foreach(x => x*2)", correct: false, marked: false },
    ],
    marked: null,
    correct: null,
    explicacao: "List Comprehensions usam colchetes '[]' e fornecem uma sintaxe curta para criar uma nova lista baseada em valores de uma lista existente."
  },
  {
    titulo: "Tratamento de Exceções",
    alternativas: [
      { texto: "try / catch", correct: false, marked: false },
      { texto: "try / except", correct: true, marked: false },
      { texto: "throw / catch", correct: false, marked: false },
      { texto: "error / handle", correct: false, marked: false },
    ],
    marked: null,
    correct: null,
    explicacao: "Em Python, utilizamos o bloco 'try' para testar um código e 'except' para capturar e tratar a exceção caso ela ocorra."
  },
  {
    titulo: "Métodos de Dicionário",
    alternativas: [
      { texto: "dic.get('chave')", correct: true, marked: false },
      { texto: "dic.find('chave')", correct: false, marked: false },
      { texto: "dic.search('chave')", correct: false, marked: false },
      { texto: "dic.fetch('chave')", correct: false, marked: false },
    ],
    marked: null,
    correct: null,
    explicacao: "O método 'get()' é preferível pois retorna 'None' (ou um valor padrão) se a chave não existir, evitando que o programa lance um erro de KeyError."
  },
  {
    titulo: "Bloco Principal",
    alternativas: [
      { texto: "if __name__ == '__main__':", correct: true, marked: false },
      { texto: "if main():", correct: false, marked: false },
      { texto: "start code:", correct: false, marked: false },
      { texto: "def __main__():", correct: false, marked: false },
    ],
    marked: null,
    correct: null,
    explicacao: "Esta linha verifica se o script está sendo executado diretamente ou importado como módulo, permitindo organizar o ponto de entrada do programa."
  },
  {
    titulo: "Orientação a Objetos",
    alternativas: [
      { texto: "A palavra 'this' referencia o objeto", correct: false, marked: false },
      { texto: "O método '__init__' é o construtor", correct: true, marked: false },
      { texto: "Classes são definidas com 'struct'", correct: false, marked: false },
      { texto: "Atributos privados começam com @", correct: false, marked: false },
    ],
    marked: null,
    correct: null,
    explicacao: "O método especial '__init__' é chamado automaticamente quando uma nova instância da classe é criada, servindo para inicializar os atributos."
  },
  {
    titulo: "Formatação de Strings",
    alternativas: [
      { texto: "f'Texto {variavel}'", correct: true, marked: false },
      { texto: "$'Texto {variavel}'", correct: false, marked: false },
      { texto: "string(variavel)", correct: false, marked: false },
      { texto: "print('Texto' + #{variavel})", correct: false, marked: false },
    ],
    marked: null,
    correct: null,
    explicacao: "As 'f-strings' (literal string interpolations) são a forma mais moderna e eficiente de formatar strings no Python, bastando colocar um 'f' antes das aspas."
  },
  {
    titulo: "Funções Lambda",
    alternativas: [
      { texto: "São funções nomeadas complexas", correct: false, marked: false },
      { texto: "São funções anônimas de uma linha", correct: true, marked: false },
      { texto: "Não podem receber argumentos", correct: false, marked: false },
      { texto: "Substituem totalmente o comando 'def'", correct: false, marked: false },
    ],
    marked: null,
    correct: null,
    explicacao: "Lambdas são pequenas funções anônimas que podem ter qualquer número de argumentos, mas apenas uma expressão em seu corpo."
  },
  {
    titulo: "Gerenciamento de Arquivos",
    alternativas: [
      { texto: "file.open()", correct: false, marked: false },
      { texto: "using open() as f:", correct: false, marked: false },
      { texto: "with open() as f:", correct: true, marked: false },
      { texto: "open.with(file):", correct: false, marked: false },
    ],
    marked: null,
    correct: null,
    explicacao: "O gerenciador de contexto 'with' garante que o arquivo seja fechado corretamente após o uso, mesmo que ocorra um erro durante a leitura ou escrita."
  },
  {
    titulo: "Função Zip",
    alternativas: [
      { texto: "Compacta um arquivo em .zip", correct: false, marked: false },
      { texto: "Combina elementos de iteráveis", correct: true, marked: false },
      { texto: "Gera números aleatórios", correct: false, marked: false },
      { texto: "Remove espaços de uma string", correct: false, marked: false },
    ],
    marked: null,
    correct: null,
    explicacao: "A função 'zip()' pega dois ou mais iteráveis e os combina em tuplas, facilitando a iteração paralela sobre múltiplas coleções."
  },
  {
    titulo: "Operadores Lógicos",
    alternativas: [
      { texto: "&&, ||, !", correct: false, marked: false },
      { texto: "and, or, not", correct: true, marked: false },
      { texto: "AND, OR, NOT", correct: false, marked: false },
      { texto: "&, |, ~", correct: false, marked: false },
    ],
    marked: null,
    correct: null,
    explicacao: "Python utiliza palavras em inglês (and, or, not) em vez de símbolos para seus operadores lógicos, o que torna o código mais legível e próximo da linguagem natural."
  },
];
export default data;