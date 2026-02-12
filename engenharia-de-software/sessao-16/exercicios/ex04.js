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

function processarCompraRefatorada(user, produto, pagamento) {
  if (!user) {
	return { sucesso: false, erro: "Utilizador não encontrado" };
  }
  if (!user.ativo) {
	return { sucesso: false, erro: "Utilizador inativo" };
  }
  if (!user.temPermissaoCompra) {
	return { sucesso: false, erro: "Sem permissão de compra" };
  }
  if (!produto) {
	return { sucesso: false, erro: "Produto não encontrado" };
  }
  if (!produto.emStock) {
	return { sucesso: false, erro: "Produto sem stock" };
  }
  if (produto.quantidade <= 0) {
	return { sucesso: false, erro: "Quantidade zero" };
  }
  if (!pagamento) {
	return { sucesso: false, erro: "Pagamento não fornecido" };
  }
  if (!pagamento.valido) {
	return { sucesso: false, erro: "Pagamento inválido" };
  }
  if (pagamento.valor < produto.preco) {
	return { sucesso: false, erro: "Valor insuficiente" };
  }

  return {
	sucesso: true,
	mensagem: "Compra realizada!"
  };
}

// Exemplo de uso:
console.log("Exercício 4 - Refatorado:", processarCompraRefatorada(userTeste, produtoTeste, pagamentoTeste));
