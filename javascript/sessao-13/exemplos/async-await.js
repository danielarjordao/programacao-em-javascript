// Comparando com o exemplo de Promises, o código fica mais simples e fácil de ler. O async/await é uma sintaxe mais moderna para lidar com operações assíncronas em JavaScript, tornando o código mais parecido com código síncrono, o que pode ser mais fácil de entender.

function esperar() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Terminou");
		}, 1000);
	});
}

// Com Promises, o código pode ficar mais verboso e difícil de seguir, especialmente quando há várias operações assíncronas encadeadas.
esperar()
	.then(() => {
		console.log("Antes");
		return esperar();
	})
	.then((resultado) => {
		console.log(resultado);
	})
	.then(() => {
		console.log("Depois");
	});

// Com async/await, o código fica mais linear e fácil de seguir, sem a necessidade de encadeamento de .then().
async function executar() {
	console.log("Antes");
	const resultado = await esperar();
	console.log(resultado);
	console.log("Depois");
}

executar();
