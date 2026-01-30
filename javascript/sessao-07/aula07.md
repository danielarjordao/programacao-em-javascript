# Aula 07

## Objetos em JavaScript

Um objeto em JavaScript é uma coleção de propriedades, onde cada propriedade é uma associação entre uma chave (ou nome) e um valor. Objetos são usados para armazenar dados estruturados e representam entidades do mundo real.

### Coleção de Dados

Os objetos permitem agrupar dados relacionados em uma única estrutura. Por exemplo, podemos representar um "carro" com várias propriedades:

```javascript
let carro = {
 marca: "Toyota",
 modelo: "Corolla",
 ano: 2022,
 cor: "Prata"
};
```

### Características Principais

- **Propriedades de diferentes tipos:** Um objeto pode armazenar valores de vários tipos, como strings, números, booleanos, arrays e até outros objetos. Isso permite modelar entidades complexas e organizar informações relacionadas.

- **Acesso e modificação de propriedades:** Podemos acessar e modificar propriedades de um objeto usando a notação de ponto. Também é possível adicionar novas propriedades a qualquer momento, tornando os objetos flexíveis e dinâmicos.

- **Objetos em arrays:** É comum organizar coleções de objetos dentro de arrays, facilitando a manipulação de listas de dados (como catálogos de produtos, usuários, etc.).

- **Iteração sobre arrays de objetos:** Podemos percorrer arrays de objetos com estruturas de repetição para acessar ou exibir informações de cada item individualmente.

- **Objetos e lógica condicional:** Objetos podem ser usados em estruturas condicionais para tomar decisões baseadas em seus valores (por exemplo, verificar se uma pessoa é estudante).

Esses conceitos são fundamentais para trabalhar com dados estruturados em JavaScript e são amplamente utilizados no desenvolvimento de aplicações web e sistemas interativos.

## Funções

Funções são blocos de código reutilizáveis que executam uma tarefa específica. Elas ajudam a organizar o código, tornando-o mais legível e fácil de manter.

### Por que usar funções?

- **Reutilização de código:** Funções permitem que você escreva um bloco de código uma vez e o utilize várias vezes em diferentes partes do programa, evitando duplicação.
- **Divisão de tarefas:** Funções ajudam a dividir o código em partes menores e mais gerenciáveis, facilitando a compreensão e manutenção.
- **Parâmetros e argumentos:** Funções podem receber entradas (parâmetros) e retornar saídas (valores), permitindo a personalização do comportamento da função com base nos dados fornecidos.

### Como utilizar funções?

```javascript
// Definição de uma função
function saudacao(nome) {
  return "Olá, " + nome + "!";
}

// Chamada da função
let mensagem = saudacao("Alice");
console.log(mensagem); // Saída: Olá, Alice!
```

### Características e aprendizados sobre funções

- **Funções com parâmetros e retorno:** Funções podem receber dados de entrada (parâmetros) e retornar valores, tornando o código flexível e reutilizável para diferentes situações.

- **Funções para lógica condicional:** É possível usar funções para encapsular regras de negócio, como verificar permissões de acesso ou o status de um sistema, tornando o código mais organizado e fácil de testar.

- **Manipulação de variáveis globais:** Funções podem alterar variáveis fora de seu escopo, permitindo atualizar estados do programa, como contadores ou placares.

- **Funções matemáticas e de cálculo:** Funções são ideais para realizar operações matemáticas, como soma, subtração, multiplicação, divisão ou cálculos específicos (ex: preço com desconto, quadrado de um número).

- **Funções anônimas e arrow functions:** O JavaScript permite criar funções de diferentes formas, como funções anônimas atribuídas a variáveis e arrow functions, que tornam o código mais conciso e moderno.

- **Funções como argumentos (funções de ordem superior):** É possível passar funções como parâmetros para outras funções, permitindo criar comportamentos dinâmicos e reutilizáveis, como executar diferentes operações sobre um valor.

Esses conceitos tornam as funções ferramentas essenciais para estruturar, organizar e potencializar o desenvolvimento em JavaScript.

### Callbacks

Callbacks são funções que são passadas como argumentos para outras funções e são executadas após a conclusão de uma operação. Elas são amplamente utilizadas em JavaScript para lidar com operações assíncronas, como requisições de rede, timers e eventos.

### Por que usar callbacks?

- **Execução assíncrona:** Callbacks permitem que o código continue executando enquanto aguarda a conclusão de uma operação, evitando bloqueios na execução do programa.
- **Flexibilidade:** Callbacks permitem personalizar o comportamento de uma função, permitindo que diferentes ações sejam executadas após a conclusão de uma tarefa.
- **Organização do código:** Callbacks ajudam a estruturar o código, separando a lógica de execução da lógica de manipulação dos resultados.
