const enviarEmail = function() {
	console.log("E-mail enviado: A sua encomenda foi confirmada!");
};

function processarEncomenda(valor, acaoFinal) {
	console.log(`A processar pagamento de ${valor}€...`);
	console.log("Pagamento aprovado com sucesso.");
	acaoFinal();
}

processarEncomenda(50, enviarEmail);
