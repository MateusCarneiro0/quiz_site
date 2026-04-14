const data = [
    {
      titulo: "Acesso a Elementos",
      alternativas: [
        { texto: "O primeiro elemento tem índice 1", marked: false },
        { texto: "O primeiro elemento tem índice 0", correct: true },
        { texto: "O último elemento tem índice -1", marked: false },
        { texto: "Arrays não possuem índices numéricos", marked: false }
      ]
    },
    {
      titulo: "Método de Adição",
      alternativas: [
        { texto: "push() adiciona ao final do array", correct: true },
        { texto: "pop() adiciona ao início do array", marked: false },
        { texto: "shift() adiciona ao final do array", marked: false },
        { texto: "unshift() remove o primeiro elemento", marked: false }
      ]
    },
    {
      titulo: "Propriedade de Tamanho",
      alternativas: [
        { texto: "array.size()", marked: false },
        { texto: "array.count", marked: false },
        { texto: "array.length", correct: true },
        { texto: "array.index", marked: false }
      ]
    },
    {
      titulo: "Método Map",
      alternativas: [
        { texto: "Modifica o array original permanentemente", marked: false },
        { texto: "Remove elementos duplicados", marked: false },
        { texto: "Cria um novo array com os resultados da função aplicada", correct: true },
        { texto: "Serve apenas para imprimir valores no console", marked: false }
      ]
    },
    {
      titulo: "Verificação de Tipo",
      alternativas: [
        { texto: "typeof array === 'array'", marked: false },
        { texto: "Array.isArray(variable)", correct: true },
        { texto: "variable.isType('array')", marked: false },
        { texto: "instanceof Array === false", marked: false }
      ]
    }
  ];
export default data;