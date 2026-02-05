# Aula 11

## Memória e Armazenamento

### Memória Stack e Heap

- **Stack**: A memória stack é usada para armazenar variáveis locais e chamadas de função. Ela é organizada em uma estrutura de pilha, onde as variáveis são alocadas e desalocadas automaticamente à medida que as funções são chamadas e retornam. A memória stack é rápida, mas tem um tamanho limitado.

- **Heap**: A memória heap é usada para armazenar objetos e dados dinâmicos. Ela é gerenciada manualmente pelo programador, o que significa que você precisa alocar e liberar a memória explicitamente. A memória heap é mais flexível, mas pode ser mais lenta do que a stack devido à necessidade de gerenciamento manual.

### LIFO (Last In, First Out)

A estrutura de dados LIFO é uma forma de organizar os dados onde o último item adicionado é o primeiro a ser removido. Isso é típico da memória stack, onde as variáveis são empilhadas e desempilhadas conforme as funções são chamadas e retornam.

### Thread e Call Stack

- **Thread**: Uma thread é uma unidade de execução dentro de um processo. Em JavaScript, o ambiente de execução é single-threaded, o que significa que ele pode executar apenas uma tarefa por vez. No entanto, JavaScript usa um modelo de concorrência baseado em eventos para lidar com operações assíncronas.

- **Call Stack**: A call stack é uma pilha de chamadas de função. Quando uma função é chamada, ela é adicionada ao topo da call stack. Quando a função retorna, ela é removida da stack. Se a call stack ficar muito grande (por exemplo, devido a chamadas recursivas), pode ocorrer um erro de "stack overflow".

### Contexto de Execução

- **Contexto de Execução**: O contexto de execução é uma estrutura que contém informações sobre o ambiente em que o código está sendo executado. Ele inclui variáveis, objetos e a referência ao objeto global. Cada vez que uma função é chamada, um novo contexto de execução é criado e adicionado à call stack.

- **Global Execution Context**: O contexto de execução global é o primeiro contexto criado quando o código JavaScript começa a ser executado. Ele contém todas as variáveis e funções definidas no escopo global.

- **Function Execution Context**: Cada vez que uma função é chamada, um novo contexto de execução de função é criado. Esse contexto contém as variáveis locais da função, os parâmetros passados para a função e uma referência ao contexto de execução global.

### Conceitos de Memória

- **Token**: Um token é a menor unidade de código que tem significado para o compilador ou interpretador. Em JavaScript, tokens podem ser palavras-chave, identificadores, operadores, literais, etc.

- **Temporal Dead Zone (TDZ)**: A Temporal Dead Zone é o período entre o início do bloco de código e a declaração de uma variável usando `let` ou `const`. Durante esse período, a variável não pode ser acessada, e tentar acessá-la resultará em um erro.

### Arrow Functions e Contexto Léxico

- **Arrow Functions**: As arrow functions são funções anônimas introduzidas no ES6 que possuem uma sintaxe mais curta. Elas não têm seu próprio `this`, `arguments`, `super` ou `new.target`. Em vez disso, elas capturam o valor de `this` do contexto léxico em que foram definidas.

- **Contexto Léxico**: O contexto léxico é o contexto em que uma função é definida, e não onde ela é chamada. Isso significa que o valor de `this` em uma arrow function é determinado pelo contexto em que a função foi criada, e não pelo contexto em que ela é executada.

#### Diferença entre Arrow Function e Function Expression

No contexto de funções tradicionais (Function Expression), o valor de `this` é dinâmico e depende de como a função é chamada. Já nas Arrow Functions, o valor de `this` é léxico, ou seja, ele é fixo e determinado pelo contexto onde a função foi definida.

### Closures

- **Closure**: Uma closure é uma função que tem acesso às variáveis do seu escopo externo, mesmo depois que a função externa tenha sido executada. Isso permite que a função interna "lembre" do ambiente em que foi criada, o que é útil para criar funções com estado ou para encapsular dados.


