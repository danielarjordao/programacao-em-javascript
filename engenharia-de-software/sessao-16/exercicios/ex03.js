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


// Refatoração: separar responsabilidades em classes/módulos

class GestorTicketsRefatorado {
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
}

class gestorPersistencia {
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
}

class gestorNotificacoes {
  // Responsabilidade 3: Notificações
  enviarNotificacaoEmail(ticket, destinatario) {
    console.log(`[EMAIL] Enviando para ${destinatario}...`);
    console.log(`Assunto: Novo ticket - ${ticket.titulo}`);
    // smtp.send(email)
    return true;
  }
}

class gestorRelatorios {
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
const gestorRefatorado = new GestorTicketsRefatorado();
const novoTicketRefatorado = gestorRefatorado.criarTicket("Bug no login", "Utilizadores não conseguem entrar", "alta");
console.log("Exercício 3 - Ticket criado (refatorado):", novoTicketRefatorado);
