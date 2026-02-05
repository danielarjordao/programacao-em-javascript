// Exercícios: filter

console.log("Exercícios: filter");
/*
1. Números Maiores que 10
Dado o array [5, 12, 8, 21, 3, 15], use filter para criar um array apenas com números maiores
que 10.
*/

console.log("\n1.");
const numeros = [5, 12, 8, 21, 3, 15];
const numerosMaioresQue10 = numeros.filter( (numero) => {
	if (numero > 10) {
		return true;
	}
	return false;
});
console.log(numerosMaioresQue10);

/*
2. Palavras Longas
Dado um array de palavras, use filter para retornar apenas as palavras com mais de 5
letras.
*/

console.log("\n2.");
const palavras = ["sofa", "cadeira", "mesa", "estante", "tapete"];
const palavrasLongas = palavras.filter( (palavra) => {
	if (palavra.length > 5) {
		return true;
	}
	return false;
});
console.log(palavrasLongas);

/*
3. Produtos Baratos
Dado um array de produtos [{nome, preco}], use filter para retornar apenas produtos com
preço menor que 50€.
*/

console.log("\n3.");
const produtos = [
	{nome: 'colher', preco: 10},
	{nome: 'faca', preco: 8},
	{nome: 'garfo', preco: 8},
	{nome: 'prato', preco: 60}
];
const produtosBaratos = produtos.filter( (produto) => {
	if (produto.preco < 50) {
		return true;
	}
	return false;
});
console.log(produtosBaratos);

/*
4. Filtrar por Idade
Dado um array de pessoas [{nome, idade}], use filter para retornar apenas pessoas com
idade entre 18 e 30 anos (inclusive).
*/

console.log("\n4.");
const pessoas = [
	{nome: 'Ana', idade: 25},
	{nome: 'Maria', idade: 17},
	{nome: 'João', idade: 30},
	{nome: 'Pedro', idade: 31}
];
const pessoasEntre18e30 = pessoas.filter( (pessoa) => {
	if (pessoa.idade >= 18 && pessoa.idade <= 30) {
		return true;
	}
	return false;
});
console.log(pessoasEntre18e30);


