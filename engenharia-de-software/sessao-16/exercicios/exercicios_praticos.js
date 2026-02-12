/**
 * ============================================================
 * SESSÃO 16 - CLEAN CODE & SOLID
 * Exercícios Práticos - Programação em JavaScript
 * ============================================================
 * 
 * Instruções:
 * - Cada exercício tem um código "mau" que deves refatorar
 * - Mantém o comportamento original (o código deve fazer o mesmo)
 * - Aplica os princípios aprendidos: naming, funções pequenas, DRY, SOLID
 * - Testa o código depois de refatorar para garantir que funciona
 * 
 * ============================================================
 */


// ============================================================
// EXERCÍCIO 1: Nomes e Números Mágicos
// ============================================================
// Problemas a resolver:
// 1. Nomes das variáveis são críticos
// 2. O número "1" é um número mágico
// 3. O else é desnecessário

function calc(l, u) {
  if (u.a) {
    return l.filter(i => i.s === 1); // 1 = ativo
  } else {
    return l;
  }
}

// Exemplo de uso:
const lista = [
  { nome: "Ana", s: 1 },
  { nome: "Bruno", s: 0 },
  { nome: "Carla", s: 1 }
];
const utilizador = { a: true };
console.log("Exercício 1 - Original:", calc(lista, utilizador));






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





// ============================================================
// EXERCÍCIO 3: Aplicar SRP - Single Responsibility
// ============================================================
// Esta classe viola o princípio SRP - tem muitas responsabilidades!
// Separa em classes/módulos especializados

class GestorTickets {
  constructor() {
    this.tickets = [];
  }

  // Responsabilidade 1: Lógica de negócio
  criarTicket(titulo, descricao, prioridade) {
    const ticket = {
      id: Date.now(),
      titulo: titulo,
      descricao: descricao,
      prioridade: prioridade,
      estado: "aberto",
      dataCriacao: new Date()
    };
    this.tickets.push(ticket);
    return ticket;
  }

  validarTicket(ticket) {
    if (!ticket.titulo || ticket.titulo.length < 5) {
      return { valido: false, erro: "Título muito curto" };
    }
    if (!ticket.prioridade || !["baixa", "media", "alta"].includes(ticket.prioridade)) {
      return { valido: false, erro: "Prioridade inválida" };
    }
    return { valido: true };
  }

  // Responsabilidade 2: Persistência (simulada)
  guardarNaBaseDados(ticket) {
    // Simular guardar em base de dados
    console.log(`[BD] Guardando ticket ${ticket.id}...`);
    // INSERT INTO tickets VALUES (...)
    return true;
  }

  obterTodosTickets() {
    // SELECT * FROM tickets
    return this.tickets;
  }

  // Responsabilidade 3: Notificações
  enviarNotificacaoEmail(ticket, destinatario) {
    console.log(`[EMAIL] Enviando para ${destinatario}...`);
    console.log(`Assunto: Novo ticket - ${ticket.titulo}`);
    // smtp.send(email)
    return true;
  }

  // Responsabilidade 4: Relatórios
  gerarRelatorioHTML(tickets) {
    let html = "<html><body><h1>Relatório de Tickets</h1><ul>";
    for (let t of tickets) {
      html += `<li>${t.titulo} - ${t.estado}</li>`;
    }
    html += "</ul></body></html>";
    return html;
  }

  exportarParaCSV(tickets) {
    let csv = "id,titulo,estado,prioridade\n";
    for (let t of tickets) {
      csv += `${t.id},${t.titulo},${t.estado},${t.prioridade}\n`;
    }
    return csv;
  }
}

// Exemplo de uso:
const gestor = new GestorTickets();
const novoTicket = gestor.criarTicket("Bug no login", "Utilizadores não conseguem entrar", "alta");
console.log("Exercício 3 - Ticket criado:", novoTicket);




// ============================================================
// EXERCÍCIO 4: If/Else Aninhados + Early Return
// ============================================================
// A "pirâmide da morte" - muitos if aninhados

function processarCompra(user, produto, pagamento) {
  let resultado;

  if (user) {
    if (user.ativo) {
      if (user.temPermissaoCompra) {
        if (produto) {
          if (produto.emStock) {
            if (produto.quantidade > 0) {
              if (pagamento) {
                if (pagamento.valido) {
                  if (pagamento.valor >= produto.preco) {
                    resultado = {
                      sucesso: true,
                      mensagem: "Compra realizada!"
                    };
                  } else {
                    resultado = { sucesso: false, erro: "Valor insuficiente" };
                  }
                } else {
                  resultado = { sucesso: false, erro: "Pagamento inválido" };
                }
              } else {
                resultado = { sucesso: false, erro: "Pagamento não fornecido" };
              }
            } else {
              resultado = { sucesso: false, erro: "Quantidade zero" };
            }
          } else {
            resultado = { sucesso: false, erro: "Produto sem stock" };
          }
        } else {
          resultado = { sucesso: false, erro: "Produto não encontrado" };
        }
      } else {
        resultado = { sucesso: false, erro: "Sem permissão de compra" };
      }
    } else {
      resultado = { sucesso: false, erro: "Utilizador inativo" };
    }
  } else {
    resultado = { sucesso: false, erro: "Utilizador não encontrado" };
  }

  return resultado;
}

// Exemplo de uso:
const userTeste = { ativo: true, temPermissaoCompra: true };
const produtoTeste = { nome: "Laptop", preco: 1000, emStock: true, quantidade: 5 };
const pagamentoTeste = { valido: true, valor: 1000 };
console.log("Exercício 4 - Original:", processarCompra(userTeste, produtoTeste, pagamentoTeste));



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
