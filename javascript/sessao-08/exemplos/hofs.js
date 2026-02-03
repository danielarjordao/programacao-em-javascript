// High order function para operações matemáticas

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

function executarOperacoesMatematicas(numero1, numero2, operacao) {
    return operacao(numero1, numero2);
}

// Exemplo de uso

// console.log("Soma: " + executarOperacoesMatematicas(10, 5, somar));       
// console.log("Subtração: " + executarOperacoesMatematicas(10, 8, subtrair));   
// console.log("Multiplicação: " + executarOperacoesMatematicas(10, 5, multiplicar));
// console.log("Divisão: " + executarOperacoesMatematicas(10, 5, dividir));  





// Exercicio crie uma HOF que recebe 3 parametros (numero1, numero2 e callback).
// Repliquem o exemplo que eu acabei de mostrar a vocês.
// Crie uma função única para realizar cada operação matemática (somar, subtrair, multiplicar, dividir) 
// que recebe 2 números e uma operação retorne o resultado da operação.
// no final exiba os resultados no console, colocando o titutlo da operação antes do resultado e
// chamando a HOF correspondente à operação.