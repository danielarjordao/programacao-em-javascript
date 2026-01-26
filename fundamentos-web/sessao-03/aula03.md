# Aula 03

## CSS

### O que é CSS?

CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para descrever a apresentação de documentos escritos em HTML ou XML. Ele permite separar o conteúdo da estrutura do documento (HTML) da sua aparência visual, facilitando a manutenção e o design das páginas web.

### Para que serve o CSS?

O CSS é usado para controlar o layout, as cores, as fontes, os espaçamentos e outros aspectos visuais de uma página web. Com o CSS, é possível criar designs responsivos, melhorar a usabilidade e proporcionar uma experiência visual mais agradável aos usuários.

### CSS como sistema de regras

CSS é um sistema de regras que define como os elementos HTML devem ser exibidos. Cada regra CSS é composta por um seletor e um bloco de declarações. O seletor indica quais elementos HTML serão afetados, enquanto o bloco de declarações contém propriedades e valores que definem o estilo desses elementos.

#### Concorrência de regras

Quando múltiplas regras CSS se aplicam ao mesmo elemento, o navegador utiliza um sistema de prioridade para determinar qual regra deve ser aplicada.

#### A ordem importa

1. **Cascata de estilos**: Estilos aplicados diretamente no elemento HTML (inline styles) têm maior prioridade do que estilos definidos em folhas de estilo externas ou internas.

2. **Especificidade dos seletores**: Seletores mais específicos (como IDs) têm prioridade sobre seletores menos específicos (como classes ou elementos).

3. **Herança**: Alguns estilos são herdados de elementos pai para elementos filho, o que pode afetar a aparência dos elementos.

4. **Ordem de declaração**: Quando duas regras têm a mesma especificidade, a última regra declarada no CSS será aplicada.

### O que significa "cascading" em CSS?

O termo "cascading" em CSS refere-se à forma como as regras de estilo são aplicadas em uma hierarquia, onde regras mais específicas ou importantes podem "cair" sobre regras menos específicas ou menos importantes. Isso significa que, quando há conflitos entre diferentes regras CSS, o navegador segue uma série de critérios (importância, especificidade e ordem de aparição) para determinar qual regra deve prevalecer e ser aplicada ao elemento HTML. Essa característica permite uma maior flexibilidade e controle sobre o estilo dos elementos na página web.

### O que é especificidade em CSS?

Especificidade em CSS refere-se à forma como seletores são classificados em termos de prioridade quando múltiplas regras se aplicam ao mesmo elemento. Cada seletor tem um valor de especificidade baseado em sua composição, e o navegador usa esses valores para determinar qual regra deve ser aplicada.

### Seletores em CSS

Seletores em CSS são usados para selecionar os elementos HTML aos quais as regras de estilo serão aplicadas, permitindo que você defina estilos específicos para diferentes partes de uma página web. Seletores podem ser divididos em sete categorias principais:

1. **Seletores de tag/elemento**: Selecionam todos os elementos de um determinado tipo (por exemplo, `p`, `h1`, `div`).
2. **Seletores de classe**: Selecionam elementos com uma classe específica, precedida por um ponto (por exemplo, `.minha-classe`).
3. **Seletores de ID**: Selecionam um elemento com um ID específico, precedido por um símbolo de cerquilha (por exemplo, `#meu-id`).
4. **Seletor universal**: Seleciona todos os elementos na página, representado por um asterisco (`*`).
5. **Seletores de atributo**: Selecionam elementos com um atributo específico (por exemplo, `[type="text"]`).
6. **Seletores de pseudo-classe**: Selecionam elementos em um estado específico (por exemplo, `:hover`, `:first-child`).
7. **Seletores de pseudo-elemento**: Selecionam partes específicas de um elemento (por exemplo, `::before`, `::after`).

#### Hierarquia de seletores

A hierarquia de seletores em CSS determina a prioridade com que as regras são aplicadas aos elementos HTML. A especificidade dos seletores é calculada com base em quatro categorias principais:

1. **Seletor de elemento**: Cada elemento HTML selecionado (por exemplo, `div`, `p`) contribui com 1 ponto para a especificidade.
2. **Seletor de classe, atributo ou pseudo-classe**: Cada classe (por exemplo, `.minha-classe`), atributo (por exemplo, `[type="text"]) ou pseudo-classe (por exemplo,` :hover`) contribui com 10 pontos para a especificidade.
3. **Seletor de ID**: Cada ID (por exemplo, `#meu-id`) contribui com 100 pontos para a especificidade.
4. **!important**: A declaração `!important` tem a maior prioridade e sobrescreve todas as outras regras, independentemente da especificidade. (Use com cautela, pois pode dificultar a manutenção do código.)

### Exemplos

```css
/* Seletor de elemento */
p {
color: blue;
}

/* Seletor de classe */
.minha-classe {
 background-color: red;
}

/* Seletor de ID */
#meu-id {
 font-weight: bold;
}

/* Seletor universal */
* {
 border: 1px solid black;
}
```

### Tipografia e Cores

#### O que é tipografia em CSS?

Tipografia é o conjunto de regras e estilos aplicados ao texto em uma página web, incluindo cor, fontes, tamanhos, espaçamentos e alinhamentos. A tipografia é essencial para garantir a legibilidade e a estética do conteúdo textual, ajudando a transmitir a mensagem de forma eficaz e atraente.

#### Propriedades de tipografia em CSS

1. **font-family**: Define a família de fontes a ser usada para o texto (por exemplo, `font-family: Arial, sans-serif;`).
2. **font-size**: Define o tamanho da fonte (por exemplo, `font-size: 16px;`).
3. **line-height**: Define a altura da linha, afetando o espaçamento entre linhas de texto (por exemplo, `line-height: 1.5;`).

#### Hierarquia tipográfica

A hierarquia tipográfica em CSS determina uma hierarquia visual para o texto em uma página web, ajudando a guiar o leitor através do conteúdo de forma clara e organizada. Isso é alcançado através do uso de diferentes tamanhos de fonte, pesos, estilos e espaçamentos para destacar títulos, subtítulos e corpo do texto. Por exemplo, títulos podem ser maiores e mais ousados, enquanto o corpo do texto é menor e mais legível. A hierarquia tipográfica melhora a experiência do usuário, facilitando a leitura e a compreensão do conteúdo apresentado.

#### Cores, contraste e acessibilidade

As cores em CSS são usadas para definir a aparência visual dos elementos em uma página web, incluindo o texto, o fundo e outros componentes. O uso adequado das cores é essencial para garantir um bom contraste e acessibilidade, permitindo que todos os usuários, incluindo aqueles com deficiências visuais, possam ler e interagir com o conteúdo de forma eficaz.

### Box Model

O Box Model é um modelo de layout utilizado em CSS para representar a estrutura de um elemento HTML como uma caixa retangular composta por quatro áreas principais: conteúdo, preenchimento (padding), borda (border) e margem (margin). Cada uma dessas áreas desempenha um papel importante na definição do tamanho e do espaçamento dos elementos na página web.

1. **Conteúdo**: A área onde o conteúdo real do elemento (texto, imagens, etc.) é exibido.
2. **Preenchimento (Padding)**: O espaço entre o conteúdo e a borda do elemento. O padding aumenta o tamanho total da caixa sem afetar o conteúdo.
3. **Borda (Border)**: A linha que envolve o preenchimento e o conteúdo do elemento. A borda pode ter diferentes estilos, larguras e cores.
4. **Margem (Margin)**: O espaço externo ao redor da borda do elemento, que separa o elemento de outros elementos na página. A margem não afeta o tamanho da caixa, mas influencia o espaçamento entre os elementos.

#### O problema do Box Model tradicional

No Box Model tradicional, o tamanho total de um elemento é calculado somando-se a largura e altura do conteúdo, o preenchimento, a borda e a margem. Isso pode levar a problemas de layout, especialmente quando se tenta definir tamanhos fixos para elementos, pois o tamanho total pode ser maior do que o esperado devido ao padding e à borda.

```css
/* Box Model tradicional */
.elemento {
 width: 200px;
 height: 100px;
 padding: 20px;
 border: 1px solid black;
 margin: 10px;
}
```

 Para resolver esse problema, a propriedade `box-sizing` pode ser usada para alterar o comportamento do Box Model. Quando `box-sizing: border-box;` é aplicado, o tamanho total do elemento inclui o conteúdo, o padding e a borda, facilitando o controle do layout e evitando surpresas no dimensionamento dos elementos.

```css
/* Box Model com box-sizing */
.elemento {
 box-sizing: border-box;
 width: 200px;
 height: 100px;
 padding: 20px;
 border: 1px solid black;
 margin: 10px;
}
```

### Flexbox

Flexbox (Flexible Box Layout) é um modelo de layout em CSS que facilita a criação de layouts responsivos e flexíveis, permitindo que os elementos dentro de um contêiner sejam distribuídos e alinhados de maneira eficiente, mesmo quando o tamanho dos elementos é desconhecido ou dinâmico. Flexbox é especialmente útil para criar layouts unidimensionais, seja em linha (horizontalmente) ou em coluna (verticalmente).

#### Por que usar Flexbox?

Flexbox oferece várias vantagens em relação aos métodos tradicionais de layout, como floats e positioning. Ele simplifica o processo de alinhamento e distribuição de espaço entre os elementos, tornando mais fácil criar layouts complexos sem a necessidade de hacks ou cálculos complicados. Além disso, Flexbox é altamente responsivo, permitindo que os layouts se adaptem automaticamente a diferentes tamanhos de tela e dispositivos.

#### Conceitos básicos do Flexbox

1. **Contêiner Flexível (Flex Container)**: O elemento pai que contém os itens flexíveis. Para criar um contêiner flexível, basta definir a propriedade `display: flex;` ou `display: inline-flex;` no elemento pai.

2. **Itens Flexíveis (Flex Items)**: Os elementos filhos dentro do contêiner flexível que serão organizados e alinhados de acordo com as regras do Flexbox.

##### Pais e Filhos no Flexbox

No Flexbox, o contêiner flexível atua como o elemento pai, enquanto os itens flexíveis são os elementos filhos. O contêiner pai controla o layout e o alinhamento dos itens filhos, permitindo que eles sejam distribuídos de maneira eficiente dentro do espaço disponível. As propriedades do Flexbox aplicadas ao contêiner pai afetam diretamente o comportamento e a aparência dos itens filhos, facilitando a criação de layouts responsivos e adaptáveis.

#### Flexbox e a responsividade

Flexbox é uma ferramenta poderosa para criar layouts responsivos, pois permite que os elementos se ajustem automaticamente ao tamanho do contêiner e da tela. Com Flexbox, é possível definir como os itens flexíveis devem crescer, encolher e se alinhar em diferentes tamanhos de tela, facilitando a criação de designs que funcionam bem em dispositivos móveis, tablets e desktops. Propriedades como `flex-wrap`, `justify-content` e `align-items` ajudam a controlar o comportamento dos itens flexíveis em diferentes contextos, garantindo uma experiência de usuário consistente e agradável.
