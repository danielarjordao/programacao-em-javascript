/*
============================================================
Exercício Prático: Sistema de Validação e Processamento de Pedidos
============================================================
Objetivo: Trabalhar com criação de funções, parâmetros, return,
funções com arrays e objetos, e composição de funções.
============================================================

CONTEXTO:
Você está a desenvolver um sistema de processamento de pedidos
para uma loja online. Precisa criar várias funções para validar
e processar os pedidos dos clientes.
*/

/*
============================================================
PARTE 1: Criar função simples de validação (Dica Utilize o método includes para análise de strings)
============================================================
Crie uma função chamada 'validarEmail' que:
- Receba um email como parâmetro
- Retorne true se o email contiver "@" e "."
- Retorne false caso contrário
Resultado esperado: validarEmail("joao@exemplo.com") → true
*/

function validarEmail(email) {
	return email.includes("@") && email.includes(".");
}

console.log("Email válido:", validarEmail("joao@exemplo.com"));

/*
============================================================
PARTE 2: Função com múltiplos parâmetros e cálculo
============================================================
Crie uma função chamada 'calcularPrecoFinal' que:
- Receba: precoBase e percentualDesconto
- Calcule o preço com desconto aplicado
- Retorne o preço final
Exemplo: calcularPrecoFinal(100, 10) → 90 (100 - 10%)
*/

function calcularPrecoFinal(precoBase, percentualDesconto) {
	const desconto = precoBase * (percentualDesconto / 100);
	return precoBase - desconto;
}

console.log("Preço com desconto:", calcularPrecoFinal(100, 10));

/*
============================================================
PARTE 3: Função com valor padrão
============================================================
Crie uma função chamada 'calcularFrete' que:
- Receba: valorPedido e regiao (padrão: "nacional")
- Se região for "nacional": frete = 5€
- Se região for "internacional": frete = 15€
- Se valorPedido >= 50€: frete grátis (retorne 0)
- Retorne o valor do frete
*/

function calcularFrete(valorPedido, regiao = "nacional") {
	if (valorPedido >= 50) {
		return 0;
	} else if (regiao === "internacional") {
		return 15;
	} else {
		return 5;
	}
}

console.log("Frete calculado:", calcularFrete(30, "internacional"));

/*
============================================================
PARTE 4: Função que retorna objeto
============================================================
Crie uma função chamada 'criarPedido' que:
- Receba: nomeCliente, email, valorTotal
- Retorne um objeto com:
  - id: número aleatório entre 1000-9999 (use Math.floor(Math.random() * 9000) + 1000)
  - cliente: nomeCliente
  - email: email
  - valor: valorTotal
  - status: "pendente"
  - data: data atual (use new Date().toLocaleDateString())
*/

function criarPedido(nomeCliente, email, valorTotal) {
	const pedido = {
		id: Math.floor(Math.random() * 9000) + 1000,
		cliente: nomeCliente,
		email: email,
		valor: valorTotal,
		status: "pendente",
		data: new Date().toLocaleDateString(),
	};
	return pedido;
}

console.log("Objeto pedido criado:", criarPedido("João Silva", "joao@exemplo.com", 100));

/*
============================================================
PARTE 5: Função que processa array
============================================================
Crie uma função chamada 'calcularTotalPedidos' que:
- Receba um array de objetos pedido
- Calcule a soma de todos os valores
- Retorne o total
Dica: use um loop for ou reduce
*/

function calcularTotalPedidos(pedidos) {
	let total = 0;
	for (let i = 0; i < pedidos.length; i++) {
		total += pedidos[i].valor;
	}
	return total;
}

const pedidosExemplo = [
	{ id: 1001, cliente: "Ana", email: "ana@exemplo.com", valor: 75 },
	{ id: 1002, cliente: "João", email: "joao@exemplo.com", valor: 50 },
];

console.log("Total de pedidos:", calcularTotalPedidos(pedidosExemplo));

/*
============================================================
PARTE 6: Função que filtra array
============================================================
Crie uma função chamada 'filtrarPedidosAcimaDe' que:
- Receba: array de pedidos e um valorMinimo
- Retorne apenas os pedidos com valor >= valorMinimo

Dica: use filter ou um loop com push
*/

function filtrarPedidosAcimaDe(pedidos, valorMinimo) {
	const pedidosFiltrados = [];
	for (let i = 0; i < pedidos.length; i++) {
		if (pedidos[i].valor >= valorMinimo) {
			pedidosFiltrados.push(pedidos[i]);
		}
	}
	return pedidosFiltrados;
}

console.log(
	"Pedidos filtrados:",
	filtrarPedidosAcimaDe(pedidosExemplo, 70)
);

/*
============================================================
PARTE 7: Função que valida objeto
============================================================
Crie uma função chamada 'validarPedido' que:
- Receba um objeto pedido
- Verifique se tem todas as propriedades: cliente, email, valor
- Verifique se email é válido (use a função validarEmail)
- Verifique se valor > 0
- Retorne true se tudo válido, false caso contrário
*/

function validarPedido(pedido) {
	if (
		pedido.cliente &&
		pedido.email &&
		pedido.valor > 0 &&
		validarEmail(pedido.email)
	) {
		return true;
	} else {
		return false;
	}
}

const pedidoValido = { cliente: "Ana", email: "ana@exemplo.com", valor: 75 };
const pedidoInvalido = { cliente: "João", email: "joaoexemplo.com", valor: -10 };

console.log("Pedido inválido:", validarPedido(pedidoInvalido));
console.log("Pedido válido:", validarPedido(pedidoValido));

/*
============================================================
PARTE 8: Função que usa outras funções (composição)
============================================================
Crie uma função chamada 'processarPedido' que:
- Receba: nomeCliente, email, valorProdutos, percentualDesconto, regiao
- Valide o email (use validarEmail)
- Se email inválido, retorne: "Erro: Email inválido"
- Calcule preço com desconto (use calcularPrecoFinal)
- Calcule o frete (use calcularFrete)
- Calcule o total (preço com desconto + frete)
- Crie e retorne o pedido (use criarPedido) com valor total
Esta função COMBINA todas as funções anteriores!
*/

function processarPedido(nomeCliente, email, valorProdutos, percentualDesconto, regiao) {
	if (!validarEmail(email)) {
		return "Erro: Email inválido";
	}
	const precoComDesconto = calcularPrecoFinal(valorProdutos, percentualDesconto);
	const frete = calcularFrete(precoComDesconto, regiao);
	const valorTotal = precoComDesconto + frete;
	return criarPedido(nomeCliente, email, valorTotal);
}

console.log(
	"Pedido completo processado:",
	processarPedido("Maria", "maria@exemplo.com", 100, 10, "internacional")
);

/*
============================================================
PARTE 9: Arrow Function
============================================================
Converta a função abaixo para Arrow Function:
function dobrar(numero) {
    return numero * 2;
*/

const dobrar = (numero) => numero * 2;

console.log("Dobro de 5:", dobrar(5));

/*
============================================================
PARTE 10: Desafio Final - Gerar Relatório
============================================================
Crie uma função chamada 'gerarRelatorio' que:
- Receba um array de pedidos
- Calcule e retorne um objeto com:
  - totalPedidos: quantidade de pedidos
  - valorTotal: soma de todos os valores (use calcularTotalPedidos)
  - ticketMedio: valorTotal / totalPedidos
  - maiorPedido: objeto do pedido com maior valor
  - menorPedido: objeto do pedido com menor valor
*/

function gerarRelatorio(pedidos) {
	const totalPedidos = pedidos.length;
	const valorTotal = calcularTotalPedidos(pedidos);
	let ticketMedio = 0;
	let maiorPedido;
	let menorPedido;
	if (totalPedidos > 0) {
		maiorPedido = pedidos[0].valor;
		menorPedido = pedidos[0].valor;
		for (let i = 0; i < pedidos.length; i++) {
			if (pedidos[i].valor > maiorPedido) {
				maiorPedido = pedidos[i].valor;
			}
			if (pedidos[i].valor < menorPedido) {
				menorPedido = pedidos[i].valor;
			}
		}
		ticketMedio = valorTotal / totalPedidos;
	} else {
		maiorPedido = null;
		menorPedido = null;
	}
	return {
		totalPedidos: totalPedidos,
		valorTotal: valorTotal,
		ticketMedio: ticketMedio,
		maiorPedido: maiorPedido,
		menorPedido: menorPedido,
	};
}

console.log("Relatório gerado:", gerarRelatorio(pedidosExemplo));

/*
============================================================
RESULTADO ESPERADO (após completar todos os exercícios):
============================================================
PARTE 1: Emails validados corretamente
PARTE 2: Preços com desconto calculados
PARTE 3: Frete calculado com regras corretas
PARTE 4: Objeto pedido criado com todas propriedades
PARTE 5: Total de pedidos calculado (245.50€)
PARTE 6: Pedidos filtrados (apenas >= 70€)
PARTE 7: Validações funcionando corretamente
PARTE 8: Pedido completo processado usando todas as funções
PARTE 9: Arrow function funcionando
PARTE 10: Relatório com todas as estatísticas
*/
