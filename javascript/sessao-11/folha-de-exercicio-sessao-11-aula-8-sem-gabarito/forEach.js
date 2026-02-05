// Exercícios: forEach

/*
1. Imprimir Produtos
Crie um array com 5 produtos (strings) e use forEach para imprimir cada produto precedido
de "Produto: ".
*/

console.log("EXERCÍCIOS: forEach\n");

console.log("1.");
const produtos = ["produto1", "produto2", "produto3", "produto4", "produto5"];

produtos.forEach(produto => {
	console.log(`Produto: ${produto}`);
});


/*
2. Soma com forEach
Dado o array [10, 20, 30, 40, 50], use forEach para calcular a soma total. (Dica: crie uma
variável fora do forEach para guardar a soma)
*/

console.log("\n2.");
const numeros = [10, 20, 30, 40, 50];
let soma = 0;

numeros.forEach(numero => {
	soma += numero;
});

console.log(`A soma total é: ${soma}`);

/*
3. Modificar Array de Objetos
Dado um array de objetos representando pessoas com {nome, idade}, use forEach para
imprimir "Nome: X, Idade: Y" para cada pessoa.
*/

console.log("\n3.");
const pessoas = [
	{ nome: "Alice", idade: 30 },
	{ nome: "Bob", idade: 25 },
	{ nome: "Charlie", idade: 35 }
];

pessoas.forEach(pessoa => {
	console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
});

/*
4. Contar Pares
Dado o array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use forEach para contar quantos números são
pares.
*/

console.log("\n4.");
const numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let contadorPares = 0;

numerosPares.forEach(numero => {
	if (numero % 2 === 0) {
		contadorPares++;
	}
});

console.log(`O número de pares é: ${contadorPares}`);
