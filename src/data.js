const data = [
  {
    titulo: "Acesso a Elementos",
    alternativas: [
      {
        texto: "O primeiro elemento tem índice 1",
        marked: false,
        correct: false,
      },
      {
        texto: "O primeiro elemento tem índice 0",
        correct: true,
        marked: false,
      },
      {
        texto: "O último elemento tem índice -1",
        marked: false,
        correct: false,
      },
      {
        texto: "Arrays não possuem índices numéricos",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
  },
  {
    titulo: "Método de Adição",
    alternativas: [
      { texto: "push() adiciona ao final do array", correct: true },
      { texto: "pop() adiciona ao início do array", correct: false },
      { texto: "shift() adiciona ao final do array", correct: false },
      { texto: "unshift() remove o primeiro elemento", correct: false },
    ],
    marked: null,
    correct: null,
  },
  {
    titulo: "Propriedade de Tamanho",
    alternativas: [
      { texto: "array.size()", marked: false, correct: false },
      { texto: "array.count", marked: false, correct: false },
      { texto: "array.length", correct: true, marked: false },
      { texto: "array.index", marked: false, correct: false },
    ],
    marked: null,
    correct: null,
  },
  {
    titulo: "Método Map",
    alternativas: [
      {
        texto: "Modifica o array original permanentemente",
        marked: false,
        correct: false,
      },
      { texto: "Remove elementos duplicados", marked: false, correct: false },
      {
        texto: "Cria um novo array com os resultados da função aplicada",
        correct: true,
        marked: false,
      },
      {
        texto: "Serve apenas para imprimir valores no console",
        marked: false,
        correct: false,
      },
    ],
    marked: null,
    correct: null,
  },
  {
    titulo: "Verificação de Tipo",
    alternativas: [
      { texto: "typeof array === 'array'", marked: false, correct: false },
      { texto: "Array.isArray(variable)", correct: true, marked: false },
      { texto: "variable.isType('array')", marked: false, correct: false },
      { texto: "instanceof Array === false", marked: false, correct: false },
    ],
    marked: null,
    correct: null,
  },
];
export default data;
