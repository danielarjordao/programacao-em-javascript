
/*
  Manipulação de elementos HTML via JavaScript
*/

/*
 Utilizando o método getElementsByTagName
 O método getElementsByTagName recebe como parâmetro o nome da tag HTML que se deseja selecionar.
 Ele retorna uma coleção HTML (HTMLCollection) com todos os elementos que possuem a tag especificada.
*/
const primeiroParagrafo = document.getElementsByTagName('p')[0];
// primeiroParagrafo.style.color = 'yellow';
primeiroParagrafo.style.fontWeight = 'bold';
primeiroParagrafo.style.background = 'yellow';

/*
 Utilizando o método getElementById
 O método getElementById recebe como parâmetro o id do elemento HTML que se deseja selecionar.
 Ele retorna o elemento HTML que possui o id especificado.
*/

const subTitulo = document.getElementById('sub-titulo');
subTitulo.style.backgroundColor = 'green';
subTitulo.style.padding = '8px';

/* Utilizando o método getElementsByName
 O método getElementsByName recebe como parâmetro o valor do atributo name dos elementos HTML que se deseja selecionar.
 Ele retorna uma coleção HTML (HTMLCollection) com todos os elementos que possuem o atributo name especificado.
*/
const paragrafoPorNome = document.getElementsByName("segundo-paragrafo")[0];
paragrafoPorNome.style.backgroundColor = 'purple';
paragrafoPorNome.style.padding = '8px';

/*
 Utilizando o método getElementsByClassName
 O método getElementsByClassName recebe como parâmetro o valor da classe dos elementos HTML que se deseja selecionar.
 Ele retorna uma coleção HTML (HTMLCollection) com todos os elementos que possuem a classe especificada.
*/
const tituloPrincipall = document.getElementsByClassName('primeira-classe')[0];
tituloPrincipall.style.backgroundColor = 'red';
tituloPrincipall.style.fontWeight = 'bold';
tituloPrincipall.style.fontSize = '42px';

/*
 Iterando sobre os elementos retornados por getElementsByClassName
*/
const itensClassName = document.getElementsByClassName("item-className");
for (let i = 0; i < itensClassName.length; i++) {
	itensClassName[i].style.padding = '8px';
	itensClassName[i].style.borderBottom = "1px solid white";
	console.log(`Item ClassName ${i}:`,itensClassName[i]);
}

/*
 Utilizando o método querySelector
 O método querySelector recebe como parâmetro um seletor CSS que identifica o elemento HTML que se deseja selecionar.
 Ele retorna o primeiro elemento HTML que corresponde ao seletor especificado.
*/
const tituloLista = document.querySelector('.titulo-lista-1');
tituloLista.style.backgroundColor = 'orange';
