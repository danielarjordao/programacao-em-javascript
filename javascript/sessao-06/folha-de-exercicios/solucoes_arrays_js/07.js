let array = [1, 2, 4, 5];
let novoValor = 3;
let posicao = 2;
for (let i = array.length; i > posicao; i--) {
  array[i] = array[i - 1];
}
array[posicao] = novoValor;
console.log(array);
