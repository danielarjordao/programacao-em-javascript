/*
Exercício 10: Status de Aprovação
Crie uma variável nota e use o operador ternário para definir status como "Aprovado" se
nota >= 10, caso contrário "Reprovado".
*/

let nota = 15;
// nota = 8;

const status = nota >= 10 ? "Aprovado" : "Reprovado";

console.log(`O aluno está: ${status}`);
