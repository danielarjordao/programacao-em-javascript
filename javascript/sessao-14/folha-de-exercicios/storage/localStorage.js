/*
========================================
TOPICO 1 - LocalStorage e SessionStorage
========================================
*/

// Exercicio 1: botao que salva o nome no localStorage com a chave "usuario"
const nomeInput = document.getElementById("nome-input");
const salvarNomeBtn = document.getElementById("salvar-nome-btn");
const nomeStatus = document.getElementById("nome-status");

// Ao clicar no botão, o nome do input é salvo no localStorage
salvarNomeBtn.addEventListener("click", function () {
	// Obter o valor do input
	const nome = nomeInput.value;
	// localStorage.setItem salva o valor no armazenamento local do navegador
	localStorage.setItem("usuario", nome);
	// Atualizar o status para informar que o nome foi salvo
	nomeStatus.textContent = "Nome salvo no localStorage.";
});

// Exercicio 2: criar um token de sessao no sessionStorage
const tokenBtn = document.getElementById("token-btn");
const tokenStatus = document.getElementById("token-status");

tokenBtn.addEventListener("click", function () {
	// Criar um token de sessão (pode ser qualquer string, aqui o timestamp é usado para garantir que seja único)
	const token = "token-" + Date.now();
	// sessionStorage.setItem salva o valor no armazenamento de sessão do navegador
	sessionStorage.setItem("tokenSessao", token);
	// Atualizar o status para informar que o token foi criado
	tokenStatus.textContent = "Token criado no sessionStorage.";
	// Imprimir o token no console
	console.log("tokenSessao:", token);
});

// Botao para limpar os storages ao final do exercicio
const limparBtn = document.getElementById("limpar-btn");

limparBtn.addEventListener("click", function () {
	// localStorage.clear() e sessionStorage.clear() limpam todos os dados armazenados
	localStorage.clear();
	sessionStorage.clear();
	// Atualizar os status para informar que os storages foram limpos
	nomeStatus.textContent = "";
	tokenStatus.textContent = "";
});

