# Aula 08

## Funções de Alta Ordem

### O que é uma Função de Alta Ordem?

Uma função de alta ordem (High Order Function - HOF) é uma função que opera sobre outras funções, seja recebendo-as como argumentos ou retornando-as como resultado.

Para ser considerada uma função de alta ordem, ela deve fazer pelo menos uma das seguintes coisas:

- **Receber uma função como argumento** (frequentemente chamada de "callback");
- **Retornar uma função**.

### Exemplos de Funções de Alta Ordem

#### 1. Recebendo uma função como argumento

O método `.map()` é um exemplo clássico. Ele recebe uma função que define como transformar cada item de um array.

```javascript
const numeros = [1, 2, 3, 4];
const dobrar = (n) => n * 2;

// map é a função de alta ordem aqui
const dobrados = numeros.map(dobrar);
console.log(dobrados); // [2, 4, 6, 8]
```

#### 2. Retornando uma função

Isso é útil para criar configurações ou "fábricas" de funções.

```javascript
function criarMultiplicador(multiplicador) {
  // Retorna uma nova função anônima
  return function (numero) {
    // Esta função interna "lembra" do valor de 'multiplicador' (Closure)
    return numero * multiplicador;
  };
}

// Criamos uma função específica que multiplica por 2
const duplicar = criarMultiplicador(2);
console.log(duplicar(5)); // 10
```

### Funções Anónimas e Currying

A grande vantagem de usar funções anónimas é poder criar funções especialistas a partir de uma função genérica. O termo técnico disso é **currying** ou **aplicação parcial**.

Para os métodos de arrays, é crucial usar essas HOF/funções anónimas, pois esses métodos aceitam funções que recebem apenas um argumento: o item da lista. Se você quiser passar diretamente uma função `multiplicacao(a, b)`, você não consegue passá-la diretamente.

## Métodos do Array

### Definição

Métodos de array são funções internas (built-in) que já vêm "embutidas" em todos os Arrays no JavaScript.

- **Propósito:** Realizar operações comuns — como adicionar, remover, transformar ou filtrar dados — sem que o programador tenha de reconstruir a lógica do zero;
- **Sintaxe:** Acedido através da notação de ponto (ex: `meuArray.metodo()`);
- **Conexão com HOFs:** Muitos destes métodos são Funções de Alta Ordem, pois permitem passar uma função personalizada para decidir como os dados devem ser processados.

### Parâmetros dos Métodos

A maioria dos métodos de array funciona de forma semelhante. Não é obrigatório declarar os 3 parâmetros — você só precisa declarar aqueles que realmente vai usar.

**Para `forEach`, `map`, `filter`, `find`, `some` e `every`:**

O JavaScript sempre tenta entregar os 3 dados, mas a sua função só "pega" o que ela pedir nos argumentos. A ordem é fixa:

- Se você colocar **1 argumento** (item): Recebe apenas o elemento.
- Se você colocar **2 argumentos** (item, i): O primeiro é o elemento, o segundo é o índice.
- Se você colocar **3 argumentos** (item, i, array): Recebe tudo — elemento, índice e o array completo.

**Para `reduce` (diferente!):**

O reduce tem uma sintaxe própria porque trabalha com um acumulador. Falaremos sobre isto em detalhe na sua seção específica.

### forEach - Para "fazer algo" com cada item

**O que faz?** Executa uma função para cada item do array, percorrendo do primeiro até ao último. É ideal para realizar uma ação com cada elemento.

**Retorna algo?** Não, ele sempre retorna `undefined`. O forEach é executado apenas pelos seus efeitos colaterais (ações), não para gerar novos dados.

**Quando usar?** Quando você quer executar uma ação para cada item (como imprimir, guardar em base de dados, atualizar um contador), mas não precisa de um novo array como resultado. É o substituto moderno do loop `for`.

```javascript
const nomes = ['Ana', 'Bia', 'Carlos'];

// Exemplo 1: Apenas com o item
nomes.forEach(nome => {
  console.log(`Olá, ${nome}!`);
});
// Saída:
// "Olá, Ana!"
// "Olá, Bia!"
// "Olá, Carlos!"

// Exemplo 2: Com item e índice
nomes.forEach((nome, indice) => {
  console.log(`${indice + 1}. ${nome}`);
});
// Saída:
// "1. Ana"
// "2. Bia"
// "3. Carlos"
```

### map - Para "transformar" cada item

**O que faz?** Cria um novo array aplicando uma função de transformação a cada item do array original.

**Retorna algo?** Sim, um novo array do mesmo tamanho do original.

**Quando usar?** Quando você precisa de uma nova lista baseada na original, mas com os dados modificados.

```javascript
const numeros = [1, 2, 3, 4];

// Transformação: Dobrar cada número
const numerosDobrados = numeros.map(numero => numero * 2);

console.log(numerosDobrados); // [2, 4, 6, 8]
console.log(numeros);         // [1, 2, 3, 4] (o original não muda!)
```

### filter - Para "selecionar" itens

**O que faz?** Cria um novo array contendo apenas os itens que passam em um teste (ou seja, para os quais sua função retorna true).

**Retorna algo?** Sim, um novo array com os itens que passaram no teste (pode ser menor que o original).

**Quando usar?** Para filtrar uma lista e obter apenas os dados que te interessam.

```javascript
const idades = [15, 21, 30, 17, 18];

// Teste: A idade é maior ou igual a 18?
const maioresDeIdade = idades.filter(idade => idade >= 18);

console.log(maioresDeIdade); // [21, 30, 18]
```

### find - Para "encontrar" o primeiro item

**O que faz?** Percorre o array e retorna o primeiro item que satisfaz a condição. Assim que encontra, ele para.

**Retorna algo?** O próprio item (não um array). Se ninguém passar no teste, retorna `undefined`.

**Quando usar?** Para buscar um elemento específico em uma lista.

```javascript
const produtos = [
  { id: 1, nome: 'Notebook' },
  { id: 2, nome: 'Mouse' },
  { id: 3, nome: 'Teclado' }
];

// Condição: O id do produto é igual a 2?
const produtoEncontrado = produtos.find(produto => produto.id === 2);

console.log(produtoEncontrado); // { id: 2, nome: 'Mouse' }
```

### some - Para verificar se existe pelo menos um

**O que faz?** Verifica se pelo menos um item da lista obedece à regra que você criou.

**Retorna algo?** Um booleano: `true` se encontrar um item que passa no teste, `false` caso contrário.

**Comportamento:** Assim que ele encontra um item que passa no teste, ele para de procurar e retorna `true`. Se ele percorrer a lista toda e ninguém passar, retorna `false`.

**Quando usar?** Para verificar se existe ao menos um elemento que atenda a uma condição.

```javascript
const numeros = [1, 3, 5, 7, 8, 9];

// Existe algum número que seja par?
const temNumeroPar = numeros.some(numero => numero % 2 === 0);

console.log(temNumeroPar); // true (porque encontrou o 8)
```

### every - Para verificar se todos passam

**O que faz?** Verifica se todos os itens da lista obedecem à regra.

**Retorna algo?** Um booleano: `true` se todos os itens passarem no teste, `false` caso contrário.

**Comportamento:** Se ele encontrar um único item que falhe no teste, ele para imediatamente e retorna `false`. Só retorna `true` se absolutamente todos passarem.

**Quando usar?** Para validar que todos os elementos atendem a uma condição.

```javascript
const notas = [8, 7, 9, 10, 5.5];

// Todas as notas são maiores ou iguais a 6?
const turmaAprovada = notas.every(nota => nota >= 6);

console.log(turmaAprovada); // false (porque o 5.5 falhou)
```

## Introdução ao Reduce

### O que é Reduce?

O `reduce()` é frequentemente considerado o "canivete suíço" dos métodos de array em JavaScript. Ele é o mais poderoso (e complexo) porque, ao contrário do `map` ou `filter`, ele não retorna necessariamente um array; ele pode retornar um único valor de qualquer tipo (um número, uma string, um objeto ou até um novo array). O objetivo do reduce é reduzir uma coleção de valores a um único resultado, através de uma função acumuladora.

### Sintaxe Básica

Os dois principais parâmetros do reduce são:

- **Acumulador (acc):** Onde o valor vai sendo "guardado" de volta em cada volta;
- **Valor atual (cur):** O item que está a ser processado no momento;
- **Índice e Array:** Completam a lista, mas são opcionais.

### Exemplo Prático

Exemplo com soma de números:

```javascript
const precos = [10.50, 20.00, 5.00];

// Redução: Somar todos os preços
// O '0' é o valor inicial do acumulador
const total = precos.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

console.log(total); // 35.5
```

**Como funciona passo a passo:**

1. total = 0, n = 1 → total = 1;
2. total = 1, n = 2 → total = 3;
3. total = 3, n = 3 → total = 6;
4. total = 6, n = 4 → total = 10.

O `return` se torna o novo valor do acumulador, e o `valorAtual` é o valor de cada index do array que você vai percorrendo.

### Reduce não é só para Somar

O reduce possui outros usos além de somar, como:

- Contar elementos;
- Calcular médias;
- Concatenar strings;
- Agrupar dados.

## Imutabilidade

### O que é Imutabilidade?

A imutabilidade refere-se à característica de valores que não podem ser alterados após a sua criação. O princípio da imutabilidade tem como objetivo:

- Não alterar o dado original;
- Criar novos dados a partir dos existentes.

### O Problema de Alterar Dados

Em JavaScript, arrays e objetos são referências. Alterá-los diretamente afeta todas as referências e cria efeitos colaterais, resultando em bugs difíceis de resolver.

Isto é um problema porque:

- Dados partilhados mudam sem aviso;
- Funções deixam de ser previsíveis;
- Dificulta o debug.

### Métodos Imutáveis vs Mutáveis

**Métodos seguros (imutáveis):**

- `map`
- `filter`
- `reduce`
- `concat`

**Métodos não seguros (mutáveis):**

- `push`
- `pop`
- `shift`
- `splice`
- `sort`

### Imutabilidade e Previsibilidade - Funções Puras

Uma **Função Pura** é o pilar central da imutabilidade e da programação funcional. Em termos simples, é uma função "previsível": ela sempre produzirá o mesmo resultado para os mesmos argumentos e não causará nenhuma alteração no mundo exterior.

Para ser considerada pura, uma função deve cumprir dois requisitos rigorosos:

1. **Determinismo (Previsibilidade Total):** A função sempre retorna o mesmo resultado para os mesmos argumentos;
2. **Ausência de Efeitos Secundários (Side Effects):** A função não modifica dados fora do seu escopo.

## Spread e Rest Operators

### Spread Operator - Definição

O **Spread Operator** (Operador de Espalhamento) é representado por três pontos consecutivos `...` e serve para "desempacotar" ou espalhar os elementos de um iterável (como um Array ou um Objeto) dentro de outro lugar. É uma ferramenta técnica que permite a cópia e fusão de dados de forma elegante e imutável.

### Spread Operator em Arrays

**Juntar arrays:**

```javascript
const pares = [2, 4, 6];
const impares = [1, 3, 5];

// Espalha os itens dos dois arrays dentro de um novo
const todos = [...pares, ...impares];
console.log(todos); // [2, 4, 6, 1, 3, 5]
```

**Passar argumentos para funções:**

```javascript
const numeros = [1, 2, 3];

// Sem spread (ruim/erro):
// somar(numeros) -> o 'a' vira o array inteiro, 'b' e 'c' ficam undefined

// Com spread (bom):
somar(...numeros); // É igual a escrever somar(1, 2, 3)
```

### Spread Operator em Objetos

```javascript
const pessoa = { nome: 'Ana', idade: 30 };
const trabalho = { empresa: 'Tech Inc', cargo: 'Dev' };

// Combinar propriedades de dois objetos
const perfil = { ...pessoa, ...trabalho };
console.log(perfil);
// { nome: 'Ana', idade: 30, empresa: 'Tech Inc', cargo: 'Dev' }
```

### Rest Operator - Definição

O **Rest Operator** faz o oposto do spread. Ele pega vários itens soltos e os agrupa dentro de um array.

**Quando acontece:** Quando usado na definição de funções ou em desestruturação.

### Rest Operator em Funções

**Funções com infinitos argumentos:**

```javascript
// O ...numeros aqui diz: "Pegue todos os argumentos que me passarem e jogue num array chamado numeros"
function somarTudo(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}

somarTudo(10, 20, 30, 40); // Funciona! O 'numeros' vira [10, 20, 30, 40]
```

### Rest Operator em Desestruturação

**Pegar 'o resto':**

```javascript
const frutas = ['Maçã', 'Banana', 'Uva', 'Pera'];

// Pega o primeiro item e agrupa o resto em 'outras'
const [primeira, ...outras] = frutas;

console.log(primeira); // 'Maçã'
console.log(outras);   // ['Banana', 'Uva', 'Pera']
```

## Destructuring (Desestruturação)

### O que é Destructuring?

O **Destructuring** (Desestruturação) é uma funcionalidade introduzida no ES6 que permite "extrair" dados de dentro de arrays ou propriedades de objetos e atribuí-los a variáveis individuais de uma forma muito mais limpa e rápida.

Pense na desestruturação como uma forma elegante de "desempacotar" valores de arrays ou propriedades de objetos e colocá-los diretamente em variáveis. É uma maneira de extrair apenas o que você precisa de uma estrutura de dados complexa, de forma limpa e legível.

### Destructuring em Objetos

Essa é a mais comum. Usamos chaves `{}` para extrair propriedades de um objeto pelo nome.

**Exemplo sem desestruturação (o jeito antigo):**

```javascript
const usuario = {
  id: 42,
  nome: 'Ana',
  email: 'ana@exemplo.com'
};

const nomeDoUsuario = usuario.nome;
const emailDoUsuario = usuario.email;

console.log(nomeDoUsuario); // 'Ana'
console.log(emailDoUsuario); // 'ana@exemplo.com'
```

**Exemplo com desestruturação:**

```javascript
const usuario = {
  id: 42,
  nome: 'Ana',
  email: 'ana@exemplo.com'
};

// "Do objeto 'usuario', me dê as propriedades 'nome' e 'email'"
const { nome, email } = usuario;

console.log(nome);  // 'Ana'
console.log(email); // 'ana@exemplo.com'
```

**Vantagens:**

- **Renomear variáveis:** Se você já tiver uma variável nome, você pode renomear na hora.

```javascript
const { nome: nomeCompleto, email } = usuario;
console.log(nomeCompleto); // 'Ana'
```

- **Valores padrão:** Se a propriedade não existir, você pode definir um valor padrão.

```javascript
const { nome, pais = 'Brasil' } = usuario;
console.log(pais); // 'Brasil' (porque não existia no objeto)
```

### Destructuring em Arrays

Aqui, você usa colchetes `[]` para extrair valores de um array pela posição.

**Exemplo sem desestruturação:**

```javascript
const cores = ['vermelho', 'verde', 'azul'];

const primeiraCor = cores[0];
const segundaCor = cores[1];

console.log(primeiraCor); // 'vermelho'
```

**Exemplo com desestruturação:**

```javascript
const cores = ['vermelho', 'verde', 'azul'];

// "Me dê o primeiro e o segundo item do array 'cores'"
const [primeira, segunda] = cores;

console.log(primeira); // 'vermelho'
console.log(segunda);  // 'verde'
```

**Vantagens:**

- **Pular itens:** Se você não quiser um item, basta deixar um espaço vazio com uma vírgula.

```javascript
const [primeira, , terceira] = cores;
console.log(terceira); // 'azul'
```

- **Pegar o resto (Rest Operator):** Você pode pegar os itens restantes e agrupá-los em um novo array.

```javascript
const numeros = [10, 20, 30, 40, 50];
const [primeiro, segundo, ...resto] = numeros;

console.log(primeiro); // 10
console.log(segundo);  // 20
console.log(resto);    // [30, 40, 50]
```

### Destructuring em Parâmetros de Função

A desestruturação brilha ao lidar com parâmetros de funções. Em vez de receber um objeto inteiro e ficar acessando suas propriedades, você pode desestruturá-lo diretamente na assinatura da função.

**Antes:**

```javascript
function saudacao(usuario) {
  console.log(`Olá, ${usuario.nome}!`);
}
```

**Depois (muito mais claro!):**

```javascript
function saudacao({ nome }) {
  console.log(`Olá, ${nome}!`);
}

saudacao({ nome: 'Carlos', idade: 30 }); // "Olá, Carlos!"
```
