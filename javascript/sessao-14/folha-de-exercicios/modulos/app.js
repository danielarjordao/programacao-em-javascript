// Importação nomeada de módulo
import { somar } from "./utils.js";
// Importação default de módulo
import multiplicar from "./calculadora.js";

// Uso das funções importadas
const soma = somar(2, 3);
const produto = multiplicar(4, 5);

console.log("Soma:", soma);
console.log("Produto:", produto);
