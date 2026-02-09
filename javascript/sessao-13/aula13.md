# Aula 13

## Async/Await

A sintaxe `async/await` é uma forma mais elegante e legível de lidar com operações assíncronas em JavaScript. Ela é construída sobre Promises e permite que você escreva código assíncrono de maneira mais síncrona, facilitando a leitura e manutenção do código.

### Async

A palavra-chave `async` é usada para declarar uma função assíncrona. Uma função marcada como `async` sempre retorna uma Promise. Se a função retornar um valor, a Promise será resolvida com esse valor. Se a função lançar um erro, a Promise será rejeitada com esse erro.

```javascript
async function minhaFuncao() {
 return "Olá, mundo!";
}
minhaFuncao().then(resultado => console.log(resultado)); // Output: "Olá, mundo!"
```

### Await

A palavra-chave `await` é usada dentro de uma função marcada como `async` para esperar por uma Promise ser resolvida ou rejeitada. O código que segue o `await` só será executado depois que a Promise for resolvida.

```javascript
async function minhaFuncao() {
 const resultado = await minhaPromise();
 console.log(resultado);
}
minhaFuncao();
```

### Vantagens do Async/Await

1. **Legibilidade**: O código assíncrono escrito com `async/await` é mais fácil de ler e entender, pois se assemelha ao código síncrono tradicional.

2. **Tratamento de erros**: O tratamento de erros com `async/await` é mais simples, pois você pode usar blocos `try/catch` para capturar erros, em vez de lidar com rejeições de Promises.

3. **Depuração**: O código assíncrono com `async/await` é mais fácil de depurar, pois as pilhas de chamadas são mais claras e os erros são lançados como exceções normais.

## Fetch API

A Fetch API é uma interface moderna para fazer requisições HTTP em JavaScript. Ela é baseada em Promises e é mais fácil de usar do que as antigas XMLHttpRequest.

- **Requisições HTTP**: Você pode usar a Fetch API para fazer requisições GET, POST, PUT, DELETE, etc.

- **Baseada em Promises**: A Fetch API retorna uma Promise que resolve para a resposta da requisição, permitindo um código mais limpo e fácil de ler.

- **Conversão para JSON também é assíncrona**: O método `response.json()` retorna uma Promise.

- **Suporte a CORS**: A Fetch API suporta Cross-Origin Resource Sharing (CORS), permitindo que você faça requisições para domínios diferentes do seu.

### Estrutura básica

```javascript
fetch('https://api.exemplo.com/dados')
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.error('Erro:', error));
```

## Sintaxe com Async/Await e Fetch API

```javascript
async function obterDados() {
 try {
   const response = await fetch('https://api.exemplo.com/dados');
   const dados = await response.json();
   console.log(dados);
 } catch (error) {
   console.error('Erro:', error);
 }
}
obterDados();
```

Neste exemplo, a função `obterDados` é marcada como `async`, permitindo o uso de `await` para esperar pela resposta da requisição e pela conversão dos dados para JSON. O bloco `try/catch` é usado para capturar qualquer erro que possa ocorrer durante a requisição ou o processamento dos dados.

## GET

A requisição GET é usada para solicitar dados de um servidor, sem modificar o estado do recurso. Ela é a forma mais comum de fazer requisições HTTP e é frequentemente usada para obter informações de APIs. A Fetch API facilita a realização de requisições GET, permitindo que você obtenha dados de forma simples e eficiente.

### Fluxo de uma requisição GET

1. **Início da requisição**: O cliente (navegador ou aplicação) inicia uma requisição GET para um endpoint específico usando a Fetch API ou outra biblioteca.

2. **Envio da requisição**: O cliente envia a requisição GET ao servidor com o método HTTP e a URL do recurso solicitado.

3. **Processamento no servidor**: O servidor recebe a requisição, processa-a e prepara os dados solicitados.

4. **Resposta do servidor**: O servidor envia uma resposta para o cliente. A resposta geralmente inclui um status HTTP (como 200 OK) e os dados solicitados, que podem estar no formato JSON, XML ou outro.

5. **Cliente recebe a resposta**: O cliente recebe a resposta do servidor e pode processá-la localmente ou usá-la para atualizar a interface do usuário.

## JSON

JSON (JavaScript Object Notation) é um formato leve de troca de dados, fácil de ler e escrever para humanos, e fácil de analisar e gerar para máquinas. Ele é amplamente utilizado para transmitir dados entre um servidor e uma aplicação web como texto.

### Estrutura do JSON

```json
{
 "nome": "Ana",
 "idade": 30,
 "ativo": true
}
```

### Objeto x JSON

Um objeto JavaScript é uma coleção de propriedades, onde cada propriedade é uma chave-valor. Já o JSON é uma string que representa um objeto JavaScript.

- **JSON.stringify()**: Converte um objeto JavaScript em uma string JSON.

- **JSON.parse()**: Converte uma string JSON em um objeto JavaScript.

- JSON usa apenas aspas duplas em chaves e valores de texto.
- JSON não aceita funções ou comentários.

```javascript
const pessoa = {
 nome: "Ana",
 idade: 30,
 ativo: true,
};
const json = JSON.stringify(pessoa);
console.log(json); // Output: {"nome":"Ana","idade":30,"ativo":true}
const objeto = JSON.parse(json);
console.log(objeto); // Output: { nome: 'Ana', idade: 30, ativo: true }
```

### Fluxo de dados com JSON

1. **Criação do objeto**: O desenvolvedor cria um objeto JavaScript com os dados que deseja transmitir.

2. **Conversão para JSON**: O objeto JavaScript é convertido em uma string JSON usando a função `JSON.stringify()`.

3. **Envio da string JSON**: A string JSON é enviada para o servidor ou para outra aplicação, geralmente através de uma requisição HTTP.

4. **Recebimento e processamento**: A string JSON é recebida pelo destinatário, que pode ser um servidor ou outra aplicação. O destinatário pode então converter a string JSON de volta para um objeto JavaScript usando a função `JSON.parse()`.

5. **Uso dos dados**: O destinatário pode usar os dados do objeto JavaScript para realizar operações, atualizar a interface do usuário ou armazenar informações.

## Tratamento de erros em requisições

O tratamento de erros em requisições é essencial para garantir que sua aplicação possa lidar com situações inesperadas, como falhas de rede, respostas inválidas ou erros do servidor. Com a Fetch API e a sintaxe `async/await`, o tratamento de erros pode ser feito de maneira simples e eficaz usando blocos `try/catch`.

- **Erro de rede**: Se a requisição falhar devido a problemas de conexão, o erro será capturado no bloco `catch`.

- **Erro do servidor**: Se o servidor retornar um status de erro (como 404 ou 500), você pode verificar o status da resposta e lançar um erro personalizado.

- **Endereço inválido**: Se a URL da requisição estiver incorreta, isso também resultará em um erro que pode ser capturado.

- **Resposta inválida**: Se a resposta do servidor não puder ser processada (por exemplo, se o JSON estiver malformado), isso também pode ser tratado como um erro.

Observação: o `fetch` só rejeita a Promise em erros de rede. Respostas HTTP com erro (como 404 ou 500) não geram rejeição por si só e precisam de verificação manual com `response.ok`.

### O problema sem tratamento

Quando não há tratamento de erros, uma falha na requisição pode causar o colapso da aplicação ou deixar o usuário sem feedback sobre o que aconteceu. Isso pode resultar em uma experiência de usuário ruim e dificultar a identificação do problema.

### Sintaxe com tratamento de erros

```javascript
async function obterDados() {
 try {
   const response = await fetch('https://api.exemplo.com/dados');
   if (!response.ok) {
	 throw new Error(`Erro do servidor: ${response.status}`);
   }
   const dados = await response.json();
   console.log(dados);
 } catch (error) {
   console.error('Erro:', error);
 } finally {
  console.log('Requisição finalizada.');
 }
}
obterDados();
```

- **response.ok**: Verifica se a resposta do servidor foi bem-sucedida (status HTTP 200-299). Se não for, um erro personalizado é lançado.
- **response.status**: Fornece o código de status HTTP da resposta, que pode ser útil para identificar o tipo de erro ocorrido.
- **finally**: Executa sempre, com sucesso ou erro, e é útil para limpar estados ou atualizar a interface.

Neste exemplo, a função `obterDados` é marcada como `async`, permitindo o uso de `await` para esperar pela resposta da requisição e pela conversão dos dados para JSON. O bloco `try/catch` é usado para capturar qualquer erro que possa ocorrer durante a requisição ou o processamento dos dados. Se a resposta do servidor não for bem-sucedida (status diferente de 200-299), um erro personalizado é lançado, que será capturado no bloco `catch`.
