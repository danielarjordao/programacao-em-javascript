const numeros = [1, 2, 2, 3, 2];
const valor = 2;
let contador = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === valor) {
    contador++;
  }
}
console.log(contador);
