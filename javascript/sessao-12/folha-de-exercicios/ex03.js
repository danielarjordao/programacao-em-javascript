// EXERCICIO: Transforma as funcoes acima em Promises e usa .then().

function passo1Promessa() {
	return new Promise(function (resolve) {
		setTimeout(function () {
			console.log("Passo 1");
			resolve();
		}, 1000);
	});
}

function passo2Promessa() {
	return new Promise(function (resolve) {
		setTimeout(function () {
			console.log("Passo 2");
			resolve();
		}, 1000);
	});
}

passo1Promessa().then(function () {
	return passo2Promessa();
});
