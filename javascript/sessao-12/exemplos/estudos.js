// EXERCICIO: fluxo com Promises, passos 1 a 5, sem arrow functions.

function executorPasso1(resolve, reject) {
  setTimeout(function () {
    console.log("Passo 1");
    reject("Passo 1");
	console.log("Executando o passo 1...");
	}, 500);
}

function executorPasso2(resolve, reject) {
	if (false) { // Simulando uma condição de sucesso ou falha
		setTimeout(function () {
			console.log("Passo 2");
			resolve("Passo 2");
		}, 500);
	} else {
		reject("Falha no passo 2");
	}
}

function executorPasso3(resolve, reject) {
  setTimeout(function () {
    console.log("Passo 3");
    resolve("Passo 3");
  }, 500);
}

function executorPasso4(resolve, reject) {
  setTimeout(function () {
    reject("Falha no passo 4");
  }, 500);
}

function executorPasso5(resolve, reject) {
  setTimeout(function () {
    console.log("Passo 5");
    resolve("Passo 5");
  }, 500);
}

function passo1() {
  return new Promise(executorPasso1);
}

function passo2() {
  return new Promise(executorPasso2);
}

function passo3() {
  return new Promise(executorPasso3);
}

function passo4() {
  return new Promise(executorPasso4);
}

function passo5() {
  return new Promise(executorPasso5);
}

passo1()
  .then(function () {
    return passo2();
  })
  .then(function () {
    return passo3();
  })
  .then(function () {
    return passo4();
  })
  .then(function () {
    return passo5();
  })
  .catch(function (erro) {
    console.error(erro);
  }).finally(() => {
	console.log("Processo concluído (com ou sem erros).");
  });

  console.log("Iniciando o processo...");
