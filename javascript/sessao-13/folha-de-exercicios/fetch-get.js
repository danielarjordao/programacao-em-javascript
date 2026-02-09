/*
Exercício 1: Faça uma requisição GET usando fetch para:
https://jsonplaceholder.typicode.com/users
Utilize .then() para mostrar os dados retornados.
*/

const link = "https://jsonplaceholder.typicode.com/users";

fetch(link)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error("Ocorreu um erro:", error);
	});

/*
Exercício 2: Reescreva o exercício anterior utilizando async/await.
*/

async function obterDados(link) {
	try {
		const response = await fetch(link);
		// response.json() converte a resposta em um objeto JavaScript
		const dados = await response.json();
		console.log(dados);
	} catch (error) {
		console.error("Ocorreu um erro:", error);
	}
}

obterDados(link);
