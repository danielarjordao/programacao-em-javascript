// const urlErrada = "http://www.omdbapi.com/?s=war&apikey=5224bc0";
// //  Sem tratamento de erros
//  Percebam que a resposta ao erro será dada pelo fech e não pelo try catch
// async function obterDados() {
//     const response = await fetch(urlErrada);
//     const dados = await response.json();
//     console.log(dados);
// }
// obterDados();

// Com tratamento de erros

const url = "http://www.omdbapi.com/?s=war&apikey=5224bc09";


async function obterDados() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}: Acesso não autorizado!`);
        }
        const dados = await response.json();
        console.log(dados);
    } catch(erro) {
        console.error("Tratamento de exceção: ", erro.message);
    }
}
obterDados();

