const link = "http://www.omdbapi.com/?s=war&apikey=5224bc09";

const dados = fetch(link);

dados
    .then(response => response.json()) 
    .then(dados => console.log(dados))
    // .then(console.log) Uma outra forma de exibir.
    .catch(erro => console.error(erro));    
 

// 1. Realizamos a busca dos dados através do link de uma API;
// 2. Obtemos a resposta e a transformamos em JSON;
// 3. Com a resposta obtida no resolve do primeiro then da promise;
// inserimos ela na variável dados e estamos pronto para utilizá-la.

