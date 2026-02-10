// Crie um array de produtos e persista no localStorage.
// No final Converta o Objeto JSON novamente para objeto JS e mostre o resultado no console.

const produtos = [
  { id: 1, nome: "Notebook" },
  { id: 2, nome: "Mouse" }
];

localStorage.setItem("produtos", JSON.stringify(produtos));

