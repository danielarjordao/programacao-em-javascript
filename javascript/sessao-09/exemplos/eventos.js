
/*
Eventos de mouse em JavaScript
- click: Disparado quando o elemento é clicado.
- mouseenter: Disparado quando o ponteiro do mouse entra na área do elemento.
- mouseleave: Disparado quando o ponteiro do mouse sai da área do elemento.
*/

function clicar(id) {
	const elemento = document.querySelector(`#${id}`);
	elemento.innerText = 'Clicado!';
	elemento.style.backgroundColor = 'red';
}

function entrar(id) {
	const elemento = document.querySelector(`#${id}`);
	elemento.innerText = 'Entrou!';
	elemento.style.backgroundColor = 'blue';
}

function sair(id) {
	const elemento = document.querySelector(`#${id}`);
	elemento.innerText = 'Interaja...';
	elemento.style.backgroundColor = 'green';
}

const area2 = document.querySelector('#area2');

area2.addEventListener('click', () => clicar('area2'));
area2.addEventListener('mouseenter', () => entrar('area2'));
area2.addEventListener('mouseleave', () => sair('area2'));
