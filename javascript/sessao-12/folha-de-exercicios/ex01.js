// EXERCÍCIO: Encadeia as luzes para que:
// 1. Ligue o Verde (2s) -> 2. Ligue o Amarelo (1s) -> 3. Ligue o Vermelho (2s)
const ligarLuz = (cor, tempo) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(`Luz ${cor} ligada!`);
            resolve();
        }, tempo);
    });
};

ligarLuz("VERDE    ", 2000)
	.then(() => ligarLuz("AMARELO  ", 1000))
	.then(() => ligarLuz("VERMELHO ", 2000));

