// Exercicio crie uma HOF que recebe 3 parametros (numero1, numero2 e callback).
// Repliquem o exemplo que eu acabei de mostrar a vocês.
// Crie uma função única para realizar cada operação matemática (somar, subtrair, multiplicar, dividir) 
// que recebe 2 números e uma operação retorne o resultado da operação.
// no final exiba os resultados no console, colocando o titutlo da operação antes do resultado e
// chamando a HOF correspondente à operação.

function calcular(numero1, numero2, callback) {
    return callback(numero1, numero2);
}   
function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}
console.log("Soma: ", calcular(10, 5, somar));
console.log("Subtração: ", calcular(10, 5, subtrair));
console.log("Multiplicação: ", calcular(10, 5, multiplicar));
console.log("Divisão: ", calcular(10, 5, dividir));