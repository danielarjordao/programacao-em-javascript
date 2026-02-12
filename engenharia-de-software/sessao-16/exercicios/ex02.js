// ============================================================
// EXERCÍCIO 2: Funções Pequenas
// ============================================================
// Esta função faz demasiadas coisas!
// Divide em funções menores: validar, calcular subtotal,
// aplicar desconto, calcular total

function processarPedido(pedido) {
  // Validar pedido
  if (!pedido.cliente || !pedido.items || pedido.items.length === 0) {
    return { erro: "Pedido inválido" };
  }

  // Calcular subtotal
  let subtotal = 0;
  for (let item of pedido.items) {
    subtotal += item.preco * item.quantidade;
  }

  // Aplicar desconto se cliente VIP
  if (pedido.cliente.tipo === "VIP") {
    subtotal = subtotal * 0.9; // 10% desconto
  }

  // Calcular IVA
  const total = subtotal * 1.23; // 23% IVA

  return {
    subtotal: subtotal,
    total: total,
    cliente: pedido.cliente.nome
  };
}

// Exemplo de uso:
const pedidoTeste = {
  cliente: { nome: "João Silva", tipo: "VIP" },
  items: [
    { nome: "Teclado", preco: 50, quantidade: 2 },
    { nome: "Rato", preco: 25, quantidade: 1 }
  ]
};
console.log("Exercício 2 - Original:", processarPedido(pedidoTeste));

function validarPedido(pedido) {
  if (!pedido.cliente || !pedido.items || pedido.items.length === 0) {
    return { valido: false, erro: "Pedido inválido" };
  }
  return { valido: true };
}

function calcularSubtotal(items) {
  let subtotal = 0;
  for (let item of items) {
    subtotal += item.preco * item.quantidade;
  }
  return subtotal;
}

function aplicarDesconto(subtotal, cliente) {
  if (cliente.tipo === "VIP") {
    return subtotal * 0.9; // 10% desconto
  }
  return subtotal;
}

function calcularTotal(subtotal) {
  return subtotal * 1.23; // 23% IVA
}

function processarPedidoRefatorado(pedido) {
  const validacao = validarPedido(pedido);
  if (!validacao.valido) {
    return { erro: validacao.erro };
  }

  const subtotal = calcularSubtotal(pedido.items);
  const subtotalComDesconto = aplicarDesconto(subtotal, pedido.cliente);
  const total = calcularTotal(subtotalComDesconto);

  return {
    subtotal: subtotalComDesconto,
    total: total,
    cliente: pedido.cliente.nome
  };
}

// Exemplo de uso:
console.log("Exercício 2 - Refatorado:", processarPedidoRefatorado(pedidoTeste));
