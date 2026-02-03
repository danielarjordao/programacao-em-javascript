# Aula 09

## DOM - Document Object Model

O DOM (Document Object Model) é uma interface de programação para documentos HTML e XML. Ele representa a estrutura do documento como uma árvore de objetos, onde cada nó da árvore corresponde a uma parte do documento, como elementos, atributos e texto. O DOM permite que linguagens de programação, como JavaScript, manipulem o conteúdo, a estrutura e o estilo dos documentos de forma dinâmica.

### O Objeto document

O objeto `document` é a propriedade do objeto `Window` que representa o conteúdo exibido em uma janela ou quadro do navegador. Ele é o objeto central do Document Object Model (DOM), uma API fundamental que transforma documentos HTML ou XML estáticos em uma árvore de objetos interativa.

### O que Podemos Fazer com o DOM?

O DOM permite que o JavaScript (JS) transforme documentos estáticos em aplicativos interativos, fornecendo o controle total sobre o conteúdo, a estrutura e a apresentação da página. Veja algumas ações que podem ser realizadas com o DOM:

- **Seleção e Consulta de Elementos:** Localizar elementos específicos na página;
- **Navegação e Travessia:** Percorrer a estrutura da árvore do DOM;
- **Manipulação de Atributos:** Alterar ou adicionar atributos aos elementos;
- **Modificação de Conteúdo:** Alterar o texto e HTML dos elementos;
- **Interatividade com Eventos:** Responder a ações do usuário (cliques, teclas, etc.).

## Seletores do DOM

### Para Manipular é Preciso Selecionar

O DOM contém muitos elementos. Antes de alterar algo, o JavaScript precisa saber exatamente qual elemento queremos manipular. Para fazer isso, precisamos conhecer mais sobre os **seletores**.

Os seletores são padrões fundamentais utilizados para identificar e localizar elementos específicos dentro de um documento HTML ou XML para que possam ser manipulados via JavaScript.

### Métodos de Seleção

O DOM define várias maneiras de selecionar elementos do HTML via JavaScript:

- **Por Identificação (id):** `getElementById()`
- **Pelo nome (name):** `getElementsByName()`
- **Pelo Tipo ou Tag:** `getElementsByTagName()`
- **Pela Classe CSS:** `getElementsByClassName()`
- **Por Seletores CSS:** `querySelector()` e `querySelectorAll()`

### getElementById

**O que faz?** Localiza o elemento pelo seu identificador único **ID**.

**Retorna:** O elemento HTML que possui o id especificado, ou `null` se não encontrar.

**Sintaxe:**

```javascript
const elemento = document.getElementById('id-do-elemento');
```

### getElementsByTagName

**O que faz?** Obtém todos os elementos de um determinado tipo (como todos os `<div>` ou `<p>`) na ordem em que aparecem no documento.

**Retorna:** Uma HTMLCollection (coleção viva) com todos os elementos da tag especificada.

**Sintaxe:**

```javascript
const elementos = document.getElementsByTagName('p');
const primeiroElemento = elementos[0];
```

### getElementsByName

**O que faz?** Seleciona elementos que possuem um atributo `name` específico.

**Retorna:** Uma NodeList com todos os elementos que têm o atributo name especificado.

**Uso comum:** Em formulários onde vários elementos compartilham o mesmo name.

**Sintaxe:**

```javascript
const elementos = document.getElementsByName("nome-do-elemento");
const primeiroElemento = elementos[0];
```

### getElementsByClassName

**O que faz?** Permite selecionar conjuntos de elementos que compartilham identificadores em seu atributo `class`.

**Retorna:** Uma HTMLCollection (coleção viva) com todos os elementos da classe especificada.

**Sintaxe:**

```javascript
const elementos = document.getElementsByClassName('nome-da-classe');
const primeiroElemento = elementos[0];

// Iterando sobre múltiplos elementos
for (let i = 0; i < elementos.length; i++) {
 // manipular elementos[i]
}
```

### querySelector

**O que faz?** Utiliza a poderosa sintaxe de seletores CSS para localizar elementos de forma precisa.

**Retorna:** O **primeiro elemento** encontrado que corresponde ao seletor CSS, ou `null` se não encontrar.

**Sintaxe:**

```javascript
const elemento = document.querySelector('.nome-da-classe');
const elementoPorId = document.querySelector('#id-do-elemento');
const elementoPorTag = document.querySelector('p');
const seletorComplexo = document.querySelector('div.container > p.destaque');
```

### querySelectorAll

**O que faz?** Utiliza a sintaxe de seletores CSS para localizar **todos** os elementos que correspondem.

**Retorna:** Uma NodeList (lista estática) com todos os elementos encontrados.

**Diferença importante:** `querySelectorAll` retorna uma NodeList (não uma HTMLCollection), que é estática e pode ser iterada com `forEach`.

**Sintaxe:**

```javascript
const elementos = document.querySelectorAll('.item');
elementos.forEach(item => {
 // manipular cada item
});
```

## Manipulação de Conteúdo

### innerHTML vs innerText

Ambas são propriedades usadas para manipular o conteúdo de elementos HTML via JavaScript, mas têm diferenças importantes:

#### innerHTML

**O que faz?** Permite definir ou obter o conteúdo HTML de um elemento. Quando você usa `innerHTML`, o navegador **interpreta o conteúdo como HTML**, o que significa que tags HTML serão renderizadas corretamente.

**Sintaxe:**

```javascript
const elemento = document.querySelector('#container');
elemento.innerHTML = '<h1>Olá Mundo!</h1><p>Parágrafo</p>';
```

**Atenção:** Usar `innerHTML` pode expor seu site a vulnerabilidades de segurança, como ataques XSS (Cross-Site Scripting), se o conteúdo inserido não for devidamente sanitizado.

#### innerText

**O que faz?** Permite definir ou obter o texto visível de um elemento. Quando você usa `innerText`, qualquer tag HTML dentro do conteúdo será **tratada como texto simples** e não será renderizada como HTML.

**Sintaxe:**

```javascript
const elemento = document.querySelector('#texto');
elemento.innerText = 'Texto simples sem HTML';
```

**Segurança:** `innerText` é mais seguro para inserir texto simples, pois evita a interpretação de código HTML.

## Manipulação de Estilos

### Alterando Estilos com style

A propriedade `style` permite aplicar estilos CSS diretamente no elemento (estilos inline).

**Problema:** Gera estilos inline, o que pode dificultar a manutenção e sobrescreve estilos do CSS.

**Sintaxe:**

```javascript
const elemento = document.querySelector('#meu-elemento');
elemento.style.backgroundColor = 'blue';
elemento.style.padding = '10px';
elemento.style.fontSize = '20px';
```

### Alterando Estilos com classList

A propriedade `classList` oferece métodos para adicionar, remover ou alternar classes CSS de um elemento, sem adicionar estilos inline.

**Vantagens:** Mantém a separação entre lógica (JS) e apresentação (CSS), permitindo que o elemento seja alterado pela folha de estilo no futuro.

**Métodos principais:**

- `add()`: Adiciona uma ou mais classes
- `remove()`: Remove uma ou mais classes
- `toggle()`: Alterna uma classe (adiciona se não existir, remove se existir)
- `contains()`: Verifica se o elemento tem uma classe

**Sintaxe:**

```javascript
const elemento = document.querySelector('#meu-elemento');

elemento.classList.add('ativo', 'destacado');
elemento.classList.remove('oculto');
elemento.classList.toggle('visivel');
elemento.classList.contains('ativo'); // retorna true ou false
```

## Criação Dinâmica de Elementos

### HTML Não Precisa Estar Todo no Ficheiro

Nem todos os elementos precisam existir no HTML inicialmente, pois o JavaScript pode:

- **Criar** elementos em memória;
- **Inserir** elementos na página;
- **Remover** elementos da DOM.

Isso permite a criação de **interfaces dinâmicas**.

### Criar um Elemento: createElement

**O que faz?** O `createElement` é um método de fábrica do objeto `Document` utilizado para criar novos nós de elemento.

**Importante:** O elemento é criado **em memória**, o que significa que ele ainda não aparece na página. Você precisa inseri-lo no DOM para que seja visível.

**Sintaxe:**

```javascript
const novoElemento = document.createElement('p');
const novaDiv = document.createElement('div');
```

### Configurar o Elemento Criado

Depois de criar um elemento, podemos definir o texto, as classes e os atributos desse elemento de forma livre.

**Sintaxe:**

```javascript
const novoElemento = document.createElement('p');
novoElemento.textContent = 'Texto do elemento';
novoElemento.classList.add('classe');
novoElemento.id = 'id-do-elemento';
```

### Inserir no DOM: appendChild

**O que faz?** O `appendChild` é um método da interface Node utilizado para inserir um nó na árvore do documento. A partir desse momento o elemento **aparece na página**.

**Sintaxe:**

```javascript
const elementoPai = document.querySelector('#container');
const novoElemento = document.createElement('p');
novoElemento.textContent = 'Texto do parágrafo';

// Adiciona o novo elemento como filho do elementoPai
elementoPai.appendChild(novoElemento);
```

### Criar Vários Elementos

Podemos utilizar laços de repetição para a criação de vários elementos de forma dinâmica.

**Sintaxe:**

```javascript
const container = document.querySelector('#container');
const itens = ['Item 1', 'Item 2', 'Item 3'];

itens.forEach(item => {
 const elemento = document.createElement('p');
 elemento.textContent = item;
 container.appendChild(elemento);
});
```

### Remover Elementos

Existem diferentes métodos para remover elementos:

#### Método 1: remove() - Direto no elemento

```javascript
const elemento = document.querySelector('#meu-elemento');
elemento.remove();
```

#### Método 2: removeChild() - A partir do pai

```javascript
const elementoPai = document.querySelector('#container');
const elementoFilho = document.querySelector('#filho');
elementoPai.removeChild(elementoFilho);
```

## Eventos (Introdução)

Eventos permitem que o JavaScript responda a interações do usuário com a página.

### Eventos Mais Comuns

- **click:** Disparado quando o elemento é clicado
- **mouseenter:** Disparado quando o ponteiro do mouse entra na área do elemento
- **mouseleave:** Disparado quando o ponteiro do mouse sai da área do elemento

### Duas Formas de Adicionar Eventos

#### Forma 1: Inline (direto no HTML)

```html
<div onclick="nomeDaFuncao()">Clique aqui</div>
```

#### Forma 2: addEventListener (recomendado)

```javascript
const elemento = document.querySelector('#elemento');

elemento.addEventListener('click', () => {
 // código a executar quando o elemento for clicado
});

elemento.addEventListener('mouseenter', () => {
 // código a executar quando o mouse entrar
});
```

**Vantagem do addEventListener:** Permite adicionar múltiplos eventos ao mesmo elemento e mantém a separação entre HTML e JavaScript.

## Síntese da Sessão

Os principais tópicos abordados nesta sessão foram:

- **Utilização da DOM no JS:** Compreensão do que é o DOM e como o navegador transforma HTML em objetos;
- **Manipulação de elementos HTML através dos seletores DOM:** getElementById, getElementsByTagName, getElementsByClassName, querySelector, querySelectorAll;
- **Manipulação de conteúdo através de métodos do DOM:** innerHTML vs innerText, criação de conteúdo dinâmico;
- **Manipulação de estilo para a criação de páginas dinâmicas:** style vs classList;
- **Criação dinâmica de elementos:** createElement, appendChild, remove, criação de interfaces interativas sem recarregar a página.
