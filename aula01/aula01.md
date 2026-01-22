# Aula 01

## Apresentação do Professor

Nome: Jackson Barreto
Email: jjunior@ipca.pt
www.jacksonbarreto.com

## Apresentação da Disciplina

Nome: Programação em Javascript

### Módulos
- Modulo 1 - Fundamentos Web
- Modulo 2 - Fundamentos JavaScript
- Modulo 3 - Engenharia de Software
- Modulo 4 - Serviços Web
- Modulo 5 - Fundamentos Typescript
- Modulo 6 - Fundamentos Angular
- Modulo 7 - Projeto Final

### Avaliação
- Exercícios Práticos - 30%
- Projeto Individual - 40%
- Teste teórico - 30%

### Cronograma
- Inicio: 22 de Janeiro de 2026
- Teste: 25 de Fevereiro de 2026
- Realização do Projeto: 5 a 6 de Março de 2026
- Término: 9 de Março de 2026

## Módulo 1 - Fundamentos Web

### Apresentação

Professor: Rodrigo Costa
Email: rodrigo.costa@innominatum.pt

### Objetivos

- Compreender os conceitos fundamentais da web
- Aprender a estruturar páginas web utilizando HTML5
- Estilizar páginas web com CSS3

### Conteúdos

- Sessão 1: Ambiente, Ferramentas e Introdução ao git e GitHub
- Sessão 2: HTML5 - Estrutura e Elementos Básicos
- Sessão 3: HTML5 - Formulários e Elementos Avançados
- Sessão 4: CSS3 - Seletores, Propriedades e Box Model

## Sessão 1

### Objetivo Geral

Compreender o ambiente de desenvolvimento web, as ferramentas essenciais e os conceitos básicos de controle de versão com git e GitHub.

### Ambiente de Desenvolvimento

Ambiente de desenvolvimento web refere-se ao conjunto de ferramentas e tecnologias utilizadas para criar, testar e manter sites e aplicações web. Isso inclui editores de código, navegadores, servidores locais e sistemas de controle de versão.

### VsCode

#### Extensões Recomendadas

- Live Server
- Prettier
- ESLint

### Terminal Integrado

O terminal integrado no VSCode permite executar comandos diretamente dentro do editor, facilitando o fluxo de trabalho sem a necessidade de alternar entre janelas.

#### Principais Funcionalidades

- Acesso rápido ao terminal
- Suporte a múltiplos terminais
- Integração com o sistema operacional

#### Vantagens do Terminal Integrado

- Conveniência
- Eficiência
- Personalização

#### Utilização Básica

- Abrir o terminal: `Ctrl + `` (acento grave)
- Executar comandos: Digitar comandos diretamente no terminal
- Navegar entre terminais: `Ctrl + Shift + ` (acento grave)

#### Comandos Úteis

- `ls` / `dir`: Listar arquivos e diretórios
- `cd`: Mudar de diretório
  - `cd ..`: Voltar ao diretório anterior
  - `cd nome_do_diretorio`: Entrar em um diretório específico
  - `cd ~`: Ir para o diretório home
  - `cd -`: Voltar ao diretório anterior
- `mkdir`: Criar um novo diretório
  - `mkdir -p nome_do_diretorio`: Criar diretórios pai conforme necessário
- `rm`: Remover arquivos ou diretórios
- `pwd`: Mostrar o diretório atual
- `clear`: Limpar o terminal
- `touch`: Criar um novo arquivo vazio
- `nano`: Abrir o editor de texto nano

#### Conceitos Básicos

- Caminho Absoluto: Caminho completo desde a raiz do sistema de arquivos.
- Caminho Relativo: Caminho em relação ao diretório atual.
- Diretório Home: Diretório principal do usuário.
- Root: Diretório raiz do sistema de arquivos.

### Introdução ao Git e GitHub

Git é um sistema de controle de versão distribuído que permite rastrear mudanças em arquivos e coordenar o trabalho em projetos entre várias pessoas. GitHub é uma plataforma baseada na web que hospeda repositórios Git, facilitando a colaboração e o compartilhamento de código.

#### Versionamento de Código

O versionamento de código é o processo de gerenciar mudanças em arquivos de código-fonte ao longo do tempo. Ele permite que os desenvolvedores acompanhem alterações, revertam para versões anteriores e colaborem com outros desenvolvedores de forma eficiente.

No ambiente de desenvolvimento web, o versionamento de código é essencial para manter a integridade do projeto, facilitar a colaboração em equipe e garantir que todas as alterações sejam documentadas e rastreáveis.

#### Como funciona o Git

O Git funciona através de um sistema de snapshots, onde cada commit representa uma captura do estado do projeto em um determinado momento. Os desenvolvedores podem criar branches para trabalhar em funcionalidades isoladas, fazer commits para salvar mudanças e mesclar branches quando estiverem prontos para integrar as alterações ao projeto principal.
Por traz disso, o Git permite um fluxo de trabalho eficiente e colaborativo, facilitando o desenvolvimento de software em equipe.

#### Github

GitHub é uma plataforma de hospedagem de código-fonte que utiliza o sistema de controle de versão Git. Ele oferece uma interface web para gerenciar repositórios, colaborar com outros desenvolvedores e acompanhar o progresso do projeto.

#### Repositórios

Um repositório é um local onde o código-fonte e o histórico de versões de um projeto são armazenados. No GitHub, os repositórios podem ser públicos ou privados, permitindo que os desenvolvedores compartilhem seu trabalho com a comunidade ou mantenham-no restrito a colaboradores específicos.

#### Conceitos Importantes

##### Commit

O commit é uma operação no Git que salva as mudanças feitas nos arquivos do projeto. Cada commit cria um snapshot do estado atual do código, permitindo que os desenvolvedores rastreiem o histórico de alterações e revertam para versões anteriores, se necessário.

##### Log

O log é um comando no Git que exibe o histórico de commits de um repositório. Ele fornece informações detalhadas sobre cada commit, incluindo o autor, a data e a mensagem associada, permitindo que os desenvolvedores acompanhem as mudanças feitas ao longo do tempo.

##### Branch

Uma branch (ramo) no Git é uma linha paralela de desenvolvimento que permite aos desenvolvedores trabalhar em funcionalidades ou correções de bugs isoladamente, sem afetar o código principal. As branches facilitam a colaboração e o gerenciamento de diferentes versões do projeto.

#### Comandos Básicos do Git

- `git init`: Inicializa um novo repositório Git
- `git clone [url]`: Clona um repositório remoto para o local
- `git status`: Verifica o status dos arquivos no repositório
- `git add [arquivo]`: Adiciona arquivos ao stage para o próximo commit
   - `git add .`: Adiciona todos os arquivos modificados ao stage
- `git commit -m "mensagem"`: Cria um commit com uma mensagem descritiva
- `git push`: Envia os commits locais para o repositório remoto
- `git pull`: Puxa as últimas mudanças do repositório remoto para o local
- `git branch`: Lista, cria ou deleta branches
- `git checkout [branch]`: Muda para a branch especificada
   - `git checkout -b [branch]`: Cria e muda para uma nova branch
- `git merge [branch]`: Mescla a branch especificada na branch atual
- `git log`: Exibe o histórico de commits do repositóriozx
