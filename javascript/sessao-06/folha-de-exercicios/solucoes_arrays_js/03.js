const numeros = [1, 2, 3, 4, 6];
let pares = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares++;
  }
}
console.log(pares);
