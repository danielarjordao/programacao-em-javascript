# Aula 11

## Scope & Closures

## Execução do JavaScript

### Single-thread e Call Stack
- JavaScript é **single-thread**: executa uma coisa de cada vez.
- **Call Stack**: pilha LIFO que controla a ordem de execução das funções.
- Se a pilha crescer demais (ex.: recursão sem base), ocorre **stack overflow**.

### Contexto de Execução
- **Contexto de execução**: ambiente onde o JS sabe quais variáveis existem, quais funções estão disponíveis e qual é o `this`.
- Tipos:
	- **Global Execution Context**: criado ao iniciar o script.
	- **Function Execution Context**: criado a cada chamada de função.
- Apenas um contexto fica ativo por vez (no topo da stack).

### Memory Heap x Call Stack

- **Memory Heap**: região onde objetos e dados dinâmicos são armazenados.
	- Em JavaScript, o **garbage collector** gerencia a memória automaticamente (não é manual).
- **Call Stack**: guarda os contextos de execução e controla a execução das funções.

## Escopo e Scope Chain

- Funções criam novo escopo.
- O JS usa **scope chain** para procurar variáveis de dentro para fora (escopos internos → externos → global).

## Hoisting

- **Hoisting** acontece na fase de criação do contexto de execução.
- **Function declarations** e **`var`** são “içadas” (registradas) antes da execução.
- **`let`** e **`const`** também sofrem hoisting, mas ficam na **TDZ (Temporal Dead Zone)** até a linha de declaração.

### Function Declaration x Function Expression

- **Function Declaration**: `function somar() {}` é registrada como função e pode ser chamada antes da definição no código.
- **Function Expression**: `const somar = (a, b) => a + b` é tratada como valor; só pode ser usada após a declaração.

## Closures

- **Closure**: função que mantém acesso ao escopo externo mesmo após o contexto externo sair da call stack.
- O JS preserva variáveis “vivas” no **memory heap** se ainda houver referência a elas.
- Útil para encapsular estado e evitar variáveis globais.

## `this` e contexto de chamada

- Regra de ouro: **`this` é definido no momento da chamada**, não na definição.
- **Função normal**: em chamada simples, `this` aponta para o objeto global (em modo estrito, é `undefined`).
- **Método de objeto**: `obj.metodo()` faz `this` apontar para `obj`.

## Arrow Functions e contexto léxico

- Arrow functions **não** têm `this` próprio; capturam o `this` do **escopo léxico**.
- Em function expressions tradicionais, o `this` depende de quem chama.

## Conceitos rápidos

- **TDZ**: período entre o início do bloco e a declaração de `let/const`.
- **LIFO**: último a entrar, primeiro a sair (característica da stack).


