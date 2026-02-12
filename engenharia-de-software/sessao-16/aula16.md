# Aula 16 – Clean Code e Princípios SOLID

## Clean Code

### Por que Clean Code é importante?

- Código limpo facilita a vida de quem lê, revisa, corrige bugs ou adiciona novas funcionalidades.
- Ajuda a evitar erros, reduz o tempo de manutenção e torna o trabalho em equipe mais eficiente.
- Código limpo não é só para "ficar bonito": é para ser entendido rapidamente, mesmo meses depois de escrito.

**Dica:** Imagine que você está escrevendo para "você do futuro" ou para um colega que nunca viu seu código antes.

### O que é Código Limpo?

- Código limpo é como uma cozinha organizada: fácil de entender, modificar e reutilizar.
- Outros desenvolvedores vão usar seu código depois de você!

## Bad Smells (Maus Cheiros)

Sinais de que algo está errado no código (problemas de design, não necessariamente erros):

### 1. Funções Gigantes

**Explicação:**
Funções muito grandes geralmente misturam várias responsabilidades. Isso dificulta o entendimento, a manutenção e os testes. O ideal é que cada função faça apenas uma coisa e tenha um nome que explique claramente o que faz.

**Como melhorar:**

- Quebre funções grandes em funções menores e especializadas.
- Dê nomes claros para cada função.

```js
// Ruim:
function processarDados(dados) {
// valida, transforma, calcula, guarda, envia email, gera relatório...
// ...100 linhas
}

// Bom:
function processarDados(dados) {
 const validados = validar(dados);
 const transformados = transformar(validados);
 const resultado = calcular(transformados);
 guardar(resultado);
 notificar(resultado);
}
// Cada função: 5-15 linhas
```

### 2. Nomes Enigmáticos

**Explicação:**
Nomes ruins tornam o código confuso. Bons nomes economizam tempo, evitam bugs e facilitam a colaboração.

**Boas práticas para nomes:**

- Variáveis: use nomes descritivos (ex: `nomeCompleto`, `quantidadeProdutos`)
- Funções: use verbos + objetivo (ex: `calcularTotal()`, `buscarUsuario()`)
- Constantes: use letras maiúsculas e underscores (ex: `TAXA_IVA`)
- Booleanos: comece com `is`, `has`, `can` (ex: `isAtivo`, `hasPermissao`)

**Dica:** Se precisar de comentário para explicar o nome, troque o nome!

```js
// Ruim:
function calc(l, u) {
 if (u.a) {
  return l.filter(i => i.s === 1);
 }
 return l;
}
// Bom:
function filtrarUtilizadores(lista, filtro) {
 if (filtro.apenasAtivos) {
  return lista.filter(user => user.estado === ATIVO);
 }
 return lista;
}
```

### 3. If/Else Aninhados

**Explicação:**
Muitos níveis de if/else dificultam a leitura e aumentam a chance de erro. O padrão "cláusula de guarda" (early return) deixa o fluxo mais claro: se não pode continuar, saia da função logo.

**Como melhorar:**

- Use retornos antecipados para casos de erro ou condições inválidas.
- Deixe o "caminho feliz" (fluxo principal) sem muitos níveis de indentação.

```js
// Ruim:
if (user) {
 if (user.isActive) {
  if (user.hasPermission) {
   if (product.inStock) {
    if (payment.isValid) {
      // ...
    }
   }
  }
 }
}
// Bom (Cláusula de Guarda):
if (!user) return;
if (!user.isActive) return;
if (!user.hasPermission) return;
if (!product.inStock) return;
if (!payment.isValid) return;
// Código principal aqui
processarCompra();
```

### 4. Números Mágicos

**Explicação:**
Números "mágicos" são valores usados diretamente no código, sem contexto. Isso dificulta entender o que significam e torna difícil atualizar o valor em vários lugares.

**Como melhorar:**

- Use constantes nomeadas para dar significado aos valores.
- Centralize valores que podem mudar (ex: taxas, limites, status).

```js
// Ruim:
if (user.status === 1) { /* ... */ }
const timeout = 86400;
// Bom:
const STATUS_ATIVO = 1;
const UM_DIA_EM_SEGUNDOS = 86400;
if (user.status === STATUS_ATIVO) { /* ... */ }
const timeout = UM_DIA_EM_SEGUNDOS;
```

## Clean Code: Boas Práticas

- Funções pequenas e especializadas
- Nomes claros e que revelam intenção
- Uso de constantes nomeadas

**DRY (Don't Repeat Yourself):**
Evite repetir código. Se você copia e cola, provavelmente precisa de uma função ou constante.

**KISS (Keep It Simple, Stupid):**
Prefira soluções simples e diretas. Não complique o que pode ser simples.

**YAGNI (You Aren't Gonna Need It):**
Não escreva código para necessidades futuras incertas. Implemente só o que é realmente necessário agora.

**Exemplo prático:**
Imagine que a taxa de IVA muda. Se você usou uma constante, basta mudar em um lugar só. Se usou o número "0.23" em vários lugares, terá que procurar e mudar todos, correndo risco de esquecer algum.

```js
// Ruim: código repetido
const preco1 = quantidade * precoUnit;
const iva1 = preco1 * 0.23;
const total1 = preco1 + iva1;
// ...
// Bom: função reutilizável
const TAXA_IVA = 0.23;
function calcularTotal(qtd, precoUnit) {
 const subtotal = qtd * precoUnit;
 const iva = subtotal * TAXA_IVA;
 return subtotal + iva;
}
```

## Princípios SOLID

Os princípios SOLID ajudam a criar sistemas flexíveis, fáceis de manter e de evoluir. São aplicáveis em qualquer linguagem orientada a objetos, inclusive JavaScript (usando classes ou funções).

### S – Single Responsibility Principle (SRP)

**Explicação:**
Cada módulo, classe ou função deve ter apenas uma responsabilidade, ou seja, um único motivo para mudar. Isso facilita a manutenção, pois mudanças em uma parte do sistema não afetam outras.

**Exemplo:**
Uma função que valida dados não deve também salvar no banco de dados.

### O – Open/Closed Principle (OCP)

**Explicação:**
O código deve ser fácil de estender (adicionar novas funcionalidades) sem precisar modificar o que já está funcionando. Isso é feito usando abstrações (funções, classes, interfaces) e evitando "mexer" em código já testado.

**Exemplo:**
Se você precisa de um novo tipo de relatório, crie uma nova classe que herda de uma base, sem alterar a classe original.

### L – Liskov Substitution Principle (LSP)

**Explicação:**
Se uma classe B herda de A, deve poder ser usada no lugar de A sem causar problemas. Ou seja, subclasses devem respeitar o contrato da classe base.

**Exemplo:**
Se `Retangulo` tem um método `calcularArea()`, então `Quadrado` (subclasse) também deve ter, e funcionar corretamente.

### I – Interface Segregation Principle (ISP)

**Explicação:**
Prefira várias interfaces pequenas e específicas a uma interface grande e genérica. Assim, as classes implementam só o que realmente precisam.

**Exemplo:**
Se um objeto só precisa ler dados, não obrigue a implementar métodos de escrita.

### D – Dependency Inversion Principle (DIP)

**Explicação:**
Dependa de abstrações (interfaces, funções), não de implementações concretas. Isso facilita trocar partes do sistema sem afetar o resto.

**Exemplo:**
Em vez de criar um objeto "banco de dados" diretamente dentro de uma função, passe ele como parâmetro (injeção de dependência).

## Refactoring

**Refatorar** é melhorar a estrutura do código sem mudar o que ele faz. O objetivo é tornar o código mais limpo, legível e fácil de manter.

**Quando refatorar?**

- Antes de adicionar novas funcionalidades
- Quando encontrar um "bad smell"
- Durante revisões de código

**Técnicas comuns:**

- Extrair funções
- Renomear variáveis e funções
- Substituir números mágicos por constantes
- Remover código duplicado
- Aplicar princípios SOLID

**Dica:** Refatorar é parte do trabalho de programar bem, não é perda de tempo!

**Resumo:**

- Clean Code = código limpo, organizado, fácil de entender e manter
- SOLID = princípios para design robusto e flexível
- Refactoring = melhorar o código sem mudar o que ele faz
