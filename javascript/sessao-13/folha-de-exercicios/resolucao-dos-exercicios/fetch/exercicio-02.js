// Exercício 2: Reescreva o exercício anterior utilizando async/await.
// Exercício 1: Faça uma requisição GET usando fetch para:
// https://jsonplaceholder.typicode.com/users

// 01. Criamos uma função assincrona para coletar os dados
async function getUsers() {
    // usaremos o try catch para tratar os erros
    try {
        // 02. Novamente precisamos usar o método fetch para coletar os dados
        const request = await fetch('https://jsonplaceholder.typicode.com/users');
        // 03. Verificamos se a resposta foi bem sucedida
        if (!request.ok) {
            //04. Caso não seja bem sucedida, lançamos uma exceção.
            throw new Error(`Erro HTTP: ${request.status}`)
        }
        // 04. Não podemos esquecer do await pois são dados vindo de uma api
        // e também de convertermos a resposta para JSON
        const users = await request.json();
        // retornamos users;
        return users;
    } catch(error){
        // 05.Tratamos erros de rede, de parse ou etc aqui 
        console.error('Erro ao buscar utilizadores: ', error);
        // 06. propagamos o erro para quem chamou a função
        throw error;
    };
};

// Vamos agora usar a nossa função novamente utilizando 
// o async visto que vamos consumir dados de uma função
// assincrona

async function dadosColetados() {
    // 07. Usamos o bloco try para proteger nossa requisição
    try {
        // 08. salvaremos os dados coletados da função 
        // getUsers dentro de uma constante users.
        const users = await getUsers();
        console.log(users);
    } catch (error) {
        console.error("Falha ao obter dados: ", error);
    }
}

dadosColetados();
