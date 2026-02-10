// Exercício 4: Recupere o objeto salvo no exercício anterior
//  e imprima o nome no console.
const pessoaString = localStorage.getItem("pessoa");
const pessoa = JSON.parse(pessoaString);
console.log(pessoa.nome);