/*
Exercício 18: Números Pares
Use um loop while para imprimir apenas os números pares de 0 a 20.
*/

let numero = 0;

while (numero <= 20) {
	if (numero % 2 === 0 && numero !== 0) {
		console.log(numero);
	}
	numero++;
}
