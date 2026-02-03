/*
  innerHTML e innerText são propriedades usadas para manipular o conteúdo de elementos HTML via JavaScript.
*/

/*
 - innerHTML: Permite definir ou obter o conteúdo HTML de um elemento. Quando você usa innerHTML,
  o navegador interpreta o conteúdo como HTML, o que significa que tags HTML serão renderizadas corretamente.
 */
  const container = document.querySelector('#container');
  container.innerHTML = `
  <h1>Olá Mundo!</h1>
  <p>Este conteúdo foi adicionado via innerHTML.</p>
`;

  /*
  - innerText: Permite definir ou obter o texto visível de um elemento.
  Quando você usa innerText, qualquer tag HTML dentro do conteúdo será tratada como texto simples e não será renderizada como HTML.
*/
  const text = document.querySelector('#texto');
text.innerText = `
	<h1>Olá Mundo!</h1>
	<p>Este conteúdo foi adicionado via innerText.</p>
`;

/*
  Exemplo prático: Criando uma lista de frutas usando innerHTML
*/
const frutas = ['Maçã', 'Banana', 'Laranja'];
const lista = document.querySelector('.container-list');

/*
 Usando innerHTML para criar uma lista não ordenada de frutas
*/
lista.innerHTML = `
  <h2>Lista de Frutas</h2>
  <ul>
    ${frutas.map(fruta => `<li>${fruta}</li>`).join('')}
  </ul>
`;

/*
 Hide - Atenção:
  - Usar innerHTML pode expor seu site a vulnerabilidades de segurança, como ataques XSS (Cross-Site Scripting),
	se o conteúdo inserido não for devidamente sanitizado.
  - innerText pode ser mais seguro para inserir texto simples, mas não deve ser usado quando você precisa renderizar HTML.
*/
