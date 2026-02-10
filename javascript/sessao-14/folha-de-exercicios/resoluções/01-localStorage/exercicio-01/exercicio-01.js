// Exercício 1: Crie um botão que, ao ser clicado, guarde o 
// seu nome no localStorage com a chave usuario


const btn = document.querySelector("#salvar");

btn.addEventListener("click", () => {
localStorage.setItem("usuario", "Rodrigo");
});
