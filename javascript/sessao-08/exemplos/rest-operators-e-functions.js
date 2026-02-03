// Com o rest operators a função passa aceitar qualquer número de argumentos (vira um array);

// O '...itens' recolhe tudo o que sobra e mete num Array
function criarEncomenda(cliente, ...itens) {
    console.log(`Preparando envio para: ${cliente}`);
    console.log(`Conteúdo: ${itens.join(", ")}`);
    console.log(`Total de produtos: ${itens.length}`);
}

// O utilizador pode passar quantos argumentos quiser
criarEncomenda("Rodrigo", "Camisa", "Short");
criarEncomenda("Maria", "Sapatilhas", "Meias", "Boné", "Luvas");

const ferramentas = ["Portátil", "Rato", "Carregador Portátil", "baterias"];

const [, , ...kitEnergia] = ferramentas;

const alguns = [ferramentas[2], ferramentas[3]];

criarEncomenda("Rodrigo", ...ferramentas);
criarEncomenda("Rodrigo2", ...kitEnergia);
criarEncomenda("Rodrigo3", ...alguns);
