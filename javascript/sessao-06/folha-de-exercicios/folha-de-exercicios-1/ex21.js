/*
Exercicio 2: Calcular o fatorial de um número (ex: 5! = 5 x 4 x 3 x 2 x 1 = 120).
*/

let numero = 5;
// numero = 6;

let fatorial = 1;

for (let i = numero; i >= 1; i--) {
	fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}`);
