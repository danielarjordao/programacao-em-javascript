const numeros = [5, 8, 2, 10, 3];
let maior = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}
console.log(maior);
