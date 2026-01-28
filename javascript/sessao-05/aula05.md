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

#### Temporal Dead Zone (TDZ)

A Temporal Dead Zone (TDZ) é um comportamento em JavaScript que ocorre quando se tenta acessar uma variável declarada com `let` ou `const` antes de sua inicialização. Durante o período entre a declaração da variável e sua inicialização, a variável está em um estado de "zona morta", e qualquer tentativa de acessá-la resultará em um erro de referência (`ReferenceError`).
