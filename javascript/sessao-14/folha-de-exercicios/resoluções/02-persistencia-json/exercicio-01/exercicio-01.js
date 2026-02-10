// Exercício 3: Guarde o seguinte objeto no localStorage: { nome: "Ana", idade: 25 }

const pessoa = { nome: "Ana", idade: 25 }

localStorage.setItem("pessoa", JSON.stringify(pessoa))