// Criando elementos dinamicamente com JavaScript

// A variável 'body' seleciona o elemento <body> do documento, onde os novos elementos serão adicionados.
const body = document.querySelector('body');

// A variável 'novoParagrafo' cria um novo elemento <p>
const novoParagrafo = document.createElement('p');
// A variável 'textoParagrafo' cria um nó de texto que será inserido dentro do parágrafo criado.
const textoParagrafo = document.createTextNode(
	'Este é um novo parágrafo criado com JavaScript.'
);
// O método 'appendChild' é usado para adicionar o nó de texto ao parágrafo, e depois o parágrafo é adicionado ao corpo do documento.
novoParagrafo.appendChild(textoParagrafo);
// O parágrafo criado é adicionado ao corpo do documento, tornando-o visível na página.
body.appendChild(novoParagrafo);

/*
 O código abaixo segue o mesmo processo para criar um elemento <h1>
 e um elemento <div> contendo um <span>, ambos com texto criado dinamicamente.
*/
const novoH1 = document.createElement('h1');
const textoH1 = document.createTextNode('Título Criado com JavaScript');
novoH1.appendChild(textoH1);
body.appendChild(novoH1);

/*
 O código abaixo cria um elemento <div> que contém um elemento <span>.
 O texto do <span> é criado a partir de uma variável,
 demonstrando como é possível usar variáveis para armazenar
 e inserir texto dinamicamente em elementos HTML.
*/
const container = document.createElement('div');
const span = document.createElement('span');
const textSpan = 'Texto do span via variável';
span.appendChild(document.createTextNode(textSpan));
container.appendChild(span);
body.appendChild(container);
