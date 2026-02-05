// Você está implementando um sistema de controle de acessos.
// Cada usuário deve ter um contador próprio de tentativas.

// Desafio
// Complete a função criarControleDeAcesso
// Cada usuário deve manter seu próprio contador
// O contador não pode ser acessado diretamente

function criarControleDeAcesso(nomeUsuario) {
  let tentativas = 0;

  return function () {
    tentativas++;
    console.log(`${nomeUsuario} - tentativa ${tentativas}`);
  };
}

const acessoJoao = criarControleDeAcesso("João");
const acessoMaria = criarControleDeAcesso("Maria");

acessoJoao(); // João - tentativa 1
acessoJoao(); // João - tentativa 2

acessoMaria(); // Maria - tentativa 1
acessoMaria(); // Maria - tentativa 2
