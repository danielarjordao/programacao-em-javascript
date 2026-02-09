//Exercício 2: Crie uma função async que retorne o número 50. Verifique no
//console se o retorno é uma Promise.

async function retorna50() {
    return 50;
}
//Aqui resolvemos o pedido
console.log(retorna50()); 

// Se colocarmos o await teremos o valor resolvido da função, 
// ou seja o número 50
console.log(await retorna50());

// Pq isso acontece? O await fez o trabalho do .then(), 
// ou seja, depois de resolvida a promise, ele me retornou
// o valor da promessa.

// A resolução com console funciona no 
// Node com versões mais modernas, porém versões mais antigas 
// do Node essa solução poderia causar um problema, visto que 
// o await nessas versões só pode ser utilizado dentro 
// de funções async, então vamos a terceira solução

async function exemploComAwait() {
    const valor = await retorna50();
    console.log("O valor resolvido com await: ", valor);
}

exemploComAwait();