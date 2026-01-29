/*
Exercício 6: Verificação de Valor Existente
Crie variáveis com diferentes valores (0, "", null, undefined, "texto") e teste cada uma com if
para verificar se são truthy ou falsy. Imprima o resultado para cada.
*/

let zero = 0;
let vazio = "";
let nulo = null;
let indefinido = undefined;
let texto = "texto";

if (zero) {
	console.log("0 é truthy");
} else {
	console.log("0 é falsy");
}

if (vazio) {
	console.log("'' é truthy");
} else {
	console.log("'' é falsy");
}

if (nulo) {
	console.log("null é truthy");
} else {
	console.log("null é falsy");
}

if (indefinido) {
	console.log("undefined é truthy");
} else {
	console.log("undefined é falsy");
}

if (texto) {
	console.log("'texto' é truthy");
} else {
	console.log("'texto' é falsy");
}

