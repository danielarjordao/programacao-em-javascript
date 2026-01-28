let a = 2;
let b = "3";
let soma = a + b; // Aqui ocorre a concatenação, não a soma numérica
console.log("Resultado da soma concatenação:", soma); // Resultado será "23"

// Para garantir a soma numérica, convertemos 'b' para número
let somaNumerica = a + Number(b);
console.log("Resultado da soma numérica:", somaNumerica); // Resultado será 5
