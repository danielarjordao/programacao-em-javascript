/*
DESAFIO:

App "User Finder" (GitHub API):
- Input de texto para digitar username do GitHub.
- Botão "Buscar".
- fetch à API do GitHub:
(`https://api.github.com/users/${username}`) e exibir: Foto, Nome, Bio e número de
Repositórios no DOM.
- Tratar erro 404 (Usuário não encontrado).
*/

// Referencias aos elementos do DOM
const header = document.querySelector(".header");
const container = document.querySelector(".container");
const cards = document.querySelectorAll(".card");
const formPrincipal = document.getElementById("formPrincipal");
const inputEntrada = document.getElementById("entrada");
const botaoEnviar = document.querySelector(".button");
const mensagem = document.getElementById("mensagem");
const listaResultado = document.getElementById("listaResultado");

// Função para lidar com o envio do formulário
formPrincipal.addEventListener("submit", async (event) => {
	// Evitar o comportamento padrão do formulário
	event.preventDefault();
	// Obter o valor do input de texto e remover espaços em branco
	const username = inputEntrada.value.trim();
	mensagem.textContent = "Buscando usuário...";
	try {
		// A do evento submit é assíncrona, então pode usar await para esperar a resposta da função buscarUsuario
		const usuario = await buscarUsuario(username);
		// Chama a função exibirResultado para mostrar os dados do usuário no DOM
		exibirResultado(usuario);
		mensagem.textContent = "";
	} catch (error) {
		// Se ocorrer um erro (como usuário não encontrado), exibe a mensagem de erro no DOM
		mensagem.textContent = error.message || "Usuário não encontrado";
	}
});

// Limpar resultados anteriores ao digitar um novo username
inputEntrada.addEventListener("input", () => {
	// Limpar a lista de resultados e a mensagem de erro quando o usuário começar a digitar um novo username
	listaResultado.innerHTML = "";
	mensagem.textContent = "";
});

// Função para buscar usuário no GitHub
async function buscarUsuario(username) {
	try {
		// Faz uma requisição à API do GitHub usando fetch e aguardamos a resposta
		const response = await fetch(`https://api.github.com/users/${username}`);
		// Verifica se a resposta foi bem-sucedida (status 200-299). Se não, lança um erro para ser tratado no catch
		if (!response.ok) {
			let detalhe = "Usuário não encontrado";
			try {
				const erroJson = await response.json();
				if (erroJson && erroJson.message) {
					detalhe = erroJson.message;
				}
			} catch (parseError) {
				// Ignora erro de parse e mantem a mensagem padrao
			}
			throw new Error(detalhe);
		}
		// Converte a resposta em um objeto JavaScript usando response.json() e aguardamos o resultado
		const data = await response.json();
		// Retorna os dados do usuário para a função que chamou buscarUsuario (no caso, o evento submit do formulário)
		return data;
	} catch (error) {
		throw error;
	}
}

// Função para exibir resultado no DOM
function exibirResultado(usuario) {
	// Cria um novo elemento <li> para exibir os dados do usuário
	const item = document.createElement("li");
	// Adiciona a classe "card" ao elemento para aplicar estilos
	item.classList.add("card");
	// Define o conteúdo HTML do item usando template literals para inserir os dados do usuário
	item.innerHTML = `
	    <!-- Recolhe os dados do avatar do usuário.-->
		<img src="${usuario.avatar_url}" alt="${usuario.login}" class="avatar">
	  <h2>
	  			<!-- Recolhe o nome do usuário. Se o nome não estiver disponível, exibe o login. Cria um link para a página do usuário no GitHub. -->
				<a class="result-link" href="${usuario.html_url}" target="_blank" rel="noopener noreferrer">
					${usuario.name || usuario.login}
				</a>
			</h2>
	  <!-- Recolhe a bio do usuário. Se a bio não estiver disponível, exibe "Sem bio disponível". -->
	  <p>${usuario.bio || "Sem bio disponível"}</p>
	  <p>
	  			<!-- Recolhe o número de repositórios públicos do usuário e cria um link para a página de repositórios do usuário no GitHub. -->
				<a class="result-link" href="${usuario.html_url}?tab=repositories" target="_blank" rel="noopener noreferrer">
					Repositórios: ${usuario.public_repos}
				</a>
			</p>
	`;
	// Adiciona o item à lista de resultados no DOM
	listaResultado.appendChild(item);
}

