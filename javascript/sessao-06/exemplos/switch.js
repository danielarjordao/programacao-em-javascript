let cargo = "Gerente";

switch (cargo) {
	case "Estagiário":
		console.log("Seu salário é 800€");
	case "Júnior":
		console.log("Seu salário é 1.200€");
		break;
	case "Gerente":
		console.log("Seu salário é 5.000€");
		break;
	default:
		console.log("Cargo não encontrado");
}

/*
Exercício: dias da semana
Utilizando o switch, crie um script que dado um número de 1 a 7,
retorne o dia da semana correspondente (1 - Domingo, 2 - Segunda, etc.).
Cado o número seja invalido, retorne "Número inválido".
*/

let dia = 3;
let nomeDia;

switch (dia) {
	case 1:
		nomeDia = "Domingo";
		break;
	case 2:
		nomeDia = "Segunda-feira";
		break;
	case 3:
		nomeDia = "Terça-feira";
		break;
	case 4:
		nomeDia = "Quarta-feira";
		break;
	case 5:
		nomeDia = "Quinta-feira";
		break;
	case 6:
		nomeDia = "Sexta-feira";
		break;
	case 7:
		nomeDia = "Sábado";
		break;
	default:
		nomeDia = "Número inválido";
}

console.log(`O dia da semana é: ${nomeDia}`);
