// EXERCICIO:
// Crie uma promise que apos 3 segundos imprime "Pode clicar no botao agora!".

// Dado para resolucao:
// Use setTimeout e Promise.

function promessa(resolve, reject) {
	if (true) { // Simulando uma condição de sucesso ou falha
		setTimeout(() => {
			resolve("Pode clicar no botao agora!");
		}, 3000)
	} else {
		reject("Ocorreu um erro.");
	}
}

function criarPromessa() {
	return new Promise(promessa);
}

criarPromessa()
	.then((mensagem) => {
		console.log(mensagem);
	})
	.catch((erro) => {
		console.error(erro);
	});
