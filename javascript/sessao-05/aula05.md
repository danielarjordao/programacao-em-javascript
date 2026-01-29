# Aula 05

## JavaScript

JavaScript é uma linguagem de programação interpretada, leve e dinâmica, amplamente utilizada para desenvolvimento web. Ela permite a criação de páginas web interativas e dinâmicas, além de ser usada em servidores, aplicativos móveis e muito mais.

### Para que serve o JavaScript?

JavaScript é usado principalmente para:

- **Interatividade em Páginas Web**: Adicionar elementos interativos, como formulários, animações, e efeitos visuais.
- **Manipulação do DOM**: Alterar o conteúdo e a estrutura das páginas web em tempo real.
- **Validação de Formulários**: Verificar dados inseridos pelos usuários antes de enviá-los ao servidor.
- **Desenvolvimento de Aplicações Web**: Criar aplicações completas usando frameworks como React, Angular e Vue.js.
- **Desenvolvimento de Servidores**: Utilizar Node.js para construir servidores e APIs.
- **Desenvolvimento de Aplicativos Móveis**: Criar aplicativos móveis com frameworks como React Native e Ionic.

### Papel do navegador

O JavaScript é executado principalmente em navegadores web, que atuam como interpretadores da linguagem. Cada navegador possui um motor JavaScript que interpreta e executa o código, permitindo que os desenvolvedores criem experiências ricas e interativas para os usuários. Os motores fazem a comunicação entre o JavaScript e o HTML/CSS, possibilitando a manipulação do DOM e a resposta a eventos do usuário.

#### Console do navegador

O console do navegador é uma ferramenta essencial para testar pequenos trechos de código, depurar, ver resultados e mensagens de erro. Para abrir, pressione F12 ou clique com o botão direito na página e selecione "Inspecionar" > aba Console. Exemplo:

```javascript
console.log('Olá, mundo!');
```

O comando acima exibe a mensagem no console.

### Execução sequencial do código

O JavaScript executa o código de cima para baixo, linha a linha. A ordem das instruções afeta o resultado do programa.

```javascript
let a = 5;
let b = 10;
console.log(soma); // Erro: soma não definida
let soma = a + b;
console.log(soma); // Exibe 15
```

### Variáveis

JavaScript é uma linguagem baseada em valores, o que significa que tudo em JavaScript é representado por valores. Esses valores podem ser de diferentes tipos, como números, strings, booleanos, objetos, arrays, entre outros. Os valores são armazenados em variáveis e podem ser manipulados através de operações e funções. Elas podem ser declaradas usando as palavras-chave `let`, `const` ou `var`. A escolha entre essas palavras-chave depende do escopo e da mutabilidade desejada para a variável.

- **let**: Declara uma variável com escopo de bloco, que pode ser reatribuída.
- **const**: Declara uma variável constante, que não pode ser reatribuída.
- **var**: Declara uma variável global, que pode ser reatribuída.

#### Tipos de dados primitivos

Os tipos de dados primitivos em JavaScript incluem:

- **Number**: Representa números, tanto inteiros quanto de ponto flutuante. Exemplo: `42`, `3.14`.
- **String**: Representa sequências de caracteres. Exemplo: `"Olá, mundo!"`.
- **Boolean**: Representa valores lógicos, podendo ser `true` ou `false`.
- **Undefined**: Representa uma variável que foi declarada, mas não inicializada
- **Null**: Representa a ausência intencional de qualquer valor.

#### Tipos por referência

Os tipos por referência em JavaScript incluem:

- **Object**: Estruturas de dados que armazenam coleções de pares chave-valor. Exemplo: `{ nome: "João", idade: 30 }`.
- **Array**: Estruturas de dados que armazenam listas ordenadas de valores. Exemplo: `[1, 2, 3, 4, 5]`.
- **Function**: Blocos de código reutilizáveis que podem ser chamados com argumentos para executar uma tarefa específica. Exemplo: `function soma(a, b) { return a + b; }`.

> **Atenção:** Objetos, arrays e funções não guardam o valor diretamente na variável, mas sim uma referência na memória. Isso significa que, ao atribuir um objeto ou array a outra variável, ambas passam a apontar para o mesmo local na memória. Alterações feitas por uma variável afetam a outra, pois compartilham a mesma referência.

// Exemplo prático de referência compartilhada:

```javascript
let a = { valor: 10 };
let b = a;
b.valor = 20;
console.log(a.valor); // 20
```

Ambas as variáveis apontam para o mesmo objeto na memória.

#### Temporal Dead Zone (TDZ)

A Temporal Dead Zone (TDZ) é um comportamento em JavaScript que ocorre quando se tenta acessar uma variável declarada com `let` ou `const` antes de sua inicialização. Durante o período entre a declaração da variável e sua inicialização, a variável está em um estado de "zona morta", e qualquer tentativa de acessá-la resultará em um erro de referência (`ReferenceError`).

### Operadores

JavaScript suporta vários tipos de operadores, que são usados para realizar operações em valores e variáveis. Os principais tipos de operadores incluem:

- **Operadores Aritméticos**: Realizam operações matemáticas básicas como adição, subtração, multiplicação, divisão, etc.

  ```javascript
  let a = 10;
  let b = 5;
  let soma = a + b; // Adição
  let subtracao = a - b; // Subtração
  let multiplicacao = a * b; // Multiplicação
  let divisao = a / b; // Divisão
  let resto = a % b; // Resto da divisão
  ```

- **Operadores de Atribuição**: Atribuem valores a variáveis.

  ```javascript
  let x = 10; // Atribuição simples
  x += 5; // Atribuição com adição (equivalente a x = x + 5)
  x -= 3; // Atribuição com subtração
  ```

- **Operadores de Comparação**: Comparam dois valores e retornam um valor booleano (`true` ou `false`).

  ```javascript
  let igual = (a == b); // Igualdade
  let estritamenteIgual = (a === b); // Estrita igualdade
  let diferente = (a != b); // Desigualdade
  let maiorQue = (a > b); // Maior que
  ```

  - Diferença de `==` e `===`: O operador `==` compara valores após realizar coerção de tipo, enquanto o `===` compara tanto valor quanto tipo, sem coerção.

- **Operadores Lógicos**: Combinam expressões booleanas.

  ```javascript
  let e = (a > 5 && b < 10); // Operador AND
  let ou = (a > 5 || b < 3); // Operador OR
  let nao = !(a > b); // Operador NOT
  ```

#### Coerção de tipos

A coerção de tipos em JavaScript é o processo pelo qual a linguagem converte automaticamente um valor de um tipo para outro quando necessário. Isso pode ocorrer em operações que envolvem diferentes tipos de dados, como ao usar operadores aritméticos ou de comparação. Por exemplo, ao somar um número e uma string, o JavaScript converte o número em string e realiza a concatenação.

```javascript
let a = 2;
let b = "3";
let soma = a + b; // Aqui ocorre a concatenação, não a soma numérica
console.log(soma); // Resultado será "23"
```

#### Ordem de precedência dos operadores

A ordem de precedência dos operadores em JavaScript determina a sequência em que as operações são avaliadas em uma expressão. Operadores com maior precedência são avaliados antes daqueles com menor precedência. Aqui está uma lista simplificada da ordem de precedência dos operadores, do mais alto para o mais baixo:

- **Parênteses**: ()

- **Exponenciação**: **

- **Multiplicação e Divisão**: *, /, %

- **Adição e Subtração**: +, -

- **Operadores de Comparação**: <, <=, >, >=, ==, !=, ===, !==

- **Operadores Lógicos**: &&, ||, !

- **Operadores de Atribuição**: =, +=, -=, *=, /=, %=, **=, etc.

#### Operador NOT (!)

O operador NOT (`!`) é um operador lógico unário em JavaScript que inverte o valor booleano de uma expressão. Se a expressão for `true`, o operador NOT a transforma em `false`, e vice-versa. É frequentemente usado para negar condições em estruturas de controle, como `if` statements.

#### Comparaçoes e Coerção de tipos

O operador de comparação `==` em JavaScript realiza coerção de tipos, o que significa que ele tenta converter os valores comparados para um tipo comum antes de fazer a comparação. Isso pode levar a resultados inesperados se os tipos dos valores forem diferentes. Por exemplo:

```javascript
console.log(5 == '5'); // true, porque a string '5' é convertida para o número 5
console.log(0 == false); // true, porque false é convertido para o número 0
console.log(null == undefined); // true, porque ambos são considerados iguais em coerção
```

- Para evitar problemas relacionados à coerção de tipos, é recomendado usar o operador de comparação estrita `===`, que compara tanto o valor quanto o tipo dos operandos, sem realizar coerção.

### Síntese

- O JavaScript é executado no navegador e em servidores.
- O código é lido de cima para baixo.
- Variáveis podem ser declaradas com let, const ou var.
- Tipos primitivos e por referência têm comportamentos diferentes.
- Operadores permitem manipular valores e tomar decisões.
- Comparações podem envolver coerção de tipos; prefira === para evitar surpresas.
