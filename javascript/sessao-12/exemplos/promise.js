function falaDepoisDe(segundos, frase) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(frase)
		}, segundos * 1000)
	})
}

const outraFrase = "Outra frase";

falaDepoisDe(2, 'Que legal!')
	.then(frase => frase.concat('?!?'))
	.then(outraFrase => console.log(outraFrase))
