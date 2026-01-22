# Aula 01

## Apresentação da disciplina

Nome: Programação em Javascript
Coordenador: Jackson Barreto
Email: [jjunior@ipca.pt](mailto:jjunior@ipca.pt)
Site: [www.jacksonbarreto.com](http://www.jacksonbarreto.com)

## Módulos

- Modulo 1 - Fundamentos Web
- Modulo 2 - Fundamentos JavaScript
- Modulo 3 - Engenharia de Software
- Modulo 4 - Serviços Web
- Modulo 5 - Fundamentos Typescript
- Modulo 6 - Fundamentos Angular
- Modulo 7 - Projeto Final

## Avaliação

- Exercícios Práticos - 30%
- Projeto Individual - 40%
- Teste teórico - 30%

## Cronograma

- Inicio: 22 de Janeiro de 2026
- Teste: 25 de Fevereiro de 2026
- Realização do Projeto: 5 a 6 de Março de 2026
- Término: 9 de Março de 2026

## Módulo 1 - Fundamentos Web

### Professor

Rodrigo Costa
Email: [rodrigo.costa@innominatum.pt](mailto:rodrigo.costa@innominatum.pt)

### Sobre o módulo

Vamos aprender os fundamentos do desenvolvimento web: como organizar projetos, usar o terminal, versionar código com Git e GitHub, e os primeiros passos em HTML5 e CSS3, com foco em semântica, acessibilidade e layout responsivo.

### O que você vai aprender

- Usar o terminal para criar, navegar e organizar pastas e arquivos
- Conceitos essenciais de versionamento de código e repositório (Git e GitHub)
- Como versionar projetos, proteger seu trabalho e colaborar em equipe
- Fundamentos de HTML5 e CSS3

### Estrutura do módulo

1. Ambiente, Ferramentas e Introdução ao Git/GitHub
2. HTML5 Semântico e Acessível
3. Fundamentos de CSS3 e Flexbox
4. CSS Grid e Layout Final

## Sessão 1 – Ambiente, Ferramentas e Git/GitHub

**Objetivo geral:**
Compreender o ambiente de desenvolvimento web, as ferramentas essenciais e os conceitos básicos de controle de versão com Git e GitHub.

**Ao final, você será capaz de:**

- Navegar, criar e editar pastas/arquivos pelo terminal
- Instalar e configurar o Git
- Aplicar o fluxo básico de versionamento: init, add, commit, push e pull

### Ambiente de Desenvolvimento

O ambiente de desenvolvimento web reúne ferramentas como editor de código (VSCode), navegador, terminal e Git. Cada uma tem um papel importante para criar, testar e manter sites e aplicações.

### VSCode

O Visual Studio Code (VSCode) é um editor de código leve, poderoso e gratuito, com suporte a várias linguagens e muitas extensões.

**Dicas:**

- Use extensões como Live Server (para ver o site rodando), Prettier (para padronizar o código) e ESLint (para evitar erros de sintaxe).

### Terminal Integrado

O terminal do VSCode permite rodar comandos sem sair do editor. Você pode abrir com `Ctrl + `` (acento grave) e alternar entre terminais com `Ctrl + Shift + ``.

#### Comandos básicos do terminal

- `pwd`: mostra o caminho da pasta atual
- `ls` (Linux/macOS/Git Bash) ou `dir` (Windows): lista arquivos e pastas
- `cd <pasta>`: entra em uma pasta
  - `cd ..`: volta uma pasta
  - `cd ~`: vai para a pasta pessoal
- `mkdir nome`: cria uma nova pasta
- `touch nome`: cria um novo arquivo (Linux/macOS/Git Bash)
- `clear` (Linux/macOS/Git Bash) ou `cls` (Windows): limpa o terminal

**Conceitos importantes:**

- Caminho relativo depende da pasta atual; caminho absoluto começa na raiz do sistema.
- Símbolos úteis: `.` (diretório atual), `..` (diretório pai), `~` (home do usuário)
- Use pastas para organizar seus projetos e arquivos.
- Para editar arquivos rapidamente no terminal, use o comando `nano` (Linux/macOS/Git Bash).

### Git e GitHub – Conceitos Essenciais

- **Git**: sistema de controle de versão. Ele registra todas as mudanças feitas nos arquivos do projeto, permitindo voltar atrás, comparar versões e trabalhar em equipe sem perder nada.
- **GitHub**: plataforma online para hospedar repositórios Git, compartilhar código e colaborar com outras pessoas. O GitHub usa o Git por trás.
- **Repositório**: é a pasta do seu projeto monitorada pelo Git, com todo o histórico de alterações.

#### O que o Git faz na prática?

- Guarda versões do projeto (commits)
- Registra quem mudou o quê e quando
- Permite criar ramificações (branches) para testar ideias sem afetar o principal
- Facilita o trabalho em equipe e serve como backup inteligente

#### Diferença entre Git e GitHub

- Git é a ferramenta de versionamento local
- GitHub é o serviço online para guardar e compartilhar repositórios

#### Principais comandos do Git

- `git init`: começa o controle de versões em uma pasta
- `git status`: mostra o que mudou
- `git add .` ou `git add <arquivo>`: prepara arquivos para salvar
- `git commit -m "mensagem"`: salva uma nova versão
- `git push`: envia as versões para o GitHub
- `git pull`: traz as novidades do GitHub para seu computador
- `git branch`: lista as ramificações do projeto
- `git checkout -b nome`: cria e muda para uma nova ramificação
- `git checkout nome`: muda para uma ramificação existente
- `git merge nome`: junta ramificações
- `git log`: mostra o histórico de commits

#### Conceitos importantes

- **Commit**: cada vez que você salva uma versão do projeto, faz um commit. Ele guarda o estado dos arquivos, quem fez e quando.
- **Branch**: ramificação do projeto para desenvolver novas ideias sem mexer no principal. A principal geralmente se chama `main` (antigamente `master`).
- **Repositório local**: está no seu computador. **Repositório remoto**: está no GitHub.
- O Git não substitui o terminal: ele observa e registra as mudanças feitas nos arquivos e pastas.

#### Dicas

- Use mensagens claras nos commits (ex: `feat: adiciona página inicial`)
- Veja o histórico de commits com `git log` ou `git log --oneline`
- Pratique os comandos básicos até se sentir confortável
