// Podemos filtrar todas as idades superiores ou iguais a 18 do nosso array;

const idades = [12,18,25,10,30];

const maiorDeIdade = idades.filter(idade => idade >= 18);
const menorDeIdade = idades.filter(idade => idade < 18);

console.log(`Maior idade legal: ${maiorDeIdade}`);
console.log(`Menor idade legal: ${menorDeIdade}`);

// Os métodos de array também são utilizados com objetos

// const produtos = [
//     {nome: "Camisa", preco: 60},
//     {nome: "Meias", preco: 10},
//     {nome: "Boné", preco: 25}
// ];

// Filtro de produtos abaixo de 50 euros

// const filtroPorPreco = produtos.filter(precos => precos.preco < 50)

// console.log(filtroPorPreco);


// Exericio em base na const de produtosEmOferta:
// 1. filtre os produtos que estão em oferta
// 2. filtre os produtos que estão em oferta e custe mais de 10 euros;

// const produtosEmOferta = [
//     {nome: "Camisa", preco: 60, oferta: false},
//     {nome: "Meias", preco: 10, oferta: true},
//     {nome: "Boné", preco: 25, oferta: true}
// ];