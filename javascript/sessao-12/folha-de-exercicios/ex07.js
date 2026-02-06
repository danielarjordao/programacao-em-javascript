// EXERCICIO:
// 1. Pega na taxa de cambio.
// 2. No .then, multiplica essa taxa por um valor de 50 euros e retorna o resultado.
// 3. No proximo .then, imprime: "O valor convertido e $X".

// Dado para resolucao:
const obterTaxaCambio = () => Promise.resolve(1.10); // 1 euro = 1.10 dolares

obterTaxaCambio()
	.then((taxa) => {
		return taxa * 50;
	})
	.then((valorConvertido) => {
		console.log(`O valor convertido e $${valorConvertido.toFixed(2)}`);
	});
