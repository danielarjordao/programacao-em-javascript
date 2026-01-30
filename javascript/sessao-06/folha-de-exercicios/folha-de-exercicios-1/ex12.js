/*
Exercício 12: Manipulação com push e pop
Crie um array numeros vazio. Use push para adicionar os números 10, 20, 30. Use pop para
remover o último elemento. Imprima o array resultante.
*/

let numeros = [];

numeros.push(10);
numeros.push(20);
numeros.push(30);

console.log("Array após push:", numeros);

numeros.pop();

console.log("Array após pop:", numeros);
