# Aula 14

## Web Storage API

### O problema (estado volatil)

Ao recarregar a pagina:
- O motor JS reinicia.
- Variaveis voltam ao valor inicial.
- Dados desaparecem entre sessoes.

### O que e Web Storage

API nativa do navegador para:
- Guardar dados no dispositivo do utilizador.
- Definir se o dado e temporario ou permanente.
- Manter estado entre reloads.

### Dois tipos de storage

- `localStorage`: persiste ate ser removido.
- `sessionStorage`: persiste ate fechar o separador.

### localStorage (caracteristicas)

- Persiste apos reload e apos fechar o navegador.
- Dados ficam no dispositivo e so saem por limpeza manual ou codigo.
- Armazenamento por dominio (isolado de outros sites).

### API basica (mais usada)

```js
// gravar
localStorage.setItem("tema", "escuro");

// ler (sempre string ou null)
const tema = localStorage.getItem("tema");

// remover uma chave
localStorage.removeItem("tema");

// limpar tudo do dominio
localStorage.clear();
```

> Dica: `getItem()` retorna `null` se a chave nao existir.

### sessionStorage

Tem a mesma API do `localStorage`, mas o dado some ao fechar a aba.

### Quando usar cada um?

Use `localStorage` quando:
- Preferencias do utilizador (tema, idioma, tamanho do texto).
- Login simples ou token (quando permitido pelo projeto).
- Estado duradouro (dias ou semanas).

Use `sessionStorage` quando:
- Dados temporarios da navegacao atual.
- Informacao sensivel da sessao.
- Formularios em etapas (guardar passos intermediarios).

## Persistencia de estado com JSON

Storage guarda apenas strings. Para objetos e arrays, usamos serializacao.

```js
const user = { nome: "Ana", tema: "escuro" };
localStorage.setItem("user", JSON.stringify(user));

const raw = localStorage.getItem("user");
let userLido = null;
if (raw) {
	userLido = JSON.parse(raw);
}
```

## Organizacao do codigo (modularizacao)

Modularizacao e dividir responsabilidades em ficheiros menores. ES6 Modules e o padrao moderno para isso.

### Como ativar modulos no HTML

Sem `type="module"`, o `import` nao funciona.

```html
<script type="module" src="app.js"></script>
```

### O que e um modulo

Um modulo e:
- Um ficheiro JS com escopo proprio.
- Capaz de exportar funcionalidades.
- Capaz de importar de outros ficheiros.

### Named export e import

Named export permite varios exports com nomes fixos.

```js
// utils.js
export function somar(a, b) {
	return a + b;
}
```

```js
// app.js
import { somar } from "./utils.js";
```

### Default export e import

Default export permite um export principal. No import, o nome e livre.

```js
// utils.js
export default function somar(a, b) {
	return a + b;
}
```

```js
// app.js
import soma from "./utils.js";
```

### Named vs Default (resumo)

- **Named**: varios exports, usa `{ }`, nome fixo.
- **Default**: um export, nao usa `{ }`, nome livre.

## CommonJS vs ESModules

**CommonJS**
- `require()` e `module.exports`.
- Node tradicional.
- Execucao sincrona.

**ESModules (ESM)**
- `import` e `export`.
- Nativo no navegador e Node moderno.
- Melhor para bundlers e analise estatica.
- Padrao usado no Angular.


