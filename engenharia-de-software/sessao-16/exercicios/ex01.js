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

const listaRefatorada = [
{ nome: "Ana", status: 1 },
{ nome: "Bruno", status: 0 },
{ nome: "Carla", status: 1 }
];

const utilizadorRefatorado = { ativo: true };
const STATUS_ATIVO = 1;

function filtrarAtivos(lista, utilizador) {
  if (!utilizador.ativo) {
    return lista;
  }
  return lista.filter(item => item.status === STATUS_ATIVO);
}

// Exemplo de uso:
console.log("Exercício 1 - Refatorado:", filtrarAtivos(listaRefatorada, utilizadorRefatorado));
