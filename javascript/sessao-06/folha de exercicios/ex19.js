/*
Exercício 19: Validador de Notas com Estatísticas
Crie um script que:
1. Receba um array de notas (valores de 0 a 20)
2. Calcule: média, maior nota, menor nota
3. Classifique cada nota (Excelente/Bom/Suficiente/Insuficiente)
4. Conte quantos alunos estão em cada classificação
5. Imprima um relatório completo
*/

const notas = [18, 15, 12, 9, 20, 7, 14, 16, 10, 5];

let soma = 0;
let maiorNota = -1;
let menorNota = 21;
const nAlunos = notas.length;

const classExc = 18;
const classBom = 14;
const classSuf = 10;

let contExc = 0;
let contBom = 0;
let contSuf = 0;
let contInsuf = 0;

for (let i = 0; i < nAlunos; i++) {
	soma += notas[i];
	if (notas[i] > maiorNota) {
		maiorNota = notas[i];
	}
	if (notas[i] < menorNota) {
		menorNota = notas[i];
	}
	if (notas[i] >= classExc) {
		contExc++;
	} else if (notas[i] >= classBom) {
		contBom++;
	} else if (notas[i] >= classSuf) {
		contSuf++;
	} else {
		contInsuf++;
	}
}

let media = soma / nAlunos;

console.log("Relatório de Notas:");
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Maior Nota: ${maiorNota}`);
console.log(`Menor Nota: ${menorNota}`);
console.log("Classificações:");
console.log(`Excelente: ${contExc} alunos`);
console.log(`Bom: ${contBom} alunos`);
console.log(`Suficiente: ${contSuf} alunos`);
console.log(`Insuficiente: ${contInsuf} alunos`);


