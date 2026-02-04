// ======================================================
// 01 - Seleção de elementos (base para tudo)
// querySelector e querySelectorAll
// Criamos aqui quais elementos queremos escutar na dom
// Primeiro passo para abrir a modal é capturar os elementos
// ======================================================

const servicos = document.querySelector(".servicos"); // é a nossa main
const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".modal");
const modalTitulo = document.getElementById("modalTitulo");
const modalTexto = document.getElementById("modalTexto");
const btnFechar = document.querySelector(".fechar");


// ======================================================
// 02 - addEventListener (click simples)
// Reagir a um evento
// ======================================================

cards.forEach((card) => {
  card.addEventListener("click", () => {
    console.log("Card clicado");
  });
});

// ======================================================
// 03 - Objeto Evento (event / e)
// Descobrir quem disparou o evento
// ======================================================

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    console.log("Elemento clicado:", event.target);
  });
});


// ======================================================
// 04 - Event Delegation
// Escutar o elemento pai
// ======================================================

servicos.addEventListener("click", (e) => {
  // 1. O clique aconteceu. Foi no botão "Saiba mais"?
  if (e.target.classList.contains("saiba-mais")) {
    // 2. O "target" é o botão. Mas os dados (data-servico) estão no CARD.     
    const card = e.target.closest(".card");
    // 3. Agora que temos o card na mão, pegamos o dataset dele.
    console.log("Serviço:", card.dataset.servico);
  }
});

// ======================================================
// 05 - Abrir a modal
// Alterar estado visual (classe CSS)
// ======================================================

servicos.addEventListener("click", (e) => {
  if (e.target.classList.contains("saiba-mais")) {
    const card = e.target.closest(".card");

    modalTitulo.textContent = card.querySelector("h3").textContent;
    modalTexto.textContent =
      "Mais informações sobre " + card.dataset.servico;

    modal.classList.remove("hidden");
  }
});

// ======================================================
// 06 - Fechar a modal clicando fora (bubbling)
// ======================================================

modal.addEventListener("click", () => {
  modal.classList.add("hidden");
});


// ======================================================
// 07 - stopPropagation
// Evitar que o clique feche a modal
// ======================================================

document
  .querySelector(".modal-content")
  .addEventListener("click", (e) => {
    e.stopPropagation();
  });


// ======================================================
// 08 - Botão fechar (X)
// Mesmo efeito, evento diferente
// ======================================================

btnFechar.addEventListener("click", (e) => {
  e.stopPropagation();
  modal.classList.add("hidden");
});


// ======================================================
// 09 - Fechar modal com tecla ESC (keydown)
// ======================================================

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
  }
});



