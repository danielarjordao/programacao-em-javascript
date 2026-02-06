// EXERCICIO:
// 1. Recebe o nome.
// 2. No .then, transforma em MAIUSCULAS.
// 3. No proximo .then, imprime "Utilizador: JOAO RONALDO".

// Dado para resolucao:
const getNomeApi = () => Promise.resolve("joao ronaldo");

getNomeApi()
	.then((nome) => {
		return nome.toUpperCase();
	})
	.then((nomeMaiusculo) => {
		console.log(`Utilizador: ${nomeMaiusculo}`);
	});

