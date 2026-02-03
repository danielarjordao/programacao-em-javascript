// Copiando elementos do meu objeto para uma variável utilizando destructuring
const pessoa = {
    nome: "Rodrigo",
    apelido: "Costa",
    nacionalidade: "brasileira"
};

// Processo repetitivo
const nome = pessoa.nome;
const apelido = pessoa.apelido;
const nacionalidade = pessoa.nacionalidade;

// Com Destructuring
// Atenção!
const {nome2, apelido2, nacionalidade2} = pessoa;
const {nome: nome3, apelido: apelido3, nacionalidade: nacionalidade3} = pessoa;

console.log("Tabela 1:");
console.table({ nome, apelido, nacionalidade });

console.log("Tabela 2:");
console.table({ nome2, apelido2, nacionalidade2 });

console.log("Tabela 3:");
console.table({ nome3, apelido3, nacionalidade3 });

// exercicio: Utilize o destructuring para criar um objeto com os seguintes dados:
// carro = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     ano: 2020
// };
// Crie as variáveis marca, modelo e ano a partir do objeto carro e exiba-as no console.


// Copiando meus elementos do array com destructuring

const cores = ["Verde", "Amarelo", "Azul", "Branco"];
const  [primeira, segunda] = cores;
console.log("Primeira: ", primeira)
console.log("Segunda: ", segunda)

// Copiar, ignorando alguns elementos do array

const [, segundo, terceiro] = cores;
console.log("Segundo: ", segundo);
console.log("Terceiro: ", terceiro);

// Também podemos criar um array a partir do array original

const primeiroUniforme = [cores[1], cores[2], cores[3]];
const segundoUniforme = [cores[2], cores[3], cores[2]];
console.log("Uniforme Principal:");
console.table(primeiroUniforme);
console.log("Uniforme Alternativo:")
console.table(segundoUniforme);

// Uma outra forma seria utilizando o rest operator

const [, ...uniformePrincipal] = cores;
const [, , ...uniformeSecundario] = cores;
console.log("Uniforme Principal:");
console.table(uniformePrincipal);
console.log("Uniforme Alternativo:")
console.table(uniformeSecundario);
// exercicio: A partir do array lista de serviços["Desenvolvimento Web", "Design Gráfico", "SEO", "Marketing Digital", "Consultoria"]; 
// copie os tres últimos elementos do array para um novo array chamando ele de marketing utilizando destructuring e o rest operator

// Criar um objeto a partir do destructuring de um array
const [, amarelo, azul, branco] = cores;
const uniforme1 = {
    camisa: amarelo,
    short: azul,
    meias: branco
}

const uniforme2 = {
    camisa: azul,
    short: branco,
    meia: azul,
}

console.log("Uniforme 1:",uniforme1);
console.log("Uniforme 2:", uniforme2);

