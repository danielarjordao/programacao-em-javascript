// Exercicio: dado o array: [JavaScript, Java, c++, c#];
// 1. Adicione TypeScript na segunda posição do array;
// 2. Adicione C no final do array.

const linguagens = ['JavaScript', 'Java', 'c++', 'c#'];

//  1. Adicione TypeScript na segunda posição do array 
const primeiraParte = linguagens.slice(0,1);
const segundaParte = linguagens.slice(1);
const novaLinguagens = [...primeiraParte, 'TypeScript', ...segundaParte];
console.log("Array com TypeScript na segunda posição:", novaLinguagens);

// 2. Adicione C no final do array
const novaLinguagensFinal = [...novaLinguagens, 'C'];
console.log("Array com C no final:", novaLinguagensFinal);


// Exercicio em base do seguinte objeto: 
// {nome: renault clio, tipo: gasoleo, nome: peugeot 308, tipo: gasolina, nome: renault zoe, tipo: eletrico}
// Adicione seat ibiza, tipo: gasoleo no objeto, mantendo o objeto original, ou seja, criando uma cópia segura deste objeto;
// usando o spread operator e o slice, reordene o objeto por tipo, gasoleo, gasolina, eletrico

const carros = [
    {nome: 'renault clio', tipo: 'gasoleo'},
    {nome: 'peugeot 308', tipo: 'gasolina'},
    {nome: 'renault zoe', tipo: 'eletrico'}
];
// Adicione seat ibiza, tipo: gasoleo no objeto, mantendo o objeto original, ou seja, criando uma cópia segura deste objeto;
const novosCarros = [...carros, {nome: 'seat ibiza', tipo: 'gasoleo'}];
console.log("Carros com seat ibiza adicionado:", novosCarros);
// usando o spread operator e o slice, reordene o objeto por tipo, gasoleo, gasolina, eletrico
const carrosOrdenados = [
    ...novosCarros.slice(0,1),
    ...novosCarros.slice(3,4),
    ...novosCarros.slice(1,3)
];
console.log("Carros ordenados por tipo:", carrosOrdenados);
