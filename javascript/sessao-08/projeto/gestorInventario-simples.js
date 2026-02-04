// Projeto: Gestor de Inventário
// Consolidação dos conceitos de Higher Order Functions

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
	return produtos.filter(produto => produto.emStock);
}

// 2. Filter: Produtos em stock com preço abaixo de 100 euros
function obterProdutosEmStockAbaixoDe100(produtos) {
	return produtos.filter(produto => produto.emStock && produto.preco < 100);
}

// 3. Some: Verificar se existe algum produto sem stock e listar quais
function verificarProdutosSemStock(produtos) {
	const temProdutosSemStock = produtos.some(produto => !produto.emStock);

	if (temProdutosSemStock) {
		const produtosSemStock = produtos.filter(produto => !produto.emStock);
		return {
			existe: true,
			produtos: produtosSemStock
		};
	}

	return {
		existe: false,
		produtos: []
	};
}

// 4. Map: Criar lista de preços com IVA (23%)
function calcularPrecosComIVA(produtos) {
	const IVA = 0.23;
	return produtos.map(produto => ({
		...produto,
		precoComIVA: Number((produto.preco * (1 + IVA)).toFixed(2))
	}));
}

// 5. Reduce: Calcular o valor total do inventário
function calcularValorTotalInventario(produtos) {
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
const produtosComIVA = calcularPrecosComIVA(inventario);
console.log("4. LISTA DE PREÇOS COM IVA (23%):");
produtosComIVA.forEach(produto => {
	console.log(`   ${produto.nome}:`);
	console.log(`      Sem IVA: ${produto.preco}€ -> Com IVA: ${produto.precoComIVA}€`);
});
console.log();

// 5. Valor total do inventário
const valorTotal = calcularValorTotalInventario(inventario);
console.log("5. VALOR TOTAL DO INVENTÁRIO:");
console.log(`   Total (sem IVA): ${valorTotal.toFixed(2)}€`);

const valorTotalComIVA = calcularValorTotalInventario(
	produtosComIVA.map(p => ({ ...p, preco: p.precoComIVA }))
);
console.log(`   Total (com IVA): ${valorTotalComIVA.toFixed(2)}€`);
