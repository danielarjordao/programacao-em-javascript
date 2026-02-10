/*
========================================
TOPICO 2 - Persistencia com JSON
========================================
*/

// Exercicio 3: guardar objeto no localStorage
const pessoa = { nome: "Ana", idade: 25 };
// localStorage só aceita strings, por isso é necessário converter o objeto para JSON
localStorage.setItem("pessoa", JSON.stringify(pessoa));

// Exercicio 4: recuperar e imprimir o nome no console
const pessoaRaw = localStorage.getItem("pessoa");
if (pessoaRaw) {
	// JSON.parse converte a string JSON de volta para um objeto JavaScript
	const pessoaLida = JSON.parse(pessoaRaw);
	console.log("Nome:", pessoaLida.nome);
}

// Exercicio 5: criar array de produtos e persistir
const produtos = [
	{ nome: "Teclado", valor: 89.9 },
	{ nome: "Monitor", valor: 199.0 },
	{ nome: "Rato", valor: 45.0 },
];

// Persistir o array de produtos no localStorage
localStorage.setItem("produtos", JSON.stringify(produtos));

// Recuperar e imprimir os produtos no console
const produtosRaw = localStorage.getItem("produtos");
if (produtosRaw) {
	// JSON.parse converte a string JSON de volta para um array JavaScript
	const produtosLidos = JSON.parse(produtosRaw);
	console.log("Produtos:", produtosLidos);
}
