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

- `push()`: Adiciona um ou mais elementos ao final do array.
- `pop()`: Remove o último elemento do array.
- `shift()`: Remove o primeiro elemento do array.
- `unshift()`: Adiciona um ou mais elementos ao início do array.

## Loops (laços de repetição)

### Introdução aos loops

Loops são estruturas de controle que permitem repetir um bloco de código várias vezes enquanto uma condição for verdadeira.

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
