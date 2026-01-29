/*
Exercício 2: Classificação de Nota
Crie uma variável nota (0-20) e use if/else if/else para classificar:
- nota >= 16: "Excelente"
- nota >= 14: "Bom"
- nota >= 10: "Suficiente"
- nota < 10: "Insuficiente"
*/

let nota = 15;
// nota = 18;
// nota = 12;
// nota = 8;

let resultado;

if (nota >= 16) {
	resultado = "Excelente";
} else if (nota >= 14) {
	resultado = "Bom";
} else if (nota >= 10) {
	resultado = "Suficiente";
} else {
	resultado = "Insuficiente";
}

console.log(`Nota: ${nota} - Classificação: ${resultado}`);
