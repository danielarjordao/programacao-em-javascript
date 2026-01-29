/*
Exercício 7: Dia da Semana
Crie uma variável dia (1-7) e use switch para imprimir o nome do dia da semana
correspondente (1=Segunda, 2=Terça, etc.).
*/

let dia = 1;
// dia = 5;
// dia = 8;

let nomeDia;

switch (dia) {
	case 1:
		nomeDia = "Segunda-feira";
		break;
	case 2:
		nomeDia = "Terça-feira";
		break;
	case 3:
		nomeDia = "Quarta-feira";
		break;
	case 4:
		nomeDia = "Quinta-feira";
		break;
	case 5:
		nomeDia = "Sexta-feira";
		break;
	case 6:
		nomeDia = "Sábado";
		break;
	case 7:
		nomeDia = "Domingo";
		break;
	default:
		nomeDia = "";
}

if (nomeDia) {
	console.log(`O dia da semana é: ${nomeDia}`);
} else {
	console.log("Número inválido! Insira um valor entre 1 e 7.");
}

