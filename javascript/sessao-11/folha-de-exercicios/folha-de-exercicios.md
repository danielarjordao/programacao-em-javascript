#  Sessão 11 (05/02/2026) – Módulo 02 – Fundamentos JavaScript – Aula 07 – scope & closures

## Questão 1 – Call Stack

### O que é a Call Stack no JavaScript?

**Opção correta**:
Uma estrutura de dados que controla a ordem de execução das funções chamadas.

**Explicação**:
A Call Stack é uma pilha LIFO (Last In, First Out) que o Java Script usa para gerenciar a execução das funções. Quando uma função é chamada, um novo contexto de execução é criado e empilhado na Call Stack. Quando a função termina, seu contexto é desempilhado. Se a pilha crescer demais (ex.: recursão sem base), ocorre um stack overflow.

## Questão 2 – Memory Heap

### Sobre o Memory Heap, assinale a alternativa correta

**Opção correta**:
Armazena objetos, funções e dados alocados dinamicamente na memória.

**Explicação**:
O Memory Heap é a região da memória onde o JavaScript armazena objetos, funções e outros dados alocados dinamicamente. O garbage collector do JavaScript gerencia essa memória automaticamente, liberando espaço quando os objetos não são mais referenciados.

## Questão 3 – Relação entre Call Stack e Memory Heap

### Qual afirmação descreve corretamente a relação entre Call Stack e Memory Heap?

**Opção correta**:
A Call Stack controla a execução, enquanto o Heap armazena dados na memória.

**Explicação**:
A Call Stack é responsável por controlar a ordem de execução das funções, enquanto o Memory Heap é onde os objetos e dados dinâmicos são armazenados. O JavaScript gerencia ambos para garantir que o código seja executado corretamente e que a memória seja utilizada de forma eficiente.

## Questão 4 – Escopo Global

### O que caracteriza o escopo global em JavaScript?

**Opção correta**:
Variáveis acessíveis em qualquer parte do código.

**Explicação**:
O escopo global é o contexto de execução mais externo, onde as variáveis e funções declaradas são acessíveis de qualquer parte do código. Variáveis globais podem ser acessadas e modificadas por qualquer função ou bloco, o que pode levar a problemas de manutenção e bugs se não forem usadas com cuidado.

## Questão 5 – Escopo Local (Função)

### Sobre o escopo local, é correto afirmar que

**Opção correta**:
Variáveis locais existem apenas dentro da função onde foram declaradas.

**Explicação**:
O escopo local é criado quando uma função é chamada. Variáveis declaradas dentro de uma função só são acessíveis dentro dessa função e não podem ser acessadas de fora. Isso ajuda a encapsular dados e evitar conflitos com variáveis globais.

## Questão 6 – Escopo Léxico

### O que significa dizer que JavaScript possui escopo léxico?

**Opção correta**:
 O escopo é determinado pela posição do código no arquivo.

**Explicação**:
O escopo léxico significa que o acesso às variáveis é determinado pela estrutura do código. Variáveis declaradas em um escopo externo estão disponíveis para os escopos internos, mas não o contrário. Isso permite que funções internas acessem variáveis de seus escopos externos, criando uma cadeia de escopo (scope chain).

## Questão 7 – Escopo Léxico (aplicação prática)

### Em JavaScript, uma função consegue acessar variáveis externas porque

**Opção correta**:
O escopo léxico permite acesso ao escopo onde a função foi definida.

**Explicação**:
Devido ao escopo léxico, uma função tem acesso às variáveis do escopo onde foi definida, mesmo que seja chamada em um contexto diferente. Isso é fundamental para o conceito de closures, onde uma função pode "lembrar" do ambiente em que foi criada e acessar suas variáveis mesmo após o contexto externo ter sido removido da Call Stack.

## Questão 8 – Closure

### O que é uma closure?

**Opção correta**:
Uma função que lembra do escopo onde foi criada, mesmo após esse escopo ter sido
encerrado.

**Explicação**:
Uma closure é uma função que mantém acesso ao escopo externo onde foi criada, mesmo depois que esse escopo foi removido da Call Stack. Isso permite que a função acesse e manipule variáveis do escopo externo, o que é útil para encapsular estado e criar funções com comportamento personalizado.

## Questão 9 – Closure (condição para existir)

### Uma closure ocorre quando

**Opção correta**:
Uma função retorna outra função que utiliza variáveis do escopo externo.

**Explicação**:
Uma closure ocorre quando uma função retorna outra função que faz referência a variáveis do escopo externo da função externa. Isso permite que a função interna acessível a essas variáveis mesmo após a função externa ter sido executada, criando um ambiente onde o estado pode ser mantido e manipulado.

## Questão 10 – Closure e Memória

### Por que variáveis de uma closure não são removidas da memória?

**Opção correta**:
Porque ainda existem referências ativas a essas variáveis.

**Explicação**:
As variáveis de uma closure não são removidas da memória porque a função interna mantém referências ativas a essas variáveis. O garbage collector do JavaScript só libera memória de variáveis que não têm mais referências ativas. Enquanto a função interna (closure) existir e fizer referência a essas variáveis, elas permanecerão na memória, permitindo que a closure funcione corretamente.



