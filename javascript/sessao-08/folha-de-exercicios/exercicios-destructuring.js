// exercicio: Utilize o destructuring para criar um objeto com os seguintes dados:
// carro = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     ano: 2020
// };
// Crie as variáveis marca, modelo e ano a partir do objeto carro e exiba-as no console.

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};

const {marca, modelo, ano} = carro;

console.log("Carro:");
console.table({marca, modelo, ano});


// exercicio: A partir do array lista de serviços["Desenvolvimento Web", "Design Gráfico", "SEO", "Marketing Digital", "Consultoria"]; 
// copie os tres últimos elementos do array para um novo array chamando ele de marketing utilizando destructuring e o rest operator:

servicos = ["Desenvolvimento Web", "Design Gráfico", "SEO", "Marketing Digital", "Consultoria"]
const [, , ...marketing] = servicos;

console.log("Serviços da nossa agência de Marketing: ", marketing);