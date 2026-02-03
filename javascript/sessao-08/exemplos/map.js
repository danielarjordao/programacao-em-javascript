// Podemos criar um conversor de moeda utilizando o map
const precosEmEuros = [10, 20, 30, 40, 50];
const cotacaoEuroReal = 6.21;

// const precosEmReal = precosEmEuros.map(function(precoEmEuro) {
//     return precoEmEuro * cotacaoEuroReal;
// });

// console.log("Preços em real: ", precosEmReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

// Podemos exibir o index aqui também para identificarmos qual item está sendo modificado

// const precosEmRealComIndex = precosEmEuros.map(function(precoEmEuro, index) {
//     let precoEmReal = precoEmEuro * cotacaoEuroReal;
//     console.log("index: ", index, "Preço em Euro: ", precoEmEuro.toLocaleString('pt-PT', {style: 'currency', currency: 'EUR'}), "Preço em Real",precoEmReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
// });

// Exericio dado o conjuto de dados: [1, 7, 10, 44, 12, 59]
// 1. ache o resto da divisão de cada elemento (não precisa exibir) 
// 2. Exiba o seu valor original
// 3. E diga se ele é par ou ímpar