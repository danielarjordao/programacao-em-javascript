/*
1. Crie um array com 5 números e imprima todos usando for.
2. Some todos os números de um array usando while.
3. Conte quantos números pares existem em um array.
4. Encontre o maior número de um array.
5. Encontre o menor número de um array.
6. Inverta um array manualmente (sem reverse()).
7. Insira um número na posição 2 de um array.
8. Remova o elemento da posição 3 de um array.
9. Use indexOf para encontrar a posição de um valor.
10. Use lastIndexOf para encontrar a última ocorrência.
11. Verifique se um valor existe no array usando if.
12. Use join para transformar um array em string.
13. Use concat para juntar dois arrays.
14. Crie um menu com switch para manipular um array.
15. Conte quantas vezes um valor aparece no array.
*/

console.log("Crie um array com 5 números e imprima todos usando for:");

let numeros = [10, 30, 25, 45, 30];

for (let i = 0; i < numeros.length; i++) {
	console.log(numeros[i]);
}

console.log("\nSome todos os números de um array usando while:");

let soma = 0;
let i = 0;

while (i < numeros.length) {
	soma += numeros[i];
	i++;
}

console.log(`A soma dos números é ${soma}.`);

console.log("\nConte quantos números pares existem em um array:");

let pares = 0;

for (let i = 0; i < numeros.length; i++) {
	if (numeros[i] % 2 === 0 && numeros[i] !== 0) {
		pares++;
	}
}

console.log(`Existem ${pares} números pares no array.`);

console.log("\nEncontre o maior número de um array:");

let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
	if (numeros[i] > maior) {
		maior = numeros[i];
	}
}

console.log(`O maior número do array é ${maior}.`);

console.log("\nEncontre o menor número de um array:");

let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
	if (numeros[i] < menor) {
		menor = numeros[i];
	}
}

console.log(`O menor número do array é ${menor}.`);

console.log("\nInverta um array manualmente (sem reverse()):\n");

console.log("Solução 1: Usando cópia do array.");

let arrayInvertido = [];

for (let i = numeros.length - 1; i >= 0; i--) {
	arrayInvertido.push(numeros[i]);
}

console.log(`Array invertido: [${arrayInvertido}].\n`);

console.log("Solução 2: Modificando o array original.");

for (let i = 0; i < numeros.length / 2; i++) {
	let temp = numeros[i];
	numeros[i] = numeros[numeros.length - 1 - i];
	numeros[numeros.length - 1 - i] = temp;
}

console.log(`Array invertido: [${numeros}].`);

console.log("\nInsira um número na posição 2 de um array:\n");

console.log("Solução 1: Usando com cópia do array.");

let numeroParaInserir = 99;
let posicaoParaInserir = 2;
let resultado = [];

for (let i = 0; i < numeros.length; i++) {
	if (i === posicaoParaInserir) {
		resultado.push(numeroParaInserir);
	}
	resultado.push(numeros[i]);
}

console.log(`Array com o número inserido: [${resultado}].\n`);

console.log("Solução 2: Modificando o array original com splice().");

numeros.splice(posicaoParaInserir, 0, numeroParaInserir);
resultado = numeros;

console.log(`Array com o número inserido: [${resultado}].`);

console.log("\nRemova o elemento da posição 3 de um array.\n");

console.log("Solução 1: Usando com cópia do array.");

let posicaoParaRemover = 3;
let arrayComRemocao = [];

for (let i = 0; i < numeros.length; i++) {
	if (i !== posicaoParaRemover) {
		arrayComRemocao.push(numeros[i]);
	}
}

console.log(`Array após remoção: [${arrayComRemocao}].\n`);

console.log("Solução 2: Modificando o array original com splice().");

numeros.splice(posicaoParaRemover, 1);
arrayComRemocao = numeros;

console.log(`Array após remoção: [${arrayComRemocao}].`);

console.log("\nUse indexOf para encontrar a posição de um valor:");

let valorParaEncontrar = 30;
let indice = numeros.indexOf(valorParaEncontrar);

if (indice !== -1) {
	console.log(`O valor ${valorParaEncontrar} está na posição ${indice}.`);
} else {
	console.log(`O valor ${valorParaEncontrar} não foi encontrado no array.`);
}

console.log("\nUse lastIndexOf para encontrar a última ocorrência:");

let ultimaOcorrencia = numeros.lastIndexOf(valorParaEncontrar);

if (ultimaOcorrencia !== -1) {
	console.log(`A última ocorrência do valor ${valorParaEncontrar} está na posição ${ultimaOcorrencia}.`);
} else {
	console.log(`O valor ${valorParaEncontrar} não foi encontrado no array.`);
}

console.log("\nVerifique se um valor existe no array usando if:");

for (let i = 0; i < numeros.length; i++) {
	if (numeros[i] === valorParaEncontrar) {
		console.log(`O valor ${valorParaEncontrar} existe no array.`);
		break;
	}
	if (i === numeros.length - 1) {
		console.log(`O valor ${valorParaEncontrar} não existe no array.`);
	}
}

console.log("\nUse join para transformar um array em string:");

let arrayComoString = numeros.join(", ");
console.log(`Array como string: "${arrayComoString}".`);

console.log("\nUse concat para juntar dois arrays:");

let outroArray = [55, 65, 75];
let arrayConcatenado = numeros.concat(outroArray);
console.log(`Array concatenado: [${arrayConcatenado}].`);

console.log("\nCrie um menu com switch para manipular um array:");

let operacao = "adicionar no fim"; // Opções: "adicionar no inicio", "adicionar no fim", "remover do inicio", "remover do fim"
let valor = 100;

switch (operacao) {
	case "adicionar no inicio":
		numeros.unshift(valor);
		console.log(`Array após adicionar no início: [${numeros}].`);
		break;
	case "adicionar no fim":
		numeros.push(valor);
		console.log(`Array após adicionar no fim: [${numeros}].`);
		break;
	case "remover do inicio":
		numeros.shift();
		console.log(`Array após remover do início: [${numeros}].`);
		break;
	case "remover do fim":
		numeros.pop();
		console.log(`Array após remover do fim: [${numeros}].`);
		break;
	default:
		console.log("Operação inválida.");
}

console.log("\nConte quantas vezes um valor aparece no array:");

let contador = 0;

for (let i = 0; i < numeros.length; i++) {
	if (numeros[i] === valorParaEncontrar) {
		contador++;
	}
}

console.log(`O valor ${valorParaEncontrar} aparece ${contador} vezes no array.`);

