// Exercício 1: Crie um objeto JavaScript representando um aluno.
// 01. Criado o objeto aluno, utilizem 
// e na sequência Converta esse objeto para JSON
// a quantidade de atributos que desejarem

const aluno = {
    nome: "Rodrigo",
    apelido: "Costa",
    nacionalidade: "brasileira",
    numeroDeAluno: 20230212,
    situacao: "matriculado"
};

// 02. Convertendo em Objeto JSON

const alunoObjetoJSON = JSON.stringify(aluno);

// 03. Podemos combinar o uso das duas variáveis
console.log(`Ficha do aluno ${aluno.nome}:
     ${alunoObjetoJSON}`)

// 04. convertendo o objeto JSON em objeto JS novamente

// 05. Para converter de volta utilizamos o alunoObjetoJSON
const alunoNovamenteObjeto = JSON.parse(alunoObjetoJSON);

console.log(`O aluno ${alunoNovamenteObjeto.nome}, tem a nacionalidade ${alunoNovamenteObjeto.nacionalidade}`);