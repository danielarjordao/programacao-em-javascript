# Aula 03 - CSS

## O que é CSS?

CSS (Cascading Style Sheets) é a linguagem usada para definir o estilo e a apresentação de páginas HTML e XML. Com CSS, você separa o conteúdo (HTML) da aparência visual (cores, fontes, layout), tornando o desenvolvimento mais organizado e flexível.

## Para que serve o CSS?

O CSS controla o layout, as cores, as fontes, os espaçamentos e outros aspectos visuais de uma página web. Permite criar designs responsivos, melhorar a usabilidade e proporcionar uma experiência visual agradável.

## Como funciona o CSS?

O CSS é composto por regras, cada uma formada por:

- **Seletor**: Indica quais elementos HTML serão estilizados.
- **Bloco de declarações**: Entre chaves `{}`, contém propriedades e valores que definem o estilo.

Exemplo:

```css
h1 {
  color: blue;
  font-size: 32px;
}
```

## Prioridade das regras (Cascata)

Quando várias regras CSS se aplicam ao mesmo elemento, o navegador segue uma ordem de prioridade:

1. **Inline**: Estilos escritos diretamente no elemento HTML têm prioridade máxima.
2. **IDs**: Seletores de ID são mais específicos que classes ou elementos.
3. **Classes, atributos, pseudo-classes**: Mais específicos que seletores de elemento.
4. **Elementos**: Menor especificidade.
5. **Ordem de declaração**: Se a especificidade for igual, vale a última regra declarada.
6. **!important**: Sobrescreve todas as outras regras (use com cautela).

## Especificidade

Especificidade é o sistema de pontos que determina qual regra CSS será aplicada quando há conflito:

- Elemento: 1 ponto
- Classe, atributo, pseudo-classe: 10 pontos
- ID: 100 pontos
- !important: máxima prioridade

## Herança em CSS

Herança é o mecanismo pelo qual certos estilos aplicados a um elemento "pai" são automaticamente transmitidos para seus elementos "filhos". Por exemplo, propriedades como `color`, `font-family` e `font-size` normalmente são herdadas, enquanto propriedades de layout (como `margin`, `padding`, `border`) não são. A herança ajuda a manter o CSS mais limpo e evita repetições, mas é importante saber quando ela ocorre para evitar resultados inesperados.

## Seletores em CSS

Seletores servem para escolher quais elementos HTML serão estilizados. Tipos principais:

- **Elemento**: `p`, `h1`, `div`
- **Classe**: `.minha-classe`
- **ID**: `#meu-id`
- **Universal**: `*`
- **Atributo**: `[type="text"]`
- **Pseudo-classe**: `:hover`, `:first-child`
- **Pseudo-elemento**: `::before`, `::after`

Exemplo de seletores:

```css
p { color: blue; }
.minha-classe { background-color: red; }
#meu-id { font-weight: bold; }
* { border: 1px solid black; }
```

## Tipografia e Cores

### Tipografia

Define o estilo do texto: fonte, tamanho, espaçamento, alinhamento.

- `font-family`: Família de fontes (ex: Arial, sans-serif)
- `font-size`: Tamanho da fonte (ex: 16px)
- `line-height`: Altura da linha (ex: 1.5)

### Hierarquia tipográfica

Use tamanhos e pesos diferentes para destacar títulos, subtítulos e corpo do texto, facilitando a leitura.

### Cores e acessibilidade

Escolha cores com bom contraste para garantir que todos possam ler o conteúdo. Use nomes, hexadecimais ou RGB:

```css
color: #333;
background-color: #fff;
```

## Box Model

O Box Model representa cada elemento HTML como uma caixa composta por:

- **Conteúdo**: Texto, imagem, etc.
- **Padding**: Espaço entre o conteúdo e a borda.
- **Border**: Linha ao redor do padding.
- **Margin**: Espaço externo, separa o elemento dos outros.

Exemplo tradicional:

```css
.elemento {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 1px solid black;
  margin: 10px;
}
```

O tamanho total é: largura + padding + borda.

### box-sizing: border-box

Com `box-sizing: border-box`, o padding e a borda são incluídos no tamanho definido:

```css
.elemento {
  box-sizing: border-box;
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 1px solid black;
  margin: 10px;
}
```

## Flexbox

Flexbox facilita layouts flexíveis e responsivos. Basta usar `display: flex;` no elemento pai (container). Os filhos (itens flex) se alinham automaticamente.

Exemplo básico:

```css
.container {
  display: flex;
  flex-direction: row; /* ou column */
  justify-content: flex-start; /* alinhamento horizontal */
  align-items: stretch; /* alinhamento vertical */
}
```

### Conceitos Flexbox

- **Container flexível**: O elemento pai com `display: flex;`
- **Itens flexíveis**: Elementos filhos dentro do container
- **Eixo principal**: Direção dos itens (row ou column)
- **Eixo cruzado**: Perpendicular ao principal

### Responsividade

Flexbox permite que os itens se ajustem ao espaço disponível, facilitando o design para diferentes telas.

## Unidades em CSS

### Absolutas

- `px`: pixels
- `cm`: centímetros
- `mm`: milímetros
- `in`: polegadas
- `pt`: pontos
- `pc`: picas

### Relativas

- `em`: relativo ao tamanho da fonte do elemento pai
- `rem`: relativo ao tamanho da fonte do elemento raiz
- `%`: relativo ao elemento pai
- `vw`: largura da viewport
- `vh`: altura da viewport
- `vmin`, `vmax`: menor/maior valor entre largura e altura da viewport
- `ch`: largura do caractere "0"
- `ex`: altura da letra "x"

### Cuidados com vw/vh

Em dispositivos móveis, a barra de endereço pode afetar o tamanho da viewport. Teste sempre em diferentes dispositivos.

### Novas unidades

- `svh`, `lvh`, `dvh`: unidades que consideram barras de status/navegação em dispositivos móveis.

### Praticar

Flexbox Froggy - Jogo para aprender Flexbox:

<https://flexboxfroggy.com/>

Regras CSS - FlexBox:

<https://www.w3schools.com/css/css3_flexbox_container.asp>

#### Resumo dos conteúdos praticado: Flexbox

##### flex-wrap

Define se os itens flexíveis devem quebrar linha quando não há espaço suficiente no container.

- `nowrap` (padrão): os itens não quebram linha.
- `wrap`: os itens quebram linha quando necessário.
- `wrap-reverse`: os itens quebram linha em ordem reversa.

##### flex-flow

Atalho para definir `flex-direction` e `flex-wrap` juntos.

##### justify-content

Alinha os itens no eixo principal (horizontal).

- `flex-start` (padrão): itens no início.
- `flex-end`: itens no final.
- `center`: itens centralizados.
- `space-between`: espaço igual entre os itens.
- `space-around`: espaço igual ao redor dos itens.
- `space-evenly`: espaço igual entre todos os itens e bordas.

##### align-items

Alinha os itens no eixo transversal (vertical)

- `stretch` (padrão): itens esticados para preencher o container.
- `flex-start`: itens no topo.
- `flex-end`: itens na base.
- `center`: itens centralizados verticalmente.
- `baseline`: itens alinhados pela linha de base do texto.

##### align-content

Alinha as linhas do flex container quando há quebra de linha.

- `stretch` (padrão): linhas esticadas para preencher o container.
- `flex-start`: linhas no topo.
- `flex-end`: linhas na base.
- `center`: linhas centralizadas verticalmente.
- `space-between`: espaço igual entre as linhas.
- `space-around`: espaço igual ao redor das linhas.
- `space-evenly`: espaço igual entre todas as linhas e bordas.

##### Centralização verdadeira

Para centralizar um item tanto horizontal quanto verticalmente, basta usar `justify-content: center;` e `align-items: center;` no container flex.
