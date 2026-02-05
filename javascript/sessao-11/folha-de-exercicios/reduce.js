// Exercícios: reduce

console.log("Exercícios: reduce");
/*
1. Multiplicação Total
Dado o array [2, 3, 4], use reduce para calcular a multiplicação de todos os números
(resultado: 24).
*/

console.log("\n1.");
const numeros = [2, 3, 4];
const multiplicacaoTotal = numeros.reduce( (acumulador, numero) => {
	return acumulador * numero;
}, 1);
console.log(multiplicacaoTotal);

/*
2. Concatenar Strings
Dado o array ["Olá", "mundo", "JavaScript"], use reduce para concatenar todas as strings
com um espaço entre elas.
*/

console.log("\n2.");
const palavras = ["Olá", "mundo", "JavaScript"];
const frase = palavras.reduce( (acumulador, palavra) => {
	return acumulador + ' ' + palavra;
});
console.log(frase);


/*
3. Agrupar por Categoria
Dado um array de produtos [{nome, categoria}], use reduce para criar um objeto que agrupe
produtos por categoria.
*/

console.log("\n3.");
const produtos = [
	{nome: 'camisa', categoria: 'roupa'},
	{nome: 'calça', categoria: 'roupa'},
	{nome: 'maçã', categoria: 'alimento'},
	{nome: 'banana', categoria: 'alimento'}
];
const produtosAgrupados = produtos.reduce( (acumulador, produto) => {
	// Verificar se a categoria já existe no acumulador, se não existir, criar um array para essa categoria
	if (!acumulador[produto.categoria]) {
		acumulador[produto.categoria] = [];
	}
	// Adicionar o nome do produto à categoria correspondente
	acumulador[produto.categoria].push(produto.nome);
	// Retornar o acumulador atualizado
	return acumulador;
}, {});
console.log(produtosAgrupados);

/*
4. Calcular Média
Dado um array de notas, use reduce para calcular a média. (Dica: some tudo e depois divida
pelo comprimento do array)
*/

console.log("\n4.");
const notas = [8, 9, 7, 10];
const somaNotas = notas.reduce( (acumulador, nota) => {
	return acumulador + nota;
}, 0);
const media = somaNotas / notas.length;
console.log(media);

