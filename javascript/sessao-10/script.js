const servicos = document.querySelector('.servicos');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');
const modalTitulo = document.querySelector('.modalTitulo');
const modalTexto = document.querySelector('.modalTexto');
const btnFechar = document.querySelector('.fechar');

/*
Manipulação de Eventos
*/
cards.forEach((card) => {
	card.addEventListener('click', () => {
		console.log('Card clicado');
	});
});

/*
Event Bubbling
*/
cards.forEach((card) => {
	card.addEventListener('click', (event) => {
		console.log('Card clicado com evento:', event.target);
	});
});

/*
Event Delegation
*/
servicos.addEventListener('click', (e) => {
	if (e.target.classList.contains('saiba-mais')) {
		const card = e.target.closest('.card');
		console.log("Serviço clicado:", card.dataset.servico);
	}
});

/*
Abrir a Modal com mais informações
*/
servicos.addEventListener('click', (e) => {
	if (e.target.classList.contains('saiba-mais')) {
		const card = e.target.closest('.card');
		modalTitulo.textContent = card.querySelector('h3').textContent;
		modalTexto.textContent =
			"Mais informações sobre " + card.dataset.servico + ".";
		modal.classList.remove('hidden');
	}
});
