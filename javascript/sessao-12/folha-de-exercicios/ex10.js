// EXERCICIO:
// No .then de getPrecoVenda, chama o getImposto.
// No final, imprime a soma dos dois valores.

// Dado para resolucao:
const getPrecoVenda = () => Promise.resolve(100);
const getImposto = () => Promise.resolve(23);

getPrecoVenda()
	.then((precoVenda) => {
		return getImposto().then((imposto) => {
			return precoVenda + imposto;
		});
	})
	.then((precoFinal) => {
		console.log(`O preço final é ${precoFinal}€`);
	});                               
