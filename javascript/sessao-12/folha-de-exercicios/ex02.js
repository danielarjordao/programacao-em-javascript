// EXERCÍCIO:
// 1. No primeiro .then, multiplica todos os números por 2.
// 2. No segundo .then, calcula a média e retorna-a.
// 3. No último .then, imprime: "A média final é X".

const apiNumeros = () => Promise.resolve([10, 20, 30]);

apiNumeros()
  .then((numeros) => {
    return numeros.map((num) => {
      return num * 2;
    });
  })
  .then((numerosDobrados) => {
    const soma = numerosDobrados.reduce((total, numeroDobrado) => total + numeroDobrado, 0);
    const media = soma / numerosDobrados.length;
    return media;
  })
  .then((media) => {
    console.log(`A média final é ${media}`);
  });

console.log("Processando os números...");
