# Aula 12

## Assincronismo x Síncronismo

### Sincronismo

Ser síncrono significa que o código é executado de forma sequencial, ou seja, cada linha de código é executada apenas após a linha anterior ter sido concluída. Se uma operação demorar muito tempo para ser concluída, o restante do código ficará bloqueado até que essa operação termine.

#### Problemas do Sincronismo

O principal problema do sincronismo é que ele pode levar a bloqueios na execução do código, especialmente quando se trata de operações que envolvem I/O (entrada/saída), como leitura de arquivos, requisições de rede, ou acesso a bancos de dados. Isso pode resultar em uma experiência de usuário ruim, já que o aplicativo pode parecer travado ou lento.

### Assincronismo

O assincronismo, por outro lado, permite que o código inicie uma operação e continue executando outras tarefas enquanto espera a operação ser concluída. Isso é especialmente útil para operações que podem levar um tempo significativo para serem concluídas, como requisições de rede ou leitura de arquivos.

#### Vantagens do Assincronismo

- Melhora a performance e a responsividade do aplicativo, já que o código não fica bloqueado esperando por operações demoradas.
- Permite a execução de múltiplas operações simultaneamente, o que pode ser especialmente útil em aplicações web, onde várias requisições podem ser feitas ao mesmo tempo.

### Fluxo de Execução do Código JavaScript

O JavaScript é uma linguagem de programação single-threaded, o que significa que ele tem um único fluxo de execução. No entanto, ele pode lidar com operações assíncronas através do uso de callbacks, Promises e async/await.

#### Onde ocorrem as operações assíncronas?

- Requisições externas (APIs): Buscar dados de um servidor.
- Interações com o sistema de arquivos: Ler ou escrever arquivos.
- Temporizadores: Usar `setTimeout` ou `setInterval` para agendar tarefas.
- Eventos: Responder a eventos do usuário, como cliques ou digitação.

### Resumo

- **Sincronismo**: O código é executado de forma sequencial, e cada operação deve ser concluída antes que a próxima seja iniciada. Pode levar a bloqueios se uma operação demorar muito tempo para ser concluída.
- **Assincronismo**: O código pode iniciar uma operação e continuar executando outras tarefas enquanto espera a operação ser concluída. Melhora a performance e a responsividade do aplicativo, evitando bloqueios.

## O agendador do JS - setTimeOut()

O `setTimeout()` é uma função do JavaScript que permite agendar a execucao de uma funcao (callback) depois de um tempo em milissegundos. Ele e parte do ambiente de execucao (browser ou Node.js) e nao da linguagem em si. Serve para criar atrasos e iniciar tarefas assincronas sem bloquear o restante do codigo.

### Sintaxe

```javascript
setTimeout(funcao, tempo);
```

### Como funciona

- O tempo e um atraso minimo. A execucao nao acontece exatamente no milissegundo marcado.
- Quando o tempo termina, o callback entra na fila de tarefas. Ele so roda quando a pilha de execucao estiver vazia.
- Se o thread principal estiver ocupado, o callback pode atrasar ainda mais.
- A funcao retorna um id (numero). Esse id pode ser usado em `clearTimeout(id)` para cancelar o agendamento.

## A orquestra do assincronismo - Event Loop

O Event Loop e o mecanismo que permite ao JavaScript lidar com operacoes assincronas. Ele monitora a pilha de execucao e a fila de tarefas, garantindo que as funcoes sejam executadas na ordem correta.

- **Call Stack (pilha)**: onde o codigo sincrono roda agora. Funciona em LIFO (ultimo a entrar, primeiro a sair).
- **Web APIs**: o ambiente (browser/Node) executa tarefas que o JS nao faz sozinho (timers, rede, eventos).
- **Callback Queue (fila)**: callbacks prontos ficam aguardando em FIFO (primeiro a entrar, primeiro a sair).
- **Event Loop**: move callbacks da fila para a pilha apenas quando a pilha esta vazia.

## Callbacks: Nem tudo que vai, volta

Callbacks sao funcoes passadas como argumento para outras funcoes, que serao chamadas quando a operacao assincrona for concluida. Eles sao uma maneira de lidar com o assincronismo, mas podem levar a problemas como o "callback hell" (aninhamento excessivo de callbacks) e dificultar a leitura e manutencao do codigo.

Mito comum: "toda callback e assincrona". Isso nao e verdade. Depende de quem executa a funcao.

- **Callbacks síncronos**: executados imediatamente, como em `Array.prototype.forEach()`.
- **Callbacks assíncronos**: executados após uma operação assíncrona, como `setTimeout()`.

### Callback Hell

O "callback hell" ocorre quando temos muitos callbacks aninhados, o que pode tornar o código difícil de ler e manter. Isso é especialmente comum em operações assíncronas complexas.

## Promises: O futuro do assincronismo

- **Definição**: Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.
- **Contrato**: Uma Promise tem três estados: `pending` (pendente), `fulfilled` (cumprida) e `rejected` (rejeitada).
- **Estados**:
	- `pending`: A operação ainda não foi concluída.
	- `fulfilled`: A operação foi concluída com sucesso, e a Promise tem um valor.
	- `rejected`: A operação falhou, e a Promise tem um motivo (erro).
- **Encadeamento**: Promises permitem encadear operações assíncronas usando os métodos `.then()` e `.catch()`, o que ajuda a evitar o callback hell e torna o código mais legível.

### Promise x Callback

- Promises facilitam o encadeamento e reduzem o aninhamento (codigo cresce para baixo, nao para a direita).
- O tratamento de erro fica centralizado com `.catch()`.

### Sintaxe básica

```javascript
const minhaPromise = new Promise((resolve, reject) => {
  // Simulando uma operação assíncrona
  setTimeout(() => {
	const sucesso = true; // ou false para simular falha
	if (sucesso) {
	  resolve("Operação bem-sucedida!");
	} else {
	  reject("Ocorreu um erro.");
	}
  }, 1000);
});

minhaPromise.then((resultado) => {
  console.log(resultado);
}).catch((erro) => {
  console.error(erro);
});
```

## Try, Catch e Finally

O `try...catch` é uma estrutura de controle que permite lidar com erros de forma mais elegante. O código dentro do bloco `try` é executado normalmente, mas se ocorrer um erro, a execução é interrompida e o controle é passado para o bloco `catch`, onde o erro pode ser tratado. O bloco `finally` é opcional e é executado independentemente de um erro ter ocorrido ou não, sendo útil para liberar recursos ou realizar ações de limpeza.

Em codigo assincrono com Promises, o `.catch()` cumpre um papel similar ao `catch`. Com `async/await`, o `try...catch` volta a funcionar porque o erro e propagado pela Promise.

- **try**: Contém o código que pode gerar um erro.
- **catch**: Captura e trata o erro gerado no bloco `try`.
- **finally**: Executa código que deve ser executado independentemente do resultado do `try` e `catch`.

### Sintaxe

```javascript
try {
  // Código que pode gerar um erro
} catch (erro) {
  // Código para lidar com o erro
} finally {
  // Código que será executado independentemente do resultado
}
```
