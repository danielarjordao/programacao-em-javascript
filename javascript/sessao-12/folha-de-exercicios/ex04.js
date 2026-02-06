// EXERCÍCIO:
// 1. Busca o preço.
// 2. No .then, diminui 20€ do valor.
// 3. No próximo .then, imprime "Preço com desconto: X€".

const buscarPreco = () => Promise.resolve(100);

buscarPreco()
	.then((num) => {
		return num - 20;
	}).then ((numeroAtual) => {
		console.log(`Preço com desconto: ${numeroAtual}€`);
	});
