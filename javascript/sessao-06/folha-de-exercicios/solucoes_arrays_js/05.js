const numeros = [5, 8, 2, 10, 3];
let menor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}
console.log(menor);
