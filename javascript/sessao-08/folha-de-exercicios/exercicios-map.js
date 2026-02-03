// Exericio dado o conjuto de dados: [1, 7, 10, 44, 12, 59]
// 1. ache o resto da divisão de cada elemento (não precisa exibir) 
// 2. Exiba o seu valor original
// 3. E diga se ele é par ou ímpar

const numbers = [1, 7, 10, 44, 12, 59];

const parOuImpar = numbers.map(function(numero) {
    const resto = numero % 2

    if (resto === 0) {
        console.log(numero, "é par");
    } else {
        console.log(numero ,"é impar");
    }
});