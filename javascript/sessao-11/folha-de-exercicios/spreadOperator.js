// Exercícios: Spread Operator

console.log("Exercícios: Spread Operator");

/*
1. Copiar e Adicionar
Dado o array [1, 2, 3], crie uma cópia usando spread e adicione os números 4 e 5 ao final.
*/

console.log("\n1.");
const numeros = [1, 2, 3];
const numerosComAdicoes = [...numeros, 4, 5];
console.log(numerosComAdicoes);

/*
2. Combinar Arrays
Dados os arrays ["a", "b"] e ["c", "d"], use spread para criar um novo array combinado.
*/

console.log("\n2.");
const array1 = ["a", "b"];
const array2 = ["c", "d"];
const arrayCombinado = [...array1, ...array2];
console.log(arrayCombinado);

/*
3. Atualizar Objeto
Dado o objeto {nome: "João", idade: 25}, use spread para criar um novo objeto alterando
apenas a idade para 26.
*/

console.log("\n3.");
const pessoa = {nome: "João", idade: 25};
const pessoaAtualizada = {...pessoa, idade: 26};
console.log(pessoaAtualizada);

/*
4. Mesclar Objetos
Dados dois objetos com informações diferentes, use spread para criar um único objeto com
todas as propriedades.
*/

console.log("\n4.");
const obj1 = {nome: "Ana", idade: 30};
const obj2 = {cidade: "Lisboa", profissão: "Engenheira"};
const objMesclado = {...obj1, ...obj2};
console.log(objMesclado);
