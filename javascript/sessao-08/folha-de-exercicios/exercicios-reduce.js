// Exercicio: Em base do indice acumulado de preços mensais (inflação) abaixo:
// inflação mensal = [0.9, 0.1, 0.2, 1.2, -0.87, -0.32, 0.2, 0.95, 0.3, 0.12, 0.17, 0.76]
// Calcule a inflação acumulada em 12 meses.

const inflacaoMensal = [0.9, 0.1, 0.2, 1.2, -0.87, -0.32, 0.2, 0.95, 0.3, 0.12, 0.17, 0.76];

const inflacaoAcumulada = inflacaoMensal.reduce( (inflacaoAcumulada, inflacaoMes) => inflacaoAcumulada + inflacaoMes );

console.log(`A inflação acumulada em dezembro de 2025: ${inflacaoAcumulada.toLocaleString('pt-BR')}%`);