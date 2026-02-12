
// ============================================================
// EXERCÍCIO: Refatoração Completa
// ============================================================
// Código de um "sistema de gestão de inventário"
// Aplica TODOS os princípios aprendidos

function inv(d, t) {
  let r = [];
  for (let i = 0; i < d.length; i++) {
    if (t === 1) {
      if (d[i].q > 0) {
        r.push(d[i]);
      }
    } else if (t === 2) {
      if (d[i].q <= 5) {
        r.push(d[i]);
      }
    } else if (t === 3) {
      if (d[i].c === "electronics") {
        r.push(d[i]);
      }
    }
  }
  let tot = 0;
  for (let j = 0; j < r.length; j++) {
    tot = tot + r[j].p * r[j].q;
  }
  let msg = "";
  if (r.length === 0) {
    msg = "Nenhum item encontrado";
  } else if (r.length < 5) {
    msg = "Poucos items";
  } else if (r.length < 20) {
    msg = "Quantidade normal";
  } else {
    msg = "Muitos items";
  }
  return { items: r, valorTotal: tot, mensagem: msg, quantidade: r.length };
}

// Dados de teste
const inventario = [
  { n: "Laptop", p: 1000, q: 10, c: "electronics" },
  { n: "Mesa", p: 200, q: 3, c: "furniture" },
  { n: "Teclado", p: 50, q: 25, c: "electronics" },
  { n: "Cadeira", p: 150, q: 0, c: "furniture" },
  { n: "Monitor", p: 300, q: 5, c: "electronics" }
];
console.log("Bónus - Original (tipo 1):", inv(inventario, 1));

// Refatoração

function filtrarInventario(inventario, tipoFiltro) {
  const FILTROS = {
	1: item => item.q > 0, // Ativo
	2: item => item.q <= 5, // Baixo stock
	3: item => item.c === "electronics" // Eletrónicos
  };
  return inventario.filter(FILTROS[tipoFiltro]);
}

function calcularValorTotal(inventarioFiltrado) {
  let valorTotal = 0;
  for (const item of inventarioFiltrado) {
	valorTotal += item.p * item.q;
  }
  return valorTotal;
}

function gerarMensagem(quantidade) {
  if (quantidade === 0) {
	return "Nenhum item encontrado";
  } else if (quantidade < 5) {
	return "Poucos items";
  } else if (quantidade < 20) {
	return "Quantidade normal";
  } else {
	return "Muitos items";
  }
}

function invRefatorada(inventario, tipoFiltro) {
  const inventarioFiltrado = filtrarInventario(inventario, tipoFiltro);
  const valorTotal = calcularValorTotal(inventarioFiltrado);
  const mensagem = gerarMensagem(inventarioFiltrado.length);

  return { items: inventarioFiltrado, valorTotal, mensagem, quantidade: inventarioFiltrado.length };
}

// Exemplo de uso:
console.log("Bónus - Refatorado (tipo 1):", invRefatorada(inventario, 1));
console.log("Bónus - Refatorado (tipo 2):", invRefatorada(inventario, 2));
console.log("Bónus - Refatorado (tipo 3):", invRefatorada(inventario, 3));
