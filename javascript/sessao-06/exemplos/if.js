let idade = 20;
// idade = 18;
// idade = 16;

if (idade < 18) {
	console.log("Não vota")
}

let valorCompra = 20;
let cumpomDesconto = true;
let clientePremium = true
let premiumDesconto = 0.2;

console.log("Valor da compra: " + valorCompra);

if (cumpomDesconto) {
	valorCompra = valorCompra - (valorCompra * 0.1);
	console.log("Cupom de desconto aplicado!");
	console.log("Valor com desconto: " + valorCompra);

}

if (clientePremium) {
	valorCompra = valorCompra - (valorCompra * premiumDesconto);
	console.log("Desconto para cliente premium aplicado!");
	console.log("Valor com desconto: " + valorCompra);
}

console.log("Valor final da compra: " + valorCompra);

/*
Exercício: Radar de velocidade
Utilizando apenas o if, crie um programa que me retorne no console
a seguinte mensagem:
"Velocidade ${valor da velocidade} km/h. Acionar câmera do radar!"
*/

let velocidade = 110;

if (velocidade > 100) {
	console.log(`Velocidade ${velocidade} km/h.`);
	console.log(`A Acionar câmera do radar!`);
}
