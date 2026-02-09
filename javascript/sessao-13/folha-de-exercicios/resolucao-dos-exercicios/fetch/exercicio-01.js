// Exercício 1: Faça uma requisição GET usando fetch para:
// https://jsonplaceholder.typicode.com/users
// Utilize .then() para mostrar os dados retornados.


// 01. Usaremos o método fetch para realizar a requisição da api
// Esse método retorna uma Promise.

const request = fetch('https://jsonplaceholder.typicode.com/users');
// 02. Usaremos o then para armazenar o resultado resolvido pela Promise
// 03. Convertemos o resultado para JSON, sem isso recebemos a resposta HTTP completa e não os dados em si.
// 04. Com o resultado resolvido no primeiro then chamamos o console para imprimir
// 05. Usamos o catch para tratar possíveis erros que possam ocorrer durante a requisição.
request
    .then(resultado => {
        return resultado.json();
    })
    .then(console.log)
    .catch(error => {
        console.error("Erro na requisição:", error);
    }) // Caso haja algum erro, ele será tratado aqui.


