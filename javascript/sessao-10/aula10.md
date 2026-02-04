# Aula 10

## Reatividade

Reatividade é um paradigma de programação que permite que o sistema responda automaticamente a mudanças de estado ou dados. Em JavaScript, isso é frequentemente implementado em frameworks e bibliotecas como React, Vue.js e Svelte, onde a interface do usuário é atualizada automaticamente quando os dados subjacentes mudam.

### Conceitos Básicos

Bases de dados nunca são acessadas diretamente pelo front-end. Em vez disso, o front-end interage com uma camada intermediária, um servidor back-end, que lida com a lógica de negócios e a comunicação com o banco de dados. Essa separação de responsabilidades é fundamental para a arquitetura moderna de aplicações web. O fluxo típico de dados em uma aplicação web envolve o front-end enviando requisições ao back-end, que processa essas requisições, interage com o banco de dados conforme necessário e retorna os dados ao front-end para serem exibidos ao usuário.

## Eventos na Prática

### O que é um Evento?

Um **event** (evento) é uma ação ou ocorrência que acontece no sistema, como:

- Um clique do mouse
- Uma tecla pressionada
- O carregamento de uma página
- Um movimento do mouse

### O que é um Event Listener?

Um **event listener** (ou ouvinte de evento) é uma função que espera por um evento específico para ocorrer e reage a ele quando acontece.

### addEventListener - O Método Principal

O método `addEventListener` é usado para associar um event listener a um elemento específico do DOM (Document Object Model), permitindo que o código responda a eventos de maneira eficiente e organizada.

**Vantagem do addEventListener:**
O `addEventListener` permite separação de responsabilidades (Decoupling) - o código JavaScript fica separado do HTML, evitando handlers inline. Isso torna o código mais limpo, reutilizável e fácil de manter.

**Sintaxe:**

```javascript
elemento.addEventListener('nomeDoEvento', function(event) {
  // código a executar quando o evento ocorrer
}, options);
```

**Parâmetros:**

- **type** (obrigatório): Nome do evento ('click', 'keydown', 'submit', etc)
- **listener** (obrigatório): Função a executar quando o evento ocorre
- **options** (opcional): Objeto de configuração
  - `once: true` - Executa apenas uma vez e depois remove o listener
  - `capture: true` - Usa a fase de capturing em vez de bubbling

**Exemplo básico:**

```javascript
const button = document.getElementById('myButton');

button.addEventListener('click', function(event) {
  button.textContent = 'Clicado!';
});

// Com opções - executar apenas uma vez
button.addEventListener('click', function() {
  console.log('Clicado uma única vez!');
}, { once: true });
```

## Tipos de Eventos Comuns

### click

Disparado quando o elemento é clicado

```javascript
cards.forEach((card) => {
    card.addEventListener('click', () => {
        console.log('Card clicado');
    });
});
```

### mouseenter e mouseleave

Disparados quando o mouse entra ou sai da área do elemento

```javascript
elemento.addEventListener('mouseenter', () => {
  console.log('Mouse entrou');
});

elemento.addEventListener('mouseleave', () => {
  console.log('Mouse saiu');
});
```

### keydown

Disparado quando uma tecla é pressionada

```javascript
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.classList.add('hidden');
  }
});
```

## O Objeto Event

### O que é o objeto event?

Quando um evento ocorre, o navegador cria automaticamente um objeto `event` que contém todas as informações sobre esse evento. Este objeto é passado como parâmetro para a função listener.

**Propriedades principais do objeto event:**

```javascript
elemento.addEventListener('click', (event) => {
  event.target;        // Elemento que disparou o evento
  event.key;          // Qual tecla foi pressionada (keydown)
  event.clientX;      // Posição X do mouse
  event.clientY;      // Posição Y do mouse
  event.type;         // Tipo de evento ('click', 'keydown', etc)
});
```

### event.target

Captura a referência exata ao elemento que disparou o evento.

```javascript
cards.forEach((card) => {
    card.addEventListener('click', (event) => {
        console.log('Elemento clicado:', event.target);
        console.log('Card clicado:', event.target.closest('.card'));
    });
});
```

## Fluxo de Eventos no DOM (Propagação)

### As Três Fases do Evento

Quando um evento ocorre, o navegador percorre o DOM em **três fases distintas**:

#### 1. **Capturing (Captura)** - Fase Descendente

O evento "desce" da janela (Window) até o elemento alvo, passando por todos os ascendentes:

- Começa em `Window`
- Passa por `Document`
- Vai descendo pelos elementos ancestrais
- Termina no pai do elemento alvo

#### 2. **Target (Alvo)** - Fase Central

O evento atinge o elemento que realmente disparou a ação.

#### 3. **Bubbling (Borbulhamento)** - Fase Ascendente

O evento "sobe" do elemento alvo para seus ancestrais, até atingir o topo da hierarquia:

- Começa no elemento que disparou
- Sobe para o elemento pai
- Continua subindo até atingir `Window`

**Visualização:**

```code
        Window (1. Capturing aqui)
          ↓
      Document
          ↓
        <div class="container">
            ↓
          <div class="card">
              ↓
            <button> ← Clique aqui! (2. Target)
              ↑
          </div> (3. Bubbling sobe aqui)
            ↑
        </div>
          ↑
      Document
          ↑
       Window
```

**Exemplo prático:**

```javascript
// Por padrão, addEventListener usa BUBBLING
elemento.addEventListener('click', (event) => {
  console.log('Bubbling: evento sobe para cima');
});

// Para usar CAPTURING (fase descendente)
elemento.addEventListener('click', (event) => {
  console.log('Capturing: evento desce para baixo');
}, true); // ou { capture: true }
```

## Parar a Propagação de Eventos

### stopPropagation()

O método `stopPropagation()` impede que o evento continue a se propagar pela árvore do DOM. Ele interrompe o evento na fase em que está (capturing ou bubbling).

```javascript
elemento.addEventListener('click', (event) => {
  event.stopPropagation(); // Para aqui, não continua propagando
  console.log('Evento não vai mais propagar');
});
```

**Quando usar:**

- Quando você quer que um clique num elemento filho não afete o pai
- Para evitar múltiplos handlers sendo acionados
- Para controlar o comportamento em cascata de eventos

**Exemplo prático:**

```javascript
// Pai
const pai = document.querySelector('.container');
pai.addEventListener('click', () => {
  console.log('Container clicado');
});

// Filho
const botao = document.querySelector('.botao');
botao.addEventListener('click', (event) => {
  event.stopPropagation(); // O click não sobe para .container
  console.log('Botão clicado, mas o pai não será notificado');
});
```

## Manipulação de Classes com classList

### O que é classList?

`classList` é uma propriedade que fornece métodos para adicionar, remover ou alternar classes CSS de um elemento.

**Métodos principais:**

- `add()` - Adiciona uma ou mais classes
- `remove()` - Remove uma ou mais classes
- `toggle()` - Alterna uma classe (adiciona se não tem, remove se tem)
- `contains()` - Verifica se tem a classe

**Exemplo:**

```javascript
// Selecionar um elemento
const modal = document.querySelector('.modal');

// Remover classe (mostrar modal)
modal.classList.remove('hidden');

// Adicionar classe (esconder modal)
modal.classList.add('hidden');

// Alternar classe
modal.classList.toggle('ativo');

// Verificar se tem a classe
if (modal.classList.contains('hidden')) {
  console.log('Modal está escondido');
}
```

## Event Bubbling (Propagação de Eventos)

### O que é Event Bubbling?

Event Bubbling é quando um evento em um elemento filho "sobe" (propaga) para seus elementos pai, avô, etc. Isso permite que você adicione listeners em elementos pai para capturar eventos de filhos.

**Exemplo:**

```javascript
cards.forEach((card) => {
    card.addEventListener('click', (event) => {
        console.log('Card clicado com evento:', event.target);
    });
});
```

O `event.target` mostra qual elemento foi realmente clicado.

## Event Delegation

### O que é Event Delegation?

Event Delegation é uma técnica onde você adiciona um único event listener a um elemento pai, em vez de adicionar listeners a múltiplos elementos filhos. Ela aproveita o mecanismo de bubbling para gerenciar eventos de forma mais eficiente e dinâmica.

### Por que usar Event Delegation?

#### Problemas de muitos listeners

- Código poluído e repetitivo
- Problemas de performance (muitos listeners consomem memória)
- Dificuldade de manutenção
- Não funciona com elementos adicionados dinamicamente

#### Solução: Event Delegation

**Como funciona:**

1. O evento ocorre num elemento filho
2. O evento "sobe" (bubbling) até o elemento pai
3. O pai verifica qual elemento foi clicado usando `event.target`
4. O pai executa a ação apropriada

**Exemplo prático:**

```javascript
// Listener no elemento PAI (.servicos)
servicos.addEventListener('click', (event) => {
  // Verificar se o clique foi num botão com classe 'saiba-mais'
  if (event.target.classList.contains('saiba-mais')) {
    const card = event.target.closest('.card');
    console.log("Serviço clicado:", card.dataset.servico);
  }
});
```

**Vantagens:**

- Mais eficiente (apenas 1 listener em vez de múltiplos)
- Funciona com elementos adicionados dinamicamente
- Menos uso de memória

## Navegação no DOM com closest()

### O que é closest()?

O método `closest()` percorre o DOM para cima, procurando o primeiro elemento que corresponde ao seletor CSS fornecido.

**Sintaxe:**

```javascript
const elementoPai = elemento.closest('.classe-pai');
```

**Exemplo prático:**

```javascript
// Se clicou num botão dentro de um card
const button = event.target;
const card = button.closest('.card'); // encontra o card pai

// Agora posso acessar dados e propriedades do card
const titulo = card.querySelector('h3').textContent;
const tipo = card.dataset.servico;
```

## Acesso a Atributos de Dados (data-*)

### O que é dataset?

Atributos `data-*` permitem armazenar informações extras nos elementos HTML. Em JavaScript, acessamos esses dados com a propriedade `dataset`.

**HTML:**

```html
<article class="card" data-servico="web">
  <h3>Aplicação Web</h3>
</article>
```

**JavaScript:**

```javascript
const card = document.querySelector('.card');
console.log(card.dataset.servico); // "web"
```

## Manipulação de Conteúdo

### textContent

Define/obtém apenas o texto simples (sem interpretar HTML)

```javascript
modalTitulo.textContent = card.querySelector('h3').textContent;
```

### innerHTML

Define/obtém o conteúdo como HTML (interpreta tags)

```javascript
elemento.innerHTML = '<h1>Título</h1>';
```

**Atenção:** `innerHTML` pode ser perigoso se o conteúdo não for validado.

## Exemplo Completo: Modal Interativo

```javascript
// Seleção de elementos
const servicos = document.querySelector('.servicos');
const modal = document.querySelector('.modal');
const modalTitulo = document.getElementById('modalTitulo');
const modalTexto = document.getElementById('modalTexto');
const btnFechar = document.querySelector('.fechar');

// 1. Abrir modal ao clicar num botão (Event Delegation)
servicos.addEventListener('click', (event) => {
  if (event.target.classList.contains('saiba-mais')) {
    const card = event.target.closest('.card');

    // Preencher o modal com dados do card
    modalTitulo.textContent = card.querySelector('h3').textContent;
    modalTexto.textContent = "Mais informações sobre " + card.dataset.servico;

    // Mostrar modal (remover classe 'hidden')
    modal.classList.remove('hidden');
  }
});

// 2. Fechar modal ao clicar no botão fechar
btnFechar.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// 3. Fechar modal ao clicar no fundo escuro
modal.addEventListener('click', (event) => {
  // Só fecha se clicou NO MODAL, não no conteúdo
  if (event.target === modal) {
    modal.classList.add('hidden');
  }
});

// 4. Fechar modal ao pressionar Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.classList.add('hidden');
  }
});
```

## Resumo dos Conceitos Principais

1. **addEventListener** - Adiciona listeners a eventos
2. **classList** - Gerencia classes CSS (add, remove, toggle, contains)
3. **Event Bubbling** - Eventos sobem da DOM
4. **Event Delegation** - Um listener para múltiplos elementos
5. **closest()** - Encontra o elemento pai que corresponde a um seletor
6. **dataset** - Acessa atributos data-* do HTML
7. **event.target** - Identifica qual elemento disparou o evento
8. **Reatividade** - Interface responde dinamicamente a eventos do usuário
