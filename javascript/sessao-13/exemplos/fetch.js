const link = "http://www.omdbapi.com/?s=war&apikey=5224bc09";

const dados = fetch(link);

dados
	.then((response) => response.json())
	.then(console.log)
	.catch((error) => console.error("Ocorreu um erro:", error));

let dados2 = [];
async function obterDados() {
	try {
		const response = await fetch(link);
		dados2 = await response.json();
		console.log(dados2);
	} catch (error) {
		console.error("Ocorreu um erro:", error);
	}
}

obterDados();


