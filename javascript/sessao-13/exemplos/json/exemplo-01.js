// const objeto = {
//     nome: "Ana",
//     idade: 25,
//     ativo: true
// }

// const json = JSON.stringify(objeto);
// console.log(json);

const json = '{"nome":"Ana","idade":25}';

const objeto = JSON.parse(json);

console.log(objeto);


const response = await fetch(url);
const dados = await response.json();
