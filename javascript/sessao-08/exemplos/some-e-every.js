// Método Some para verificar se alguma nota foi abaixo de 10

const notas = [12, 15, 8, 19, 11];

const abaixoDe10 = notas.some(nota => nota < 10);

console.log(`Algum aluno foi para recurso? ${abaixoDe10 ? 'Sim' : 'Não'}`);

// Podemos verificar se todos os alunos foram aprovados

// const todosAprovados = notas.every(nota => nota >= 10);

// console.log(`Todos os alunos foram aprovados? ${todosAprovados ? 'Sim' : 'Não'}`);