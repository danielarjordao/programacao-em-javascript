const url = "http://www.omdbapi.com/?s=war&apikey=5224bc09";

async function obterDados() {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Erro HTTP! Status: ${response.status}`);
		}
		const data = await response.json();
		if (data.Response === "False") {
			throw new Error(data.Error);
		}
		console.log(data);
	} catch (error) {
		console.error("Ocorreu um erro:", error);
	}
}

obterDados();
