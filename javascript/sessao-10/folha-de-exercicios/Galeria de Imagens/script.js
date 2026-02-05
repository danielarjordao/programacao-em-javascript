const galeria = document.querySelector('.galeria');
const modal = document.querySelector('.modal');
const closeButton = modal.querySelector('.close-button');

/*
Abrir a Modal ao clicar em uma imagem
*/
galeria.addEventListener('click', (e) => {
	if (e.target.tagName === 'IMG') {
		const img = e.target;
		const modalImg = modal.querySelector('img');
		modalImg.src = img.src;
		modal.classList.remove('hidden');
	}
});

/*
Evitar o fechamento da Modal ao clicar dentro dela
*/
modal.querySelector('.modal-content').addEventListener('click', (e) => {
	e.stopPropagation();
});

/*
Fechar a Modal ao clicar fora dela
*/
modal.addEventListener('click', () => {
	modal.classList.add('hidden');
});

/*
Fechar a Modal clicando no X
*/
closeButton.addEventListener('click', (e) => {
	e.stopPropagation();
	modal.classList.add('hidden');
});

/*
Fechar a Modal ao clicar no escape
*/
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		modal.classList.add('hidden');
	}
});
