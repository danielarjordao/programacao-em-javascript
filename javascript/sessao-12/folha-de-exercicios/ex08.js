// EXERCICIO:
// Encadeia as 3 funcoes para imprimir a frase completa.

// Dado para resolucao:
const parte1 = () => Promise.resolve("As Promises");
const parte2 = (texto) => Promise.resolve(`${texto} sao`);
const parte3 = (texto) => Promise.resolve(`${texto} poderosas!`);

parte1()
	.then(parte2)
	.then(parte3)
	.then((texto) => {
		console.log(texto);
	});

