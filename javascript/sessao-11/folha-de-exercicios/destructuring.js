// Exercícios: Destructuring

console.log("Exercícios: Destructuring");

/*
1. Extrair Coordenadas
Dado o array [10, 20], use destructuring para extrair as coordenadas x e y em variáveis
separadas.
*/

console.log("\n1:");
const coordenadas = [10, 20];
const [x, y] = coordenadas;
console.log(`Coordenadas: x = ${x}, y = ${y}`);

/*
2. Trocar Valores
Dadas duas variáveis a=1 e b=2, use destructuring para trocar os valores (a deve ficar 2 e b
deve ficar 1).
*/

console.log("\n2:");
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(`Valores trocados: a = ${a}, b = ${b}`);

/*
3. Extrair Dados de Pessoa
Dado o objeto {nome: "Ana", idade: 25, cidade: "Porto"}, use destructuring para extrair
apenas nome e idade.
*/

console.log("\n3:");
const pessoa = { nome: "Ana", idade: 25, cidade: "Porto" };
const { nome, idade } = pessoa;
console.log(`Nome: ${nome}, Idade: ${idade}`);


/*
4. Parâmetros com Destructuring
Crie uma função que recebe um objeto de produto {nome, preco, stock} e usa destructuring
nos parâmetros para imprimir as informações.
*/

console.log("\n4:");
function imprimirProduto({ nome, preco, stock }) {
  console.log(`Produto: ${nome}`);
  console.log(`Preço: R$ ${preco}`);
  console.log(`Stock: ${stock} unidades`);
}
const produto = { nome: "Notebook", preco: 2500, stock: 10 };
imprimirProduto(produto);
