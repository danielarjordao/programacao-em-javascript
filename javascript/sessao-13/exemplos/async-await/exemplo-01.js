function esperar() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Terminou");
        }, 1000)
    });
};

async function executar() {
    console.log("Antes");
    const resultado = await esperar();
    console.log(resultado);
    console.log("Depois");
};

executar();


// Como seria com a promise tradicional
esperar()
    .then(() => {
        console.log("Antes");
        return esperar();
    })
    .then((resultado) => {
        console.log(resultado);
    })
    .then(() => {
        console.log("Depois");
    });