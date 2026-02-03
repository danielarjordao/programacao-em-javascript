// Exercicio: dado o seguinte conjunto de dados:
// notas = [7.5, 8.0, 6.5, 9.0, 5.5];
// media = 7.3;
// Usando o forEach, verifique e retorne quais notas estão acima da média e sua posição no array.

const notas = [7.5, 8.0, 6.5, 9.0, 5.5];
const media = 7.3;

notas.forEach(function(nota, index) {
    if (nota > media) {
        console.log("Média: ", media ,"Index: ",index, 'Nota: ', nota)
    } 
})