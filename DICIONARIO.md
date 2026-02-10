# Dicionário - Programação em JavaScript

Síntese de conceitos e métodos essenciais abordados no curso.

## Módulo 1 - Fundamentos Web

### Terminal

**Comandos básicos**
- `pwd`: mostra o caminho atual
- `ls` ou `dir`: lista arquivos e pastas
- `cd <pasta>`: entra em uma pasta
- `mkdir nome`: cria pasta
- `touch nome`: cria arquivo
- `clear` ou `cls`: limpa terminal

### Git

**Conceitos principais**
- **Git**: sistema de controle de versão local
- **GitHub**: plataforma online para repositories
- **Commit**: salva uma versão do projeto
- **Branch**: ramificação do projeto
- **Repository**: pasta monitorada pelo Git

**Comandos essenciais**
- `git init`: iniciar versionamento
- `git status`: ver mudanças
- `git add .`: preparar arquivos
- `git commit -m "msg"`: salvar versão
- `git push`: enviar para GitHub
- `git pull`: trazer do GitHub
- `git branch`: listar ramificações
- `git checkout -b nome`: criar nova branch

### HTML5 Semântico

**Estrutura básica**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título</title>
</head>
<body>
  <!-- Conteúdo -->
</body>
</html>
```

**Tags semânticas**
- `<header>`: cabeçalho
- `<nav>`: navegação
- `<main>`: conteúdo principal
- `<section>`: seção genérica
- `<article>`: conteúdo independente
- `<aside>`: conteúdo complementar
- `<footer>`: rodapé
- `<figure>` + `<figcaption>`: mensagem com legenda

**Elementos de texto**
- `<h1>` a `<h6>`: títulos
- `<p>`: parágrafo
- `<strong>`: ênfase forte (negrito)
- `<em>`: ênfase (itálico)
- `<a>`: hiperlink
- `<ul>`, `<ol>`, `<li>`: listas

**Formulários**
- `<form>`: formulário
- `<label>`: rótulo
- `<input>`: campo de entrada
- `<button>`: botão

**Tipos de input**
- `text`: texto simples
- `email`: email
- `password`: senha
- `date`: data
- `checkbox`: caixa de seleção
- `radio`: opção única
- `submit`: enviar formulário
- `file`: upload de arquivo

### CSS3

**Especificidade**
- Elemento: 1pt
- Classe/atributo: 10pts
- ID: 100pts
- `!important`: máxima prioridade

**Box Model**
```css
.box {
  content: ...
  padding: ... /* interno */
  border: ...
  margin: ... /* externo */
  box-sizing: border-box; /* inclui padding e border na largura */
}
```

**Seletores principais**
- Elemento: `p`
- Classe: `.classe`
- ID: `#id`
- Universal: `*`
- Atributo: `[type="text"]`
- Pseudo-classe: `:hover`, `:focus`, `:nth-child()`
- Pseudo-elemento: `::before`, `::after`

**Flexbox**
```css
.container {
  display: flex;
  flex-direction: row; /* ou column */
  justify-content: center; /* eixo principal */
  align-items: center; /* eixo transversal */
  flex-wrap: wrap; /* quebra linha */
}
```

**CSS Grid**
```css
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px auto;
  grid-template-areas: "header header" "menu content" "footer footer";
}
```

**Unidades**
- Absolutas: `px`, `cm`, `mm`
- Relativas: `em`, `rem`, `%`, `vw`, `vh`

**Variáveis CSS**
```css
:root {
  --cor-principal: #3498db;
}
body {
  color: var(--cor-principal);
}
```

### DOM

**Seleção de elementos**
- `document.getElementById('id')`: por id
- `document.querySelector('.classe')`: primeiro com seletor CSS
- `document.querySelectorAll('.classe')`: todos com seletor CSS
- `document.getElementsByTagName('p')`: por tag
- `document.getElementsByClassName('classe')`: por classe

**Manipulação de conteúdo**
- `element.innerHTML`: altera HTML
- `element.textContent`: altera só texto
- `element.innerText`: altera texto visível

**Manipulação de estilos**
- `element.style.propriedade = "valor"`: estilo inline
- `element.classList.add('classe')`: adiciona classe
- `element.classList.remove('classe')`: remove classe
- `element.classList.toggle('classe')`: alterna classe

**Criação dinâmica**
- `document.createElement('tag')`: cria elemento
- `element.appendChild(filho)`: adiciona filho
- `element.remove()`: remove elemento

## Módulo 2 - Fundamentos JavaScript

### Variáveis e tipos de dados

**Declaração**
- `let`: escopo de bloco, mutável
- `const`: escopo de bloco, imutável
- `var`: escopo de função, mutável (evitar)

**Primitivos**
- `Number`: números (42, 3.14)
- `String`: texto ("Olá")
- `Boolean`: true/false
- `Undefined`: não inicializado
- `Null`: ausência intencional
- `Symbol`: identificador único

**Por referência**
- `Object`: coleção chave-valor
- `Array`: lista ordenada
- `Function`: bloco reutilizável

### Operadores

**Aritméticos**
Utilizados para realizar cálculos matemáticos.
- `+`: soma
- `-`: subtração
- `*`: multiplicação
- `/`: divisão
- `%`: resto da divisão
- `**`: exponenciação

**Comparação**
Comparam dois valores e retornam verdadeiro ou falso.
- `==`: igualdade (com coerção de tipo)
- `===`: igualdade estrita (sem coerção, recomendado)
- `!=`: desigualdade (com coerção)
- `!==`: desigualdade estrita
- `<`, `>`, `<=`, `>=`: maior/menor

**Lógicos**
Combinaam condições booleanas para criar expressões mais complexas.
- `&&`: AND (E) - verdadeiro apenas se todos forem verdadeiros
- `||`: OR (OU) - verdadeiro se ao menos um for verdadeiro
- `!`: NOT (NÃO) - inverte o valor booleano

**Atribuição**
- `=`, `+=`, `-=`, `*=`, `/=`

**Ternário**
- `condição ? valor_true : valor_false`

### Truthy e Falsy

**Falsy**
- `false`, `0`, `""`, `null`, `undefined`, `NaN`

**Truthy**
- Tudo que não é falsy

### Estruturas de controle

**if/else**
```javascript
if (condição) {
  // código
} else if (outra) {
  // código
} else {
  // código
}
```

**switch**
```javascript
switch (valor) {
  case 1:
    // código
    break;
  default:
    // código
}
```

**Ternário**
```javascript
condição ? valor1 : valor2
```

### Arrays

**Métodos principais**
Métodos que modificam ou consultam elementos do array.
- `push()`: adiciona um ou mais elementos ao final
- `pop()`: remove e retorna o último elemento
- `shift()`: remove e retorna o primeiro elemento
- `unshift()`: adiciona um ou mais elementos no início
- `indexOf()`: retorna o índice do elemento (ou -1 se não encontrar)
- `join()`: converte array em string usando separador
- `concat()`: junta dois ou mais arrays e retorna novo array (não altera originais)

**Métodos de iteração (HOF)**
Métodos de alta ordem que aceitam funções callback.
- `forEach()`: executa função para cada item (sem retornar valor)
- `map()`: transforma cada item e retorna novo array com mesma dimensão
- `filter()`: seleciona itens que passam num teste e retorna novo array
- `find()`: retorna o primeiro item que passa no teste
- `some()`: retorna `true` se ao menos um item passa no teste
- `every()`: retorna `true` apenas se todos os itens passam no teste
- `reduce()`: reduz array a um único valor através de acumulador

### Loops

**for**
```javascript
for (let i = 0; i < 5; i++) {
  // código
}
```

**while**
```javascript
while (condição) {
  // código
}
```

**do...while**
```javascript
do {
  // código
} while (condição);
```

**Controle de fluxo**
- `break`: sai do loop
- `continue`: pula iteração

### Objetos

**Estrutura**
```javascript
const objeto = {
  chave: "valor",
  numero: 42,
  metodo: function() { }
};
```

**Acesso**
- Ponto: `objeto.chave`
- Colchetes: `objeto["chave"]`

### Funções

**Declaração**
```javascript
function somar(a, b) {
  return a + b;
}
```

**Arrow function**
```javascript
const somar = (a, b) => a + b;
```

**Função anônima**
```javascript
const somar = function(a, b) {
  return a + b;
};
```

**Callback**
```javascript
array.forEach(elemento => {
  // código
});
```

### Funções de Alta Ordem (HOF)

Uma função que:
- Recebe outra função como argumento, OU
- Retorna uma função

Exemplo:
```javascript
function criarMultiplicador(x) {
  return function(y) {
    return x * y;
  };
}
const dobrar = criarMultiplicador(2);
dobrar(5); // 10
```

### Spread e Rest

**Spread (...)**: espalha elementos de um iterável
Útil para copiar arrays, combinar arrays ou passar elementos como argumentos.
```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
// A sintaxe ... desempacota arr1 dentro do novo array
```

**Rest (...)**: coleta múltiplos parâmetros em um array
Aceita quantos argumentos forem passados e os agrupa num array.
```javascript
function soma(...numeros) {
  // numeros é um array com todos os argumentos passados
  return numeros.reduce((acc, n) => acc + n, 0);
}
soma(1, 2, 3, 4); // 10
```

### Destructuring

Técnica para desempacotar valores de arrays ou propriedades de objetos em variáveis separadas.

**Array**
```javascript
const [a, b, c] = [1, 2, 3];
// a = 1, b = 2, c = 3
```

**Objeto**
```javascript
const { nome, idade } = pessoa;
// Extrai as propriedades nome e idade do objeto pessoa
```

### Imutabilidade

Não alterar dados originais, criar novos:
- `map()`, `filter()`, `reduce()`, `concat()`: seguras
- `push()`, `pop()`, `sort()`: mutáveis (evitar)

### Escopo e Closures

**Escopo**
- Global: acesso de qualquer lugar
- Função: dentro de uma função
- Bloco: dentro de `{ }` (let/const)

**Closure**
Função que mantém acesso a variáveis do escopo externo mesmo após sair:
```javascript
function contador() {
  let count = 0;
  return function() {
    return ++count;
  };
}
```

### This

**Regra de ouro**: `this` é definido no momento da chamada

- Função normal: `undefined` (modo estrito) ou global
- Método de objeto: aponta para o objeto
- Arrow function: captura `this` do escopo léxico

### Hoisting

Funções e `var` são "içadas" (registradas antes da execução)
- `let` e `const` entram em TDZ (Temporal Dead Zone)
- Function declarations podem ser usadas antes de declaradas
- Function expressions só após declaração

## Módulo 3 - Conceitos Avançados

### Assincronismo

**Sincronismo**: execução sequencial, uma coisa de cada vez

**Assincronismo**: código continua enquanto operação ocorre

**setTimeout**
Agenda a execução de uma função após um tempo em milissegundos. Não bloqueia a execução do código seguinte.
```javascript
setTimeout(() => {
  console.log("Após 1 segundo");
}, 1000); // 1000ms = 1 segundo
// O código continua executando enquanto setTimeout aguarda
```

**Event Loop**
1. Call Stack: executa código síncrono
2. Web APIs: executam tarefas assíncronas
3. Callback Queue: callbacks esperando
4. Event Loop: move callbacks para stack quando vazio

### Promises

**Estados**
- `pending`: aguardando
- `fulfilled`: sucesso
- `rejected`: erro

**Sintaxe**
```javascript
const promise = new Promise((resolve, reject) => {
  if (sucesso) {
    resolve("Valor");
  } else {
    reject("Erro");
  }
});

promise
  .then(resultado => { })
  .catch(erro => { })
  .finally(() => { });
```

### Async/Await

**Async**
```javascript
async function obterDados() {
  return "Dados";
}
// Sempre retorna uma Promise
```

**Await**
```javascript
async function obterDados() {
  const resultado = await promise;
  // Espera a promise ser resolvida
}
```

**Try/Catch/Finally**
```javascript
try {
  const resultado = await promise;
} catch (erro) {
  console.error(erro);
} finally {
  // Sempre executa
}
```

### Fetch API

**GET básico**
```javascript
const response = await fetch('url');
const dados = await response.json();
```

**Com tratamento de erro**
```javascript
async function obterDados() {
  try {
    const response = await fetch('url');
    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }
    const dados = await response.json();
    return dados;
  } catch (erro) {
    console.error('Erro:', erro);
  }
}
```

### JSON

Formato leve para transmitir dados. O navegador trabalha com objetos, mas a rede transmite strings.

**Conversão**
- `JSON.stringify(obj)`: converte objeto/array JavaScript em string JSON para enviar
- `JSON.parse(json)`: converte string JSON recebida em objeto JavaScript para usar

**Diferença**
- **Objeto JS**: coleção com propriedades, pode ter métodos e símbolos
- **JSON**: string que segue padrão específico (sem métodos, sem funções)

## Módulo 4 - Web Storage

### localStorage

**Características**
- Persiste até ser apagado
- Acesso por domínio
- Armazena apenas strings

**Métodos**
- `setItem(chave, valor)`: grava
- `getItem(chave)`: lê (ou `null`)
- `removeItem(chave)`: remove
- `clear()`: limpa tudo

**Exemplo**
```javascript
// Guardar um valor
localStorage.setItem("tema", "dark");

// Recuperar um valor (retorna null se não existir)
const tema = localStorage.getItem("tema"); // "dark"

// Remover um valor específico
localStorage.removeItem("tema");

// Limpar tudo do domínio
localStorage.clear();
```

### sessionStorage

Igual a `localStorage`, mas desaparece ao fechar a aba.

**Quando usar cada um**
- `localStorage`: preferências duradouras (tema, idioma)
- `sessionStorage`: dados temporários da navegação

### Persistência com JSON

Storage só aceita strings, então objetos e arrays precisam ser convertidos para JSON antes de guardar.

```javascript
// Guardar um objeto convertendo para string JSON
const user = { nome: "Ana", idade: 30 };
localStorage.setItem("user", JSON.stringify(user));

// Recuperar e converter de volta para objeto
const raw = localStorage.getItem("user");
const user = raw ? JSON.parse(raw) : null;
// Se não existir, raw será null e user recebe null
```

## Módulo 5 - Modularização

### ES Modules

**Named export**
```javascript
// utils.js
export function somar(a, b) {
  return a + b;
}

// app.js
import { somar } from "./utils.js";
```

**Default export**
```javascript
// utils.js
export default function somar(a, b) {
  return a + b;
}

// app.js
import somar from "./utils.js";
```

**Ativação no HTML**
```html
<script type="module" src="app.js"></script>
```

### CommonJS vs ESM

| CommonJS | ESModules |
|----------|-----------|
| `require()` | `import` |
| `module.exports` | `export` |
| Node tradicional | Navegador nativo |
| Execução síncrona | Análise estática |

## Conceitos-chave Recorrentes

- **Imutabilidade**: não alterar dados, criar novos
- **Funções puras**: mesmo entrada = mesma saída, sem efeitos colaterais
- **Separação de responsabilidades**: HTML (estrutura), CSS (estilo), JS (comportamento)
- **Declaratividade**: descrever o "o quê", não o "como"
- **DRY (Don't Repeat Yourself)**: evitar repetição de código
- **Escalabilidade**: código preparado para crescer
