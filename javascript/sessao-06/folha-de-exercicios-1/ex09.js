/*
Exercício 9: Desconto Simples
Crie uma variável valorCompra e use o operador ternário para aplicar 10% de desconto se o
valor for maior que 100€. Imprima o valor final.
*/

let valorCompra = 120;
// valorCompra = 80;


const valorFinal = valorCompra > 100 ? valorCompra - (valorCompra * 0.1) : valorCompra;

console.log(`O valor final da compra é: €${valorFinal.toFixed(2)}`);
