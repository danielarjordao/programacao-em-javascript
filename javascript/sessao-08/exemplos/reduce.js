// O reduce pode ser usado como método de acumulo de preços

const precos = [10,20,30];

const totalCarrinho = precos.reduce(function (acumulado, valorAtual) {
    return acumulado + valorAtual;
});

console.log(`O total da compra será de: ${totalCarrinho}`)


// Exercicio: Em base do indice acumulado de preços mensais (inflação) abaixo:
// inflação mensal = [0.9, 0.1, 0.2, 1.2, -0.87, -0.32, 0.2, 0.95, 0.3, 0.12, 0.17, 0.76]
// Calcule a inflação acumulada em 12 meses.