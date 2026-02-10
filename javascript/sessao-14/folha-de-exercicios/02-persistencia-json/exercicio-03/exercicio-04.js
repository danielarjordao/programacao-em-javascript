// Exercício 4: Recupere o objeto salvo no exercício anterior e 
// imprima o nome no console.

const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

console.log(usuarioSalvo.nome);
