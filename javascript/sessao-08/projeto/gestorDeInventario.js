// Projeto: Gestor de Inventário

// Dados do inventário
const inventario = [
	{ id: 1, nome: "Teclado Mecânico RGB", preco: 85, categoria: ["Informática", "Periféricos"], emStock: true },
	{ id: 2, nome: "Frigideira a Ar (Air Fryer)", preco: 110, categoria: ["Eletrodomésticos", "Cozinha"], emStock: true },
	{ id: 3, nome: "Cadeira de Escritório Ergonómica", preco: 180, categoria: ["Escritório", "Mobiliário"], emStock: false },
	{ id: 4, nome: "Ecrã Curvo 27' 144Hz", preco: 250, categoria: ["Informática", "Ecrãs"], emStock: true },
	{ id: 5, nome: "Máquina de Café de Cápsulas", preco: 75, categoria: ["Eletrodomésticos", "Cozinha"], emStock: true },
	{ id: 6, nome: "Caderno Inteligente A5", preco: 30, categoria: ["Escritório", "Papelaria"], emStock: true },
	{ id: 7, nome: "Trotinete Elétrica", preco: 450, categoria: ["Lazer", "Mobilidade"], emStock: false },
	{ id: 8, nome: "Rato Sem Fios Vertical", preco: 55, categoria: ["Informática", "Periféricos"], emStock: true }
];

// 1. Filter: Produtos em stock
function obterProdutosEmStock(produtos) {
	/*
	produtos.filter() cria um novo array contendo apenas os produtos
	que satisfazem a condição especificada na função de callback.
	Neste caso, estamos a verificar se a propriedade emStock é true.
	produto => produto.emStock é uma arrow function que retorna true
	se o produto estiver em stock, e false caso contrário.
	*/
	return produtos.filter(produto => produto.emStock);
}

// 2. Filter: Produtos em stock com preço abaixo de 100 euros
function obterProdutosEmStockAbaixoDe100(produtos) {
	 /*
	 obterProdutosEmStock(produtos) retorna um array de produtos que estão em stock.
	 Em seguida, aplicamos o método filter() nesse array para obter apenas os produtos
	 cujo preço é inferior a 100 euros.
	*/
	return obterProdutosEmStock(produtos).filter(produto => produto.preco < 100);
}

// 3. Some: Verificar se existe algum produto sem stock e listar quais
function verificarProdutosSemStock(produtos) {
	/*
	 O método some() verifica se pelo menos um elemento no array satisfaz
	 a condição especificada na função de callback e retorna true ou false.
	 Neste caso, estamos a verificar se existe algum produto onde emStock é false.
	*/
	const temProdutosSemStock = produtos.some(produto => !produto.emStock);
	let produtosSemStock = [];

	/*
	 Se existir algum produto sem stock, usamos filter() para criar um array
	 contendo esses produtos e retornamos um objeto com a propriedade existe
	 definida como true e a lista de produtos sem stock.
	 Caso contrário, retornamos um objeto com existe como false e uma lista vazia.
	*/
	if (temProdutosSemStock) {
		produtosSemStock = produtos.filter(produto => !produto.emStock);
		return {
			existe: true,
			produtos: produtosSemStock
		};
	}
	return {
		existe: false,
		produtos: produtosSemStock
	};
}

// 4. Map: Criar lista de preços com IVA (23%)
function calcularPrecosComIVA(produtos) {
	// Definimos a taxa de IVA como 23%
	const IVA = 0.23;

	/*
	 O método map() cria um novo array com os resultados da chamada
	 de uma função para cada elemento no array original.
	 Neste caso, estamos a criar um novo array apenas com os preços
	 já com IVA aplicado (23%).
	 Number para garantir que o valor retornado é numérico,
	 e toFixed(2) para formatar o preço com duas casas decimais.
	*/
	return produtos.map(produto => Number((produto.preco * (1 + IVA)).toFixed(2)));
}

// 5. Reduce: Calcular o valor total do inventário
function calcularValorTotalInventario(produtos) {
	/*
	 O método reduce() aplica uma função a um acumulador e a cada
	 elemento do array (da esquerda para a direita) para reduzi-lo a um único valor.
	 Neste caso, estamos a somar os preços de todos os produtos no inventário.
	total + produto.preco acumula o valor total dos preços,
	iniciando em 0 (segundo argumento de reduce).
	 */
	return produtos.reduce((total, produto) => total + produto.preco, 0);
}

// DEMONSTRAÇÃO DOS RESULTADOS

console.log("GESTOR DE INVENTÁRIO\n");

// 1. Produtos em stock
const produtosEmStock = obterProdutosEmStock(inventario);
console.log("1. PRODUTOS EM STOCK:");
console.log(produtosEmStock);
console.log(`   -> Total: ${produtosEmStock.length} produtos\n`);

// 2. Produtos em stock abaixo de 100 euros
const produtosBaratos = obterProdutosEmStockAbaixoDe100(inventario);
console.log("2. PRODUTOS EM STOCK COM PREÇO ABAIXO DE 100€:");
console.log(produtosBaratos);
console.log(`   -> Total: ${produtosBaratos.length} produtos\n`);

// 3. Verificar produtos sem stock
const statusStock = verificarProdutosSemStock(inventario);
console.log("3. VERIFICAÇÃO DE PRODUTOS SEM STOCK:");
if (statusStock.existe) {
	console.log("   Existem produtos sem stock:");
	statusStock.produtos.forEach(produto => {
		console.log(`      - ${produto.nome} (ID: ${produto.id}, Preço: ${produto.preco}€)`);
	});
} else {
	console.log("   Todos os produtos estão em stock!");
}
console.log();

// 4. Preços com IVA
const precosComIVA = calcularPrecosComIVA(inventario);
console.log("4. LISTA DE PREÇOS COM IVA (23%):");
precosComIVA.forEach((precoComIVA, index) => {
	console.log(`   ${index + 1}. ${precoComIVA}€`);
});
console.log();

// 5. Valor total do inventário
const valorTotal = calcularValorTotalInventario(inventario);
console.log("5. VALOR TOTAL DO INVENTÁRIO:");
console.log(`   Total (sem IVA): ${valorTotal.toFixed(2)}€`);

const valorTotalComIVA = precosComIVA.reduce((total, preco) => total + preco, 0);
console.log(`   Total (com IVA): ${valorTotalComIVA.toFixed(2)}€`);
