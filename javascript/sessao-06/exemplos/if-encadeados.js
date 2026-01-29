let nota = 18;

if (nota >= 18) {
	console.log("Excelente");
} else if (nota >= 10) {
	console.log("Aprovado");
} else {
	console.log("Reprovado");
}

// Cuidado que a ordem dos ifs importa
if (nota >= 10) {
	console.log("Aprovado");
} else if (nota >= 18) {
	console.log("Excelente");
} else {
	console.log("Reprovado");
}

/*
Exercício: Utilizando condições encadeadas crie um script que informe o
desconto do utilizados em base de categoria da sua assinatura, crie quatro categorias:
- Free: sem desconto
- Bronze: 5% de desconto
- Prata: 10% de desconto
- Ouro: 15% de desconto
Resultado esperado: "O utilizador com assinatura ${categoria} tem direito a ${desconto}% de desconto."
*/

let categoria = "Prata";
let desconto;

if (categoria === "Bronze") {
	desconto = 5;
} else if (categoria === "Prata") {
	desconto = 10;
} else if (categoria === "Ouro") {
	desconto = 15;
} else {
	desconto = 0;
}

console.log(
	`O utilizador com assinatura ${categoria} tem direito a ${desconto}% de desconto.`
);
