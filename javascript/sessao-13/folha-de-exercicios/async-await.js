/*
Exercício 1: Crie uma função async chamada saudacaoAsync que retorne a
string “Bem-vindo ao Assincronismo”. Mostre no console o valor
retornado. Para simular o assincronismo utilize o método setTimeout dentro da
função.
*/


function saudacao () {
	return new Promise ((resolve) => {
		setTimeout(() => {
			resolve("Bem-vindo ao Assincronismo");
		}, 2000)
	});
}

async function saudacaoAsync () {
	console.log("Antes");
	const mensagem = await saudacao();
	console.log(mensagem);
	console.log("Depois");
}

saudacaoAsync();


/*
Exercício 2: Crie uma função async que retorne o número 50. Verifique no
console se o retorno é uma Promise.
*/

async function retorne50Async () {
	return 50;
}

const retorno = retorne50Async();
console.log(retorno);

/*
Uma função async sempre retorna uma Promise.
Se a função retornar um valor, a Promise será resolvida com esse valor.
Se a função lançar um erro, a Promise será rejeitada com esse erro.
Portanto, no exemplo acima, a variável "retorno" conterá uma Promise que será resolvida com o valor 50.
*/



