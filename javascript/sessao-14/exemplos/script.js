// Referencias aos elementos da pagina
const temaInput = document.getElementById("tema");
const temaOut = document.getElementById("tema-out");
const nomeInput = document.getElementById("nome");
const userOut = document.getElementById("user-out");
const sessaoOut = document.getElementById("sessao-out");

// Salva qualquer valor convertido para JSON
function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Carrega JSON do localStorage e retorna null se nao existir
function loadJson(key) {
  const raw = localStorage.getItem(key);
  if (raw) {
    return JSON.parse(raw);
  }
  return null;
}

// Salva um valor simples no localStorage
document.getElementById("salvar-tema").addEventListener("click", function () {
  localStorage.setItem("tema", temaInput.value);
  temaOut.textContent = "Tema salvo.";
});

// Le um valor simples do localStorage
document.getElementById("ler-tema").addEventListener("click", function () {
  const tema = localStorage.getItem("tema");
  if (tema) {
    temaOut.textContent = "Tema: " + tema;
  } else {
    temaOut.textContent = "Tema nao encontrado.";
  }
});

// Remove a chave especifica do localStorage
document.getElementById("remover-tema").addEventListener("click", function () {
  localStorage.removeItem("tema");
  temaOut.textContent = "Tema removido.";
});

// Salva um objeto convertendo para JSON
document.getElementById("salvar-user").addEventListener("click", function () {
  const nome = nomeInput.value;
  const tema = temaInput.value || "claro";
  saveJson("user", { nome: nome, tema: tema });
  userOut.textContent = "Usuario salvo.";
});

// Le um objeto e mostra formatado
document.getElementById("ler-user").addEventListener("click", function () {
  const user = loadJson("user");
  if (user) {
    userOut.textContent = JSON.stringify(user, null, 2);
  } else {
    userOut.textContent = "Usuario nao encontrado.";
  }
});

// Remove o objeto do localStorage
document.getElementById("limpar-user").addEventListener("click", function () {
  localStorage.removeItem("user");
  userOut.textContent = "Usuario removido.";
});

// Grava um dado na sessionStorage (dura ate fechar a aba)
document.getElementById("sessao-gravar").addEventListener("click", function () {
  sessionStorage.setItem("visita", new Date().toISOString());
  sessaoOut.textContent = "Sessao gravada.";
});

// Le o dado da sessionStorage
document.getElementById("sessao-ler").addEventListener("click", function () {
  const visita = sessionStorage.getItem("visita");
  if (visita) {
    sessaoOut.textContent = "Visita: " + visita;
  } else {
    sessaoOut.textContent = "Sem sessao.";
  }
});

// Limpa tudo do localStorage
document.getElementById("limpar-tudo").addEventListener("click", function () {
  localStorage.clear();
  temaOut.textContent = "";
  userOut.textContent = "";
});

// Escuta mudancas do localStorage feitas em outra aba
window.addEventListener("storage", function (event) {
  if (event.key === "tema") {
    if (event.newValue) {
      temaOut.textContent = "Tema atualizado em outra aba: " + event.newValue;
    } else {
      temaOut.textContent = "Tema removido em outra aba.";
    }
  }
});
