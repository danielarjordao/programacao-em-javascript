/*
Exercício 1: Avaliação de Expressões e Coerção

Dado o código abaixo:

Responda:
1. Qual o valor final e o tipo de dado da variável operacaoA?
2. Qual o valor final e o tipo de dado da variável operacaoB?
3. Explique a ordem de precedência e o resultado final de operacaoC.
*/

let val1 = "10";
let val2 = 2;
let val3 = "5";

let operacaoA = val1 * val2;
let operacaoB = val1 + val2;
let operacaoC = val1 + val2 * val3;

console.log("Operação A:", operacaoA);
console.log("Operação B:", operacaoB);
console.log("Operação C:", operacaoC);

/*
Respostas:

1. Operação A: 20 (number) - A multiplicação entre uma string que representa um número
e um número resulta na conversão da string para número, e a operação é realizada normalmente.

2. Operação B: "102" (string) - A adição entre uma string e um número resulta na
coerção do número para string, e a operação é uma concatenação.

3. Operação C: "1010" (string) - A ordem de precedência das operações indica que a multiplicação
é realizada antes da adição. Portanto, val2 * val3 é calculado primeiro, resultando em 10.
Depois, val1 + 10 é realizado, onde val1 é uma string, então o número 10 é convertido para
string e ocorre a concatenação, resultando em "1010".
*/

/*
Exercício 2: Escopo e Temporal Dead Zone (TDZ)

Dado o código abaixo:

Responda:
1. O que será impresso no primeiro console.log? Justifica com base no conceito de Hoisting.
2. O que acontecerá na execução do segundo console.log? Explique o estado da variável
pontuacao nesse momento.
*/

console.log(status);
var status = "Ativo";

// console.log(pontuacao);
let pontuacao = 100;

/*
Respostas:

1. O primeiro console.log imprimirá 'undefined'. Isso ocorre porque a variável 'status' é
declarada com 'var', que sofre hoisting. Durante o hoisting, a declaração da variável é
movida para o topo do escopo, mas sua atribuição permanece no lugar original. Portanto,
no momento do console.log, 'status' existe, mas ainda não foi atribuído um valor.

2. O segundo console.log resultará em um erro de referência (ReferenceError). Isso acontece
porque a variável 'pontuacao' é declarada com 'let', que não sofre hoisting da mesma forma
que 'var'. A variável 'pontuacao' está na Temporal Dead Zone (TDZ) até que sua declaração
seja alcançada no código. Tentar acessá-la antes da declaração resulta em um erro.
*/


/*
Exercício 3: Comparação de Tipos e Referência

Dado o código abaixo:

Responda:
1. Qual o valor booleano de check1?
2. Qual o valor booleano de check2? Justifica com base na diferença entre igualdade ampla e
estrita.
*/

let arr = [1, 2];
let str = "1,2";
let obj = { a: 1 }

let check1 = (arr == str);
let check2 = (arr === obj);

console.log("Check 1:", check1);
console.log("Check 2:", check2);

/*
Respostas:

1. Check 1: true - A comparação ampla (==) realiza coerção de tipos. O array 'arr' é convertido
para a string "1,2" quando comparado com 'str', resultando em igualdade.

2. Check 2: false - A comparação estrita (===) não realiza coerção de tipos e compara tanto o
valor quanto o tipo. 'arr' é um array e 'obj' é um objeto, então eles são de tipos diferentes,
resultando em desigualdade.
*/

/*
Exercício 4: Operadores Lógicos e Truthy/Falsy

Dado o código abaixo:

Responda:
1. Qual o resultado booleano da variável validacao?
*/

let login = "";
let tentativas = 0;
let validacao = (login == tentativas);

console.log("Validação:", validacao);

/*
Respostas:

1. Resultado booleano da variável 'validacao': false - A variável 'login' é uma string vazia,
que é considerada falsy, enquanto 'tentativas' é o número 0, que também é falsy. No entanto,
na comparação ampla (==), uma string vazia não é igual a 0, resultando em false.
*/

/*
Exercício 5: Coerção em Operações Aritméticas Inválidas

Dado o código abaixo:

Responda:
1. Qual o valor atribuído à variável dado?
2. Qual o valor da variável tipo?
*/

let dado = "JS2024" - 10;
let tipo = typeof dado;
let verificado = (dado === dado);

console.log("Dado:", dado);
console.log("Tipo:", tipo);
console.log("Verificado:", verificado);

/*
Respostas:

1. Valor atribuído à variável 'dado': NaN (Not a Number) - A operação de subtração entre
uma string que não representa um número ("JS2024") e um número (10) resulta em NaN, pois
a coerção não pode converter a string em um número válido para a operação.

2. Valor da variável 'tipo': "number" - Mesmo que o valor de 'dado' seja NaN, o tipo de
NaN é considerado 'number' em JavaScript.
*/
