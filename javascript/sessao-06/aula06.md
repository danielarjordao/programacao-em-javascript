# Aula 06

## Lógica e controle de fluxo

### Tipos de condicionais

Em JavaScript, existem várias maneiras de implementar condicionais para controlar o fluxo do programa. As principais estruturas condicionais são:

#### If

A estrutura `if` é usada para executar um bloco de código se uma condição for verdadeira.

- Sintaxe:

  ```javascript
  if (condição) {
  // código a ser executado se a condição for verdadeira
  }
  ```

#### if...else

A estrutura `if...else` é usada para executar um bloco de código se uma condição for verdadeira, e outro bloco se a condição for falsa.

- Sintaxe:

  ```javascript
  if (condição) {
  // código a ser executado se a condição for verdadeira
  } else {
  // código a ser executado se a condição for falsa
  }
  ```

#### if...else if...else

A estrutura `if...else if...else` permite testar múltiplas condições em sequência.

- Sintaxe:

  ```javascript
  if (condição1) {
  // código a ser executado se a condição1 for verdadeira
  } else if (condição2) {
  // código a ser executado se a condição2 for verdadeira
  } else {
  // código a ser executado se nenhuma das condições anteriores for verdadeira
  }
  ```

#### switch

A estrutura `switch` é usada para executar diferentes partes do código com base no valor de uma expressão. O switch é útil quando se tem várias condições baseadas no mesmo valor.

- Sintaxe:

  ```javascript
  switch (expressão) {
  case valor1:
  // código a ser executado se expressão === valor1
  break;
  case valor2:
  // código a ser executado se expressão === valor2
  break;
  ...
  default:
  // código a ser executado se nenhum dos casos anteriores for verdadeiro
  }
  ```

#### Operador ternário

O operador ternário é uma forma concisa de escrever uma declaração `if...else` em uma única linha. O operador ternário tem utilidade para atribuir valores com base em uma condição.

- Sintaxe:

  ```javascript
  condição ? valor_se_verdadeiro : valor_se_falso;
  ```

#### Formas de construção de condições

- Condições simples: Usam operadores de comparação como `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`.
- Condições compostas: Usam operadores lógicos como `&&` (E), `||` (OU), `!` (NÃO) para combinar múltiplas condições.`

### Truthy e Falsy

Em JavaScript, todos os valores possuem um comportamento booleano quando avaliados em uma expressão condicional. Eles podem ser considerados **truthy** (avaliados como verdadeiro) ou **falsy** (avaliados como falso).

#### Valores Falsy

Os principais valores considerados falsy são:

- `false`
- `0` e `-0`
- `""` (string vazia)
- `null`
- `undefined`
- `NaN`

Qualquer valor diferente desses é considerado **truthy**.

#### Sintaxe de uso

```javascript
if ("") {
  console.log("Isso não será executado, pois a string vazia é falsy");
} else {
  console.log("Isso será executado, pois a condição é falsy.");
}
```

### Blocos e escopo

Em JavaScript, blocos de código são definidos por chaves `{}` e são usados para agrupar declarações. O escopo de variáveis declaradas com `let` e `const` é limitado ao bloco em que foram definidas, enquanto variáveis declaradas com `var` têm escopo de função.

## Array

### Introdução aos arrays

Um array é uma estrutura de dados que permite armazenar múltiplos valores em uma única variável. Os arrays em JavaScript são dinâmicos e podem conter elementos de diferentes tipos.

### Sintaxe

Para criar um array, você pode usar a seguinte sintaxe:

```javascript
let nomeDoArray = [elemento1, elemento2, elemento3, ...];
```

### Métodos comuns de arrays

- **push()**
  - O que faz? Adiciona um ou mais elementos ao final do array.
  - Sintaxe: `array.push(elemento1, elemento2, ...)`
  - Exemplo:

    ```javascript
    const numeros = [1, 2];
    numeros.push(3);
    console.log(numeros); // [1, 2, 3]
    numeros.push(4, 5);
    console.log(numeros); // [1, 2, 3, 4, 5]
    ```

- **pop()**
  - O que faz? Remove o último elemento do array e o retorna.
  - Sintaxe: `array.pop()`
  - Exemplo:

    ```javascript
    const letras = ['a', 'b', 'c'];
    const removido = letras.pop();
    console.log(removido); // 'c'
    console.log(letras);   // ['a', 'b']
    ```

- **shift()**
  - O que faz? Remove o primeiro elemento do array e o retorna.
  - Sintaxe: `array.shift()`
  - Exemplo:

    ```javascript
    const fila = [10, 20, 30];
    const primeiro = fila.shift();
    console.log(primeiro); // 10
    console.log(fila);     // [20, 30]
    ```

- **unshift()**
  - O que faz? Adiciona um ou mais elementos ao início do array.
  - Sintaxe: `array.unshift(elemento1, elemento2, ...)`
  - Exemplo:

    ```javascript
    const lista = [2, 3];
    lista.unshift(1);
    console.log(lista); // [1, 2, 3]
    lista.unshift(0, -1);
    console.log(lista); // [0, -1, 1, 2, 3]
    ```

### Inserir e remover elementos no meio do array

Em JavaScript, arrays são estruturas indexadas, onde cada elemento possui uma posição (índice) começando em 0.

Para **inserir** um elemento no meio de um array:

- É necessário deslocar manualmente os elementos à direita para abrir espaço.
- Normalmente, percorremos o array de trás para frente para evitar sobrescrever valores.

Para **remover** um elemento do meio:

- Deslocamos os elementos à esquerda para "tapar o buraco".
- Depois, diminuímos o tamanho do array (por exemplo, usando `pop()` ou ajustando o `length`).

Esses exercícios ajudam a entender como arrays funcionam internamente.

### Outros métodos úteis de array

- `indexOf()`: Procura um valor dentro do array e

  ```javascript
  const frutas = ["maçã", "banana", "uva"];
  console.log(frutas.indexOf("banana")); // 1
  console.log(frutas.indexOf("pera"));   // -1
  // Muito usado para verificar se um valor existe no array:
  if (frutas.indexOf("uva") !== -1) {
    console.log("Uva está no array!");
  }
  ```

- `lastIndexOf()`: Procura o valor da direita para a esquerda, retornando o índice da última ocorrência. Se não encontrar, retorna -1.

  ```javascript
  const numeros = [1, 2, 3, 2, 4];
  console.log(numeros.lastIndexOf(2)); // 3
  ```

- `join()`: Junta todos os elementos do array em uma única string, usando um separador definido.

  ```javascript
  const palavras = ["Olá", "mundo", "JavaScript"];
  const frase = palavras.join(" ");
  console.log(frase); // "Olá mundo JavaScript"
  // Outros exemplos:
  palavras.join(","); // "Olá,mundo,JavaScript"
  palavras.join("-"); // "Olá-mundo-JavaScript"
  palavras.join("");  // "OlámundoJavaScript"
  ```

- `concat()`: Junta dois ou mais arrays, criando um novo array combinado (não altera os originais).

  ```javascript
  const a = [1, 2];
  const b = [3, 4];
  const c = a.concat(b);
  console.log(c); // [1, 2, 3, 4]
  // Também é possível concatenar mais de um array:
  const d = a.concat(b, [5, 6]);
  console.log(d); // [1, 2, 3, 4, 5, 6]
  ```

## Loops (laços de repetição)

### Introdução aos loops

Loops são estruturas de controle que permitem repetir um bloco de código várias vezes enquanto uma condição for verdadeira.

### Controle de ciclos: break e continue

Em loops, podemos usar as instruções `break` e `continue` para controlar o fluxo de execução:

- `break`: Encerra imediatamente o loop mais próximo, mesmo que a condição ainda seja verdadeira.
- `continue`: Interrompe a iteração atual e passa para a próxima iteração do loop.

#### Sintaxe de break

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Sai do loop quando i for 3
  }
  console.log(i);
}
```

#### Sintaxe de continue

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // Pula a iteração quando i for 3
  }
  console.log(i);
}
```

### Tipos de loops

#### for

O loop `for` é usado quando o número de iterações é conhecido.

- Sintaxe:

  ```javascript
  for (inicialização; condição; incremento) {
  // código a ser executado em cada iteração
  }
  ```

#### while

O loop `while` é usado quando o número de iterações é desconhecido e depende de uma condição.

- Sintaxe:

  ```javascript
  while (condição) {
  // código a ser executado em cada iteração
  }
  ```

#### do...while

O loop `do...while` é semelhante ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez.

- Sintaxe:

  ```javascript
  do {
  // código a ser executado em cada iteração
  }
  while (condição);
  ```
