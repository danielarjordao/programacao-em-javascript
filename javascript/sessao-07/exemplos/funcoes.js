const user1 = {
  name: "Alice",
  age: 20,
};

const user2 = {
  name: "Bob",
  age: 17,
};

function verificarAcesso(user) {
  if (user.age >= 18) {
	return `Acesso permitido para ${user.name}.`;
  } else {
	return `Acesso negado para ${user.name}.`;
  }
}

console.log(verificarAcesso(user1));
console.log(verificarAcesso(user2));

let servidorOnline = true;

function verificarServidor() {
  if (servidorOnline) {
	return "Status: Sistema operando normalmente.";
	  } else {
	return "Status: Atenção! Sistema está em manutenção.";
  }
}

console.log(verificarServidor());

let golosGilVicente = 0;
let golosBraga = 0;

function marcador() {
	golosGilVicente++;
}

marcador();

console.log("Gil Vicente:", golosGilVicente, "- Braga:", golosBraga);


function somar(a, b) {
	return a + b;
}

let resultado = somar(5, 3);
console.log(`Resultado da soma: ${resultado}`);

function calcularQuadrado(numero) {
	return numero * numero;
}

console.log("Quadrado de 4:", calcularQuadrado(2));

/*
Crie uma função chamada `calcularPrecoFinal` que:
- Receba: precoBase e percentualDesconto
- Calcule o preco com desconto aplicado
- Retorne o preco final
*/

function calcularPercoFinal (precoBase, percentualDesconto) {
	let precoFinal = precoBase - (precoBase * (percentualDesconto / 100));
	return precoFinal;
}

console.log("Preço final com desconto:", calcularPercoFinal(200, 15));

const multiplicar = function (x, y) {
	return x * y;
};

console.log("Multiplicação:", multiplicar(4, 5));

const dividir = (x, y) => {
	return x / y;
};

console.log("Divisão:", dividir(20, 4));

const subtrair = (x, y) => x - y;

console.log("Subtração:", subtrair(10, 3));

function executar(funcao, valor) {
	return funcao(valor);
}

function dobrar(n) {
	return n * 2;
}

function triplicar(n) {
	return n * 3;
}

console.log("Dobrar 5:", executar(dobrar, 5));
console.log("Triplicar 5:", executar(triplicar, 5));
