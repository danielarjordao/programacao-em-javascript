let array = [1, 2, 3, 4, 5];
let posicao = 3;
for (let i = posicao; i < array.length - 1; i++) {
  array[i] = array[i + 1];
}
array.length--;
console.log(array);
