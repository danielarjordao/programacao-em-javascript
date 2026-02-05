// Exercícios: Rest Operator

console.log("Exercícios: Rest Operator");

/*
1. Função Soma Variável
Crie uma função que aceita qualquer quantidade de números e retorna a soma de todos
usando rest operator.
*/

console.log("\n1:");
function soma(...numeros) {
  return numeros.reduce((total, num) => {
    return total + num;
  }, 0);
}
const numerosParaSomar = [1, 2, 3, 4, 5];
const resultadoSoma = soma(...numerosParaSomar);
console.log(`A soma de ${numerosParaSomar.join(", ")} é: ${resultadoSoma}`);

/*
2. Nome e Hobbies
Crie uma função que recebe nome e qualquer quantidade de hobbies, e imprime o nome e a
lista de hobbies.
*/

console.log("\n2:");
function imprimirHobbies(nome, ...hobbies) {
  console.log(`Nome: ${nome}`);
  console.log("Hobbies:");
  hobbies.forEach(hobby => {
    console.log(`   - ${hobby}`);
  });
}
const nomePessoa = "João";
const hobbiesPessoa = ["Futebol", "Cozinhar", "Viajar"];
imprimirHobbies(nomePessoa, ...hobbiesPessoa);

/*
3. Média de Notas
Crie uma função que recebe qualquer quantidade de notas e calcula a média usando rest
operator e reduce.
*/

console.log("\n3:");
function calcularMedia(...notas) {
  const total = notas.reduce((soma, nota) => {
	return soma + nota;
  }, 0);
  if (notas.length === 0) {
	return 0;
  }
  return total / notas.length;
}
const notasAluno = [7, 8, 9, 10];
const mediaNotas = calcularMedia(...notasAluno);
console.log(`A média das notas ${notasAluno.join(", ")} é: ${mediaNotas}`);

/*
4. Máximo de Números
Crie uma função que aceita qualquer quantidade de números e retorna o maior deles
usando rest operator.
*/

console.log("\n4:");
function encontrarMaximo(...numeros) {
  if (numeros.length === 0) {
	return null;
  }
  let maximo = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
	if (numeros[i] > maximo) {
	  maximo = numeros[i];
	}
  }
  return maximo;
}
const numerosParaEncontrarMaximo = [5, 10, 3, 8, 2];
const resultadoMaximo = encontrarMaximo(...numerosParaEncontrarMaximo);
console.log(`O máximo de ${numerosParaEncontrarMaximo.join(", ")} é: ${resultadoMaximo}`);
