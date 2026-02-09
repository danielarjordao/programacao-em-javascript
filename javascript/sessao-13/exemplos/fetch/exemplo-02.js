const link = "http://www.omdbapi.com/?s=war&apikey=5224bc09";
async function obterDados() {
    try {
        const response = await fetch(link);
        dados = await response.json();
        console.log(dados);
    } catch (erro) {
        console.log("Erro: ", erro);
    }
}

obterDados();
// 1. Criamos uma função com a assinatura async
// 2. Inserimos o código que esperamos que funciona dentro 
// do bloco try
// 3. Realizamos a busca dos dados utilizando a assinatura await
// que indica que esse bloco precisa ser tirado da call stack
// 4. Quando a busca dos dados é finalizada, 
// salvamos os dados na const dados
// 5. Exibimos os dados capturados no console;
// 6. Criamos um bloco de tratamento de erro;
// 7. Ainda não realizamos um tratamento,
// Contudo o console captura os erros que possam vir da consulta da api.