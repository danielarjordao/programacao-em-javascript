/*
Exercício 8: Estações do Ano
Crie uma variável mes (1-12) e use switch para determinar a estação do ano:
- 12, 1, 2: "Inverno"
- 3, 4, 5: "Primavera"
- 6, 7, 8: "Verão"
- 9, 10, 11: "Outono"
*/

let mes = 12;
// mes = 4;
// mes = 8;
// mes = 11;
// mes = 13;

let estacao;

switch (mes) {
	case 12:
	case 1:
	case 2:
		estacao = "Inverno";
		break;
	case 3:
	case 4:
	case 5:
		estacao = "Primavera";
		break;
	case 6:
	case 7:
	case 8:
		estacao = "Verão";
		break;
	case 9:
	case 10:
	case 11:
		estacao = "Outono";
		break;
	default:
		estacao = "";
}

if (estacao) {
	console.log(`A estação do ano é: ${estacao}`);
} else {
	console.log("Número inválido! Insira um valor entre 1 e 12.");
}
