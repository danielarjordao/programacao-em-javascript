# Elementos Pai, Filhos e Irmãos em HTML

## Explicação

No HTML, os elementos são organizados em uma estrutura de árvore. Cada elemento pode ser:

- **Pai**: O elemento que contém outros elementos dentro dele.
- **Filho**: O elemento que está dentro de outro elemento (o pai).
- **Irmão**: Elementos que estão no mesmo nível, dentro do mesmo pai.

## Exemplo Simples

```html
<body>
  <h1>Título</h1>
  <p>Parágrafo 1</p>
  <p>Parágrafo 2</p>
</body>
```

### Identificação

- **Pai**: `<body>` é o pai de `<h1>` e dos dois `<p>`.
- **Filhos**: `<h1>`, `<p>Parágrafo 1</p>` e `<p>Parágrafo 2</p>` são filhos de `<body>`.
- **Irmãos**: `<h1>`, `<p>Parágrafo 1</p>` e `<p>Parágrafo 2</p>` são irmãos entre si, pois estão no mesmo nível dentro do `<body>`.

## Outro Exemplo

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

- **Pai**: `<ul>` é o pai dos três `<li>`.
- **Filhos**: Cada `<li>` é filho de `<ul>`.
- **Irmãos**: Os três `<li>` são irmãos entre si.

## Resumo Visual

```html
<body>
  ├── <h1>
  ├── <p>
  └── <p>
```

- `<body>` é o pai
- `<h1>` e `<p>` são filhos
- `<h1>` e `<p>` são irmãos
