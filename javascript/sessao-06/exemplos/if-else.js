let idade = 20;
let classificacaoEtaria = 18;

if (idade < classificacaoEtaria) {
	console.log("A sua idade é " + idade + "anos, e portanto inferior a classificação etária de "
		+ classificacaoEtaria + " anos. Entrada não autorizada.");
} else {
	console.log("A sua idade é " + idade + " anos, e portanto superior a classificação etária de "
		+ classificacaoEtaria + " anos. Entrada autorizada.");
}



let saldo = 50;
let valorCompra = 80;

if (saldo >= valorCompra) {
	saldo -= valorCompra;
	console.log("Compra realizada com sucesso!");
	console.log(`Novo saldo: R$ ${saldo}`);
} else {
	console.log("Saldo insuficiente. Operação cancelada.");
}

/*
Exercício: Use o if para verificar se o número é par ou ímpar. (Dica: resto da divisão)
*/

let numero = 15;

if (numero % 2 === 0) {
	console.log("O número é par.");
} else {
	console.log("O número é ímpar.");
}

