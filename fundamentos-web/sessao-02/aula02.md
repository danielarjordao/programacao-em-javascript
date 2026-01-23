# Aula 02

## HTML

### O que é HTML?

HTML (HyperText Markup Language) é a linguagem de marcação padrão utilizada para criar e estruturar páginas na web.

**Observação:** HTML não é uma linguagem de programação, não possui lógica ou funcionalidades dinâmicas. Ele é usado apenas para estruturar o conteúdo.

### Para que serve o HTML?

O HTML serve para:

- Estruturar o conteúdo de páginas web.
- Definir elementos como títulos, parágrafos, listas, links, imagens, tabelas, formulários, entre outros.
- Permitir a criação de hiperlinks que conectam diferentes páginas e recursos na web.
- Trabalhar em conjunto com CSS (Cascading Style Sheets) e JavaScript para estilizar e adicionar interatividade às páginas web.

### HTML Não Semântico

HTML não é semântico quando os elementos utilizados não refletem o significado do conteúdo que eles contêm. Isso pode dificultar a compreensão do código e afetar negativamente a acessibilidade e a SEO.

#### Problemas do HTML Não Semântico

- **Acessibilidade:** Pode dificultar a navegação para usuários com deficiências.
- **SEO:** Pode prejudicar a indexação do conteúdo pelos motores de busca.
- **Manutenção:** Pode tornar o código mais difícil de ler e compreender.
- **Consistência:** Pode levar a práticas de desenvolvimento web inadequadas.
- **Interoperabilidade:** Pode dificultar a integração com outras tecnologias e dispositivos.

### HTML Semântico

HTML é considerado semântico quando os elementos utilizados refletem o significado do conteúdo que eles contêm. Isso melhora a acessibilidade, a SEO (otimização para motores de busca) e a manutenção do código.

#### Importância do HTML Semântico

- **Acessibilidade:** Facilita a navegação para usuários com deficiências, como leitores de tela.
- **SEO:** Melhora a indexação do conteúdo pelos motores de busca
- **Manutenção:** Facilita a leitura e compreensão do código por outros desenvolvedores.
- **Consistência:** Promove boas práticas de desenvolvimento web.
- **Interoperabilidade:** Facilita a integração com outras tecnologias e dispositivos.

#### Blocos semânticos comuns

- `Topo da página`: `<header>`
- `Navegação principal`: `<nav>`
- `Conteúdo principal`: `<main>`
- `Conteúdo complementar`: `<aside>`
- `Rodapé da página`: `<footer>`

#### Principais elementos semânticos

- `<header>`: Define o cabeçalho de uma seção ou página.
- `<nav>`: Define uma seção de navegação.
- `<main>`: Define o conteúdo principal da página.
- `<section>`: Define uma seção genérica de conteúdo.
- `<article>`: Define um conteúdo independente, como um artigo de blog ou notícia.
- `<aside>`: Define um conteúdo complementar, como uma barra lateral.
- `<footer>`: Define o rodapé de uma seção ou página.)

### Elementos de texto e sinificados

- `<p>`: Define um parágrafo.
- `<strong>`: Define um texto com ênfase forte (geralmente exibido em negrito).
- `<em>`: Define um texto com ênfase (geralmente exibido em itálico, menos forte que o `<strong>`).
- `<a>`: Define um hiperlink.
- `<h1>` a `<h6>`: Define títulos, sendo `<h1>` o mais importante e `<h6>` o menos importante.

### Estrutura básica semântica de um documento HTML5

- `<!DOCTYPE html>`: Declara o tipo de documento como HTML5.
- `<html>`: Elemento raiz que envolve todo o conteúdo da página.
  - `lang="pt-BR"`: Atributo que define o idioma do documento como português do Brasil.
- `<head>`: Contém metadados, links para estilos e scripts, título da página, etc.
- `<meta>`: Define metadados sobre o documento, como charset, autor, descrição, etc.
  - `charset="UTF-8"`: Define a codificação de caracteres do documento.
  - `name="viewport"`: Define as configurações de exibição para dispositivos móveis.
  - `content="width=device-width, initial-scale=1.0"`: Configurações específicas para o viewport(largura e escala inicial).
- `<title>`: Define o título da página que aparece na aba do navegador.
- `<body>`: Contém o conteúdo visível da página, como texto, imagens, links, etc.- `<meta>`: Define metadados sobre o documento, como charset, autor, descrição, etc.
- `</...>`: Fecha o respectivo elemento.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
</head>
<body>
    <h1>Título Principal</h1>
    <p>Este é um parágrafo de texto.</p>
</body>
</html>
```

### Embedding Media

Embedding media refere-se à incorporação de conteúdo multimídia, como vídeos, áudios e imagens, diretamente em uma página web usando HTML. Isso permite que os usuários visualizem ou ouçam o conteúdo sem precisar sair da página.

#### Imagens

Para incorporar imagens em uma página web, utiliza-se a tag `<img>`. Esta tag é auto-fechável e requer o atributo `src` para especificar o caminho da imagem, além do atributo `alt` para fornecer uma descrição alternativa da imagem, importante para acessibilidade.

```html
<img src="caminho/para/imagem.jpg" alt="Descrição da imagem">
```

#### Audio

Para incorporar áudios em uma página web, utiliza-se a tag `<audio>`. Esta tag pode conter atributos como `controls` para exibir controles de reprodução, `autoplay` para iniciar a reprodução automaticamente e `loop` para repetir o áudio.
O atributo `type` dentro da tag `<source>` especifica o formato do arquivo de áudio.

**`<source>`**: Define a fonte do arquivo de mídia (áudio ou vídeo) e seu tipo., permitindo que o navegador escolha o formato mais adequado para reprodução. Ele é uma tag auto-fechável e deve ser usado dentro das tags `<audio>` ou `<video>`.

```html
<audio controls>
  <source src="caminho/para/audio.mp3" type="audio/mpeg">
  Seu navegador não suporta o elemento de áudio.
</audio>
```

#### Vídeo

Para incorporar vídeos em uma página web, utiliza-se a tag `<video>`. Esta tag é semelhante à tag `<audio>` e também pode conter atributos como `controls`, `autoplay` e `loop`. O atributo `type` dentro da tag `<source>` especifica o formato do arquivo de vídeo e o atributo `tracks` pode ser usado para adicionar legendas.

```html
<video controls>
  <source src="caminho/para/video.mp4" type="video/mp4" tracks="caminho/para/legendas.vtt">
  Seu navegador não suporta o elemento de vídeo.
</video>
```

#### Iframe

O elemento `<iframe>` é usado para incorporar outro documento HTML dentro do documento atual. Ele cria uma janela embutida que pode exibir conteúdo de outra página web, permitindo a integração de recursos externos, como vídeos do YouTube, mapas do Google Maps, entre outros.

```html
<iframe
  src="https://www.exemplo.com"
  title="Descrição do conteúdo do iframe"
  width="600"
  height="400"
  allowfullscreen>
</iframe>
```

##### Cuidados ao usar iframes

- **Segurança:** Iframes podem ser usados para ataques de clickjacking. Use o atributo `sandbox` para restringir ações dentro do iframe.
- **Desempenho:** Muitos iframes podem afetar o desempenho da página.
- **Responsividade:** Certifique-se de que o iframe seja responsivo para diferentes tamanhos de tela.

#### Media e Semântica

Incorporar mídia de forma semântica envolve o uso adequado das tags HTML5 para garantir que o conteúdo seja acessível e compreensível tanto para usuários quanto para mecanismos de busca. Utilizar tags como `<figure>` e `<figcaption>` para imagens, áudios e vídeos ajuda a fornecer contexto adicional sobre o conteúdo multimídia.

```html
<figure>
  <img src="caminho/para/imagem.jpg" alt="Descrição da imagem">
  <figcaption>Legenda da imagem</figcaption>
</figure>
```

### Formulários em HTML

Formulários em HTML são usados para coletar dados dos usuários. Eles consistem em vários elementos de entrada, como campos de texto, botões de rádio, caixas de seleção, menus suspensos e botões de envio.

### Estrutura básica de um formulário

- `<form>`: Define o início e o fim do formulário.
- `action`: especifica a URL para onde os dados do formulário serão enviados.
- `method`: define o método HTTP usado para enviar os dados (geralmente "get" ou "post").
- `<label>`: Define um rótulo para um elemento de entrada.
- `<input>`: Define um campo de entrada para o usuário.
- `<button>`: Define um botão clicável.

#### Tipos comuns de inputs

- `text`: campo de texto simples.
  - `required`: atributo que torna o campo obrigatório.
  - `minlength` e `maxlength`: definem o tamanho mínimo e máximo do texto.
  - `pattern`: define uma expressão regular para validação do campo.
- `email`: campo para endereços de e-mail.
- `date`: campo para seleção de data.
- `tel`: campo para números de telefone.
- `submit`: botão para enviar o formulário.
- `file`: campo para upload de arquivos.
- `accept`: campo para aceitar tipos específicos de arquivos.
- `multiple`: permite selecionar múltiplos arquivos.

**Vantagens do uso desses tipos:**

- Validação automática pelo navegador.
- Melhor experiência do usuário em dispositivos móveis.

#### Sintaxe básica de um formulário

```html
<form action="/submit" method="post">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" required minlength="2" maxlength="50">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Enviar</button>
</form>
```

### Acessibilidade (A11y)

Acessibilidade (A11y) em HTML refere-se à prática de criar páginas web que possam ser usadas por todas as pessoas, incluindo aquelas com deficiências. Isso envolve o uso de técnicas e padrões que garantem que o conteúdo seja acessível a todos os usuários, independentemente de suas habilidades ou dispositivos.

#### Importância da Acessibilidade

- **Inclusão:** Garante que todas as pessoas possam acessar e interagir com o conteúdo.
- **Legalidade:** Muitas jurisdições exigem conformidade com padrões de acessibilidade.
- **SEO:** Sites acessíveis tendem a ter melhor desempenho em mecanismos de busca.
- **Usabilidade:** Melhora a experiência geral do usuário.

#### Tecnologias Assistivas

- Leitores de tela
- Teclados alternativos
- Dispositivos de entrada por voz
- Ampliadores de tela

#### Boas práticas para acessibilidade em HTML

- Use tags semânticas corretamente.
- Forneça textos alternativos (`alt`) para imagens.
- Use rótulos (`<label>`) para elementos de formulário.
- Garanta contraste adequado entre texto e fundo.
- Use atributos ARIA (Accessible Rich Internet Applications) quando necessário.
- Teste a acessibilidade com ferramentas e tecnologias assistivas.

##### Atributos ARIA comuns

Fornecem informações adicionais sobre elementos para tecnologias assistivas.

- `role`: Define o papel de um elemento (ex: `button`, `navigation`).
- `aria-hidden`: Indica se um elemento deve ser ignorado por tecnologias assistivas.
- `aria-label`: Fornece um rótulo acessível para um elemento. de tela.

```html
<button aria-label="Fechar janela">X</button>
```

#### DOM (Document Object Model)

O DOM (Document Object Model) é uma interface de programação para documentos HTML e XML. Ele representa a estrutura do documento como uma árvore de objetos, onde cada nó corresponde a um elemento, atributo ou texto no documento.

#### Importância do DOM

- Permite que linguagens de programação, como JavaScript, manipulem o conteúdo, estrutura e estilo de uma página web dinamicamente.
- Facilita a criação de interatividade e funcionalidades dinâmicas em páginas web.

#### Estrutura do DOM

- **Documento:** O nó raiz que representa o documento inteiro.
- **Elementos:** Nós que representam tags HTML (ex: `<div>`, `<p>`, `<a>`).
- **Atributos:** Nós que representam atributos de elementos (ex: `class`, `id`).
- **Texto:** Nós que representam o conteúdo de texto dentro dos elementos.
