/*
Exercício 1: FizzBuzz: Imprima os números de 1 a 20. Se for múltiplo de 3, imprime "Fizz". Se
for múltiplo de 5, imprime "Buzz". Se for múltiplo de ambos, imprime "FizzBuzz".
*/

for (let i = 1; i <= 20; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0 ) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
