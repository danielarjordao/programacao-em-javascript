/*
Exercício 1: Crie um objeto JavaScript representando um aluno e na sequência
Converta esse objeto para JSON
*/

const aluno = {
	nome: "Daniela",
	idade: 32,
	curso: "Programação em JavaScript"
};

const alunoJSON = JSON.stringify(aluno);
console.log(alunoJSON);

/*
No final Converta o Objeto JSON novamente para objeto JS e mostre o resultado no
console.
*/

const alunoObjeto = JSON.parse(alunoJSON);
console.log(alunoObjeto);


