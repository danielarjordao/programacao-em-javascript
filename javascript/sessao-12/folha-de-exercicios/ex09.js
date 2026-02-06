// EXERCICIO:
// Chama calcularArea com um valor valido e imprime o resultado.
// Se falhar, trata o erro com console.error.

// Dado para resolucao:
const calcularArea = (lado) => {
	return new Promise((resolve, reject) => {
		if (lado > 0) resolve(lado * lado);
		else reject("Lado invalido!");
	});
};

calcularArea(5)
	.then((area) => {
		console.log(`A area e ${area}`);
	})
	.catch((erro) => {
		console.error(erro);
	});

calcularArea(-3)
	.then((area) => {
		console.log(`A area e ${area}`);
	})
	.catch((erro) => {
		console.error(erro);
	});
