const container = document.querySelector('.container');
const form = container.querySelector('.form');
const fields = form.querySelectorAll('.field');
const inputs = form.querySelectorAll('input');
const errorMessages = form.querySelectorAll('.error');
const button = form.querySelector('.button');
const inputName = form.querySelector('#nome');
const inputEmail = form.querySelector('#email');
const inputPassword = form.querySelector('#password');
const inputConfirmPassword = form.querySelector('#confirmPassword');

/*
	Explicando a sintaxe do regex para validação de input:
	- ^ -> início da string
	- $ -> fim da string
	- . -> qualquer caractere
	- * -> zero ou mais ocorrências do caractere anterior
	- + -> uma ou mais ocorrências do caractere anterior
	- ? -> zero ou uma ocorrência do caractere anterior
	- \s -> espaço em branco
	- \d -> dígito (0-9)
	- [A-Za-z] -> qualquer letra maiúscula ou minúscula
	- () -> grupo de captura
	- (?=...) -> lookahead positivo (verifica se o padrão existe à frente, sem consumir caracteres)
	- \ -> escape para caracteres especiais
*/

function validateName(name) {
	// O método trim() remove os espaços em branco no início e no final da string.
	name = name.trim();
	if (name.length < 3 || name.length > 50) {
		return 'O nome deve ter entre 3 e 50 caracteres.';
	}
	return '';
}

function validateEmail(email) {
	// Regex simples para email:
	// ^           início da string
	// [^\s@]+     pelo menos 1 caractere que não seja espaço ou @
	// @           separador obrigatório
	// [^\s@]+     domínio (sem espaços ou @)
	// \.         ponto obrigatório
	// [^\s@]+     extensão (ex.: com, pt)
	// $           fim da string
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!regex.test(email.trim())) {
		return 'O formato do email é inválido.';
	}
	return '';
}


function validatePassword(password) {
	const trimmedPassword = password.trim();
	// Regex para senha:
	// ^            início da string
	// (?=.*[A-Za-z]) garante pelo menos 1 letra (maiúscula ou minúscula)
	// (?=.*\d)     garante pelo menos 1 número (0-9)
	// .{8,}        mínimo de 8 caracteres no total
	// $            fim da string
	const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
	if (!regex.test(trimmedPassword)) {
		return 'A senha deve ter pelo menos 8 caracteres, 1 letra e 1 número.';
	}
	return '';
}

function validateConfirmPassword(confirmPassword) {
	if (inputPassword.value === '') {
		return 'Preencha a password primeiro.';
	}
	else if (confirmPassword !== inputPassword.value) {
		return 'As senhas não coincidem.';
	}
	return '';
}

function validateForm() {
	let hasError = false;
	let allFilled = true;

	// Verifica se todos os campos estão preenchidos
	inputs.forEach((input) => {
		if (input.value.trim() === '') {
			allFilled = false;
		}
	});

	// Verifica se há mensagens de erro
	errorMessages.forEach((error) => {
		if (error.textContent.trim() !== '') {
			hasError = true;
		}
	});

	// Habilita ou desabilita o botão com base na validação
	if (hasError || !allFilled) {
		button.disabled = true;
	} else {
		button.disabled = false;
	}
}

/*
	Função para anexar validação a um input específico.
	Adiciona event listeners para 'input' e 'blur' que chamam o validador
	e atualizam a mensagem de erro correspondente.
*/
function attachValidation(input, validator) {
	const handler = () => {
		// Chama a função de validação e obtém a mensagem de erro
		const errorMessage = validator(input.value);
		// Atualiza o texto da mensagem de erro correspondente, reconhecendo pelo field pai
		const error = input.closest('.field').querySelector('.error');
		error.textContent = errorMessage;
		// Revalida o formulário para atualizar o estado do botão
		validateForm();
	};

	// Adiciona event listeners para 'input' e 'blur'
	input.addEventListener('input', handler);
	input.addEventListener('blur', handler);
}

attachValidation(inputName, validateName);
attachValidation(inputEmail, validateEmail);
attachValidation(inputPassword, validatePassword);
attachValidation(inputConfirmPassword, validateConfirmPassword);

