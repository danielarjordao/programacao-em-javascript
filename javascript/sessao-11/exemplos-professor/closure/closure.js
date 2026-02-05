// Uma closure é quando uma função "lembra"
// do seu escopo léxico, mesmo quando 
// a função é executada fora desse escopo léxico.
// Escopo léxico é o local onde a função foi declarada ou definida.

function contador() {
// A variável 'count' está no escopo léxico da função 'contador'
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
} // Fim da função 'contador' seu contexto da execução termina aqui

// Quando chamamos 'contador', ela retorna uma função
// que mantém uma referência ao escopo léxico onde 'count' foi declarado.
const incrementar = contador(); // aqui 'incrementar' é a função retornada
//  por 'contador' não é criada a função 'contador' novamente,
// mas sim a função interna que foi retornada por 'contador'.

// Mesmo que estejamos chamando 'incrementar' fora do escopo de 'contador',
// ela ainda tem acesso à variável 'count' devido à closure. A closure lembra de onde ela foi criada, 
// e busca 'count' naquele escopo léxico.
incrementar(); 
incrementar(); 
incrementar(); 
