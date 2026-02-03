// Copiando elementos de um array para outro usando spread operator

const frutas = ["Maçã", "Banana"];

const novasFrutas = [...frutas, "Pera"];

// console.log(`Frutas: ${frutas}, array original com ${frutas.length} elementos`);
// console.log(`Novas Frutas: ${novasFrutas}, novo array com ${novasFrutas.length} elementos`);

// Podemos ainda escolher onde os nossos elementos serão inseridos:

const novasfrutas2 = ["Mamão", ...novasFrutas];

// console.log(`Novas Frutas 2: ${novasfrutas2}, novo array 2 com ${novasfrutas2.length} elementos`);
// console.log(`Novas Frutas: ${novasFrutas}, novo array 1 com ${novasFrutas.length} elementos`);
// console.log(`Frutas: ${frutas}, array original com ${frutas.length} elementos`);

// const novasFrutas3 = [...frutas.slice(0,1), "Abacaxi", ...frutas.slice(1)];

// console.log("Novas Frutas 3:",novasFrutas3)

// const objetos = ["portátil", "tablet", "rato", "livro", "ovos"];

// const novosElementosNoObjeto = 
// [...objetos.slice(0,3), "teclado", "pilhas", ...objetos.slice(3,4), "folha A4", "caneta", ...objetos.slice(4), "leite"];

// console.log("Novos Elementos:", novosElementosNoObjeto);

// Exercicio: dado o array: [JavaScript, Java, c++, c#];
// 1. Adicione TypeScript na segunda posição do array;
// 2. Adicione C no final do array.



// Copiando um elemento de um objeto para o outro utilizando o spread.

const pessoa = {
    nome: "Rodrigo",
    apelido: "Costa",
    nacionalidade: "brasileira"
};

const novoCadastro = {...pessoa};

// console.log("Original:", pessoa);
// console.log("Cópia:", novoCadastro);

// Adicionando cidade no novo cadastro

const atualizarCadastro = {...novoCadastro, cidade: "Barcelos"};

// console.log("Original:", pessoa);
// console.log("Cópia:", novoCadastro);
// console.log("Cadastro Atualizado:", atualizarCadastro);

// Adicionando distrito antes da cidade e país no final da lista

// const atualizarCadastro2 = 
// {nome: "Rodrigo", apelido: "Costa", nacionalidade: "brasileira", distrito: "Braga", ...atualizarCadastro, país: "Portugal"};

// console.log("Original:", pessoa);
// console.log("Cópia:", novoCadastro);
// console.log("Cadastro Atualizado:", atualizarCadastro);
// console.log("Cadastro Atualizado2:", atualizarCadastro2);




// Exercicio em base do seguinte objeto: 
// {nome: renault clio, tipo: gasoleo, nome: peugeot 308, tipo: gasolina, nome: renault zoe, tipo: eletrico}
// Adicione seat ibiza, tipo: gasoleo no objeto, mantendo o objeto original, ou seja, criando uma cópia segura deste objeto;
// usando o spread operator e o slice, reordene o objeto por tipo, gasoleo, gasolina, eletrico

