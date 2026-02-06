// EXERCICIO:
// Testa a funcao com idade 15 e captura o erro no .catch.

// Dado para resolucao:
const verificarIdade = (idade) => {
	return new Promise((resolve, reject) => {
		if (idade < 18) reject("Acesso negado");
		else resolve("Acesso autorizado");
	});
};
