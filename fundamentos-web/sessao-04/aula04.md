# Aula 04

## CSS Grid Layout

O CSS Grid Layout é um sistema de layout bidimensional que permite criar layouts complexos de forma simples e eficiente. Com o Grid, você pode definir linhas e colunas, posicionar elementos em células específicas e controlar o espaçamento entre eles.

### Layout unidimensional vs bidimensional

Antes do CSS Grid, o layout na web era principalmente unidimensional, utilizando Flexbox para organizar elementos em uma única linha ou coluna. O CSS Grid, por outro lado, permite trabalhar com layouts bidimensionais, onde você pode controlar tanto linhas quanto colunas simultaneamente.

### Estrutura básica do CSS Grid

Para criar um container de grid, você utiliza a propriedade `display: grid;` ou `display: inline-grid;`. A seguir, você pode definir o número de linhas e colunas usando as propriedades `grid-template-rows` e `grid-template-columns`.

```css
.layout {
  display: grid; /* Define o container como um grid */
  grid-template-columns: 1fr 2fr 1fr; /* Define 3 colunas com larguras proporcionais */
  grid-template-rows: 100px auto; /* Define 2 linhas, a primeira com altura fixa e a segunda automática */
}
```

#### Nomeando áreas do grid (grid-template-areas)

Você pode nomear áreas do grid para tornar o layout mais legível e fácil de manter:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "menu content"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 60px 1fr 40px;
}
.header { grid-area: header; }
.menu { grid-area: menu; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```

Assim, cada elemento ocupa a área nomeada correspondente, facilitando a organização do layout.

### Posicionamento de itens no grid

Você pode posicionar itens dentro do grid usando as propriedades `grid-column` e `grid-row`. Essas propriedades permitem que você especifique em quais linhas e colunas um item deve começar e terminar.

#### Unidades de medida no Grid

No CSS Grid, você pode usar várias unidades de medida para definir tamanhos de linhas e colunas, incluindo:

- `fr` (fração): Representa uma fração do espaço disponível.
- `px`, `em`, `%`: Unidades tradicionais de medida.
- `auto`: Ajusta o tamanho com base no conteúdo do item.

#### Exemplo de posicionamento

```css
.item1 {
  grid-column: 1 / 3; /* O item ocupa da coluna 1 até a coluna 3 */
  grid-row: 1 / 2;    /* O item ocupa da linha 1 até a linha 2 */
}
```

### Responsividade com CSS Grid

A responsividade é a capacidade de um layout se adaptar a diferentes tamanhos de tela e dispositivos. O CSS Grid facilita a criação de layouts responsivos, permitindo que você defina diferentes configurações de grid para diferentes tamanhos de tela usando media queries.

#### Breakpoints

Breakpoints são pontos de interrupção onde o layout muda para se adaptar melhor ao tamanho da tela. Você pode definir breakpoints usando media queries no CSS.

Breakpoints comuns incluem:

- Pequenas telas (smartphones): max-width: 767px.
- Telas médias (tablets): 768px a 1023px.
- Telas grandes (desktops): min-width: 1024px.

#### Media Queries com CSS Grid

Media queries permitem que você aplique estilos diferentes com base no tamanho da tela. Você pode definir diferentes layouts de grid para diferentes breakpoints.

Aqui está um exemplo de como usar media queries para criar um layout responsivo com CSS Grid:

```css
@media (max-width: 767px) {
  .layout {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .layout {
    grid-template-columns: 1fr 2fr;
  }
}

@media (min-width: 1024px) {
  .layout {
    grid-template-columns: 1fr 2fr 1fr;
  }
}
```

### Variáveis CSS

As variáveis CSS, também conhecidas como custom properties, permitem que você defina valores reutilizáveis em seu CSS. Elas são especialmente úteis para manter a consistência em um projeto e facilitar a manutenção do código.

#### Definindo variáveis CSS

Para definir uma variável CSS, você utiliza a sintaxe `--nome-da-variavel: valor;`.

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size-base: 16px;
}
```

#### Usando variáveis CSS

Para usar uma variável CSS, você utiliza a função `var()`, passando o nome da variável como argumento.

```css
body {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}
```

## DOM – Document Object Model

O DOM (Document Object Model) é a estrutura em árvore que o navegador cria a partir do HTML, permitindo que o JavaScript acesse e manipule o conteúdo, a estrutura e o estilo da página de forma dinâmica.

### O que é o DOM?

- O HTML é um texto estático, enquanto o DOM é uma estrutura em memória, dinâmica, criada pelo navegador.
- Cada elemento HTML vira um nó na árvore do DOM.
- Tipos de nós: elementos (ex: `<div>`, `<p>`), texto, atributos, comentários.
- O objeto `document` representa toda a página e é a porta de entrada para manipulação via JavaScript.

### Seleção e manipulação de elementos

- Para selecionar elementos, use:
  - `document.getElementById('id')`
  - `document.querySelector('seletor')`
  - `document.querySelectorAll('seletor')`
- Para alterar conteúdo:
  - `element.innerHTML` (altera o HTML interno)
  - `element.textContent` (altera apenas o texto)
- Para alterar estilos:
  - `element.style.propriedade`
  - `element.classList.add('classe')`, `element.classList.remove('classe')`
- Para criar/remover elementos:
  - `document.createElement('tag')`
  - `element.appendChild(novoElemento)`
  - `element.remove()`

## Pseudo-classes e Pseudo-elementos

As pseudo-classes e pseudo-elementos são recursos do CSS que permitem aplicar estilos a elementos com base em seu estado ou posição no documento, sem a necessidade de adicionar classes ou IDs extras ao HTML.

### Pseudo-classes

As pseudo-classes são usadas para definir um estado especial de um elemento. Elas são precedidas por dois pontos (`:`) e são aplicadas a elementos existentes no DOM.

#### Exemplos de pseudo-classes comuns

- `:hover`: Aplica estilos quando o usuário passa o mouse sobre um elemento.
- `:focus`: Aplica estilos quando um elemento recebe foco (por exemplo, ao clicar em um campo de formulário).
- `:nth-child(n)`: Aplica estilos ao enésimo filho de um elemento pai.

```css
 .botao:hover {
  color: red;
}
```

### Pseudo-elementos

Os pseudo-elementos são usados para criar elementos fictícios que não existem no DOM, mas podem ser estilizados como se fossem elementos reais. Eles são precedidos por dois pontos duplos (`::`).

Usos comuns dos pseudo-elementos incluem:

- Adicionar conteúdo antes ou depois de um elemento.
- Estilizar a primeira letra ou linha de um bloco de texto.

#### Exemplos de pseudo-elementos comuns

- `::before`: Insere conteúdo antes do conteúdo de um elemento.
- `::after`: Insere conteúdo após o conteúdo de um elemento.
- `::first-child`: Aplica estilos ao primeiro filho de um elemento pai.
- `::last-child`: Aplica estilos ao último filho de um elemento pai.

```css
 .paragrafo::first-letter {
  font-size: 200%;
  color: blue;
}
```
