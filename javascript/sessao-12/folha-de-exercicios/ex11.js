// EXERCICIO:
// Tenta levantar 100 euros e trata o erro com uma mensagem amigavel.

// Dado para resolucao:
const saldo = 50;
const levantarDinheiro = (valor) => {
	return new Promise((res, rej) => {
		if (valor <= saldo) res("Dinheiro entregue");
		else rej("Saldo insuficiente");
	});
};

levantarDinheiro(100)
	.then((mensagem) => {
		console.log(mensagem);
	})
	.catch((erro) => {
		console.error(`Nao foi possivel levantar: ${erro}`);
	});

