let frutas = ["Maçã", "Banana", "Morango"];

console.log(frutas[0]); // Acessa o primeiro elemento do array
console.log(frutas.length); // Mostra o tamanho do array

let fila = ["Cliente 1", "Cliente 2"];

console.log(fila);

// Adiciona um novo cliente ao final da fila
fila.push("Cliente 3");
console.log(fila);

// Remove o ultimo cliente da fila
fila.pop();
console.log(fila);

let tarefas = ["lavar a louça", "estudar JavaScript"];

tarefas.unshift("fazer compras"); // Adiciona uma tarefa no início
console.log(tarefas);

tarefas.shift(); // Remove a primeira tarefa
console.log(tarefas);

/*
Exercício: Dado o seguinte array de produtos:
produtos = ["Camisa", "Calça", "Meias", "Tênis"];
Adicione dois novos produtos ao final do array
exiba no console o array atualizado
Remova o ultimo produto do array
Imprima no console o array atualizado
Imprima uma linha por cada elemento do array atualizado
Exemplo: "Produto: Camisa", "Produto: Calça", etc.
*/

let produtos = ["Camisa", "Calça", "Meias", "Tênis"];

produtos.push("Vestido", "Saia");
console.log(`Array atualizado: ${produtos}`);

produtos.pop();
console.log(`Array atualizado após remoção: ${produtos}`);

console.log("Lista de produtos:");
for (let i = 0; i < produtos.length; i++) {
	console.log(`Produto: ${produtos[i]}`);
}
