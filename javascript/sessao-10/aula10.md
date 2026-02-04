# Aula 10

## Reatividade

Reatividade é um paradigma de programação que permite que o sistema responda automaticamente a mudanças de estado ou dados. Em JavaScript, isso é frequentemente implementado em frameworks e bibliotecas como React, Vue.js e Svelte, onde a interface do usuário é atualizada automaticamente quando os dados subjacentes mudam.

### Conceitos Básicos

Bases de dados nunca são acessadas diretamente pelo front-end. Em vez disso, o front-end interage com uma camada intermediária, um servidor back-end, que lida com a lógica de negócios e a comunicação com o banco de dados. Essa separação de responsabilidades é fundamental para a arquitetura moderna de aplicações web. O fluxo típico de dados em uma aplicação web envolve o front-end enviando requisições ao back-end, que processa essas requisições, interage com o banco de dados conforme necessário e retorna os dados ao front-end para serem exibidos ao usuário.

O event, event listener e o addEventListener são conceitos fundamentais na programação web que permitem a criação de aplicações interativas e responsivas. Um event (evento) é uma ação ou ocorrência que acontece no sistema, como um clique do mouse, uma tecla pressionada ou o carregamento de uma página. Um event listener (ou ouvinte de evento) é uma função que espera por um evento específico para ocorrer e reage a ele quando acontece. O método addEventListener é usado para associar um event listener a um elemento específico do DOM (Document Object Model), permitindo que o código responda a eventos de maneira eficiente e organizada.

### Exemplos

```javascript
// Seleciona um botão no DOM
const button = document.getElementById('myButton');

// Adiciona um event listener ao botão
button.addEventListener('click', function() {
  // Altera o texto do botão quando clicado
  button.textContent = 'Clicado!';
});
```
