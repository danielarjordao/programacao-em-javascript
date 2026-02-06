// EXERCICIO:
// 1. Chama buscarUsuario com um email qualquer.
// 2. Se encontrar, faz console.log("Bem-vindo " + user.nome).
// 3. Se falhar, faz console.error do erro.

// Dado para resolucao:
const buscarUsuario = (email) => {
	return new Promise((resolve, reject) => {
		if (email === "admin@email.com") resolve({ id: 1, nome: "Admin" });
		else reject("Utilizador nao encontrado!");
	});
};

buscarUsuario("admin@email.com")
	.then((user) => {
		console.log("Bem-vindo " + user.nome);
	})
	.catch((erro) => {
		console.error(erro);
	});

buscarUsuario("teste@email.com")
	.then((user) => {
		console.log("Bem-vindo " + user.nome);
	})
	.catch((erro) => {
		console.error(erro);
	});

