// Exercícios: map

console.log("Exercícios: map");

/*
1. Dobrar Números
Dado o array [5, 10, 15, 20], use map para criar um novo array com todos os números
dobrados.
*/

console.log("\n1.");
const numbers = [5, 10, 15, 20];
const doubledNumbers = numbers.map( (numero) => {
	return numero * 2
});
console.log(doubledNumbers); // [10, 20, 30, 40]

/*
2. Nomes em Maiúsculas
Dado o array ["ana", "bruno", "carla"], use map para criar um novo array com todos os
nomes em maiúsculas.
*/

console.log("\n2.");
const names = ["ana", "bruno", "carla"];
const upperCaseNames = names.map( (nome) => {
	return nome.toUpperCase();
});
console.log(upperCaseNames); // ["ANA", "BRUNO", "CARLA"]


/*
3. Extrair Propriedades
Dado um array de objetos de produtos [{nome, preco}], use map para criar um array apenas
com os nomes dos produtos.
*/
console.log("\n3.");
const produtos = [
	{nome: 'colher', preco: 10},
	{nome: 'faca', preco: 8},
	{nome: 'garfo', preco: 8}
];

const produtosNomes = produtos.map( (produto) => {
	return produto.nome;
});

console.log(produtosNomes);

/*
4. Adicionar IVA
Dado um array de preços [100, 200, 300], use map para criar um novo array com os preços
acrescidos de 23% de IVA.
*/

console.log("\n4.");
const precos = [100, 200, 300];
const precosComIVA = precos.map( (preco) => {
	return preco * 1.23;
});
console.log(precosComIVA);

