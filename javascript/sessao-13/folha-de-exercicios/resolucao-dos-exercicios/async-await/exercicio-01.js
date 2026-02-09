// Exercício 1: Crie uma função async chamada saudacaoAsync que retorne a
// string “Bem-vindo ao Assincronismo”. Mostre no console o valor
// Para simular o assincronismo utilize o método setTimeOut dentro da função
// retornado.

// Linha de pensamento:
// 1. O exercício pede para criar uma função assícrona que retorne uma string Bem-Vindo,
// então a nossa primeira missão é construir a função pedida com a palavra reservada async
async function saudacaoAsync() {
    // 2. Na sequência precisamos criar o método setTimeOut para simular o tempo de requisição
    // contudo o setTimeOut não retorna uma Promise, então precisaremos dela aqui
    return new Promise((resolve) => {
        setTimeout(() => {
            // 3. Presicamos expor o resultado da operação para fora da função
            // Como queremos que a Promise resolva apenas o texto, é ele que colcamos no retorno
            // onde podemos inserir esse texto dentro de uma variável apenas para simular o retorno de um dado;
            const mensagem = "Bem vindo ao Assincronismo"
            resolve(mensagem)
        }, 2000);
    });    
};

// 4.Vamos agora criar uma função para consumir os dados
// da função de saudação.
// iremos consumir uma função assincrona, o que nos força a criar
// uma função que também seja assíncrona para não bloquear a nossa app.
async function mostrarSaudacao() {
    const mensagem = await saudacaoAsync();
    console.log(mensagem);
}

mostrarSaudacao();
